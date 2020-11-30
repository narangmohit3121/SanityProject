@E2ETest_CMS
Feature: Randering Selection Block Dropdown

    Background:


    @Sprint15
    @RanderingSelectionBlockDropdown1
    Scenario: Randering Selection Block Dropdown
        # Given Participant user should be on valid url to login
        # When User enter valid email id as "mansha.ansari@petronas.com" and valid password as "ABab12$" for petronas
        # When Participant user enters valid Email Id as "mansha.ansari@petronas.com" for petronas
        # When Participant user enters valid Password as "ABab12$" for petronas
        # When Participant user clicks on Login Button to see journey
        Given Participant should login in with "autotestuser5@petronas.com" and "ABab12$"
        When User select an industry as " Automation Journey - Mansha" from industry vertical dropdown
        When User select an industry as "Qa Test1"
        When user select the region as "Asia"
        When user selects "Yes" for manage accounts
        When user navigates to the My Journey page
        When User navigates to the "Module 2" module and "MultiSelectDropdown_Activity" activity        
        # When user landed on Activity SingleSelecet1345 page and click Start button
        When user is able to see BTS Products dropdown in joureny page
        When user select product as "BTS Momenta Strategy" from BTS Products dropdown
        Then Momenta should be selected as a BTS product
        When User clicks on Continue Button
        # Then user should see "Momenta" as seleted item from BTS Products dropdown
        When user select a city from the multi-select dropdown of the type checkbox
        Then the corresponding city should get selected
