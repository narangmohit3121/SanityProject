Feature: Page Block

    Background:
    Given User should login in with "neha.seth@bts.com" and "123456"
    When User should click on Client Tab
    When User should click on Petronas folder
    When User navigate to Page Block Automation content

    @Sprint07
    @PageBlock1

    Scenario: Verify that the content type 'Page' is displayed to the user.
        
        Then page block should be displayed to the user

    @Sprint07
    @PageBlock2
    Scenario: Verify that user is able to edit page by clicking on 'Edit Page' and user is able to enter alphanumeric text in the Page Title.
        # When user drag and drop page type content
        When user click on edit page link
        When user should be able to see page content editable window
        When user enter page title in alphanumeric format as "Performance Appriasal0102"
        When user click on save button of page divider
        Then user should see page title data in title textfield

    @Sprint07
    @PageBlock3
    Scenario: Verify that user enter numeric text in number of time completion
        When user click on edit page link
        When user should be able to see page content editable window
        When user click toggle button of points
        When user enter numeric text points as "10"
        When user click on save button of page divider
        When user should see number of Point in point textfield
        When user click on edit page link
        When user click toggle button of time duration
        When user enter numeric text for expected time duration as "40"
        When user click on save button of page divider
        When user should see number of expected time duraton in time textfield


    @Sprint07
    @PageBlock4
    Scenario: Verify that user is able to increase and decrease the value by pulse and minus operater
        When user click on edit page link
        When user should be able to see page content editable window
        When user click toggle button of points
        When user click 5 times to increase the points
        Then user should see valid point value increased by user
        When user click 3 times to decrease the point
        Then user should see valid point value dicreased by user


    @Sprint07
    @PageBlock5
    Scenario: Verify SAVE and CANCEL button is displayed to the user
        #Given User should login in with "neha.seth@bts.com" and "123456"
        #When User clicks on client tab
        #When User should click on petronas folder
        #When User navigate to Page Block Automation content
        When page block should be displayed to the user
        When user click on edit page link
        Then page block should be displayed to the user
        When user should be able to see page content editable window
        Then Save and cancel button should be displayed to the user



    @Sprint07
    @PageBlock6
    Scenario: Verify page title should be should be visible when user preivew.
        # When user drag and drop page type content
        #Given User should login in with "neha.seth@bts.com" and "123456"
        #When User clicks on client tab
        #When User should click on petronas folder
        #When User navigate to Page Block Automation content
        When user click on edit page link
        When user should be able to see page content editable window
        When user enter page title in alphanumeric format as "Page Title001"
        When user click on save button of page divider
        When user click on preview button after save
        Then user should get page block title in new opened window




    #@Sprint7
    @PageBlock7
    Scenario: Verify that after disabling the toggle  button in Edit Page then existing value for points and duration should be saved.
        #Given User should login in with "neha.seth@bts.com" and "123456"
        #When User clicks on client tab
        #When User should click on petronas folder
        #When User navigate to Page Block Automation content
        When user click on edit page link
        When user should be able to see page content editable window
        When user click toggle button of points
        When user enter numeric text points as "10"
        When user click on save button of page divider
        When user should see number of Point in point textfield
        When user click on edit page link
        When user click toggle button of time duration
        When user enter numeric text for expected time duration as "40"
        When user click on save button of page divider
        When user click on edit page link
        When user click toggle button of points
        When user click toggle button of time duration
        When user click on save button of page divider
        When user click on edit page link
        Then user should see blank textfield for points and time duration


