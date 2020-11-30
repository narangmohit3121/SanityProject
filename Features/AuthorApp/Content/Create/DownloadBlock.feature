@DownloadBlock
@E2ETest_CMS
Feature: Author and Participant Test cases for Download Block

    @DownloadBlock01
    @AuthorAppContentCreate
    Scenario: Verify whether user can provide External Link to the block of the type Download

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Automation folder
        When User clicks on Sprint14 folder
        When User navigates to an activity that has a block of the type Download
        When User clicks on Edit Download button
        When user selects the option External Link and provides a Link
        When user updates the Heading of Download Block
        When User saves the changes made to the content
        #When User saves the changes made to the Download Block
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        Then the Heading should get updated and External Link should get added to the Download block

    @DownloadBlock02
    @AuthorAppContentCreate
    Scenario: Verify whether user can upload file to the block of the type Download

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Automation folder
        When User clicks on Sprint14 folder
        When User navigates to an activity that has a block of the type Download
        When User clicks on Edit Download button
        When user selects the option Upload Momenta Content Doc and uploads a file
        #When user updates the Heading of Download Block
        When User saves the changes made to the content
        When User Saves Draft and Publishes the Content and then clicks on Exit Editor
        Then the file should get uploaded to the Download block

    @DownloadBlock03
    Scenario: Verify that Download is working properly for the participant user

        Given Participant should login in with "producer5@petronas.com" and "ABab44$"
        When user navigates to the My Journey page
        When User navigates to the "Mod 1" module and "DownloadActivity" activity
        Then the Download heading should be correct
        #When User tries to navigate to next page without Downloading the Activity
        When User clicks on Download button to download the file
        Then the file should get downloaded
        When User clicks on Continue Button
        # When User clicks on ExternalURL button to download the file
        # Then User should be taken to the URL provided in Download block