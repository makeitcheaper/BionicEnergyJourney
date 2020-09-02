$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("energyJourney-bionic.feature");
formatter.feature({
  "line": 1,
  "name": "Verify UKP site scenarios",
  "description": "As a user\r\nI navigate to UKP QA site\r\nSo that regression test pass successfully",
  "id": "verify-ukp-site-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Wake the application up",
  "description": "",
  "id": "verify-ukp-site-scenarios;wake-the-application-up",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;wake-the-application-up;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 11,
      "id": "verify-ukp-site-scenarios;wake-the-application-up;;1"
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com"
      ],
      "line": 12,
      "id": "verify-ukp-site-scenarios;wake-the-application-up;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Wake the application up",
  "description": "",
  "id": "verify-ukp-site-scenarios;wake-the-application-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 13382136400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 727320900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;",
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
      ],
      "line": 37,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;1"
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
      ],
      "line": 38,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2"
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
      ],
      "line": 39,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 11621365300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KT64DU",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 98342200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2044064400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fredericks",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 135695900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fredericks",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 2271843700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeevat LTD",
      "offset": 23
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "duration": 1095889200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1938488800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1768968800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2433449100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1789043200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22328247900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8015671300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8381537900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ravi Ahuja",
      "offset": 19
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "duration": 3125363900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.test",
      "offset": 23
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "duration": 118595400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07555555555",
      "offset": 22
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "duration": 105886200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 8581212600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2008058000,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat junit.framework.TestCase.assertTrue(TestCase.java:200)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyConfirmationPage.electricityConfimationPage(bionicEnergyJourneyConfirmationPage.java:14)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page(energyJourneyBionicStepDef.java:259)\r\n\tat ✽.Then I navigate to electric lead schedule page(energyJourney-bionic.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 11780932200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA85HF",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 94716400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1940873600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "49",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 69098700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "49",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 1354572400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeevat LTD",
      "offset": 23
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "duration": 1103691200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1979703000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1611666300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1959504400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1885566700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22311954800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8009763200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8374414900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ravi Ahuja",
      "offset": 19
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_full_name(String)"
});
formatter.result({
  "duration": 3109067300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.test",
      "offset": 23
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_email_address(String)"
});
formatter.result({
  "duration": 127356900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07555555555",
      "offset": 22
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_phone_number(String)"
});
formatter.result({
  "duration": 109872100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4959613600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2017581100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 723915500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 40,
      "value": "#     | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
    }
  ],
  "line": 44,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;",
  "rows": [
    {
      "cells": [
        "url",
        "postcode",
        "business-name",
        "full-name",
        "email",
        "phone",
        "search-address",
        "mpan1",
        "mpan2",
        "mpan3",
        "mpan4",
        "mpan5",
        "mpan6",
        "electricity-supplier",
        "usage"
      ],
      "line": 71,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;1"
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
        "KT64DU",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555",
        "Fredericks",
        "04",
        "807",
        "205",
        "10",
        "12863966",
        "474",
        "British Gas",
        "250"
      ],
      "line": 72,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter MPAN numbere \"04\" \"807\" \"205\" \"10\" \"12863966\" \"474\"",
  "matchedColumns": [
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 11581949400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KT64DU",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 106853900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1441875300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fredericks",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 181946600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fredericks",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 2036807700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeevat LTD",
      "offset": 23
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name(String)"
});
formatter.result({
  "duration": 1098001400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1992700700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1624391400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 1957656900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1102561300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04",
      "offset": 22
    },
    {
      "val": "807",
      "offset": 27
    },
    {
      "val": "205",
      "offset": 33
    },
    {
      "val": "10",
      "offset": 39
    },
    {
      "val": "12863966",
      "offset": 44
    },
    {
      "val": "474",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_MPAN_numbere(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 452123500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 85961200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 667906400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Gas",
      "offset": 19
    }
  ],
  "location": "energyJourneyBionicStepDef.i_select_supplier(String)"
});
formatter.result({
  "duration": 147648300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 590934900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 19
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_kWh_usage(String)"
});
formatter.result({
  "duration": 84889500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1752095300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
