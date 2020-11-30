import {When, Then} from "cucumber";
import { UserMappingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/UserMapping";
import { browser } from "protractor";
let usermapping = new UserMappingPageLocate();

When('User click on View More', async function () {
    await usermapping.btnViewMore.isDisplayed().then(async function(){
        await usermapping.btnViewMore.click().then(async function(){
            await browser.sleep(5000);
        })
    })
  });

  When('User clicks on first Journey mapped for User Mapping', async function () {
    await usermapping.jrn1643_1.isDisplayed().then(async function(){
        await usermapping.jrn1643_1.click().then(async function(){
            await browser.sleep(5000);
        })
    })
  });

  When('User clicks on second Cohort under first Journey mapped for User Mapping', async  function () {
    await usermapping.ch1643_2.isDisplayed().then(async function(){
        await usermapping.ch1643_2.click().then(async function(){
            await browser.sleep(5000);
        })
    })
  });

  When('User clicks on Add User for User Mapping', async  function () {
    await usermapping.btnAddUser.isDisplayed().then(async function(){
        await usermapping.btnAddUser.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  When('User search for any user created in same Journey as {string}', async function (string) {
    await usermapping.txtSearchUsers.isDisplayed().then(async function(){
        await usermapping.txtSearchUsers.clear().then(async function(){
            await usermapping.txtSearchUsers.sendKeys(string).then(async function(){
                await browser.sleep(2000);
            })
        })
    })
  });

  Then('User should not find that searched user', async function () {
    
  });

  When('User clicks on second Journey mapped for User Mapping', async function () {
    await usermapping.jrn1643_2.isDisplayed().then(async function(){
        await usermapping.jrn1643_2.click().then(async function(){
            await browser.sleep(5000);
        })
    })
  });

  When('User clicks on first Cohort under second Journey mapped for User Mapping', async function () {
    await usermapping.ch1643_1.isDisplayed().then(async function(){
        await usermapping.ch1643_1.click().then(async function(){
            await browser.sleep(5000);
        })
    })
  });

  Then('User should be able to find that searched user', async function () {
    
  });