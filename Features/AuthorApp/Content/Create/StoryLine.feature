@E2ETest_CMS
Feature: Story Line

Background: 
Given User Logs in as admin user
When User should click on Client Tab
When User should click on Petronas folder
When User click on Automation do not Delete folder
When User click on Sprint 21 folder
When User click on Story Line Auto Content

@StoryLine
Scenario: Verify if User is able to upload StoryLine File

When User click on Edit StoryLine
#When User click on Browse button of StoryLine window
#When User upload StoryLine file as "D:\AutoTestFolder\Test_Quiz" and click on Ok
When User upload StoryLine file and click on Ok
Then the file should be uploaded successfully

@StoryLine
Scenario: Verify if User is able to upload StoryLine Video

When User click on Edit StoryLine
#When User click on Browse button of StoryLine window
#When User upload StoryLine video as "D:\AutoTestFolder\Test_Video" and click on Ok
When User upload StoryLine video and click on Ok
Then the video file should be uploaded successfully