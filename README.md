# TelerikNEXT-MobileTesting
Samples from the Mobile Testing session at TelerikNEXT.

# Prerequesites
Install the AppBuilder CLI.

sudo npm install -g appbuilder

Install Telerik Mobile Testing available on the downloads page of http://platform.telerik.com. Place it in the root of this repository to be able to use the setup-mt.sh script with it.

https://github.com/phonegap/ios-sim

# Scripts

## setup-mt.sh
This script will install the Mobile Testing Companion application to the iOS and Android emulators. Note: Have the Android emulator you want to use launched in advance of running this script.

## setup-appbuilder.sh
This script will build the Friends and Airlines apps using the AppBuilder CLI, and deploy them to iOS and Android emulators. Note: You will need to have a Telerik Platform account, and have an iOS provisioning profile and certificate setup. Use the setup-cordova.sh script instead if you prefer to build locally on your own machine.

## setup-cordova.sh
This script will build the Friends and Airlines apps using the Cordova CLI, and deploy them to the iOS and Android emulators. Note: You will need to have an iOS provisioning profile and certificate setup on your local machine.
