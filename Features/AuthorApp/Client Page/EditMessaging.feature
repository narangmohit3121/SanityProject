@E2ETest_ClientPage
Feature: Edit Messaging

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        When User should click on Client Tab
        When User should click on Petronas folder
        When User clicks on Client Config button of Petronas Client
        When User clicks on Edit Messaging Tab of Petronas Client

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint16
    @EditMessaging
    Scenario Outline: Verify Edit Messaging with various set of data

        When User enters Cancel button as "<Cancel>"
        When User enters Continue button as "<Continue>"
        When User enters Create New Password button as "<Create New Password>"
        When User enters Email Recovery Link as "<Email Recovery Link>"
        When User enters Login as "<Login>"
        When User enters Submit as "<Submit>"
        When User enters Submit button to update user password as "<Submit button to update user password>"
        # When User enters Email Recovery Link Failure as "<Email Recovery Link Failure>"
        # When User enters Email Recovery link success as "<Email Recovery link success>"
        
        When Participant should login in with "<Email>" and "<Password>"
        Then User should display entry page


        Examples:
            | Cancel | Continue | Create New Password | Email Recovery Link | Login | Submit | Submit button to update user password | Email Recovery Link Failure  | Email Recovery link success |  Email                | Password     |
            | Cancel | Continue | Create New Password | Email Recovery Link | Login | Submit | Update User Password                  | Email                        | #*                          |  wmone@petronas.com | ABCabcd123#* |
            | cancel | continue | create New Password | Email Recovery Link | Login | Submit | Update User Password                  | Email Recovery Link Failure  | Email Recovery link success |  wmtwo@petronas.com  | ABab12$      |

