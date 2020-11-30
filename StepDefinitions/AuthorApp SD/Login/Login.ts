import { Given, When, Then } from "cucumber";
import { browser, protractor } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
var expect = chai.expect;
let admloginpage = new LoginPageLocate();
var EC = protractor.ExpectedConditions;

Given('User should be on valid url to login', { timeout: 50 * 1000 }, async function () {
  
  await browser.get(config.MomentaUserUrl);
  await browser.sleep(3000);
});

When('User enters Email Id as {string}', async function (string) {
  await admloginpage.txtEmail.sendKeys(string);
});

When('User clicks on Next Button', { timeout: 50 * 1000 }, async function () {
  await admloginpage.btnNextPwd.click().then(async function () {
    //await browser.sleep(3000);
    console.log('Clicked on NExt');
  })
})

Then('User should land to SSO link successfully', async function () {
  await browser.getTitle().then(function (titleofpage) {
    expect(titleofpage).to.equal("Momenta");
    console.log(titleofpage);
  })
});

Then('Proper Email validation message should appear', async function () {
  
  browser.waitForAngularEnabled(false);
  
  await admloginpage.invalidLoginMsg.isPresent().then(async function (isErrorDisplayed) {
    if (isErrorDisplayed) {
      await admloginpage.invalidLoginMsg.getText().then(function (errorMsggg) {

        console.log(errorMsggg);
        expect(errorMsggg).to.be.eql("Enter valid email");

      })
    }
    else {
      console.log('Error message not displayed');
    }
  })
  browser.waitForAngularEnabled(true);
})

Then('Proper validation message should appear', async function () {
  
  browser.waitForAngularEnabled(false);
  await browser.sleep(1000);
  await admloginpage.invalidLoginMsg2.isPresent().then(async function (isErrorDisplayed) {
    if (isErrorDisplayed) {
      await admloginpage.invalidLoginMsg2.getText().then(function (errorMsggg1) {

        console.log(errorMsggg1);
        expect(errorMsggg1).to.be.eql("Invalid email or password");

      })
    }
    else {
      console.log('Error message not displayed');
    }
  })
  browser.waitForAngularEnabled(true);
})

Then('Proper toast validation message should appear', async function () {  
  await browser.sleep(3000);
  await browser.wait(EC.visibilityOf(admloginpage.toastErrorMsg), 20000).then(async function () {
    await admloginpage.toastErrorMsg.getText().then(async function (errormsg3) {
      await browser.sleep(1000);
      console.log(errormsg3);
     expect(errormsg3).to.be.eql("Email is mandatory.")
    })
})

});

Then('User clicks on Next Button then BTS user should display error message', async function () {
  await admloginpage.btnNextPwd.click().then(async function () {
    await browser.sleep(3000);
  })
});


Then('User clicks on Next Button then BTS user should display mandatory error message', async function () {
  await admloginpage.btnNextPwd.click().then(function () {
    browser.sleep(3000);
  })
});

Then('User clicks on Next Button then Non-BTS user should redirect to password page', async function () {
  await admloginpage.btnNextPwd.click().then(function () {
    browser.sleep(2000);
  });
});

Then('User enters Password as {string}', async function (string) {
  await admloginpage.txtPassword.sendKeys(string);
});

Then('User clicks on Login Button', { timeout: 50 * 1000 }, async function () {
  browser.waitForAngularEnabled(false);
  await admloginpage.btnLogin.click().then(async function () {
    await browser.getTitle().then(function (pageTitle) {
      expect(pageTitle).to.equal("Momenta");
    })
  })
  browser.waitForAngularEnabled(true);
});

Then ('Proper toast validation message should appear for Blank Password',async function(){
  await browser.sleep(3000);
  await browser.wait(EC.visibilityOf(admloginpage.blankPasswordToastmsg), 20000).then(async function () {
    await admloginpage.blankPasswordToastmsg.getText().then(async function (errormsg4) {
      await browser.sleep(1000);
      console.log(errormsg4);
     expect(errormsg4).to.be.eql("Password is mandatory.")
    })
})
});
