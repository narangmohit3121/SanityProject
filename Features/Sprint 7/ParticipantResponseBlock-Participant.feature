Feature: ParticipantResponseBlock-Participant Scenario

Background: 

Given Participant should login in with "abhijeet@petronas.com" and "ABab12$"
When Participant should be landed on My Journey Page
When Participant clicks on any Module containing Participant Response Block
When Participant clicks on any Activity containing Participant Response Block

@Sprint7
Scenario: Verify whether user is able to navigate Participant Response Block page and view its title and description

Then Participant should be able to land Response Block Activity Page

Scenario: Verify whether user is able to see the single/multi select question and select answer in Participant Response Block

When Participant should be able to view single select question correctly
Then Participant should be able to select answer for single select question
Then Participant clicks on Continue button from Participant Response Block
When Participant should be able to view multi select question correctly
Then Participant should be able to select answer for multi select question
Then Participant clicks on Continue button from Participant Response Block
Then Participant should view same answer selected for single and multi select questions


#Scenario: Verify whether user is able to see the multi select question and select answer in Participant Response Block

#When Participant should be able to view multi select question correctly
#Then Participant should be able to select answer for multi select question
#Then Participant clicks on Continue button from Participant Response Block

Scenario: Verify whether user is able to see the same answer selected for single/multi select question in Participant Response Block Page correctly

Then Participant should be able to select answer for single select question
Then Participant clicks on Continue button
Then Participant should be able to select answer for multi select question
Then Participant clicks on Continue button
Then Participant should view same answer selected for single and multi select questions