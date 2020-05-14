Feature: ParticipantLogin Scenario

Background:
Given Participant user should be on valid url to login


@Sprint1
@Login1
Scenario Outline: Verify valid participant login functionality
When Participant user enters valid Email Id as "<User Email>"
When Participant user enters valid Password as "<Password>"
When Participant user clicks on Login Button
Then Customer branding page should be displayed with Assigned Journey

Examples:
| User Email | Password |
| mansha@microsoft.com | ABab12$ |



@Sprint1
@Login2
Scenario Outline: Verify  invalid participant login functionality
When Participant user enters valid Email Id as "<User Email>"
When Participant user enters valid Password as "<Password>"
When Participant user clicks on Login Button
Then Customer branding page should not be displayed with Assigned Journey

Examples:
| User Email | Password |
| INVALID@microsoft.com | INVALIDABab12 |
|  |  |



# @Sprint1
# @Login1
# Scenario: Verify if Participant is able to login with valid credentials

# When Participant user enters valid Email Id as "mansha@microsoft.com"
# When Participant user enters valid Password as "ABab12$"
# When Participant user clicks on Login Button
# Then Customer branding page should be displayed with Assigned Journey


# @Sprint1
# @Login2
# Scenario: Verify if Participant is able to login with invalid credentials

# When Participant user enters invalid Email Id as "INVALID_TEST@microsoft.com"
# When Participant user enters invalid Password as "INVALID TEST"
# When Participant user clicks on Login Button
# Then Customer branding page should not be displayed with Assigned Journey


# @Sprint1
# @Login3
# Scenario: Verify if Participant is able to login with blank credentials

# When Participant user enters blank Email Id as ""
# When Participant user enters blank Password as ""
# When Participant user clicks on Login Button
# Then Customer branding page should not be displayed with Assigned Journey

