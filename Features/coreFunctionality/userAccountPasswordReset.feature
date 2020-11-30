Feature: user profile  change password


@Test2
Scenario: To check the user change password

Given I will navigate to chevron client
Then I will enter email id on chevron as "abc1234@test.com"
Then I will enter password on chevron as "ABab13$"
Then I will click on login button
Then I will click on profile image
Then I will click on create new password button
Then I will click on submit button on create new password popup
Then I will check the validation message is displayed for User Account Password mandatory field
Then I will enter password for User Account Password as "ABab156$"
Then I will click on submit button on create new password popup
Then I will check the validation message is displayed for User Account Password mismatch
Then I will enter password for User Account Password as "ABab13$"
Then I will click on submit button on create new password popup
Then I will check the validation message is displayed for User Account Password match
Then I will click on submit button on create new password popup
Then I will check the validation message is displayed for password format
Then I will enter password for User Account First Password as "ABAB13$"
Then I will enter password for User Account Second Password as "ABAB13$"
Then I will click on submit button on create new password popup 
Then I will check the validation message is displayed for password lower case 
Then I will enter password for User Account First Password as "ABab13"
Then I will enter password for User Account Second Password as "ABab13"
Then I will click on submit button on create new password popup
Then I will check the validation message is displayed for special character  
Then I will enter password for User Account First Password as "ABab13!"
Then I will enter password for User Account Second Password as "ABab13!"
Then I will click on submit button on create new password popup
Then I will check the validation message is displayed for Specific special character  
Then I will enter password for User Account First Password as "ABab12$"
Then I will enter password for User Account Second Password as "ABab12$"
Then I will click on submit button on create new password popup
Then I will check error is shown for used password   
Then I will enter password for User Account First Password as "ABab14$"
Then I will enter password for User Account Second Password as "ABab14$"
Then I will click on submit button on create new password popup
Then I will check the success message is displayed