Feature: Single Select Input block Scenario

Background: 

Given Participant should login in with "single_n_multiselect@petronas.com" and "ABab12$"

@Sprint4
@SingalSelect1
Scenario: Verify if the selected option is highlighted under Single Select component

When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
Then The selected option should be highlighted of single select activity
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
Then User should see all single select long option
Then The selected option should be highlighted of long option single select activity
 