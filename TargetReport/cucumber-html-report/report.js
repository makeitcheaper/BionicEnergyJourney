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
  "duration": 8029579400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 802691300,
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
  "duration": 21859159600,
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
  "duration": 243818800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2102138300,
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
  "duration": 203732200,
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
  "duration": 239525400,
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
  "duration": 1318101300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2196943500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1849313300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1885537000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1487936400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22104846300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8131084900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8537802100,
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
  "duration": 8107533900,
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
  "duration": 104793400,
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
  "duration": 96545300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4313704000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2032738100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 657729400,
  "status": "passed"
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
  "duration": 7507777200,
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
  "duration": 138469700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 613268300,
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
  "duration": 940772400,
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
  "duration": 736474700,
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
  "duration": 1092675700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1945384900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1698069300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1968219800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1936539400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22143159500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8110171600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8385005000,
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
  "duration": 8110401600,
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
  "duration": 102610700,
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
  "duration": 102227100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4902354700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2007107800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 750004100,
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
  "name": "Verify bionic electric journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no",
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
formatter.step({
  "line": 70,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;",
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
      "line": 72,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;1"
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
      "line": 73,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 73,
  "name": "Verify bionic electric journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;2",
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
formatter.step({
  "line": 70,
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
  "duration": 9057708600,
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
  "duration": 93076200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 579140000,
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
  "duration": 1205780300,
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
  "duration": 759855900,
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
  "duration": 1091991600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1846918300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1873797600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 2013884700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1105968000,
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
  "duration": 399569700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 88488500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 579403500,
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
  "duration": 135805400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 573635900,
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
  "duration": 84579300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 789602700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22114219400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8112119500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8379293800,
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
  "duration": 8106311000,
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
  "duration": 92753700,
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
  "duration": 91356800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4268965000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2009590900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 760700800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "Verify bionic electric journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 104,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;",
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
      "line": 105,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;1"
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
      "line": 106,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 106,
  "name": "Verify bionic electric journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 88,
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
  "line": 89,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
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
  "duration": 7329296100,
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
  "duration": 125380200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 681832700,
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
  "duration": 921697400,
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
  "duration": 101036300,
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
  "duration": 1399341800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1732007700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1648639300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1925685200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1095591900,
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
  "duration": 424249400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 88778100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 576340700,
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
  "duration": 133827000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 576275500,
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
  "duration": 89274000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 848166900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22114449900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8115429400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8365624300,
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
  "duration": 8099874800,
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
  "duration": 111739800,
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
  "duration": 110961100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4966575800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2010096300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 770421000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 110,
  "name": "Verify bionic electric journey manual address",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 109,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I enter Street Address one \"\u003cStreet-Address-1\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I enter Street Address two \"\u003cStreet-Address-2\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I enter Town \"\u003cTown\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I enter County \"\u003cCounty\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 139,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;",
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
      "line": 140,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;1"
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
      "line": 141,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 141,
  "name": "Verify bionic electric journey manual address",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 109,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I enter Business Name \"Jeevat LTD\" on manual address page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I enter Street Address one \"Test Street\" on manual address page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I enter Street Address two \"Test Street 2\" on manual address page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I enter Town \"Hackney\" on manual address page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I enter County \"Greater London\" on manual address page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 123,
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
  "line": 124,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
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
  "duration": 7661933600,
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
  "duration": 128680100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 619207100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Enter_Manually_link()"
});
formatter.result({
  "duration": 1491328000,
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
  "duration": 177636300,
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
  "duration": 86198600,
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
  "duration": 83808500,
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
  "duration": 87026400,
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
  "duration": 86264400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_on_manual_address_page()"
});
formatter.result({
  "duration": 116252200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.manualAddressPageClickElectricity()"
});
formatter.result({
  "duration": 1269232800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1082234100,
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
  "duration": 397780600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 86312900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 566674600,
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
  "duration": 186668600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 565945700,
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
  "duration": 83941700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 695129700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22117825200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8102628700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8358602800,
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
  "duration": 8084713300,
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
  "duration": 92782700,
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
  "duration": 89583500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4115627600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2009642600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 761761200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 219,
  "name": "Verify dual fuel journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 218,
      "name": "@dual_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 222,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 245,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 246,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;",
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
      "line": 247,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;1"
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
      "line": 248,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 248,
  "name": "Verify dual fuel journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 218,
      "name": "@dual_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 222,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 230,
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
  "line": 231,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 245,
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
  "duration": 7186959800,
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
  "duration": 115414900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1460103800,
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
  "duration": 243628300,
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
  "duration": 96906800,
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
  "duration": 1478578000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1767664600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2241599700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 1932278900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1100739500,
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
  "duration": 456981100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 102880000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 588162700,
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
  "duration": 170903900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 573165300,
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
  "duration": 99827100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 800281600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22123760600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8115783200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8391294000,
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
  "duration": 8122390900,
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
  "duration": 171540500,
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
  "duration": 144494100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4530710400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4015590800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 706502700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 251,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 250,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 252,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 253,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 254,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 270,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 271,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;",
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
      "line": 272,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;1"
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
      "line": 273,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;2"
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
      "line": 274,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 273,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 250,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 252,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 253,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 254,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 270,
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
  "duration": 7295847700,
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
  "duration": 192368700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 614705700,
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
  "duration": 1341793500,
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
  "duration": 692035700,
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
  "duration": 1069556300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1463062900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2137223400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2135814500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1371420600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22105660800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8112192300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8367314400,
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
  "duration": 8099561800,
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
  "duration": 107453200,
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
  "duration": 111917700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5968635000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4022091200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 688465400,
  "status": "passed"
});
formatter.scenario({
  "line": 274,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 250,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 252,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 253,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 254,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 270,
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
  "duration": 7594867300,
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
  "duration": 97799100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1399343300,
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
  "duration": 84587200,
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
  "duration": 79967300,
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
  "duration": 1274606500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1959189800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2262521100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1974504800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1663992400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22093867800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8112886900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8356331000,
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
  "duration": 8107460400,
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
  "duration": 93900200,
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
  "duration": 90512300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 3984189500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4025344300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 734330400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 277,
  "name": "Verify DualFuel journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 276,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 278,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 303,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 304,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;",
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
      "line": 305,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;1"
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
      "line": 306,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 306,
  "name": "Verify DualFuel journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 276,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 278,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 288,
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
  "line": 289,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 303,
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
  "duration": 8601191800,
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
  "duration": 104217700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 572530800,
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
  "duration": 1218975000,
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
  "duration": 780978700,
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
  "duration": 1092700300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1562814600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2168582000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1990949400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1102723600,
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
  "duration": 369794400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 79094800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 575729500,
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
  "duration": 122181900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 600480800,
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
  "duration": 79314500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 653412500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22129595700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8099685200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8388960800,
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
  "duration": 8121683300,
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
  "duration": 94014900,
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
  "duration": 88298700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4245350900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4007939500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 753433900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 309,
  "name": "Verify DualFuel journey YES Industry Consent - NO Meter and No Supplier Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 308,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Meter_No_Supplier_found"
    }
  ]
});
formatter.step({
  "line": 310,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 311,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 331,
  "name": "",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;",
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
        "usage"
      ],
      "line": 332,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;1"
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com",
        "HA8 5BD",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555",
        "57 Axholme Avenue",
        "250"
      ],
      "line": 333,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 333,
  "name": "Verify DualFuel journey YES Industry Consent - NO Meter and No Supplier Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 308,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Meter_No_Supplier_found"
    }
  ]
});
formatter.step({
  "line": 310,
  "name": "I navigate to bionic energy journey landing page with \"https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 311,
  "name": "I enter postcode \"HA8 5BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I enter \"57 Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "click on the address contains \"57 Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
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
  "duration": 8819429800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA8 5BD",
      "offset": 18
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_postcode(String)"
});
formatter.result({
  "duration": 107380600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1636130200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "57 Axholme Avenue",
      "offset": 9
    }
  ],
  "location": "energyJourneyBionicStepDef.i_enter_on_search_field(String)"
});
formatter.result({
  "duration": 122199800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "57 Axholme Avenue",
      "offset": 31
    }
  ],
  "location": "energyJourneyBionicStepDef.click_on_the_address_contains(String)"
});
formatter.result({
  "duration": 82992200,
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
  "duration": 1172134000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1492450300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2192167700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2276762300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 77468900,
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
  "duration": 86196700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1062646400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22101942600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8123107100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8401233300,
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
  "duration": 8109051000,
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
  "duration": 91946900,
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
  "duration": 95589600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 6129430400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4015693500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 714742900,
  "status": "passed"
});
});