import {When, Then} from "cucumber";
import { UserMappingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/UserMapping";
import { browser } from "protractor";
import { UpdateClientConfigurationPageLocate } from "../../../PageObjects/AuthorApp POM/Client Page/UpdateClientConfiguration";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage"
import chai = require("chai");
import config from "../../config.json"
var expect = chai.expect;
let usermapping = new UserMappingPageLocate();
let updateclientconf = new UpdateClientConfigurationPageLocate();
let expentryPageTitle:string = "*Select an industry:";
let participantactivitypage = new ParticipantActivityPageLocate();

When('User clicks on Client Config button of Petronas Client', async function () {
    await updateclientconf.icnSettingPetronas.isDisplayed().then(async function(){
        await updateclientconf.icnSettingPetronas.click().then(async function(){
            await browser.sleep(3000);
        })
    })
  });

  When('User clicks on PasswordSetup Tab of Petronas Client', async function () {
    await updateclientconf.tabPasswordSetup.isDisplayed().then(async function(){
        await updateclientconf.tabPasswordSetup.click().then(async function(){
            await browser.sleep(3000);
        })
    })
  });

  When('User enters Min Length as {string}', async function (string) {
    await updateclientconf.txtMinLength.isDisplayed().then(async function(){
        await updateclientconf.txtMinLength.clear().then(async function(){
            await updateclientconf.txtMinLength.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Max Length as {string}', async function (string) {
    await updateclientconf.txtMaxLength.isDisplayed().then(async function(){
        await updateclientconf.txtMaxLength.clear().then(async function(){
            await updateclientconf.txtMaxLength.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Min Lower Case as {string}', async function (string) {
    await updateclientconf.txtMinLowerCase.isDisplayed().then(async function(){
        await updateclientconf.txtMinLowerCase.clear().then(async function(){
            await updateclientconf.txtMinLowerCase.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Max Lower Case as {string}', async function (string) {
    await updateclientconf.txtMaxLowerCase.isDisplayed().then(async function(){
        await updateclientconf.txtMaxLowerCase.clear().then(async function(){
            await updateclientconf.txtMaxLowerCase.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Min Upper Case as {string}', async function (string) {
    await updateclientconf.txtMinUpperCase.isDisplayed().then(async function(){
        await updateclientconf.txtMinUpperCase.clear().then(async function(){
            await updateclientconf.txtMinUpperCase.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Max Upper Case as {string}', async function (string) {
    await updateclientconf.txtMaxUpperCase.isDisplayed().then(async function(){
        await updateclientconf.txtMaxUpperCase.clear().then(async function(){
            await updateclientconf.txtMaxUpperCase.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Min Numeric as {string}', async function (string) {
    await updateclientconf.txtMinNumberic.isDisplayed().then(async function(){
        await updateclientconf.txtMinNumberic.clear().then(async function(){
            await updateclientconf.txtMinNumberic.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Max Numeric as {string}', async function (string) {
    await updateclientconf.txtMaxNumberic.isDisplayed().then(async function(){
        await updateclientconf.txtMaxNumberic.clear().then(async function(){
            await updateclientconf.txtMaxNumberic.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Allowed Special Characters as {string}', async function (string) {
    await updateclientconf.txtAllowedSpecialChars.isDisplayed().then(async function(){
        await updateclientconf.txtAllowedSpecialChars.clear().then(async function(){
            await updateclientconf.txtAllowedSpecialChars.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Check Previous Password as {string}', async function (string) {
    await updateclientconf.txtCheckPreviousPassword.isDisplayed().then(async function(){
        await updateclientconf.txtCheckPreviousPassword.clear().then(async function(){
            await updateclientconf.txtCheckPreviousPassword.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User enters Force Password Change for update client as {string}', async function (string) {
    await updateclientconf.txtForcePasswordChange.isDisplayed().then(async function(){
        await updateclientconf.txtForcePasswordChange.clear().then(async function(){
            await updateclientconf.txtForcePasswordChange.sendKeys(string).then(async function(){
                await browser.sleep(1000);
            })
        })
    })
  });

  When('User clicks on Save button to Save Petronas Client Configuration for update client config', async function () {
    await updateclientconf.btnSaveConfiguration.isDisplayed().then(async function(){
        await updateclientconf.btnSaveConfiguration.click().then(async function(){
            await browser.sleep(5000);
        })
    })
  });

  When('User clicks on Journey and Cohort for Update Client Configuration', async function () {
      await browser.sleep(6000).then(async function(){
        await updateclientconf.jrnUpdateClientConf.isDisplayed().then(async function(){
            await updateclientconf.jrnUpdateClientConf.click().then(async function(){
                await browser.sleep(2000);
            })
        })
        await updateclientconf.chUpdateClientConf.isDisplayed().then(async function(){
            await updateclientconf.chUpdateClientConf.click().then(async function(){
                await browser.sleep(2000);
            })
        })
      })
  });

  When('User creates new user with parameters set in PasswordSetup with first name for update client config as {string} last name as {string} email as {string} password as {string}', async function (string, string2, string3, string4) {
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

  When('Participant should login in with  {string} and {string}', { timeout: 12 * 10000 }, async function (string, string2) {
    browser.ignoreSynchronization = false;
    await browser.getCapabilities().then(async function (caps) {
        let browserName: string = caps.get("browserName");
        //console.log(browserName);
        if (browserName === 'internet explorer' || browserName === 'Safari') {
            browser.resetUrl = 'about:blank';
        }
    })
    await browser.get(config.MomentaParticipant).then(async function () {
        //await browser.refresh().then(async function () {
        //})
        await participantactivitypage.p_emailID.sendKeys(string);
        await participantactivitypage.p_password.sendKeys(string2).then(async function () {
            await participantactivitypage.p_loginButton.click().then(async function () {
                await browser.sleep(8000);
            })
        })
    });
    //await browser.refresh();
});
  

  Then('User should display entry page update client config', async function () {
      
    browser.waitForAngularEnabled(false);
    await updateclientconf.ttlEntryPage.isDisplayed().then(async function(){
       
        await updateclientconf.ttlEntryPage.getText().then(async function(actentryPageTitle){
            
            expect(actentryPageTitle).to.equal(expentryPageTitle);
            await browser.sleep(5000);
        })
    })
    browser.waitForAngularEnabled(true);
  });

