Feature: To check self registration

Scenario: To check the  validation
Given I navigate to cohort details page in admin and check "0" in the text
Given I will navigate to chevron client
Then I will click on Register new account
Then I will enter journey code as "unverified1234"
Then I will enter email as "tushartest11@gmail.com"
Then I will click on submit button
Then I will click on submit button
Then I will check mandatory error message is displayed for first name
Then I will enter first name as "tushar"
Then I will click on submit button
Then I will check mandatory error message for last name
Then I will enter last name as "test"
Then I will click on submit button
Then I will click on submit button
Then I will check mandatory error message is displayed for password
Then I will enter password as "ABCD"
Then I will click on submit button
Then I will check mandatory error message is displayed for confirm password
Then I will enter confirm password as "ABCD"
Then I will click on submit button
Then I will check mandatory error message is displayed for Terms and Condition
Then I will click on Terms and Condition Box
Then I will click on submit button
Then I will check for validation message for password criteria
Then I will enter password as "ABab12!"
Then I will enter confirm password as "ABab12!"
Then I will click on submit button
Then I will check for validation message for password criteria special character
Then I will enter password as "ABab12$"
Then I will click on submit button
Then I will check for validation message for password mismatch
Then I will enter confirm password as "ABab12$"
Then I will click on submit button
Then I will click on continue button
Given I navigate to cohort details page in admin and check "1" in the text


Scenario: To check the  already registered email validation
Given I will navigate to chevron client
Then I will click on Register new account
Then I will enter journey code as "unverified123"
Then I will enter journey code as "unverified123"
Then I will enter email as "tushartest11@gmail.com"
Then I will enter email as "tushartest11@gmail.com"
Then I will click on submit button

Scenario: To check the with email verified 
