import {When, Then} from "cucumber"
import {browser, protractor, element, By, ElementFinder} from "protractor"
import { AssignTeamLeadPage } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AssignTeamLead";
import chai = require('chai');
let expect = chai.expect;
import {Workbook, Row, Cell, Worksheet} from "exceljs"
let path = require("path");
import { join } from "path";
var EC = protractor.ExpectedConditions;
import { BulkUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/BulkUserUploadPage";
let bulkuserupload = new BulkUserPageLocate();
let assignteamlead = new AssignTeamLeadPage();

let expleadEmail = 'teamleadprofile8@petronas.com';
let expupdatedleadEmail = 'teamleadprofile7@petronas.com';



// var userEmail1 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";
// var userEmail2 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";
// var userEmail3 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";
// var userEmail4 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";

// var wb = new Workbook();

// wb.xlsx.readFile("D:\\Automation\\momentafunctionalautomation\\TestData\\bulkUploadFILE.xlsx").then(async function(){
//   let sheet:Worksheet = wb.getWorksheet("Data");

//   sheet.getRow(2).getCell(3).value = userEmail1;
//   sheet.getRow(3).getCell(3).value = userEmail2;
//   sheet.getRow(4).getCell(3).value = userEmail3;
//   sheet.getRow(5).getCell(3).value = userEmail4;

//   wb.xlsx.writeFile("D:\\Automation\\momentafunctionalautomation\\TestData\\bulkUploadFILE.xlsx");
// })

When('User changes Default number of Teams to {string} and Default maximum number of people to {string}', async function (string, string2) {
    await browser.wait(EC.visibilityOf(assignteamlead.inputNoOfTeams)).then(async function(){
        await assignteamlead.inputNoOfTeams.clear().then(async function(){
            await assignteamlead.inputNoOfTeams.sendKeys(string);
        })
    })
    await browser.wait(EC.visibilityOf(assignteamlead.inputNoOfPeople)).then(async function(){
        await assignteamlead.inputNoOfPeople.clear().then(async function(){
            await assignteamlead.inputNoOfPeople.sendKeys(string2);
        })
    })
});

When('User clicks on select all check box', async function () {
    await browser.wait(EC.visibilityOf(assignteamlead.chkSelectAll)).then(async function(){
        browser.actions().mouseMove(assignteamlead.chkSelectAll).click().perform();
        //await assignteamlead.chkSelectAll.click();
    })
});

When('User clicks on Actions dropdown', async function () {
    await browser.wait(EC.visibilityOf(assignteamlead.drpActions)).then(async function(){
        await assignteamlead.drpActions.click().then(async function(){
            await browser.sleep(2000);
        })
    })
});

// When('User creates excel file', async function () {
//         await assignteamlead.bulkUpload('bulkuserupload','@petronas.com','D:/Automation/momentafunctionalautomation/TestData/bulkUploadFILE.xlsx');
// });

let excelReadPath: string = join(process.cwd(), 'TestData','BulkUpd','bulkUploadFILE.xlsx');
let excelWritePath: string = join(process.cwd(), 'TestData','bulkUploadFILE.xlsx');

var userEmail1:string;
var userEmail2:string;
var userEmail3:string;
var userEmail4:string;
var Title:string;

/*
When('User creates excel file with userid as {string} domain as {string} and path {string}', async function (emailid,domain,exlpath) {
     userEmail1 = emailid + Math.floor(Math.random()*100000) + domain;
     userEmail2 = emailid + Math.floor(Math.random()*100000) + domain;
     userEmail3 = emailid + Math.floor(Math.random()*100000) + domain;
     userEmail4 = emailid + Math.floor(Math.random()*100000) + domain;

    var wb = new Workbook();

    //wb.xlsx.readFile("D:\\Bulk Upload\\Test\\bulkUploadFILE.xlsx").then(async function(){
    wb.xlsx.readFile(excelReadPath).then(async function(){
    let sheet:Worksheet = wb.getWorksheet("Data");

    sheet.getRow(2).getCell(3).value = userEmail1;
    sheet.getRow(3).getCell(3).value = userEmail2;
    sheet.getRow(4).getCell(3).value = userEmail3;
    sheet.getRow(5).getCell(3).value = userEmail4;

    wb.xlsx.writeFile(exlpath);
    })
    console.log(userEmail1);
    console.log(userEmail2);
});
Temp dis
*/ 
When('User creates excel file with userid as {string} domain as {string} and read excel path {string} and write excel path {string}', async function (emailid,domain,exlreadpath,exlpath) {
    
    let excelReadPath: string = join(process.cwd(), 'TestData','BulkUpd',exlreadpath);
    let excelWritePath: string = join(process.cwd(), 'TestData',exlpath);

    userEmail1 = emailid + Math.floor(Math.random()*100000) + domain;
    userEmail2 = emailid + Math.floor(Math.random()*100000) + domain;
    userEmail3 = emailid + Math.floor(Math.random()*100000) + domain;
    userEmail4 = emailid + Math.floor(Math.random()*100000) + domain;
    //Title = Math.floor(Math.random()*100000) + teamttl;


   var wb = new Workbook();

   //wb.xlsx.readFile("D:\\Bulk Upload\\Test\\bulkUploadFILE.xlsx").then(async function(){
   wb.xlsx.readFile(excelReadPath).then(async function(){
   let sheet:Worksheet = wb.getWorksheet("Data");

   sheet.getRow(2).getCell(3).value = userEmail1;
   sheet.getRow(3).getCell(3).value = userEmail2;
   sheet.getRow(4).getCell(3).value = userEmail3;
   sheet.getRow(5).getCell(3).value = userEmail4;
   //sheet.getRow(1).getCell(7).value = Title;

   wb.xlsx.writeFile(excelWritePath);
   })
   console.log(userEmail1);
   console.log(userEmail2);
});


When('User selects option Add to a Teams', async function () {
    await browser.wait(EC.visibilityOf(assignteamlead.optAddToTeams)).then(async function(){
        await assignteamlead.optAddToTeams.click().then(async function(){
            await browser.sleep(2000);
        })
    })
});

When('User clicks on Add to Teams as {string} and selects Team as {string}', async function (teamText, teamName) {
    let teamTxt: string = "(//label[contains(text(),'" + teamText + "')]//following::input[@aria-label='Add to teams'])[1]"
    let teamNme: string = "//span[contains(text(),'" + teamName + "')]"
    // await browser.wait(EC.visibilityOf(assignteamlead.inputAddTeams))
    //     await assignteamlead.inputAddTeams.click().then(async function(){
    //         await browser.wait(EC.visibilityOf(assignteamlead.optTeams)).then(async function(){
    //             await assignteamlead.optTeams.click();
    //         })
    //     })
    await element(By.xpath(teamTxt)).click().then(async function(){
        await element(By.xpath(teamNme)).click().then(async function(){
            await browser.sleep(2000);
        })
    })
    
});


Then('User adds user as {string} to Team and Saves', async function (userName) {
    await browser.wait(EC.visibilityOf(assignteamlead.inputAddTeamLead)).then(async function(){
        await assignteamlead.inputAddTeamLead.click().then(async function(){
            let userNme: string = "//span[contains(text(),'" + userName + "')]"
            //let userNme: string = "//span[contains(text(),'" + userEmail1 + "')]"
            await element(By.xpath(userNme)).click().then(async function(){
                await browser.sleep(4000);
            })
            // await browser.wait(EC.visibilityOf(assignteamlead.optTeamLeads)).then(async function(){
            //     await assignteamlead.optTeamLeads.click();
            // })
        })
    })
        await assignteamlead.btnSaveAddUsers.isDisplayed().then(async function(){
            await assignteamlead.btnSaveAddUsers.click().then(async function(){
                await browser.sleep(4000);
            })
        })
});

When('User upload bulk upload file of Assign TeamLead and click on Upload', async function () {
    let asgnTmLd = "D:/Bulk Upload/TeamLead.xlsx";
    let fpath = path.resolve("D:",asgnTmLd);
    await bulkuserupload.txtBrowserFile.isDisplayed().then(async function(){
      await bulkuserupload.txtBrowserFile.sendKeys(fpath).then(async function(){
        await browser.sleep(3000);
      })
    })
    await bulkuserupload.btnUpload.isDisplayed().then(async function(){
        await bulkuserupload.btnUpload.click().then(async function(){
          await browser.sleep(3000);
        });
    })
  });

When('User validates the assigned Team Lead is displayed as {string} under Team Lead column', async function (emailTeamLead) {
    //let emailTmLd: string = "//td[contains(text(),'"+ userEmail1 +"')]"
    let emailTmLd: string = "//td[contains(text(),'"+ emailTeamLead +"')]"
    // await browser.wait(EC.visibilityOf(assignteamlead.teamLeadEmail)).then(async function(){
    //     await assignteamlead.teamLeadEmail.getText().then(async function(actleadEmail){
    //         expect(actleadEmail).to.be.eql(expleadEmail);
    //     })
    // })
    await browser.sleep(3000).then(async function(){
        await element(By.xpath(emailTmLd)).getText().then(async function(actleadEmail){
            expect(actleadEmail).to.be.eql(expleadEmail);
        })
    })
});

When('User validates the updated Team Lead is displayed as {string} under Team Lead column', async function (emailTeamLead) {
    //let emailTmLd: string = "//td[contains(text(),'"+ userEmail1 +"')]"
    let emailTmLd: string = "//td[contains(text(),'"+ emailTeamLead +"')]"
    // await browser.wait(EC.visibilityOf(assignteamlead.teamLeadEmail)).then(async function(){
    //     await assignteamlead.teamLeadEmail.getText().then(async function(actleadEmail){
    //         expect(actleadEmail).to.be.eql(expleadEmail);
    //     })
    // })
    await browser.sleep(3000).then(async function(){
        await element(By.xpath(emailTmLd)).getText().then(async function(actupdatedleadEmail){
            expect(actupdatedleadEmail).to.be.eql(expupdatedleadEmail);
        })
    })
});

When('User clicks on Team name as {string} under which Team Lead is assigned', async function (teamName) {
    let teamNm: string = "//button[@name='"+ teamName +"']"
    await element(By.xpath(teamNm)).click().then(async function(){
        await browser.sleep(3000);
    })
    // await browser.wait(EC.visibilityOf(assignteamlead.teamName)).then(async function(){
    //     await assignteamlead.teamName.click();
    // })
});

When('User clicks on the other radio button as {string} to update Team Lead', async function (radioBtnTeamLead) {
    let rdBtnTmLd: string = "(//div[@class='mat-radio-outer-circle'])[1]//following::span[contains(text(),'"+ radioBtnTeamLead +"')]//preceding::div[@class='mat-radio-outer-circle'][1]";
    await element(By.xpath(rdBtnTmLd)).click().then(async function(){
        await browser.sleep(2000);
    })
    // await browser.wait(EC.visibilityOf(assignteamlead.rdbtnTeamLead)).then(async function(){
    //     await assignteamlead.rdbtnTeamLead.click();
    // })
});

When('User clicks on Save button of Edit Team Window', async function () {
    await browser.wait(EC.visibilityOf(assignteamlead.btnSaveEditTeam)).then(async function(){
        await assignteamlead.btnSaveEditTeam.click();
    })
});

When('User navigates back to Journey {string} under left Panel', async function (jrnName) {
    let JourneyName: string = "//div[contains(text(),'"+jrnName+"')]";
    await element(By.xpath(JourneyName)).click();
});



Then('User clicks on Continue of Import Window', async function () {
    await browser.wait(EC.visibilityOf(assignteamlead.btnContinueImport)).then(async function(){
        await assignteamlead.btnContinueImport.click();
    })
});