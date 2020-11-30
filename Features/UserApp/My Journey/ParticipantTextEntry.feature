Feature: Text Entry Block

Background:
Given Participant user should be on valid url to login

@Sprint1
@Login1
Scenario: Verify valid participant login functionality
 When Participant user enters valid Email Id as "mansha@petronas.com"
 When Participant user enters valid Password as "ABab12$"
 When Participant user clicks on Login Button
 When Navigate to Create a reframe module in my journey page and click Revisit Button
 When Navigate to Create a reframe module in module page and click revisit button
 When user enter input for exhibit this behavior with your team as "I exhibit this behavior with my team on large scale."
 When user enter input for impact as "It have high level impact on each scenario."
 When user enter input for option choose as "I would choose three option for my journey those are Stage,Module and Activity."
 When user click on continue button
 When user click on back arrow on module completion page
 When Navigate to Create a reframe module in module page and click revisit button
 When user navigate Activities after click back arrow
 Then user should see existing all input which user provided before click back arrow
 


