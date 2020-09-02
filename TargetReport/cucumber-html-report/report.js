$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/energyJourney-bionic.feature");
formatter.feature({
  "name": "Verify UKP site scenarios",
  "description": "  As a user\n  I navigate to UKP QA site\n  So that regression test pass successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Wake the application up",
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Wake the application up",
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
