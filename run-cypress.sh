#!/bin/sh
cd $TRAVIS_BUILD_DIR/web
BROWSER=none nohup yarn start &
yarn wait && yarn cypress
