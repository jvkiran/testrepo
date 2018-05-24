#!/usr/bin/env bash

set -e;

react-scripts build && \
    cp ./src/lib/whitepaper/whitepaper.pdf ./build/tech-whitepaper.pdf && \
    cp ./node_modules/cookies-eu-banner/dist/cookies-eu-banner.min.js ./build/cookies-eu-banner.min.js

exit;
