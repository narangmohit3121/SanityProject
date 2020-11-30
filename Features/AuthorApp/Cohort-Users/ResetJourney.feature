#@E2ETestCohortUsers
Feature: Reset a Journey for User

Background:
#Login to complete first Activity
Given Participant should login in with "resetjoureny@petronas.com" and "ABab13$"
When User select an industry as "Automation Reset Journey Industry"
When user selects the the vertical as "Automation Reset 1 Vertical"
When user lands to home page of Automation Reset one Vertical
When user completes activity of Automation Reset one Vertical
#When user clicks on logout

#Login to complete second Activity
Given Participant should login in with "resetjoureny@petronas.com" and "ABab13$"
When User select an industry as "Automation Reset Journey Industry"
When user selects the the vertical as "Automation Reset 2 Vertical"
When user lands to home page of Automation Reset two Vertical
When user completes activity of Automation Reset two Vertical
#When user clicks on logout


#When user selects the the industry as "Automation Reset Journey Industry"
#When user selects the the vertical as "Automation Reset 1 Vertical"
#Admin Login
Given User should login in with "abhi@bts.com" and "ABab86$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "QA Automation Reset 1 Journey"

@ResetJourney1
Scenario: Verify when clicked on "Reset Journey Data" then Reset the entire journey data mapped to the user


When User clicks on Journey "QA Automation Reset 1 Journey" under Journeys list
When User clicks on cohort "Reset Journey Cohort" to Reset Journey
When User clicks on User "reset" to Reset Journey
When User clicks on Journeys Tab to Reset Journey
When User selects dropdown from Journey List as "QA Automation Reset 1 Journey"
When User clicks on Reset Journey Data button


Given Participant should login in with "resetjoureny@petronas.com" and "ABab13$"
When User select an industry as "Automation Reset Journey Industry"
When user selects the the vertical as "Automation Reset 1 Vertical"
When first activity should be in Start
#When user clicks on logout


Given Participant should login in with "resetjoureny@petronas.com" and "ABab13$"
When User select an industry as "Automation Reset Journey Industry"
When user selects the the vertical as "Automation Reset 2 Vertical"
When first activity should be in Revisit
#When user clicks on logout