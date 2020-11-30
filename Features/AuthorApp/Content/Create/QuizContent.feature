@E2EQuizTest
Feature: Quiz Functionality - Author and Participant

    @QuizContent1
    Scenario: Verify that user is able to create quiz question of the type Single Select

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp" folder in petronas
        # When User navigates to "MOHITN_SSO_DONOT TOUCH/Quiz Testing" folder in petronas
        When user creates a new Quiz Content and navigates into the same
        When user creates a question of the type Single Select
        When User saves the changes made to the content
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        Then quiz question of the type Single Select should get created successfully

    @QuizContent2
    Scenario: Verify that user is able to create quiz question of the type Multi Select

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp" folder in petronas
        When user creates a new Quiz Content and navigates into the same
        When user creates a question of the type Multi Select
        When User saves the changes made to the content
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        Then quiz question of the type Multi Select should get created successfully


    @QuizContent3
    Scenario: Verify that user is able to create quiz question of the type Ranking

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp" folder in petronas
        When user creates a new Quiz Content and navigates into the same
        When user creates a question of the type Ranking
        When User saves the changes made to the content
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        Then quiz question of the type Ranking should get created successfully

    @QuizContent4
    Scenario: Verify that the Quiz condition tab of quiz activity is functioning properly

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Automation Journey Mohit" folder in petronas
        When user creates a new Quiz activity under "Mod 1" module of the Journey
        When user links quiz content to the quiz activity
        #Then quiz activity should get created under the Journey
        When user tries to edit the quiz activity
        Then the Quiz Condition tab should be functioning properly

    @QuizContent5
    Scenario: Verify that the Quiz Scoring tab of quiz activity is functioning properly

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Automation Journey Mohit" folder in petronas
        When user creates a new Quiz activity under "Mod 1" module of the Journey
        When user links quiz content to the quiz activity
        #Then quiz activity should get created under the Journey
        When user tries to edit the quiz activity
        Then the Quiz Scoring tab should be functioning properly

    @QuizContent6
    Scenario: Verify that the Quiz Summary tab of quiz activity is functioning properly

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Automation Journey Mohit" folder in petronas
        When user creates a new Quiz activity under "Mod 1" module of the Journey
        When user links quiz content to the quiz activity
        #Then quiz activity should get created under the Journey
        When user tries to edit the quiz activity
        Then the Quiz Summary tab should be functioning properly

    @QuizContent7
    Scenario: Attempt the quiz as Participant
        Given Participant should login in with "QuizAutomation1@petronas.com" and "ABab12$"
        When user selects the region as "Asia"
        When User selects gender as "Male"
        When user navigates to the My Journey page
        When User navigates to the "Quiz Mod 1" module and "QuizAutomation" activity
        Then the quiz intro page should be displayed to the Participant
        Then the user should be able to able to attempt quiz question
        Then the user should be able to able to attempt quiz question
        Then the user should be able to able to attempt quiz question
        When user navigates to the quiz summary page
        Then the quiz question summary details and question points should be correct
        Then the quiz evaluation should be correct
        Then participant user should be able to click on continue button
    #Then the quiz evaluation should be correct

    @QuizContent8
    Scenario: Clean Up for Quiz

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp" folder in petronas
        # When User navigates to "MOHITN_SSO_DONOT TOUCH/Quiz Testing" folder in petronas
        Then user should be able to delete the quiz content created




