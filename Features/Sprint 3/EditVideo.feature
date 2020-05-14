Feature: Activity Authoring Editing

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint3 folder


@Sprint3
@VideoActivity01

Scenario: Verify user is able to upload video file via UPLOAD VIDEO button

#Given User is on CMS - Activity Authoring Editing Page to edit Video
When User navigates to an activity having video Blocks to edit video
When user clicks on Edit Video icon of added video content
When User clicks on Upload Video button and uploads a video file
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the video file should get uploaded

@Sprint3
@VideoActivity01

Scenario: Verify edit video functionality

When User navigates to an activity having video Blocks to edit video
When user clicks on Edit Video icon of added video content
Then User should see editable menu which have optons as size,Upload Video,CANCEL EDIT and DONE
When User changes the Direct video URL for MP4 video but clicks on CANCEL EDIT
Then User should not see the video uploaded

@Sprint3
@VideoActivity01
Scenario: Verify if user can preserve the changes done by clicking on SAVE DRAFT

When User navigates to an activity having video Blocks to edit video
#When user clicks on Edit Video icon of added video content
When User changes the Direct mp4 video URL and clicks on Done
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then User should be able to preserve the changes done by clicking on SAVE DRAFT

@Sprint3
@VideoActivity01
Scenario: Verify if user can preserve the changes done by clicking on SAVE DRAFT

#Given User is on CMS - Activity Authoring Editing Page to edit Video
When User navigates to an activity having video Blocks to edit video
When user clicks on Edit Video icon of added video content
When User changes the settings for Show Full Screen, Autoplay, Auto Navigation, isSecure and saves the settings
Then User should be able to preserve the changes done to Show Full Screen, Autoplay, Auto Navigation, isSecure fields