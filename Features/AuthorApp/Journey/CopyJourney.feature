@E2EAuthor_Journey
Feature: Copy Journey Scenario

   Background:
      Given User should login in with "qa_momenta@bts.com" and "ABab12$"



           

 @Sprint3
 @CopyJourney0
   Scenario: Verify if plus icon is present besides Journeys for Client Landing Page

   When User should click on Client Tab
   When User should click on Petronas folder
   Then User should check if plus icon is present besides Journeys and click on it


   @Sprint3
   @CopyJourney00
   Scenario: Verify if User can view the list of Journeys under Copy Journey Modal for Client Landing Page

   When User should click on Client Tab
   When User should click on Petronas folder
   Then User should check if plus icon is present besides Journeys and click on it
   Then User should view the list of Journeys under Copy Journey








   @Sprint3
   @CopyJourney1
   Scenario: Verify if plus icon is present besides Journeys for Client Landing Page

      When User should click on Client Tab
      When User should click on Petronas folder
      Then User should check if plus icon is present besides Journeys and click on it



   @Sprint3
   @CopyJourney2
   Scenario: Verify if User can view the list of Journeys under Copy Journey Modal for Client Landing Page

   When User should click on Client Tab
   When User should click on Petronas folder
   Then User should check if plus icon is present besides Journeys and click on it
   Then User should view the list of Journeys under Copy Journey



@Sprint3
@CopyJourney3
Scenario: Verify if User is able to Copy Journey with blank Journey Title and Journey Description

When User should click on Client Tab
When User should click on Petronas folder
Then User should check if plus icon is present besides Journeys and click on it
When User should give Journey Title as "AutomationCopyJourney" to copy from master
When User click on select button of AutomationCopyJourney journey to copy from master
When User provide Journey Title as " "
# Then User should see validation message as Title is mandatory


   @Sprint3
   @CopyJourney4
   Scenario: Verify if User is able to copy journey under Client Landing Page

      When User should click on Client Tab
      When User should click on Petronas folder
      Then User should check if plus icon is present besides Journeys and click on it
      When User should give Journey Title as "AutomationCopyJourney" to copy from master
      When User click on select button of AutomationCopyJourney journey to copy from master
      When User provide Journey Title as "AutomationCopyJourneyTest"
      Then User should see AutomationCopyJourneyTest is copied with tag of copied from master
  


  
#  @Sprint3
# @CopyJourney3
# Scenario: Verify if User is able to delete Journey 



