import {Given, When, Then} from "cucumber";
import { browser } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
var expect = chai.expect;
let admloginpage = new LoginPageLocate();

Given('BTS user should be on valid url to login', {timeout: 50*1000}, async function () {
    await browser.get(config.MomentaUserUrl);
  });

  When('BTS user enters Email Id as {string}', async function (string) {
    await admloginpage.txtEmail.sendKeys(string);
  });

  When('BTS user clicks on Next Button', {timeout: 50*1000}, async function () {
    await admloginpage.btnNextPwd.click().then(function(){
      browser.sleep(3000);
    })    
  })
  
  Then('BTS user should land to SSO link successfully', async function () {
    await browser.getTitle().then(function(titleofpage){
        expect(titleofpage).to.equal("Momenta");
        console.log(titleofpage);
    })
  });
   
  Then('BTS user clicks on Next Button then BTS user should display error message', async function () {
    await admloginpage.btnNextPwd.click().then(function(){
      browser.sleep(3000);
    })
  });

  Then('BTS user clicks on Next Button then BTS user should display mandatory error message', async function () {
    await admloginpage.btnNextPwd.click().then(function(){
      browser.sleep(3000);
    })
  });

  Then('Non-BTS user clicks on Next Button then Non-BTS user should redirect to password page', async function () {
    
    await admloginpage.btnNextPwd.click().then(function(){
      browser.sleep(2000);
    });
  });

  Then('Non-BTS user enters Password as {string}', async function (string) {
    await admloginpage.txtPassword.sendKeys(string);
  });

  Then('Non-BTS user clicks on Login Button', {timeout: 50*1000}, async function () {
     await admloginpage.btnLogin.click().then(function(){
      browser.getTitle().then(function(pageTitle){
        expect(pageTitle).to.equal("Momenta"); 
     }) 
  })
});
  