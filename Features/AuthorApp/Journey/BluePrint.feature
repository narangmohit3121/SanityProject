@E2EAuthor_Journey
Feature: Blue Print

Background: 
#Given User should login in with "abhi@bts.com" and "ABab86$"
#When User should click on Client Tab
#When User should click on Petronas folder
#When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey/Automation BluePrint" folder in petronas

@BluePrint
Scenario: Verify if User is able to set option in BluePrint

Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey/Automation_BluePrint" folder in petronas
#When User clicks on Edit Stage "<StageName>"
When User clicks on Edit Stage "BluePrint Stage 1"
When User clicks on Lifecycle Tab
#When User clicks on plus icon of Lifecycle "<LifeCycle Stage>"
When User clicks on plus icon of Lifecycle "Remove Access"
#When User clicks on static radio button of Lifecycle "<LifeCycle Stage>"
When User clicks on static radio button of Lifecycle "Remove Access"
When User sets date and time
When User clicks on Save button of Edit Stage

When User clicks on Edit Stage "BluePrint Stage 2"
When User clicks on Lifecycle Tab
When User clicks on plus icon of Lifecycle "Make Invisible"
When User clicks on static radio button of Lifecycle "Make Invisible"
When User sets date and time
When User clicks on Save button of Edit Stage

When User clicks on Edit Stage "BluePrint Stage 3"
When User clicks on Lifecycle Tab
When User clicks on plus icon of Lifecycle "Make Visible"
When User clicks on static radio button of Lifecycle "Make Visible"
When User sets date and time
When User clicks on Save button of Edit Stage

When User clicks on Edit Stage "BluePrint Stage 4"
When User clicks on Lifecycle Tab
When User clicks on plus icon of Lifecycle "Make Available"
When User clicks on static radio button of Lifecycle "Make Available"
When User sets date and time
When User clicks on Save button of Edit Stage

Then User clicks on Save Publish and Exit on Journey Flow

#Examples:
 #   |     StageName     | LifeCycle Stage |
  #  | BluePrint Stage 1 | Remove Access   |
   # | BluePrint Stage 2 | Make Invisible  |
    #| BluePrint Stage 3 | Make Visible    |
     #| BluePrint Stage 4 | Make Available  |



#When User clicks on Edit Stage to make it Available
#When User clicks on Edit Stage to Remove Access
#When User clicks on Edit Stage to make it Invisible
@BluePrint2
Scenario Outline: Scenario Outline name

Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey/Automation BluePrint" folder in petronas
When User clicks on Edit Stage "<StageName>"
When User clicks on Lifecycle Tab
When User clicks on plus icon of Lifecycle "<LifeCycle Stage>"
When User clicks on relative radio button of Lifecycle "<LifeCycle Stage>"

When User selects Days as "" and After as "" and Stage as "" and final Stage as ""
When User clicks on Save button of Edit Stage

Examples:
    |     StageName     | LifeCycle Stage |
    | BluePrint Stage 5 | Remove Access   |

@BluePrint

Scenario: Verify if Participant is able to view the stages

Given Participant should login in with "blueprint_automation@petronas.com" and "ABab12$"
#When User clicks on My Journey
When User starts first Activity
When User clicks on My Journey
Then User verifies that First Stage should be Locked
When User starts second Activity
When User clicks on My Journey
Then User verifies that Second Stage should become Invisible

Then User verifies that Third Stage should become Visible

Then User verifies that Fourth Stage should become Available