Feature: Randering Multi Select Block Dropdown

    Background:
        Given Participant user should be on valid url to login

    @RanderingSMultielectionBlockDropdown1
    Scenario: Verify the functionality of multi Select at Participant side as a dropdown.

        # Verify the functionality of multi Select at Participant end when multi Select is added as a dropdown.
     
        # Scenario: Verify the display multi select as dropdown to the participant when the text of the options is long.

        # Scenario: Verify the display multi select as dropdown to the participant when there are a lot of options in the multi select.

        # Scenario: Verify the display multi select as dropdown to the participant when admin speify maximum  3 items selection.

        # Scenario: Verify the display multi select as dropdown to the participant when admin speify minimum 2 itmes selection.

        # Scenario: Verify that Participant Response is picked up properly when linked with dropdown as multi select.

        # Scenario: Verify that Cohort Response is working properly when linked with dropdown as multi select.

        When Participant user enters valid Email Id as "man.ansari@petronas.com" for petronas
        When Participant user enters valid Password as "ABab12$" for petronas
        When Participant user clicks on Login Button to see journey
        When User select an industry as "Qa Test1"
        When user select the region as "Asia"

        When user selects "Yes" for manage accounts
        Then user should see multi selectes dropdown

        When user select product as "BTS Momenta Strategy Partner  and people connecton of online training for indusrial bas people" from Long Text Dropdown
      #  Then Long Text Dropdown Options  should be selected and displayed

        When user clicks on continue button
      #  Then user should be landed on Lot of options in the multi select dropdown

        When user clicks on continue button
        When user click  more than three options select from maximum number 3 dropdown
       # Then user should not be allowed to select more than three itmes from dropdown


      #  When user refresh the current page
      #  When user land on Participant Response Page








         

         
        






