Feature: Participant Registration Flow

    Background:

    @Sprint10
    @RegFlow1
    Scenario: Verfiy that Particpant user is able to see the registration flow


        Given Participant should login in with "j.c@petronas.com" and "ABab12$"
        When User select an industry as "Journey Configuration Automation"
        When User selects gender as "Male"
        When user selects the region as "Asia"
        When user selects "Yes" for manage accounts
        When User clicks on Continue button
        When Participant clicks on Home menu
        Then Participant should be able to see Dive Back In
        Then Author User reset the Journey data