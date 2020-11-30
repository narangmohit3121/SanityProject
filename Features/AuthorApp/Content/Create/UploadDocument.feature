Feature: Upload Document

@UploadDocument
@UploadDocument1
Scenario: Verify if User is able to select all 4 types of Files

Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

#Word File Type
When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create/Automation Upload Document" folder in petronas
When User collapses the content
When user adds the content of the type "Upload Document"
When User collapses the content
When user clicks on the Edit "Upload Document" button
When User enters Journey Script Id as "Word"
When User selects File Type as "Word"
When User sets Max File Size as "10"
When User sets Mandatory option to "On"
When User enters Instructions as "Test Test Test Test"
When User clicks on Ok button of Upload Document

#Excel File Type
When user adds the content of the type "Page Divider"
When User collapses the content
When user adds the content of the type "Upload Document"
When User collapses the content
When user clicks on the Edit "2" of "Upload Document" button
When User enters Journey Script Id as "Word"
When User selects File Type as "Excel"
When User sets Max File Size as "10"
When User sets Mandatory option to "On"
When User enters Instructions as "Test Test Test Test"
When User clicks on Ok button of Upload Document

#PDF File Type
When user adds the content of the type "Page Divider"
When User collapses the content
When user adds the content of the type "Upload Document"
When User collapses the content
When user clicks on the Edit "3" of "Upload Document" button
When User enters Journey Script Id as "Word"
When User selects File Type as "PDF"
When User sets Max File Size as "10"
When User sets Mandatory option to "On"
When User enters Instructions as "Test Test Test Test"
When User clicks on Ok button of Upload Document

#PPT File Type
When user adds the content of the type "Page Divider"
When User collapses the content
When user adds the content of the type "Upload Document"
When User collapses the content
When user clicks on the Edit "4" of "Upload Document" button
When User enters Journey Script Id as "Word"
When User selects File Type as "PPT"
When User sets Max File Size as "10"
When User sets Mandatory option to "On"
When User enters Instructions as "Test Test Test Test"
When User clicks on Ok button of Upload Document
When User Saves Draft and Publishes the Content and then clicks on Exit Editor

@UploadDocument
@UploadDocument2
Scenario: Verify if Participant is able to view File Types

Given Participant should login in with "uploaddocumentprofile2@petronas.com" and "ABab12$"
When Participant starts first Activity as "Upload Document Activity"
When Participant clicks on Browse button
When Participant validates file is uploaded successfully as "Format.docx"
When User clicks on Continue Button

When Participant clicks on Browse button of "D:/UploadDoc/ExcelFormat.xlsx"
When Participant validates file is uploaded successfully as "ExcelFormat.xlsx"
When User clicks on Continue Button

When Participant clicks on Browse button of "D:/UploadDoc/PDFFormat.pdf"
When Participant validates file is uploaded successfully as "PDFFormat.pdf"
When User clicks on Continue Button

When Participant clicks on Browse button of "D:/UploadDoc/PPTFormat.pptx"
When Participant validates file is uploaded successfully as "PPTFormat.pptx"
#When User clicks on Continue Button

#@UploadDocument
@UploadDocument3
Scenario: Verify if User is able to update all 4 types of Files

Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder

When User navigates to "Automation Folder_DONOT DELETE/AuthorApp/Content/Create/Automation Upload Document" folder in petronas
When User collapses the content
When user clicks on the Edit "Upload Document" button
When User sets Max File Size as "2"
When User sets Mandatory option to "Off"
When User clicks on Ok button of Upload Document

When user clicks on the Edit "2" of "Upload Document" button
When User sets Max File Size as "2"
When User sets Mandatory option to "Off"
When User clicks on Ok button of Upload Document

When user clicks on the Edit "3" of "Upload Document" button
When User sets Max File Size as "2"
When User sets Mandatory option to "Off"
When User clicks on Ok button of Upload Document

When user clicks on the Edit "4" of "Upload Document" button
When User sets Max File Size as "2"
When User sets Mandatory option to "Off"
When User clicks on Ok button of Upload Document
When User Saves Draft and Publishes the Content and then clicks on Exit Editor

@UploadDocument
@UploadDocument4
Scenario: Verify if User is getting error when trying to upload higher MB file

Given Participant should login in with "uploaddocumentprofile3@petronas.com" and "ABab12$"
When Participant starts first Activity as "Upload Document Activity"
When Participant clicks on Browse button of "D:/UploadDocMB/WordFormat.docx"
When Participant validates the error message
When User clicks on Continue Button

When Participant clicks on Browse button of "D:/UploadDocMB/ExcelFormat.xlsx"
When Participant validates the error message
When User clicks on Continue Button

When Participant clicks on Browse button of "D:/UploadDocMB/PDFFormat.pdf"
When Participant validates the error message
When User clicks on Continue Button

When Participant clicks on Browse button of "D:/UploadDocMB/PPTFormat.pptx"
When Participant validates the error message
#When User clicks on Continue Button