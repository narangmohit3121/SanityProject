Feature: Module Page Scenario

Background: 

Given Participant should login in with "abhijeet@microsoft.com" and "ABab12$"

@Sprint4
Scenario: Verify whether user is able to view Module Page

When Participant should be landed on My Journey Page
When Participant clicks on any Module
Then Participant should be landed to Module Page
#Then Participant should compare count of activities in header with activities in Module Page

@Sprint4
Scenario: Verify whether header part contains Stage title,Module title, Module description,Points, Activity count,Time and SVG Icon in Module Page

When Participant should be landed on My Journey Page
When Participant clicks on any Module
#Then Participant should be landed to Module Page
Then Participant should verify Stage Title, Module Title, Module Description, Points, Activity count, Time and SVG icon

@Sprint4A
Scenario: Verify whether all activities are automatically counted in header part from contained activities in Module Page

When Participant should be landed on My Journey Page
When Participant clicks on any Module
Then Participant should be landed to Module Page
Then Participant should compare count of activities in header with activities in Module Page

@Sprint4
Scenario: Verify completed activities show with check icon

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant clicks on any Activity of Module
When Participant clicks on Continue button
When Participant clicks on Continue button
When Participant clicks on Back Top Arrow
Then Participant should see the completed activities with check icon

@Sprint4
Scenario: Verify whether user is able to see module completion page along with check icon and completed staus after completing all activities of module

When Participant should be landed on My Journey Page
When Participant clicks on any Module
When Participant clicks on any Activity of Module
When Participant clicks on Continue button
When Participant clicks on Continue button
Then Participant should see the module completion page along with check icon and completed status
