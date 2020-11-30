@E2EAuthor_Journey
Feature: JSM Email Notification


    Scenario: Check Notification link is present in Cohort
        Given I will navigate to momentaAuthor page
        Then I enter "pramod.shinde@bts.com" in textbox having id "mat-input-0"
        Then I will click on "Next" button
        Then I enter "ABab07$" in textbox having id "password__field"
        Then I will click on "Login" button
        Then User navigates to petronas dashboard page
        Then User click on CohortUsers
        Then User click on Journey
             
               
    Scenario: Check Notification with Send Now radio option for Cohort
        Given User go to new tab and create malinator email
        Then User select one cohort and click on Send Notification
        Then User enters name and subject in Notification
        Then User clicks on Add button and enter message text
        Then User checks Send Now selected
        Then User clicks on OK button on confirmation message
        Then User clicks on Cancel button  
        Then User will checks notification mail received


    Scenario: Check Notification with Send Now radio option for Users
        Given User clicks on Cohort
        Then User select one user and click on Send Notification
        Then User enters name and subject in Notification
        Then User clicks on Add button and enter message text
        Then User checks Send Now selected
        Then User clicks on OK button on confirmation message
        Then User will checks notification mail received


    # Scenario: Check Notification with Static Time radio option 
    #     Given User go to new tab and create malinator email
    #     Then User select one cohort and click on Send Notification
    #     Then User enters name and subject in Notification
    #     Then User clicks on Add button and enter message text
    #     Then User checks Static Time selected
    #     Then User clicks on Save button and verify notification created
    #     Then User will checks notification mail received


    # Scenario: Check Notification with Dynamic Time radio option 
    #     Then User select one cohort and click on Send Notification
    #     Then User enters name and subject in Notification
    #     Then User clicks on Add button and enter message text
    #     Then User checks Dynamic Time selected
    #     Then User clicks on Save button and verify notification created
    #     Then User will checks notification mail received


