@E2ETest_ClientPage
Feature: CRUD Theme

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User clicks on Client Config button of Petronas Client

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint19
    @CRUDTheme1
    Scenario: Verify that user should be able to Add Theme

        When User clicks on Arrow of Petronas client
        When User clicks on theme Tab of Petronas Client
        When User should check if plus icon is present beside Add New and click on it
        When User should check if Theme tittle text field is present and enter any title as "Automation Theme"
        When User should check if Add Theme button present and click on it
        When User clicks on Save button under client config
        When User clicks on Client Config button of Petronas Client
        When User clicks on Arrow of Petronas client
        When User clicks on theme Tab of Petronas Client
        When User verifies if Theme got Added successfully or not
        When User clicks on Save button under client config

    @RegressionTest_ClientPage
    @Sprint19
    @CRUDTheme2
    Scenario: Verify that user should be able to Edit Theme

        When User clicks on Arrow of Petronas client
        When User clicks on theme Tab of Petronas Client
        When User should check if Edit theme icon is present on any one of existing theme and click on it
        When User should check if Theme tittle is present and update theme tittle as "1"
        When User should check if Save button present and click on it
        When User clicks on Save button under client config
        When User clicks on Client Config button of Petronas Client
        When User clicks on Arrow of Petronas client
        When User clicks on theme Tab of Petronas Client
        When User verifies if Theme got Edited successfully or not
        When User clicks on Save button under client config


    @Sprint19
    @CRUDTheme3
    Scenario: Verify that user should be able to Delete Theme

        When User clicks on Arrow of Petronas client
        When User clicks on theme Tab of Petronas Client
        When User should check if Delete icon is present beside edit theme and click on it
        When User should check if Delete button is present and click on it
        When User clicks on Save button under client config
