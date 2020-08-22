package bionicEnergyJourneyPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class bionicEnergyJourneyIndustryDataPage extends bionicEnergyJourneyIndustryDataAgreementPage {
    public bionicEnergyJourneyIndustryDataPage(WebDriver driver) {    super(driver);   }

    public bionicEnergyJourneyIndustryDataPage clickNextStepOldJourney() throws Exception
    {

            driver.findElement(By.xpath("//div[@class='col-lg-3 text-right']/form/button[@name='button']")).click();

       // else
        //{
        //    driver.findElement(By.className("industry-data-review__next")).click();
        //}
        return new bionicEnergyJourneyChatPage(driver);
    }

    public bionicEnergyJourneyIndustryDataPage clickNextStepCDCJourney() throws Exception
    {
        driver.findElement(By.className("industry-data-review__next")).click();
        return new bionicEnergyJourneyIContractDetailsPage(driver);
    }

    public bionicEnergyJourneyIndustryDataPage clickSelectAllMeterOption() throws Exception
    {
        driver.findElement(By.xpath("//div[@class='radio-checkbox meter-list__select-all d-none d-md-flex radio-checkbox--default radio-checkbox--xs']")).click();
        return new bionicEnergyJourneyIndustryDataPage(driver);
    }
    public bionicEnergyJourneyIndustryDataPage clickGetAQuoteForMultipleMeters() throws Exception
    {
        driver.findElement(By.xpath("//button[@class='mic-button']")).click();
        return new bionicEnergyJourneyContactInfo(driver);
    }
}
