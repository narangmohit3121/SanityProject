Feature: Discussion Thread Block

Background: 

Given Participant should login in with "abhijeet@petronas.com" and "ABab12$"

@Sprint6
Scenario: Verify if 'View another response' tab is visible and functional

When Participant should be landed on My Journey Page
When Participant clicks on any Module having Discussion Thread Block
When Participant clicks on any Activity of Module having Discussion Thread Block
Then Participant should be able to view View another response tab

@Sprint6
Scenario: Verify if 'COMMENT' button is disabled till no single text is entered in comment text box

When Participant should be landed on My Journey Page
When Participant clicks on any Module having Discussion Thread Block
When Participant clicks on any Activity of Module having Discussion Thread Block
Then COMMENT button should be disabled

Scenario: Verify if 'Write a comment' text box is accepting text input

When Participant should be landed on My Journey Page
When Participant clicks on any Module having Discussion Thread Block
When Participant should enter text in the Write a comment text box
Then Write a comment text box should accept text input

@Sprint6
Scenario: Verify if full Name(first name and last name both) of Participant user and abbreviated form of full name is visible for all conversation

When Participant should be landed on My Journey Page
When Participant clicks on any Module having Discussion Thread Block
When Participant clicks on any Activity of Module having Discussion Thread Block
When Participant scrolls down
Then Participant full name should be displayed and abbreviated form of full name should be visible

@Sprint6
Scenario: Verify if clicking on 'Reply' is opening comment text box with 'comment' button disable

When Participant should be landed on My Journey Page
When Participant clicks on any Module having Discussion Thread Block
When Participant clicks on any Activity of Module having Discussion Thread Block
When Participant scrolls down
When Participant clicks on Reply button
Then Comment text box should open with comment button disabled

@Sprint6
Scenario: Verify if 'Continue' button is present and clickable
When Participant should be landed on My Journey Page
When Participant clicks on any Module having Discussion Thread Block
When Participant clicks on any Activity of Module having Discussion Thread Block
When Participant scrolls down
Then Participant should be able to view Continue button

@Sprint6
Scenario: Verify if Load More Comments button is present and functional if there are more than two conversations
When Participant should be landed on My Journey Page
When Participant clicks on any Module having Discussion Thread Block
When Participant clicks on any Activity of Module having Discussion Thread Block
When Participant scrolls down
Then Participant should be able to view Load More Comments tab