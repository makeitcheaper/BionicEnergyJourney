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
      "comments": [
        {
          "line": 12,
          "value": "#    | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison"
      ],
      "line": 13,
      "id": "verify-ukp-site-scenarios;wake-the-application-up;;2"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com"
      ],
      "line": 14,
      "id": "verify-ukp-site-scenarios;wake-the-application-up;;3"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com"
      ],
      "line": 15,
      "id": "verify-ukp-site-scenarios;wake-the-application-up;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#    | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  |"
    }
  ],
  "line": 13,
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
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
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
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9965116400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 723923000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Wake the application up",
  "description": "",
  "id": "verify-ukp-site-scenarios;wake-the-application-up;;3",
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
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com\"",
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
      "val": "https://energy-journey-bionic-staging.makeiteasy.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9061619400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 708754000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Wake the application up",
  "description": "",
  "id": "verify-ukp-site-scenarios;wake-the-application-up;;4",
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
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com\"",
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
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8466303600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 662241000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
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
      "line": 40,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;1"
    },
    {
      "comments": [
        {
          "line": 41,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com               | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
        },
        {
          "line": 42,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r\u003dsuccess_cd",
        "KT64DU",
        "Fredericks",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 43,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2"
    },
    {
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
        "HA85HF",
        "49",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 44,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;3"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/?r\u003dsuccess_cd",
        "KT64DU",
        "Fredericks",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 45,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;4"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
        "HA85HF",
        "49",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 46,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;5"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/?r\u003dsuccess_cd",
        "KT64DU",
        "Fredericks",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 47,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;6"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
        "HA85HF",
        "49",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 48,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 41,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com               | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
    },
    {
      "line": 42,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
    }
  ],
  "line": 43,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r\u003dsuccess_cd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r\u003dsuccess_cd",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8900757000,
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
  "duration": 101645600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 872678800,
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
  "duration": 1150381800,
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
  "duration": 669089800,
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
  "duration": 1092717200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1597587900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2035028300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2511311500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1090890800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1896390900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 2006244800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 5821300,
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
  "duration": 101954900,
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
  "duration": 115459200,
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
  "duration": 99784800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 3982747600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2023795800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 753802200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9158161400,
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
  "duration": 105163800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1889374700,
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
  "duration": 774236900,
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
  "duration": 735934800,
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
  "duration": 1073455900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1580976900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2177454200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2026471700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 6835019300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22099137000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8112605700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 9008311800,
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
  "duration": 2101439500,
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
  "duration": 94889600,
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
  "duration": 90616700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5814610300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2008436400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 694349000,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/?r\u003dsuccess_cd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/?r\u003dsuccess_cd",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10943247700,
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
  "duration": 80450300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 566402500,
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
  "duration": 1300504400,
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
  "duration": 106181900,
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
  "duration": 1110762500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2031578100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1914637300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 3090021600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1095323100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1903516600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 2008697600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 10850200,
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
  "duration": 123423500,
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
  "duration": 120272900,
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
  "duration": 102860500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 6264878000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2007959300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 696778200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9345424100,
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
  "duration": 79616700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 594847000,
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
  "duration": 1254540900,
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
  "duration": 77860400,
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
  "duration": 1211221800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1635490300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2821666200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1919107900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 6913290000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22095046200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8095622200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8471610800,
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
  "duration": 2097343600,
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
  "duration": 88783200,
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
  "duration": 89195800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4544874000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2011920900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 703261800,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/?r\u003dsuccess_cd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/?r\u003dsuccess_cd",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9823085100,
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
  "duration": 80478700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 573057300,
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
  "duration": 1271397200,
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
  "duration": 672537900,
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
  "duration": 1089981400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1508671300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2188163900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2522777900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1077363400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1866992900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 2008223300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 4998800,
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
  "duration": 107014300,
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
  "duration": 127404800,
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
  "duration": 104485500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4333306200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2015403100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 707208200,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify bionic electric journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@elec_journey"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 7940387800,
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
  "duration": 76155000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 575526800,
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
  "duration": 1227958200,
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
  "duration": 1141783300,
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
  "duration": 1071536000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1499228000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1590172000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2033766400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 6780183000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22067353000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8072861100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8669286500,
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
  "duration": 2123587200,
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
  "duration": 92810000,
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
  "duration": 86739100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4464136600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2025269400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 695533200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 49,
      "value": "#     | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
    }
  ],
  "line": 53,
  "name": "Verify bionic electric journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 80,
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
      "line": 81,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;1"
    },
    {
      "comments": [
        {
          "line": 82,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
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
      "line": 83,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;2"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
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
      "line": 84,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;3"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
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
      "line": 85,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 82,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
    }
  ],
  "line": 83,
  "name": "Verify bionic electric journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "line": 65,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9197935000,
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
  "duration": 75177900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1696238300,
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
  "duration": 799733400,
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
  "duration": 3569351400,
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
  "duration": 1074776800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2150529600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2009336000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 2320204800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1089432000,
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
  "duration": 410929800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 66625800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 586315600,
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
  "duration": 297369600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 583018500,
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
  "duration": 82129100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1502237800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22110508400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8099328400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8605480100,
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
  "duration": 2101332900,
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
  "duration": 85489800,
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
  "duration": 89235100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4367326600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2016435300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 683353900,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Verify bionic electric journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "line": 65,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10370178900,
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
  "duration": 78909800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 577710000,
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
  "duration": 796265700,
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
  "duration": 88013600,
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
  "duration": 1153692100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1476663200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2049397900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 2021452800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1078525500,
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
  "duration": 369173100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 75992700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 604770200,
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
  "duration": 176724100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 583364800,
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
  "duration": 76765100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 850819300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22114188600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8104800100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8595871800,
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
  "duration": 2107657200,
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
  "duration": 84632900,
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
  "duration": 92849200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4002460800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2025319300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 700130800,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Verify bionic electric journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-with-industry-consent-no;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@elec_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 64,
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
  "line": 65,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 11260013500,
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
  "duration": 79550200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 563547700,
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
  "duration": 1242217900,
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
  "duration": 1133214300,
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
  "duration": 1095459500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2836982500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1905982100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 2424208500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1084475600,
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
  "duration": 374157500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 59627000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 578094800,
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
  "duration": 116498300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 604499600,
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
  "duration": 80395500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1570626300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22075647100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8093505100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8365478400,
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
  "duration": 2095453500,
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
  "duration": 96219000,
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
  "duration": 96756600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5171015600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2025646900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 718743100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Verify bionic electric journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 116,
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
      "line": 117,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;1"
    },
    {
      "comments": [
        {
          "line": 118,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
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
      "line": 119,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;2"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
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
      "line": 120,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;3"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
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
      "line": 121,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 118,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
    }
  ],
  "line": 119,
  "name": "Verify bionic electric journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 100,
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
  "line": 101,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8465160700,
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
  "duration": 84413400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1475853200,
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
  "duration": 804667300,
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
  "duration": 1732896200,
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
  "duration": 1079482400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1809230800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 2045632200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2147735700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1114532600,
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
  "duration": 388489600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 62049900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 581213900,
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
  "duration": 177354600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 585955600,
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
  "duration": 79752700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 744262500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22078876800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8099915700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8371657800,
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
  "duration": 2096202800,
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
  "duration": 90104800,
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
  "duration": 91325700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4262289400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2021908700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 706004600,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Verify bionic electric journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 100,
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
  "line": 101,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8743149500,
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
  "duration": 96584000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 575196600,
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
  "duration": 957331500,
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
  "duration": 619992600,
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
  "duration": 1072052000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1465625800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1543233800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2366683000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1089910000,
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
  "duration": 384457900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 70610700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 583340200,
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
  "duration": 120760700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 583268400,
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
  "duration": 94058600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 781429700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22114065300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8092910400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8385812700,
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
  "duration": 2091365800,
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
  "duration": 90410200,
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
  "duration": 76886700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 6354214800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2027828600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 699580400,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Verify bionic electric journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-yes-industry-consent---no-details-found;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@elec_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 100,
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
  "line": 101,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8809529500,
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
  "duration": 77583800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 566095800,
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
  "duration": 1046980800,
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
  "duration": 772454600,
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
  "duration": 1071060100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1495975700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on_Electricity_button()"
});
formatter.result({
  "duration": 1716501600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2841544900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1078717100,
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
  "duration": 375307500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 57552600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 587487600,
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
  "duration": 165963200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 605783000,
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
  "duration": 82393100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 747268700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22110481700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8095541500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8447974800,
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
  "duration": 2083595400,
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
  "duration": 81515100,
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
  "duration": 81554300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 3978245100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2027865500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 768549900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 125,
  "name": "Verify bionic electric journey manual address",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter Street Address one \"\u003cStreet-Address-1\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I enter Street Address two \"\u003cStreet-Address-2\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I enter Town \"\u003cTown\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter County \"\u003cCounty\u003e\" on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 154,
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
      "line": 155,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;1"
    },
    {
      "comments": [
        {
          "line": 156,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Test Street      | Test Street 2    | Hackney | Greater London | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
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
      "line": 157,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;2"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
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
      "line": 158,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;3"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
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
      "line": 159,
      "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 156,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Test Street      | Test Street 2    | Hackney | Greater London | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
    }
  ],
  "line": 157,
  "name": "Verify bionic electric journey manual address",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter Business Name \"Jeevat LTD\" on manual address page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter Street Address one \"Test Street\" on manual address page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I enter Street Address two \"Test Street 2\" on manual address page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I enter Town \"Hackney\" on manual address page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter County \"Greater London\" on manual address page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 138,
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
  "line": 139,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8287039300,
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
  "duration": 77870800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1521920000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Enter_Manually_link()"
});
formatter.result({
  "duration": 897883100,
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
  "duration": 188452200,
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
  "duration": 73954800,
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
  "duration": 88599600,
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
  "duration": 78977200,
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
  "duration": 85930300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_on_manual_address_page()"
});
formatter.result({
  "duration": 80480600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.manualAddressPageClickElectricity()"
});
formatter.result({
  "duration": 1039478700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1082704800,
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
  "duration": 374066900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 59478400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 600988200,
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
  "duration": 112509700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 607423700,
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
  "duration": 85602200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 806292900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22109309200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8103075200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8462545800,
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
  "duration": 2086171900,
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
  "duration": 84925400,
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
  "duration": 79958900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4323259100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2009881500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 689315800,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Verify bionic electric journey manual address",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter Business Name \"Jeevat LTD\" on manual address page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter Street Address one \"Test Street\" on manual address page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I enter Street Address two \"Test Street 2\" on manual address page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I enter Town \"Hackney\" on manual address page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter County \"Greater London\" on manual address page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 138,
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
  "line": 139,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8235011600,
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
  "duration": 93952100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 564760800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Enter_Manually_link()"
});
formatter.result({
  "duration": 729837700,
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
  "duration": 637690200,
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
  "duration": 85947100,
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
  "duration": 119052600,
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
  "duration": 76891700,
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
  "duration": 90842300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_on_manual_address_page()"
});
formatter.result({
  "duration": 80815900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.manualAddressPageClickElectricity()"
});
formatter.result({
  "duration": 256266200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1095268500,
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
  "duration": 349270900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 72035800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 573674600,
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
  "duration": 124002900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 578396700,
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
  "duration": 91118700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 824162200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22095216700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8089619200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8359798100,
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
  "duration": 2101674900,
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
  "duration": 82353700,
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
  "duration": 84381000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4936632500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2008338400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 683934100,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "Verify bionic electric journey manual address",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-bionic-electric-journey-manual-address;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@elec_journey_manual_address"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click Enter Manually link",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter Business Name \"Jeevat LTD\" on manual address page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter Street Address one \"Test Street\" on manual address page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I enter Street Address two \"Test Street 2\" on manual address page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I enter Town \"Hackney\" on manual address page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter County \"Greater London\" on manual address page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I click Next on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click on Electricity button on manual address page",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 138,
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
  "line": 139,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I navigate to electric lead schedule page",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10871323700,
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
  "duration": 74567600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 558115200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Enter_Manually_link()"
});
formatter.result({
  "duration": 2055427500,
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
  "duration": 76454500,
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
  "duration": 73964500,
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
  "duration": 83494800,
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
  "duration": 75220900,
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
  "duration": 88863700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_on_manual_address_page()"
});
formatter.result({
  "duration": 57287000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.manualAddressPageClickElectricity()"
});
formatter.result({
  "duration": 1228270500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1080822200,
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
  "duration": 370125500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 56982000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 623893300,
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
  "duration": 502333500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 608805500,
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
  "duration": 78595100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1568781500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22087669200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8081347800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8416906000,
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
  "duration": 2098791400,
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
  "duration": 87293200,
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
  "duration": 84133900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4090457100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_navigate_to_electric_lead_schedule_page()"
});
formatter.result({
  "duration": 2009712900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 695672400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 237,
  "name": "Verify dual fuel journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 236,
      "name": "@dual_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 238,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 239,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 264,
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
      "line": 265,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;1"
    },
    {
      "comments": [
        {
          "line": 266,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
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
      "line": 267,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;2"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
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
      "line": 268,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;3"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
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
      "line": 269,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 266,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
    }
  ],
  "line": 267,
  "name": "Verify dual fuel journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 236,
      "name": "@dual_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 238,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 239,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 248,
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
  "line": 249,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10265911000,
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
  "duration": 79180900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 560131300,
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
  "duration": 1361372800,
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
  "duration": 514557600,
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
  "duration": 1069565700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1842199300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2313041800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 2010199100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1113739700,
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
  "duration": 376848400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 67870300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 576168800,
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
  "duration": 271926500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 563345500,
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
  "duration": 78129700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1608305500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22083636500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8078046000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8631621000,
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
  "duration": 2088628000,
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
  "duration": 84388100,
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
  "duration": 91386100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5164942900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4011681800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 679484200,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "Verify dual fuel journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 236,
      "name": "@dual_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 238,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 239,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 248,
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
  "line": 249,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10324620000,
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
  "duration": 105826100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 560471500,
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
  "duration": 1161047800,
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
  "duration": 74837400,
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
  "duration": 2111194500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1588601500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2595866500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 2944594800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1094504500,
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
  "duration": 391359400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 70885900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 588166100,
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
  "duration": 129121600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 580521100,
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
  "duration": 74006100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 696230700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22104060900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8114889100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8488103200,
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
  "duration": 2108176600,
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
  "duration": 83661000,
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
  "duration": 83917200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5373052900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4023433300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 738064600,
  "status": "passed"
});
formatter.scenario({
  "line": 269,
  "name": "Verify dual fuel journey with Industry Consent NO",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey-with-industry-consent-no;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 236,
      "name": "@dual_journey_Industry_Consent_NO"
    }
  ]
});
formatter.step({
  "line": 238,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 239,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 248,
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
  "line": 249,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9864010100,
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
  "duration": 112147100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1628103000,
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
  "duration": 790721300,
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
  "duration": 516175600,
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
  "duration": 1113323400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1788016700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2411368900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "duration": 1915808400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1074743000,
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
  "duration": 371639400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 63597900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 638729300,
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
  "duration": 168865000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 606639600,
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
  "duration": 90274800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 695385600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22096808400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8080571700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8405884800,
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
  "duration": 2122181600,
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
  "duration": 112175400,
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
  "duration": 86610700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4174477500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4007816800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 639832700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 272,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 271,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 273,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 292,
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
      "line": 293,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;1"
    },
    {
      "comments": [
        {
          "line": 294,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
        },
        {
          "line": 295,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r\u003dsuccess_cd",
        "KT64DU",
        "Fredericks",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 296,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;2"
    },
    {
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
        "HA85HF",
        "49",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 297,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;3"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/?r\u003dsuccess_cd",
        "KT64DU",
        "Fredericks",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 298,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;4"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
        "HA85HF",
        "49",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 299,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;5"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/?r\u003dsuccess_cd",
        "KT64DU",
        "Fredericks",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 300,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;6"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
        "HA85HF",
        "49",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555"
      ],
      "line": 301,
      "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 294,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
    },
    {
      "line": 295,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |"
    }
  ],
  "line": 296,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 271,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 273,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r\u003dsuccess_cd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r\u003dsuccess_cd",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8522835300,
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
  "duration": 80438200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 643533500,
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
  "duration": 1035469500,
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
  "duration": 835483900,
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
  "duration": 1078767900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1931360700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2252998600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2981879000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1104235800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1882073700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 2004630500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8207800,
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
  "duration": 112638700,
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
  "duration": 115022700,
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
  "duration": 108867000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4135844300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4010284600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 703265600,
  "status": "passed"
});
formatter.scenario({
  "line": 297,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 271,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 273,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8293115400,
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
  "duration": 75231700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1483936700,
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
  "duration": 760903800,
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
  "duration": 708702200,
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
  "duration": 1071557200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1596174800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2163466000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1921715000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 6696900200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22072540200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8095423600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8373732000,
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
  "duration": 2083749600,
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
  "duration": 89502400,
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
  "duration": 91058700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4583918500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4021468800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 702296300,
  "status": "passed"
});
formatter.scenario({
  "line": 298,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 271,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 273,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/?r\u003dsuccess_cd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/?r\u003dsuccess_cd",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10379678400,
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
  "duration": 89107100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 594411700,
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
  "duration": 944140500,
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
  "duration": 75778600,
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
  "duration": 2092166400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1513974700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2837699100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2865595600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1109961800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1871464800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 2011195500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 5650100,
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
  "duration": 105322900,
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
  "duration": 106404000,
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
  "duration": 98267600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5682868300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4026409800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 726228400,
  "status": "passed"
});
formatter.scenario({
  "line": 299,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 271,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 273,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 7978647300,
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
  "duration": 110926700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 556743500,
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
  "duration": 764046000,
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
  "duration": 59702600,
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
  "duration": 1942064600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1492286400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2047166300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2120512300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 6824290200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22081481800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8110314300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8711997100,
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
  "duration": 2079671000,
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
  "duration": 79637100,
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
  "duration": 84751200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 6791980000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4006227900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 696856400,
  "status": "passed"
});
formatter.scenario({
  "line": 300,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 271,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 273,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/?r\u003dsuccess_cd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "I enter postcode \"KT64DU\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I enter \"Fredericks\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "click on the address contains \"Fredericks\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/?r\u003dsuccess_cd",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9117468200,
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
  "duration": 78394300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 565587400,
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
  "duration": 1063859600,
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
  "duration": 607492300,
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
  "duration": 1096236500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1550921000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2129429900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2530844100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 1109767400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 1878472500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 2008641700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 7894900,
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
  "duration": 98091000,
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
  "duration": 105403200,
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
  "duration": 100554500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 3867298000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4026867900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 676023400,
  "status": "passed"
});
formatter.scenario({
  "line": 301,
  "name": "Verify Dual fuel journey",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dual-fuel-journey;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 271,
      "name": "@dualfuel_journey"
    }
  ]
});
formatter.step({
  "line": 273,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "I enter postcode \"HA85HF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I enter \"49\" on search field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "click on the address contains \"49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on Nex Step button",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8608169500,
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
  "duration": 84210200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 582129800,
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
  "duration": 768077100,
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
  "duration": 577459000,
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
  "duration": 1087660800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1544387100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2042046000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2116656000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_on()"
});
formatter.result({
  "duration": 7063037100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22087494800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8106131300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8449908300,
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
  "duration": 2078635500,
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
  "duration": 85822500,
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
  "duration": 86633000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4674570800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4023579800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 727190800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 304,
  "name": "Verify DualFuel journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 306,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 307,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
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
      "line": 332,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;1"
    },
    {
      "comments": [
        {
          "line": 333,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
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
      "line": 334,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;2"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
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
      "line": 335,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;3"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
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
      "line": 336,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 333,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |"
    }
  ],
  "line": 334,
  "name": "Verify DualFuel journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 306,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 307,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 315,
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
  "line": 316,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
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
    14
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
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8862821500,
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
  "duration": 76458200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 1488665100,
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
  "duration": 792638300,
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
  "duration": 723844900,
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
  "duration": 1070776000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1561012500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2462046000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2078015200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1080034900,
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
  "duration": 352737800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 58587700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 564831400,
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
  "duration": 164943900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 585047000,
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
  "duration": 79727600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 720150100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22102754000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8064100600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8429364900,
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
  "duration": 2088066400,
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
  "duration": 79040500,
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
  "duration": 78132300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4272043300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4022522000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 744381200,
  "status": "passed"
});
formatter.scenario({
  "line": 335,
  "name": "Verify DualFuel journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 306,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 307,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 315,
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
  "line": 316,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
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
    14
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
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10738913800,
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
  "duration": 112835000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 2191251500,
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
  "duration": 804630200,
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
  "duration": 91155100,
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
  "duration": 1348635200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 2431182400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2090576100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2462462600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1081984900,
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
  "duration": 375080700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 74138300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 559807200,
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
  "duration": 176657200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 572143700,
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
  "duration": 74340800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1888478200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22106429800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8105843600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8375223800,
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
  "duration": 2083664200,
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
  "duration": 98725600,
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
  "duration": 90126100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 6935217800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4008464500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 709862400,
  "status": "passed"
});
formatter.scenario({
  "line": 336,
  "name": "Verify DualFuel journey YES Industry Consent - NO Details Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-details-found;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Details_Found"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 306,
  "name": "I enter postcode \"HA85BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 307,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I enter \"49a Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "click on the address contains \"49a Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 315,
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
  "line": 316,
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I select supplier \"British Gas\"",
  "matchedColumns": [
    13
  ],
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
    14
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
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 9297950700,
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
  "duration": 74353200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 561531800,
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
  "duration": 1082792800,
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
  "duration": 569796100,
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
  "duration": 1068773200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1479975900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2467452900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 1967977300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "duration": 1094880400,
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
  "duration": 364912300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "duration": 60772400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "duration": 573553200,
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
  "duration": 112389900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 569205800,
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
  "duration": 79253200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 695971700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22102030200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8107461100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8393523300,
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
  "duration": 2093062800,
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
  "duration": 89291800,
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
  "duration": 87538300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4987143400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4013073100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 700388400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 339,
  "name": "Verify DualFuel journey YES Industry Consent - NO Meter and No Supplier Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 338,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Meter_No_Supplier_found"
    }
  ]
});
formatter.step({
  "line": 340,
  "name": "I navigate to bionic energy journey landing page with \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I enter postcode \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I enter \"\u003csearch-address\u003e\" on search field",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "click on the address contains \"\u003csearch-address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I enter Business Name \"\u003cbusiness-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "I enter full name \"\u003cfull-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I enter phone number \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 361,
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
      "line": 362,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;1"
    },
    {
      "comments": [
        {
          "line": 363,
          "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA8 5BD   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 57 Axholme Avenue   |   250  |"
        }
      ],
      "cells": [
        "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
        "HA8 5BD",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555",
        "57 Axholme Avenue",
        "250"
      ],
      "line": 364,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;2"
    },
    {
      "cells": [
        "https://energy-journey-bionic-staging.makeiteasy.com/",
        "HA8 5BD",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555",
        "57 Axholme Avenue",
        "250"
      ],
      "line": 365,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;3"
    },
    {
      "cells": [
        "https://energy-journey-uswitch-staging.makeiteasy.com/",
        "HA8 5BD",
        "Jeevat LTD",
        "Ravi Ahuja",
        "test@test.test",
        "07555555555",
        "57 Axholme Avenue",
        "250"
      ],
      "line": 366,
      "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 363,
      "value": "#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA8 5BD   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 57 Axholme Avenue   |   250  |"
    }
  ],
  "line": 364,
  "name": "Verify DualFuel journey YES Industry Consent - NO Meter and No Supplier Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 338,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Meter_No_Supplier_found"
    }
  ]
});
formatter.step({
  "line": 340,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I enter postcode \"HA8 5BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I enter \"57 Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "click on the address contains \"57 Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10595057600,
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
  "duration": 87967500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 4210272600,
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
  "duration": 822212500,
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
  "duration": 679029800,
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
  "duration": 1397874400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1614295200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2679454200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2795183200,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 208544700,
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
  "duration": 91644800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 1496606500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22090331700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8068979500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8453070100,
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
  "duration": 2092201400,
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
  "duration": 87095000,
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
  "duration": 84555500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 4431899900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4033979300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 726185200,
  "status": "passed"
});
formatter.scenario({
  "line": 365,
  "name": "Verify DualFuel journey YES Industry Consent - NO Meter and No Supplier Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 338,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Meter_No_Supplier_found"
    }
  ]
});
formatter.step({
  "line": 340,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-bionic-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I enter postcode \"HA8 5BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I enter \"57 Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "click on the address contains \"57 Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-bionic-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 8565054300,
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
  "duration": 101326300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 570790900,
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
  "duration": 1098852900,
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
  "duration": 78661900,
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
  "duration": 1562499700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1500779500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2089352500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2265080000,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 81981800,
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
  "duration": 93373300,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 683550500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22114346400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8117741500,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8433859800,
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
  "duration": 2093484100,
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
  "duration": 80778600,
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
  "duration": 84409900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 3965318900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4018247800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 706986500,
  "status": "passed"
});
formatter.scenario({
  "line": 366,
  "name": "Verify DualFuel journey YES Industry Consent - NO Meter and No Supplier Found",
  "description": "",
  "id": "verify-ukp-site-scenarios;verify-dualfuel-journey-yes-industry-consent---no-meter-and-no-supplier-found;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 338,
      "name": "@dualfuel_journey_YES_Industry_Consent_NO_Meter_No_Supplier_found"
    }
  ]
});
formatter.step({
  "line": 340,
  "name": "I navigate to bionic energy journey landing page with \"https://energy-journey-uswitch-staging.makeiteasy.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I enter postcode \"HA8 5BD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I click Start Quote",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I enter \"57 Axholme Avenue\" on search field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "click on the address contains \"57 Axholme Avenue\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I enter Business Name \"Jeevat LTD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I click Next from business name page",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I click on Gas\u0026Electricity button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I click Yes from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I enter kWh usage \"250\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I click I am not sure option",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I click Schedule for later (if on chat page)",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "I enter full name \"Ravi Ahuja\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I enter email address \"test@test.test\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I enter phone number \"07555555555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I click Schedule call/Finalise Quote button",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I navigate to dual lead confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://energy-journey-uswitch-staging.makeiteasy.com/",
      "offset": 55
    }
  ],
  "location": "energyJourneyBionicStepDef.i_navigate_to_bionic_energy_journey_landing_page_with(String)"
});
formatter.result({
  "duration": 10644770600,
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
  "duration": 82563900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Start_Quote()"
});
formatter.result({
  "duration": 581750600,
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
  "duration": 900624500,
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
  "duration": 593503600,
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
  "duration": 1070413600,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next()"
});
formatter.result({
  "duration": 1377162800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.verifyGasLeadScheduleConfirmation()"
});
formatter.result({
  "duration": 2438113700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_Yes_from_industry_data_agreement_page()"
});
formatter.result({
  "duration": 2198151400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "duration": 200240300,
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
  "duration": 90487700,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
});
formatter.result({
  "duration": 853896100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.click_i_am_not_sure()"
});
formatter.result({
  "duration": 22065277100,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Call_me_now_if_on_chat_page()"
});
formatter.result({
  "duration": 8075955400,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
});
formatter.result({
  "duration": 8353468200,
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
  "duration": 2113860800,
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
  "duration": 90482500,
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
  "duration": 88028900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickscheduleCall()"
});
formatter.result({
  "duration": 5079484800,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.dualLeadScheduleConfimration()"
});
formatter.result({
  "duration": 4021752900,
  "status": "passed"
});
formatter.match({
  "location": "energyJourneyBionicStepDef.closebrowser()"
});
formatter.result({
  "duration": 688665300,
  "status": "passed"
});
});