Feature: Participant App Sanity Test cases for Content

Background: 
Given Participant should login in with "producer5@petronas.com" and "ABab12$"
When user navigates to the My Journey page
#When User navigates to Word Cloud activity


@Participant01
Scenario: Verify that Word Cloud is getting properly generated for the participant user

When User navigates to the "Mod 1" module and "ActivityWordcloud" activity
When User provides some input into the content activity
When User clicks on Continue Button
When Participant user logs in with "producer6@petronas.com" and "ABab12$"
When user navigates to the My Journey page
When User navigates to the "Mod 1" module and "ActivityWordcloud" activity
When User provides some input into the content activity
When User clicks on Continue Button
Then the wordcloud should be properly generated from the input provided

@Participant02
Scenario: Verify that Download is working properly for the participant user

When User navigates to the "Mod 1" module and "DownloadActivity" activity
Then the Download heading should be correct
#When User tries to navigate to next page without Downloading the Activity
When User clicks on Download button to download the file
Then the file should get downloaded
When User clicks on Continue Button
When User clicks on ExternalURL button to download the file
Then User should be taken to the URL provided in Download block