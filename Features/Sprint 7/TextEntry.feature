Feature: Text Entry Authoring and Participant

Background:

@Sprint7
@TextEntry2
Scenario: Verfiy that user is able to create content of the type text Entry

Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User selects the Text Entry Content
When User clicks on Edit Content
When User clicks on Text Input button  
When user provides Data in Text Entry fields
When user clicks on Increase,Decrease Rows in Input buttons
When user clicks on Save button of Text Entry
When User saves the changes and exits the activity
Then the changes made to Text Entry content should get saved

@Sprint7
@TextEntry2
Scenario: Verfiy that Participant User is able to see the Text Entry block and is able to enter text into the same

Given Participant should login in with "mohitnarang@petronas.com" and "ABab12$"
When User clicks Text Entry Block activity
Then the latest Text Entry block should be visible to the Participant
Then the user should be able to enter text in the latest Text Entry block
# When User selects the Sprint 7 module under Automation_Mohit stage
