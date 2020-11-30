Feature: Security testing

Scenario: To Check we are passing correct information

Given I will navigate to btsMatchLogin page
Then I enter "bts59" in textbox having id "username"
Then I enter "123" in textbox having id "password"
Then I select "SampleAssessment v1" from "assessment" dropdown
Then I click on button having id "submit"
Then I will click on "Next" button
Then I will click on " Accept " button
Then I will fillout the user profile form
Then I will click on "Next" button
Then I will fillout the Single Horizontal form
Then I will click on "Next" button
Then I will fillout the Single Vertical form
Then I will click on "Next" button
Then I will fillout the polar form
Then I will click on "Next" button
Then I will check the texts fields with css scripting
Then I will fillout the texts form
Then I will click on "Next" button
Then I will fillout bipolar form
Then I will click on "Next" button
Then I will fillout the MBA form
Then I will answer all the questions
Then I will click on "Next" button
Then I will fillout the SIM1 form
Then I will click on "Next" button
Then I will click on "Next" button
Then I will fillout the SIM2 form
Then I will click on "Next" button
Then I will check the survey page field with css scripting
Then I will click on "Next" button