
Feature: User Listing

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation EditCohort"
When User clicks on Journey "Automation EditCohort" under Journeys list

@EditCohort
@Sprint19
@EditCohort1
Scenario: Verify if User is able to Toggle Enabled option to True and False
When User verifies Toggle

@EditCohort
@EditCohort2
Scenario: Verify whether User is able to edit Cohort Title

When User clicks on Cohort Settings button of Cohort "CohortEdit Cohort"
When User edits the Cohort Title as "CohortEdit Cohort"
When User clicks on Save button of Cohort Settings
Then User should validate the edited Cohort Title as "CohortEdit Cohort"

@EditCohort
@Sprint08
@EditCohort3
Scenario: Verify if user is able to Enable (On/Off) toggle under Cohort Settings

#When User clicks on Enable On Off toggle
When User clicks on Cohort Settings button of Cohort "CohortEdit Cohort"
Then User should be able to toggle Enabled on and off under Cohort List