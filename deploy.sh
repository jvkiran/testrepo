#!/usr/bin/env bash

aws s3 sync . s3://oceanprotocol.com --delete --acl public-read --exclude '*' --include 'index.html' --include 'assets/*'