Feature: Master Landing Page

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"

    @Regression_HomePage
    @Sprint2
    @MasterLanding1
    Scenario: Verify if BTS user redirected to Master Collection Landing Page

        When User clicks on Master tab
        When User clicks on any one of the collection under master tab
        Then User is on Master Collection Landing Page

    @Regression_HomePage
    @Sprint2
    @MasterLanding2
    Scenario: Verify if folders present under body of Master Collection Landing Page are matching with the left navigation panel

        When User clicks on any one of the collection under master tab
        When User is on Master Collection Landing Page
        Then Number of folders and name of folders should match with side bar content and body content

    @Regression_HomePage
    @Sprint2
    @MasterLanding3
    Scenario: Verify If "Add Client" and "Manage Permissions" button on Master Collection Landing Page is visible

        When User clicks on any one of the collection under master tab
        When User is on Master Collection Landing Page
        #When Settings icon is loaded with BTS title besides it
        Then Configure Client and Manage Permissions button should be present

    @Regression_HomePage
    @Sprint2
    @MasterLanding4
    Scenario: Verify if Momenta logo is clickable and it is redirecting to home page

        When User clicks on any one of the collection under master tab
        When User is on Master Collection Landing Page
        When User clicks on Master Collection tab
        Then User should be redirected to Admin Landing Page

    @Regression_HomePage
    @Sprint2
    @MasterLanding5
    Scenario: Verify if Master Collection consists of Folders, Journeys and Content sections

        When User clicks on any one of the collection under master tab
        When User is on Master Collection Landing Page
        Then User should view Folders, Journeys and Content Sections
