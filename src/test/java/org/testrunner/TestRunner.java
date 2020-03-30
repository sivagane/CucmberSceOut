package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\jegan\\eclipse-workspace\\CucmberSceOut\\src\\test\\java\\org\\features\\CucumberSceOut.feature", glue="org.stepdefinition", format = {"pretty","html:test-output","json:json_output/Cucumber.json","junit:junit_xml/Cucumber.xml"}, monochrome=true, strict=true, dryRun=false )
public class TestRunner {

}
