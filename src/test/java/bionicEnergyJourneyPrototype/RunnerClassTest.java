package bionicEnergyJourneyPrototype;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="src/test/resources",
        //glue="test.java.bionicTestPrototype",
        plugin={"pretty",
                "html:TargetReport/cucumber-html-report",
                "json:TargetReport/cucumber.json",
                "junit:TargetReport/cucumber.xml",
                "rerun:TargetReport/rerun.txt" },
        tags = {"@dual_multimeter,@gas_multimeter,@elec_multimeter,@elec_journey," +
                "@elec_journey_manual_address,@elec_journey_Industry_Consent_NO," +
                "@elec_journey_YES_Industry_Consent_NO_Details_Found"}
                //{"@elec_journey_YES_Industry_Consent_NO_Details_Found"}
)

public class RunnerClassTest {
}
