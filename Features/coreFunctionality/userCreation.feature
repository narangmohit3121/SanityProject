Feature: To check the cohort is working

@Test1
Scenario: To check user creation is working

Given I navigate to cohort details page in admin
Then I will click on create user
Then I will enter first name to create user as "ABC"
Then I will enter last name to create user as "ABC D'souza."
Then I will enter email to create user as "abc12@test.com"
Then I will click on generate password
Then I will click on create user button
Then I will check the success messagge is displayed