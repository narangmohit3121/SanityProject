@E2EAuthor_Journey
Feature: Admin Color Stages

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User clicks on client tab


    @Sprint08
    @Colorstage
    Scenario: Verify whether user is able to navigate edit stage window in  journey Authoring.
        When User should click on Petronas folder
        When User clicks on automation folder
        When User clicks on AuthorApp folder
        When User clicks on Journey Folder
        When User click on Journey Color Stages Journey
        When User click on three dots of STAGE
        When User click on Edit Stage button
        Then System should display edit stage window

    @Sprint08
    @Colorstage
    Scenario: Verify whether user is able to see Configuration and color palette tab in Stage color window.
        When User should click on Petronas folder
        When User clicks on automation folder
        When User clicks on AuthorApp folder
        When User clicks on Journey Folder
        When User click on Journey Color Stages Journey
        When User click on three dots of STAGE
        When User click on Edit Stage button
        Then User  should see color pallette for edit stage color

    @Sprint08
    @Colorstage
    Scenario: Verify whether user is able to specify the color of particulare stage is reflecting.
        When User should click on Petronas folder
        When User clicks on automation folder
        When User clicks on AuthorApp folder
        When User clicks on Journey Folder
        When User click on Journey Color Stages Journey
        When User click on three dots of STAGE
        When User click on Edit Stage button
        When User click existing color pallette of purple color having #6E3095 hex value
        When User enter hex value as "#850000" of deep red color to edit exisiting color
        When User click Done button after edit color hex value
        When User navigate stage color after save
        Then User should see stage in deep red color


    @Sprint08
    @Colorstage
    Scenario:   Verify whether user is able to see Cancel exist and functioning in Stage color window.
        When User should click on Petronas folder
        When User clicks on automation folder
        When User clicks on AuthorApp folder
        When User clicks on Journey Folder
        When User click on Journey Color Stages Journey
        When User click on three dots of STAGE
        When User click on Edit Stage button
        When User click existing color pallette of purple color having #6E3095 hex value
        When User enter hex value as "#6E3095" of deep red color to edit exisiting color to cancel action
        When User click CANCEL button for cancel edit color operation
        Then User should see Journey authoring page after cancel button click






