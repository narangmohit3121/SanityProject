Feature: My Journey Page

    Background:
        Given User should login in with "neha.seth@bts.com" and "123456"

    @Sprint3
    @MyJourney1
    Scenario: Verify whether user is able to see My Jouney Page
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        Then My Journey page should open up in different tab
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
        Then Module window should be closed for MyJourney

    @Sprint3
    @MyJourney3
    Scenario: Verify whether Modules are present and viewable or not
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab
        Then Modules should be shown under Stages in My Journey page
        Then Module window should be closed for MyJourney


    @MyJourney4
    Scenario: Verify whether My Journey Page contains list of Stages Modules and Activities
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab
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


# @MyJourney6
# Scenario: Verify whether Profile image should be generated dynamically in My Journey page
# When User Navigates to Client Landing page
# When User selects any Journey to preview under Copy Journey popup
# When My Journey page opens up in new tab
# When User logs out and re-logs in with second user id and password
# Then profile image should differ or dynamically update from user logged in vs second user