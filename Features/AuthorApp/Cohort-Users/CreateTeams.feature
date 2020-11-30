@E2ECohortUsers
Feature: Create Teams

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

# @E2ECohortUsers
# @CreateTeams
Scenario Outline: Verify if User is able to create Teams using different dropdowns

When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Cohort-Users/Automation Create Teams" folder in petronas
#When User click on Automation do not Delete folder
#When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
#When User click on Cohort-Users folder in AuthorApp
#When User click on Automation Create Teams journey
When User click on Journey Configuration
When User click on Team Type Configuration
When User click on Add Team Type
When User enters Team Title as "<Team Title>"
When User selects value from Team Type dropdown as "<dropdownoption>"
When User click on Create button
Then New team should be added under Team Type as "<New Team>"
Then User Saves and Publish and Exits Journey Config
#Then User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel

Examples:
| Team Title   | dropdownoption | New Team     |
| Real Madrid      | Pod            | Real Madrid      |
| XI Champion    | Regional       |  XI Champion   |
| XSuperKings   | Workshop       | XSuperKings   |

# @E2ECohortUsers
# @CreateTeams
Scenario: Verify if User is able to view the created Teams under Cohort and Users of the Journey
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation Create Teams" and clicks on it
When User clicks on Cohort Settings button of Cohort "Create Teams Cohort"
When User clicks on Teams Tab
Then User should be able to view created Teams under Teams Tab as "Real Madrid teams" and "XI Champion teams" and "XSuperKings teams" at Cohort Level
When User clicks on Cancel button to exit Cohort Settings
When User clicks on Cohort under Cohort listing page as "Create Teams Cohort"
When User clicks on User under User listing page as "userone"
When User clicks on Teams Tab
Then User should be able to view created Teams under Teams Tab at User Level

# @E2ECohortUsers
# @CreateTeams
Scenario: Verify if User is able to delete Teams

When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Cohort-Users/Automation Create Teams" folder in petronas
When User click on Journey Configuration
When User click on Team Type Configuration
Then User deletes all the Teams from Team Type Configuration
Then User Saves and Publish and Exits Journey Config
#Then User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel

