#!/usr/bin/env bash

set -e;

cp ./node_modules/cookies-eu-banner/dist/cookies-eu-banner.min.js ./public/cookies-eu-banner.min.js && \

react-scripts build && \

cp ./src/lib/whitepaper/whitepaper.pdf ./build/tech-whitepaper.pdf

exit;
