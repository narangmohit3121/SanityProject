@ResourceListingSanity
Feature: ResourceListing

    Background:


    @Sprint20
    @ResourceListing03
    Scenario: Verify that user is able to add a new theme and map the same to activities

        Given User should login in with "narang.mohit@bts.com" and "ABab12$"
        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Automation folder
        When User clicks on Sprint20 folder
        When User adds a new theme under Themes tab and Saves the same
        When User adds the new Theme to "Resources 1" activity
        When User adds the new Theme to "Resources 2" activity
        When User adds the new Theme to "Resources 3" activity
        When User navigates to the themes tab of the Resource Listing Journey
        When User enables newly added Theme for actions and Resources
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
        Then the changes made to the theme under Themes tab should get saved
    #Then User should be able to add this new theme to the activities

    @Sprint20
    @ResourceListing03
    Scenario: Verify that Participant User is able to see the Related Resources on Participant App
        Given Participant should login in with "RelatedResources2@petronas.com" and "ABab12$"
        When user navigates to the My Journey page
        When User navigates to the "ResourceListing 1" activity
        Then the related resources should be not be displayed to the user as the current page is not the last page
        #Navigate to last page of activity by clicking on Continue button
        Then the related resources should be displayed to the user on the as this is the last activity page
        When Participant user navigates to the Resources page
        Then the new theme should be visible under the dropdown and the activities related to the theme should be displayed

    @Sprint20
    @ResourceListing03
    Scenario: Verify the behavior when Resources and Actions toggles are enabled in Journey but the Resources toggle is disabled in CMS

        Given User should login in with "narang.mohit@bts.com" and "ABab12$"
        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Automation folder
        When User clicks on Sprint20 folder
        When User disables the Resources toggle of "Resources 1" activity
        When User navigates to the themes tab of the Resource Listing Journey
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
        Given Participant should login in with "RelatedResources2@petronas.com" and "ABab12$"
        When user navigates to the My Journey page
        When User navigates to the "ResourceListing 1" activity
        When User clicks on Continue Button
        Then the related resources should be displayed to the user on the as this is the last activity page
        When Participant user navigates to the Resources page
        Then the "ResourceListing 1" activity should not be displayed among activities related to the theme

    @Sprint20
    @ResourceListing03
    Scenario: Verify the behavior when Resources toggle is enabled and Actions toggle is disabled in Journey AND the Resources toggle is enabled in CMS
        Given User should login in with "narang.mohit@bts.com" and "ABab12$"
        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Automation folder
        When User clicks on Sprint20 folder
        When User enables the Resources toggle of "Resources 1" activity
        When User navigates to the themes tab of the Resource Listing Journey
        When User disables the Actions toggle but enables the Resources toggle
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
        Given Participant should login in with "RelatedResources2@petronas.com" and "ABab12$"
        When user navigates to the My Journey page
        When User navigates to the "ResourceListing 1" activity
        When User clicks on Continue Button
        Then the related resources should be displayed to the user on the as this is the last activity page
        When Participant user navigates to the Resources page
        Then the activities related to the current theme should be displayed

    @Sprint20
    @ResourceListing03
    Scenario: Verify the behavior when Resources toggle is disabled and Actions toggle is enabled in Journey AND the Resources toggle is disabled in CMS
        Given User should login in with "narang.mohit@bts.com" and "ABab12$"
        When User clicks on client tab
        When User should click on Petronas folder
        When User clicks on Automation folder
        When User clicks on Sprint20 folder
        When User enables the Resources toggle of "Resources 1" activity
        When User navigates to the themes tab of the Resource Listing Journey
        When User enables the Actions toggle but disables the Resources toggle
        When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
        Given Participant should login in with "RelatedResources2@petronas.com" and "ABab12$"
        When user navigates to the My Journey page
        When User navigates to the "ResourceListing 1" activity
        When User clicks on Continue Button
        Then the related resources should be displayed to the user on the as this is the last activity page
        When Participant user navigates to the Resources page
        Then the activities related to the current theme should not be displayed

    @Sprint20
    @ResourceListing03
    Scenario: Clean up for Resources

        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        Then User should delete the theme created for testing Resources
        # When User clicks on Automation folder
        # When User navigates to the themes tab of the Resource Listing Journey
    