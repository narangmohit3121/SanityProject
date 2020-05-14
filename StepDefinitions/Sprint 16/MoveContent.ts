import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { MoveContentPage } from "../../PageObjects/Sprint 16/MoveContentPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";

import chai = require("chai");
var expect = chai.expect;
import { join } from 'path';

var EC = protractor.ExpectedConditions;
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let moveContentPage = new MoveContentPage();



When("User clicks on Sprint16 folder", async function () {
    await commonObjects.folderSprint16.click().then(function () {
        browser.sleep(2000);
    })
});

When("User selects the Move option for a Content", async function () {
    await moveContentPage.menu_contentLinked.click().then(async function () {
        await moveContentPage.moveOptionInMenu.click().then(async function () {
            await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot), 10 * 1000);
        })
    })
});

Then("a flat list of folders to which user can move content is displayed", async function () {
    await moveContentPage.folderPaths.count().then(function (folderCount) {
        expect(folderCount).to.be.greaterThan(0);
    })
});

Then("User can do a text search in the folder list", async function () {
    await moveContentPage.moveDialogSearchItems.sendKeys("mOvETwo").then(async function () {
        await moveContentPage.sourceFolderName.isDisplayed().then(async function (result) {
            expect(result).to.be.true;
            await moveContentPage.closeMoveDialog.click();
        })
    })
})

When("User selects the Move option for a Journey", async function () {
    await moveContentPage.menu_journeyToBeMoved.click().then(async function () {
        await moveContentPage.moveOptionInMenu.click().then(async function () {
            await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot), 10 * 1000);
        })
    })
});

Then("a flat list of folders to which user can move Journey is displayed", async function () {
    await moveContentPage.folderPaths.count().then(function (folderCount) {
        expect(folderCount).to.be.greaterThan(0);
    })
});

When("User selects the Move option for a Folder", async function () {
    await moveContentPage.menu_movedFolder.click().then(async function () {
        await moveContentPage.moveOptionInMenu.click().then(async function () {
            await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot), 10 * 1000);
        })
    })
});

Then("a flat list of folders to which user can move Folder is displayed", async function () {
    await moveContentPage.folderPaths.count().then(function (folderCount) {
        expect(folderCount).to.be.greaterThan(0);
    })
});

//----------------------------------------------------------------------------------------------------

Then("user is not given an option to move a parent folder to its sub-folders",async function(){
    await moveContentPage.subFolderInMovedFolder.isPresent().then(function(result){
        expect(result).to.be.false;
    })
});

//------------------------------------------------------------------------------------------------------

Then("User should not be given an option to Move Content to a different client", async function(){
    await moveContentPage.folderPaths.each(async function(folderPath){
        await folderPath.getText().then(function(pathText){
          expect(pathText.split("/")[0]).to.be.oneOf(['petronas','Petronas']);
        })
    })
});
//-------------------------------------------------------------------------------------------------------

Then('the path of the folders displayed in the folder is correct', async function(){
    await moveContentPage.sourceFolderPath.getText().then(async function(folderPath){
        expect(folderPath).to.equal("petronas/Automation Folder_DONOT DELETE/Sprint 16/MoveTwo");
    })
})
//-------------------------------------------------------------------------------------------------------------



When('User moves the content to a sub-folder within the current folder', async function(){
    await moveContentPage.moveDialogSearchItems.sendKeys('MoveTwo').then(async function(){
        await moveContentPage.moveButtonSourceFolder.click().then(async function(){
           await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot),10000)
        })
    })
});

When('User moves the journey to a sub-folder within the current folder', async function(){
    await moveContentPage.moveDialogSearchItems.sendKeys('MoveTwo').then(async function(){
        await moveContentPage.moveButtonSourceFolder.click().then(async function(){
            await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot),10000)
         })
    })
});

When('User moves the folder to a sub-folder within the current folder', async function(){
    await moveContentPage.moveDialogSearchItems.sendKeys('MoveTwo').then(async function(){
        await moveContentPage.moveButtonSourceFolder.click().then(async function(){
            await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot),10000)
         })
    })
});

Then('the content,journey,and folder should get moved to the destination folder', async function(){
    await moveContentPage.sourceFolder.click().then(async function(){
        await moveContentPage.contentLinkedToJourney.isDisplayed().then(function(isContentPresent){
            expect(isContentPresent).to.be.true;
        });
        await moveContentPage.journeyToBeMoved.isDisplayed().then(function(isJourneyPresent){
            expect(isJourneyPresent).to.be.true;
        });
        await moveContentPage.movedFolder.isDisplayed().then(function(isFolderPresent){
            expect(isFolderPresent).to.be.true;
        });
        await moveContentPage.movedFolder.click().then(async function(){
            await moveContentPage.contentInMovedFolder.isDisplayed().then(function(isContentPresent){
                expect(isContentPresent).to.be.true;
            })
        })
    })
})

//----------------------------------------------------------------------------------------------------------------

When("User navigates to a sub-folder within current folder", async function(){
    await moveContentPage.sourceFolder.click();    
});


When('User moves the content from sub-folder to a parent folder', async function(){
    await moveContentPage.moveDialogSearchItems.sendKeys('Sprint 16').then(async function(){
        await moveContentPage.moveButton_parentFolder.click().then(async function(){
           await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot),10000)
        })
    })
});

When('User moves the journey from sub-folder to a parent folder', async function(){
    await moveContentPage.moveDialogSearchItems.sendKeys('Sprint 16').then(async function(){
        await moveContentPage.moveButton_parentFolder.click().then(async function(){
            await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot),10000)
         })
    })
});

When('User moves the folder from sub-folder to a parent folder', async function(){
    await moveContentPage.moveDialogSearchItems.sendKeys('Sprint 16').then(async function(){
        await moveContentPage.moveButton_parentFolder.click().then(async function(){
            await browser.wait(EC.invisibilityOf(moveContentPage.loaderDot),10000)
         })
    })
});

Then('the content,journey,and folder should get moved to the parent folder', async function(){
    await moveContentPage.parentFolderLeftNavPanel.click().then(async function(){
        await browser.sleep(3000);
        await moveContentPage.contentLinkedToJourney.isDisplayed().then(function(isContentPresent){
            expect(isContentPresent).to.be.true;
        });
        await moveContentPage.journeyToBeMoved.isDisplayed().then(function(isJourneyPresent){
            expect(isJourneyPresent).to.be.true;
        });
        await moveContentPage.movedFolder.isDisplayed().then(function(isFolderPresent){
            expect(isFolderPresent).to.be.true;
        });
    })
})