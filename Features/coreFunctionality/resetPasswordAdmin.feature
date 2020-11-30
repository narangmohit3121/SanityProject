Feature: To check the reset password functionality

@Test
Scenario: To check reset functionality admin is working

Given I navigate to user details page in admin
Then I will click on Reset Password Button
Then I will click on update password button
Then I will check mandatory field error is shown for password
Then I will enter password in reset password admin as "ABCD"
Then I will click on update password button
Then I will check mandatory field error is shown for confirm password
Then I will enter confirm password in reset password admin as "ABCDE"
Then I will click on update password button
Then I will check error is shown for password mismatch
Then I will enter confirm password in reset password admin as "ABCD"
Then I will click on update password button
Then I will check error is shown for password pattern
Then I will enter password in reset password admin as "ABab12!"
Then I will enter confirm password in reset password admin as "ABab12!"
Then I will click on update password button
Then I will check error is shown for special character
Then I will enter confirm password in reset password admin as "ABab12$"
Then I will enter password in reset password admin as "ABab12$"
Then I will click on update password button
Then I will check error is shown for used password
Then I will enter confirm password in reset password admin as "ABab16$"
Then I will enter password in reset password admin as "ABab16$"
Then I will click on update password button
Then I will check success message for password updation
Then I will navigate to chevron client
Then I will enter email id on chevron as "tushartest2@mailinator.com"
Then I will enter password on chevron as "ABab15$"
Then I will click on login button

