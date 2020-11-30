Feature: Changing Language setup

Scenario: To Check We can change the language from drop down
Given I will navigate to btsmatchdev page
Then I enter "bts22" in textbox having id "username"
Then I enter "123" in textbox having id "password"
Then I select "SampleAssessment v3" from "assessment" dropdown    
Then I click on button having id "submit"
Then I will click on "more_vert" icon on header
Then I will change the language to "Germany" from dropdown having id "mat-select-0"
Then I will click on "more_vert" icon on header
Then I check value of dropdown to be "Germany" of dropdown having id "mat-select-0"
Then I will Log Out from user account


Scenario: To Check the assesment is working in german language
Given I will navigate to btsmatchdev page
Then I enter "bts22" in textbox having id "username"
Then I enter "123" in textbox having id "password"
Then I select "SampleAssessment v3" from "assessment" dropdown
Then I click on button having id "submit"
Then I will check the Title is "German BTS assessment title"  
Then I will click on "Nächster" button
Then I will check the Title is "German Privacy Policy"
Then I will click on "  Akzeptieren  " button
Then I will check the Title is "German User Profile" 
Then I will fillout the German user profile form
Then I will click on "Nächster" button
Then I will check the Title is "German Single Horizontal"
Then I will fillout the German Single Horizontal form
Then I will click on "Nächster" button
Then I will check the Title is "German Single Vertical"
Then I will fillout the German Single Vertical form
Then I will click on "Nächster" button
Then I will check the Title is "German Polar"
Then I will fillout the German polar form
Then I will click on "Nächster" button
Then I will check the Title is "German Texts"
Then I will fillout the German texts form
Then I will click on "Nächster" button
Then I will check the Title is "German Bi Polar"
Then I will fillout German bipolar form
Then I will click on "Nächster" button
Then I will check the Title is "German MBA Scenario 1"
Then I will fillout the MBA form
Then I will check the Title is "German Various Image types"
Then I will answer all German questions
Then I will click on "Nächster" button
Then I will check the Title is "German SIM 1 - Random Questions"
Then I will fillout the German SIM1 form
Then I will click on "Nächster" button
Then I will check the Title is "German Instructions"
Then I will click on "Nächster" button
Then I will check the Title is "German SIM 2 - Random Questions"
Then I will fillout the German SIM2 form
Then I will click on "Nächster" button
Then I will check the Title is "German Survey"
And I will answer question "Bitte schreiben Sie uns Ihr Feedback in wenigen Worten" and answer in "mat-input-0" as "This is feedback"
Then I will click on "Nächster" button
Then I will check the Title is "Scoring"
Then I will click on " einreichen " button
Then I will check i am on report page

