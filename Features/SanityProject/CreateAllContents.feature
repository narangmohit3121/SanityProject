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

