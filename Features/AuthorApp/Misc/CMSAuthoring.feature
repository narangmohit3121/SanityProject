Feature: Activity Authoring Editing

Background: 
#Given User should login in with "neha.seth@bts.com" and "123456"
#When User clicks on client tab
#When User should click on Petronas folder

@Sprint3
@ActivityEditing15
Scenario: Verify if Moments logo is present and functional

Given User should login in with "neha.seth@bts.com" and "123456"
When User clicks on client tab
When User should click on coca-cola folder
When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
When user checks if Momenta logo is present
When User clicks on Momenta logo

Then User should be redirected to Admin Landing Page with Client as default tab

@Sprint3
@DragnDrop
Scenario: Verify if Enter Title text box is present at the top of body of content

Given User is on CMS - Activity Authoring Editing Page

When user validates Enter Title text box and tries to give the title as "Test Activity_MN2"
When User puts description of content under the text box present at right panel as "Test Description"
#When User define the content type by selecting one of the value from drodown present under Content Type
When User add atleast one content i.e. Video by dragging it to main content body
When User save the title by clicking on SAVE DRAFT

Then User should be able to give title by using any character and new name should get reflected

@Sprint3
@ActivityEditing2
Scenario: Verify if user is redirecting to Client Landing Page once he/she is clicking on EXIT EDITOR button
Given User is on CMS - Activity Authoring Editing Page
When user clicks on EXIT EDITOR button
Then User should be redircted to Client Landing Page

@Sprint3
@ActivityEditing2
Scenario: Verify if collapsable dropdowns are present at the left side panel
Given User is on CMS - Activity Authoring Editing Page
When user clicks on anyone of the CONTENT present at left panel
Then User should be able to see content of the folder clicked 

@Sprint3
@ActivityEditing2

Scenario: Verify if Classification,Add Content and Animate in on scroll is visible on right side panel

Given User is on CMS - Activity Authoring Editing Page
When user checks for the content which is at right side panel
Then User should see all 3 editable menu as Classification,Add Content and Animate in on scroll

@Sprint3
@ActivityEditing2

Scenario: Verify if  User is seeing list of options after clicking on Content type

Given User is on CMS - Activity Authoring Editing Page
When user clicks on Content type dropdown
Then User can view list of content type options


@Sprint3
@ActivityEditing2

Scenario: Verify if Animate in on scroll is having toggle button and if it is functional
Given User is on CMS - Activity Authoring Editing Page
When user click on Animate in on scroll
Then User should be able to toggle On and Off


@Sprint3
@ActivityEditing4
Scenario: Verify that when user deletes any content by clicking on delete icon but selects No from alert message, then the Content does not get deleted 

Given User is on CMS - Activity Authoring Editing Page to delete Content
When user clicks on Delete icon and selects No from alert message 
Then respective content should not get deleted

When user clicks on collapsable arrow present
Then each and every content should get collapsed and expanded

@Sprint3
@ActivityEditing4
Scenario: Verify if user can delete any content by clicking on delete icon

Given User is on CMS - Activity Authoring Editing Page to delete Content
When user clicks on Delete icon and selects Yes from alert message 
Then respective content should get deleted

@Sprint3
@ActivityEditing6
Scenario: Verify if user can copy any content by clicking on copy icon

Given User is on CMS - Activity Authoring Editing Page to copy Content
When user clicks on Copy icon
Then copy of the content should get created at the bottom

@Sprint3
@ActivityEditing6
Scenario: Verify if user clicks on EXIT EDITOR without saving modified contents

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User modified any details of existing content and clicks on EXIT EDITOR
Then modified details should not get saved

@Sprint3
@ActivityEditing10
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Content

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Content icon
When User selects Number of Columns as 2
When User clicks on Background button
When User select image by using CHOOSE IMAGE button
When User type the color in text box present as Choose color
When User enter some texts in all columns present under editor
When user clicks on Cancel Edit so that changes donot get saved
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
#When User save the changes done to content by clicking on SAVE DRAFT
Then the edits done to content should not get saved

@Sprint3
@ActivityEditing7
Scenario: Verify if new editable menu is getting opened after clicking on Edit Content icon  present for Content and it is functional

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Content icon
When User selects Number of Columns as 2
#When User select image by using CHOOSE IMAGE button
#When User type the color in text box present as Choose color
When User updates texts in all columns present under editor
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to content should get saved

@Sprint3
@ActivityEditing8
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Text & Image

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User type some description in text box
When User select image by using CHOOSE IMAGE button
#When User type the color in text box present as Choose color
When user clicks on Cancel Edit so that changes donot get saved
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the edits done to Image and Text Content should not get saved

@Sprint3
@ActivityEditing8
Scenario: Verify if new editable menu is getting opened after clicking on Edit Text and Image button and it is functional

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User type some description in text box
When User select image by using CHOOSE IMAGE button
#When User type the color in text box present as Choose color
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to Image and Text Content should get saved

@Sprint3
@ActivityEditing8
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Type Image

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Image icon
When User select image by using CHOOSE IMAGE button
When user clicks on Cancel Edit so that changes donot get saved
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the edits done to Image Content should not get saved

@Sprint3
@ActivityEditing8
Scenario: Verify if new editable menu is getting opened after clicking on Edit Image button and it is functional

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Image icon
When User select image by using CHOOSE IMAGE button
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to Image Content should get saved


@Sprint3
@ActivityEditing9
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Type Card

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Cards icon
When User selects the card size out as Small
When User selects CARD BACK VERTICAL ALIGNMENT as Center
When User put text in Card Front content and Card Back Content
When user clicks on Cancel Edit so that changes donot get saved
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the edits done to Card should not get saved

@Sprint3
@ActivityEditing9
Scenario: Verify if new editable menu is getting opened after clicking on Edit Image button and it is functional

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Cards icon
When User selects the card size out as Small
When User selects CARD BACK VERTICAL ALIGNMENT as Center
When User put text in Card Front content and Card Back Content
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to Card should get saved

@Sprint3
@ActivityEditing11
Scenario: Verify if User can add more than one card from Card Editable menu

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Cards icon
When User clicks on ADD CARD button and validates if new card is added to editable menu
When User put text in new Card Front content and Back Content
When user clicks on Cancel Edit so that changes donot get saved
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the card should not get added


@Sprint3
@ActivityEditing11
Scenario: Verify if User can delete card from Card Editable menu

Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User clicks on Edit Cards icon
When User clicks on Delete Card button
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the card should get deleted


@Sprint3
@ActivityEditing11
Scenario: Verify if SAVE DRAFT and PUBLISH buttons are disabled till user dont select anyone option from Content Type

Given User is on CMS - Activity Authoring Editing Page
When user validates Enter Title text box and tries to give the title as "Test Activity_MN2"
When User puts description of content under the text box present at right panel as "Test Description"
When User define the content type by selecting one of the value from drodown present under Content Type
Then Save Draft and Publish buttons should be disabled.


@Sprint3
@ActivityEditing11
Scenario: Verify if user refresh the page and land on the same page

Given User is on CMS - Activity Authoring Editing Page
When User refresh the page by clicking on Refresh icon
Then User should land on same page with all saved details


