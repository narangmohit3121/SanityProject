@E2ETest_CMS
Feature: Activity Authoring Editing

Background: 
Given User Logs in as admin user
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint3 folder


@Sprint3
@ActivityEditing002
Scenario: Verify if Momenta logo is present and functional

When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
When user checks if Momenta logo is present
When User clicks on Momenta logo
Then User should be redirected to Admin Landing Page with Client as default tab

@Sprint3
@ActivityEditing002
Scenario: Verify if user is redirecting to Client Landing Page once he/she is clicking on EXIT EDITOR button
#Given User is on CMS - Activity Authoring Editing Page
When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
When user clicks on EXIT EDITOR button
Then User should be redircted to Client Landing Page

# @Sprint3
# @ActivityEditing002
# Scenario: Verify if collapsable dropdowns are present at the left side panel
# #Given User is on CMS - Activity Authoring Editing Page
# When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
# When user clicks on anyone of the CONTENT present at left panel
# Then User should be able to see content of the folder clicked

@Sprint3
@ActivityEditing002

Scenario: Verify if Classification,Add Content and Animate in on scroll is visible on right side panel

#Given User is on CMS - Activity Authoring Editing Page
When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
When user checks for the content which is at right side panel
Then User should see all 3 editable menu as Classification,Add Content and Animate in on scroll

@Sprint3
@ActivityEditing002

Scenario: Verify if  User is seeing list of options after clicking on Content type

#Given User is on CMS - Activity Authoring Editing Page
When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
When user clicks on Content type dropdown
Then User can view list of content type options


@Sprint3
@ActivityEditing002

Scenario: Verify if Animate in on scroll is having toggle button and if it is functional
#Given User is on CMS - Activity Authoring Editing Page
When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
When user click on Animate in on scroll
Then User should be able to toggle On and Off

@Sprint3
@ActivityEditing002
Scenario: Verify if SAVE DRAFT and PUBLISH buttons are disabled till user dont select anyone option from Content Type

#Given User is on CMS - Activity Authoring Editing Page
When User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor
When user validates Enter Title text box and tries to give the title as "Test Activity_MN2"
When User puts description of content under the text box present at right panel as "Test Description"
When User unselects the Content Type
Then Save Draft and Publish buttons should be disabled
When User define the content type by selecting one of the value from drodown present under Content Type
Then Save Draft and Publish buttons should be enabled
