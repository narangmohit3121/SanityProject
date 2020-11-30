Feature: Module Page Scenario

Background: 

Given Participant should login in with "participantuserlogin@petronas.com" and "ABab12$"

@Sprint4
@ParticipantModulePage1
Scenario: Verify whether user is able to view Module Page

When Participant user click on my journey option from left panel
Then Participant should all modules displayed on my journey Page


@Sprint4
@ParticipantModulePage2
Scenario: Verify whether header part contains Stage title,Module title, Module description,Points, Activity count,Time and SVG Icon in Module Page

When Participant user click on my journey option from left panel
Then Participant should verify Journey Title, Stage Title, Module Title, Module Description, Points, Activity count, Time and SVG icon

@Sprint4
@ParticipantModulePage3
Scenario: Verify whether all activities are automatically counted in header part from contained activities in Module Page

When Participant user click on my journey option from left panel
Then Participant should compare count of activities in header with activities in Module Page

@Sprint4
@ParticipantModulePage4
Scenario: Verify completed activities show with check icon

When Participant user complete first activity of first module
When Participant user click on my journey option from left panel
When Participant clicks on resume button of module one
Then Participant should see the completed activities converted as Revisit


@Sprint4
@ParticipantModulePage5
Scenario: Verify whether user is able to see module completion page along with check icon and completed staus after completing all activities of module

# When Participant user click on my journey option from left panel
When Participant clicks on resume button of module one to complete all activiites
When Participant user complete all activiites in module one
Then Participant should see the module completion page along with check icon and completed status
