Feature: Create a Cohort

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab

@Sprint08
Scenario: Verify whether User is able to land on Create Cohort Window and validate its Title

When User clicks on any Journey under Journeys list to create a cohort
When User clicks on Create Cohort button
Then User validate Create Cohort Window Title

@Sprint08
Scenario: Verify whether User is able to enter Title in 'Cohort Title' text field and Start Date and creates cohort

When User clicks on any Journey under Journeys list to create a cohort
When User clicks on Create Cohort button
When User enters Title as 'Cohort Test Title' in Cohort Title
When User selects Start Date
When User clicks on Test Cohort to toggle on
When User clicks on Enabled to toggle on
When User clicks on User Expiry to toggle on
When User clicks on plus symbol
Then User clicks on Done button to Create a Cohort
Then User should be able to view the newly added Cohort in Cohort list


