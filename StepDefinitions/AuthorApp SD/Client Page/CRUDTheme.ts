import {When, Then} from "cucumber";
import { browser } from "protractor";
import chai = require('chai');
import { CRUDThemePageLocate } from "../../../PageObjects/AuthorApp POM/Client Page/CRUDThemePage";
var expect = chai.expect;
let crudTheme = new CRUDThemePageLocate();
let DemoTheme:string = 'Demo Theme';
let DemoTheme1:string = 'Demo Theme 1';

When ('User clicks on Arrow of Petronas client', async function(){
    await crudTheme.arwDD.isDisplayed().then(async function(){
        browser.sleep(2000)
        await crudTheme.arwDD.click();
    })
});

When ('User clicks on theme Tab of Petronas Client', async function(){
    await crudTheme.tabTheme.isDisplayed().then(async function(){
        browser.sleep(2000);
        await crudTheme.tabTheme.click();
        await browser.sleep(3000);
    })
});

When ('User should check if plus icon is present beside Add New and click on it', async function(){

    await crudTheme.icnAddTheme.isDisplayed().then(async function(){
        await browser.sleep(2000);
        await crudTheme.icnAddTheme.click();
    })
});

When ('User should check if Theme tittle text field is present and enter any title as {string}',async function(string){
    await crudTheme.txtEnterThemeTittle.isDisplayed().then(async function(){
        await crudTheme.txtEnterThemeTittle.sendKeys(string);
    })
    await browser.sleep(3000);
});

When ('User should check if Add Theme button present and click on it', async function(){
    await browser.sleep(1000);
    await crudTheme.btnAddTheme.isDisplayed().then(async function(){
        await crudTheme.btnAddTheme.click();
    })
    await crudTheme.msgThemeAddSuccess.isDisplayed().then(async function(){
        await crudTheme.msgThemeAddSuccess.click();
    })
});

When ('User clicks on Save button under client config',async function(){
    //browser.waitForAngularEnabled(false);
    await browser.sleep(3000);
    await crudTheme.btnSaveClientConfig.isDisplayed().then(async function(){
        await crudTheme.btnSaveClientConfig.click();
        
    })
   // browser.waitForAngularEnabled(true);
});



When ('User verifies if Theme got Added successfully or not', async function () {
    await crudTheme.txtThemeNameAdded.isDisplayed().then(function (result) {
        expect(result).to.be.true;
        
    });
    
})

// --------------------------------------------------------------------------------


When ('User should check if Edit theme icon is present on any one of existing theme and click on it',async function(){
    await crudTheme.icnEditTheme.isDisplayed().then(async function(){
        browser.sleep(2000);
        await crudTheme.icnEditTheme.click().then(async function(){
            await browser.sleep(2000);
        })
    })
});


When ('User should check if Theme tittle is present and update theme tittle as {string}',async function(string){
    browser.sleep(2000);
    await crudTheme.txtEditThemeTittle.isDisplayed().then(async function(){
        await crudTheme.txtEditThemeTittle.sendKeys(string);
    })
});

When ('User should check if Save button present and click on it',async function(){
    browser.sleep(2000);
    await crudTheme.btnSaveEditTheme.isDisplayed().then(async function(){
        await crudTheme.btnSaveEditTheme.click();
    })
});

When ('User verifies if Theme got Edited successfully or not',async function(){

    await crudTheme.txtThemeNameEdit.isDisplayed().then(async function(result){
        expect(result).to.be.true;
    })
});

//---------------------------------------------------------------------------------------------------------------------


When ('User should check if Delete icon is present beside edit theme and click on it',async function(){
    browser.sleep(2000);
    await crudTheme.icnDeleteTheme.isDisplayed().then(async function(){
        await crudTheme.icnDeleteTheme.click();
    })
});

When ('User should check if Delete button is present and click on it',async function(){
    await crudTheme.btnDeleteTheme.isDisplayed().then(async function(){
        await crudTheme.btnDeleteTheme.click();
    })
});

When ('User verifies if Theme got Deleted successfully or not',async function(){
    await browser.sleep(2000);
    await crudTheme.txtThemeNameEdit.isDisplayed().then(async function(result){
        expect(result).to.be.false;
    })
    await crudTheme.msgThemeDelete.isDisplayed().then(async function(){
        await crudTheme.msgThemeDelete.click();
    })

});

When('User should click on Client Configuration button', { timeout: 50 * 1000 }, async function () {
    
    await crudTheme.icoClientConfig.isDisplayed().then(async function () {
        await crudTheme.icoClientConfig.click().then(async function () {
            await browser.driver.switchTo().activeElement().then(function () {
                browser.sleep(2000);
            })
        });
    })
   
});