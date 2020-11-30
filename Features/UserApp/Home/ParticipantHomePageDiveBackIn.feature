Feature: Home Page Dive Back In

Background: 

Given Participant should login in with "tomharris@petronas.com" and "ABab20$"

@ParticipantHomePageDiveBackIn1
Scenario: Verify if the registration flow is complete, user will land on the 1st activity and then using menu user can navigate to Home page

#When user selects the the industry as "Qa Test1"
When User select an industry as "Qa Test1"
#When User selects gender as "Male"
#When user selects the region as "ASIA"
When user select the region as "Asia"
When user selects "Yes" for manage accounts
#When User enters the age as "25"
#When Participant should be landed on My Journey Page

When Participant clicks on Hamberg menu
When Participant clicks on Home menu
Then Participant should be able to see Dive Back In
When Participant verifies Stage Title in Home Page Dive Back In
When Participant verifies Module Title in Home Page Dive Back In

#@ParticipantHomePageDiveBackIn2
#Scenario: Verify if Proper Module name and its description is displayed under Dive Back In along with number of activities

#When Participant verifies Stage Title in Home Page Dive Back In
#When Participant verifies Module Title in Home Page Dive Back In