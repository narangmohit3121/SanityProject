Feature: Create User

    Background:
    Given User should login in with "neha.seth@bts.com" and "ABab12$"
    When User clicks on client tab
        
        

    #@Sprint08
    @CreateUSer1

     Scenario: Verify Clicking on the 'Create User' button above the user list should land the user on 'Create user screen'.
     When User should click on petronas folder
     When User click on user tab
     When User click on any journey
     When User click on any cohortTitle
     When User click on create user button
     Then user should see create user screen

     

    #@Sprint08
    @CreateUSer2

     Scenario: Verify if Firstname,Lastname & Email are mandatory or not under Create User screen.
     When User should click on petronas folder
     When User click on user tab
     When User click on any journey
     When User click on any cohortTitle
     When User click on create user button
     When User click create button of create user screen without entering Firstname,Lastname and Email
     Then user should see validation message for entering Firstname

     #@Sprint08
     @CreateUSer3

     Scenario Outline: Verify if Firstname field is not accepting special charcters or junk data and blank value.
     When User should click on petronas folder
     When User click on user tab
     When User click on any journey
     When User click on any cohortTitle
     When User click on create user button
     When User enter Firstname as "<FirstName>"
     When User enter Firstname as "<LastName>"
     When User enter Firstname as "<Email>"
     When user click create button
     Then user should see validation error message for entering Firstname

     Examples:
| FirstName | LastName | Email |
| ##%#%$)%%^(%^%^%*) | desoza | john@petronas.com |
| desoza | john@petronas.com |  |



    #@Sprint08
    @CreateUSer4

     Scenario Outline: Verify if Last name field is not accepting special charcters or junk data and blank value.
     When User should click on petronas folder
     When User click on user tab
     When User click on any journey
     When User click on any cohortTitle
     When User click on create user button
     When User enter Firstname as "<FirstName>"
     When User enter Firstname as "<LastName>"
     When User enter Firstname as "<Email>"
     When user click create button
     Then user should see validation error message for entering last name

     Examples:
 | FirstName | LastName | Email |
 | John | ##%#%$)%%^(%^%^%*) | john@petronas.com |
 | Mansha |  | nikolas@petronas.com |

    #@Sprint08
    @CreateUSer5

     Scenario Outline: Verify if Email id field is not accepting special charcters or junk data and blank value.
     When User should click on petronas folder
     When User click on user tab
     When User click on any journey
     When User click on any cohortTitle
     When User click on create user button
     When User enter Firstname as "<FirstName>"
     When User enter Firstname as "<LastName>"
     When User enter Firstname as "<Email>"
     When user click create button
     Then user should see validation error message for entering email id 

      Examples:
 | FirstName | LastName | Email |
 | John | gibben | ##%#%$)%%^(%^%^%*) |
 | Mansha | Ansari |  |
   

    #@Sprint08
    @CreateUSer6

     Scenario: Verify if Clicking on 'Create' should add new user on 'User listing' page.

     When User should click on petronas folder
     When User click on user tab
     When User click on any journey
     When User click on any cohortTitle
     When User click on create user button
     When User enter Firstname as "Jesna"
     When User enter Firstname as "Joseph"
     When User enter Firstname as "<jesna.joseph@peronas.com>"
     When user click create button
     Then user should see the submited recods in next page
   

    #@Sprint08
    @CreateUSer7

     Scenario: Verify if Clicking on 'Cancel' should not save any details and redirect the user on 'User listing page'.

     When User should click on petronas folder
     When User click on user tab
     When User click on any journey
     When User click on any cohortTitle
     When User click on create user button
     When User enter Firstname as "Adwerd"
     When User enter Firstname as "Gibben"
     When User enter Firstname as "adwerdgibben@peronas.com"
     When user click Cancel button
     Then user should not see the submited recods in next page



   

   
   






