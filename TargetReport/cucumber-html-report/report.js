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
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;wake-the-application-up;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 10,
      "id": "verify-ukp-site-scenarios;wake-the-application-up;;1"
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com"
      ],
      "line": 11,
      "id": "verify-ukp-site-scenarios;wake-the-application-up;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
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
  "duration": 13535995800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
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
      "line": 35,
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
      "line": 36,
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
      "line": 37,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
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
  "duration": 11465112700,
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
  "duration": 110474600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2120371700,
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
  "duration": 156897400,
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
  "duration": 2420561600,
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
  "duration": 1098520800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2173517900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1592238400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2481213500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 892050300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1990377300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8010216400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 11481400,
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
  "duration": 213042800,
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
  "duration": 252010600,
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
  "duration": 190816100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4265770300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2016127700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
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
  "duration": 11835721000,
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
  "duration": 98673400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 3431860800,
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
  "duration": 62047200,
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
  "duration": 7077449100,
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
  "duration": 1126783500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2268913700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 7413192600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 7087536700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 783316300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1892025000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8006915200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 11932600,
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
  "duration": 165684700,
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
  "duration": 183269900,
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
  "duration": 143172300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4185037100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2014703600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 38,
      "value": "#     | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
    }
  ],
  "line": 42,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
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
      "line": 69,
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
      "line": 70,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 53,
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
  "line": 54,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
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
  "duration": 12026249400,
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
  "duration": 146090900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2032102500,
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
  "duration": 497534700,
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
  "duration": 2135982900,
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
  "duration": 1125562300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 8781014100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2109548400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 2062589800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1114033900,
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
  "duration": 501916000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 113277300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 605460100,
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
  "duration": 170948100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 571799500,
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
  "duration": 78088200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 3074790800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22283026000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8010356500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8582753800,
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
  "duration": 3127998700,
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
  "duration": 121958900,
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
  "duration": 113222900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4216045100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2014229400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "line": 100,
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
      "line": 101,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;1"
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
        "HA85BD",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555",
        "49a Axholme Avenue",
        "04",
        "807",
        "205",
        "10",
        "12863966",
        "474",
        "British Gas",
        "250"
      ],
      "line": 102,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 102,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 85,
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
  "line": 86,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 99,
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
  "duration": 21925344100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA85BD",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 104522400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1680958000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "49a Axholme Avenue",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 241064000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "49a Axholme Avenue",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 1737145300,
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
  "duration": 1093186400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1867221400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1636000400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2218091600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1108919800,
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
  "duration": 489985000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 98192400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 592658700,
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
  "duration": 196596000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 577035700,
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
  "duration": 71084300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 2690362800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22223960300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8014625800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8385848200,
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
  "duration": 3110817200,
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
  "duration": 135308400,
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
  "duration": 118005400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4388279100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2011296000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 106,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter Street Address one \"\u003cStreet-Address-1\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I enter Street Address two \"\u003cStreet-Address-2\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I enter Town \"\u003cTown\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I enter County \"\u003cCounty\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "line": 134,
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
        "phone",
        "Street-Address-1",
        "Street-Address-2",
        "Town",
        "County",
        "mpan1",
        "mpan2",
        "mpan3",
        "mpan4",
        "mpan5",
        "mpan6",
        "electricity-supplier",
        "usage"
      ],
      "line": 135,
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
        "07555555555",
        "Test Street",
        "Test Street 2",
        "Hackney",
        "Greater London",
        "04",
        "807",
        "205",
        "10",
        "12863966",
        "474",
        "British Gas",
        "250"
      ],
      "line": 136,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 136,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter Business Name \"Jeevat LTD\" on manual address page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter Street Address one \"Test Street\" on manual address page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I enter Street Address two \"Test Street 2\" on manual address page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I enter Town \"Hackney\" on manual address page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I enter County \"Greater London\" on manual address page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I enter MPAN numbere \"04\" \"807\" \"205\" \"10\" \"12863966\" \"474\"",
  "matchedColumns": [
    16,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 133,
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
  "duration": 12016220800,
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
  "duration": 113931100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2271254800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Enter_Manually_link()"
});
formatter.result({
  "duration": 733785300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeevat LTD",
      "offset": 23
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_Business_Name_on_manual_address_page(String)"
});
formatter.result({
  "duration": 135575400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Street",
      "offset": 28
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_Street_Address_one_on_manual_address_page(String)"
});
formatter.result({
  "duration": 96406600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Street 2",
      "offset": 28
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_Street_Address_two_on_manual_address_page(String)"
});
formatter.result({
  "duration": 108197500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hackney",
      "offset": 14
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_Town_on_manual_address_page(String)"
});
formatter.result({
  "duration": 86616500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greater London",
      "offset": 16
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_County_on_manual_address_page(String)"
});
formatter.result({
  "duration": 112127800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_on_manual_address_page()"
});
formatter.result({
  "duration": 815871500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.manualAddressPageClickElectricity()"
});
formatter.result({
  "duration": 1510582700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1124016000,
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
  "duration": 829510100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 106372000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 591031700,
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
  "duration": 156258300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 579663900,
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
  "duration": 79582900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1896790300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22180919900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8008689100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8825429700,
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
  "duration": 3117451400,
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
  "duration": 130311500,
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
  "duration": 129181100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 9548047200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2012504300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 140,
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@elec_multimeter"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "line": 157,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;",
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
      "line": 158,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;1"
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
      ],
      "line": 159,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 159,
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@elec_multimeter"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "I enter postcode \"NR242QF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I enter \"Church House\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "click on the address contains \"Church House\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 12077510200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NR242QF",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 111738500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2075868500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Church House",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 132020200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Church House",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 2154724900,
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
  "duration": 1125764800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1781376300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1722283900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 3131636900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "duration": 3598779400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "duration": 598873300,
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
  "duration": 824987900,
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
  "duration": 248903700,
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
  "duration": 220545000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4182615500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2012032200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 160,
      "value": "#      | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                           | NR242QF  | Church House  | Testing 41    | Ravi Ahuja | test@test.test | 07555555555 |"
    }
  ],
  "line": 164,
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 163,
      "name": "@gas_multimeter"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I click on Gas button",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I navigate to gas lead schedule page",
  "keyword": "Then "
});
formatter.examples({
  "line": 181,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;",
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
      "line": 182,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;1"
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
      ],
      "line": 183,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 183,
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 163,
      "name": "@gas_multimeter"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "I enter postcode \"SL6 1PE\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I enter \"7 North Road\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "click on the address contains \"7 North Road\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I click on Gas button",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I navigate to gas lead schedule page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 12042835700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SL6 1PE",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 125007300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1885476500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 North Road",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 163767200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 North Road",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 1381590500,
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
  "duration": 1100121900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2084803400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickGasButton()"
});
formatter.result({
  "duration": 1768532800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2306902900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "duration": 3649016100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "duration": 576412800,
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
  "duration": 1582160100,
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
  "duration": 196371100,
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
  "duration": 237224300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 10578109700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.gasLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4026763600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 184,
      "value": "#      | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                           | SL6 1PE  | 7 North Road   | Testing 42    | Ravi Ahuja | test@test.test | 07555555555 |"
    }
  ],
  "line": 188,
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 187,
      "name": "@dual_multimeter"
    }
  ]
});
formatter.step({
  "line": 189,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.examples({
  "line": 205,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;",
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
      "line": 206,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;1"
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
      ],
      "line": 207,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 207,
  "name": "Verify bionic electric multimeter journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-multimeter-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 187,
      "name": "@dual_multimeter"
    }
  ]
});
formatter.step({
  "line": 189,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "I enter postcode \"NR24 2QF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I enter \"Church House\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "click on the address contains \"Church House\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "I click on Select all meters option",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "I click on get a quote for multiple meters",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 12105407900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NR24 2QF",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 132679100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2130238000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Church House",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 249590600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Church House",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 1775693200,
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
  "duration": 1110905300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2047347700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 10177509200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 3349994800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "duration": 3478135900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "duration": 569484000,
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
  "duration": 873411700,
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
  "duration": 208896000,
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
  "duration": 180036300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4145109400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4011582500,
  "status": "passed"
});
});