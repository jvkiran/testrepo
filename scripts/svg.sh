#!/usr/bin/env bash
#
# Generates React components from a folder of SVG assets
# Run in your build process before React kicks in
#
# thanks @kremalicious
# https://github.com/kremalicious/portfolio/blob/master/scripts/svg.sh
#
set -e

SRC='./src/assets'
OUT='./src/components/svg'

SVGO_OPTIONS='{"removeUselessStrokeAndFill": true, "removeAttrs": {"attrs": "(stroke|fill)"}}'

printf "Creating SVG components...\\n\\n"

# Usage: svgr [-d out-dir] [src-dir]
./node_modules/@svgr/cli/bin/svgr \
    --icon \
    --svgo-config "$SVGO_OPTIONS" \
    -d \
    $OUT $SRC

printf "\\n🎉 Successfully created SVG components\\n\\n"
