Feature: Author Creates New Journey

Background:
        Given User should login in with "neha.seth@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder

@Sprint4
Scenario: Verify if empty Journey Title and Description is displayed under new 'Create New Jouney' popup window
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        Then Create New Journey popup modal window should open up with empty Journey Title and empty description field

@Sprint4A
Scenario: Verify if user is able to Create New Journey with valid Title and description by clicking on Save
        When User is on Petronas folder get the count of journeys
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        When User enters valid title and description
        When User clicks on save button
        Then Create New Journey popup modal window should get closed and new Journey tile should get created under Journeys section

@Sprint4
Scenario: Verify if user is able to Create New Journey with blank Title and description by clicking on Save
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        When User clicks on save button
        Then Validation message should be displayed as Title is mandatory

@Sprint4
Scenario: Verify if user is able to 'Cancel' and close Create New Journey popup modal
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        When User enters valid title and description
        When User clicks on cancel button
        Then Create New Journey popup modal window should get closed

@Sprint4
Scenario: Verify if blank journey page is displayed when new journey tile is clicked
        When User clicks on the newly created Journey
        Then Only the title and description should be displayed with blank journey

@Sprint4
Scenario: Verify if Add Stage & Add Module buttons are functioning
        When User clicks on the newly created Journey
        When Only the title and description should be displayed with blank journey
        When User clicks on Add Stage & Add Module
        Then New Stage & New Module should get added as part of Journey template

@Sprint4
Scenario: Verify if user is able to Cancel Journey with few New Stages & New Modules
        When User is on Petronas folder get the count of journeys
        When User clicks on the newly created Journey
        When Only the title and description should be displayed with blank journey
        When User clicks on Add Stage & Add Module
        When New Stage & New Module should get added as part of Journey template
        When User clicks on Cancel button after adding Stage and Module
        Then Journey should not get saved and redirected to client landing page

@Sprint4
Scenario: Verify if user is able to Save Journey with few New Stages & New Modules
        When User clicks on the newly created Journey
        When Only the title and description should be displayed with blank journey
        When User clicks on Add Stage & Add Module
        When New Stage & New Module should get added as part of Journey template
        When User clicks on Save button after adding Stage and Module
        Then Journey should get saved successfully with Stage and Module added

@Sprint4A
Scenario: Verify if user is able to Preview Journey newly created
        When User clicks on the newly created Journey
        When User clicks on preview button on Journey Authoring page
        Then Preview page should openup in new tab displaying Journey created

@Sprint4
Scenario: Verify if user is able to Publish Journey newly created
        When User clicks on the newly created Journey
        When User clicks on publish button on the Journey Authoring page
        Then Journey should get published successfully with Stage and Module added