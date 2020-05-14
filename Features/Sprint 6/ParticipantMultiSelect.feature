Feature: Multi Select Input block Scenario

Background: 

Given Participant should login in with "naveen@petronas.com" and "ABab12$"

@Sprint6
Scenario: Verify if the selected options should be highlighted

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant navigates to activity containing Multi Select
When Paritcipant selects any options
Then The selected option should be highlighted
Then Participant should click on Logout button

@Sprint6
Scenario: Verify if participant clicks anywhere on the option to select & deselect it

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant navigates to activity containing Multi Select
When Paritcipant tried to select any option by clicking anywhere in option area
Then The selected option should be highlighted
Then Participant should click on Logout button