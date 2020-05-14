Feature: Randering Selection Block Dropdown

    Background:
        Given Participant user should be on valid url to login

    @Sprint15
    #@RanderingSelectionBlockDropdown1
    Scenario: Randering Selection Block Dropdown

        # When User enter valid email id as "mansha.ansari@petronas.com" and valid password as "ABab12$" for petronas
        When Participant user enters valid Email Id as "mansha.ansari@petronas.com" for petronas
        When Participant user enters valid Password as "ABab12$" for petronas
        When Participant user clicks on Login Button to see journey
        When User select an industry as "Qa Test1"
        When user select the region as "Asia"
        When user selects "Yes" for manage accounts
       # When user landed on Activity SingleSelecet1345 page and click Start button
        When user is able to see BTS Products dropdown in joureny page
        When user select product as "Momenta" from BTS Products dropdown
        Then Momenta should be selected as a BTS product
        When user click continue button after select product as Momenta
       # Then user should see "Momenta" as seleted item from BTS Products dropdown
        When user select city as Mumbai from Cities in India radio selection
        Then Mumbai should be selected from Cities in india
