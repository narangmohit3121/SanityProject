Feature: Reset a Journey for User

Background:
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User click on View More

@ResetJourney1
Scenario: Verify when clicked on "Reset Journey Data" then Reset the entire journey data mapped to the user


When User clicks on any Journey under Journeys list to Reset Journey
When User clicks on any cohort name to Reset Journey
When User clicks on any User to Reset Journey
When User clicks on Journeys Tab to Reset Journey
When User clicks on Reset Journey Data button
