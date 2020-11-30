Feature: Search User Across Journeys

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"


 @Sprint32
 @SearchUserAcrossJourneys1
Scenario: Verify if Admin user is able to see search user textfield to search acrsoss journey

When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User navigate to search user page
Then Search User textfiled should be displayed on search user page



 @Sprint32
 @SearchUserAcrossJourneys2
Scenario: Verify if Admin user is able to search user which is mapped with only one journey

When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User to search user which is mapped with only one journey as "search_user_1_across_journey@petronas.com" 
Then User should see one journey user is searched by admin user


 @Sprint32
 @SearchUserAcrossJourneys3
Scenario: Verify if Admin user is able to search user which is mapped with only one journey

When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User to search user which is mapped with only one journey as "search.user@bts.com" 
Then User should see two journey user is searched by admin user


 @Sprint32
 @SearchUserAcrossJourneys4
Scenario: Verify if User is able to click on User in search list and see 

When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User to search user which is mapped with only one journey as "search_user_1_across_journey@petronas.com" 
When User click on user as search_user_1_across_journey after searched
Then User should see one journey, Client name and DPA status is diplayed with mapped


 @Sprint32
 @SearchUserAcrossJourneys5
Scenario: Verify if User is able to click on OpenArrow and see DPA status as Not Yet Approved if admin has not set as approves same journey

When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User to search user which is mapped with only one journey as "search_user_1_across_journey@petronas.com" 
When User click on user as search_user_1_across_journey after searched
# When User click on OpenArrow to see same user in reset user window
Then User should see use see same user with DPA status as Available in User Journey Card


 @Sprint32
 @SearchUserAcrossJourneys6
Scenario: Verify if User is able to click on OpenArrow and see DPA status as Not Yet Approved if admin has not set as approves same journey

When User should click on Client Tab
When User should click on Petronas folder
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Journey" folder in petronas 
When User clicks on SearchUserAcrossJourney_1 journey
When User click on Journey Configuration
When User click on Data Privacy Agreement option in journey configuration
When User set toggle as enable of Data Privacy Agreement
When User click SAVE button after setting DPA toggle as enable

Given Participant should login in with "search_user_1_across_journey@petronas.com" and "ABab12$"
When User click on Accept button to accept Data Privacy Agreement 

Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User clicks on Users Tab
When User to search user which is mapped with only one journey as "search_user_1_across_journey@petronas.com"
When User click on user as search_user_1_across_journey after searched
Then User should see use see same user with DPA status as Available in User Journey Card
When User click on OpenArrow to see same user in reset user window
Then User should see DPA Approved Date as DPA status

