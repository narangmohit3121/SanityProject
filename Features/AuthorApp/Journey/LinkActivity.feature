@E2EAuthor_Journey
Feature: Link Activity

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on Automation do not Delete folder
        When User click on Sprint 16 folder
        When User click on Automation Link Activity folder

    @Sprint16
    @LinkActivity1
    Scenario: Verify if User can see Link Acitivity Pop up window when clicks on 'Link Activity' from Journey Authoring Page

        Then User should check if plus icon is present besides Journeys and click it
        When User enter name of second Journey as "Client_Collection" and Description as "Jrn Desc" and clicks on Save
        When User should check if plus icon is present besides Content and click on it
        When User enter name of second Content as "Client_Collection" and Description as "Cnt Desc" and clicks on Save
        When User click on Client Collection Journey
        When User adds Module and Activity in the first Journey as "Module_1" and "MOne" and "Activity_1"
        When User click on link Activity and switch to link Activity frame
        When User links Activity to the Content for Client Collection
        When User clicks on Save and Publish to link Activity
        When User clicks on Cancel button and Leave of link Activity

    @Sprint16
    @LinkActivity2
    Scenario: Verify if User can see Link Acitivity Pop up window for Master Collection

        Then User should check if plus icon is present besides Journeys and click it
        When User enter name of first Journey as "Master_Collection" and Description as "Jrn Desc" and clicks on Save
        When User click on Master Collection Journey
        When User adds Module and Activity in the first Journey as "Module_1" and "MOne" and "Activity_1"
        When User click on link Activity and switch to link Activity frame
        When User links Activity to the Content for Master Collection
        When User clicks on Save and Publish to link Activity
        When User clicks on Cancel button and Leave of link Activity


    @Sprint16
    @LinkActivity4
    Scenario: Verify if User can close the window of Link Activity

        When User click on Client Collection Journey
        When User click on link Activity and switch to link Activity frame
        When User clicks on X icon and try to close the Pop up of Link Activity
        Then User should get land on Journey Authoring Page


    @Sprint16
    @LinkActivity5
    Scenario: Verify if User refresh the browser after seeing Link Activity Pop up

        When User click on Client Collection Journey
        When User click on link Activity and switch to link Activity frame
        When User refresh the webpage
        Then User should get land on Journey Authoring Page


    @Sprint16
    @LinkActivity6
    Scenario: Delete all contents and Journey after test run
        When user deletes all the contents in EndToEnd folder
        When user deletes the "Client_Collection" Journey
       # When user deletes the "Client_Collection_Search" Journey
        When user deletes the "Master_Collection" Journey
        Then all the contents should be deleted successfully