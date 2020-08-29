Feature: Verify UKP site scenarios
  As a user
  I navigate to UKP QA site
  So that regression test pass successfully

  @elec_journey
Scenario Outline: Verify bionic electric journey
  Given I navigate to bionic energy journey landing page with "<url>"
  When I enter postcode "<postcode>"
  And I click Start Quote
  And I enter "<search-address>" on search field
  And click on the address contains "<search-address>"
  And I enter Business Name "<business-name>"
  And I click Next from business name page
  And I click on Electricity button
  And I click Yes from industry data agreement page
  And I click on Nex Step button
  And I click I am not sure option
  And I click Schedule for later (if on chat page)
  And I enter full name "<full-name>"
  And I enter email address "<email>"
  And I enter phone number "<phone>"
  And I click Schedule call button
  Then I navigate to electric lead schedule page
  Examples:
  | url                                                                                                 | postcode | search-address | business-name | full-name  | email          | phone       |
  | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
  | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
#  | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |


  @elec_multimeter
  Scenario Outline: Verify bionic electric multimeter journey
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Electricity button
    And I click Yes from industry data agreement page
    And I click on Select all meters option
    And I click on get a quote for multiple meters
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call button
    Then I navigate to electric lead schedule page
    Examples:
      | url                                                                                             | postcode | search-address | business-name | full-name  | email          | phone       |
      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com  | NR242QF  | Church House   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
#      | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                           | NR242QF  | Church House   | Testing 41    | Ravi Ahuja | test@test.test | 07555555555 |


  @gas_multimeter
  Scenario Outline: Verify bionic electric multimeter journey
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Gas button
    And I click Yes from industry data agreement page
    And I click on Select all meters option
    And I click on get a quote for multiple meters
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call button
    Then I navigate to gas lead schedule page
    Examples:
      | url                                                                                             | postcode | search-address | business-name | full-name  | email          | phone       |
      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com  | SL6 1PE  | 7 North Road   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
#      | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                           | SL6 1PE  | 7 North Road   | Testing 42    | Ravi Ahuja | test@test.test | 07555555555 |


  @dual_multimeter
  Scenario Outline: Verify bionic electric multimeter journey
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Gas&Electricity button
    And I click Yes from industry data agreement page
    And I click on Select all meters option
    And I click on get a quote for multiple meters
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call button
    Then I navigate to dual lead confirmation page
    Examples:
      | url                                                                                             | postcode | search-address | business-name | full-name  | email          | phone       |
      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com  | NR24 2QF | Church House   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
#      | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                           | NR24 2QF | Church House   | Testing 43    | Ravi Ahuja | test@test.test | 07555555555 |
