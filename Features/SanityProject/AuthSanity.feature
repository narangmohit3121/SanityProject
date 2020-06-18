Feature: Author App Sanity Test cases for Content

Background: 
Given User should login in with "narang.mohit@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sanity folder


@AuthorSanityVideo01
@AuthorSanity01

Scenario: Verify user is able to upload video file via UPLOAD VIDEO button

When User navigates to an activity having video Blocks to edit video
When user clicks on Edit Video icon of added video content
When User clicks on Upload Video button and uploads a video file
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the video file should get uploaded

@AuthorSanityVideo01
@AuthorSanity01
Scenario: Verify if user can preserve the changes done to video URL

When User navigates to an activity having video Blocks to edit video
#When user clicks on Edit Video icon of added video content
When User changes the Direct mp4 video URL and clicks on Done
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then User should be able to preserve the changes done by clicking on SAVE DRAFT

@Sprint3
@AuthorSanity01
Scenario: Verify if user can preserve the changes done Full Screen, Autoplay, Auto Navigation

#Given User is on CMS - Activity Authoring Editing Page to edit Video
When User navigates to an activity having video Blocks to edit video
When user clicks on Edit Video icon of added video content
When User changes the settings for Show Full Screen, Autoplay, and Auto Navigation
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then User should be able to preserve the changes done to Show Full Screen, Autoplay,and Auto Navigation

@Sprint3
@AuthorSanity01
Scenario: Verify whether user is able to update Masthead Content and Heading

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Masthead Block
When User clicks on Edit Masthead button
When User updates Masthead Content and Heading
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the edits done to Masthead should get saved

@Sprint3
@AuthorSanity08
Scenario: Verify whether user is able to edit Text and upload image via BROWSE button for Text and Image block

When User navigates to an activity having Text and Image Block
When User clicks on Edit Text & Image icon
#When User selects Image Blocks as float image left
When User updates the description of Text and Image Block
When User changes attached image by using BROWSE button
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the edits done to Image and Content of Text and Image block should get saved

@Sprint3
@AuthorSanity01
Scenario: Verify if modified changes are getting saved if user clicks on SAVE EDIT from editable menu of Content

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Content Blocks to edit content
When User clicks on Edit Content icon
When User selects Number of Columns as 2
When User clicks on Background button
# When User select image by using CHOOSE IMAGE button
When User type the color in text box present as Choose color
When User enter some texts in all columns present under editor
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the edits done to content should get saved

@Sprint3
@AuthorSanity08
Scenario: Verify whether user is able to add file to Image block using CHOOSE IMAGE 

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Image Block
When User clicks on Edit Image button
When User clicks on CHOOSE IMAGE button
Then the list of images should be displayed
When User selects the Petronas Image collection
When user selects any random image from the Image Chooser
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the selected Image should get added to the image block

@Sprint3
@AuthorSanity01
Scenario: Verify if User can add more than one card from Card Editable menu

When User navigates to an activity having Card Block
When User clicks on Edit Cards icon
When User clicks on ADD CARD button and validates if new card is added to editable menu
When User put text in new Card Front content and Back Content
#When user clicks on save Edit and saves Draft and then clicks on Exit Editor
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the card should get added


@Sprint3
@AuthorSanity01
Scenario: Verify if User can delete card from Card Editable menu

When User navigates to an activity having Card Block
When User clicks on Edit Cards icon
When User clicks on Delete button of first Card
#When user clicks on Done and saves Draft and then clicks on Exit Editor
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the first card should get deleted

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new option to Single-Select of the type Radio

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a Single-Select of the type Radio
When User clicks on Edit Single Select button
When user deletes the first option of Single Select
When user adds a new option to Single Select of the type Radio
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Single-Select of the type Radio get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new option to Single-Select of the type Dropdown

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a Single-Select of the type Dropdown
When User clicks on Edit Single Select button
When user deletes the first option of Single Select
When user adds a new option to Single Select of the type Dropdown
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Single-Select of the type Dropdown get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new option to Single-Select of the type Long

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a Single-Select of the type Long
When User clicks on Edit Single Select button
When user deletes the first option of Single Select
When user adds a new option to Single Select of the type Long
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Single-Select of the type Long get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new option to Mutli-Select of the type Checkbox

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a Mutli-Select of the type Checkbox
When User clicks on Edit Multiple Select button
When user deletes the first option of Multiple Select
When user adds a new option to Multiple Select
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Multi-Select of the type checkbox|Long get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new option to Mutli-Select of the type Checkbox

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a Mutli-Select of the type Long
When User clicks on Edit Multiple Select button
When user deletes the first option of Multiple Select
When user adds a new option to Multiple Select
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Multi-Select of the type checkbox|Long get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new option to Mutli-Select of the type Checkbox

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a Mutli-Select of the type Dropdown
When User clicks on Edit Multiple Select button
When user deletes the first option of Multiple Select
When user adds a new option to Multiple Select
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Multi-Select of the type Dropdown get saved

@AuthorSanity01
Scenario: Verify whether user can save changes made to the block of the type Wordcloud

When User navigates to an activity that has a block of the type Wordcloud
When User clicks on Edit Wordcloud button
When user changes the Wordcase and Number of words to be used to generate Wordcloud
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to the Wordcloud block should get saved


@AuthorSanity01
Scenario: Verify whether user can save changes made to the block of the type Response Graph

When User navigates to an activity that has a block of the type Response Graph
When User clicks on Edit Response Graph button
When user changes the label of X-Axis and Y-axis on the Response Graph
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to the Response Graph should get saved

@AuthorSanity01
Scenario: Verify whether user can upload file to the block of the type Download

When User navigates to an activity that has a block of the type Download
When User clicks on Edit Download button
When user selects the option Upload Momenta Content Doc and uploads a file
#When user updates the Heading of Download Block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the file should get uploaded to the Download block

@AuthorSanity01
Scenario: Verify whether user can provide External Link to the block of the type Download

When User navigates to an activity that has a block of the type Download
When User clicks on Edit Download button
When user selects the option External Link and provides a Link
When user updates the Heading of Download Block
When User saves the changes made to the content
#When User saves the changes made to the Download Block
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the Heading should get updated and External Link should get added to the Download block

@AuthorSanity01
Scenario: Verify whether user update the block of the type Screen Grab

When User navigates to an activity that has a block of the type Screen Grab
When User clicks on Edit Screen Grab button
When User edits the filename of Screen Grab
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the updated filename of Screen Grab should get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new option and Question to Variable Grid

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a block of the type Variable Grid
When User clicks on Edit Variable Grid button
When user deletes the first option and Question of Variable Grid
When user adds a new option and question to Variable Grid
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Variable Grid should get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can update the block of the type Participant Response

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a block of the type Participant Response
When User clicks on Edit Participant Response button
When user changes the setting of Show Exercise Label
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Participant Response should get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can add a new tab to a block of the type Nested Content

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a block of the type Nested Content
When User clicks on Edit Nested Content button
When user deletes the last tab of Nested Content Block
When User adds a new tab to Nested Content Block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Nested Content should get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can update the Custom Code Block

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a block of the type Custom Code
When User clicks on Edit Custom Code button
When user updates the code under Custom Code block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Custom Code block should get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can update the Cohort Response Block

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity that has a block of the type Cohort Response
When User clicks on Edit Cohort Response button
When user updates the title and Next Response Label of Cohort Response Block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Cohort Response Block should get saved

@Sprint3
@AuthorSanity01
Scenario: Verify whether user can update the Discussion Thread Block

When User selects the Discussion Thread Content
When User clicks on Edit Discussion Thread Button
When User enters data in Discussion thread fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the changes made to Discussion thread should get reflected