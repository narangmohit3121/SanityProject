Feature: User Mapping

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User click on user tab
When User click on View More

@Sprint16
Scenario: Verify if user created in one Cohort of any Journey cannot be mapped in another Cohort of same Journey

When User clicks on first Journey mapped for User Mapping
When User clicks on second Cohort under first Journey mapped for User Mapping
When User clicks on Add User for User Mapping
When User search for any user created in same Journey as "dwyane"
Then User should not find that searched user

@Sprint16
Scenario: Verify if user created in one Cohort of any Journey can be mapped in any Cohort of different Journey

When User clicks on second Journey mapped for User Mapping
When User clicks on first Cohort under second Journey mapped for User Mapping
When User clicks on Add User for User Mapping
When User search for any user created in same Journey as "dwyane"
Then User should be able to find that searched user