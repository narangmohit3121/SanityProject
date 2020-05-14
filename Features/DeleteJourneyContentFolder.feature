Feature: Delete Journey Content Folder Functionality

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User click on Automation do not Delete folder
When User click on Sprint 15 folder
When User click on Automation_Delete_Jrn_Cnt_Fld folder

Scenario: Verify that Delete option is displayed to the user and user is able to delete indvidual Content

When User should check if plus icon is present besides Folders and click on it
When User enter name of Folder as "Fld_1" and clicks on Save
Then User should check if plus icon is present besides Journeys and click on it
When User enter name of Journey as "Jrn_1" and clicks on Save
When User should check if plus icon is present besides Content and click on it
When User enter name of Content as "Cnt_1" and clicks on Save