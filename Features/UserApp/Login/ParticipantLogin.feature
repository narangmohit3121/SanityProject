Feature: ParticipantLogin Scenario

Background:
Given Participant user should be on valid url to login



@Sprint1
@Login3
Scenario Outline: Verify if Participant is able to login with blank credentials

When Participant user enter invalid Email Id as "<User Email>"
When Participant user enters invalid Password as "<Password>"
When Participant user click on Login Button
Then Customer branding page should not be displayed with Assigned Journey


Examples:
| User Email | Password |
| \n\n\n\n | \n\n\n\n |




@Sprint1
@Login2
Scenario Outline: Verify  invalid participant login functionality
When Participant user enter invalid Email Id as "<User Email>"
When Participant user enters invalid Password as "<Password>"
When Participant user click on Login Button
Then Customer branding page should not be displayed with Assigned Journey

Examples:
| User Email | Password |
| INVALID@microsoft.com | INVALIDABab12 |



@Sprint1
@Login1
Scenario Outline: Verify valid participant login functionality
When Participant user enter valid Email Id as "<User Email>"
When Participant user enters valid Password as "<Password>"
When Participant user click on Login Button
Then Customer branding page should be displayed with Assigned Journey

Examples:
| User Email | Password |
| participantuserlogin@petronas.com | ABab12$ |



