@E2EAuthor_Journey
Feature: Schedule Notification Functionality

    Scenario: Check Notification link is present in Journey
        Given I will navigate to momentaAuthor page
        Then I enter "pramod.shinde@bts.com" in textbox having id "mat-input-0"
        Then I will click on "Next" button
        Then I enter "ABab07$" in textbox having id "password__field"
        Then I will click on "Login" button
        Then I navigate to petronas dashboard page
        Then I will click on Journey
        Then I will verify Notifications link is present
              

    Scenario: Check Notification pop up window
        Given I click on Add Notification icon
        Then I will verify header name is present

    Scenario: Check validation when submit the blank Notification page
        Given I click on Save button and verify error message for title
        Then I click on Save button and verify error message for subject
        Then I will go to new tab and create malinator email

    Scenario: Check validation for creating notification with valid data
        Given I enter name and subject in Notification
        Then I click on Add button and enter message text
        Then I check Static Time selected
        Then I click on Save button and verify notification created

    Scenario: Verify notification email in malinator for Static Time
        Given I will check notification mail received
        Then I will go to new tab and create malinator email


    Scenario: Create notification for Dynamic Time
        Given I enter name and subject in Notification
        Then I click on Add button and enter message text
        Then I check Dynamic Time selected
        Then I enter other details in Notification
        Then I click on Save button and verify notification created


    Scenario: Check Users creation for notification mail
    Given I click on Users
    Then I click on Journey
    Then I click on Cohort
    Then I click on Create User
    Then I fills all the details in Create User window FirstName as "Jesna" and LastName as "Joseph" and Email as "jesna.joseph@peronas.com" 

    Scenario: Verify notification email in malinator for Dynamic Time
    Given I will check notification mail received

