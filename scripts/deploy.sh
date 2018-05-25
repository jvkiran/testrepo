#!/usr/bin/env bash

set -e;

AWS_S3_BUCKET="oceanprotocol.com"
AWS_S3_BUCKET_BETA="beta.oceanprotocol.com"

function s3sync {
    # long caching for everything, except html & pdf files
    aws s3 sync ./build s3://"$1" --exclude "*.html" --exclude "*.pdf" --cache-control max-age=31536000,public --delete --acl public-read

    # no caching for html & pdf files
    aws s3 sync ./build s3://"$1" --exclude "*" --include "*.html" --include "*.pdf" --cache-control max-age=0,no-cache,no-store,must-revalidate --delete --acl public-read
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

else
    echo "---------------------------------------------"
    echo "      ✓ nothing to deploy "
    echo "---------------------------------------------"
fi;

echo "---------------------------------------------"
echo "         ✓ done deployment "
echo "---------------------------------------------"

exit;
