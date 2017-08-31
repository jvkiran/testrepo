#!/usr/bin/env bash

aws s3 sync . s3://ocean.exchange --delete --acl public-read --exclude '.' --include 'index.html' --include 'assets'