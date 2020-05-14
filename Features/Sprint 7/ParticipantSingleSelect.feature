Feature: Single Select Input block Scenario

Background: 

Given Participant should login in with "naveen@microsoft.com" and "ABab12$"

@Sprint4
Scenario: Verify if the selected option is highlighted under Single Select component

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant navigates to activity containing Single Select
When Paritcipant selects any options of that single select activity
Then The selected option should be highlighted of single select activity

@Sprint4
Scenario: Verify if participant clicks anywhere on the option to select it

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant navigates to activity containing Single Select
When Paritcipant tried to select any option by clicking anywhere in option area of single select activity
Then The selected option should be highlighted of single select activity