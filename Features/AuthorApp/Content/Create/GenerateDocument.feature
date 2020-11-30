@E2ETest_CMS
Feature: Generate document - Author + Participant

    @GenerateDocument01
    Scenario: Verify that user is able to create an activity with Generate Document
        Given User should login in with "narang.mohit@bts.com" and "ABab12$"
        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Automation folder
        When User clicks on Sanity folder
        When user navigates to the EndToEnd folder
        When user creates a new Activity for "Generate Document" Content and navigates into the same
        When user adds the content of the type "Selection"
        When user clicks on the Edit "Single Select" button
        When user selects the Single Select Type as "short"
        When user selects the Single Select Sub-Type as "Radio"
        When user enters data into the fields of Single Select block
        When User saves the changes made to the content
        When User Saves Draft and Publishes the Content but does not click on Exit Editor
        When user adds the content of the type "Page Divider"
        When user adds the content of the type "Generate Document"
        When user clicks on the Edit "Generate Document" button
        When user uploads a template file to generate document
        When user enters Data into Generate Document fields
        When User saves the changes made to the content
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        Then the activity with Generate Document should get created

    @GenerateDocument02
    Scenario: Verify that user is able to link the Generate document content to an activity in a journey
        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Automation Journey Mohit" folder in petronas
        When user creates a new Generate Document activity under "Mod 1" module of the Journey

    @GenerateDocument03
    Scenario: Verify that Generate Document is working properly for the participant user

        #Given Participant should login in with a user of newly created journey
        Given Participant should login in with "GenerateDocAutomation1@petronas.com" and "ABab12$"
        When user selects the region as "Asia"
        When User selects gender as "Male"
        When user navigates to the My Journey page
        #When user navigates to the "Generate Document" activity in the newly created journey
        When User navigates to the "Mod 1" module and "GenerateDoc" activity
        When participant user selects an option for Single Select of "Generate Document" content
        When User clicks on Continue Button
        When User clicks on Download button to download the file
        Then the document should get downloaded and the contents of the downloaded file should be correct
        Then participant user should be able to click on continue button

    @QuizContent8
    Scenario: Clean Up for Generate document

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp" folder in petronas
        # When User navigates to "MOHITN_SSO_DONOT TOUCH/Quiz Testing" folder in petronas
        Then user should be able to delete the Generate Document content