package bionicEnergyJourneyPages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static junit.framework.TestCase.assertTrue;

public class bionicEnergyJourneyConfirmationPage extends bionicEnergyJourneyContactInfo {
    public bionicEnergyJourneyConfirmationPage(WebDriver driver) {  super(driver);   }

    public bionicEnergyJourneyConfirmationPage electricityConfimationPage() throws Exception {
        String currentURL = driver.getCurrentUrl();
        System.out.println("Current URL : " + currentURL);
        assertTrue(currentURL.contains("/electricity/leads/scheduled") ||
        currentURL.contains("/electricity/leads/callnow"));

        return new bionicEnergyJourneyConfirmationPage(driver);
    }

    public bionicEnergyJourneyConfirmationPage gasConfimationPage() throws Exception {
        String currentURL = driver.getCurrentUrl();
        System.out.println("Current URL : "+currentURL);
        Assert.assertTrue(currentURL.contains("/gas/leads/scheduled") ||
        currentURL.contains("/gas/leads/callnow"));

        return new bionicEnergyJourneyConfirmationPage(driver);
    }

    public bionicEnergyJourneyConfirmationPage dualConfimationPage() throws Exception {
        String currentURL = driver.getCurrentUrl();
        System.out.println("Current URL : "+currentURL);
        Assert.assertTrue(currentURL.contains("/dual_fuel/leads/scheduled") ||
        currentURL.contains("/dual_fuel/leads/callnow"));

        return new bionicEnergyJourneyConfirmationPage(driver);
    }
}
