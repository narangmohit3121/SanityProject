Feature: Module Completion Page Scenario

Background: 

Given Participant should login in with "abhijeet@microsoft.com" and "ABab12$"

@Sprint4
Scenario: Verify whether user is able to see Module completion Page with completed status and circle icon checked

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant clicks on any Activity of Module
When Participant clicks on Continue button
When Participant clicks on Continue button
Then Participant should be able to see Module completion Page with completed status and circle icon checked