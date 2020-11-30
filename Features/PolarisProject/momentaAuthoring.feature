Feature: To check the momenta authoring 


Scenario: To check the login with invalid scenarios

Given I will navigate to momenta page
When I enter "neha.seth" in textbox having id "mat-input-0"
Then I will click on "Next" button
Then I will check the error message displayed as "check email Failed"
Then I enter "as@s.com" in textbox having id "mat-input-0"
Then I will click on "Next" button
Then I will check the error message displayed as "check email Failed"
Then I enter "neha.seth@bts.com" in textbox having id "mat-input-0"
Then I will click on "Next" button
Then I enter "12" in textbox having id "password__field"
Then I will click on "Login" button
Then I will check the error message displayed as "Login Failed"

