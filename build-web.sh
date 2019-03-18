#!/bin/sh
cd $TRAVIS_BUILD_DIR/web
yarn && yarn build && yarn test:coverage && yarn coverage
