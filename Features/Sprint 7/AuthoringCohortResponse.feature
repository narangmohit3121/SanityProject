Feature: Authoring Cohort Response page

Background:

@Sprint07
@AuthoringCohortResponse1

Scenario: Verify if Author can set response items as Single Select / Multi Select

Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User selects the Cohort Response Content
When User clicks on Edit Cohort Response Button
When User enters Block Id, Block Title, Next Response Label
When User selects the JourneyScript Id of Single Select
When User clicks on SAVE button of Cohort Response Block
Then the Single Select Id should get saved as the JourneyScript Id of Cohort Response
When User saves the changes and exits the activity
Then the changes made to Cohort Response fields should get saved
When User clicks on Edit Cohort Response Button
When User selects the JourneyScript Id of Multi Select
When User clicks on SAVE button of Cohort Response Block
Then the Multi Select Id should get saved as the JourneyScript Id of Cohort Response

#@Sprint7
@AuthoringCohortResponse2

Scenario: Verifiy that Participant can see response from other random participant when clicked on 'View another Response'
Given Participant should login in with "mohit@petronas.com" and "ABab12$"
When User selects the Sprint 7 module under Automation_Mohit stage
When User clicks on Cohort Response activity
Then the Next Response buttons should be displayed and its name should be correct
Then the Cohort Responses should be displayed when user clicks on Next Response button

@Sprint07
@AuthoringCohortResponse3
Scenario: Verify that Cohort Response inputs in disabled mode should be visible to the user in Preview mode

Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User selects the Cohort Response Content
#When User clicks on Edit Cohort Response Button
Then Cohort Response inputs in disabled mode should be visible to the user in Preview mode

@Sprint07
@AuthoringCohortResponse4
Scenario: Verify if Add Item button and Delete icon are not seen in preview mode

Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User selects the Cohort Response Content
Then Add Item button and Delete icon should not be seen in preview mode
Then user can not edit details of Configuration and Allow Commenting tabs in preview mode



