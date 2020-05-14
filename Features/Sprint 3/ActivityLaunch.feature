Feature: Activity Launch

    Background:
    Given User should login in with "neha.seth@bts.com" and "ABab12$"
    

    @Sprint3
    @ActivityLaunch1
    Scenario: Verify whether Activity Title is displayed or not

        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Plus Button to copy journey
        When User searches for the journey from master collection
        When User selects any Journey to preview under Copy Journey popup to launch Activity
        When user click on View button of module
        When user is able to see activity in module launch page
        When user click start button of any activity under Module launch page

        Then Activity should get started and activity page should get displayed with activity title and content in it

    @Sprint3
    @ActivityLaunch2
    Scenario: Verify whether Activity page display activity content and whether user is able to go back on Module launch page after clicking on back arrow

        When user go through the content
        Then Activity content should get displayed
        When user click on Back arrow button
        Then user should be able to go back on Module launch page

# @Sprint3
# @ActivityLaunch3
# Scenario: Verify whether Activity page display continue arrow next to Continue button to proceed to complete activity

# When user click on Back arrow button

# Then user should be able to go back on Module launch page