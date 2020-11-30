@E2ETest_CMS
Feature: Text Entry Authoring and Participant

Background:

@Sprint07
@TextEntry1
Scenario: Verfiy that user is able to create content of the type text Entry

Given User Logs in as admin user
When User clicks on client tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
When User selects the Text Entry Content
When User clicks on Edit Content
When User deletes the previous text entry
When User clicks on Text Input button  
When user provides Data in Text Entry fields
When user clicks on Increase,Decrease Rows in Input buttons
When user clicks on Save button of Text Entry
# When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Text Entry content should get saved

@Sprint07
@TextEntry2
Scenario: Verfiy that Participant User is able to see the Text Entry block and is able to enter text into the same

Given Participant should login in with "AutomationParticipant1@petronas.com" and "ABab12$"
When user navigates to the My Journey page
When User navigates to the "Mod 1" module and "TextEntry" activity
Then the latest Text Entry block should be visible to the Participant
Then the user should be able to enter text in the latest Text Entry block
# When User selects the Sprint 7 module under Automation_Mohit stage
