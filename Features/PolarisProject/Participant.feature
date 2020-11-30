Feature: I am going to validate btsMatch Page


Scenario: participant Page functionality testing

Given I will navigate to participant page and login with "pramod.shinde@petronas.com" and "ABab15$"
Then I select "Journey for Participant" from dropdown
Then I click on Start button and initialise assessment
Then I will check the Title is "Welcome"  
Then I will click on Next button
Then I will check the Title is "Privacy Policy"
Then I will click on Accept button
Then I will check the Title is "User Profile" 
Then I will check the Percentage is "0%" 
Then I will check error message
Then I will fillout the user profile form
Then I will click on Next button
Then I will check the Title is "Single Horizontal"
Then I will check the Percentage is "10%"
Then I will check error message
Then I will check the question is "As long as I get my point across, it is not important to be completely accurate." 
Then I will fillout the Single Horizontal form
Then I will click on Next button
Then I will check the Title is "Single Vertical"
Then I will check the Percentage is "12%"
Then I will check error message
Then I will check the question is "How do you typically react when you are asked to do something new and challenging" 
Then I will fillout the Single Vertical form
Then I will click on Next button
Then I will check the Title is "Polar (Not completed)"
Then I will check the Percentage is "16%"
Then I will check error message
Then I will check the question is "What do you think about the behavior of people" 
Then I will fillout the polar form
Then I will click on "Next" button
Then I will check the Title is "Texts"
Then I will check the Percentage is "18%"
Then I will check error message
Then I will check the question is "Tell me something about yourself in few words." 
Then I will fillout the texts form
Then I will click on Next button
Then I will check the Title is "Variable Grid"
Then I will check the Percentage is "20%"
Then I will check error message
Then I will fillout Variable Grid form
Then I will click on Next button
# Then I will check the Title is "MBA Scenario 1"
# Then I will fillout the MBA form
# Then I will check the Title is "Various Image types"
# Then I will answer all the questions
# Then I will click on "Next" button
# Then I will check the Title is "SIM 1 - Random Questions"
# Then I will fillout the SIM1 form
# Then I will click on "Next" button
# Then I will check the Title is "Instructions"
# Then I will click on "Next" button
# Then I will check the Title is "SIM 2 - Random Questions"
# Then I will fillout the SIM2 form
# Then I will click on "Next" button
# Then I will check the Title is "Survey"
# And I will answer question "Please write your feedback in few words for us" and answer in "mat-input-0" as "This is feedback"
# Then I will click on "Next" button
# Then I will check the Title is "Scoring"
# Then I will click on "Submit" button
# Then I will check i am on report page



#  Scenario: To check the user is getting logged out when clicked on reject button

# Given I will navigate to participant page and login with "pramod.shinde@petronas.com" and "ABab15$"
# Then I select "Journey for Participant" from dropdown
# Then I click on Start button and initialise assessment
# Then I will check the Title is "Welcome"  
# Then I will click on Next button
# Then I will check the Title is "Privacy Policy"
# Then I will click on Reject button 
# Then I will check i am on participant page




# Scenario: To check the after login the Page is preserved after logging out in between

# Given I will navigate to btsMatchLogin page
# Then I enter "bts30" in textbox having id "username"
# Then I enter "123" in textbox having id "password"
# Then I select "SampleAssessment v1" from "assessment" dropdown
# Then I click on button having id "submit"
# Then I will check the Title is "BTS assessment title"  
# Then I will click on "Next" button
# Then I will check the Title is "Privacy Policy"
# Then I will click on " Accept " button
# Then I will check the Title is "User Profile"
# Then I will Log Out from user account
# Then I enter "bts30" in textbox having id "username"
# Then I enter "123" in textbox having id "password"
# Then I select "SampleAssessment v1" from "assessment" dropdown
# Then I click on button having id "submit"
# Then I will check the Title is "User Profile"

