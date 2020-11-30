@E2ETest_CMS
Feature: Authoring Registration Flow


@AuthoringRegistrationFlow1
Scenario: Verify content type "Registration" under CMS and SAVE and PUBLISH
Given User Logs in as admin user
When User should click on Client Tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
When User clicks on Registration Flow content block under CONTENT section
When User checks if Registration option is present under Content type
Then User Saves Draft and Publishes the Content and then clicks on Exit Editor

@AuthoringRegistrationFlow1
Scenario: Verify if "Registration" left hand option is present or not under Journey Authoring page
Given User Logs in as admin user
When User should click on Client Tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create" folder in petronas
When User click on Journey with Registration Flow
When User checks for Registration left hand option and clicks on it
When User clicks on link registration icon
When User selects appropriate content to link
Then User clicks on Save and PUBLISH on Registration Page

@AuthoringRegistrationFlow3
Scenario: Verify that pages of Registration Content are displayed to the user on Login

When Participant should login in with "AutomationRegistration1@petronas.com" and "ABab12$"
#When user selects the the industry as "Qa Test1"
When User selects gender as "Male"
When user selects the region as "Asia"
When user selects "Yes" for manage accounts