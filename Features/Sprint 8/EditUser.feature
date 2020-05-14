Feature: Edit User

    Background:
    Given User should login in with "neha.seth@bts.com" and "123456"
    When User clicks on client tab
    When User should click on petronas folder
    When User click on user tab
    When User click on any journey
    When User click on any cohortTitle
    When User click on First name on any cohortTitle

    

    @Sprint990
    @EditUser1

     Scenario: Verify Clicking on the first name from the user list should land the user on 'edit user screen'.
     
     Then User should be landed on edit user screen

     @Sprint990
     @EditUser2

     Scenario Outline: Verify if Firstname,Lastname & Email are mandatory or not under Edit User screen.
     
     When User enter Firstname as "<FirstName>"
     When User enter Firstname as "<LastName>"
     When User enter Firstname as "<Email>"
     When User click GENERATE&EMAIL button for creating password
     When User click Save button
     Then User should see validation message for providing data



Examples:
| FirstName | LastName | Email |
| bullet | desoza | |
| desoza |  | john@petronas.com |
|   | hussy | hussy@petronas.com |


     @Sprint990
     @EditUser3

     Scenario Outline: Verify if Firstname field is not accepting blank data and special charcters or junk data.
     
     When User enter Firstname as "<FirstName>"
     When User enter Firstname as "<LastName>"
     When User enter Firstname as "<Email>"
     When User click GENERATE&EMAIL button for creating password
     When User click Save button
     Then User should see validation message for providing first name or invalid first name

Examples:
| FirstName | LastName | Email |
| !@@##$$%%^^&&** | desoza | joseph@gmail.com |
|  | Michal | michal@petronas.com |



@Sprint990
     @EditUser4

     Scenario Outline: Verify if Lastname field is not accepting blank data and special charcters or junk data.
     
     When User enter Firstname as "<FirstName>"
     When User enter Firstname as "<LastName>"
     When User enter Firstname as "<Email>"
     When User click GENERATE&EMAIL button for creating password
     When User click Save button
     Then User should see validation message for providing last name or invalid last name

Examples:
| FirstName | LastName | Email |
| Neha | $%$#$#$^%^%^ | neha.seth@gmail.com |
| John |  | john@petronas.com |


     @Sprint990
     @EditUser5

     Scenario Outline: Verify if email field is not accepting blank data and special charcters or junk data.
     
     When User enter Firstname as "<FirstName>"
     When User enter Firstname as "<LastName>"
     When User enter Firstname as "<Email>"
     When User click GENERATE&EMAIL button for creating password
     When User click Save button
     Then User should see validation message for providing email id or invalid email

Examples:
| FirstName | LastName | Email |
| Naveen | Kumar | $%$#$#$^%^%^  |
| Nikola |  joseph |  |


 @Sprint990
     @EditUser6

     Scenario: Verify if Clicking on 'Save' should land the user on 'User listing' page.

     @Sprint990
     @EditUser7

     Scenario: Verify if Clicking on 'Cancel' should not save any details and redirect the user on 'User listing page'.

