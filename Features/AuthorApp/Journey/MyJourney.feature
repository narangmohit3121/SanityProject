@E2EAuthor_Journey
Feature: My Journey Page

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"

    @Sprint3
    @MyJourney1
    Scenario: Verify whether user is able to see My Jouney Page
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        Then My Journey page should open up in different tab
        Then Validate User details
        Then Module window should be closed for MyJourney

    @Sprint3
    @MyJourney2
    Scenario: Verify whether Stage section is present and viewable or not
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab
        Then Stages should be present under My Journey page
        Then Validate User details
        Then Module window should be closed for MyJourney

    @Sprint3
    @MyJourney3
    Scenario: Verify whether Modules are present and viewable or not
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab
        Then Validate User details
        Then Modules should be shown under Stages in My Journey page
        Then Module window should be closed for MyJourney

    @Sprint3
    @MyJourney4
    Scenario: Verify whether My Journey Page contains list of Stages Modules and Activities
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab
        Then Validate User details
        Then List of Stages Modules and Activities are to be shown on My Journey page
        Then Module window should be closed for MyJourney

    @Sprint3
    @MyJourney5
    Scenario: Verify whether header part is displaying My Journey title with its description in My Journey page
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab
        Then My Journey title with its description should be displayed in header part of My Journey page
        Then Module window should be closed for MyJourney


    @Sprint3
    @MyJourney6
    Scenario: Verify whether user is able to see My Journey Page after refreshing browser
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab
        Then List of Stages Modules and Activities are to be shown on My Journey page
        When User refresh the webpage of My Journey
        Then List of Stages Modules and Activities are to be shown on My Journey page
        Then Validate User details
        Then Module window should be closed for MyJourney
