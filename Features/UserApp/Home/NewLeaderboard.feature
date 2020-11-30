Feature: New Leaderboard on Participant App

    Background:

    @Sprint15
    @NewLeaderboard2
    Scenario: Verify the list of sims, regions, Journeys displayed in the corresponding dropdowns

        Given Participant should login in with "leaderboardauto1@petronas.com" and "ABab13$"
        When User navigates to Home page
        Then the list of sims, regions, Journeys displayed should be correct
    #When user clicks on Filter by Season dropdown
    #Then the user should be able to select a dropdown option

    @Sprint15
    @NewLeaderboard2
    Scenario Outline: Verify that the metrics displayed for the selected filter are correct
        Given Participant should login in with "<Username>" and "<Password>"
        When User navigates to Home page
        When User selects the Season as "<Season>"
        When User selects the Industry as "<Industry>"        
        When User selects the region as "<Region>"
        When User selects the Vertical as "<Vertical>"
        When User clicks on Apply button
        Then the rank of the user for the sim should be "<Rank>"
        Then the score of the user for the sim should be "<Score>"
        Then the top score for the sim should be "<Top Score>"
        Then the median score for the sim should be "<Median Score>"

        Examples:
            | Username                      | Password | Season      | Industry                    | Region   | Vertical                     | Rank          | Score | Top Score   | Median Score |
            | leaderboardauto1@petronas.com | ABab13$  | S1: round 2 | Qaleaderboard_two_education | All      | Qaleaderboard Two Education  | 1 of 5 people | 46.92 | 46.92 / 100 | 5.13         |
            | leaderboardauto1@petronas.com | ABab13$  | S2: round 1 | Qaleaderboard_two_education | All      | Qaleaderboard Two Education  | 2 of 3 people | 56.5  | 60.96 / 100 | 56.5         |
            | leaderboardauto1@petronas.com | ABab13$  | S1: round 2 | Qaleaderboard_two_education | americas | Qaleaderboard Two Education  | 0 of 2 people | 0     | 22.91 / 100 | 11.46        |
            | leaderboardauto1@petronas.com | ABab13$  | S1: round 3 | Qaleaderboard_two_education | asia     | Qaleaderboard Two Education  | 3 of 3 people | 26.01 | 44.32 / 100 | 42.93        |
            | LBsubVertical2@petronas.com   | ABab12$  | S1: round 3 | Leaderboard Sub-vertical    | asia     | Leaderboard Three Automotive | 1 of 2 people | 37.5  | 37.50 / 100 | 34.16        |
            | LBsubVertical2@petronas.com   | ABab12$  | S2: round 1 | Leaderboard Sub-vertical    | All      | Leaderboard Three Automotive | 2 of 2 people | 29.49 | 35.38 / 100 | 32.44        |
            | LBsubVertical2@petronas.com   | ABab12$  | S1: round 1 | Leaderboard Sub-vertical    | All      | Leaderboard One Healthcare   | 0 of 3 people | 0     | 47.73 / 100 | 45.27        |

#Following scenarios are for Dive Back in, which has been removed as of now
#     @Sprint15
#     @NewLeaderboard2
#     Scenario: Verify that the metrics displayed under Dive Back In section are correct
#         Given Participant should login in with "leaderboardauto1@petronas.com" and "ABab12$"
#         When User navigates to Home page
#         Then the Current Round, Rank, User Score, Top Score, Median under the Dive Back In section should be "After Simulation Round 4", "1 of 2 people", "66.67", "66.67", "60.84"
#         Then the See detailed results link should be displayed
#     #When User navigates to another module

#     @Sprint15
#     @NewLeaderboard2
#     Scenario: Verify that the metrics displayed under Dive Back In section for a different Module are correct
#         Given Participant should login in with "leaderboardauto2@petronas.com" and "ABab12$"
#         When User navigates to Home page
#         Then the Current Round, Rank, User Score, Top Score, Median under the Dive Back In section should be "After Simulation Round 1", "1 of 2 people", "86.99", "86.99", "64.63"
# #When User navigates to another module