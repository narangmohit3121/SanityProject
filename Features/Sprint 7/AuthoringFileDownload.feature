Feature: My Journey Page

    Background:
        Given User should login in with "neha.seth@bts.com" and "123456"

    @Sprint07
    @AuthorFileDownloadPage1
    Scenario: Verify Whether user is able to see download file
        When User should click on Client Tab
        When User should click on Petronas folder
        When User selects the File Download Content
        When User click on 'Edit Download' link
        Then Download file window should be displayed


    @Sprint07
    @AuthorFileDownloadPag2
    Scenario: Verify Whether user is able to see Download as a title and Document as sub title in Download file Window
        When User should click on Client Tab
        When User should click on Petronas folder
        When User selects the File Download Content
        When User click on 'Edit Download' link
        Then User should see Download as title and Document as sub title

   @Sprint07
    @AuthorFileDownloadPag3
    Scenario: Verify Whether user is able to see Download as a title and Document as sub title in Download file Window
        When User should click on Client Tab
        When User should click on Petronas folder
        When User selects the File Download Content
        When User click on 'Edit Download' link
        When User clicks on 'x' icon
        Then Download file window should get closed

   @Sprint07
    @AuthorFileDownloadPag4
    Scenario: Verify Whether user is able to See 'External Link' and 'Momenta Content Doc' option with radio button below of 'Document' lable in Download file Window
        When User should click on Client Tab
        When User should click on Petronas folder
        When User selects the File Download Content
        When User click on 'Edit Download' link
        Then User can toggle between 'External Link' and 'Momenta Content Doc' options

    @Sprint07
    @AuthorFileDownloadPag4
    Scenario: Verify whether user see 'Document Link','Prehead - Optional' and 'Heading' label with their respective text field
        When User should click on Client Tab
        When User should click on Petronas folder
        When User selects the File Download Content
        When User click on 'Edit Download' link
        When User selects 'External Link' radio button
        Then User can enter some texts in 'Document Link','Prehead - Optional' and 'Heading' options

    @SprintNS
    @AuthorFileDownloadPag5
    Scenario: Verify whether 'External Link' option with radio button functioning
        When User should click on Client Tab
        When User should click on Petronas folder
        When User selects the File Download Content
        When User click on 'Edit Download' link
        When User selects 'External Link' radio button
        When User enters Document link under 'Document Link' text box
        When User enters Prehead text under 'Prehead-Optional' text box
        When User enters Heading under 'Heading' text box
        When User can select 'External Link' as an icon
        When User tries to save by clicking on 'SAVE' button
        Then User should see content saved after selecting 'External Link' as an option