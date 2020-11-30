@E2ETest_CMS
Feature: Scoring And Duration Feature

  Background:
    Given User Logs in as admin user
    When User should click on Client Tab
    When User should click on Petronas folder
    When User click on Automation do not Delete folder
    When User click on Sprint 18 folder
    When User click 1957 Scoring And Duration content

  #When User click on Automation Journey Pop Up folder

  @ScoringAndDuration1
  Scenario: Verify Scoring And Duration functionality

    Then User should be able to change the state of Number of Points and Expected Duration toggles
    # When User click on Number of Points and Expected Duration toggles button
    Then User turns on Number of Points and Expected Duration toggle buttons
    When User click 5 times on pluse icon to increase the points and Duration
    Then User should see 5 number in point and duration textfield
    When User Saves Draft and Publishes the Content and then clicks on Exit Editor
    # When Participant user land on petronas test valid url
    # When Participant user enters valid Email Id as "AutoTestUser3@petronas.com" for petronas
    # When Participant user enters valid Password as "ABab12$" for petronas
    # When Participant user clicks on Login Button to see journey
    Given Participant should login in with "AutoTestUser3@petronas.com" and "ABab23$"
    When User select an industry as " Automation Journey - Mansha" from industry vertical dropdown
    #When User select Financial Services vertical and click continue
    When user navigates to the My Journey page
    When User navigates to the "content1 module 1" module and "1957 Scoring and Duration Activity" activity
    #When User click on start button to launch scoring and duration journey
    Then User should see points set by admin for this activity