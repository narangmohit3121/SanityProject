Feature: Participant Module Completion Page Scenario

# @Sprint4
# @ActivityPage0
# Scenario: Verify whether user is able to Reset journey
# Given User should login in with "qa_momenta@bts.com" and "ABab12$"
# When User should click on Client Tab
# When User should click on Petronas folder
# When User clicks on Users Tab
# When User searches Journey in Filter Journeys as "ParticipantUserLogin Journey"
# When User clicks on Journey "ParticipantUserLogin Journey" under Journeys list
# When User clicks on cohort " ParticipantLogin cohort" to Reset Journey
# When User clicks on User "Mansha" to Reset Journey
# When User clicks on Journeys Tab to Reset Journey
# When User selects dropdown from Journey List as "ParticipantUserLogin Journey"
# When User clicks on Reset Journey Data button


 
 @Sprint4
 Scenario: Verify whether user is able to see Module completion Page with completed status and circle icon checked

Given Participant should login in with "participantuserlogin@petronas.com" and "ABab12$"
When Participant clicks on start button of module one to complete all activiites
When Participant user complete all activiites of module one
#Then Participant should be able to see Module completion Page with completed status and circle icon checked
Then Participant should see the module completion page along with check icon and completed status

