@E2EAuthor_Journey
Feature: Journey Script

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User click on Automation do not Delete folder
When User click on Sprint 16 folder
When User click on Journey Script folder

@journeyScript1
Scenario: Verify if Stage Module and Activity gets hidden when User update the Script

#Journey One

When User click on Journey Script One
When User click on three dots of Stage One of Journey One
When User click on Edit button of Stage One of Journey One
When User enter Script to hide under Edit Stage of Stage One of Journey One as "if (user.selectedJourney.completed == true) { return 'hide' }"
Then User click on Done Journey Script

When User click on three dots of Stage Two Module Two of Journey One
When User click on Edit button of Stage Two Module Two of Journey One
When User enter Script to hide under Edit Module of Stage Two Module Two of Journey One as "if (user.selectedJourney.completed == true) { return 'hide' }"
Then User click on Done Journey Script

When User click on three dots of Stage Two Module Three of Journey One
When User click on Edit button of Stage Two Module Three of Journey One
When User enter Script to revisit under Edit Module of Stage Two Module Three of Journey One as "if (user.selectedJourney.completed == true) { return 'revisit' }"
Then User click on Done Journey Script

When User click on three dots of Stage Three Activity Four of Journey One
When User click on Edit button of Stage Three Activity Four of Journey One
When User enter Script to hide under Edit Activity of Stage Three Activity Four of Journey One as "if (user.selectedJourney.completed == true) { return 'hide' }"
Then User click on Done Journey Script

When User click on three dots of Stage Three Activity Five of Journey One
When User click on Edit button of Stage Three Activity Five of Journey One
When User enter Script to revisit under Edit Activity of Stage Three Activity Five of Journey One as "if (user.selectedJourney.completed == true) { return 'revisit' }"
Then User click on Done Journey Script

#Journey Two

When User click on Journey Script Two
When User click on three dots of Stage One of Journey Two
When User click on Edit button of Stage One of Journey Two
When User enter Script to hide under Edit Stage of Stage One of Journey Two as "if (user.selectedJourney.completed == true) { return 'hide' }"
Then User click on Done Journey Script

When User click on three dots of Stage Two Module Two of Journey Two
When User click on Edit button of Stage Two Module Two of Journey Two
When User enter Script to hide under Edit Module of Stage Two Module Two of Journey Two as "if (user.selectedJourney.completed == true) { return 'hide' }"
Then User click on Done Journey Script

When User click on three dots of Stage Two Module Three of Journey Two
When User click on Edit button of Stage Two Module Three of Journey Two
When User enter Script to revisit under Edit Module of Stage Two Module Three of Journey Two as "if (user.selectedJourney.completed == true) { return 'revisit' }"
Then User click on Done Journey Script

When User click on three dots of Stage Three Activity Four of Journey Two
When User click on Edit button of Stage Three Activity Four of Journey Two
When User enter Script to hide under Edit Activity of Stage Three Activity Four of Journey Two as "if (user.selectedJourney.completed == true) { return 'hide' }"
Then User click on Done Journey Script

When User click on three dots of Stage Three Activity Five of Journey Two
When User click on Edit button of Stage Three Activity Five of Journey Two
When User enter Script to revisit under Edit Activity of Stage Three Activity Five of Journey Two as "if (user.selectedJourney.completed == true) { return 'revisit' }"
Then User click on Done Journey Script


#Participants side

When Participant should login in with "AutoTestUser2@petronas.com" and "ABab12$"
When User select an industry as "Journey Script 1-Qa"

When Participant validates Module title and clicks on Start button of first Journey first Activity
When Participant completes first Activity
When Participant clicks on Continue button
When Participant clicks on Continue button

When Participant clicks on Hamberg menu
When Participant clicks on Home menu
Then Participant should be able to see Dive Back In

