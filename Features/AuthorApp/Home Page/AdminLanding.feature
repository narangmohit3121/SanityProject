Feature: Admin Landing Page Scenario

    Background:
        Given User should login in with "qa_momenta@bts.com" and "ABab12$"

    @Regression_HomePage
    @Sprint2
    @AdminLanding1
    Scenario: Verify if clickable logo is present on UI landing page.

        Then User should be able to see clickable logo on Landing Page

    @Regression_HomePage
    @Sprint2
    @AdminLanding2
    Scenario: Verify if collections under Master tab is present

        Then User should able to see all the collections under Master tab

    @Regression_HomePage
    @Sprint2
    @AdminLanding3
    Scenario: Verify if user is redirecting to 'Master Collection Landing Page' when clicking on particular collection under Master tab

        When User clicks on Master tab TAB
        When User clicks on any of the Master collection loaded
        Then User should be able to see Master collection landing page with title

    @Regression_HomePage
    @Sprint2
    @AdminLanding4
    Scenario: Verify if user is able to view signout under "more" icon beside logo

        When User clicks on more icon
        Then User should be able to see Signout option

    @Regression_HomePage
    @Sprint2
    @AdminLanding5
    Scenario: Verify if user is logged out and redirected to login page

        When User clicks on more icon
        When User clicks on signout button
        Then User should be logged out and landed to Login Page

    @Regression_HomePage
    @Sprint2
    @AdminLanding6
    Scenario: Verify User clicks on refresh option and still be on same page after reloading of wegpage

        When User clicks on refresh
        Then User should stay on Admin Landing Page