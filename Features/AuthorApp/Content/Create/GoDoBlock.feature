@E2ETest_CMS
Feature: Verify Go Do block functionality for Author and User App

    Background:

    @Sprint25
    @GoDoBlock01
    Scenario: Verify that Go-Do block is available under CMS blocks and that all the Go-Do fields are present when user edits the same

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
        When user creates a new Activity for "Go-Do" Content and navigates into the same
        When user adds the content of the type "Go-Do"
        When user clicks on the Edit "Go-Do" button
        When user enters Data into Go-Do fields
        When User saves the changes made to the content
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        Then the activity with Go-Do should get created

    # @Sprint25
    # @GoDoBlock02
    # Scenario: Verify that user is not able to save the Go-Do block without entering the mandatory fields

    #     Given User Logs in as admin user
    #     When User clicks on client tab
    #     When User should click on Petronas folder
    #     When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
    #     When user navigates to the activity that has a Go-Do block
    #     When user clicks on the Edit "Go-Do" button
    #     Then error message should be displayed to the user in case user removes a mandatory field and clicks on Save

    @Sprint25
    @GoDoBlock03
    Scenario: Verify that user able to add Instructions and Results content objects to Journey Themes when actions is enabled

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User adds a new theme under Themes tab and Saves the same
        When User navigates to "Automation Folder_DONOT DELETE/Automation Journey Mohit" folder in petronas
        When User creates an activity with newly created Go-Do block
        When User navigates to the themes tab of the Journey
        When User enables newly added Theme for actions and Resources
        When User adds Instructions content and Results content for the theme
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel

    @Sprint25
    @GoDoBlock04
    Scenario: Verify that user able to add Instructions and Results content objects to Journey Themes when actions is enabled

        Given Participant should login in with "AutomationGoDo1@petronas.com" and "ABab12$"
        When user selects the region as "Asia"
        When User selects gender as "Male"  
        When Participant user navigates to the Actions tab
        When User creates an action for the newly created theme
        Then action should be created successfully
        When Participant user navigates to the Actions tab
        Then the created action should be displayed on Resources page and its details should be correct

    @Sprint25
    @GoDoBlock05
    Scenario: Verify the functionality of an activity with Go-Do block on User App

        Given Participant should login in with "AutomationGoDo1@petronas.com" and "ABab12$"
        When Participant user navigates to the Actions tab
        Then the action under Go Do activity should not be displayed as it has not been committed
        When user navigates to the My Journey page
        When User navigates to the "Mod 1" module and "Go-Do Activity" activity
        Then the details of the Go-Do block displayed to the Participant should be correct
        When User commits the action in the Go Do activity
        When Participant user navigates to the Actions tab
        Then the action under Go Do activity should be displayed as it has been committed

       
    @Sprint25
    @GoDoBlock6
    Scenario: Clean Up for Go Do

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
        Then User should delete the content created for testing Go-Do actions
        Then User should delete the theme created for testing Go-Do actions
        When User navigates to "Automation Folder_DONOT DELETE/Automation Journey Mohit" folder in petronas
        When User navigates to the themes tab of the Journey
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel