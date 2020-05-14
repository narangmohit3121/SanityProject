Feature: Text and Image Content Block

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint3 folder

@Sprint3
@ActivityEditing9
Scenario: Blank step
Then this is a blank step

@Sprint3
@ActivityEditing8
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Type Image

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Image Block
When User clicks on Edit Image icon
When User select image by using BROWSE button
When user clicks on Cancel Edit and saves Draft and then clicks on Exit Editor
Then the edits done to Image Content should not get saved

@Sprint3
@ActivityEditing8
Scenario: Verify if new editable menu is getting opened after clicking on Edit Image button and it is functional

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Image Block
When User clicks on Edit Image icon
When User select image by using BROWSE button
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to Image Content should get saved