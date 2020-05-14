Feature: Support Page

Background: 
Given User should login in with "neha.seth@bts.com" and "123456"
When User clicks on client tab
When User should click on Petronas folder

@Sprint8
@SupportPage2

Scenario: Verify if  User is seeing list of options after clicking on Content type and Selecting Support Option

Given User is on CMS - Activity Authoring Editing Page for Support Page
When user clicks on Content type dropdown
When User can view list of content type options and can select Support option
Then User can see 'Support' option selected



@Sprint8
@SupportPage3
Scenario: Verify if User can see Support option for any Journey and it is clickable

When User clicks on Support Journey and landed to Journey Authoring page
When User should be able to view left side panel with Support Option and click on it
Then User lands on Support Link Page


@Sprint8
@SupportPage4
Scenario: Verify if User can link activity after landing on Support Page from Author side

When User clicks on Support Journey and landed to Journey Authoring page
When User should be able to view left side panel with Support Option and click on it
When User clicks on link activity icon
When user selects from current collection content list for Support Page
When user click on attachement icon to link content for Support Page
Then user should be able to view linked Activity for Support Page

@Sprint8
@SupportPage5
Scenario: Verify if User can SAVE and PUBLISH after linking support activity

When User clicks on Support Journey and landed to Journey Authoring page
When User should be able to view left side panel with Support Option and click on it
When User clicks on link activity icon
When user selects from current collection content list for Support Page
When user click on attachement icon to link content for Support Page
When User can SAVE and PUBLISH Support Page
Then user should be able to view linked Activity for Support Page

