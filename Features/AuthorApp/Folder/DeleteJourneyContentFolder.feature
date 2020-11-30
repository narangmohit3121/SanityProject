Feature: Delete Journey Content Folder Functionality

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on Automation do not Delete folder
        When User click on Sprint 15 folder
        When User click on Automation_Delete_Jrn_Cnt_Fld folder
    
    @Sprint14
    @DeleteJourneyFolderContent1
    Scenario: Verify that Delete option is displayed to the user and user is able to delete indvidual Content

        #Create
        When User should check if plus icon is present besides Folders and click on it
        When User enter name of Folder as "Fld_1" and clicks on Save
        Then User should check if plus icon is present besides Journeys and click it
        When User enter name of first Journey as "Jrn_1" and Description as "Jrn Desc" and clicks on Save
        Then User should check if plus icon is present besides Journeys and click it
        When User enter name of second Journey as "Jrn_2" and Description as "Jrn Desc" and clicks on Save
        When User should check if plus icon is present besides Content and click on it
        When User enter name of first Content as "Cnt_1" and Description as "Cnt Desc" and clicks on Save
        When User should check if plus icon is present besides Content and click on it
        When User enter name of second Content as "Cnt_2" and Description as "Cnt Desc" and clicks on Save

        #Linking
        When User click on first Journey
        When User adds Module and Activity in the first Journey as "Module_1" and "MOne" and "Activity_1"
        When User click on link Activity and switch to link Activity frame

        When User links Activity to the Content
        When User Saves and Publishes the Journey and then Exits the Journey on Journey Flow page

        #When User click on Automation do not Delete folder
        #When User click on Sprint 15 folder
        #When User click on Automation_Delete_Jrn_Cnt_Fld folder

        #Delete
        When User clicks on three Dots of Folder and click on Delete
        When User clicks on three Dots of second Journey and click on Delete just Journey
        When User clicks on three Dots of second Content and click on Delete
        When User clicks on three Dots of first Journey and click on Delete Journey and Contents
        When User clicks on three Dots of first Content and click on Delete



