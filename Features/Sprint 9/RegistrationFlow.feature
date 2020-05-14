Feature: Participant Registration Flow

Background:

@Sprint10
@RegFlow1
Scenario: Verfiy that Particpant user is able to see the registration flow

Given Participant should login in with "automationOne@petronas.com" and "ABab12$"
When user selects the the industry as "Qa Test3"
When user selects the region as "Asia"
When User selects gender as "Male"
When User enters the age as "25"
When User selects technical as "yes"
When user selects "Yes" for manage accounts
Then Participant user should be taken to the Home page