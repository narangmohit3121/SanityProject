Feature: RBAC Folder Permissions

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"

    @Sprint23
    @RBAC1
    Scenario: Verify if Admin User is able to give Folder permission to user for Petronas Client

        When User should click on Client Tab
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'Folder Permission Petronas' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' petronas'
        When User selects ' RBAC Folder Permission Automation DND ' folder from given folder list
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User switched to Client tab under Permission page
        When User validates if permission got added for Petronas as JSM for RBAC Folder Permission
        When User clicks on SAVE button from permission landing Page
        When User should login in with "folderpermissionpetronas@bts.com" and "ABab12$%"
        When User should click on 'petronas' client
        When User clicks on 'RBAC Folder Permission Automation DND' folder
        When User validates JSM permissions along with Folder permissions for Petronas
        When User clicks on Users Tab
        When User clicks on 'RBAC Folder Automation' journey under journey list
        When User validates if Create Cohort button is visible




    @Sprint23
    @RBAC2
    Scenario: Verify if Admin User is able to give Folder permission to user for QA collection master collection

        When User should click on Client Tab
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'Folder QA collection perm' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' QA Collection'
        When User selects ' RBAC Folder Permission QA collection ' folder from given folder list
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        # When User switched to Client tab under Permission page
        When User validates if permission got added for QA Collection as JSM for RBAC Folder Permission
        When User clicks on SAVE button from permission landing Page
        When User should login in with "folderperqacollection@bts.com" and "ABab12$%"
        When User should click on 'QA Collection' master collection
        When User clicks on 'RBAC Folder Permission QA collection' folder
        When User validates JSM permissions along with Folder permissions for QA collection


    @Sprint23
    @RBAC3
    Scenario: Verify If Admin User is able to add Permission as Collection owner for QA collection from Admin Landing Page

        When User should click on Client Tab
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Automation' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' QA Collection'
        When User selects Collection Owner option from list
        When User clicks on SAVE button
        When User validates if permission got added for QA collection as Collection owner
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view CREATE USER & ADD USER buttons


    @Sprint23
    @RBAC4
    Scenario: Verify If Admin User is able to add Permission as Author for Petronas from Admin Landing Page

        When User should click on Client Tab
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Automation' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' petronas'
        When User selects Author option from list
        When User clicks on SAVE button
        When User switched to Client tab under Permission page
        When User validates if permission got added for Petronas as Author
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view CREATE USER & ADD USER buttons


    @Sprint23
    @RBAC5
    Scenario: Verify If Admin User is able to add Permission as Collection Administrator for Petronas from Admin Landing Page

        When User should click on Client Tab
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Automation' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' petronas'
        When User selects Collection Administrator option from list
        When User clicks on SAVE button
        When User switched to Client tab under Permission page
        When User validates if permission got added for Petronas as Collection Administrator
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view CREATE USER & ADD USER buttons

    @Sprint23
    @RBAC6
    Scenario: Verify If Admin User is able to select Global System Admin under Admin Permissions for BTS

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RBAC Automation BTS' user profile
        When User clicks on Admin Permission Tab
        When User selects Global System Admin checkbox
        When User clicks on SAVE button from permission landing Page
        When User clicks on 'RBAC Automation BTS' user profile
        When User clicks on Admin Permission Tab
        When User validates if permission got added for BTS as Global System Admin
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view CREATE USER & ADD USER buttons


    @Sprint23
    @RBAC7
    Scenario: Verify If Admin User is able to select Global Developer under Admin Permissions for BTS

        When User should click on Client Tab
        When User should click on 'BTS' client
        When User clicks on Users Tab
        When User clicks on 'BTS Test' journey under journey list
        When User clicks on ' BTSAdmins ' cohort under cohort list
        When User clicks on 'RBAC Automation BTS' user profile
        When User clicks on Admin Permission Tab
        When User selects Global developer checkbox
        When User clicks on SAVE button from permission landing Page
        When User clicks on 'RBAC Automation BTS' user profile
        When User clicks on Admin Permission Tab
        When User validates if permission got added for BTS as Global developer
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view CREATE USER & ADD USER buttons



    @Sprint23
    @RBAC8
    Scenario: Verify If Admin User is able to select JSM under Admin Permissions for Petronas

        When User should click on Client Tab
        When User should click on 'petronas' client
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Automation Petronas' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User switched to Client tab under Permission page
        When User validates if permission got added for Petronas as JSM
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view ADD USER buttons after landing on permission page of Petronas/BTS


    @Sprint23
    @RBAC9
    Scenario: Verify If Admin User is able to add multiple permissions to QA collection master

        When User should click on Client Tab
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Master Multi Permissions' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' QA Collection'
        When User selects Collection Owner option from list
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' Leadership'
        When User selects Author option from list
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' Sales'
        When User selects Collection Administrator option from list
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' Oil & Gas'
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' Innovation'
        When User selects Collection Owner option from list
        When User clicks on SAVE button
        When User validates if permission got added for multiple master level permissions
        When User deletes the added permission
        When User deletes the added permission
        When User deletes the added permission
        When User deletes the added permission
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view CREATE USER & ADD USER buttons



    @Sprint23
    @RBAC10
    Scenario: Verify If Admin User is able to add permissions to multiple clients

        When User should click on Client Tab
        When User should click on 'petronas' client
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Clients Multi Permissions' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User lands on Client Landing Page
        When User should click on 'BTS' client
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Clients Multi Permissions' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User lands on Client Landing Page
        When User should click on 'coca-cola' client
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Clients Multi Permissions' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User lands on Client Landing Page
        When User should click on 'Chevron Corporation' client
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Clients Multi Permissions' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User lands on Client Landing Page
        When User should click on 'Microsoft' client
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Clients Multi Permissions' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects Journey Success Manager checkbox
        When User clicks on SAVE button
        When User lands on Client Landing Page
        When User should click on 'petronas' client
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC Clients Multi Permissions' user profile
        When User switched to Client tab under Permission page
        When User validates if permission got added for Petronas as JSM
        When User deletes the added permission
        When User clicks on SAVE button from permission landing Page
        Then User is able to view ADD USER buttons after landing on permission page of Petronas and BTS



    @Sprint23
    @RBAC11
    Scenario: Verify If Admin User is able to add permissions to multiple clients

        When User should click on Client Tab
        When User clicks on Manage Permissions button
        When User can view list of Users
        When User clicks on 'RBAC OneClientMultiPer' user profile
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' petronas'
        When User selects Collection Administrator option from list
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' BTS'
        When User selects Collection Administrator option from list
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' Chevron Corporation'
        When User selects Collection Administrator option from list
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' Microsoft'
        When User selects Collection Administrator option from list
        When User clicks on SAVE button
        When User clicks on ADD NEW PERMISSION
        When User selects value from Collections dropdown as ' coca-cola'
        When User selects Collection Administrator option from list
        When User clicks on SAVE button
        When User switched to Client tab under Permission page
        When User validates if permission got added for Petronas as Collection Administrator



