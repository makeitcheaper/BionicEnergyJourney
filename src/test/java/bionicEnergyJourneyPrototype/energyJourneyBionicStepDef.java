package bionicEnergyJourneyPrototype;

import bionicEnergyJourneyPages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.junit.Assert.*;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

public class energyJourneyBionicStepDef {

    //For windown with head browser
    static { System.setProperty("webdriver.chrome.driver" , "src/main/resources/driver/chromedriver.exe"); }
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
        //Thread.sleep(1000);
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
        if(currentURL.contains("/electricity/chat"))
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
        if(currentURL.contains("/electricity/chat") && boh.bionicOpeninghours().equals("Open")) {
            bejcp.Scheduleforlater();
        }
    }

    @And("^I select Time from dropdown$")
    public void selectTimefromDropdown() throws Exception
    {
        String currentURL = driver.getCurrentUrl();
        if(currentURL.contains("/electricity/chat"))
        {
            Thread.sleep(3000);
            Select dropdown = new Select(driver.findElement(By.id("time")));
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
        if(currentURL.contains("/electricity/chat"))
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
        if(currentURL.contains("/electricity/chat"))
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
        if(currentURL.contains("/electricity/chat"))
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
        if(currentURL.contains("/electricity/chat"))
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
        Thread.sleep(3000);
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

}
