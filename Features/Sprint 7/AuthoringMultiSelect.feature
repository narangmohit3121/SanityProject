Feature: Authoring Multi Select Feature

Background: 
Given User should login in with "neha.seth@bts.com" and "123456"
When User should click on Client Tab
When User should click on Petronas folder

@Sprint07
@AuthMultiSelect1
Scenario: Verify that the content type 'Selection' is displayed to the user
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
Then User should able to view SELECTION content block under Add Content List for Multiple Select

@Sprint07
@AuthMultiSelect2
Scenario: Verify that user is able to edit content by clicking on 'Edit Selection'
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Multi-Select link under CMS editor
Then Selection Model window should popup with SELECTION as title for Multiple Select

@Sprint07
@AuthMultiSelect3
Scenario: Verify that Single Select / Multi Select tabs are displayed to the user when user clicks on 'Edit Selection'
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Multi-Select link under CMS editor
Then Single Select and Multiple Select tabs should be displayed for Multiple Select

@Sprint07
@AuthMultiSelect4
Scenario: Verify the Content-Type radio button options are displayed and functional
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Multi-Select link under CMS editor
When User views content-type radio buttons for Multiple Select
Then User should able to toggle between Short and Long content-type radio buttons for Multiple Select

@Sprint07
@AuthMultiSelect5
Scenario: Verify that user is able to enter text in the 'Type Selection Title' and 'Item Title' and 'Item Description' fields
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Multi-Select link under CMS editor
When User enters 'Multi Select Question' text in Type Selection Title for Multiple Select and clicks on save
Then Type Selection Title for Multiple Select should get saved successfully
When User enters 'MS Option 1' text in Item 1 Title for Multiple Select and clicks on save
Then Item 1 Title for Multiple Select should get saved successfully
When User enters 'MS Option 1 Long Description' text in Item 1 Description for Multiple Select and clicks on save
Then Item 1 Description for Multiple Select should get saved successfully

#@Sprint7
@AuthMultiSelect6
Scenario: Verify that User is able to add item using the ‘Add Item’ button
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on Edit Multi-Select link under CMS editor
When User clicks on Add Item button multiple times and clicks on save
Then Multiple Selection block should get saved successfully

@Sprint07
@AuthMultiSelect7
Scenario: Verify that user is able to duplicate the content type Multiple Select using the DUPLICATE icon
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on copy icon besides Edit Multi-Select under CMS editor
Then Copied Multiple Selection block should get displayed under CMS editor

@Sprint07
@AuthMultiSelect8
Scenario: Verify that user is able to delete the content type Single Select using the DELETE icon
When User clicks on MultipleSelect content block under CONTENT section and lands on CMS-Activity Authoring Editor
When User clicks on copy icon besides Edit Multi-Select under CMS editor
When User clicks on delete icon besides Edit Multi-Select under CMS editor
Then Multiple Selection block should get deleted under CMS editor