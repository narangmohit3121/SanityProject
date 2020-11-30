@E2EAuthor_Journey
Feature: Support Page

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder



@Sprint8
@SupportPage1
Scenario: Verify if User can see Support option for any Journey and it is clickable

When User clicks on Support Journey and landed to Journey Authoring page
When User should be able to view left side panel with Support Option and click on it
Then User lands on Support Link Page

@Sprint8
@SupportPage2
Scenario: Verify if User can SAVE and PUBLISH after linking support activity

When User clicks on Support Journey and landed to Journey Authoring page
When User should be able to view left side panel with Support Option and click on it
When User clicks on link activity icon
When User click on petronas option to select content
When User provide 'SupportPageAutomationContent' as a content and click on select button
When User can SAVE and PUBLISH Support Page
Then user should be able to view linked Activity for Support Page


@Sprint8
@SupportPage3
Scenario: Verify if User can link activity after landing on Support Page from Author side

When User clicks on Support Journey and landed to Journey Authoring page
When User should be able to view left side panel with Support Option and click on it
When User clicks on link activity icon
When User click on petronas option to select content
When User provide 'SupportPageAutomationContent' as a content and click on select button
Then user should be able to view linked Activity for Support Page


 # For below scenario we need user for 'Support Journey Automation test' journey and validate from user side

@Sprint8
@SupportPage4
Scenario: Verify if participant User cVerify if User can SAVE and PUBLISH after linking support activityan see support page when support toggle is on from admin side

When User clicks on Support Journey and landed to Journey Authoring page
When User click journey configuration option from left panel
When User click on navigation option in journey configuration
When User click support toggle to make it on
When User can SAVE and PUBLISH Support Page in journey configuration

