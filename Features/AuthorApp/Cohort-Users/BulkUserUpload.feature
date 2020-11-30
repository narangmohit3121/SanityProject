@E2ECohortUsers
Feature: Bulk User Upload

Background: 
Given User should login in with "qa_momenta@bts.com" and "ABab12$"
When User should click on Client Tab
When User should click on Petronas folder
When User click on user tab
#When User click on View More
#When User click on Bulk Upload Auto Jrn
When User searches Journey in Filter Journeys as "Bulk Upload Auto Jrn" and clicks on it

# @E2ECohortUsers
@BulkUserUpload1
Scenario: Verify if User is able to Bulk Upload at Journey level

When User click on Import button for Bulk Upload
When User creates excel file with userid as "bulkuserupload" domain as "@petronas.com" and read excel path "bulkUploadFILE.xlsx" and write excel path "bulkUploadFILE.xlsx"
When User upload bulk upload file as "bulkUploadFILE.xlsx" and click on Upload
Then User validates success message

# @E2ECohortUsers
# @BulkUserUpload
Scenario: Verify if User is able to Bulk Upload at Journey level using randomize check

When User click on Import button for Bulk Upload
When User checks Randomize in to multiple cohort
#When User creates excel file with userid as "bulkuserupload" domain as "@nestle.com" and path "D:\\Automation\\momentafunctionalautomation\\TestData/bulkUploadFILE_R.xlsx"
#When User upload bulk upload file as "D:/Automation/momentafunctionalautomation/TestData/bulkUploadFILE.xlsx" and click on Upload
When User creates excel file with userid as "bulkuserupload" domain as "@petronas.com" and read excel path "bulkUploadFILE_R.xlsx" and write excel path "bulkUploadFILE_R.xlsx"
When User upload bulk upload file as "bulkUploadFILE_R.xlsx" and click on Upload
Then User validates success message

# @E2ECohortUsers
# @BulkUserUpload
Scenario: Verify if User is able to Bulk Upload at Cohort level

#When User click on Bulk Upload Auto Cohort
When User clicks on Cohort under Cohort listing page as "Bulk Upload Auto Chrt"
When User click on Cohort Fucntion
When User click on Import button for Bulk Upload
When User creates excel file with userid as "bulkuserupload" domain as "@petronas.com" and read excel path "bulkUploadFILE.xlsx" and write excel path "bulkUploadFILE.xlsx"
#When User upload bulk upload file as "D:/Automation/momentafunctionalautomation/TestData/bulkUploadFILE.xlsx" and click on Upload
When User upload bulk upload file as "bulkUploadFILE.xlsx" and click on Upload
Then User validates success message

#@BulkUserUpload4
#Scenario: Verify if User is assigned with correct Team after Bulk Upload

#When User click on Bulk Upload Auto Cohort
#When User click on user name ""
#When User click on Teams of the User
#Then User verifies Teams and Sub Teams under dropdown of the User