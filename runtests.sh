#!/bin/bash

# Run friends tests
pushd Cordova/Friends/specs
tmtest
popd

# Run airlines tests
pushd Cordova/Airlines/specs
tmtest
popd