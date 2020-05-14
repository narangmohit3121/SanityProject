Feature: Copy Journey Scenario

   Background:
      Given User should login in with "neha.seth@bts.com" and "ABab12$"

   @Sprint2
   @CopyJourney1
   Scenario: Verify if plus icon is present besides Journeys for Client Landing Page

      When User should click on Client Tab
      When User should click on Petronas folder
      Then User should check if plus icon is present besides Journeys and click on it

   # @Sprint2
   # @CopyJourney2
   # Scenario: Verify if User can view the list of Journeys under Copy Journey Modal for Client Landing Page

   # When User should click on Client Tab
   # When User should click on Petronas folder
   # Then User should check if plus icon is present besides Journeys and click on it
   # Then User should view the list of Journeys under Copy Journey

   @Sprint2
   @CopyJourney3
   Scenario: Verify if User is able to copy journey under Client Landing Page

      When User should click on Client Tab
      When User should click on Petronas folder
      Then User should check if plus icon is present besides Journeys and click on it
      Then User should click on Copy button under Copy Journey dialog box
      Then User should give Journey Title as "Journey Name" and Journey Description as "Journey Description"
      Then User should click on Save button of Journey Configuration

#@Sprint2
# @CopyJourney4
# Scenario: Verify if User is able to Copy Journey with blank Journey Title and Journey Description

# When User should click on Client Tab
# When User should click on Petronas folder
# Then User should check if plus icon is present besides Journeys and click on it
# Then User should click on Copy button under Copy Journey dialog box
# Then User should give Journey Title as "" and Journey Description as ""
# Then User should click on Save button of Journey Configuration




