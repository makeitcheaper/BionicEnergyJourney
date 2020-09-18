package bionicEnergyJourneyPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class bionicEnergyJourneyManualInput extends bionicEnergyJourneyManualAddress {
    public bionicEnergyJourneyManualInput(WebDriver driver) {  super(driver);     }

    public bionicEnergyJourneyManualInput SelectMPANYes()
    {
        driver.findElement(By.xpath("//div[@class='radio-btn yes-btn']")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput SelectMPRNYes()
    {
        driver.findElement(By.xpath("//div[@class='radio-btn yes-btn']")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput enterMPANNumber(String mpan1, String mpan2, String mpan3, String mpan4, String mpan5, String mpan6)
    {
        driver.findElement(By.id("mpan0")).sendKeys(mpan1);
        driver.findElement(By.id("mpan1")).sendKeys(mpan2);
        driver.findElement(By.id("mpan2")).sendKeys(mpan3);
        driver.findElement(By.id("mpan3")).sendKeys(mpan4);
        driver.findElement(By.id("mpan4")).sendKeys(mpan5);
        driver.findElement(By.id("mpan5")).sendKeys(mpan6);
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput enterMPRNNumber(String mprn)
    {
        driver.findElement(By.id("MPRN-input")).sendKeys(mprn);
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput clickNextAfterMPAN()
    {
        driver.findElement(By.xpath("//div[@class='mpan-question']/div/div/button")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput clickNextAfterMPRN()
    {
        driver.findElement(By.xpath("//div[@class='mprn-question']/div/div/button")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput clickYesOptionElectricitySupplier()
    {
        driver.findElement(By.xpath("//div[@class='question-supplier']/div/div/div/div[@class='radio-btn yes-btn']")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput clickYesOptionGasSupplier()
    {
        driver.findElement(By.xpath("//div[@class='question-supplier']/div/div/div/div[@class='radio-btn yes-btn']")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput selectBGSupplier(String elec_sup)
    {
        driver.findElement(By.xpath("//div/img[@alt='"+elec_sup+"']")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput clickYesOptionElectricityUsage()
    {
        driver.findElement(By.xpath("//div[@class='question-usage']/div/div/div/div[@class='radio-btn yes-btn']")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput enterkwhPerYearUsage(String usage)
    {
        driver.findElement(By.id("usage")).sendKeys(usage);
        return new bionicEnergyJourneyManualInput(driver);
    }

    public bionicEnergyJourneyManualInput clickNextAfterEnteringUsage()
    {
        driver.findElement(By.id("next-btn")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }
}
