Feature: Add User
# Add User under Cohort / Copy User under Cohort

Background:
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
#When User clicks on any Journey under Journeys list to land to cohort listing page
When User clicks on the Journey named Automation_Add Cohort
#When User clicks on any cohort name
When User clicks on the cohort named Automation Cohort

@Sprint9
@AuthoringAddUser1
Scenario: Verify if clicking on "Add User" button opens up Add User popup list
#Given user is on the cohort page
When user click on Add User button
Then Add User popup list should get displayed

@Sprint9
@AuthoringAddUser6
Scenario: Verify if user can search and check users successfully from "Add User"
Given user is on the cohort page
When user click on Add User button
When Add User popup list should get displayed
#When user tries to search "AutomationUser@microsoft.com"
When user tries to search "Mohit"
Then user should able to view searched user successfully under popup

@Sprint9
@AuthoringAddUser6
Scenario: Verify clicking on Add button under "Add User"
Given user is on the cohort page
When user click on Add User button
When Add User popup list should get displayed
#When user tries to search "AutomationUser@microsoft.com"
When user adds the first user in the search results
When user clicks on Add button
Then user should get mapped to the cohort successfully
Then searched user should also get removed from the Add User list

@Sprint9
@AuthoringAddUser6
Scenario: Verify clicking on Cancel button under "Add User"
Given user is on the cohort page
When user click on Add User button
When Add User popup list should get displayed
#When user tries to search "AutomationUser@microsoft.com"
When user adds the first user in the search results
When user clicks on Cancel button
Then searched user should not get mapped to the cohort


#Scenario: Verify once the user is added in cohort, then same user should not be present under "Add User" list
#Given user is on the cohort page
#When user click on Add User button
#When Add User popup list should get displayed
#When user tries to search "AutomationUser@microsoft.com"
#When user clicks on Add button
#Then searched user should get mapped to the cohort successfully
#Then searched user should also get removed from the Add User list


@Sprint9
@AuthoringAddUser7
Scenario: Verify on creating a new user in one cohort and it should not get listed in another cohort of the same journey but should get listed in a cohort of another journey
Given user navigates to a different Cohort
When user creates a new Participant User
When newly created user should get mapped to the cohort successfully
#When User clicks on any cohort name
When User clicks on the cohort named Automation Cohort
When user click on Add User button
Then the newly added user should not get listed in another cohort when ADD USER button is clicked
When user navigates to the User Dashbaord
When user navigates to a different journey
When User clicks on the cohort of changed journey
When user click on Add User button
Then the newly added user should be listed in another cohort when ADD USER button is clicked


