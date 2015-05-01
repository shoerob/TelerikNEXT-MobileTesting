#!/bin/bash

# Install Airlines in iOS & Android Emulators
pushd AppBuilder/Airlines/airlines\ sample\ app
appbuilder emulate ios --certificate 2 --provision 1 --device iPhone-6
appbuilder emulate android
popd

# Install Friends in iOS & Android Emulators
pushd AppBuilder/Friends/Friends\ App
appbuilder emulate ios --certificate 2 --provision 1 --device iPhone-6
appbuilder emulate android
popd
