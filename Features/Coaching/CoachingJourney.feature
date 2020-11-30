Feature: Coaching Journey

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
#When User should click on Petronas folder
When User should click on Chevron folder

Scenario: Verify if user is able to link Coaching activities

When User navigates to "Karthik Test Folder" folder in "Chevron Corporation" Client
#When User navigates to "Karthik Test Folder/Coaching Test-Sample Journey" folder in petronas
When User clicks on folder "Coaching Automation Test Journey"
When User links "Mbir" activity to Module
When User links "Card Sort" activity to Module
When User links "Session Booking" activity to Module
Then User Saves and Publish

Scenario: Verify Enabling / Disabling My Coaching Toggle

When User navigates to "Karthik Test Folder/Coaching Test-Sample Journey" folder in petronas
When User toggles on My Coaching under Naviagation Tab
Then User Saves and Publish

# Scenario: Verify if user is able to enable Data Privacy Toggle

# When User navigates to "Karthik Test Folder/Coaching Test-Sample Journey" folder in petronas
# When User clicks on Data Privacy Agreement
# When User enables Toggle On
# Then User Saves and Publish

Scenario: Verify at Participant side if User is able to view Coaching Agreement

Given Participant should login in with "momentatest1@chevron.com" and "ABab13$"
When Participant accepts Privacy Policy
When Participant starts first Activity as "MBIR - Coaching Activity"
When Participant completes first Activity

When Participant starts second Activity as "Card Sort - Coaching Activity"
When Participant completes second Activity

When Participant starts third Activity as "Session Booking 1 - Coaching Activity"
When Participant completes third Activity

Scenario: Verify at Participant side if User is able to Data Privacy Agreement