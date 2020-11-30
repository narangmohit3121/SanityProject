Feature: Data Privacy

#Background: 
#Given User should login in with "abhi@bts.com" and "ABab86$"
#When User should click on Client Tab
#When User should click on Petronas folder

@DataPrivacy1
Scenario: User should be able to Toggle on the Data Agreement

Given User should login in with "abhi@bts.com" and "ABab86$"
When User should click on Client Tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/UserApp/Home/Automation DataPrivacy" folder in petronas
When User click on Journey Configuration
When User click on "Data Privacy Agreement" of Journey Configuration Tab
When User toggles On Data Privacy Agreement to make it "Enabled"
#When User fills Policy Text
#When User enters Accept Button Text as "I Accept"
#When User enters Decline Button Text as "I Decline"
#When User fills Decline Modal Message
#When User enters Decline Yes Button Text as "YES"
#When User enters Decline No Button Text as "NO"
Then User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel

@DataPrivacy2
Scenario: Verify when Participant clicks on Decline Agreement and clicks No

Given Participant should login in with "dataprivacyprofile1@petronas.com" and "ABab12$"
When Participant should be able to view Data Privacy Agreement Text
When Participant clicks on "I Decline" button of Data Privacy Agreement
When Participant clicks on "NO" button of Decline Window
Then Participant should be landed to Data Privacy Page itself

@DataPrivacy3
Scenario: Verify when Participant clicks on Decline Agreement and clicks Yes

Given Participant should login in with "dataprivacyprofile1@petronas.com" and "ABab12$"
When Participant should be able to view Data Privacy Agreement Text
When Participant clicks on "I Decline" button of Data Privacy Agreement
When Participant clicks on "YES" button of Decline Window
Then Participant should be landed to Login Page

@DataPrivacy4
Scenario: Verify when Participant clicks on Accept Agreement

Given Participant should login in with "dataprivacyprofile1@petronas.com" and "ABab12$"
When Participant should be able to view Data Privacy Agreement Text
When Participant clicks on "I Accept" button of Data Privacy Agreement
Then Participant should land to Home Page

@DataPrivacy5
Scenario: Verify after accepting Agreement Participant should land to home page

Given Participant should login in with "dataprivacyprofile1@petronas.com" and "ABab12$"
Then Participant should land to Home Page
