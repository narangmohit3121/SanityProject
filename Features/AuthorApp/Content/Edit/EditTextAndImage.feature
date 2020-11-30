@E2ETest_CMS
Feature: Edit Text and Image Content Block

Background: 
Given User Logs in as admin user
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint3 folder


@Sprint3
@TextImage01
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of Text & Image

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Text and Image Block
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User type some description in text box
When User uploads image by using BROWSE button
#When User type the color in text box present as Choose color
When user clicks on Cancel Edit so that changes donot get saved
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the edits done to Image and Text Content should not get saved

@Sprint3
@TextImage02
Scenario: Verify whether user is able to upload image via BROWSE button

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Text and Image Block
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User type some description in text box
When User uploads image by using BROWSE button
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to Image and Text Content should get saved

@ActivityEditing9
Scenario: Verify that there are some media objects available under Petronas Folder

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Text and Image Block
When User clicks on Edit Text & Image icon
When User selects Image Blocks as float image left
When User clicks on CHOOSE IMAGE button
When User selects the Petronas Image collection
Then the list of images should be displayed