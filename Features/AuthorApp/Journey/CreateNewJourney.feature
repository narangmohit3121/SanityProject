@E2EAuthor_Journey
Feature: Author Creates New Journey 

Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder

@Sprint4
@Journey1
Scenario: Verify if empty Journey Title and Description is displayed under new 'Create New Jouney' popup window
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        Then Create New Journey popup modal window should open up with empty Journey Title and empty description field


  @Sprint4
  @Journey2
Scenario: Verify if user is able to Create New Journey with blank Title and description by clicking on Save
       When User click on Automation Folder_DONOT DELETE folder
       When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
       When User click journey folder in AuthorApp folder
       When User clicks on Journey plus icon
       When User clicks on Create New Journey
       When User clicks on save button
       Then Validation message should be displayed as Title is mandatory


  @Sprint4
  @Journey3
Scenario: Verify if user is able to 'Cancel' and close Create New Journey popup modal
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        When User enters valid title as "Automation QA Journey" and description "Automation QA Journey Description"
        When User clicks on cancel button
        Then Create New Journey popup modal window should get closed


@Sprint4
@Journey4
Scenario: Verify if user is able to Create New Journey with valid Title and description by clicking on Save
       
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on Journey plus icon
        When User clicks on Create New Journey
        When User enters valid title as "Automation QA Journey" and description "Automation QA Journey Description"
        When User clicks on save button
        Then User should see Journey is created with same name which is mention
  

  @Sprint4
  @Journey5 
 Scenario: Verify if blank journey page is displayed when new journey tile is clicked
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User clicks on the newly created Journey
        Then User should see blank journey after click newly created Journey

        

 @Sprint4
 @Journey6
Scenario: Verify if user is able to Preview Journey newly created
         When User click on Automation Folder_DONOT DELETE folder
         When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
         When User click journey folder in AuthorApp folder
         When User clicks on the newly created Journey
         When User clicks on preview button on Journey Authoring page
         Then Preview page should openup in new tab displaying Journey created


                  
#  @Sprint4
#  @Journey7
# Scenario: Verify if user is able to delete newly created Journey
#          When User click on Automation Folder_DONOT DELETE folder
#          When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
#          When User click journey folder in AuthorApp folder
#          When User clicks on the three dots of new created Journey
#          When User clicks on the delete option to delete journey
#          Then User should not see created journey exist





