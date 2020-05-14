Feature: Add Journey and Module Description

Scenario:
@Sprint8
@AddDescription01
Scenario: Verify if user is able to Edit Module Descripton in Journey Authoring and save

Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User selects the Journey named "Conditional Activity Testing"
When user edits Description for the Module "New Module 1A"
When user saves and publishes the journey
When User selects the Journey named "Conditional Activity Testing"
When user opens details of the Module "New Module 1A"
Then the updated module description should be displayed

@Sprint8
@AddDescription01
Scenario: Verify that Participant user is able to view added Module Description under My Journey Page

Given Participant should login in with "mohitnarang@petronas.com" and "ABab20$"
When Participant User clicks on Back to Journey page button
#When Participant user clicks on My Journey page
Then the updated module description should be displayed to the Participant
When Participant user clicks on Home page
Then the updated module description should be displayed to the Participant
