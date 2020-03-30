package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	static WebDriver d;
	@Given("^User enters the Login page$")
	public static void user_enters_the_Login_page() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\jegan\\eclipse-workspace\\CucmberSceOut\\div\\chromedriver.exe");
	     d=new ChromeDriver();
	    d.get("https://accounts.google.com/ServiceLogin/signinchooser?continue=https%3A%2F%2Fwww.google.com%2Fandroid%2Funcertified%2F&followup=https%3A%2F%2Fwww.google.com%2Fandroid%2Funcertified%2F&flowName=GlifWebSignIn&flowEntry=AddSession");
	   
	}

	@Then("^User Clicks on create account and selecet myself$")
	public void user_Clicks_on_create_account_and_selecet_myself() throws Throwable {
		 WebElement CreateAccount = d.findElement(By.xpath("//span[@class='NlWrkb snByac']"));
		 CreateAccount.click();
		 Actions a=new Actions(d);
		 a.moveToElement(CreateAccount).perform();
		 WebElement myself = d.findElement(By.xpath("//div[text()='For myself']"));
		myself.click();
		 Thread.sleep(3000);
		 
	}

	@Then("^User enters the \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_enters_the_and_and(String Firstname, String lastname, String emailid, String password, String confirmpassword) throws Throwable {
	   d.findElement(By.xpath("//input[@name='firstName']")).sendKeys(Firstname);
	   d.findElement(By.xpath("//input[@name='lastName']")).sendKeys(lastname);
	   d.findElement(By.xpath("//input[@name='Username']")).sendKeys(emailid);
	   d.findElement(By.xpath("//input[@name='Passwd']")).sendKeys(password);
	   d.findElement(By.xpath("//input[@name='ConfirmPasswd']")).sendKeys(confirmpassword);
	   
	}

	@When("^User clicks the next button$")
	public void user_clicks_the_next_button() throws Throwable {
	   d.findElement(By.xpath("//span[@class='RveJvd snByac']")).click();
	}

	@Then("^User Close the browser$")
	public void user_Close_the_browser() throws Throwable {
	    d.quit();
	}
}
