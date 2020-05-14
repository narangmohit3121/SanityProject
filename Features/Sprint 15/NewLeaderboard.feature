Feature: New Leaderboard on Participant App

    Background:

    @Sprint15
    @NewLeaderboard2
    Scenario: Verify the list of sims, regions, Journeys displayed in the corresponding dropdowns

        Given Participant should login in with "education32@petronas.com" and "ABab12$"
        When User navigates to Home page
        Then the list of sims, regions, Journeys displayed should be correct
    #When user clicks on Filter by Season dropdown
    #Then the user should be able to select a dropdown option

    @Sprint15
    @NewLeaderboard2
    Scenario Outline: Verify that the metrics displayed for the selected filter are correct
        Given Participant should login in with "leaderboardauto1@petronas.com" and "ABab12$"
        When User navigates to Home page
        When User selects the Season as "<Season>"
        When User selects the Industry as "<Industry>"
        When User selects the region as "<Region>"
        When User clicks on Apply button
        Then the rank of the user for the sim should be "<Rank>"
        Then the score of the user for the sim should be "<Score>"
        Then the top score for the sim should be "<Top Score>"
        Then the median score for the sim should be "<Median Score>"

        Examples:
            | Season     | Industry                    | Region   | Rank          | Score | Top Score   | Median Score |
            | S1:round 2 | Qaleaderboard_two_education | All      | 2 of 5 people | 16.24 | 46.92 / 100 | 16.24        |
            | S2:round 1 | Qaleaderboard_two_education | All      | 3 of 3 people | 42.26 | 86.99 / 100 | 71.38        |
            | S1:round 2 | Qaleaderboard_two_education | americas | 0 of 2 people | 0     | 46.92 / 100 | 31.58        |
            | S1:round 3 | Qaleaderboard_two_education | asia     | 1 of 2 people | 62.5  | 62.5 / 100  | 54.42        |


    @Sprint15
    @NewLeaderboard2
    Scenario: Verify that the metrics displayed under Dive Back In section are correct
        Given Participant should login in with "leaderboardauto1@petronas.com" and "ABab12$"
        When User navigates to Home page
        Then the Current Round, Rank, User Score, Top Score, Median under the Dive Back In section should be "After Simulation Round 4", "1 of 2 people", "66.67", "66.67", "60.84"
        Then the See detailed results link should be displayed
    #When User navigates to another module

    @Sprint15
    @NewLeaderboard2
    Scenario: Verify that the metrics displayed under Dive Back In section for a different Module are correct
        Given Participant should login in with "leaderboardauto2@petronas.com" and "ABab12$"
        When User navigates to Home page
        Then the Current Round, Rank, User Score, Top Score, Median under the Dive Back In section should be "After Simulation Round 1", "1 of 2 people", "86.99", "86.99", "64.63"
#When User navigates to another module