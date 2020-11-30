@E2EAuthor_Journey
Feature: Copy Feature Enhancement

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on Automation do not Delete folder
        When User click on Sprint 18 folder
        When User click on Copy Feature Enhancement folder


    @CopyFeatureEnhancement1
    # Scenario: Verify if User is able to Copy Journey from Master Collection
    #     When User should check if plus icon is present besides Journeys and click on it
    #     #When User should click on Copy button under Copy Journey dialog box
    #     When User enter journey name in search bar as "jrn config"
    #     Then User click on Copy button to copy Journey from Master Collection
    #     Then User verify whether Journey is copied from Master Collection


    @CopyFeatureEnhancement2
    Scenario: Verify if User is able to customize activity linked through Master Collection

        When User click on JRN Config Journey
        When User click on Add Module and enter tittle as "Module tittle" and click on save button
        When User click on Add Activity and Select Content Object and enter tittle as "Activity tittle" and click on save button
        When User click on link Activity and switch to link Activity frame for cutomized activity
        When User links Activity to the Content for Master Collection as "cnt 1974"
        When User clicks on threedots of New Activity to verify Customize option clicks on Customize option
        When User enter content name is search bar as "fld copy feature"
        When User should click on Copy Here button under Copy Content
        When User Delete the newly added module
        When User Saves and Publishes the Journey and then Exits the Journey on Journey Flow page
        Then User click on FLD Copy Feature folder to verify content copied from Master Collection
        When User Deleted Newly cutomized activity