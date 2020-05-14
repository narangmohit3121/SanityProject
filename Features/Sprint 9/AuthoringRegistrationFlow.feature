Feature: Authoring Registration Flow

Background:
Given User should login in with "neha.seth@bts.com" and "123456"
When User should click on Client Tab
When User should click on Petronas folder

@AuthoringRegistrationFlow1
Scenario: Verify content type "Registration" under CMS and SAVE and PUBLISH

When User clicks on Registration Flow content block under CONTENT section
When User checks if Registration option is present under Content type
Then User clicks on Save and PUBLISH

@AuthoringRegistrationFlow2
Scenario: Verify if "Registration" left hand option is present or not under Journey Authoring page

When User click on Journey with Registration Flow
When User checks for Registration left hand option and clicks on it
When User clicks on link registration icon
When User selects appropriate content to link
#Then User clicks on Save and PUBLISH

@AuthoringRegistrationFlow3
Scenario: Verify when Participant user logs in and selects Industry, then valid registration content should be displayed

When Participant should login in with "tomharris@petronas.com" and "ABab12$"
When user selects the the industry as "Qa Test1"
When User selects gender as "Male"
When user selects the region as "Asia"
When user selects "Yes" for manage accounts
When User enters the age as "25"