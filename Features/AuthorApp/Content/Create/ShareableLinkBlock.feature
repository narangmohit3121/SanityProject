@E2ETest_CMS
Feature: Shareable Link Block Feature

  Background:


  @ShareableLinkBlock01
  Scenario: Verify that user is able to create Shareable Link Block

    Given User Logs in as admin user
    When User should click on Client Tab
    When User should click on Petronas folder
    When User click on Automation do not Delete folder
    When User click on Sprint 20 folder
    When User should check if plus icon is present besides Content and click on it
    When User enter name of first Content as "ShareableContentBlockManshaContent" and Description as "Cnt1 Desc" and clicks on Save
    When User click on the ShareableContentBlockManshaContent
    When User select content type as "Action"
    When User click on shareable toggle button
    When User click on content Tab
    When User drag and drop content block in editor
    When User click on Edit content Link of content block
    # When User enter some text under content block
    When User enter some texts in all columns present under editor
    When User saves the changes made to the content
    When User Saves Draft and Publishes the Content and then clicks on Exit Editor

    When User should check if plus icon is present besides Content and click on it
    When User enter name of second Content as "ShareLinkBlockManshaContent2" and Description as "Cnt2 Desc" and clicks on Save
    When User click on content to which Share Link block is to be added
    When User select content type as "Action"
    # When User click on shareable toggle button
    When User click on content Tab
    When User drag and drop Share Link block in editor
    When User click on Edit share Link of share link block
    When User select content type as "ShareableContentBlockManshaContent" from content object dropdown
    When User enter Active Days for the Share Link as "5"
    When User click on ok button after active days for the Share Link
    When User Saves Draft and Publishes the Content and then clicks on Exit Editor

  @ShareableLinkBlock02
  Scenario: Verify that user is able to link Shareable Link Block to an activity in a journey
    Given User Logs in as admin user
    When User should click on Client Tab
    When User should click on Petronas folder
    When User click on Automation do not Delete folder
    When User click on Automation Journey Mansha
    Then user adds the "ShareLinkActivity" activity to the "1A Module" module and links "ShareLinkBlockManshaContent2" activity to the same
    Then User Saves and Publishes the Journey and then Exits the Journey on Journey Flow page
    Given Participant should login in with "AutoTestUser3@petronas.com" and "ABab23$"
    When User select an industry as " Automation Journey - Mansha" from industry vertical dropdown
    When user navigates to the My Journey page
    When User navigates to the "1A Module" module and "ShareLinkActivity" activity
    Then User should see ShareableLinkContent
    Then User should see expiry days defined by author
    When User click on copy share link block to copy url of share link
    #Then expiry days description should be displayed when user opens the copied link
    When User clicks on Open in a new window Link and navigates to the linked content
    Then User should see expiry days description on top right corner of page
  #When Participant user land on copied url and load the page



  # When User click on Three dots of 1A Module
  # When User click on Add Activity option of 1A Module
  # When User select activity type as "Content Object" from activity type dropdown
  # When User enter activity title as "ShareLinkActivity" and Description as "Activity Desc"
  # When User click on SAVE button after enter activity title and description
  # When User click SAVE and PUBLISH after save activity
  # When User Drag and drop ShareLinkActivity from bottom to top
  # When User click three dots of ShareLinkActivity to link content
  # When User click on link activity to link content
  # When User click on petronas tab to select content
  # When User click on Automation Do Not Delete link
  # When User click on Sprint 20 folder after click on Automation Do Not Delete link
  # When User select Content as ShareLinkBolckManshacontent to link with journey
  # When User click SAVE and PUBLISH after save activity

  # @ShareableLinkBlock03
  # Scenario: Verify that user is able to view Shareable Link activity as a Participant
  #   When Participant user land on petronas test valid url
  #   When Participant user enters valid Email Id as "AutoTestUser3@petronas.com" for petronas
  #   When Participant user enters valid Password as "ABab12$" for petronas
  #   When Participant user clicks on Login Button to see journey
  #   # When User select an industry as " Automation Journey - Mansha"
  #   When User Click on start button of ShareLinkActivity of 1A module
  #   Then User should see ShareableLinkContent
  #   Then User should see expiry days defined by author
  #   When User click on copy share link block to copy url of share link
  #   When Participant user land on copied url and load the page
  #   Then User should see expiry days description on top right corner of page

  @ShareableLinkBlock04
  Scenario: Clean Up the contents for next automation Run
    Given User Logs in as admin user
    When User should click on Client Tab
    When User should click on Petronas folder
    When User click on Automation do not Delete folder
    When User click on Sprint 20 folder
    Then User should be able to delete contents created for Shareable Link Automation run
    





