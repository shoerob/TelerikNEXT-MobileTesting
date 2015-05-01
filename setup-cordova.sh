#!/bin/bash

# Install Airlines in iOS & Android Emulators
pushd Cordova/Airlines/app
cordova emulate android
cordova emulate ios
popd

# Install Friends in iOS & Android Emulators
pushd Cordova/Friends/app
cordova emulate android
cordova emulate ios
popd
