Feature: User Listing

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User clicks on any Journey under Journeys list to land to cohort listing page
When User clicks on any cohort name

@Sprint08
Scenario: Verify Clicking on a ‘Cohort Name’ should redirect the author to User listing

Then User should land to User listing page

@Sprint08
Scenario: Verify Clicking on ‘Create User’ should allow the user to author to create a fresh user

When User clicks on Create User
When User fills all the details in Create User window
When User clicks on CREATE button to create fresh user
Then Fresh User should be created and added to User list

@Sprint08
Scenario: Verify Clicking on a User name should allow the author to Edit the user detail

When User clicks on any User name
Then User should be able to edit the user details

@Sprint08
@AuthoringUserListing
Scenario: Verify if user is able to Enable (On/Off) toggle under user list

When User clicks on Enable On Off toggle

 





