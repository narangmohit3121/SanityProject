@WordCloudTests
@E2ETest_CMS
Feature: Author and Participant Test cases for Word Cloud

@WordCloud01
Scenario: Verify whether user can save changes made to the block of the type Wordcloud

Given User Logs in as admin user
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint7 folder
When User navigates to an activity that has a block of the type Wordcloud
When User clicks on Edit Wordcloud button
When user changes the Wordcase and Number of words to be used to generate Wordcloud
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to the Wordcloud block should get saved

@WordCloud02
Scenario: Verify that Word Cloud is getting properly generated for the participant user

Given Participant should login in with "producer5@petronas.com" and "ABab44$"
When user navigates to the My Journey page
When User navigates to the "Mod 1" module and "ActivityWordcloud" activity
When User provides some input into the content activity
When User clicks on Continue Button
When Participant user logs in with "producer6@petronas.com" and "ABab33$"
When user navigates to the My Journey page
When User navigates to the "Mod 1" module and "ActivityWordcloud" activity
When User provides some input into the content activity
When User clicks on Continue Button
Then the wordcloud should be properly generated from the input provided