@E2EAuthor_Journey
Feature: Add Journey and Module Description

@Sprint9
@AddDescription01
Scenario: Verify if user is able to Edit Module Descripton in Journey Authoring and save

Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User click on Automation Folder_DONOT DELETE folder
When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
When User click journey folder in AuthorApp folder
When User selects the Journey named "Description and Module Automation"
When User edits Description for the Module "New Module 1A updated"
When User Saves and Publishes the Journey and then Exits the Journey on Journey Flow page

 Given Participant should login in with "updatemodule@petronas.com" and "ABab12$"
 When Participant User navigate module panel to check the description
 Then Updated module description should be displayed to the Participant
