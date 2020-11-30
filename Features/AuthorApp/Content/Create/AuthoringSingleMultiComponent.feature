@E2ETest_CMS
Feature: AuthoringSingleMultiComponent

    Background:
        Given User Logs in as admin user
        When User clicks on client tab
        When User should click on Petronas folder
        When User click on ParticipantResponseBlock Content

    @Sprint08
    @AuthoringSingleMultiComponent1

    Scenario: Verifiy whether Author is able to view default weightage value (index) to all options added.


        When User click on Edit Selection link of Single and Multi Component
        Then User should see 1,2 and 3 value for first three textfiled respectively by default


    @Sprint08
    @AuthoringSingleMultiComponent2

    Scenario: Verifiy whether Author is able to edit the default weightage value (index), and add new value in it.

        When User click on Edit Selection link of Single and Multi Component
        When user edit default value of value1 as "5" value2 as "10" and value of value3 as "15" respectively
        When User click on save button after edit value
        When User click on Edit Selection link of Single and Multi Component
        Then User should see same values of value1,value2 and value3 respectively after save button
