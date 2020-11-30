@E2EAuthor_Journey
Feature: Completion Badges Progress and Scoring

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
        
        

        @CompletionBadge01
        Scenario: Verify that if user is able to see Progress and Scoring tab under journey config and enable all toggle
        When User clicks on client tab
        When User should click on Petronas folder
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User selects the Journey named "Completion Badges"
        When User click on Journey Configuration
        When User able to see progress and scoring tab and click on it
        When User able to see Toggle of Enable My Progress and click on it
        When User able to see Toggle of Completion percent meter and click on it 
        When User able to see Toggle of My points and click on it
        When User able to see Toggle of Top points and click on it
        When User able to see Toggle of Average and click on it
        When User able to see radio button of Cohort and click on it
        When User able to see Toggle of My accomplishments and click on it
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel

        @CompletionBadge02
        Scenario: Verify that if user is able to add accomlishments 
        When User clicks on client tab
        When User should click on Petronas folder
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User selects the Journey named "Completion Badges"
        When User click on Journey Configuration
        When User able to see progress and scoring tab and click on it
        When User able to see plus icon beside accomplishments and click on it 
        When User able to type accomlishments badge id as "ABID_1"
        When User able to type accomlishments title as "Completion Badge 1"
        When User able to Browse image under not awarded gold
        When User able to Browse image under awarded gold
        When User able to see Completion Trigger as Not Selected and click on it
        When User able to select completion trigger as Completion Badge Stage 1
        When User able to see Save button of accomlishments and click on it
            # Second accomplishment add
        When User able to see plus icon beside accomplishments and click on it 
        When User able to type accomlishments badge id as "ABID_2"
        When User able to type accomlishments title as "Completion Badge 2"
        When User able to Browse image under not awarded silver
        When User able to Browse image under awarded silver
        When User able to see Completion Trigger as Not Selected and click on it
        When User able to select completion trigger as Completion Badge Stage 2
        When User able to see Save button of accomlishments and click on it
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
        

        @CompletionBadge03
        Scenario: Verify if user able to update accomplishments
        When User clicks on client tab
        When User should click on Petronas folder
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User selects the Journey named "Completion Badges"
        When User click on Journey Configuration
        When User able to see progress and scoring tab and click on it
        When User able to see edit icon of Completion badge 1 and click on it
        When User able to type accomlishments title as "New"
        When User able to see Save button of accomlishments and click on it
        When User able to see edit icon of Completion badge 2 and click on it
        When User able to type accomlishments title as "New"
        When User able to see Save button of accomlishments and click on it
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel

        
        @CompletionBadge04
        Scenario: Verify that if user able to see My Progress bar under home page of userapp
        When Participant should login in with  "completion.badge@petronas.com" and "ABab12$"
        Then User should to see home page of user 
        Then User should to see My Progress
        Then User should to see Percentage of journey complete as zero
        Then User should to see My Points Top Points and  Avarage Points as zero
        Then User should to see My Accomplishment Badges as Not awarded

        @CompletionBadge05
        Scenario: Verify that is user able to see My Progress bar under home page after completed journey
        When Participant should login in with  "completion.badge@petronas.com" and "ABab12$"
        Then User should see Start button of Completion badge Activity 1 and click on it
        Then User should see continue button of Completion badge Activity 1 and click on it
        Then User should see Go to Next Module Button and click on it
        Then User should see Start button of Completion badge Activity 2 and click on it
        Then User should see continue button of Completion badge Activity 2 and click on it
        Then User should see continue button of Completion badge Activity 3 and click on it
        Then User should see Go to Next Stage Button and click on it
        Then User should see Start button of Completion badge Activity 4 and click on it
        Then User should see continue button of Completion badge Activity 4 and click on it
        Then User should see Journey completion message
        Then User should see Home page button on left panel and click on it
        Then User should to see Percentage of journey complete as hundred
        Then User should to see My Points Top Points and  Avarage Points as forty
        Then User should to see My Accomplishment Badges as awarded

        @CompletionBadge06
        Scenario: Verify that if second user able to see correct My points Top points and Average Points
        When Participant should login in with  "completion.badge1@petronas.com" and "ABab12$"
        Then User should see My points top points and average points correctly 


        @CompletionBadge07
        Scenario: Verify that if user is able to delete accomplishment and disable all toggles
        When User clicks on client tab
        When User should click on Petronas folder
        When User click on Automation Folder_DONOT DELETE folder
        When User click on AuthorApp folder in Automation Folder_DONOT DELETE folder
        When User click journey folder in AuthorApp folder
        When User selects the Journey named "Completion Badges"
        When User click on Journey Configuration
        When User able to see progress and scoring tab and click on it
        When User able to see progress and scoring tab and click on it
        When User able to see Toggle of Enable My Progress and click on it
        When User able to see Toggle of Completion percent meter and click on it 
        When User able to see Toggle of My points and click on it
        When User able to see Toggle of Top points and click on it
        When User able to see Toggle of Average and click on it
        When User able to see Toggle of My accomplishments and click on it
        When User able to see delete icon of Completion badge 1 and click on it
        When User able to see Delete confirmation alert popup and click delete button
        When User able to see delete icon of Completion badge 2 and click on it
        When User able to see Delete confirmation alert popup and click delete button
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
