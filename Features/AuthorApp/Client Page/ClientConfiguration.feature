@E2ETest_ClientPage
Feature: Client Configuration Scenario

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"
    
    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration1
    Scenario: Verify if all tabs on client configuration page are visible
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        Then User should check if all tabs are visible on Client Configuration page

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration2
    Scenario: Verify if options under Configuration tab is visible
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Configuration Tab
        Then User should check all options present under Configuration Tab

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration3
    Scenario: Verify if user can view list of industry under select industry dropdown and select one of them
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Configuration Tab
        Then User should should be able to select the dropdown option from select industry

    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration4
    Scenario: Verify if user can edit domain location and save changes
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Configuration Tab
        When User should enter valid domain name in Enter Domain Location text field
        Then User clicks on Save button

    @Sprint3
    @ClientConfiguration5
    Scenario: Verify if cancel button  is functional
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Configuration Tab
        Then User should click on Cancel button

    @Sprint3
    @ClientConfiguration6
    Scenario: Verify if user can save domain location name without .com or .in
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Configuration Tab
        When User should enter invalid domain name in Enter Domain Location text field
        Then User clicks on Save button

    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration7
    Scenario: Verify if clicking on Logo Fonts is clickable and functional
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Logo Fonts Tab
        Then User should view contents under Logo Fonts Tab

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration8
    Scenario: Verify if user can click on 'Select Font Family' dropdown and select anyone of  them
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Logo Fonts Tab
        Then User should should be able to select the dropdown option from select font family

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration9
    Scenario: Verify if user  can view list of options after clicking on 'Color Palette'
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        Then User should view contents under Color Palette Tab

    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration10
    Scenario: Verify if user can close  the  client configuration window by clicking on close icon
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        Then User should be able to close Client Configuration window by clicking on close icon

    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration11
    Scenario: Verify if 'Enter AWS Region' option is disable
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Configuration Tab
        Then User should check if Enter AWS Region option is disabled

    #    (Color list cannot validate hence commented 12 to 15 )
    # @Sprint3
    # @ClientConfiguration12
    # Scenario: Verify if user  can view list of Primary and Secondary colors after clicking on tab 'Primary Color Palette'
    #     When User should click on Client Tab
    #     When User should click on Petronas folder
    #     When User should click on Client Configuration logo
    #     When User should click on Color Palette Tab
    #     Then User should validate lists of color bars under Primary and Secondary Color Palette

    # @RegressionTest_ClientPage
    # @Sprint3
    # @ClientConfiguration13
    # Scenario: Verify if user  can view list of colors after clicking on tab 'Extended Accents Color Palette'
    #     When User should click on Client Tab
    #     When User should click on Petronas folder
    #     When User should click on Client Configuration logo
    #     When User should click on Color Palette Tab
    #     When User should click on Other Client Color dropdown       
    #     Then User should validate lists of color bars under Extended Accents Color Palette

    # @RegressionTest_ClientPage
    # @Sprint3
    # @ClientConfiguration14
    # Scenario: Verify if user can view the list of colors under Status Indicators menu
    #     When User should click on Client Tab
    #     When User should click on Petronas folder
    #     When User should click on Client Configuration logo
    #     When User should click on Color Palette Tab    
    #     When User should click on Other Client Color dropdown
    #     Then User should validate lists of color bars under Status Indicators menu   

    # @RegressionTest_ClientPage
    # @Sprint3
    # @ClientConfiguration15
    # Scenario: Verify if user can view the list of combination of white colors after clicking on 'Neutrals on White'
    #     When User should click on Client Tab
    #     When User should click on Petronas folder
    #     When User should click on Client Configuration logo
    #     When User should click on Color Palette Tab
    #     When User should click on Neutral Color dropdown
    #     Then User should validate lists of color bars under Neutrals on White

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration16
    Scenario: Verify if  clicking on Drag and Drop file feature to update valid format positive logo is functional
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Logo Fonts Tab
        Then User should click on Positive logo Drap and Drop option

    @Sprint3
    @ClientConfiguration17
    Scenario: Verify if  clicking on Drag and Drop file feature to update valid format Negative logo is functional
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Logo Fonts Tab
        Then User should click on Negative logo Drap and Drop option

    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration18
    Scenario: Verify if Clicking on first Primary Color under 'Color Palette' menu should open a color picker
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        When User should click on first color of Primary Color menu
        Then User should be able to view color picker for Primary color

    @Sprint3
    @ClientConfiguration19
    Scenario: Verify if Clicking on first Secondary Color under 'Color Palette' menu should open a color picker
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        When User should click on first color of Secondary Color menu
        Then User should be able to view color picker for Secondary color

    @Sprint3
    @ClientConfiguration20
    Scenario: Verify if Clicking on first color under 'Neutrals on White' menu should open a color picker
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        When User should click on Neutral Color dropdown
        When User should click on first color of Neutrals on White menu
        Then User should be able to view color picker for Neutrals on White

    @SmokeTest_ClientPage
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration21
    Scenario: Verify if user can change Primary color and save from 'Primary Color Palette' tab
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        When User selects any one of the color from Primary colors
        Then User clicks on Save button

    @Sprint3
    @ClientConfiguration22
    Scenario: Verify if user can change Secondary color and save from 'Primary Color Palette' tab
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        When User selects any one of the color from Secondary colors
        Then User clicks on Save button

    
    @RegressionTest_ClientPage
    @Sprint3
    @ClientConfiguration23
    Scenario: Verify if user can change Status Indicators color and save from 'Extended Accents Color Palette' tab
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        When User should click on Other Client Color dropdown
        When User should click on tab Extended Accents Color Palette
        When User selects any one of the color from Status Indicator colors
        Then User clicks on Save button

    @Sprint3
    @ClientConfiguration24
    Scenario: Verify if user can change color and save from 'Neutrals on White' tab
        When User should click on Client Tab
        When User should click on Petronas folder
        When User should click on Client Configuration logo
        When User should click on Color Palette Tab
        When User should click on Neutral Color dropdown
        When User should click on tab Neutrals on White
        When User selects any one of the color from Neutrals on White
        Then User clicks on Save button