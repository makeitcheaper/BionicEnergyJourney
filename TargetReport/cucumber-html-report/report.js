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
  "duration": 12888146000,
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
  "duration": 11503007600,
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
  "duration": 109950400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2373058200,
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
  "duration": 148275700,
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
  "duration": 1807102900,
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
  "duration": 1109815000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1573732600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1547927100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1836564200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1594702200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22182253100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8008011500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8282145500,
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
  "duration": 3108020100,
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
  "duration": 109390700,
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
  "duration": 99559600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 14303160400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2012136200,
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
  "duration": 13283897600,
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
  "duration": 119097900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2367645700,
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
  "duration": 58021100,
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
  "duration": 1814220300,
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
  "duration": 1093633900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2194216900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1734511300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2400916900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 775634100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1882764900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8007561000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 7759100,
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
  "duration": 134590500,
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
  "duration": 153171100,
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
  "duration": 135408900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5749534400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2007241300,
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
  "duration": 11850245100,
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
  "duration": 99421800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2258612900,
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
  "duration": 137364800,
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
  "duration": 2246971300,
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
  "duration": 1086404900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 5538240600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 4444804200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 8028484700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 267783500,
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
  "duration": 492023200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 81145300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 38064500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027question-supplier\u0027]/div/div/div/div[@class\u003d\u0027radio-btn yes-btn\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-release\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64811}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: dfc5154497915b5f3c7ec36ab4f5bf6f\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027question-supplier\u0027]/div/div/div/div[@class\u003d\u0027radio-btn yes-btn\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyManualInput.clickYesOptionElectricitySupplier(bionicEnergyJourneyManualInput.java:34)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier(energyJourneyBionicStepDef.java:357)\r\n\tat ✽.And I click yes option for electricity supplier(energyJourney-bionic.feature:55)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12517207400,
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
  "duration": 72424000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2242300500,
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
  "duration": 143742700,
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
  "duration": 1629775400,
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
  "duration": 1093903700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2142251200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1764928200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2171152500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 128023400,
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
  "duration": 448061400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 83727000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 16411700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027question-supplier\u0027]/div/div/div/div[@class\u003d\u0027radio-btn yes-btn\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-release\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64942}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: bf94c7b870cbaedb42aa919ec18ce5b7\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027question-supplier\u0027]/div/div/div/div[@class\u003d\u0027radio-btn yes-btn\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyManualInput.clickYesOptionElectricitySupplier(bionicEnergyJourneyManualInput.java:34)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier(energyJourneyBionicStepDef.java:357)\r\n\tat ✽.And I click yes option for electricity supplier(energyJourney-bionic.feature:87)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 16838254000,
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
  "duration": 94988000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1907408100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Enter_Manually_link()"
});
formatter.result({
  "duration": 1667853600,
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
  "duration": 108236300,
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
  "duration": 94534100,
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
  "duration": 102400700,
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
  "duration": 89288500,
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
  "duration": 133792300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_on_manual_address_page()"
});
formatter.result({
  "duration": 719564800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.manualAddressPageClickElectricity()"
});
formatter.result({
  "duration": 2082090300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 116504000,
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
  "duration": 502328500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 95494400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 24062100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027question-supplier\u0027]/div/div/div/div[@class\u003d\u0027radio-btn yes-btn\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-release\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65065}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: a343e98c5ae4019245d011258bdfa1aa\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027question-supplier\u0027]/div/div/div/div[@class\u003d\u0027radio-btn yes-btn\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyManualInput.clickYesOptionElectricitySupplier(bionicEnergyJourneyManualInput.java:34)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier(energyJourneyBionicStepDef.java:357)\r\n\tat ✽.And I click yes option for electricity supplier(energyJourney-bionic.feature:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12005884400,
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
  "duration": 138949700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 3462129000,
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
  "duration": 136699200,
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
  "duration": 8794279100,
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
  "duration": 1016055600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"business-name\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-release\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65157}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 0ec23ee82842508f7ed49eeef968e4cb\n*** Element info: {Using\u003did, value\u003dbusiness-name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyBusinessNamePage.enterBusinessName(bionicEnergyJourneyBusinessNamePage.java:11)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.i_enter_Business_Name(energyJourneyBionicStepDef.java:79)\r\n\tat ✽.And I enter Business Name \"Jeevat LTD\"(energyJourney-bionic.feature:146)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12731035500,
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
  "duration": 138038600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 7354620100,
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
  "duration": 127936600,
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
  "duration": 6040122500,
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
  "duration": 1159055400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1955130100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickGasButton()"
});
formatter.result({
  "duration": 1939933800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2496354500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "duration": 3038317600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027radio-checkbox meter-list__select-all d-none d-md-flex radio-checkbox--default radio-checkbox--xs\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-release\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65255}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 33b72476d2031681031c2b4d03713a0f\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027radio-checkbox meter-list__select-all d-none d-md-flex radio-checkbox--default radio-checkbox--xs\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyIndustryDataPage.clickSelectAllMeterOption(bionicEnergyJourneyIndustryDataPage.java:29)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.i_click_on_Select_all_meters_option(energyJourneyBionicStepDef.java:265)\r\n\tat ✽.And I click on Select all meters option(energyJourney-bionic.feature:174)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.gasLeadScheduleConfimration()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 20987814000,
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
  "duration": 132097600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2314693600,
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
  "duration": 148873400,
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
  "duration": 1959656800,
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
  "duration": 1083108600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 3182849000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 3385230600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 8880033100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Select_all_meters_option()"
});
formatter.result({
  "duration": 3020238400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027radio-checkbox meter-list__select-all d-none d-md-flex radio-checkbox--default radio-checkbox--xs\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-release\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65397}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: ad6724cb9aec03e78dc6a836593760a1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027radio-checkbox meter-list__select-all d-none d-md-flex radio-checkbox--default radio-checkbox--xs\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bionicEnergyJourneyPages.bionicEnergyJourneyIndustryDataPage.clickSelectAllMeterOption(bionicEnergyJourneyIndustryDataPage.java:29)\r\n\tat bionicEnergyJourneyPrototype.energyJourneyBionicStepDef.i_click_on_Select_all_meters_option(energyJourneyBionicStepDef.java:265)\r\n\tat ✽.And I click on Select all meters option(energyJourney-bionic.feature:198)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickOnGetAQuoteForMultipleMeter()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "status": "skipped"
});
});