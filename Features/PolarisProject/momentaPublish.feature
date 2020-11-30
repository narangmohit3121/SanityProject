Feature: Momenta Upload assesment

Scenario: To check the journey is working

Given I will navigate to momenta page
Then I enter "neha.seth@bts.com" in textbox having id "mat-input-0"
Then I will click on "Next" button
Then I enter "ABab12$" in textbox having id "password__field"
Then I will click on "Login" button
Then I navigate to chevron dashboard page
# Then I create journey having name "Practice Journey4" and publish it
# Then I will create cohort and link "Practice Journey4" to user
#  Then I will upload the assesment name "Practice Assessment3" and check the validations
#  Then I will check the assesment options for assessment "sample Assessment3"
# Then I will open assesment details for assesment "RCCL"
 Then I will open the journey "Practice Journey2" and I will link "Practice Assessment3" assessment publish the stages

    
# Scenario: To check yaml formating

# Given I am on momentahome page
# Then I will navigate to chevron upload page and upload yaml file

# Scenario: To check the assessment is displayed is proper or not



# Scenario: To check the pages asssesment

# Given I am on momentahome page
# Then I will open "BTSMatch" assesment
# Then I will check the available pages

Scenario: To check media management 

Given I will navigate to momenta page
Then I enter "neha.seth@bts.com" in textbox having id "mat-input-0"
Then I will click on "Next" button
Then I enter "ABab12$" in textbox having id "password__field"
Then I will click on "Login" button
Then I navigate to chevron dashboard page
Then I will upload the assesment name "Assessment1" and open "Matrix" preview page



