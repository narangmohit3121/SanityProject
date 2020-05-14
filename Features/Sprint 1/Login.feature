Feature: Authentication Scenario

    Background:
        Given BTS user should be on valid url to login

    @Sprint1
    @Login1
    Scenario: Verify if Admin user is able to login with Valid Credentials

        When BTS user enters Email Id as "neha.seth@bts.com"
        Then BTS user clicks on Next Button
        Then Non-BTS user enters Password as "123456"
        Then Non-BTS user clicks on Login Button

    @Sprint1
    @Login2
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with invalid username

        When BTS user enters Email Id as "1234"
        When BTS user clicks on Next Button
    #Then BTS user should land to SSO link successfully

    @Sprint1
    @Login3
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with long username

        When BTS user enters Email Id as "abcd11111111111111111111.xyzz111111111111111111111111111111111@bts.com"
        #When BTS user clicks on Next Button
        Then BTS user clicks on Next Button then BTS user should display error message

    @Sprint1
    @Login4
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with blank username

        When BTS user enters Email Id as " "
        #When BTS user clicks on Next Button
        Then BTS user clicks on Next Button then BTS user should display mandatory error message

    @Sprint1
    @Login5
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with invalid domain

        When BTS user enters Email Id as "neha.seth@bts.c"
        # Then Non-BTS user clicks on Next Button then Non-BTS user should redirect to password page
        # Then Non-BTS user enters Password as "123"
        # Then Non-BTS user clicks on Login Button
        Then BTS user clicks on Next Button then BTS user should display error message

    @Sprint1
    @Login6
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with non-existing username

        When BTS user enters Email Id as "hena.mirza@bts.com"
        When BTS user clicks on Next Button
        Then Non-BTS user enters Password as "123456"

    @Sprint1
    @Login7
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with invalid password

        When BTS user enters Email Id as "neha.seth@bts.com"
        When BTS user clicks on Next Button
        Then Non-BTS user enters Password as "123"

    # Then Non-BTS user clicks on Next Button then Non-BTS user should redirect to password page
    # Then Non-BTS user enters Password as "1234"

    @Sprint1
    @Login8
    Scenario: Verify if Admin user is able to login and redirected to admin landing page with blank password

        When BTS user enters Email Id as "neha.seth@bts.com"
        When BTS user clicks on Next Button
        Then Non-BTS user enters Password as " "