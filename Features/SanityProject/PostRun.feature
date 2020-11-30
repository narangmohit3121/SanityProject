Feature: Run Post Regression Suite steps

@DeleteAllContents
Scenario: Delete All Created Contents and User created for Sanity Testing
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sanity folder
When user navigates to the EndToEnd folder
When user deletes all the contents in EndToEnd folder
Then all the contents should be deleted successfully

@DeleteSanityJourney
Scenario: Delete the Journey created for Sanity
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sanity folder
When user navigates to the EndToEnd folder
When user deletes the sanity Journey
Then the sanity Journey should be deleted successfully

@DeleteAllMediaObjects
Scenario: Delete All Media Objects created for Sanity Testing
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp/Media" folder in petronas
When user deletes all the Media Objects created during the sanity test
Then all the Media Objects should get deleted successfully