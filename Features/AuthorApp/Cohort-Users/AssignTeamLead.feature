@E2ECohortUsers
Feature: Assign Team Lead

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

#@AssignTeamLead
# Scenario: Scenario name

# When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Cohort-Users/Automation AssignTeamLead" folder in petronas
# When User click on Journey Configuration
# When User click on Team Type Configuration
# When User click on Add Team Type
# When User enters Team Title as "ClubFour"
# When User selects value from Team Type dropdown as "Pod"
# When User changes Default number of Teams to "5" and Default maximum number of people to "5"
# When User click on Create button
# Then New team should be added under Team Type as "ClubFour"
# Then User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel

# @AssignTeamLead
# Scenario: Scenario name 2

# When User clicks on Users Tab
# When User searches Journey in Filter Journeys as "Automation AssignTeamLead"
# When User clicks on Journey "Automation AssignTeamLead" under Journeys list
# When User click on Import button for Bulk Upload
#When User creates excel file
#When User upload bulk upload file of Assign TeamLead and click on Upload
#When User upload bulk upload file as "D:/Automation/momentafunctionalautomation/TestData/bulkUploadFILE.xlsx" and click on Upload
#When User upload bulk upload file as "auto1_bulk-upload-template.xlsx" and click on Upload
#added steps
# When User creates excel file with userid as "bulkuserupload" domain as "@petronas.com" and path "D:\\Bulk Upload\\TeamLead.xlsx"
# When User upload bulk upload file as "D:/Bulk Upload/TeamLead.xlsx" and click on Upload


# Then User validates success message
# Then User clicks on Continue of Import Window


#@AssignTeamLead1
Scenario: Scenario name

When User clicks on Users Tab
When User searches Journey in Filter Journeys as "Automation AssignTeamLead"
When User clicks on Journey "Automation AssignTeamLead" under Journeys list
When User clicks on Cohort under Cohort listing page as "TeamLeadCohort"
When User clicks on select all check box
When User clicks on Actions dropdown
When User selects option Add to a Teams
When User clicks on Add to Teams as "ClubFour" and selects Team as "ClubFour1"
Then User adds user as "teamleadprofile8@petronas.com" to Team and Saves
 
#added
When User navigates back to Journey "Automation AssignTeamLead" under left Panel 
#@AssignTeamLead3
#Scenario: Verify that assigned Team Lead is successfully allocated

#When User clicks on Users Tab
#When User searches Journey in Filter Journeys as "Automation AssignTeamLead"
#When User clicks on Journey "Automation AssignTeamLead" under Journeys list
When User clicks on Cohort Settings button of Cohort "TeamLeadCohort"
When User clicks on Teams Tab
Then User validates the assigned Team Lead is displayed as "teamleadprofile8@petronas.com" under Team Lead column

#@AssignTeamLead4
#Scenario: Verify that assigned Team Lead can be changed by User
#When User clicks on Users Tab
#When User searches Journey in Filter Journeys as "Automation AssignTeamLead"
#When User clicks on Journey "Automation AssignTeamLead" under Journeys list
#When User clicks on Cohort Settings button of Cohort "TeamLeadCohort1"
#When User clicks on Teams Tab
When User clicks on Team name as "ClubFour1" under which Team Lead is assigned
Then User clicks on the other radio button as "teamleadprofile7@petronas.com" to update Team Lead
Then User clicks on Save button of Edit Team Window
Then User validates the updated Team Lead is displayed as "teamleadprofile7@petronas.com" under Team Lead column