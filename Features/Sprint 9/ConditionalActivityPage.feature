Feature: Conditional Activity Page

Background: 

Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User click on View More

When User clicks on any Journey under Journeys list to Reset Journey
When User clicks on any cohort name to Reset Journey
When User clicks on any User to Reset Journey
When User clicks on Journeys Tab to Reset Journey
When User clicks on Reset Journey Data button

@Sprint9
Scenario Outline: Verify if user is able to view Conditional Activity Page if user role is Yes and user selects Yes in Registration Flow

When User clicks on Content Tab
When User click on Automation do not Delete folder
When User click on Sprint9 folder
When User clicks on Conditional Activity content block under CONTENT section
When User clicks on Edit Page to open Page Divider
When User enters value as '<User Role>'
When User clicks on Save button to save Page Divider
Then User clicks on Save and PUBLISH
Given Participant should login in with "resetjoureny@petronas.com" and "ABab12$"
When User select an industry as "Qa Test1"
#When user selects the the industry as "Qa Test1"
When user select the region as "Asia"
#When user selects the region as "Asia"
#When User selects gender as "Male"
When user selects "Yes" for manage accounts
Then Participant clicks on Continue button for Conditional Activity
When Participant selects Single Select option
Then Participant clicks on Continue button for Conditional Activity
When Participant click on GoToNextModule button
When Participant starts Security Alert Activity
Then Participant clicks on Continue button for Conditional Activity
When Participant click on GoToNextModule button
Then Participant validates Conditional Module Title


Examples:
| User Role         |
| user.role==="Yes" |

#@Sprint9
Scenario Outline: Verify if user is able to view Conditional Activity Page if user role is No and user selects No in Registration Flow

When User clicks on Content Tab
When User clicks on Conditional Activity content block under CONTENT section
When User clicks on Edit Page to open Page Divider
When User enters value as '<User Role>'
When User clicks on Save button to save Page Divider
Then User clicks on Save and PUBLISH
Given Participant should login in with "ct@petronas.com" and "ABab12$"
When user selects the the industry as "Qa Test1"
When user selects the region as "Asia"
#When User selects gender as "Male"
When user selects "No" for manage accounts
Then Participant clicks on Continue button for Conditional Activity
When Participant selects Single Select option
Then Participant clicks on Continue button for Conditional Activity
When Participant click on GoToNextModule button
When Participant starts Security Alert Activity
Then Participant clicks on Continue button for Conditional Activity
When Participant click on GoToNextModule button
Then Participant validates Conditional Module Title

Examples:
| User Role         |
| user.role==="No"  |