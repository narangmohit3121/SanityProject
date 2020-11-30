@E2ETest_CMS
Feature: Tag Content Object To Theme 

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User click on Automation do not Delete folder


@Sprint20
@tagContentTheme1
Scenario: Verify that if user is able to add new theme under configure client 

When user should check if configure client tab is present top right corner and click on it
When User clicks on Arrow of Petronas client
When User clicks on theme Tab of Petronas Client
When User should check if plus icon is present beside Add New and click on it
When User should check if Theme tittle text field is present and enter any title as "TCOTTheme Automation1"
When User should check if Add Theme button present and click on it
When User clicks on Save button under client config

@Sprint20
@tagContentTheme2
Scenario: Verify that if user is able to add theme to newly created Activity

When User should check if sprint 20 folder is present and click on it
When user should check if plus icon beside content is present and click on it
When user should check if new activity is present and click on it
When user should check if Activity tittle text field is present under activity setting and enter any tittle as "Tag Content Theme"
When user should check if resource toggle is present under activity setting and turn ON toggle
When user should check if select theme dropdown is present under activity setting and click on it
When user should check if theme dropdown list is present and select TCOTTheme Automation1 theme
When user should check if create button is present under activity setting and click on it


@Sprint20
@tagContentTheme3
Scenario: Verify that if user is able to add theme to existing Activity

When User should check if sprint 20 folder is present and click on it
When user should check if Tag Content Theme Activity is present and click on it 
When user should check if General tab is present on top right corner and click on it
When user should check if content type select dropdown is present and click on it
When user should check if content type list dropdown is present and select any content as Action
When user should check if select theme dropdown is present in CMS and click on it
When user should check if theme dropdown list is present and select TCOTTheme Automation1 theme

When user should check if save draft and publish and exit editor button  is present on right top corner and click on it


@Sprint20
@tagContentTheme4
Scenario: Verify that if user is able to remove theme from extisting activity 

When User should check if sprint 20 folder is present and click on it
When user should check if Tag Content Theme Activity is present and click on it
When user should check if General tab is present on top right corner and click on it
When user should check if themes are present and click on any theme cross icon as TCOTTheme Automation1 to remove theme
When user should check if save draft and publish and exit editor button  is present on right top corner and click on it

@Sprint20
@tagContentTheme5
Scenario: Verify that if user able to delete created content 
When User should check if sprint 20 folder is present and click on it
When User should check if three dot of Tag Content Theme Activity is present and click on it
Then User should check if delete option is present and click on it 

@Sprint20
@tagContentTheme6
Scenario: Verify that if user able to delete theme from client config

When user should check if configure client tab is present top right corner and click on it
When User clicks on Arrow of Petronas client
When User clicks on theme Tab of Petronas Client
When User should check if TCOTTheme Automation1 theme is present and delete it

