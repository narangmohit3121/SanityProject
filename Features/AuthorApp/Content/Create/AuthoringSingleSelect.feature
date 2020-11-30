@E2ETest_CMS
Feature: Author Single Select Feaure

Background: 
Given User Logs in as admin user
When User should click on Client Tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas

@Sprint7
@AuthSingleSelect1
Scenario: Verify that the content type 'Selection' is displayed to the user
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
Then User should able to view SELECTION content block under Add Content List

@Sprint7
@AuthSingleSelect2
Scenario: Verify that user is able to edit content by clicking on 'Edit Selection'
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Selection link under CMS editor
Then Selection Model window should popup with SELECTION as title

@Sprint7
@AuthSingleSelect3
Scenario: Verify that Single Select / Multi Select tabs are displayed to the user when user clicks on 'Edit Selection'
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Selection link under CMS editor
Then Single Select and Multiple Select tabs should be displayed

@Sprint7
@AuthSingleSelect4
Scenario: Verify the Content-Type radio button options are displayed and functional
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Selection link under CMS editor
When User views content-type radio buttons
Then User should able to toggle between Short and Long content-type radio buttons

@Sprint7
@AuthSingleSelect5
Scenario Outline: Verify that user is able to enter numeric / alphabetical / alphanumeric text in the Journey Script Id field and save
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Selection link under CMS editor
When User enters "<alphabets or numbers or alphanumeric>" text in Journey Script Id and clicks on save
Then Journey Script ID should get saved successfully

Examples:
| alphabets or numbers or alphanumeric  |
| alphabets  |
| 123456     |
| alpha123456|

@Sprint7
@AuthSingleSelect6
Scenario: Verify that user is able to enter text in the 'Type Selection Title' and 'Item Title' and 'Item Description' fields
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Selection link under CMS editor
When User enters 'Single Select Question' text in Type Selection Title and clicks on save
Then Type Selection Title should get saved successfully
When User enters 'SS Option 1' text in Item 1 Title and clicks on save
Then Item 1 Title should get saved successfully
When User toggles radio button from Short to Long
When User enters 'SS Option 1 Long Description' text in Item 1 Description and clicks on save
Then Item 1 Description should get saved successfully


# #@Sprint7
# @AuthSingleSelect7
# Scenario: Verify that User is able to add item using the ‘Add Item’ button
# When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
# When User clicks on Edit Selection link under CMS editor
# When User clicks on Add Item button multiple times
# Then Single Selection block should get saved successfully


@Sprint7
@AuthSingleSelect8
Scenario: Verify that the Single Select changes don’t get saved when user clicks on 'Cancel' button
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Selection link under CMS editor
When User enters 'Single Select Question' text in Type Selection Title and clicks on save
Then Type Selection Title should get saved successfully
When User enters 'SS Option 1' text in Item 1 Title and clicks on save
Then Item 1 Title should get saved successfully
When User clicks on Add Item button multiple times
When User enters 'SS Option 2' text in Item 2 Title and clicks on cancel
Then Item 2 Title should not get saved successfully

@Sprint7
@AuthSingleSelect9
Scenario: Verify that text provided in the SINGLE SELECT is retained when user switches tabs Single Select to Multi Select and then back
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Selection link under CMS editor
When User enters 'Single Select Question' text in Type Selection Title and clicks on save
Then Type Selection Title should get saved successfully
When User enters 'SS Option 1' text in Item 1 Title and clicks on save
Then Item 1 Title should get saved successfully
When User clicks on Add Item button multiple times
When User enters 'SS Option 2' text in Item 2 Title
When User clicks on Multiple Select Tab and switches back to Single Select tab
Then Newly added Single Select data should be retained even after switching

@Sprint7
@AuthSingleSelect10
Scenario: Verify that user is able to duplicate the content type Single Select using the DUPLICATE icon
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on copy icon besides Edit Selection under CMS editor
Then Copied Single Selection block should get displayed under CMS editor


@Sprint7
@AuthSingleSelect11
Scenario: Verify that user is able to delete the content type Single Select using the DELETE icon
When User clicks on SingleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on copy icon besides Edit Selection under CMS editor
When User clicks on delete icon besides Edit Selection under CMS editor
Then Single Selection block should get deleted under CMS editor

