@E2EAuthor_Journey
Feature: Modify Journey Authoring

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder


    @Sprint4
    @ModifyJourneyAuthoring1
    Scenario: Verify if User is able to Edit Activity from existing Journey Structure
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas
        When User clicks on the newly created Journey
        When User clicks on Edit option under Activity
        When user updates activity title
        When user click on Save button
        Then Activity title should get updated

        
    @Sprint4
    @ModifyJourneyAuthoring2
    Scenario: Verify if User is able to Edit Modules from existing Journey Structure
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas
        When User clicks on the newly created Journey
        When User clicks on Edit option under Module
        When user updates module title
        When user click on Save button
        Then Module title should get updated



    @Sprint4
    @ModifyJourneyAuthoring3
    Scenario: Verify if User is able to Edit Stages from existing Journey Structure
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas
        When User clicks on the newly created Journey
        When User clicks on Edit option under Stage
        When user updates stage title
        When user click on Save button
        Then Stage title should get updated

        
    @Sprint4
    @ModifyJourneyAuthoring4
    Scenario: Verify if User is able to Delete Activity from existing  Module
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas
        When User clicks on the newly created Journey
        When User clicks on Delete option under Activity to delete activity
        When User Saves Draft and Publishes the Stage and Module  
        Then Activity should get deleted successfully

     
    @Sprint4
    @ModifyJourneyAuthoring5
    Scenario: Verify if User is able to Delete Modules from existing Stage
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas
        When User clicks on the newly created Journey
        When User clicks on Delete option under Module to delete module
        When User Saves Draft and Publishes the Stage and Module
        Then Module should get deleted successfully

        
    @Sprint4
    @ModifyJourneyAuthoring6
    Scenario: Verify if User is able to Delete Stages from existing Journey Structure
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas
        When User clicks on the newly created Journey
        When User clicks on delete option under Stage
        Then Stage should get deleted successfully

        
@Sprint4
@ModifyJourneyAuthoring7
Scenario: Verify if user is able to Add New Stages in journey
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on pluse icon of Add Stage to create stage
        When User Provide Stage tilte as "Stage one" and click save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should see stage is added in journey template

  
    @Sprint4
    @ModifyJourneyAuthoring8
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


    @Sprint4
    @ModifyJourneyAuthoring9
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

        
    @Sprint4
    @ModifyJourneyAuthoring10
    Scenario: Verify if User can add new activity by clicking on more icon of STAGE
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of STAGE
        When User clicks on Add Activity option
        When User select activity type as "Content Object" from Activity type dropdown
        When User provide Activity title as "Automation Activity Two" and activity description as "Activity two description"
        When User should click on Save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should view New Activity added under STAGE


    @Sprint4
    @ModifyJourneyAuthoring11
    Scenario: Verify if User can add new activity by clicking on more icon of STAGE
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of STAGE
        When User clicks on Add Activity option
        When User select activity type as "Content Object" from Activity type dropdown
        When User provide Activity title as "Automation Activity Three" and activity description as "Activity three description"
        When User should click on Save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should view New Activity added under STAGE

    @Sprint4
    @ModifyJourneyAuthoring12
    Scenario: Verify if User can add new activity by clicking on more icon of STAGE
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        When User clicks on more icon of STAGE
        When User clicks on Add Activity option
        When User select activity type as "Content Object" from Activity type dropdown
        When User provide Activity title as "Automation Activity Four" and activity description as "Activity four description"
        When User should click on Save button
        When User Saves Draft and Publishes the Stage and Module
        Then User should view New Activity added under STAGE


    @Sprint4
    @ModifyJourneyAuthoring13
        Scenario: Verify if user is able to delete the journey
         When User click on Automation Folder_DONOT DELETE folder
         When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
         When User click journey folder in AuthorApp folder
        When User delete Automation QA Journey
        Then User should see journey should be deleted and not be displayed



    # @Sprint4
    # @M8
    # Scenario: Verify if User is able to drag and drop Activities inside module

    #     When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas
    #     When User clicks on the newly created Journey
    #     When User drag Automation Activity four and drop on Automation Activity One
    #     When User navigate both activity after drag and drop operation
    #     #When User clicks on updated activity name and drags within module




    # @Sprint4
    # @M9
    # Scenario: Verify if User is able to drag and drop Activities inside Stage
    #     When User clicks on the newly created Journey
    #     When User clicks on Add Activity option multiple times under Module
    #     When User clicks on Edit option under Activity
    #     When user updates activity title
    #     When user click on done button
    #     #When User clicks on updated activity name and drags within stage
    
   