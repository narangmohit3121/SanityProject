Feature: Sample Test Case for Appium

    Scenario: Login into Momenta
        # Given User should login in with "narang.mohit@bts.com" and "ABab12$"
        # Then Client tab should be displayed
        Given Participant should login in with "RelatedResources2@petronas.com" and "ABab12$"
        When Participant user navigates to the My Journey page with Mobile App
        When User scrolls to the bottom of the page
        When User navigates to the "ResourceListing 1" activity
        When User clicks on Continue Button