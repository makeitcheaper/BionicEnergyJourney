package bionicEnergyJourneyPages;

import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class webDriver {
    WebDriver driver;
    public webDriver(WebDriver driver)
    {

        this.driver = driver;
        //System.setProperty("webdriver.chrome.driver" , "src/main/resources/winchromedriver/chromedriver.exe");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }
}
