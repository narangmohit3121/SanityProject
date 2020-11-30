@E2ETest_Login
Feature: SSO login for Admin and Client

@Regression_Login
@Sprint17
@ClientSSO
Scenario: Verify that Client SSO user is able to login to User App 
Given the client App is correctly configured with correct SSO settings
Given the flag for ssoEnabled flag is set to true for petronas
When Client SSO User logs in into One Login App
#When User launches the Client App
Then User should be successfully able to navigate to Participant App

@Regression_Login
@Sprint17
@AdminSSO
Scenario: Verify that Admin SSO user is able to login to Author App 
Given the Author App is correctly configured with correct SSO settings
When Admin SSO User logs in into One Login App
Then User should be successfully able to navigate to Author App