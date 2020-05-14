Feature: User Mapping

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Setting button of Petronas Client
When User clicks on PasswordSetup Tab of Petronas Client

@Sprint16
Scenario Outline: Verify PasswordSetup with Min p

When User enters Min Length as "<Min Length>"
When User enters Max Length as "<Max Length>"
When User enters Min Lower Case as "<Min Lower Case>"
When User enters Max Lower Case as "<Max Lower Case>"
When User enters Min Upper Case as "<Min Upper Case>"
When User enters Max Upper Case as "<Max Upper Case>"
When User enters Min Numeric as "<Min Numeric>"
When User enters Max Numeric as "<Max Numeric>"
When User enters Allowed Special Characters as "<Allowed Sp Char>"
When User enters Check Previous Password as "<Check Previous Pwd>"
When User enters Force Password Change as "<Force Pwd Change>"
When User clicks on Save button to Save Petronas Client Configuration

When User click on user tab
When User click on View More
When User clicks on Journey and Cohort for Update Client Configuration
When User creates new user with parameters set in PasswordSetup with first name as "<Fname>" last name as "<Lname>" email as "<Email>" password as "<Password>"

When Participant should login in with "<Email>" and "<Password>"
Then User should display entry page


Examples:
| Min Length | Max Length | Min Lower Case | Max Lower Case | Min Upper Case | Max Upper Case | Min Numeric | Max Numeric | Allowed Sp Char | Check Previous Pwd | Force Pwd Change | Fname  |   Lname   |       Email          |   Password   |
|     4      |    25      |       4        |        8       |        3       |        6       |      3      |      6      |       #*        |         5          |       40         | ajax   |   lee     | ajaxl@petronas.com   | ABCabcd123#* |  
|     2      |    25      |       2        |        4       |        2       |        4       |      2      |      4      |       $%        |         5          |       40         | humpty |  thompson | humptyt@petronas.com | ABab12$ |

