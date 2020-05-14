Feature: Authoring Download PDF

Background:
Given User should login in with "neha.seth@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User should click on Screen Grab Content

@AuthoringDownloadPDF01
Scenario: Verify that Screen Grab Content is available in CMS Authoring page

Then User should check Screen Grab block is present under CMS