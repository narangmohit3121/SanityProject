@E2ETest_Login
Feature: Authentication Scenario

    Background:
        Given User should be on valid url to login

    @Regression_Login
    @Sprint1
    @Login1
    Scenario: Verify if Admin user is able to login with Valid Credentials

        When User enters Email Id as "qa_momenta@bts.com"
        When User clicks on Next Button
        When User enters Password as "ABab12$"
        Then User clicks on Login Button

    @Regression_Login
    @Sprint1
    @Login2
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with invalid username

        When User enters Email Id as "1234"
        When User clicks on Next Button
        Then Proper Email validation message should appear
        
    @Regression_Login
    @Sprint1
    @Login3
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with long username

        When User enters Email Id as "abcd11111111111111111111.xyzz111111111111111111111111111111111@bts.com"
        When User clicks on Next Button
        When User enters Password as "ABab12$"
        When User clicks on Login Button
        Then Proper validation message should appear
    
    @Regression_Login
    @Sprint1
    @Login4
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with blank username

        When User enters Email Id as " "
        When User clicks on Next Button
        Then Proper toast validation message should appear
    

    
    
    @Sprint1
    @Login5
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with invalid password

        When User enters Email Id as "qa_momenta@bts.com"
        When User clicks on Next Button
        When User enters Password as "123"
        When User clicks on Login Button
        Then Proper validation message should appear
        

    @Sprint1
    @Login6
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with blank password

        When User enters Email Id as "qa_momenta@bts.com"
        When User clicks on Next Button
        Then User enters Password as " "
        When User clicks on Login Button
        Then Proper toast validation message should appear for Blank Password
