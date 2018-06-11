#!/usr/bin/env bash

set -e;

react-scripts build && \
    cp ./src/lib/whitepaper/whitepaper.pdf ./build/tech-whitepaper.pdf && \
    cp ./node_modules/cookies-eu-banner/src/cookies-eu-banner.js ./build/cookies-eu-banner.min.js

exit;
