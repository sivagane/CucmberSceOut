$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jegan/eclipse-workspace/CucmberSceOut/src/test/java/org/features/CucumberSceOut.feature");
formatter.feature({
  "line": 2,
  "name": "To Check the login functionality of Google Application",
  "description": "",
  "id": "to-check-the-login-functionality-of-google-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on create account and selecet myself",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cfirstname\u003e\" , \"\u003clastname\u003e\" , \"\u003cemailid\u003e\" , \"\u003cpassword\u003e\" , \"\u003cconfirmpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks the next button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "emailid",
        "password",
        "confirmpassword"
      ],
      "line": 13,
      "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "siva",
        "ganesh",
        "sivag918@gmail.com",
        "1234",
        "1234"
      ],
      "line": 14,
      "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "Hello",
        "java",
        "Hello@gmail.com",
        "2345",
        "2345"
      ],
      "line": 15,
      "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;;3"
    },
    {
      "cells": [
        "Java",
        "selenium",
        "Java@gmail.com",
        "3456",
        "3456"
      ],
      "line": 16,
      "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on create account and selecet myself",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"siva\" , \"ganesh\" , \"sivag918@gmail.com\" , \"1234\" , \"1234\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks the next button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Login_page()"
});
formatter.result({
  "duration": 13723086601,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_on_create_account_and_selecet_myself()"
});
formatter.result({
  "duration": 4376877100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siva",
      "offset": 17
    },
    {
      "val": "ganesh",
      "offset": 26
    },
    {
      "val": "sivag918@gmail.com",
      "offset": 37
    },
    {
      "val": "1234",
      "offset": 60
    },
    {
      "val": "1234",
      "offset": 69
    }
  ],
  "location": "StepDefinition.user_enters_the_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 2961897800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_next_button()"
});
formatter.result({
  "duration": 227059800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Close_the_browser()"
});
formatter.result({
  "duration": 1038050600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on create account and selecet myself",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"Hello\" , \"java\" , \"Hello@gmail.com\" , \"2345\" , \"2345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks the next button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Login_page()"
});
formatter.result({
  "duration": 11571363000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_on_create_account_and_selecet_myself()"
});
formatter.result({
  "duration": 4337576600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 17
    },
    {
      "val": "java",
      "offset": 27
    },
    {
      "val": "Hello@gmail.com",
      "offset": 36
    },
    {
      "val": "2345",
      "offset": 56
    },
    {
      "val": "2345",
      "offset": 65
    }
  ],
  "location": "StepDefinition.user_enters_the_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 3008811900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_next_button()"
});
formatter.result({
  "duration": 236944400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Close_the_browser()"
});
formatter.result({
  "duration": 889985900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "to-check-the-login-functionality-of-google-application;title-of-your-scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on create account and selecet myself",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"Java\" , \"selenium\" , \"Java@gmail.com\" , \"3456\" , \"3456\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks the next button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Login_page()"
});
formatter.result({
  "duration": 10908377900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_on_create_account_and_selecet_myself()"
});
formatter.result({
  "duration": 4328155301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 17
    },
    {
      "val": "selenium",
      "offset": 26
    },
    {
      "val": "Java@gmail.com",
      "offset": 39
    },
    {
      "val": "3456",
      "offset": 58
    },
    {
      "val": "3456",
      "offset": 67
    }
  ],
  "location": "StepDefinition.user_enters_the_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 2406131200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_next_button()"
});
formatter.result({
  "duration": 227425300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Close_the_browser()"
});
formatter.result({
  "duration": 916821900,
  "status": "passed"
});
});