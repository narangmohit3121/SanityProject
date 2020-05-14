Feature: Module Launch Page

    Background:
        Given User should login in with "neha.seth@bts.com" and "123456"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab for Module Launch
    #Then My Journey page should open up in different tab

    @Sprint3
    @ModuleLaunch1
    Scenario: Verify Module Title is displayed on previewing from My Journey page

        #When My Journey page should open up in different tab for Module Launch
        When User clicks on preview button
        Then Module page to be displayed with Module Title
        Then Module window should be closed

    @Sprint3
    @ModuleLaunch2
    Scenario: Verify if user is landing on My Journey Page when clicked on back navigation arrow

        #When My Journey page should open up in different tab for Module Launch
        When User clicks on preview button
        When Module page to be displayed with Module Title
        When User clicks on back navigation arrow
        Then User should be landed back to My Journey Page
        Then Module window should be closed

    @Sprint3
    @ModuleLaunch3
    Scenario: Verify if user can see list of acitivities under Module Launch Page

        #When My Journey page should open up in different tab for Module Launch
        When User clicks on preview button
        When Module page to be displayed with Module Title
        Then User should also view the list of acitivities mapped to that module under Module Launch page
        Then Module window should be closed

    @Sprint3
    @ModuleLaunch4
    Scenario: Verify if list of activities displayed with duration

        #When My Journey page should open up in different tab for Module Launch
        When User clicks on preview button
        When Module page to be displayed with Module Title
        Then User should be able to see duration of all activities
        Then Module window should be closed