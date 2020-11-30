Feature: MOVE Functionality

Background: 
Given User Logs in as admin user
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sprint16 folder


@Sprint16
@Move04
Scenario: Verify that a flat list of folders is displayed when user clicks on Move option for Content, Journey, Folder and user can search within that list

When User selects the Move option for a Content
Then a flat list of folders to which user can move content is displayed
Then User can do a text search in the folder list 
When User selects the Move option for a Journey
Then a flat list of folders to which user can move Journey is displayed
Then User can do a text search in the folder list 
When User selects the Move option for a Folder
Then a flat list of folders to which user can move Folder is displayed
Then User can do a text search in the folder list 

@Sprint16
@Move04
Scenario: Verify that user is not given an option to move a parent folder to its sub-folders

When User selects the Move option for a Folder
Then user is not given an option to move a parent folder to its sub-folders

@Sprint16
@Move04
Scenario: Verify that the path of the folders displayed in the folder is correct

When User selects the Move option for a Content
Then the path of the folders displayed in the folder is correct


@Sprint16
@Move04
Scenario: Verify that user is not able to move Content, Journey, Folder out of the current client e.g. Petronas contents can't be moved to Microsoft

When User selects the Move option for a Content
Then User should not be given an option to Move Content to a different client

@Sprint16
@Move04
Scenario: Verify that user is able to Move Content, Journey, Folder from the current folder to a sub-folder

When User selects the Move option for a Content
When User moves the content to a sub-folder within the current folder
When User selects the Move option for a Journey
When User moves the journey to a sub-folder within the current folder
When User selects the Move option for a Folder
When User moves the folder to a sub-folder within the current folder
Then the content,journey,and folder should get moved to the destination folder

@Sprint16
@Move04
Scenario: Verify that user is able to Move Content, Journey, Folder from the current folder to a parent folder
When User navigates to a sub-folder within current folder
When User selects the Move option for a Content
When User moves the content from sub-folder to a parent folder
When User selects the Move option for a Journey
When User moves the journey from sub-folder to a parent folder
When User selects the Move option for a Folder
When User moves the folder from sub-folder to a parent folder
Then the content,journey,and folder should get moved to the parent folder
