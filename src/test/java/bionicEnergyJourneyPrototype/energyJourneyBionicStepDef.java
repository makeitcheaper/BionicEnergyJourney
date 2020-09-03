package bionicEnergyJourneyPrototype;

import bionicEnergyJourneyPages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

public class energyJourneyBionicStepDef {

    //For windown with head browser

    static { System.setProperty("webdriver.chrome.driver" , "src/main/resources/winchromedriver/chromedriver.exe"); }
    //System.setProperty("webdriver.chrome.driver" , "src/main/resources/driver/chromedriver.exe");
    private WebDriver driver = new ChromeDriver();


    //For Linux + Headless browser
    /*
    static{
        System.setProperty("webdriver.chrome.driver", "chromedriver");
    }
    private ChromeOptions options = new ChromeOptions();
    private WebDriver driver = new ChromeDriver(options.addArguments(
            "--headless",
            "window-size=1280x800",
            "no-sandbox",
            "–disable-dev-shm-usage",
            "start-maximized",
            "--disable-gpu",
            "--ignore-certificate-errors",
            "--disable-setuid-sandbox"));
    */


    private bionicEnergyJourneyLandingPage bejlp = new bionicEnergyJourneyLandingPage(driver);
    private bionicEnergyJourneySelectAddress bejsa = new bionicEnergyJourneySelectAddress(driver);
    private bionicEnergyJourneyBusinessNamePage bejbn = new bionicEnergyJourneyBusinessNamePage(driver);
    private bionicEnergyJourneySwitchTypePage bejst = new bionicEnergyJourneySwitchTypePage(driver);
    private bionicEnergyJourneyIndustryDataAgreementPage bejida = new bionicEnergyJourneyIndustryDataAgreementPage(driver);
    private bionicEnergyJourneyIndustryDataPage bejid = new bionicEnergyJourneyIndustryDataPage(driver);
    private bionicEnergyJourneyIContractDetailsPage bejcd = new bionicEnergyJourneyIContractDetailsPage(driver);
    private bionicEnergyJourneyChatPage bejcp = new bionicEnergyJourneyChatPage(driver);
    private bionicEnergyJourneyContactInfo bejci = new bionicEnergyJourneyContactInfo(driver);
    private bionicOpeninghours boh = new bionicOpeninghours();
    private bionicEnergyJourneyConfirmationPage bejconfirmation = new bionicEnergyJourneyConfirmationPage(driver);
    private bionicEnergyJourneyManualAddress bejma = new bionicEnergyJourneyManualAddress(driver);
    private bionicEnergyJourneyManualInput bejmi = new bionicEnergyJourneyManualInput(driver);

    @Given("^I navigate to bionic energy journey landing page with \"([^\"]*)\"$")
    public void i_navigate_to_bionic_energy_journey_landing_page_with(String url) throws Exception {
        bejlp.navigateToBionicEnergyJourneyLandingPage(url);
    }

    @When("^I enter postcode \"([^\"]*)\"$")
    public void i_enter_postcode(String postcode) throws Exception {
        bejlp.enterPostcode(postcode);
    }

    @And("^I click Start Quote$")
    public void i_click_Start_Quote() throws Exception {
        bejlp.clickStartQuote();
    }

    @And("^I enter \"([^\"]*)\" on search field$")
    public void i_enter_on_search_field(String searchAddress) throws Exception {
        bejsa.enterOnSearchField(searchAddress);
    }

    @And("^click on the address contains \"([^\"]*)\"$")
    public void click_on_the_address_contains(String searchAddress) throws Exception {
        bejsa.clickOnAddress(searchAddress);
    }

    @And("^I enter Business Name \"([^\"]*)\"$")
    public void i_enter_Business_Name(String BusinessName) throws Exception {
        Thread.sleep(1000);
        bejbn.enterBusinessName(BusinessName);
    }

    @And("^I click Next from business name page$")
    public void i_click_Next() throws Exception {
        Thread.sleep(1000);
        bejbn.clickNext();
    }

    @And("^I click on Electricity button$")
    public void i_click_on_Electricity_button() throws Exception {
        Thread.sleep(1000);
        bejst.clickElectricity();
    }

    @And("^I click Yes from industry data agreement page$")
    public void click_Yes_from_industry_data_agreement_page() throws Exception
    {
        Thread.sleep(1000);
        bejida.clickOnYes();
    }

    @And("^I click NO from industry data agreement page$")
    public void clickNoIndustryAgreementAgreement() throws Exception
    {
        Thread.sleep(1000);
        bejida.clickOnNoIndustryAgreement();
    }

    @And("^I click on Nex Step button$")
    public void i_click_on() throws Exception {
        Thread.sleep(650);
        String currentURL = driver.getCurrentUrl();
        //System.out.println("Current URL is : "+currentURL);
        if(currentURL.contains("/electricity/industry_data"))
        {
            bejid.clickNextStepOldJourney();
        }
        else
        {
            bejid.clickNextStepCDCJourney();
        }
    }
    @And("^I click I am not sure option$")
    public void click_i_am_not_sure() throws Exception
    {
        Thread.sleep(1000);
        String currentURL = driver.getCurrentUrl();
        //System.out.println("Current URL is : "+currentURL);
        if(currentURL.contains("/electricity/chat") || currentURL.contains("/electricity/manual_chat"))
        {
            Thread.sleep(21000);
            bejcp.selectIamNotSurefromChatPage();
        }
        else
        {
            Thread.sleep(800);
            bejcd.clickIAmNotSureCDCPage();
        }
    }

    @And("^I click Schedule for later \\(if on chat page\\)$")
    public void i_click_Call_me_now_if_on_chat_page() throws Exception
    {
        String currentURL = driver.getCurrentUrl();
        //System.out.println("Current URL is : "+currentURL);
        System.out.println("Opening Hours :"+boh.bionicOpeninghours());
        Thread.sleep(8000);
        if((currentURL.contains("/electricity/chat") || currentURL.contains("/electricity/manual_chat"))
                && boh.bionicOpeninghours().equals("Open"))
        {
            bejcp.Scheduleforlater();
        }
    }

    @And("^I select Time from dropdown$")
    public void selectTimefromDropdown() throws Exception
    {
        String currentURL = driver.getCurrentUrl();
        if(currentURL.contains("/electricity/chat") || currentURL.contains("/electricity/manual_chat"))
        {
            Thread.sleep(8000);
            Select dropdown = new Select(driver.findElement(By.xpath("//select[@id='time']")));
            int timeDropdownSize = dropdown.getOptions().size();
            System.out.println("Time dropdown"+timeDropdownSize);
            if(timeDropdownSize>1)
            {
                dropdown.selectByIndex(2);
            }
            else
            {
                dropdown.selectByIndex(1);
            }
        }
    }

    @And("^I enter full name \"([^\"]*)\"$")
    public void i_enter_full_name(String name) throws Exception {
        String currentURL = driver.getCurrentUrl();
        //System.out.println("Current URL is : "+currentURL);
        if(currentURL.contains("/electricity/chat") || currentURL.contains("/electricity/manual_chat"))
        {
            System.out.println("Opening Hours :"+boh.bionicOpeninghours());
            if(boh.bionicOpeninghours().equals("Closed"))
            {
                Thread.sleep(3000);
                bejcp.enterFullNameOutOfHours(name);
            }
            else
            {
                Thread.sleep(8000);
                bejcp.enterFullName(name);
             }
        }
        else
        {
            bejci.enterFullName(name);
        }
    }

    @And("^I enter email address \"([^\"]*)\"$")
    public void i_enter_email_address(String email) throws Exception {
        String currentURL = driver.getCurrentUrl();
        //System.out.println("Current URL is : "+currentURL);
        if(currentURL.contains("/electricity/chat") || currentURL.contains("/electricity/manual_chat"))
        {
            bejcp.enterEmail(email);
        }
        else
        {
            bejci.enterEmail(email);
        }
    }

    @And("^I enter phone number \"([^\"]*)\"$")
    public void i_enter_phone_number(String phone) throws Exception {
        String currentURL = driver.getCurrentUrl();
        //System.out.println("Current URL is : "+currentURL);
        if(currentURL.contains("/electricity/chat") || currentURL.contains("/electricity/manual_chat"))
        {
            System.out.println("Oprning Time :"+boh.bionicOpeninghours());
            if(boh.bionicOpeninghours().equals("Closed"))
            {
                bejcp.enterPhoneOutOfHours(phone);
            }
            else
            {
                bejcp.enterPhone(phone);
            }
        }
        else
        {
            bejci.enterPhoneNumber(phone);
        }
    }

    @And("^I click Schedule call/Finalise Quote button$")
    public void clickscheduleCall() throws Exception
    {
        String currentURL = driver.getCurrentUrl();
        //System.out.println("Current URL is : "+currentURL);
        if(currentURL.contains("/electricity/chat") || currentURL.contains("/electricity/manual_chat"))
        {
            Thread.sleep(500);
            bejcp.clickScheduleCallButton();
            Thread.sleep(2000);
        }
        else
        {
            Thread.sleep(500);
            bejci.enterFinaliseMyQuotes();
            Thread.sleep(2000);
        }
    }

    @Then("^I navigate to electric lead schedule page$")
    public void i_navigate_to_electric_lead_schedule_page() throws Exception {
        Thread.sleep(2000);
        bejconfirmation.electricityConfimationPage();
    }

    @And("^I click on Select all meters option$")
    public void i_click_on_Select_all_meters_option() throws Exception {
        Thread.sleep(3000);
        bejid.clickSelectAllMeterOption();
    }

    @And("^I click on get a quote for multiple meters$")
    public void clickOnGetAQuoteForMultipleMeter() throws Exception {
        Thread.sleep(500);
        bejid.clickGetAQuoteForMultipleMeters();
    }

    @And("^I click on Gas button$")
    public void clickGasButton() throws Exception {
        Thread.sleep(1000);
        bejst.clickGas();
    }

    @Then("^I navigate to gas lead schedule page$")
    public void gasLeadScheduleConfimration() throws Exception {
        Thread.sleep(4000);
        bejconfirmation.gasConfimationPage();
    }

    @And("^I click on Gas&Electricity button$")
    public void verifyGasLeadScheduleConfirmation() throws Exception {
        Thread.sleep(1000);
        bejst.clickGasAndElectricity();
    }

    @Then("^I navigate to dual lead confirmation page$")
    public void dualLeadScheduleConfimration() throws Exception {
        Thread.sleep(4000);
        bejconfirmation.dualConfimationPage();
    }

    @And("^I click Enter Manually link$")
    public void i_click_Enter_Manually_link() throws Exception {
        bejsa.ClickLinkEnterManually();
    }

    @And("^I enter Business Name \"([^\"]*)\" on manual address page$")
    public void i_enter_Business_Name_on_manual_address_page(String bizname) throws Exception {
        bejma.enterBusinessName(bizname);
    }

    @And("^I enter Street Address one \"([^\"]*)\" on manual address page$")
    public void i_enter_Street_Address_one_on_manual_address_page(String StreetOne) throws Exception {
        bejma.enterStreetAddress1(StreetOne);

    }

    @And("^I enter Street Address two \"([^\"]*)\" on manual address page$")
    public void i_enter_Street_Address_two_on_manual_address_page(String StreetTwo) throws Exception {
        bejma.enterStreetAddress2(StreetTwo);
    }


    @And("^I enter Town \"([^\"]*)\" on manual address page$")
    public void i_enter_Town_on_manual_address_page(String Town) throws Exception {
        bejma.enterTown(Town);
    }

    @And("^I enter County \"([^\"]*)\" on manual address page$")
    public void i_enter_County_on_manual_address_page(String county) throws Exception {
        bejma.enterCounty(county);
    }

    @And("^I click Next on manual address page$")
    public void i_click_Next_on_manual_address_page() throws Exception {
        bejma.clickNext();
    }

    @And("^I click on Electricity button on manual address page$")
    public void manualAddressPageClickElectricity() throws Exception {
        bejma.clickElectricity();
    }

    @And("^I click yes option for do you know your MPAN$")
    public void yesMPANOption() throws Exception {
        Thread.sleep(1000);
        bejmi.SelectMPANYes();
    }

    @When("^I enter MPAN numbere \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void i_enter_MPAN_numbere(String mpan1, String mpan2, String mpan3, String mpan4, String mpan5, String mpan6) throws Exception {
        bejmi.enterMPANNumber(mpan1,mpan2,mpan3,mpan4,mpan5,mpan6);
    }

    @And("^I click Next after entering MPAN$")
    public void clickNextAfterEnteringMPAN() throws Exception {
        bejmi.clickNextAfterMPAN();
    }

    @And("^I click yes option for electricity supplier$")
    public void clickYesOptionForElectricitySupplier() throws Exception {
        bejmi.clickYesOptionElectricitySupplier();
    }

    @And("^I select supplier \"([^\"]*)\"$")
    public void i_select_supplier(String elesupplier) throws Exception {
        bejmi.selectBGSupplier(elesupplier);
    }

    @And("^I select yes option for electricity usage$")
    public void clickYesOptionForElectricityUsage() throws Exception {
        bejmi.clickYesOptionElectricityUsage();
    }

    @When("^I enter kWh usage \"([^\"]*)\"$")
    public void i_enter_kWh_usage(String usage) throws Exception {
        bejmi.enterkwhPerYearUsage(usage);
    }

    @When("^I click Next after entering Usage$")
    public void i_click_Next_after_entering_Usage() throws Exception {
        bejmi.clickNextAfterEnteringUsage();
    }


    @Then("^I close the browser$")
    public void closebrowser() throws Exception {
        driver.quit();
    }
}
