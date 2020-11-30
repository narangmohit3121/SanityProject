Feature: Activity Page Scenario


@Sprint4
@ActivityPage0
Scenario: Verify whether user is able to Reset journey
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User searches Journey in Filter Journeys as "ParticipantUserLogin Journey"
When User clicks on Journey "ParticipantUserLogin Journey" under Journeys list
When User clicks on cohort "ParticipantLogin cohort" to Reset Journey
When User clicks on User "Mansha" to Reset Journey
When User clicks on Journeys Tab to Reset Journey
When User selects dropdown from Journey List as "ParticipantUserLogin Journey"
When User clicks on Reset Journey Data button



@Sprint4
@ParticipantActivityPage2
Scenario: Verify whether user is able to land Activity Page and verify Title of Activity Page

Given Participant should login in with "participantuserlogin@petronas.com" and "ABab12$"

When Participant landed on Module one page
Then Participant should see first activity below of module with start button
When user click start button of one activity and landed on Activity one page
Then user should see activity should be displayed below of module one

