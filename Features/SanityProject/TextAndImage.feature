Feature: Sanity TCs for Text and Image Content Block

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sanity folder


@Sprint3
@ActivityEditing8
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Text & Image

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Text and Image Block
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User type some description in text box
When User select image by using BROWSE button
#When User type the color in text box present as Choose color
When user clicks on Cancel Edit and saves Draft and then clicks on Exit Editor
Then the edits done to Image and Text Content should not get saved

@Sprint3
@ActivityEditing8
Scenario: Verify whether user is able to upload image via BROWSE button

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Text and Image Block
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User type some description in text box
When User select image by using BROWSE button
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to Image and Text Content should get saved

@ActivityEditing9
Scenario: Verify whether the list of images is displayed when user clicks on CHOOSE IMAGE button

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Text and Image Block
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User clicks on CHOOSE IMAGE button
Then the list of images should be displayed
