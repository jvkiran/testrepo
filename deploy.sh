#!/usr/bin/env bash

npm run build && \
aws s3 sync ./build s3://oceanprotocol.com --delete --acl public-read