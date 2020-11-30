@E2ECohortUsers
Feature: Cohort Listing

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

# @Sprint08
# @AuthoringCohortListing1
Scenario: Verify if Author is able to land on Cohort Listing page when clicked on any Journey under User Dashboard

When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation CohortListing"
When User clicks on Journey "Automation CohortListing" under Journeys list
Then User should land to Cohort Listing Page

#@Sprint08
#@AuthoringCohortListing2
Scenario: Verify Clicking on a ‘Cohort name’ should display the user list under that cohort
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation CohortListing"
When User clicks on Journey "Automation CohortListing" under Journeys list
When User clicks on cohort "CohortListing1" to Reset Journey
Then User should be able to view user list under that cohort

# @E2ECohortUsers
# #@Sprint08
# @AuthoringCohortListing3
Scenario: Verify if Author is able to view 'Test' section with True / False under Cohort list
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation CohortListing"
When User clicks on Journey "Automation CohortListing" under Journeys list
Then User should be able to view Test section

# @E2ECohortUsers
# #@Sprint08
# @AuthoringCohortListing4
Scenario: Verify if Author is able to toggle 'Enabled' on / off under the Cohort list
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation CohortListing"
When User clicks on Journey "Automation CohortListing" under Journeys list
When User clicks on Cohort Settings button of Cohort "CohortListing1"
Then User should be able to toggle Enabled on and off under Cohort List

# @E2ECohortUsers
# #@Sprint08
# @AuthoringCohortListing5
Scenario: Verify Author should be able to Sort the header by clicking on the icon next to the labels in the header

When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation CohortListing"
When User clicks on Journey "Automation CohortListing" under Journeys list
When User validates the Cohort list before sorting
When User clicks on arrow icon next to the Cohort header
Then User should be able to sort the header
