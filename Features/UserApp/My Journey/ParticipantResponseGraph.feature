Feature: Response Graph Participant Scenario

Background: 

Given Participant should login in with "abhijeet@petronas.com" and "ABab12$"
When Participant should be landed on My Journey Page
When Participant clicks on any Module containing Response Graph
When Participant clicks on any Activity containing Response Graph

Scenario: Verify if Participant is landed to Response Graph page correctly

Then Participant should be landed to Response Graph page

@Sprint7
Scenario: Verify if Participant is able to see Single Select Question and select appropriate option correctly

When Participant should be able to view Single Select Question correctly
When Participant should be able to select appropriate option correclty
When Participant clicks on Continue button
When Participant clicks on Continue button
Then Participant should be able to view Response Graph correctly

Scenario: Verify if Participant is able to validate Response Graph correclty

