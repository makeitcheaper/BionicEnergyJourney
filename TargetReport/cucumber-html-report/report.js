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
      "name": "@elec_journey_Industry_Consent_NO"
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
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.step({
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.step({
  "name": "I enter MPAN numbere \"\u003cmpan1\u003e\" \"\u003cmpan2\u003e\" \"\u003cmpan3\u003e\" \"\u003cmpan4\u003e\" \"\u003cmpan5\u003e\" \"\u003cmpan6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.step({
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.step({
  "name": "I select supplier \"\u003celectricity-supplier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.step({
  "name": "I enter kWh usage \"\u003cusage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Next after entering Usage",
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
  "name": "I select Time from dropdown",
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
  "name": "I click Schedule call/Finalise Quote button",
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
      ]
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
      "name": "@elec_journey_Industry_Consent_NO"
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
  "name": "I click NO from industry data agreement page",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNoIndustryAgreementAgreement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click yes option for do you know your MPAN",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.yesMPANOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter MPAN numbere \"04\" \"807\" \"205\" \"10\" \"12863966\" \"474\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_MPAN_numbere(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next after entering MPAN",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickNextAfterEnteringMPAN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click yes option for electricity supplier",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricitySupplier()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select supplier \"British Gas\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_select_supplier(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select yes option for electricity usage",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.clickYesOptionForElectricityUsage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter kWh usage \"250\"",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_enter_kWh_usage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Next after entering Usage",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.i_click_Next_after_entering_Usage()"
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
  "name": "I select Time from dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "energyJourneyBionicStepDef.selectTimefromDropdown()"
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
  "name": "I click Schedule call/Finalise Quote button",
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
});