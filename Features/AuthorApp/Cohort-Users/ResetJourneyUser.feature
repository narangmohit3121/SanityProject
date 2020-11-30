#@E2ETestCohortUsers
Feature: Reset Journey User Feature

Background: 
Given User should login in with "mansha.ansari@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

    @ResetJourneyUser
    Scenario: Reset Journey User functionality

 When User click on Cohort and User label from left panel
 When User search journey as "Automation Journey Mansha" and click on the jounrey
 When User click ResetJourneyCohort
 When User click on first name as AutomationReset of Automation Jounrey Mansha
 When User click on Journeys Data tab
 When User click on Journeys Data button to reset journey
 When User click on User Dashboard to switch on Automation Journey Mohit journey
 When User search journey as "Automation Journey Mohit" and click on the same jounrey
 When User click ResetJourneyProgressCohort for Automation Journey Mohit
 When User click on first name as AutomationReset of Automation Journey Mohit
 When User click on Journeys Data tab
 When User click on Journeys Data button to reset journey

 When Participant user land on petronas test valid url
 When Participant user enters valid Email Id as "AutoResetJourney@petronas.com" for petronas
 When Participant user click NEXT button after enter email
 When Participant user enters valid Password as "ABab12$" for petronas
 When Participant user clicks on Login Button to see journey
 When User select an industry as " Automation Journey - Mansha" from industry vertical and click CONTINUE button
 When User click CONTINUE button after finishing ManshaSharelinkContentobject1
 When User click on Logout link

 When Participant user land on petronas test valid url
 When Participant user enters valid Email Id as "AutoResetJourney@petronas.com" for petronas
 When Participant user click NEXT button after enter email
 When Participant user enters valid Password as "ABab12$" for petronas
 When Participant user clicks on Login Button to see journey
 When User select an industry as " Automation Journey - Mohit" from industry vertical and click CONTINUE button
 When User click CONTINUE button after finishing DownloadActivity
 When User click on Logout link

# # same code above in background tag is working but here   is giving below error
# Given User should login in with "mansha.ansari@bts.com" and "ABab12$" # 2\MasterLanding.js:32
#        NoSuchElementError: No element found using locator: By(xpath, //input[contains(@id,'mat-input') and @type = 'email'])

 Given User should login in with "mansha.ansari@bts.com" and "ABab12$"
 When User should click on Client Tab
 When User should click on Petronas folder

 When User click on Cohort and User label from left panel
 When User search journey as "Automation Journey Mansha" and click on the jounrey
 When User click ResetJourneyCohort
 When User click on AutomatioReset as first name of Cohort
 When User click on first name as AutomationReset of Automation Journey Mohit
 When User click on Journeys Data tab
 When User click on arrow of Journey search dropdown to select only Automation Journey Mohit to reset
 When User click Automation Journey Mohit to reset journey
 When User click on Journeys Data button to reset journey

# # to validate  Automation Journey Mansha
#  When Participant user land on petronas test valid url
#  When Participant user enters valid Email Id as "AutoResetJourney@petronas.com" for petronas
#  When Participant user click NEXT button after enter email
#  When Participant user enters valid Password as "ABab12$" for petronas
#  When Participant user clicks on Login Button to see journey
#  When User select an industry as " Automation Journey - Mansha" from industry vertical and click CONTINUE button







