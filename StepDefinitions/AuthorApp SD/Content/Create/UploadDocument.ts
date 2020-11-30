import {When, Then} from "cucumber"
import {protractor, browser, element, ElementFinder} from "protractor";
import chai = require("chai");
var expect = chai.expect;
let path = require("path");
var EC = protractor.ExpectedConditions;
import { UploadDocumentPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/UploadDocumentPage"
import { format } from "path";
import { By } from "selenium-webdriver";
let expFileNames : Array<string> = ['Format.docx','ExcelFormat.xlsx','PDFFormat.pdf','PPTFormat.pptx'];
let uploaddocument = new UploadDocumentPageLocate();
let experrText:string = "2 MB max file size";
let expbtnText:string = "Try again";

When("user clicks on the Edit {string} of {string} button", async function (num,contentTypeName) {
    await element(By.xpath(`(//button[contains(text(),'Edit ${contentTypeName}')])[${num}]`)).click();
});

When("User enters Journey Script Id as {string}", async function (jrnScriptID) {
    await browser.wait(EC.visibilityOf(uploaddocument.jrnScriptID)).then(async function(){
        await uploaddocument.jrnScriptID.sendKeys(jrnScriptID);
    })
})

When("User selects File Type as {string}", async function (fileType) {
    await browser.wait(EC.visibilityOf(uploaddocument.drpFileType)).then(async function(){
        await uploaddocument.drpFileType.click().then(async function(){
            let fileOption: ElementFinder = element(By.xpath("//span[contains(text(),'"+fileType+"')]"));
                await fileOption.click().then(async function(){
                    await uploaddocument.moveFocus.click();
                })
        })
    })
})

When("User sets Max File Size as {string}", async function (fileSize) {
    await browser.wait(EC.visibilityOf(uploaddocument.maxFileSize)).then(async function(){
        await uploaddocument.maxFileSize.clear().then(async function(){
            await uploaddocument.maxFileSize.sendKeys(fileSize);
        })
    })
})

When("User sets Mandatory option to {string}", async function (opt) {
    await browser.wait(EC.visibilityOf(uploaddocument.onOff)).then(async function(){
        await uploaddocument.onOff.getText().then(async function(txt){
            if(txt == "Off"){
                await uploaddocument.toggle.click();
            }
        })
    })
})

When("User enters Instructions as {string}", async function (txtInst) {
    await browser.wait(EC.visibilityOf(uploaddocument.txtInstruction)).then(async function(){
        await uploaddocument.txtInstruction.clear().then(async function(){
            await uploaddocument.txtInstruction.sendKeys(txtInst).then(async function(){
                await browser.sleep(2000);
            })
        })
    })
})

When("User clicks on Ok button of Upload Document", async function () {
    await browser.wait(EC.visibilityOf(uploaddocument.btnOkUploadDoc)).then(async function(){
        await uploaddocument.btnOkUploadDoc.click().then(async function(){
                await browser.sleep(2000);
        })
    })
})

When("Participant validates the error message", async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(uploaddocument.errMsgUpload)).then(async function(){
        await uploaddocument.errMsgUpload.getText().then(async function(errText){
            console.log("actual error " + errText );
                expect(experrText).to.be.eql(errText);
        })
    })
    await browser.wait(EC.visibilityOf(uploaddocument.btnTryAgain)).then(async function(){
        await uploaddocument.btnTryAgain.getText().then(async function(btnText){
                expect(btnText).to.be.eql(expbtnText);
        })
    })
    browser.waitForAngularEnabled(true);
})

// When("User collapses the content", async function () {
//     await browser.wait(EC.visibilityOf(uploaddocument.arrwCollapse)).then(async function(){
//         await uploaddocument.arrwCollapse.click().then(async function(){
//                 await browser.sleep(2000);
//         })
//     })
// })

When("Participant starts first Activity as {string}", async function (actName) {
    browser.waitForAngularEnabled(false);
    let ActivityName: ElementFinder = element(By.xpath("(//h3[contains(text(),'"+ actName +"')]//following::span[contains(text(),' Start')])[1]"));
        await ActivityName.click().then(async function(){
            await browser.sleep(2000);
        })
        browser.waitForAngularEnabled(true);
})

When("Participant clicks on Browse button as {string}", async function (path) {
    browser.waitForAngularEnabled(false);
    await browser.sleep(6000).then(async function(){
        await browser.wait(EC.visibilityOf(uploaddocument.btnBrowse)).then(async function(){
            await uploaddocument.btnBrowse.sendKeys(path).then(async function(){
                    await browser.sleep(4000);
            })
        })
    })
    browser.waitForAngularEnabled(true);
})

When("Participant validates file is uploaded successfully as {string}", async function (fileName) {
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000).then(async function(){
        let FileName: ElementFinder = element(By.xpath("//span[contains(text(),'" + fileName + "')]"));
        await FileName.getText().then(async function(uploadedFileName){
            expect(uploadedFileName).to.be.oneOf(expFileNames)
        })
    })
    browser.waitForAngularEnabled(true);
})

When("Participant clicks on Browse button", async function () {
    
    browser.waitForAngularEnabled(false);
    var fileToUpload = 'D:/UploadDoc/Format.docx';
    var absolutePath = path.resolve(fileToUpload);
    var input = element(By.css('input[type="file"]'));
    await browser.sleep(4000).then(async function(){
        input.sendKeys(absolutePath).then(async function(){
            await browser.sleep(2000);
        })
    })
    browser.waitForAngularEnabled(true);
})

When("Participant clicks on Browse button of {string}", async function (filePath) {
    
    browser.waitForAngularEnabled(false);
    var fileToUpload = filePath;
    var absolutePath = path.resolve(fileToUpload);
    var input = element(By.css('input[type="file"]'));
    await browser.sleep(4000).then(async function(){
        input.sendKeys(absolutePath).then(async function(){
            await browser.sleep(2000);
        })
    })
    browser.waitForAngularEnabled(true);
})


When("User collapses the content", async function () {
    //for(let i=1; i<9; i++){
        //let Arrow: ElementFinder = element(By.xpath("(//span[@style='transform: rotate(180deg);'])["+i+"]"));
        //await Arrow.click();
        //await uploaddocument.arrwCollapse.click().then(async function(){
            //await browser.sleep(1000);
        //})   
    //}
    await browser.sleep(3000).then(async function(){
        await uploaddocument.arrwCollapse.count().then(async function(len){
            for(let i=1;i<=len;i++){
                let st: ElementFinder = element(By.xpath("(//span[@style='transform: rotate(180deg);'])['"+i+"']"));
                st.click().then(async function(){
                    await browser.sleep(1000);
                })
            }
        })
    })
})