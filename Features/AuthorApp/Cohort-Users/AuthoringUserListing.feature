@E2ECohortUsers
Feature: User Listing

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
#When User clicks on any Journey under Journeys list to land to cohort listing page
#When User clicks on any cohort name

When User searches Journey in Filter Journeys as "Automation UserListing"
When User clicks on Journey "Automation UserListing" under Journeys list
When User clicks on cohort "UserListingCohort" to Reset Journey
# @E2ECohortUsers
# @Sprint08

Scenario: Verify Clicking on a ‘Cohort Name’ should redirect the author to User listing

Then User should land to User listing page

#@AuthoringUserListing
#@Sprint08
#@AuthoringUserListing4
#Scenario: Verify if user is able to Enable (On/Off) toggle under user list

#When User clicks on Enable On Off toggle

 
# @E2ECohortUsers
# @AuthoringUserListing3
Scenario: Verify if user is able to sort the User list

When User validates the User list before sorting
When User clicks on arrow icon next to the User header
Then User should be able to sort the Users header



