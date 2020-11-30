@EndToEnd1
Feature: Create Contents of All Types

Background: 
Given User should login in with "karthik.avinash@bts.com" and "ABab44$"
When User clicks on client tab
When User navigates to "Sanity_07-13/Automation Folder" folder in "Sanity" Client

@CreateContent02
@CreateVideoContent
Scenario: Verify that user is able to create an activity with Content of the type Video
When user creates a new Activity for "Video" Content and navigates into the same
When user adds the content of the type "Video"
When user clicks on the Edit "Video" button
When user enters data into the fields of Video block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with video content should get created

@CreateContent02
@CreateSingleSelect
Scenario: Verify that user is able to create an activity with Single Select of the type Short-Radio
When user creates a new Activity for "Single Select Radio" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "short"
When user selects the Single Select Sub-Type as "Radio"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Single Select content of the type "Short-Radio" should get created

@CreateContent02
@CreateSingleSelect
Scenario: Verify that user is able to create an activity with Single Select of the type Short-Dropdown
When user creates a new Activity for "Single Select DD" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "short"
When user selects the Single Select Sub-Type as "Dropdown"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Single Select content of the type "Short-Dropdown" should get created

@CreateContent02
@CreateSingleSelect01
Scenario: Verify that user is able to create an activity with Single Select of the type Long
When user creates a new Activity for "Single Select Long" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Single Select Type as "long"
#When user selects the Single Select Sub-Type as "Dropdown"
When user enters data into the fields of Single Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Single Select content of the type "Long" should get created

@CreateContent02
@CreateMultiSelect01
Scenario: Verify that user is able to create an activity with Multi Select of the type Checkbox
When user creates a new Activity for "Multi Select CB" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Multiple Select Tab
When user selects the Multi Select Type as "short"
When user selects the Multi Select Sub-Type as "Checkbox"
When user enters data into the fields of Multi Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Multi Select content of the type "Short-Checkbox" should get created

@CreateContent02
@CreateMultiSelect01
Scenario: Verify that user is able to create an activity with Multi Select of the type Dropdown
When user creates a new Activity for "Multi Select DD" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Multiple Select Tab
When user selects the Multi Select Type as "short"
When user selects the Multi Select Sub-Type as "Dropdown"
When user enters data into the fields of Multi Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Multi Select content of the type "Short-Dropdown" should get created

@CreateContent02
@CreateMultiSelect01
Scenario: Verify that user is able to create an activity with Multi Select of the type Long
When user creates a new Activity for "Multi Select Long" Content and navigates into the same
When user adds the content of the type "Selection"
When user clicks on the Edit "Single Select" button
When user selects the Multiple Select Tab
When user selects the Multi Select Type as "long"
#When user selects the Single Select Sub-Type as "Dropdown"
When user enters data into the fields of Multi Select block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Multi Select content of the type "Long" should get created

@RadioButtonMatrix01
@CreateContent01
Scenario: Verify that user is able to an activity with Radio Button Matrix
When user creates a new Activity for "Radio Button Matrix" Content and navigates into the same
When user adds the content of the type "Radio Button Matrix"
When user clicks on the Edit "Radio Button Matrix" button
When user enters data into the fields of Radio Button Matrix block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Radio Button Matrix Content should get created

@DiscussionThread01
@CreateContent01
Scenario: Verify that user is able to create an activity with create Discussion Thread 
When user creates a new Activity for "Discussion Thread" Content and navigates into the same
When user adds the content of the type "Discussion Thread"
When user clicks on the Edit "Discussion Thread" button
When User enters data into the fields of Discussion thread block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Discussion thread Content should get created


@CreateContentBlock01
@CreateContent01
Scenario: Verify that user is able to create an activity with Content Block
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
@CreateContent01
Scenario: Verify that user is able to create an activity with Response Graph
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
@CreateContent01
Scenario: Verify that user is able to create an activity with Download Block
When user creates a new Activity for "Download" Content and navigates into the same
When user adds the content of the type "Download"
When user clicks on the Edit "Download" button
When user selects the option Upload Momenta Content Doc and uploads a file
When user enters data into the fields of Download Block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Download Block should get created

@CreateTextImage01
@CreateContent01
Scenario: Verify that user is able to create an activity with Text and Image Block
When user creates a new Activity for "Text and Image" Content and navigates into the same
When user adds the content of the type "Text & Image"
When user clicks on the Edit "Text & Image" button
When User updates the description of Text and Image Block
When User attaches an image to Text and Image by using BROWSE button
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Text and Image Block should get created

@CreateCohortResponse01
@CreateContent01
Scenario: Verify that user is able to create an activity with Cohort Response
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
@CreateContent01
Scenario: Verify that user is able to create an activity with Participant Response
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
@CreateContent01
Scenario: Verify that user is able to create an activity with Card Blocks
When user creates a new Activity for "Cards" Content and navigates into the same
When user adds the content of the type "Cards"
When user clicks on the Edit "Cards" button
When user enters Data into Cards fields and saves changes
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Cards should get created

@CreateWordcloud01
@CreateContent01
Scenario: Verify that user is able to create an activity with WordCloud
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
@CreateContent01
Scenario: Verify that user is able to create an activity with Custom Code
When user creates a new Activity for "Custom Code" Content and navigates into the same
When user adds the content of the type "Custom Code"
When user clicks on the Edit "Custom Code" button
When User enters some code into Custom Code Block
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Custom Code should get created

@CreateGenerateDocument01
@CreateContent01
Scenario: Verify that user is able to create an activity with Generate Document
When user creates a new Activity for "Generate Document" Content and navigates into the same
When user adds the content of the type "Generate Document"
When user clicks on the Edit "Generate Document" button
When user selects the option Upload Momenta Content Doc and uploads a file
When user enters Data into Generate Document fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Generate Document should get created

@CreateMasthead01
@CreateContent01
Scenario: Verify that user is able to create an activity with Masthead
When user creates a new Activity for "Masthead" Content and navigates into the same
When user adds the content of the type "Masthead"
When user clicks on the Edit "Masthead" button
When user enters Data into Masthead fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Masthead should get created

@CreateShareLink01
@CreateContent01
Scenario: Verify that user is able to create an activity with Share Link
When user creates a new Activity for "Share Link" Content and navigates into the same
When user adds the content of the type "Share Link"
When user clicks on the Edit "Share Link" button
When user enters Data into Share Link fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Share Link should get created

@CreateNestedContent01
@CreateContent01
Scenario: Verify that user is able to create an activity with Nested Content
When user creates a new Activity for "Nested Content" Content and navigates into the same
When user adds the content of the type "Nested Content"
When user clicks on the Edit "Nested Content" button
When user enters Data into Nested Content fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Nested Content should get created

@CreateCallout01
@CreateContent01
Scenario: Verify that user is able to create an activity with Callout
When user creates a new Activity for "Callout" Content and navigates into the same
When user adds the content of the type "Callout"
When user clicks on the Edit "Callout" button
When user enters Data into Callout fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Callout should get created

@CreateStoryLine01
@CreateContent01
Scenario: Verify that user is able to create an activity with StoryLine
When user creates a new Activity for "Storyline" Content and navigates into the same
When user adds the content of the type "Storyline"
When user clicks on the Edit "Storyline" button
When user enters Data into Storyline fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Storyline should get created

@CreateImage01
@CreateContent01
Scenario: Verify that user is able to create an activity with Callout
When user creates a new Activity for "Image" Content and navigates into the same
When user adds the content of the type "Image"
When user clicks on the Edit "Image" button
When user enters Data into Image fields
When User saves the changes made to the content
When User Saves Draft and Publishes the Content and then clicks on Exit Editor
Then the activity with Image should get created