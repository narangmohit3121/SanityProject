Feature: My Insights Scenario

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
    

@Sprint24
@MyInsight1
    Scenario: Verify if admin user is able to see My Insights configure window 
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on configure client button
        When User click on top right corner arrow to navigate My Insights option
        When User click My Insights option
        Then User should be able to see My Insights configuration window


     @Sprint24
     @MyInsight2
    Scenario: Verify if admin user is able to cancel My Insights configuration
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on configure client button
        When User click on top right corner arrow to navigate My Insights option
        When User click My Insights option
        When User click on Cancel button after landed My Insights
        Then User should see insight window close and user landed on client landing page



        @Sprint24
        @MyInsight3
    Scenario: Verify if participant user is able to see insight if toggle of My Insights is set as No from admin side
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on configure client button
        When User click on top right corner arrow to navigate My Insights option
        When User click My Insights option
        When User click on Enable My Insights toggle to set as No
        When User click Save button after BTSInsightsTemplate uploaded
        Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        Then User should not see My Insights option with eye icon

        @Sprint24
        @MyInsight4
    Scenario: Verify if participant user is able to see insight if toggle of My Insights is set as yes from admin side
        When User should click on Client Tab
        When User should click on Petronas folder
        When User click on configure client button
        When User click on top right corner arrow to navigate My Insights option
        When User click My Insights option
        When User click on Enable My Insights toggle to set as Yes
        When User upload BTSInsightsTemplate docx file
        When User click Save button after BTSInsightsTemplate uploaded
        Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        Then User should see My Insights option with eye icon


        @Sprint24
        @MyInsight5
    Scenario: Verify if participant user is able to see no insights when he lands on My Insights page first time without creating any insight
       
        Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        When User click My Insights option with eye icon
        Then User should see No Insights available

     
       @Sprint24
       @MyInsight6
    Scenario: Verify if participant user is able to add insights for particular activity
       
        Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        When User click on start button of MyInsightContentooneActivity 
        When User click on Add an Insight button to add insights
        When User add some insights and save
        Then User should see insight should be added


        @Sprint24
        @MyInsight7
    Scenario: Verify if participant user is able to update existing insights for particular activity
       
        Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        When User click on Resume button of MyInsightContentooneActivity 
        When User click on Edit button to edit existing insight
        When User edit existing insight and click save
        Then User should see updated insight for MyInsightContentooneActivity



        @Sprint24
        @MyInsight8
    Scenario: Verify if participant user is able to delete existing insights for particular activity
       
        Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        When User click on Resume button of MyInsightContentooneActivity 
        When User click on Delete button to delete existing MyInsightContentooneActivity insight
        When User click Yes,Cancel button to confirm delete insight
        Then User should see insight is deleted for MyInsightContentooneActivity

        @Sprint24
        @MyInsight9
    Scenario: Add three insights for three activities
       
       Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        When User click on Resume button of MyInsightContentooneActivity

        When User click on Add an Insight button to add insights
        When User add insights for one activity and save
        When User click on continue button of activity

        When User click on Add an Insight button to add insights
        When User add insights for two activity and save
        When User click on continue button of activity

        
        When User click on Add an Insight button to add insights
        When User add insights for three activity and save
      


    
        @Sprint24
        @MyInsight10
    Scenario: Verify if participant user is able to see all added insights on My Insights page
       
       Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        When User click My Insights option with eye icon 
        Then User should see all insights should be displayed on My Insights page

        
        @Sprint24
        @MyInsight11
    Scenario: Verify if participant user is able to search all added insights on My Insights page
       
       Given Participant should login in with "myinsightautomationmansha1@petronas.com" and "ABab12$%"
        When User navigate home page of MyInsightAutomationJourney journey
        When User click My Insights option with eye icon 
        When User provide insight name in Filter by keyword text box to search insight
        Then User should see same insight should be searched and displayed on My Insights page
