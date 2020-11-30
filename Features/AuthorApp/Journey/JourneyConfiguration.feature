@E2EAuthor_Journey
Feature: Journey Configuration


    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User clicks on client tab
        When User should click on Petronas folder
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User selects the Journey named "Journey Configuration"
        When User click on Journey Configuration

    Scenario: Verify General Scenario for MSFT

    @Sprint22
    @JourneyConfiguration1
    Scenario: MSFT toggles

        When User updates General Settings under Journey Configuration for MSFT
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
        When Participant should login in with "j.c@petronas.com" and "ABab12$"
        When User select an industry as "Journey Configuration Automation"

        When User selects gender as "Male"
        When user selects the region as "Asia"
        When user selects "Yes" for manage accounts
        When User clicks on Continue button
        #When Participant clicks on Home menu
        #Then Participant should be able to see Dive Back In
        Then User validates Show Full Journey Name toggle for MSFT
        Then User validates Direct launch activity toggle for MSFT
        Then User validates side menu collapsed toggle for MSFT
        Then User validates disable locks toggle
        Then User validates hide leaderboard toggle
        Then Author User reset the Journey data for MSFT



    Scenario: Verify General Scenario for Chevron

    @Sprint22
    @JourneyConfiguration2
    Scenario: Chevron toggles

        When User updates General Settings under Journey Configuration for Chevron
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
        When Participant should login in with "j.c@petronas.com" and "ABab12$"
        When User select an industry as "Journey Configuration Automation"
        When User selects gender as "Male"
        When user selects the region as "Asia"
        When user selects "Yes" for manage accounts
        #When User clicks on Continue button
        #When Participant clicks on Home menu
        #Then Participant should be able to see Dive Back In
        Then User validates Show Full Journey Name toggle for Chevron
        Then User validates Direct launch activity toggle for Chevron
        Then User validates side menu collapsed toggle for Chevron
        Then User validates disable locks toggle for Chevron
        Then User validates hide leaderboard toggle for Chevron
        Then Author User reset the Journey data for Chevron


