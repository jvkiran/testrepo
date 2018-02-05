#!/usr/bin/env bash

set -e;

##
## check for pull request against master
##
if [ "$TRAVIS_PULL_REQUEST" != "false" ] && [ "$TRAVIS_BRANCH" == "master" ]; then

    aws s3 sync ./build s3://beta.oceanprotocol.com --delete --acl public-read

##
## check for master push which is no pull request
##
elif [ "$TRAVIS_BRANCH" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

    aws s3 sync ./build s3://oceanprotocol.com --delete --acl public-read

else
    echo "---------------------------------------------"
    echo "      ✓ nothing to deploy "
    echo "---------------------------------------------"
fi;

echo "---------------------------------------------"
echo "         ✓ done deployment "
echo "---------------------------------------------"

exit;
