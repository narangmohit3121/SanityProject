@E2EAuthor_Journey
Feature: Social Forum

    #Background:
    #Given User should login in with "qa_momenta@bts.com" and "ABab12$"
    #When User should click on Client Tab

    @SocialForum
    @SocialForum1
    Scenario: Verify if User is able to add Discussion at Journey level successfully

    Given User should login in with "qa_momenta@bts.com" and "ABab12$"
    When User should click on Client Tab
    When User should click on Petronas folder
    When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey/Automation SocialForum" folder in petronas
    When User clicks on "Discussions" Tab from left Panel of Content
    When User clicks on Add Discussion button
    When User fills Discussion Journey Script id as "Dis_001" Discussion Title as "Discussion_Title_01" Discussion Statement as "Discussion Forum Statement" Scope as "Journey" and clicks on Create
    Then User should be able to view created Discussion as "Discussion_Title_01"
    Then User Saves and Publishes Discussions Tab

    When User clicks on "Journey Flow" Tab from left Panel of Content
    Then User adds Activity to Module and Links it to Content
    Then User Saves and Publishes Journey Flow

    When User clicks on "Discussions" Tab from left Panel of Content
    Then User should be able to view created Content as "Social Forum_001"
    Then User Saves and Publishes Discussions Tab
    Then User clicks on Exit & Unlock

    Given Participant should login in with "socialforumuser1@petronas.com" and "ABab12$"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side

    When User validates Discussion Title
    Then User validates Total Posts count as "0" under "Discussion_Title_01"
    
    When User validates Content Title
    Then User validates Total Posts count as "0" under "Social Forum_001"

    @SocialForum
    @SocialForum2

    Scenario: Verify if User is able to validate Discussion count after commenting

    Given Participant should login in with "socialforumuser1@petronas.com" and "ABab12$"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side
    When User clicks on "Discussion_Title_01" Title and Comments under it as "Comment by Discussion"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side
    Then User validates Total Posts count as "1" under "Discussion_Title_01"

    When User clicks on "Social Forum_001" Title and Comments under it as "Comment by Content"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side
    Then User validates Total Posts count as "1" under "Social Forum_001"

    @SocialForum
    @SocialForum3

    Scenario: Verify if User is able to validate Discussion count

    Given Participant should login in with "socialforumuser2@petronas.com" and "ABab12$"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side

    When User clicks on "Discussion_Title_01" Title and Comments under it as "Comment by Discussion"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side
    Then User validates Total Posts count as "2" under "Discussion_Title_01"

    When User clicks on "Social Forum_001" Title and Comments under it as "Comment by Content"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side
    Then User validates Total Posts count as "2" under "Social Forum_001"

    @SocialForum
    @SocialForum4
    #Author side
    
    Scenario: Verify if User is able to toggle off Tabs

    Given User should login in with "qa_momenta@bts.com" and "ABab12$"
    When User should click on Client Tab
    When User should click on Petronas folder
    When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey/Automation SocialForum" folder in petronas
    When User clicks on "Discussions" Tab from left Panel of Content

    When User toggle Off for "Social Forum_001"
    When User toggle Off for "Discussion_Title_01"
    Then User Saves and Publishes Discussions Tab
    Then User clicks on Exit & Unlock


    Given Participant should login in with "socialforumuser1@petronas.com" and "ABab12$"
    When User clicks on "Discussions" Tab from left Panel of Content at Participant side
    Then User should not able to view Discussion and Content Titles

    @SocialForum
    @SocialForum5
    #Deleting
    Scenario: Verify if User is able to delete Discussion count

    Given User should login in with "qa_momenta@bts.com" and "ABab12$"
    When User should click on Client Tab
    When User should click on Petronas folder
    When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey/Automation SocialForum" folder in petronas
    #When User clicks on "Discussions" Tab from left Panel of Content
    #When User deletes "Discussion_Title_01"
    #When User deletes "Social Forum_001"
    #Then User Saves and Publishes Discussions Tab

    #When User clicks on "Journey Flow" Tab from left Panel of Content
    When User deletes activity under Module
    Then User Saves and Publishes Journey Flow
    When User clicks on "Discussions" Tab from left Panel of Content
    When User deletes "Discussion_Title_01"
    Then User Saves and Publishes Discussions Tab
    Then User clicks on Exit & Unlock