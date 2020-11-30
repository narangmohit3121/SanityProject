import {When, Then} from "cucumber";
import { UserMappingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/UserMapping";
import { browser } from "protractor";
import { UpdateClientConfigurationPageLocate } from "../../../PageObjects/AuthorApp POM/Client Page/UpdateClientConfiguration";
import { EditMessagingPageLocate } from "../../../PageObjects/AuthorApp POM/Client Page/EditMessaging";
import chai = require("chai");
var expect = chai.expect;
let usermapping = new UserMappingPageLocate();
let updateclientconf = new UpdateClientConfigurationPageLocate();
let editmessaging = new EditMessagingPageLocate();
let expentryPageTitle:string = "*Select an industry:";



// When('User clicks on Client Config button of Petronas Client', async function () {
//     await editmessaging.icnSettingPetronas.isDisplayed().then(async function(){
//         await editmessaging.icnSettingPetronas.click().then(async function(){
//             await browser.sleep(3000);
//         })
//     })
//   });

  When('User clicks on Edit Messaging Tab of Petronas Client', async function () {
    await editmessaging.tabEditMessaging.isDisplayed().then(async function(){
        await editmessaging.tabEditMessaging.click().then(async function(){
            await browser.sleep(3000);
        })
    })
  });

  When('User enters Cancel button as {string}', async function (string) {
    await editmessaging.txtCancel.isDisplayed().then(async function(){
        await editmessaging.txtCancel.clear().then(async function(){
            await editmessaging.txtCancel.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Continue button as {string}', async function (string) {
    await editmessaging.txtContinue.isDisplayed().then(async function(){
        await editmessaging.txtContinue.clear().then(async function(){
            await editmessaging.txtContinue.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Create New Password button as {string}', async function (string) {
    await editmessaging.txtCreateNewPwd.isDisplayed().then(async function(){
        await editmessaging.txtCreateNewPwd.clear().then(async function(){
            await editmessaging.txtCreateNewPwd.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Email Recovery Link as {string}', async function (string) {
    await editmessaging.txtEmailRecoveryLnk.isDisplayed().then(async function(){
        await editmessaging.txtEmailRecoveryLnk.clear().then(async function(){
            await editmessaging.txtEmailRecoveryLnk.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Login as {string}', async function (string) {
    await editmessaging.txtLogin.isDisplayed().then(async function(){
        await editmessaging.txtLogin.clear().then(async function(){
            await editmessaging.txtLogin.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Submit as {string}', async function (string) {
    await editmessaging.txtSubmit.isDisplayed().then(async function(){
        await editmessaging.txtSubmit.clear().then(async function(){
            await editmessaging.txtSubmit.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Submit button to update user password as {string}', async function (string) {
    await editmessaging.txtsubmitbtnUpateUserpwd.isDisplayed().then(async function(){
        await editmessaging.txtsubmitbtnUpateUserpwd.clear().then(async function(){
            await editmessaging.txtsubmitbtnUpateUserpwd.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Email Recovery Link Failure as {string}', async function (string) {
    await editmessaging.txtEmailRecoveryLnkFailure.isDisplayed().then(async function(){
        await editmessaging.txtEmailRecoveryLnkFailure.clear().then(async function(){
            await editmessaging.txtEmailRecoveryLnkFailure.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Email Recovery link success as {string}', async function (string) {
    await editmessaging.txtEmailRecoveryLnkSuccess.isDisplayed().then(async function(){
        await editmessaging.txtEmailRecoveryLnkSuccess.clear().then(async function(){
            await editmessaging.txtEmailRecoveryLnkSuccess.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

//   When('User enters Check Previous Password as {string}', async function (string) {
//     await editmessaging.txtCheckPreviousPassword.isDisplayed().then(async function(){
//         await editmessaging.txtCheckPreviousPassword.clear().then(async function(){
//             await editmessaging.txtCheckPreviousPassword.sendKeys(string).then(async function(){
//                 await browser.sleep(1000);
//             })
//         })
//     })
//   });

  When('User enters Force Password Change as {string}', async function (string) {
    await editmessaging.txtForcePasswordChange.isDisplayed().then(async function(){
        await editmessaging.txtForcePasswordChange.clear().then(async function(){
            await editmessaging.txtForcePasswordChange.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User clicks on Save button to Save Petronas Client Configuration', async function () {
    await editmessaging.btnSaveConfiguration.isDisplayed().then(async function(){
        await editmessaging.btnSaveConfiguration.click().then(async function(){
            await browser.sleep(5000);
        })
    })
  });



  When('User creates new user with parameters set in PasswordSetup with first name as {string} last name as {string} email as {string} password as {string}', async function (string, string2, string3, string4) {
    await usermapping.btnCreateUser.isDisplayed().then(async function(){
        await usermapping.btnCreateUser.click().then(async function(){
            await browser.sleep(2000);
        })
    })
    await usermapping.txtFirstName.isDisplayed().then(async function(){
        await usermapping.txtFirstName.clear().then(async function(){
            await usermapping.txtFirstName.sendKeys(string)
        })
    })
    await usermapping.txtLastName.isDisplayed().then(async function(){
        await usermapping.txtLastName.clear().then(async function(){
            await usermapping.txtLastName.sendKeys(string2)
        })
    })
    await usermapping.txtEmail.isDisplayed().then(async function(){
        await usermapping.txtEmail.clear().then(async function(){
            await usermapping.txtEmail.sendKeys(string3)
        })
    })
    await usermapping.txtPassword.isDisplayed().then(async function(){
        await usermapping.txtPassword.clear().then(async function(){
            await usermapping.txtPassword.sendKeys(string4)
        })
    })
    await usermapping.btnCreate.isDisplayed().then(async function(){
        await usermapping.btnCreate.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  Then('User should display entry page', async function () {
      
    browser.waitForAngularEnabled(false);
    await editmessaging.ttlEntryPage.isDisplayed().then(async function(){
       
        await editmessaging.ttlEntryPage.getText().then(async function(actentryPageTitle){
            
            expect(actentryPageTitle).to.equal(expentryPageTitle);
            await browser.sleep(5000);
        })
    })
    browser.waitForAngularEnabled(true);
  });

