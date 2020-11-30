Feature: User Notifications

 @Sprint23
 Scenario: Verify Notification
        Given User will navigate to momentaAuthor page
        Then User enter "pramod.shinde@bts.com" in textbox having id "mat-input-0"
        Then User will click on "Next" button
        Then User enter "ABab07$" in textbox having id "password__field"
        Then User will click on "Login" button
        Then User navigate to petronas dashboard page
        Then User will click on Journey
        Then User will verify Notifications link is present
       
   
    @Sprint23
    Scenario: Notification Created to verify History Notifications
        Given User will go to new tab and create malinator email
        Then User click on Add Notification icon
        Then User enter name and subject in Notification
        Then User click on Add button and enter message text
        Then User check Static Time selected
        Then User click on Save button and verify notification created


    @Sprint23
    Scenario: Verify if Notification tab gets displayed at user level
        Given User clicks on CohortUsers
        When User clicks on Journey
        When User clicks on Cohort and click on the User
        Then View Notifications tab present
        Then View if notification is listed under History of Notification sent


    @Sprint23
    Scenario: Verify if user is able to Rerun the History of Notification sent 
        Given Click on ReRun next to the current notification scheduled
        Then Validate if Notification got triggered or not

    @Sprint23
    Scenario: Notification Created to verify Schedule Upcoming Notifications
        Given User will click on Content
        Then User will click on Journey
        Then User will verify Notifications link is present
        Then User click on Add Notification icon
        Then User enter name and subject in Notification
        Then User click on Add button and enter message text
        Then User check Static Time selected in Schedule Notifications
        Then User click on Save button and verify notification created


  @Sprint23
   Scenario: Verify if user is able to view the Schedule Upcoming Notifications
        Given User clicks on CohortUsers
         When User clicks on Journey
        When User clicks on Cohort and click on the User
        Then View Notifications tab present
        Then View if notification is listed under Schedule Upcoming Notifications

   
@Sprint23
 Scenario: Verify if user is able to RunNow the Schedule Upcoming Notifications
        Given Click on ReRun next to the future notification scheduled
        Then Validate if Notification got triggered or not