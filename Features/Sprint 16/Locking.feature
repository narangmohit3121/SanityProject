Feature: Locking

Background: 
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

@Sprint16
Scenario: Verify whether Admin 2 is able to see locked Content by Admin 1

When Admin one clicks on Locking Content block
#When Admin two should login with "momenta_qa@bts.com" and "ABab20$"
When User should login in with "momenta_qa@bts.com" and "ABab20$"
When User should click on Client Tab
When User should click on Petronas folder
When Admin two clicks on Locked Content block


Scenario: Verify whether Admin 2 is able to view Read only mode of locked Content by Admin 1

When Admin two should login with "momenta_qa@bts.com" and "ABab20$"