Feature: Run Post Regression Suite steps

@DeleteAllContents
Scenario: Delete All Created Contents
Given User should login in with "narang.mohit@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sanity folder
When user navigates to the EndToEnd folder
When user deletes all the contents in EndToEnd folder
Then all the contents should be deleted successfully