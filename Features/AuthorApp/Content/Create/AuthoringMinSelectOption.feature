@E2ETest_CMS
Feature: Minimum Select Option for MultiSelect

Background: 
Given User Logs in as admin user
When User should click on Client Tab
When User should click on Petronas folder
#When User clicks on Users Tab

Scenario: Verify if Author is able to see 'Min Number of Items to Select' option and increase/decrease count at Multi Select window

When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Multi-Select link under CMS editor
Then User checks if Min Select Option is displayed
Then User clicks on plus symbol to increase the count
Then User clicks on minus symbol to decrease the count
Then User clicks on Save to save Min Select value
