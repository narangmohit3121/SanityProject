@E2EAuthor_Journey
Feature: Journey Authoring Scenario

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder


@Sprint3
@JourneyAuthoring1
Scenario: Verify if user is able to Create New Journey with valid Title and description by clicking on Save
       
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        When User enters valid title as "Automation QA Journey" and description "Automation QA Journey Description"
        When User clicks on save button
        Then User should see Journey is created with same name which is mention


    @Sprint3
    @JourneyAuthoring2
    Scenario: Verify if  corresponding Journey name is visible  on top of the page
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        Then User should verfiy that the Journey name should match the Journey name on page top

    @Sprint3
    @JourneyAuthoring3
    Scenario: Verify if "Add Stage" and "Add Module" icons are visible at bottom of page

        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        Then User should be able to validate presence of Add Stage and Add Module icons

  
  
    @Sprint3
    @JourneyAuthoring4
    Scenario: Verify if user can see list of static options at the left side panel
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        Then User should be able to view static menu content at the left side panel


@Sprint3
@JourneyAuthoring5
Scenario: Verify if user is able to Add New Stages in journey
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on pluse icon of Add Stage to create stage
        When User Provide Stage tilte as "Stage one" and click save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should see stage is added in journey template


     @Sprint3
    @JourneyAuthoring6
    Scenario: Verify if user can see 4 options when he/she clicks on more icon of 'STAGE'
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of STAGE
        Then User should view four options of STAGE


@Sprint3
@JourneyAuthoring7
Scenario: Verify if user is able to Add New Module in journey
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on pluse icon of Add module to create module
        When User Provide Module tilte as "Module one" and click save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should see module is added in journey template



    @Sprint3
    @JourneyAuthoring8
    Scenario: Verify if User can add module by selecting option from more icon of STAGE
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of STAGE
        When User clicks on Add Module option
        When User enters valid title as "Module two" short name as "M2" and description as "Module two Description"
        When User should click on Save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should view New Module should get added under STAGE


    @Sprint3
    @JourneyAuthoring9
    Scenario: Verify if User can add new activity by clicking on more icon of STAGE
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of STAGE
        When User clicks on Add Activity option
        When User select activity type as "Content Object" from Activity type dropdown
        When User provide Activity title as "Automation Activity one" and activity description as "Activity one description"
        When User should click on Save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should view New Activity added under STAGE


    @Sprint3
    @JourneyAuthoring10
    Scenario: Verify if user can put blank name of STAGE after clicking on edit option
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of STAGE
        When User clicks on Edit option
        When User enters name of STAGE as blank
        When User clicks on Save button after edit stage
        Then Validation message should be displayed as Title is mandatory for stage


    @Sprint3
    @JourneyAuthoring11
    Scenario: Verify if user can put blank name of MODULE after clicking on edit option
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of MODULE
        When User clicks on Edit option
        When User enters name of MODULE as blank
        When User clicks on Save button after edit stage
        Then Validation message should be displayed as Title is mandatory for module




    @Sprint3
    @JourneyAuthoring12
    Scenario: Verify if User can add Activity after clicking on more icon of MODULE
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of MODULE
        When User clicks on Add Activity option
        When User select activity type as "Content Object" from Activity type dropdown
        When User provide Activity title as "Automation Activity two in module" and activity description as "Activity two description"
        When User should click on Save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should view New Activity under MODULE

        
    @Sprint3
    @JourneyAuthoring13
    Scenario: Verify the number of options available for Modules

        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of MODULE
        Then User should view three options of MODULE


    @Sprint3
    @JourneyAuthoring14
    Scenario: Verify the number of options available for Activity
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of ACTIVITY
        Then User should view two options of ACTIVITY

    @Sprint3
    @JourneyAuthoring15
    Scenario: Verify if user is logged out and redirected to login page
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon
        When User clicks on signout button
        Then User should be logged out and landed to Login Page
