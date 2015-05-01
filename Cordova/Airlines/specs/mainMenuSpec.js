spec(function(){
    /**
     * Test Configuration
     */
    var configuration = {
        USERNAME: "jaxon.daniels@gmail.com",
        PASSWORD: "P2ssw0rd",

        // NOTE: Update this to the iOS URL of the Friends App
        IOS_URL: 'airlines://',

        // NOTE: Update this to the Android package name of the Friends App
        ANDROID_PACKAGE: 'com.telerik.Airlines',

        // NOTE: Update this to the wp8 URI of thr Friends App
        WP8_URI: 'airlines'
    };

    /**
     * Queries organized by the view structure of the app.
     */
    var queries = {
        backbutton:{'className':'ui-btn-right ui-btn ui-shadow ui-btn-corner-all ui-btn-up-a'},
        loginScreen : {
            usernameInput:  {'tagName': 'input', 'index' : 0},
            passwordInput:  {'tagName': 'input', 'index' : 1}, 
            submitButton: {'tagName': 'input', 'index' : 2},
        },
        menuScreen: {
            title: {'tagName': 'h1'},
            airmiles: {'id':'ffnum'},
            totalmiles: {'id':'miles'},
            priority:{'id':'currentStatus'},
        }
    };

    /**
     * Step Repository
     * These are reusable steps that perform actions in the application under test.
     */
    var stepRepository = {
        'Launch application': {
            'ios': [ 
                ios.launch(configuration.IOS_URL)
            ],
            'android': [
                android.launch(configuration.ANDROID_PACKAGE)
            ],
        },
        'Login to application' : {
           'default': [
                web.setTextContent(queries.loginScreen.usernameInput, configuration.USERNAME),
                web.setTextContent(queries.loginScreen.passwordInput, configuration.PASSWORD),
                web.click(queries.loginScreen.submitButton),
                web.wait(10000),
            ] 
        },
        'Verify title':{
            'default':[
                // Verify that the Main page title is correct
                web.getTextContent(queries.menuScreen.title, function(response){
                    assert(response).equals('Hi Jaxon!');
                })
            ]
        },
        "Verify flight summary":{
            'default':[
                // Assert that the values in the account flight summary are correct
                web.getTextContent(queries.menuScreen.airmiles, function(response){
                    assert(response).equals('12345678');
                }),
                web.getTextContent(queries.menuScreen.totalmiles, function(response){
                    assert(response).equals('55555');
                }),
                web.getTextContent(queries.menuScreen.priority, function(response){
                    assert(response).equals('Diamond');
                })
            ]
        },
    };

    /**
     * Tests
     * These are the tests that will be performed against the application.
     */
    describe("Main Menu Tests", function(){
        // Verify login functionality works
        test("Verify main menu items are spelled correctly", function(){
            step("Launch application");
            step("Login to application");
            step("Verify title");
            step("Verify flight summary");
        });
    }, stepRepository);
});