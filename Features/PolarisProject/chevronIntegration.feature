Feature: To Check Assesment scenarios

# Scenario: To Check the invalid login

# Given I will navigate to chevron page
# Then I will click on "Login" button
# Then I will check there is toast message text should be "Password is mandatory."
# Then I will check there is toast message text should be "Email is mandatory."



Scenario: To Check the page is displaeyed

Given I will navigate to chevron page
# Then I will click on "Login" button
# Then I will check there is toast message text should be "Password is mandatory."
# Then I will check there is toast message text should be "Email is mandatory."
Then I enter "jackdenial@.com" in textbox having id "userEmail"
Then I enter "12334%$" in textbox having id "password"
Then I will click on "Login" button
Then I will check there is toast message text should be "Email is invalid."
Then I enter "jackdenial@chevron.com" in textbox having id "userEmail"
Then I will click on "Login" button
Then I will check there is toast message text should be "Password mismatch."
 Then I enter "ABab13$" in textbox having id "password"
Then I will click on "Login" button
# Then I will select other journyes from dropdowns
 Then I will click on list option having Text "Practice Journey3"
 Then I will click on navigate to assessment
 Then I will check the Title is "Client Centricity Assessment" 
 Then I will click on "Next" button 
 Then I will check the Title is "Privacy Policy"
 Then I will click on "Accept" button
 Then I will click on "Next" button
 Then I will click on "Next" button
 Then I will check the "mandatory" error message displayed on page for mandatory field
 Then I will select "Australlian" from dropdown having name "language"
 Then I will check the "mandatory AU" error message displayed on page for mandatory field
 Then I will select "Australlian" from dropdown having name "language"
 Then I will fillout the MBA1 Pages
Then I will fillout the MBA2 Pages
Then I will fillout the MBA3 Pages
Then I will fillout the MBA4 Pages
# Then I will click on "Go to Next Activity" button



Scenario: To checkthe localisation

# Given I will navigate to chevron page
# Then I enter "tushar@chevron.com" in textbox having id "userEmail"
# Then I enter "ABab12$" in textbox having id "password"
# Then I will click on "Login" button
#  Then I will click on list option having Text "Practice Journey3"
#  Then I will click on navigate to assessment
Given I am on chevronHome page
Then I will select "Australlian" from dropdown having name "language"
Then I will check the Title is "Client Centricity Assessment AU"
Then I will click on "Next AU" button 
Then I will check the Title is "Privacy Policy AU"
Then I will click on "Reject AU" button
Then I enter "tushar@chevron.com" in textbox having id "userEmail"
Then I enter "ABab12$" in textbox having id "password"
Then I will click on "Login" button   
 Then I will click on list option having Text "Practice Journey2"
 Then I will click on navigate to assessment
 Then I will select "Australlian" from dropdown having name "language"
Then I will click on "Accept AU" button
Then I will check the Title is "Third AU"
Then I will click on "Next AU" button 
Then I will fillout the LocalisedMBA1 Page