@tag
Feature: To Check the login functionality of Google Application

  @tag2
  Scenario Outline: Title of your scenario outline
    Given User enters the Login page
    Then User Clicks on create account and selecet myself
    Then User enters the "<firstname>" , "<lastname>" , "<emailid>" , "<password>" , "<confirmpassword>"
    When User clicks the next button
    Then User Close the browser

    Examples: 
      |firstname| lastname  | emailid          |password| confirmpassword|
      | siva    | ganesh    |sivag918@gmail.com| 1234   | 1234           |
      | Hello   |   java    |Hello@gmail.com   |2345    |2345            |
      | Java    |  selenium | Java@gmail.com   |3456    |3456            |