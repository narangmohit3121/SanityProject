
Feature: Edit User

    Background:
    Given User should login in with "abhi@bts.com" and "ABab86$"
    When User should click on Client Tab
    When User should click on Petronas folder
    When User clicks on Users Tab
    When User searches Journey in Filter Journeys as "Automation EditUser" and clicks on it
    When User clicks on Cohort under Cohort listing page as "CohortEditUser"
    #When User click on any journey
    #When User click on any cohortTitle
    #When User click on First name on any cohortTitle

    
    @EditUser1

     Scenario: Verify Clicking on the first name from the user list should land the user on 'edit user screen'.
     
     When User clicks on User under User listing page as "edituser"
     Then User should be landed on edit user screen

     @EditUser2

     Scenario: Verify if Firstname,Lastname & Email are mandatory or not under Edit User screen.
     
     When User clicks on User under User listing page as "edituser"
     #When User edits all the details in Edit User window FirstName as "<FirstName>" and LastName as "<LastName>" and Email as "<Email>"
     When User edits all the details in Edit User window FirstName as "  " and LastName as "raw" and Email as "abcd@petronas.com"
     When User clicks on User under User listing page as "edituser"
     When User edits all the details in Edit User window FirstName as "bullet" and LastName as "  " and Email as "abcd@petronas.com"
     When User clicks on User under User listing page as "edituser"
     When User edits all the details in Edit User window FirstName as "bullet" and LastName as "raw" and Email as "    "
     Then User should see validation message for providing data



#Examples:
#| FirstName | LastName | Email |
#| bullet | desoza | \n\n\n\n  |
#| desoza | \n\n\n  | john@petronas.com |
#| \n\n\n  | hussy | hussy@petronas.com |

     @EditUser

     Scenario Outline: Verify if Firstname field is not accepting blank data and special charcters or junk data.
     
     When User clicks on User under User listing page as "edituser"
     When User edits all the details in Edit User window FirstName as "<FirstName>" and LastName as "<LastName>" and Email as "<Email>"
     Then User should see validation message for providing junk data

Examples:
| FirstName | LastName | Email |
| !@@##$$%%^^&&** | desoza | joseph@gmail.com |
| raw | !@@##$$%%^^&&** | michal@petronas.com |
| raw | desoza | !@@##$$%%^^&&** |


 