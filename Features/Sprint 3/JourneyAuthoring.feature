Feature: Journey Authoring Scenario

    Background:
        Given User should login in with "neha.seth@bts.com" and "123456"
        When User should click on Client Tab
        When User should click on Petronas folder

    @Sprint3
    @JourneyAuthoring1
    Scenario: Verify if  corresponding Journey name is visible  on top of the page
        When User clicks on any Journey and landed to Journey Authoring page
        Then User should verfiy that the Journey name should match the Journey name on page top

    @Sprint3
    @JourneyAuthoring2
    Scenario: Verify if "Add Stage" and "Add Module" icons are visible at bottom of page
        When User clicks on any Journey and landed to Journey Authoring page
        Then User should be able to validate presence of Add Stage and Add Module icons

    @Sprint3
    @JourneyAuthoring3
    Scenario: Verify if Client name and logo is present on left side panel
        When User clicks on any Journey and landed to Journey Authoring page
        Then User should be able to view client name and logo

    @Sprint3
    @JourneyAuthoring4
    Scenario: Verify if user can see list of static options at the left side panel
        When User clicks on any Journey and landed to Journey Authoring page
        Then User should be able to view static menu content at the left side panel

    @Sprint3
    @JourneyAuthoring5
    Scenario: Verify if clicking on "Add Stage button is adding 1 new stage with name 'NEW STAGE'
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on Add Stage button
        Then User should be able to see New Stage should be added
        Then User should click on Save button


    @JourneyAuthoring6
    Scenario: Verify if  "preview" button is clockable and funtional
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on Preview button
        Then User should be landed to Preview page

    @Sprint3
    @JourneyAuthoring7
    Scenario: Verify if user can see 3 options when he/she clicks on more icon of 'STAGE'
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of STAGE
        Then User should view four options of STAGE

    @Sprint3
    @JourneyAuthoring8
    Scenario: Verify if User can add module by selecting option from more icon of STAGE
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of STAGE
        When User clicks on Add Module option

        When User should click on Save button
        Then User should view New Module should get added under STAGE

    @Sprint3
    @JourneyAuthoring9
    Scenario: Verify if User can add new activity by clicking on more icon of STAGE
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of STAGE
        When User clicks on Add Activity option

        When User should click on Save button
        Then User should view New Activity under STAGE

    @Sprint3
    @JourneyAuthoring10
    Scenario: Verify if user can put blank name of STAGE after clicking on edit option
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of STAGE
        When User clicks on Edit option
        When User enters name of STAGE as blank
        Then User clicks on Done button
        Then User should get error message

    @JourneyAuthoring11
    Scenario: Verify if user can put blank name of MODULE after clicking on edit option
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of MODULE
        When User clicks on Edit option
        When User enters name of MODULE as blank
        Then User clicks on Done button
        Then User should get error message

    @Sprint3
    @JourneyAuthoring12
    Scenario: Verify if User can add Activity after clicking on more icon of MODULE
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of MODULE
        When User clicks on Add Activity option

        When User should click on Save button
        Then User should view New Activity under MODULE

    @JourneyAuthoring13
    Scenario: Verify if user can keep ACTIVITY name as blank
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of ACTIVITY
        When User clicks on Edit option
        When User enters name of ACTIVITY as blank
        Then User clicks on Done button
        Then User should get error message

    @JourneyAuthoring14
    Scenario: Verify if user is logged out and redirected to login page
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon
        When User clicks on signout button
        Then User should be logged out and landed to Login Page

    @Sprint3
    @JourneyAuthoring15
    Scenario: Verify the number of options available for Modules
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of MODULE
        Then User should view three options of MODULE

    @Sprint3
    @JourneyAuthoring16
    Scenario: Verify the number of options available for Activity
        When User clicks on any Journey and landed to Journey Authoring page
        When User clicks on more icon of ACTIVITY
        Then User should view two options of ACTIVITY