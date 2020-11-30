Feature: To check forgot password functionality

@forget
Scenario: To check the forget password

Given I will navigate to chevron client
Then I will click on forgot password link
Then I will click on email recovery button
Then I will check the error message is displayed
Then I will enter email on forgot password textbox "tushartest1"
Then I will click on email recovery button
Then I will check the error message is displayed
Then I will enter email on forgot password textbox "tushartest1@.com"
Then I will click on email recovery button
Then I will check the error message is displayed
Then I will enter email on forgot password textbox "tushartest1.com"
Then I will click on email recovery button
Then I will check the error message is displayed
Then I will enter email on forgot password textbox "doesnotexist@gmail.com"
Then I will click on email recovery button
Then I will check the error message is displayed for user does not exist
Then I will enter email on forgot password textbox "tushartest1@mailinator.com"
Then I will click on email recovery button
Then I will open the new tab and check for the emails
Then I will click on submit button of forgot password popup
Then I will check the error is displayed on error
Then I will enter first password in forget password as "ABab12!"
Then I will check for error displayed for mismatch
Then I will enter confirm password in forget password as "ABab12!"
Then I will click on submit button of forgot password popup 
Then I will check for validation message for password criteria special character
Then I will enter first password in forget password as "ABab12$"
Then I will enter confirm password in forget password as "ABab12$"
Then I will click on submit button of forgot password popup
Then I will check error is shown for used password
Then I will enter first password in forget password as "ABab14$"
Then I will enter confirm password in forget password as "ABab14$"
Then I will click on submit button of forgot password popup
Then I will enter email id on chevron as "tushartest1@mailinator.com"
Then I will enter password on chevron as "ABab14$"
Then I will click on login button
Then I will click on profile image