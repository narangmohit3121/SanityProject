Feature: Multi Select Input block Scenario

Background: 

Given Participant should login in with "single_n_multiselect@petronas.com" and "ABab12$"

@Sprint6
@MultiSelect1
Scenario: Verify if participant user see all checkbox by default are unchecked when page is loaded first time

When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
When Participant  click continue button and navigate on next activity page
Then Participant should see all multi select items are unselected with unchecked items


@Sprint6
@MultiSelect2
Scenario: Verify if participant user see  checkbox is checked after user clicked on option

When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
When Participant  click continue button and navigate on next activity page
When Participant click angular checkbox option
Then Participant should see angular checkbox item is checked and selected


@Sprint6
@MultiSelect3
Scenario: Verify if participant user is not allowed to to select more than one option as it is set minimum one by admin
When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
When Participant  click continue button and navigate on next activity page
When Participant click angular checkbox option
When Participant click protractor checkbox option
Then Participant should not allowed to select protractor checkbox item


@Sprint6
@MultiSelect4
Scenario: Verify if participant user is not allowed to select more than three option as it is set maximum three by admin
When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
When Participant  click continue button and navigate on next activity page
When Participant select four options as Angular Protractor Postman Jenkin 
Then Participant should not allowed to select four items


@Sprint6
@MultiSelectDropdown5
Scenario: Verify if participant user is able to see multi select dropdown author by admin
When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
When Participant  click continue button and navigate on next activity page
When Participant select four options as Angular Protractor Postman Jenkin 
When Participant  click continue button and navigate on next activity page
Then Participant should see multiselect dropdown displayed


@Sprint6
@MultiSelectDropdown6
Scenario: Verify if participant should not be allowed to select more than two options which is set by minimum 2 by admin
When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
When Participant  click continue button and navigate on next activity page
When Participant select four options as Angular Protractor Postman Jenkin 
When Participant  click continue button and navigate on next activity page
When Participant click on arrow of Our Customers multiselect dropdown
When Participan select three option as Microsoft Coca cola Petronas from multiselect dropdown
When Participant should not be allowed to select more than two options which is set by minimum 2 by admin 


@Sprint6
@MultiSelectDropdown7
Scenario: Verify if participant should not be allowed to select more than three options which is set by maximum 3 by admin
When Participant clicks on start button of module one to complete all activiites
When Participant navigates to activity and select delhi as city
When Participant  click continue button and navigate on next activity page
When Participant select Momenta and its description as long single select option
When Participant  click continue button and navigate on next activity page
When Participant select four options as Angular Protractor Postman Jenkin 
When Participant  click continue button and navigate on next activity page
When Participant click on arrow of Our Customers multiselect dropdown
When Participan select four options as Microsoft Coca cola Petronas Chevron from multiselect dropdown
When Participant should not be allowed to select more than three options which is set maximum 3 by admin