package bionicEnergyJourneyPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class bionicEnergyJourneySwitchTypePage extends bionicEnergyJourneyBusinessNamePage {
    public bionicEnergyJourneySwitchTypePage(WebDriver driver) { super(driver);   }

    public bionicEnergyJourneySwitchTypePage clickElectricity()
    {
        driver.findElement(By.xpath("//form[@id='electricity-form']/button[@name='button']")).click();
        return new bionicEnergyJourneyIndustryDataAgreementPage(driver);
    }

    public bionicEnergyJourneySwitchTypePage clickGas()
    {
        driver.findElement(By.xpath("//form[@id='gas-form']/button[@name='button']")).click();
        return new bionicEnergyJourneyIndustryDataAgreementPage(driver);
    }

    public bionicEnergyJourneySwitchTypePage clickGasAndElectricity()
    {
        driver.findElement(By.xpath("//form[@id='duel-fuel-form']/button[@name='button']")).click();
        return new bionicEnergyJourneyIndustryDataAgreementPage(driver);
    }
}