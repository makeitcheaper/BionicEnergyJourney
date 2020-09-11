Feature: Verify UKP site scenarios
  As a user
  I navigate to UKP QA site
  So that regression test pass successfully

  @elec_journey
  Scenario Outline: Wake the application up
    Given I navigate to bionic energy journey landing page with "<url>"
    Then I close the browser
    Examples:
    | url                                                                                                 |
#    | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  |
    | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison  |
    | https://energy-journey-bionic-staging.makeiteasy.com                                              |
    | https://energy-journey-uswitch-staging.makeiteasy.com                                             |


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
    And I select Time f rom dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to electric lead schedule page
    And I close the browser
    Examples:
      | url                                                                                                               | postcode | search-address | business-name | full-name  | email          | phone       |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com               | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r=success_cd    | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison                  | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://www.moneysupermarket.com/gas-and-electricity/business-energy/comparison                                   | HA85HF   | 49             | Testing - DO NOT CALL | Test Test  | test@test.test | 07555555555 |
      | https://energy-journey-bionic-staging.makeiteasy.com/?r=success_cd                                                | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                                             | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-uswitch-staging.makeiteasy.com/?r=success_cd                                               | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                                            | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
#     | https://userzoomtest:cdcdemo@businessenergytest.comparethemarket.com/                               | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |


  @elec_journey_Industry_Consent_NO
  Scenario Outline: Verify bionic electric journey with Industry Consent NO
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Electricity button
    And I click NO from industry data agreement page
    And I click yes option for do you know your MPAN
    And I enter MPAN numbere "<mpan1>" "<mpan2>" "<mpan3>" "<mpan4>" "<mpan5>" "<mpan6>"
    And I click Next after entering MPAN
    And I click yes option for electricity supplier
    And I select supplier "<electricity-supplier>"
    And I select yes option for electricity usage
    And I enter kWh usage "<usage>"
    And I click Next after entering Usage
    And I click I am not sure option
    And I click Schedule for later (if on chat page)
    And I select Time from dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to electric lead schedule page
    And I close the browser
    Examples:
      | url                                                                                                 | postcode  | business-name | full-name  | email          | phone       | search-address   | mpan1 | mpan2 | mpan3 | mpan4 | mpan5    | mpan6 | electricity-supplier | usage |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison    | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                               | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                              | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |


  @elec_journey_YES_Industry_Consent_NO_Details_Found
  Scenario Outline: Verify bionic electric journey YES Industry Consent - NO Details Found
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Electricity button
    And I click Yes from industry data agreement page
    And I click yes option for do you know your MPAN
    And I enter MPAN numbere "<mpan1>" "<mpan2>" "<mpan3>" "<mpan4>" "<mpan5>" "<mpan6>"
    And I click Next after entering MPAN
    And I click yes option for electricity supplier
    And I select supplier "<electricity-supplier>"
    And I select yes option for electricity usage
    And I enter kWh usage "<usage>"
    And I click Next after entering Usage
    And I click I am not sure option
    And I click Schedule for later (if on chat page)
    And I select Time from dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to electric lead schedule page
    And I close the browser
    Examples:
      | url                                                                                                 | postcode  | business-name | full-name  | email          | phone       | search-address      | mpan1 | mpan2 | mpan3 | mpan4 | mpan5    | mpan6 | electricity-supplier | usage |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison    | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                               | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                              | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |


  @elec_journey_manual_address
  Scenario Outline: Verify bionic electric journey manual address
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I click Enter Manually link
    And I enter Business Name "<business-name>" on manual address page
    And I enter Street Address one "<Street-Address-1>" on manual address page
    And I enter Street Address two "<Street-Address-2>" on manual address page
    And I enter Town "<Town>" on manual address page
    And I enter County "<County>" on manual address page
    And I click Next on manual address page
    And I click on Electricity button on manual address page
    And I click yes option for do you know your MPAN
    And I enter MPAN numbere "<mpan1>" "<mpan2>" "<mpan3>" "<mpan4>" "<mpan5>" "<mpan6>"
    And I click Next after entering MPAN
    And I click yes option for electricity supplier
    And I select supplier "<electricity-supplier>"
    And I select yes option for electricity usage
    And I enter kWh usage "<usage>"
    And I click Next after entering Usage
    And I click I am not sure option
    And I click Schedule for later (if on chat page)
    And I select Time from dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to electric lead schedule page
    And I close the browser
    Examples:
      | url                                                                                                 | postcode | search-address | business-name | full-name  | email          | phone       | Street-Address-1 | Street-Address-2 | Town    | County         | mpan1 | mpan2 | mpan3 | mpan4 | mpan5    | mpan6 | electricity-supplier | usage |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Test Street      | Test Street 2    | Hackney | Greater London | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison     | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Test Street      | Test Street 2    | Hackney | Greater London | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                                | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Test Street      | Test Street 2    | Hackney | Greater London | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                               | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Test Street      | Test Street 2    | Hackney | Greater London | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |


  @elec_multimeter
  Scenario Outline: Verify multimeter journey - Electric
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
    And I click Schedule call/Finalise Quote button
    Then I navigate to electric lead schedule page
    And I close the browser
    Examples:
      | url                                                                                             | postcode | search-address | business-name | full-name  | email          | phone       |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com  | NR242QF  | Church House   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                           | NR242QF  | Church House   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |


  @gas_multimeter
  Scenario Outline: Verify multimeter journey - Gas
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
    And I click Schedule call/Finalise Quote button
    Then I navigate to gas lead schedule page
    And I close the browser
    Examples:
      | url                                                                                             | postcode | search-address | business-name | full-name  | email          | phone       |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com  | SL6 1PE  | 7 North Road   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                           | SL6 1PE  | 7 North Road   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |


  @dual_multimeter
  Scenario Outline: Verify multimeter journey - Dual fuel
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
    And I click Schedule call/Finalise Quote button
    Then I navigate to dual lead confirmation page
    And I close the browser
    Examples:
      | url                                                                                             | postcode | search-address | business-name | full-name  | email          | phone       |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-pr-1109.herokuapp.com  | NR24 2QF | Church House   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-bionic-staging.makeiteasy.com                                             | NR24 2QF | Church House   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |

  @dual_journey_Industry_Consent_NO
  Scenario Outline: Verify dual fuel journey with Industry Consent NO
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Gas&Electricity button
    And I click NO from industry data agreement page
    And I click yes option for do you know your MPAN
    And I enter MPAN numbere "<mpan1>" "<mpan2>" "<mpan3>" "<mpan4>" "<mpan5>" "<mpan6>"
    And I click Next after entering MPAN
    And I click yes option for electricity supplier
    And I select supplier "<electricity-supplier>"
    And I select yes option for electricity usage
    And I enter kWh usage "<usage>"
    And I click Next after entering Usage
    And I click I am not sure option
    And I click Schedule for later (if on chat page)
    And I select Time from dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to dual lead confirmation page
    And I close the browser
    Examples:
      | url                                                                                                 | postcode  | business-name | full-name  | email          | phone       | search-address   | mpan1 | mpan2 | mpan3 | mpan4 | mpan5    | mpan6 | electricity-supplier | usage |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison    | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                               | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                              | KT64DU    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | Fredericks       | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |

  @dualfuel_journey
  Scenario Outline: Verify Dual fuel journey
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Gas&Electricity button
    And I click Yes from industry data agreement page
    And I click on Nex Step button
    And I click I am not sure option
    And I click Schedule for later (if on chat page)
    And I select Time from dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to dual lead confirmation page
    And I close the browser
    Examples:
      | url                                                                                                 | postcode | search-address | business-name | full-name  | email          | phone       |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison/?r=success_cd    | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison                  | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-bionic-staging.makeiteasy.com/?r=success_cd                                                | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                                             | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-uswitch-staging.makeiteasy.com/?r=success_cd                                               | KT64DU   | Fredericks     | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                                            | HA85HF   | 49             | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 |

  @dualfuel_journey_YES_Industry_Consent_NO_Details_Found
  Scenario Outline: Verify DualFuel journey YES Industry Consent - NO Details Found
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Gas&Electricity button
    And I click Yes from industry data agreement page
    And I click yes option for do you know your MPAN
    And I enter MPAN numbere "<mpan1>" "<mpan2>" "<mpan3>" "<mpan4>" "<mpan5>" "<mpan6>"
    And I click Next after entering MPAN
    And I click yes option for electricity supplier
    And I select supplier "<electricity-supplier>"
    And I select yes option for electricity usage
    And I enter kWh usage "<usage>"
    And I click Next after entering Usage
    And I click I am not sure option
    And I click Schedule for later (if on chat page)
    And I select Time from dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to dual lead confirmation page
    And I close the browser
    Examples:
      | url                                                                                                 | postcode  | business-name | full-name  | email          | phone       | search-address      | mpan1 | mpan2 | mpan3 | mpan4 | mpan5    | mpan6 | electricity-supplier | usage |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison    | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                               | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                              | HA85BD    | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 49a Axholme Avenue  | 04    | 807   | 205   | 10    | 12863966 | 474   | British Gas          |  250  |

    @dualfuel_journey_YES_Industry_Consent_NO_Meter_No_Supplier_found
  Scenario Outline: Verify DualFuel journey YES Industry Consent - NO Meter and No Supplier Found
    Given I navigate to bionic energy journey landing page with "<url>"
    When I enter postcode "<postcode>"
    And I click Start Quote
    And I enter "<search-address>" on search field
    And click on the address contains "<search-address>"
    And I enter Business Name "<business-name>"
    And I click Next from business name page
    And I click on Gas&Electricity button
    And I click Yes from industry data agreement page
    And I select yes option for electricity usage
    And I enter kWh usage "<usage>"
    And I click Next after entering Usage
    And I click I am not sure option
    And I click Schedule for later (if on chat page)
    And I select Time from dropdown
    And I enter full name "<full-name>"
    And I enter email address "<email>"
    And I enter phone number "<phone>"
    And I click Schedule call/Finalise Quote button
    Then I navigate to dual lead confirmation page
    And I close the browser
    Examples:
      | url                                                                                                 | postcode  | business-name | full-name  | email          | phone       | search-address      | usage |
#      | https://bdef256b4bd23af1:669ea24b26ea286da0f3803b875642c7@energy-journey-ui-staging.makeiteasy.com  | HA8 5BD   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 57 Axholme Avenue   |   250  |
      | https://energy-journey-msm-staging.makeiteasy.com/gas-and-electricity/business-energy/comparison    | HA8 5BD   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 57 Axholme Avenue   |   250  |
      | https://energy-journey-bionic-staging.makeiteasy.com/                                               | HA8 5BD   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 57 Axholme Avenue   |   250  |
      | https://energy-journey-uswitch-staging.makeiteasy.com/                                              | HA8 5BD   | Jeevat LTD    | Ravi Ahuja | test@test.test | 07555555555 | 57 Axholme Avenue   |   250  |
