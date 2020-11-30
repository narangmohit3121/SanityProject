Feature: Sanity Testing of Journey Functionality

# @JourneySanity02
# Scenario: Verify that User is able to create a new Journey
# Given User should login in with "narang.mohit@bts.com" and "ABab12$"
# When User clicks on client tab
# When User should click on Petronas folder
# When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp" folder in petronas
# When User creates a new journey for Sanity and navigates to the same
# When User adds the "SanityModule" module to the Journey
# When User links the contents created for Sanity Suite to the the "SanityModule" module of above journey
# When User Saves and Publishes the Journey on Journey Flow page and then Exits the Journey
# Then the contents should get linked to the Sanity journey
# # When User adds a new Cohort to the Sanity Journey and creates a new user under that cohort


@JourneySanity01
Scenario: Verify that user is able to link the created Content to the Journey
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/Individual Content/EndToEnd Automation BackUp" folder in petronas
When User creates a new journey for Sanity and navigates to the same
When User adds the "SanityModule" module to the Journey
When User links the contents created for Sanity Suite to the the "SanityModule" module of above journey
#When User Saves and Publishes the Journey and then Exits the Journey on Journey Flow page
When User Saves and Publishes the Journey on Journey Flow page but does not exit
When User updates General Settings under Journey Configuration
When User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel
When User adds a new Cohort to the Sanity Journey and creates a new user under that cohort