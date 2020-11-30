@E2EAuthor_Journey
Feature: Master Copy Journey

Background:
Given User should login in with "qa_momenta@bts.com" and "ABab12$"


@Sprint15
 @MasterCopyJourney1
 Scenario: Verify Master to client Copy journey 
 When User click on master tab to select master collection
 When User click QA Collection
 When User click 3 dots of QA Master Journey Automation
 When User click on Copy option
 When User click copy button with Automation do not delete journey as Automation Folder_DONOT DELETE
 When User enter name for copy journey as "QA Master Copy Journey Automation updated1" in Journey title text field
 When User click on Save button after given journey title
 When User click on momenta title on top left corner of page 
 When User click on client tab to search petronas client
 When User should click on Petronas folder
 When User click on Automation do not Delete folder
 
 Then Copied journey should be displayed under journey folder
 Then Copied journey should be deleted

@MasterCopyJourney2
Scenario: Verify Master to Master Copy journey
 When User click on master tab to select master collection
 When User click QA Collection
 When User click 3 dots of QA Master Journey Automation
 When User click on Copy option
 When User should click on Master collection and select automation folder_donot delete under QA collection and click on Copy Here button
 When User enter title as "QA Master Copy Journey Automation to Master" and Save
 Then User Should see QA Master Copy Journey Automation to Master under automation folder_donot delete folder
 Then Copied Journey should be deleted
