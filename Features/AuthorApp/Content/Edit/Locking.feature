@E2ETest_CMS
Feature: Locking

    Background:
        Given User should login in with "neha.seth@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
    
    @Sprint15
    #Scenario: Verify whether Admin 2 is able to see locked Content by Admin 1

        #When Admin one clicks on Locking Content block
        #When Admin two should login with "momenta_qa@bts.com" and "ABab20$"
        #When User should login in with "momenta_qa@bts.com" and "ABab20$"
        #When User should click on Client Tab
        #When User should click on Petronas folder
        #When Admin two clicks on Locked Content block

    @Sprint15
   Scenario: Verify if Admin 1 is able to Lock CMS Content
        When Admin 1 clicks on CMS Content
        When Admin 1 clicks on momenta Logo
        When Admin 1 logs out and logs in
        When Admin navigates to Petronas folder
        Then Admin views the CMS Content with lock icon which is locked by me

    @Sprint15
   Scenario: Verify if Admin 1 locks CMS Content and Admin 2 tries accessing the same
        When Admin 1 clicks on CMS Content
        When Admin 1 clicks on momenta Logo
        When Admin 1 logs out and Admin 2 logs in
        When Admin navigates to Petronas folder
        Then Admin views the CMS Content with lock icon which is locked by others
        Then Admin 2 access Admin 1 content it should be in read only mode

    @Sprint15
   Scenario: Verify if Admin 2 is able to access it after Admin 1 unlocks CMS Content
        When Admin 1 clicks on CMS Content
        When Admin 1 clicks on Exit CMS Editor
        When Admin 1 logs out and Admin 2 logs in
        When Admin navigates to Petronas folder
        Then Admin views the CMS Content without lock icon and should able to access it successfully