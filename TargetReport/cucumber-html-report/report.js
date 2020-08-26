$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/energyJourney-bionic.feature");
formatter.feature({
  "name": "Verify UKP site scenarios",
  "description": "  As a user\n  I navigate to UKP QA site\n  So that regression test pass successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify bionic electric journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "postcode",
        "search-address",
        "business-name",
        "full-name",
        "email",
        "phone"
      ]
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
        "KT64DU",
        "Fredericks",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
        "HA85HF",
        "49",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify bionic electric journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"KT64DU\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Fredericks\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the address contains \"Fredericks\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Business Name \"Jeevat LTD\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify bionic electric journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"HA85HF\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"49\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the address contains \"49\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Business Name \"Jeevat LTD\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@elec_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "postcode",
        "search-address",
        "business-name",
        "full-name",
        "email",
        "phone"
      ]
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com",
        "NR242QF",
        "Church House",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    },
    {
      "cells": [
        "https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/",
        "NR242QF",
        "Church House",
        "Testing 41",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@elec_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"NR242QF\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Church House\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the address contains \"Church House\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Business Name \"Jeevat LTD\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@elec_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"NR242QF\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"postcode-input-top\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54766}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 84.0.4147.135, webStorageEnabled: true}\nSession ID: e5d9049d10bb6841c761145d15304e5b\n*** Element info: {Using\u003did, value\u003dpostcode-input-top}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyLandingPage.enterPostcode(bionicEnergyJourneyLandingPage.java:21)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.i_enter_postcode(energyJourneyBionicStepDef.java:56)\r\n\tat ✽.I enter postcode \"NR242QF\"(src/test/resources/energyJourney-bionic.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"Church House\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on the address contains \"Church House\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Business Name \"Testing 41\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gas_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Gas button",
  "keyword": "And "
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to gas lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "postcode",
        "search-address",
        "business-name",
        "full-name",
        "email",
        "phone"
      ]
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com",
        "SL6 1PE",
        "7 North Road",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    },
    {
      "cells": [
        "https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/",
        "SL6 1PE",
        "7 North Road",
        "Testing 42",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gas_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"SL6 1PE\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"7 North Road\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the address contains \"7 North Road\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Business Name \"Jeevat LTD\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Gas button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickGasButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to gas lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.gasLeadScheduleConfimration()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gas_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"SL6 1PE\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"7 North Road\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the address contains \"7 North Road\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Business Name \"Testing 42\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Gas button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickGasButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to gas lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.gasLeadScheduleConfimration()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dual_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "postcode",
        "search-address",
        "business-name",
        "full-name",
        "email",
        "phone"
      ]
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com",
        "NR24 2QF",
        "Church House",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    },
    {
      "cells": [
        "https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/",
        "NR24 2QF",
        "Church House",
        "Testing 43",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dual_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"NR24 2QF\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Church House\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the address contains \"Church House\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Business Name \"Jeevat LTD\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dual_multimeter"
    }
  ]
});
formatter.step({
  "name": "I navigate to bionic energy journey landing page with \"https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter postcode \"NR24 2QF\"",
  "keyword": "When "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Church House\" on search field",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the address contains \"Church House\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Business Name \"Testing 43\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter full name \"Ravi Ahuja\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"test@test.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter phone number \"07555555555\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule call button",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "status": "passed"
});
});