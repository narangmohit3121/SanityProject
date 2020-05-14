Feature: Content Block

    Background:
    Given User should login in with "neha.seth@bts.com" and "ABab12$"
        When User clicks on client tab
        When User should click on petronas folder
        When User click to Content Block Automation content folder


    @Sprint8
    @PageBlock1

    Scenario: Verify that the 'content block' is displayed to the user.

    Then content block should be displayed to the user

    @Sprint8
    @PageBlock2

    Scenario: Verify that user is able to edit content by clicking on 'Edit content'.
    
    When user click on edit content link for content block
    When user click on A of word editer window
    When user enter journyscriptId as "MOM-petro0078" Label as "User Id" placeholder as "Please enter your user id here" characterLimit as "20"
    When user click on save button for contentBlock of AddTextfiled
    When user click on save button for TextEntry Editer
    Then user should see same label and placeholder in contentBlock editer


    @Sprint8
    @PageBlock3

    Scenario: Verify that input label field is optional.
    
    When user click on edit content link for content block
    When user click on A of word editer window
    When user enter journyscriptId as "MOM-petro0078" placeholder as "Please enter your user id here" characterLimit as "20"
    When user click on save button for contentBlock of AddTextfiled
    When user click on save button for TextEntry Editer
    Then user should see content editer window without label


    @Sprint8
    @PageBlock4

    Scenario: Verify that user is able to enter text in the 'Input Placeholder text' field.
    
    When user click on edit content link for content block
    When user click on A of word editer window
    When user enter journyscriptId as "MOM-petro0078" placeholder as "Please enter your user id here" characterLimit as "20"
    When user click on save button for contentBlock of AddTextfiled
    When user click on save button for TextEntry Editer
    Then user should see same caption for placeholder in content editer window
        

    @Sprint8
    @PageBlock5

    Scenario: Verify that the Input Placeholder text field is optional.
    
    When user click on edit content link for content block
    When user click on A of word editer window
    When user enter journyscriptId as "MOM-petro0078" Label as "User Id" characterLimit as "20"
    When user click on save button for contentBlock of AddTextfiled
    When user click on save button for TextEntry Editer
    Then user should see content editer window without placeholder
        
    
