# com.telerik.mobiletesting

	This plugin provides support for Telerik Mobile Testing. Note that this plugin should only be used
	in debug builds, and should NOT be deployed with production apps.

	Telerik Mobile Testing is available as part of the Telerik Platform. You can find more information
	at: http://platform.telerik.com

## Installation

	cordova plugin add com.telerik.mobiletesting --variable IOS_APP_URL=myAppUrl

	IOS_APP_URL is the URL to be used with the ios.launch(url) function in Telerik Mobile Testing. Specify
	a new URL rather than an existing one, as the plugin will append a new URL to your app's plist.

	For more information on configuring your app: http://docs.telerik.com/platform/mobile-testing/overview

### Supported Platforms

- Android
- iOS
- WP8

### iOS Testing

	// In Telerik Mobile Testing, specify the application URL setup via the plugin
	ios.launch('myAppUrl') 

### Android Testing

	// In Telerik Mobile Testing, specify the package name of the Android application
	android.launch('com.mycompany.appname')

### Windows Phone 8 Testing

	// In Telerik Mobile Testing, specify the URI of the Windows Phone application
	wp8.launch('myappuri') 
