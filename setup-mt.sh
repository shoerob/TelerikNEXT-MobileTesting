#!/bin/bash

# emulator -avd TelerikNEXT

# Install Mobile Testing to iOS Simulator
pushd Telerik\ Mobile\ Testing/extensions/iOS/MobileTestingSimulator
./install_xcode6.command 
ios-sim launch Telerik\ Mobile\ Testing/extensions/iOS/MobileTestingSimulator/0C878739-EC28-403E-A8BD-B1AEFB805E7F/MobileTesting.app/ --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-6 --exit
popd

# Install Mobile Testing to Android Emulator
adb
adb install Telerik\ Mobile\ Testing/extensions/Android/MobileTesting.apk
adb shell am start -n com.telerik.testing.executionagent/com.telerik.testing.executionagent.MainActivity
