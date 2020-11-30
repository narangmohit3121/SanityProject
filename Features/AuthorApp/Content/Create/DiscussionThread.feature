@E2ETest_CMS
Feature: Discussion Thread Authoring and Participant

    Background:

    @Sprint7
    @DiscussionThread01
    @AuthorAppContentCreate
    Scenario: Verfiy if CANCEL button is visible and functioning

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
        When User selects the Discussion Thread Content
        When User clicks on Edit Discussion Thread Button
        When User enters data in Discussion thread fields
        When user clicks on Cancel button of Discussion Thread Content
        Then the changes should not get saved

    @Sprint7
    @DiscussionThread02
    @AuthorAppContentCreate

    Scenario: Verify that Author can edit the discussion thread fields

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
        When User selects the Discussion Thread Content
        When User clicks on Edit Discussion Thread Button
        When User enters data in Discussion thread fields
        When User clicks on SAVE button of Discussion Thread Block
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        #Then the changes made to Discussion Thread fields should get saved and changes should be reflected at Participant side
        Then the changes made to Discussion thread should get reflected

    @Sprint7
    @DiscussionThread03
    Scenario: Verify that the changes made by the author to the Discussion Thread Fields should be reflected on the Participant UI

        Given Participant should login in with "AutoUserDiscussionThread1@petronas.com" and "ABab23$"
        #When User selects the Sprint 7 module under Automation_Mohit stage
         When user selects the region as "Asia"
        When User selects gender as "Male"       
        When user navigates to the My Journey page
        When User navigates to the "Mod 1" module and "Discussion Thread Activity" activity
        When User enters comments and replies
        Then the changes made by the author to the Discussion Thread Fields should be reflected on the Participant UI

    @Sprint7
    @DiscussionThread04

    Scenario: Verify that the comments entered by a Participant are visible to the user of the same cohort

        Given Participant should login in with "AutoUserDiscussionThread2@petronas.com" and "ABab23$"
        #When User clicks on Discussion Thread activity
        When user selects the region as "Asia"
        When User selects gender as "Male"       
        When user navigates to the My Journey page
        When User navigates to the "Mod 1" module and "Discussion Thread Activity" activity
        Then the user should be able to see the comments provided by another user of the same cohort
        When user replies on the comment made by another user of the same cohort
        When Participant user logs in with "AutoUserDiscussionThread1@petronas.com" and "ABab23$"
        When user navigates to the My Journey page
        When User navigates to the "Mod 1" module and "Discussion Thread Activity" activity
        Then the reply provided by the cohortUser should be visible