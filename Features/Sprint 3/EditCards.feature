Feature: Activity Authoring Editing

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint3 folder



@Sprint3
@Cards2
Scenario: Verify if modified changes are not getting saved if user clicks on CANCEL EDIT from editable menu of content Type Card

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Card Block
When User clicks on Edit Cards icon
When User selects the card size out as Small
When User selects CARD BACK VERTICAL ALIGNMENT as Center
When User put text in Card Front content and Card Back Content
When user clicks on Cancel Edit and saves Draft and then clicks on Exit Editor
Then the edits done to Card should not get saved

@Sprint3
@Cards2
Scenario: Verify if new editable menu is getting opened after clicking on Edit Card button and it is functional

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Card Block
When User clicks on Edit Cards icon
When User selects the card size out as Small
When User selects CARD BACK VERTICAL ALIGNMENT as Center
When User put text in Card Front content and Card Back Content
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the edits done to Card should get saved

@Sprint3
@Cards2
Scenario: Verify if User can add more than one card from Card Editable menu

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Card Block
When User clicks on Edit Cards icon
When User clicks on ADD CARD button and validates if new card is added to editable menu
When User put text in new Card Front content and Back Content
When user clicks on save Edit and saves Draft and then clicks on Exit Editor
Then the card should get added


@Sprint3
@Cards2
Scenario: Verify if User can delete card from Card Editable menu

#Given User is on CMS - Activity Authoring Editing Page to Edit Content
When User navigates to an activity having Card Block
When User clicks on Edit Cards icon
When User clicks on Delete Card button
When user clicks on Done and saves Draft and then clicks on Exit Editor
Then the first card should get deleted
