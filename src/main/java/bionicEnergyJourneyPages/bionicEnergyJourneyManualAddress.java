package bionicEnergyJourneyPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class bionicEnergyJourneyManualAddress extends bionicEnergyJourneySelectAddress {
    public bionicEnergyJourneyManualAddress(WebDriver driver) {
        super(driver);
    }

    public bionicEnergyJourneyManualAddress enterBusinessName(String business_name)
    {
        driver.findElement(By.name("business_name")).sendKeys(business_name);
        return new bionicEnergyJourneyManualAddress(driver);
    }

    public bionicEnergyJourneyManualAddress enterStreetAddress1(String manualAddressLline1)
    {
        driver.findElement(By.id("street-address-1-input")).sendKeys(manualAddressLline1);
        return new bionicEnergyJourneyManualAddress(driver);
    }

    public bionicEnergyJourneyManualAddress enterStreetAddress2(String manualAddressLline2)
    {
        driver.findElement(By.id("street-address-2-input")).sendKeys(manualAddressLline2);
        return new bionicEnergyJourneyManualAddress(driver);
    }

    public bionicEnergyJourneyManualAddress enterTown(String manualAddressTown)
    {
        driver.findElement(By.id("town-input")).sendKeys(manualAddressTown);
        return new bionicEnergyJourneyManualAddress(driver);
    }

    public bionicEnergyJourneyManualAddress enterCounty(String manualAddressCounty)
    {
        driver.findElement(By.id("county-input")).sendKeys(manualAddressCounty);
        return new bionicEnergyJourneyManualAddress(driver);
    }

    public bionicEnergyJourneyManualAddress clickNext()
    {
        driver.findElement(By.xpath("//button[@class='btn hover-ripple btn-block float-right manual-address-form__button']")).click();
        return new bionicEnergyJourneyManualAddress(driver);
    }

    public bionicEnergyJourneyManualAddress clickElectricity()
    {
        driver.findElement(By.xpath("//div[@class='industry-data-button-wrapper']/button[@class='hover-ripple industry-data__button industry-data__button--with-icon']")).click();
        return new bionicEnergyJourneyManualInput(driver);
    }
}
