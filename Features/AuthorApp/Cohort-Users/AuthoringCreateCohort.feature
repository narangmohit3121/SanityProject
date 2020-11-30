@E2ECohortUsers
Feature: Create a Cohort

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation CreateCohort"

# @E2ECohortUsers
# @Sprint08
# @AuthoringCreateCohort1
Scenario: Verify whether User is able to land on Create Cohort Window and validate its Title

When User clicks on Journey "Automation CreateCohort" under Journeys list
When User clicks on Create Cohort button
Then User validate Create Cohort Window Title

# @E2ECohortUsers
# @Sprint08
# @AuthoringCreateCohort2
Scenario: Verify whether User is able to enter Title in 'Cohort Title' text field and Start Date and creates cohort

When User clicks on Journey "Automation CreateCohort" under Journeys list
When User clicks on Create Cohort button

#When User enters Title as "" and Journey Code as "" and Start date as "" and End date as ""
 



When User enters Title in Cohort Title
When User selects Start Date
When User selects End Date
When User clicks on Test Cohort to toggle on
When User clicks on Enabled to toggle on
# When User clicks on User Expiry to toggle on
# When User clicks on plus symbol
Then User clicks on Done button to Create a Cohort
Then User should be able to view the newly added Cohort in Cohort list



