@E2ECohortUsers
Feature: Move User feature testing

Background:
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation MoveUser" and clicks on it
#When User click on any journey
#When User click on any cohortTitle
#When User searches Journey in Filter Journeys as ""
# @E2ECohortUsers
# @MoveUser1
Scenario: Verify if User is able to move to Cohort successfully

When User clicks on Cohort under Cohort listing page as "MoveUser Cohort-1"
When User clicks on User under User listing page as "moveuser"
When User clicks on Teams Tab
Then User clicks on Move button and selects Cohort dropdown as "MoveUser Cohort-2" and clicks on Move

When User navigates back to Journey "Automation MoveUser" under left Panel

When User clicks on Cohort under Cohort listing page as "MoveUser Cohort-2"
Then User validates whether the user "moveuser" has moved successfully
When User clicks on User under User listing page as "moveuser" 
When User clicks on Teams Tab
Then User clicks on Move button and selects Cohort dropdown as "MoveUser Cohort-1" and clicks on Move



# @Sprint20
# #@MoveUser1
# Scenario: Verify that move user successfull

#Given User get login in Admin site
#Then I click on Client button
#Then I enter "petronas" in search text box
#Then click on petronas Client
#Then click on Cohorts-Users tab
# Then enter "Pramod" in search text box and hit on enter
# Then click on Automation Journey Pramod Journey
# Then click on cohort pramod test cohort
# Then click on user pramod
# Then click on Teams tab
# Then click on Move button
# Then get current cohort name
# Then select another cohort name
# Then select different team from drop down
# Then click on the Move button
# Then verify the success message