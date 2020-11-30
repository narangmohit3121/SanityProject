@E2EAuthor_Journey
Feature: Module Launch Page

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should check if plus icon is present besides Journeys and click on it to select copy
        When User selects any Journey to preview under Copy Journey popup
        When My Journey page should open up in different tab for Module Launch  
        # ModuleLaunchAutomationJourney journey name should be search
    
    @Sprint3
    @ModuleLaunch1
    Scenario: Verify Module Title is displayed on previewing from My Journey page

        Then Module page to be displayed with Module Title
        Then Module window should be closed


    @Sprint3
    @ModuleLaunch2
    Scenario: Verify if user is landing on My Journey Page when clicked on back navigation arrow

        When Module page to be displayed with Module Title
        When User click on start button of Module one
        When User clicks on back navigation arrow
        Then User should be landed back to My Journey Page
        Then Module window should be closed


    @Sprint3
    @ModuleLaunch3
    Scenario: Verify if user can see list of acitivities under Module Launch Page

        When Module page to be displayed with Module Title
        Then User should also view the list of acitivities mapped to that module under Module Launch page
        Then Module window should be closed


    @Sprint3
    @ModuleLaunch4
    Scenario: Verify if list of activities displayed with duration

        When Module page to be displayed with Module Title
        Then User should be able to see duration of all activities
        Then Module window should be closed


