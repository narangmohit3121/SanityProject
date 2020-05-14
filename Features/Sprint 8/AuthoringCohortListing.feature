Feature: Cohort Listing

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

@Sprint08
Scenario: Verify if Author is able to land on Cohort Listing page when clicked on any Journey under User Dashboard

When User clicks on Users Tab
When User clicks on any Journey under Journeys list to land to cohort listing page
Then User should land to Cohort Listing Page

@Sprint08
Scenario: Verify Clicking on a ‘Cohort name’ should display the user list under that cohort
When User clicks on Users Tab
When User clicks on any Journey under Journeys list to land to cohort listing page
When User clicks on any cohort name
Then User should be able to view user list under that cohort

@Sprint08
Scenario: Verify if Author is able to view 'Test' section with True / False under Cohort list
When User clicks on Users Tab
When User clicks on any Journey under Journeys list to land to cohort listing page
Then User should be able to view Test section

@Sprint08
Scenario: Verify if Author is able to toggle 'Enabled' on / off under the Cohort list
When User clicks on Users Tab
When User clicks on any Journey under Journeys list to land to cohort listing page
Then User should be able to toggle Enabled on and off under Cohort List

@Sprint08
@AuthoringCohortListing
Scenario: Verify Author should be able to Sort the header by clicking on the icon next to the labels in the header

When User clicks on Users Tab
When User clicks on any Journey under Journeys list to land to cohort listing page
When User clicks on icon next to the labels in the header
Then User should be able to sort the header
