Feature: Invalid Login Check

Scenario: To Check Login With Invalid Username
Given I will navigate to btsMatchLogin page
Then I enter "B T S 1" in textbox having id "username"
Then I enter "123" in textbox having id "password"
Then I select "BTSMatchSample v1" from "assessment" dropdown
Then I click on button having id "submit"
Then I will get message "Login Failed"
Then I enter "ZYD" in textbox having id "username"
Then I enter "123" in textbox having id "password"
Then I select "BTSMatchSample v1" from "assessment" dropdown
Then I click on button having id "submit"
Then I will get message "Login Failed"
