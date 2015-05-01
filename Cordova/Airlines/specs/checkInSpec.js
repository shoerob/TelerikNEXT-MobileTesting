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
            mytripsButton:{'tagName':'a', 'index':0},
        },
        myTripsScreen: {
            bostontrip:{'xpath':'//*[@id="1111"]'},
        },
        checkInScreen: {
            checkin:{'tagName':'a', 'index':10},    
        },
        boardingPassScreen: {
            passenger:{'id':'boardingpass-passenger'},
            flight:{'id':'boardingpass-flight'},
            departure:{'id':'boardingpass-depart'},
            gate:{'id':'boardingpass-gate'},
            seat:{'id':'boardingpass-seat'},    
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
        // This will open my trips section and will return error if it's not existing/visible
        "Open My Trips":{
            'default':[
                web.click(queries.menuScreen.mytripsButton)
            ]
        },
        "Open SEA to BOS trip":{
            'default':[
                web.click(queries.myTripsScreen.bostontrip),
                web.wait(5000)
            ]
        },
        "Check In":{
            'default':[
                web.click(queries.checkInScreen.checkin),
                web.wait(5000)
            ]
        },
        // Verify the boarding pass after 'check in'
        "Verify boarding pass": {
            'default': [
                web.getTextContent(queries.boardingPassScreen.passenger, function(response){
                    assert(response).equals("Jaxon Daniels"); }),
                web.getTextContent(queries.boardingPassScreen.flight, function(response){
                    assert(response).equals("111:SEA to BOS"); }),
                web.getTextContent(queries.boardingPassScreen.departure, function(response){
                    assert(response).equals("5:00PM"); }),
                web.getTextContent(queries.boardingPassScreen.gate, function(response){
                    assert(response).equals("C10"); }),
                web.getTextContent(queries.boardingPassScreen.seat, function(response){
                    assert(response).equals("5A"); })
            ]
        },
        // Return to the main menu
        "Go back to home screen": {
            'default': [
                web.click(queries.backbutton),
                web.wait(5000)
            ]
        }
    };

    /**
     * Tests
     * These are the tests that will be performed against the application.
     */
    describe("Checkin Tests", function(){
        // Verify checking in works
        test("Open my trips and verify contents", function() {
            step("Launch application");
            step("Login to application");
            step("Open My Trips");
            step("Open SEA to BOS trip");
            step("Check In");
            step("Verify boarding pass");
            step("Go back to home screen");
        });
    }, stepRepository);
});