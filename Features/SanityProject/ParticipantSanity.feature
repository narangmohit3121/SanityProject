Feature: Participant App Sanity Test cases for Content

    Background:

    # @Participant01
    # Scenario: Verify that Word Cloud is getting properly generated for the participant user

    # Given Participant should login in with "producer5@petronas.com" and "ABab12$"
    # When user navigates to the My Journey page
    # When User navigates to the "Mod 1" module and "ActivityWordcloud" activity
    # When User provides some input into the content activity
    # When User clicks on Continue Button
    # When Participant user logs in with "producer6@petronas.com" and "ABab12$"
    # When user navigates to the My Journey page
    # When User navigates to the "Mod 1" module and "ActivityWordcloud" activity
    # When User provides some input into the content activity
    # When User clicks on Continue Button
    # Then the wordcloud should be properly generated from the input provided

    # @Participant02
    # Scenario: Verify that Download is working properly for the participant user

    # Given Participant should login in with "producer5@petronas.com" and "ABab12$"
    # When user navigates to the My Journey page
    # When User navigates to the "Mod 1" module and "DownloadActivity" activity
    # Then the Download heading should be correct
    # #When User tries to navigate to next page without Downloading the Activity
    # When User clicks on Download button to download the file
    # Then the file should get downloaded
    # When User clicks on Continue Button
    # When User clicks on ExternalURL button to download the file
    # Then User should be taken to the URL provided in Download block

    @ParticipantWordCloud01
    Scenario: Verify that Download is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Wordcloud" activity in the newly created journey
        When User provides some input into the content activity
        When User clicks on Continue Button
        When Participant should login in with another user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Wordcloud" activity in the newly created journey
        When User provides some input into the content activity
        When User clicks on Continue Button
        Then the wordcloud should be properly generated from the input provided
        Then participant user should be able to click on continue button

    @ParticipantDiscussion01
    Scenario: Verify that Discussion Thread is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Discussion Thread" activity in the newly created journey
        When User enters comments and replies
        Then Discussion Thread Fields should be displayed correctly on the Participant UI
        When User clicks on Continue Button
        When Participant should login in with another user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Discussion Thread" activity in the newly created journey
        Then the user should be able to see the comments provided by another user of the same cohort
        Then participant user should be able to click on continue button

    @ParticipantGenerateDoc01
    Scenario: Verify that Generate Document is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        #When user navigates to the "Generate Document" activity in the newly created journey
        When user navigates to the "Generate Document" activity in the newly created journey
        When participant user selects an option for Single Select of "Generate Document" content
        When User clicks on Continue Button
        When User clicks on Download button to download the file
        Then the document should get downloaded and the contents of the downloaded file should be correct
        Then participant user should be able to click on continue button


    @ParticipantSingleSelectRadio01
    Scenario: Verify that Single Select Radio is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Single Select Radio" activity in the newly created journey
        Then the title and options displayed for Single Select radio should be correct
        Then participant user should be able to make a selection for single select radio
        Then participant user should be able to click on continue button

    @ParticipantSingleSelectDropdown01
    Scenario: Verify that Single Select Dropdown is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Single Select DD" activity in the newly created journey
        Then the title and options displayed for Single Select dropdown should be correct
        Then participant user should be able to make a selection for single select dropdown
        Then participant user should be able to click on continue button

    @ParticipantSingleSelectLong01
    Scenario: Verify that Single Select Long is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Single Select Long" activity in the newly created journey
        Then the title and options displayed for Single Select Long should be correct
        Then participant user should be able to make a selection for single select Long
        Then participant user should be able to click on continue button

    @ParticipantVideo01
    Scenario: Verify that Video activity is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Video" activity in the newly created journey
        Then the video settings and source should be correct

    @ParticipantRadioMatrix01
    Scenario: Verify that Video activity is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Radio Button Matrix" activity in the newly created journey
        Then the Radio Button Matrix title, description, question titles, and options should be correct
        Then participant user should be able to select options for Radio Button Matrix
        Then participant user should be able to click on continue button

    @ParticipantMultiSelectCheckbox01
    Scenario: Verify that Multi Select Checkbox activity is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Multi Select CB" activity in the newly created journey
        Then the "Multi Select CB" title and options should be correct
        Then participant user should be able to select options for "Multi Select CB"
        Then participant user should be able to click on continue button

    @ParticipantMultiSelectLong01
    Scenario: Verify that Multi Select Long activity is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Multi Select Long" activity in the newly created journey
        Then the "Multi Select Long" title and options should be correct
        Then participant user should be able to select options for "Multi Select Long"
        Then participant user should be able to click on continue button

    @ParticipantMultiSelectDropdown01
    Scenario: Verify that Multi Select Dropdown activity is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Multi Select DD" activity in the newly created journey
        Then the "Multi Select DD" title and options should be correct
        Then participant user should be able to select options for "Multi Select DD"

    @ParticipantGenerateDoc01
    Scenario: Verify that Cohort Response is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        #When user navigates to the "Generate Document" activity in the newly created journey
        When user navigates to the "Cohort Response" activity in the newly created journey
        When participant user selects an option for Single Select of "Cohort Response" content
        Then participant user should be able to click on continue button
        When Participant should login in with another user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Cohort Response" activity in the newly created journey
        Then the Cohort Responses should be displayed when user clicks on Next Response button

    @ParticipantResponseGraph01
    Scenario: Verify that Response Graph is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        #When user navigates to the "Generate Document" activity in the newly created journey
        When user navigates to the "Response Graph" activity in the newly created journey
        When participant user selects an option for Single Select of "Response Graph" content
        Then participant user should be able to click on continue button
        When Participant should login in with another user of newly created journey
        When user navigates to the My Journey page
        When user navigates to the "Response Graph" activity in the newly created journey
        When participant user selects an option for Single Select of "Response Graph" content
        Then participant user should be able to click on continue button
        Then the Response Graph details displayed to the participant should be correct
        Then the response graph should be correctly generated on the basis of user selections

    @ParticipantImage01
    Scenario: Verify that Image Content is working properly for the participant user

        Given Participant should login in with a user of newly created journey
        When user navigates to the My Journey page
        #When user navigates to the "Generate Document" activity in the newly created journey
        When user navigates to the "Image" activity in the newly created journey
        Then the image content should be displayed properly to the participant
        Then participant user should be able to click on continue button


    @ParticipantStoryLine02
    Scenario: Verify that Response Graph is working properly for the participant user

        Given Participant should login in with "quizuser1@petronas.com" and "ABab12$"
        # When User selects the Sprint 7 module under Automation_Mohit stage
        # When User clicks on Cohort Response activity
        When user navigates to the My Journey page
        When User navigates to the "Quiz Mod 1" module and "Storyline" activity
        Then the Storyline Quiz should be displayed properly to the participant
        Then participant user should be able to click on continue button
