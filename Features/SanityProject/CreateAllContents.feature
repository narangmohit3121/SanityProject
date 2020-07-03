Feature: Create Contents of All Types

Background: 
Given User should login in with "narang.mohit@bts.com" and "ABab12$"
When User clicks on client tab
When User should click on Petronas folder
When User clicks on Automation folder
When User clicks on Sanity folder

@CreateVideoContent
Scenario: Verify that user is able to create an activity with Content of the type Video
When user navigates to the EndToEnd folder
When user creates a new Activity for "Video" Content and navigates into the same
When user adds the content of the type "Video"
When user clicks on the Edit "Video" button
When user enters data into the fields of Video block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Video content should get created

@CreateSingleSelect
Scenario: Verify that user is able to create an activity with Single Select of the type Short-Radio
When user navigates to the EndToEnd folder
When user creates a new Activity for "Single Select Radio" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "short"
When user selects the Single Select Sub-Type as "Radio"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Single Select content of the type "Short-Radio" should get created

@CreateSingleSelect
Scenario: Verify that user is able to create an activity with Single Select of the type Short-Dropdown
When user navigates to the EndToEnd folder
When user creates a new Activity for "Single Select DD" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "short"
When user selects the Single Select Sub-Type as "Dropdown"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Single Select content of the type "Short-Dropdown" should get created

@CreateSingleSelect01
Scenario: Verify that user is able to create an activity with Single Select of the type Long
When user navigates to the EndToEnd folder
When user creates a new Activity for "Single Select Long" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "long"
#When user selects the Single Select Sub-Type as "Dropdown"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Single Select content of the type "Long" should get created

@CreateMultiSelect01
Scenario: Verify that user is able to create an activity with Multi Select of the type Checkbox
When user navigates to the EndToEnd folder
When user creates a new Activity for "Multi Select CB" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Multi Select Type as "short"
When user selects the Multi Select Sub-Type as "Checkbox"
When user enters data into the fields of Multi Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Multi Select content of the type "Short-Checkbox" should get created

@CreateMultiSelect01
Scenario: Verify that user is able to create an activity with Multi Select of the type Dropdown
When user navigates to the EndToEnd folder
When user creates a new Activity for "Multi Select DD" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Multi Select Type as "short"
When user selects the Multi Select Sub-Type as "Dropdown"
When user enters data into the fields of Multi Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Multi Select content of the type "Short-Dropdown" should get created

@CreateMultiSelect01
Scenario: Verify that user is able to create an activity with Single Select of the type Long
When user navigates to the EndToEnd folder
When user creates a new Activity for "Multi Select Long" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "long"
#When user selects the Single Select Sub-Type as "Dropdown"
When user enters data into the fields of Multi Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Multi Select content of the type "Long" should get created

@variableGrid01
Scenario: Verify that user is able to an activity with create Variable Grid
When user navigates to the EndToEnd folder
When user creates a new Activity for "Variable Grid" Content and navigates into the same
When user adds the content of the type "Variable Grid"
When user clicks on the Edit "Variable Grid" button
When user enters data into the fields of Variable Grid block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Variable Grid Content should get created

@DiscussionThread01
Scenario: Verify that user is able to an activity with create Discussion Thread 
When user navigates to the EndToEnd folder
When user creates a new Activity for "Discussion Thread" Content and navigates into the same
When user adds the content of the type "Discussion Thread"
When user clicks on the Edit "Discussion Thread" button
When User enters data into the fields of Discussion thread block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Discussion thread Content should get created


@CreateContent01
Scenario: Verify that user is able to create an activity with Content Block
When user navigates to the EndToEnd folder
When user creates a new Activity for "Content" Content and navigates into the same
When user adds the content of the type "Content"
When user clicks on the Edit "Content" button
When User selects Number of Columns as 2
#When User clicks on Background button
#When User type the color in text box present as Choose color
When User enter some texts in all columns present under editor
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Content Block should get created

@CreateResponseGraph01
Scenario: Verify that user is able to create an activity with Response Graph
When user navigates to the EndToEnd folder
When user creates a new Activity for "Response Graph" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "short"
When user selects the Single Select Sub-Type as "Radio"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content but does not click on Exit Editor
When user adds the content of the type "Page Divider"
When user adds the content of the type "Response Graph"
When user clicks on the Edit "Response Graph" button
When User enters data into the fields of Response Graph block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Response Graph should get created

@CreateDownload01
Scenario: Verify that user is able to create an activity with Download Block
When user navigates to the EndToEnd folder
When user creates a new Activity for "Download" Content and navigates into the same
When user adds the content of the type "Download"
When user clicks on the Edit "Download" button
When user selects the option Upload Momenta Content Doc and uploads a file
When user enters data into the fields of Download Block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Download Block should get created

@CreateTextImage01
Scenario: Verify that user is able to create an activity with Text and Image Block
When user navigates to the EndToEnd folder
When user creates a new Activity for "Text and Image" Content and navigates into the same
When user adds the content of the type "Text & Image"
When user clicks on the Edit "Text & Image" button
When User updates the description of Text and Image Block
When User attaches an image to Text and Image by using BROWSE button
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Text and Image Block should get created

@CreateCohortResponse01
Scenario: Verify that user is able to create an activity with Cohort Response
When user navigates to the EndToEnd folder
When user creates a new Activity for "Cohort Response" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "short"
When user selects the Single Select Sub-Type as "Radio"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content but does not click on Exit Editor
When user adds the content of the type "Page Divider"
When user adds the content of the type "Cohort Response"
When user clicks on the Edit "Cohort Response" button
When User enters data into the fields of Cohort Response block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Cohort Response should get created

@CreateParticipantResponse01
Scenario: Verify that user is able to create an activity with Participant Response
When user navigates to the EndToEnd folder
When user creates a new Activity for "Participant Response" Content and navigates into the same
When user adds the content of the type "Content"
When user clicks on the Edit "Content" button
When user clicks on Text Input button in Edit Content Modal
When user enters Data into Text Input fields and saves changes
When User saves the changes made to the content
When User Saves Draft and Publishes the Content but does not click on Exit Editor
When user adds the content of the type "Page Divider"
When user adds the content of the type "Participant Response"
When user clicks on the Edit "Participant Response" button
When User enters data into the fields of Participant Response block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Participant Response should get created

@CreateCards01
Scenario: Verify that user is able to create an activity with Card Blocks
When user navigates to the EndToEnd folder
When user creates a new Activity for "Cards" Content and navigates into the same
When user adds the content of the type "Cards"
When user clicks on the Edit "Cards" button
When user enters Data into Cards fields and saves changes
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Cards should get created

@CreateWordcloud01
Scenario: Verify that user is able to create an activity with WordCloud
When user navigates to the EndToEnd folder
When user creates a new Activity for "Wordcloud" Content and navigates into the same
When user adds the content of the type "Content"
When user clicks on the Edit "Content" button
When user clicks on Text Input button in Edit Content Modal
When user enters Data into Text Input fields and saves changes
When User saves the changes made to the content
When User Saves Draft and Publishes the Content but does not click on Exit Editor
When user adds the content of the type "Page Divider"
When user adds the content of the type "Wordcloud"
When user clicks on the Edit "Wordcloud" button
When User enters data into the fields of Wordcloud block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Wordcloud should get created

@CreateCustomCode01
Scenario: Verify that user is able to create an activity with Custom Code
When user navigates to the EndToEnd folder
When user creates a new Activity for "Custom Code" Content and navigates into the same
When user adds the content of the type "Custom Code"
When user clicks on the Edit "Custom Code" button
When User enters some code into Custom Code Block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Custom Code should get created

@CreateGenerateDocument01
Scenario: Verify that user is able to create an activity with Generate Document
When user navigates to the EndToEnd folder
When user creates a new Activity for "Generate Document" Content and navigates into the same
When user adds the content of the type "Generate Document"
When user clicks on the Edit "Generate Document" button
When user selects the option Upload Momenta Content Doc and uploads a file
When user enters Data into Generate Document fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Generate Document should get created

@CreateMasthead01
Scenario: Verify that user is able to create an activity with Masthead
When user navigates to the EndToEnd folder
When user creates a new Activity for "Masthead" Content and navigates into the same
When user adds the content of the type "Masthead"
When user clicks on the Edit "Masthead" button
When user enters Data into Masthead fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Masthead should get created

@CreateShareLink01
Scenario: Verify that user is able to create an activity with Share Link
When user navigates to the EndToEnd folder
When user creates a new Activity for "Share Link" Content and navigates into the same
When user adds the content of the type "Share Link"
When user clicks on the Edit "Share Link" button
When user enters Data into Share Link fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Share Link should get created