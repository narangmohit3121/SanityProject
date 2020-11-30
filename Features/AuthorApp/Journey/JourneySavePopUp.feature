@E2EAuthor_Journey
Feature: Journey Save Pop Up

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on Automation do not Delete folder
        When User click on Sprint 16 folder
        When User click on Automation Journey Pop Up folder

    @Sprint16
    @JourneySavePopUp1
    Scenario: Verify if user clicks on Leave button of Journey save popup then user should be on Admin landing page



        When User clicks three dots to edit Module
        When User clicks on Cancel button of Edit Content window
        When User clicks on Registration option on Left Panel items
        When User clicks on LEAVE button of Journey Save pop up window
        Then User should land on Registration Link Page

    @Sprint16
    @JourneySavePopUp2
    Scenario: Verify if user clicks on Stay button of Journey save popup then user should be on Journey Authoring page



        When User clicks three dots to edit Module
        When User clicks on Cancel button of Edit Content window
        When User clicks on logo
        When User clicks on STAY button of Journey Save pop up window
        Then User should stay on Journey Authoring Page
        When User clicks on Support option on Left Panel items
        When User clicks on STAY button of Journey Save pop up window
        Then User should stay on Journey Authoring Page
        When User clicks on more icon
        When User clicks on signout button
        When User clicks on STAY button of Journey Save pop up window
        Then User should stay on Journey Authoring Page

    @Sprint16
    @JourneySavePopUp3
    Scenario: Verify if user refresh the webpage by seeing Journey Save leave Pop up

        When User clicks three dots to edit Module
        When User clicks on Cancel button of Edit Content window
        When User clicks on Registration option on Left Panel items
        When User refresh the webpage
        Then User should stay on Journey Authoring Page

    @Sprint16
    @JourneySavePopUp4
    Scenario: Verify if user can close the Journey Save Leave Pop up

        When User clicks three dots to edit Module
        When User clicks on Cancel button of Edit Content window
        When User clicks on Registration option on Left Panel items
        When User clicks on X icon and try to close the Pop up
        Then User should stay on Journey Authoring Page







