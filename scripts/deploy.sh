#!/usr/bin/env bash

set -e;

AWS_S3_BUCKET="oceanprotocol.com"
AWS_S3_BUCKET_BETA="beta.oceanprotocol.com"
SITEMAP_URL="https%3A%2F%oceanprotocol.com%2Fsitemap.xml"

function s3sync {
  aws s3 sync ./build s3://"$1" \
    --cache-control public,max-age=31536000,immutable \
    --delete \
    --acl public-read

  aws s3 sync ./build s3://"$1" \
    --exclude "*" \
    --include "*.html" \
    --include "*.xml" \
    --include "*.pdf" \
    --include "*.json" \
    --include "service-worker.js" \
    --include "sitemap.xml" \
    --include "robots.txt" \
    --include "twitter_card.png" \
    --cache-control public,max-age=0,must-revalidate \
    --delete \
    --acl public-read
}

##
## check for pull request against master
##
if [ "$TRAVIS_PULL_REQUEST" != "false" ] && [ "$TRAVIS_BRANCH" == "master" ]; then

    s3sync $AWS_S3_BUCKET_BETA

##
## check for master push which is no pull request
##
elif [ "$TRAVIS_BRANCH" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

    s3sync $AWS_S3_BUCKET

    # purge full Cloudflare cache
    curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE/purge_cache" \
    -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
    -H "X-Auth-Key: $CLOUDFLARE_KEY" \
    -H "Content-Type: application/json" \
    --data '{"purge_everything":true}'

    # ping search engines
    # returns: HTTP_STATUSCODE URL
    curl -sL -w "%{http_code} %{url_effective}\\n" \
    "http://www.google.com/webmasters/tools/ping?sitemap=$SITEMAP_URL" -o /dev/null \
    "http://www.bing.com/webmaster/ping.aspx?siteMap=$SITEMAP_URL" -o /dev/null

else
    echo "---------------------------------------------"
    echo "      ✓ nothing to deploy "
    echo "---------------------------------------------"
fi;

echo "---------------------------------------------"
echo "         ✓ done deployment "
echo "---------------------------------------------"

exit;
