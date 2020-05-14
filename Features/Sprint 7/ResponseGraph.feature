Feature: Response Graph Authoring Scenario

Background: 

Given Author should login in with "neha.seth@bts.com" and "123456"
When User should click on Client Tab

@Sprint07
Scenario: Verify if Title of the Response Graph Block is present in BOLD as 'Poll Results' and CANCEL button is functional

When User search for particular client having Response Graph and clicks on it
When User navigates to any Content block having Response Graph
When User clicks on Edit Response Graph header
Then User should be able to view Response Graph heading on top of dialog box
Then User should click on Cancel button to close Response Graph window

@Sprint07
Scenario: Verify if Dropdown to select 'Question ID' is functional

When User search for particular client having Response Graph and clicks on it
When User navigates to any Content block having Response Graph
When User clicks on Edit Response Graph header
Then User should be able to select option from Question ID

@Sprint07
Scenario: Verify if Journey Script IDs of all published 'Single Select' and 'Multi Select' activities are  listed in Journey Script ID dropdown

When User search for particular client having Response Graph and clicks on it
When User navigates to any Content block having Response Graph
When User clicks on Edit Response Graph header
#When User clicks on Question ID option
Then User should view list of all published activities of Single Select and Multi Select on Response Graph