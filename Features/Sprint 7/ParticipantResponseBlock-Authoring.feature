Feature: ParticipantResponseBlock-Authoring Scenario

Background: 

Given Author should login in with "neha.seth@bts.com" and "123456"
When User should click on Client Tab

@Sprint07
Scenario: Verify if Title of the Participant Response Block is present & 'CANCEL' button is functional

When User search for particular client having Participant Response block and clicks on it
When User navigates to any Content block having Participant Response block
When User clicks on Edit Participant Response header
Then User should be able to view Participant Response heading on top of dialog box
Then User should click on Cancel button to close Participant Response window

@Sprint07
Scenario: Verify if Dropdown to select 'Journey Script ID' is functional

When User search for particular client having Participant Response block and clicks on it
When User navigates to any Content block having Participant Response block
When User clicks on Edit Participant Response header
Then User should be able to select option from Journey Script ID

@Sprint07
Scenario: Verify if toggle switch of 'Show Excerise Label' can be toggled between 'On' and 'Off'

When User search for particular client having Participant Response block and clicks on it
When User navigates to any Content block having Participant Response block
When User clicks on Edit Participant Response header
Then User should be able to switch Show Excerise Label

@Sprint07
Scenario: Verify if Journey Script IDs of all published 'Single Select' and 'Multi Select' activities are  listed in Journey Script ID dropdown

When User search for particular client having Participant Response block and clicks on it
When User navigates to any Content block having Participant Response block
When User clicks on Edit Participant Response header
When User clicks on Journey Script ID option
Then User should view list of all published activities of Single Select and Multi Select


#Scenario: Verify if 'Save' button is clickable and functional


