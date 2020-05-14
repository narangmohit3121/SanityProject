Feature: Activity Page Scenario

Background: 

Given Participant should login in with "abhijeet@microsoft.com" and "ABab12$"

@Sprint4
Scenario: Verify whether user is able to land Activity Page and verify Title of Activity Page

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant clicks on any Activity of Module
Then Participant should see the Activity Title below Module name
Then Participant clicks on Continue button
Then Participant clicks on Back button
