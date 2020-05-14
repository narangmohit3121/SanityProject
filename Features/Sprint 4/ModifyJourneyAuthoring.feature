Feature: Modify Journey Authoring

    Background:
        Given User should login in with "neha.seth@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
    
    @Sprint4
    @1M   
    Scenario: Verify if User is able to add Stage Module and Activity under existing Journey
        When User clicks on the newly created Journey
        When User clicks on Add Stage icon
        When Stage gets added successfully
        When User clicks on Add Module icon
        When Module gets added successfully
        When User clicks on Add Activity option under Module added
        When Activity gets added successfully under Module
        When user clicks on Journey save button
        Then Stage Module and Activity should get saved successfully

    @Sprint4
    Scenario: Verify if User is able to Edit Stages from existing Journey Structure
        When User clicks on the newly created Journey
        When User clicks on Edit option under Stage
        When user updates stage title
        When user click on done button
        Then Stage title should get updated

    @Sprint4
    Scenario: Verify if User is able to Edit Modules from existing Journey Structure
        When User clicks on the newly created Journey
        When User clicks on Edit option under Module
        When user updates module title
        When user click on done button
        Then Module title should get updated

    @Sprint4
    Scenario: Verify if User is able to Edit Activities from existing Stages / Modules
        When User clicks on the newly created Journey
        When User clicks on Edit option under Activity
        When user updates activity title
        When user click on done button
        Then Activity title should get updated

    @Sprint4
    Scenario: Verify if User is able to Link Activity from existing  Avtivity
        When User clicks on the newly created Journey
        When user click on Link Activity option
        When user see Link content to activity window
        When user selects from current collection content list
        When user click on attachement icon to link content
        Then user should be able to view linked Activity

    @Sprint4
    Scenario: Verify if User is able to Cancel Link content to Activity popup
        When User clicks on the newly created Journey
        When user click on Link Activity option
        When user views Link content to activity popup window
        When user selects from current collection content list
        When user click on cancel button under link content
        Then user should not view linked Activity

    @Sprint4
    Scenario: Verify if User is able to update Stage/Module/Activity with Huge title and save
        When User clicks on the newly created Journey
        When User clicks on Edit option under Stage
        When user updates stage with huge title
        When user click on done button
        When User clicks on Edit option under Module
        When user updates module with huge title
        When user click on done button
        When User clicks on Edit option under Activity
        When user updates activity with huge title
        When user click on done button
        When user clicks on Journey save button
        When user click on Journey cancel button
        When User clicks on the newly created Journey
        Then Stage Module and Activity title should get updated

    @Sprint4
    Scenario: Verify if User is able to drag and drop Activities inside module
        When User clicks on the newly created Journey
        When User clicks on Add Activity option multiple times under Module
        When User clicks on Edit option under Activity
        When user updates activity title
        When user click on done button
        #When User clicks on updated activity name and drags within module

    @Sprint4
    Scenario: Verify if User is able to drag and drop Activities inside Stage
        When User clicks on the newly created Journey
        When User clicks on Add Activity option multiple times under Module
        When User clicks on Edit option under Activity
        When user updates activity title
        When user click on done button
        #When User clicks on updated activity name and drags within stage
    
    @Sprint4
    @1M
    Scenario: Verify if User is able to Delete Stages from existing Journey Structure
        When User clicks on the newly created Journey
        When User clicks on delete option under Stage
        Then Stage should get deleted successfully
    
    @Sprint4
    @1M
    Scenario: Verify if User is able to Delete Modules from existing Journey Structure
        When User clicks on the newly created Journey
        When User clicks on delete option under Module
        Then Module should get deleted successfully
    
    @Sprint4
    Scenario: Verify if User is able to Delete Activities from existing Stages / Modules
        When User clicks on the newly created Journey
        When User clicks on Add Module icon
        When Module gets added successfully
        When User clicks on Add Activity option under Module added
        When Activity gets added successfully under Module
        When User clicks on delete option under Activity
        Then Activity should get deleted successfully