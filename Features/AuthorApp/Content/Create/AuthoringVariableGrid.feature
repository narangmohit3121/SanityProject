@E2ETest_CMS
Feature: Authoring Variable Grid

Background:
Given User Logs in as admin user
When User should click on Client Tab
When User should click on Petronas folder
When User click on Automation do not Delete folder
When User click on Sprint 14 folder
When User should click on Radio Button Matrix Content

@Sprint14
Scenario: Verify if Variable Grid block is present under CMS or not

Then User should check Radio Button Matrix block is present under CMS

@Sprint14
Scenario: Verify if user is able to edit Variable Grid and enter values under all empty fields

When User clicks on Edit Radio Button Matrix
When User enters value in Journey Script ID as "Test Journey Script 1"
When User enters value in Type Description as "Test Type Description"
When User enters Question Title as "Question Title"
When User enters value in Type Question Title as "Option Question Title"
Then User clicks on Save button of Radio Button Matrix

@Sprint14
Scenario: Verify if user is able to [+ Add Option] multiple times & Delete Options or not

When User clicks on Edit Radio Button Matrix
When User clicks on Add Option of Radio Button Matrix

@Sprint14
Scenario: Verify if user is able to [+ Add Question] multiple times & Delete Options or not

When User clicks on Edit Radio Button Matrix
When User clicks on Add Question of Radio Button Matrix

