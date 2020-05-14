Feature: Master Copy Journey

Background:
Given User should login in with "neha.seth@bts.com" and "ABab12$"


@Sprint15
 #@MasterCopyJourney1
 Scenario: Verify Master Copy journey
 When User click on master tab to select master collection
 When User click QA Collection
 When User click 3 dots of QA Master Journey Automation
 When User click on Copy option
 When User click copy button with Automation do not delete journey as "automation folder_donot delete"
 When User enter name for copy journey as "QA Master Copy Journey Automation" in Journey title text field
 When User click on Save button after given journey title
 When User click on momenta title on top left corner of page 
 When User click on client tab to search chevron client
 When User should click on Petronas folder
 When User click on Automation do not Delete folder
 
 #When User click on Chevron Corporation to check copy journey 
 Then Copied journey should be displayed under journey folder
 Then Copied journey should be deleted


#  @MasterCopyJourney2
#  Scenario: Verify Master Copy journey 2
#  When User clicks on Petronas and creates a New folder "Petronas automation folder 1"
#  When User click on master tab to select master collection
#  When User click QA Collection
#  When User click 3 dots of QA Master Journey Automation
#  When User click on Copy option
#  When User searches for Petronas New Folder "Petronas automation folder 1" and click on Copy button
#  
#  When User enter name for copy journey as "Automation Copied Journey" in Journey title text field
#  When User click on Save button after given journey title
#  When User click on momenta title on top left corner of page 
#  When User click on client tab to search Petronas client
#  When User click on new folder created under petronas to check if journey got copied successfully or not 
#  Then Copied journey should be displayed under journey folder



# @MasterCopyJourney3
# Scenario: Verify Master Copy journey 3
#  When User clicks on Petronas and creates a New folder ""
#  When User click on master tab to select master collection
#  When User click QA Collection
#  When User click 3 dots of QA Master Journey Automation
#  When User click on Copy option
#  When User searches for Petronas New Folder "" and click on Copy button
#  #When User click copy button with Chevron Corporation journey
#  When User enter name for copy journey as "Automation Copied Journey" in Journey title text field
#  When User click on Save button after given journey title
#  When User click on momenta title on top left corner of page 
#  When User click on client tab to search Petronas client
#  When User click on new folder created under petronas to check if journey got copied successfully or not 
#  Then Copied journey should be displayed under journey folder
#  When User clicks on Petronas and creates a New folder with different name ""
#  When User click on master tab to select master collection
#  When User click QA Collection
#  When User click 3 dots of QA Master Journey Automation
#  When User click on Copy option
#  When User searches for Petronas New Folder with different name "" and click on Copy button
#  #When User click copy button with Chevron Corporation journey
#  When User enter name for copy journey as "Automation Copied Journey" in Journey title text field
#  When User click on Save button after given journey title
#  When User click on momenta title on top left corner of page 
#  When User click on client tab to search Petronas client
#  When User click on new different folder created under petronas to check if journey got copied successfully or not 
#  Then Copied journey should be displayed under journey folder