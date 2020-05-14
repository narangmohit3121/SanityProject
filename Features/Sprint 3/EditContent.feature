Feature: Activity Authoring Editing

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint3 folder


@Sprint3
@EditContent04
Scenario: Verify that when user deletes any content by clicking on delete icon but selects No from alert message, then the Content does not get deleted 

#Given User is on CMS - Activity Authoring Editing Page to delete Content
When User navigates to an activity having Content Blocks to delete content
When user clicks on Delete icon and selects No from alert message 
Then respective content should not get deleted

When user clicks on collapsable arrow present
Then each and every content should get collapsed and expanded

@Sprint3
@EditContent04
Scenario: Verify if user can delete any content by clicking on delete icon
#Given User is on CMS - Activity Authoring Editing Page to delete Content
When User navigates to an activity having Content Blocks to delete content
When user clicks on Delete icon and selects Yes from alert message 
Then respective content should get deleted

@Sprint3
@EditContent04
Scenario: Verify if user can copy any content by clicking on copy icon

#Given User is on CMS - Activity Authoring Editing Page to copy Content
When User navigates to an activity having Content Blocks to copy content
When user clicks on Copy icon
Then copy of the content should get created at the bottom

@Sprint3
@EditContent04
Scenario: Verify if user clicks on EXIT EDITOR without saving modified contents

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Content Blocks to edit content
When User modified any details of existing content and clicks on EXIT EDITOR
Then modified details should not get saved

@Sprint3
@EditContent04
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Content

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Content Blocks to edit content
When User clicks on Edit Content icon
When User selects Number of Columns as 2
When User clicks on Background button
When User select image by using CHOOSE IMAGE button
When User type the color in text box present as Choose color
When User enter some texts in all columns present under editor
When user clicks on Cancel Edit and saves Draft and then clicks on Exit Editor
#When User save the changes done to content by clicking on SAVE DRAFT
Then the edits done to content should not get saved

@Sprint3
@ActivityEditing7
Scenario: Verify if new editable menu is getting opened after clicking on Edit Content icon  present for Content and it is functional

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Content Blocks to edit content
When User clicks on Edit Content icon
When User selects Number of Columns as 2
#When User select image by using CHOOSE IMAGE button
When User type the color in text box present as Choose color
When User updates texts in all columns present under editor
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to content should get saved