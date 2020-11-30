Feature: RBACParticipant 

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"

    @Sprint26
    @RBAC1
    Scenario: Verify If Participant Permission page is displaying Participant Roles with check by default and permission displyed with check icon

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RABAC Automation' user profile
        When User clicks on Participant Permission Tab
        When User navigate Participant Permission Tab Roles Page
        Then User should see Participant Roles option is checked by default with Permissions



    @Sprint26
    @RBAC2
    Scenario: Verify If Participant Permission page is displaying 'Report Reviewer' Roles with check permission displyed with check icon

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RABAC Automation' user profile
        When User clicks on Participant Permission Tab
        When User navigate Participant Permission Tab Roles Page
        When User click Participant checkbox to uncheck
        When User click Report Reviewer checkbox to check
       Then User should see Report Reviewer Roles  is checked with Permissions



    @Sprint26
    @RBAC3
    Scenario: Verify If Participant Permission page is displaying 'Participant Team Lead' Roles with check permission displyed with check icon

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RABAC Automation' user profile
        When User clicks on Participant Permission Tab
        When User navigate Participant Permission Tab Roles Page
        When User click Participant checkbox to uncheck
        When User click Participant Team Lead checkbox to check
       Then User should see Participant Team Lead Roles is checked with Permissions


       
    @Sprint26
    @RBAC4
    Scenario: Verify If Participant Permission page is displaying 'Test User' Roles with check permission displyed with check icon

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RABAC Automation' user profile
        When User clicks on Participant Permission Tab
        When User navigate Participant Permission Tab Roles Page
        When User click Participant checkbox to uncheck
        When User click Test User checkbox to check
        Then User should see Test User Roles is checked with Permissions


    @Sprint26
    @RBAC5
    Scenario: Verify If Participant Permission page is displaying 'UAT User' Roles with check permission displyed with check icon

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RABAC Automation' user profile
        When User clicks on Participant Permission Tab
        When User navigate Participant Permission Tab Roles Page
        When User click Participant checkbox to uncheck
        When User click UAT User checkbox to check
        Then User should see UAT User Roles is checked with Permissions

        
    @Sprint26
    @RBAC6
    Scenario: Verify If Participant Permission page is displaying 'Facilitator' Roles with check permission displyed with check icon

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RABAC Automation' user profile
        When User clicks on Participant Permission Tab
        When User navigate Participant Permission Tab Roles Page
        When User click Participant checkbox to uncheck
        When User click Facilitator checkbox to check
        Then User should see Facilitator Roles is checked with Permissions


