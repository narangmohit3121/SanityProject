import {When, Then} from "cucumber";
import chai = require("chai");
var expect = chai.expect;
import { AuthoringUserListingPageLocate } from "../../PageObjects/Sprint 8/AuthoringUserListing";
import { browser } from "protractor";

let authoringuserlisting = new AuthoringUserListingPageLocate();

// When('User clicks on Users Tab', async function () {
    
//   });

  Then('User should land to User listing page', async function () {
    
  });

  When('User clicks on Create User', async function () {
    await authoringuserlisting.btnCreateUser.isDisplayed().then(async function(){
      await authoringuserlisting.btnCreateUser.click();
    })
  });

  When('User fills all the details in Create User window', async function () {
    await authoringuserlisting.txtCreateUserFirstName.isDisplayed().then(async function(){
      await authoringuserlisting.txtCreateUserFirstName.sendKeys("Abhijeet");
    })
    await authoringuserlisting.txtCreateUserLastName.isDisplayed().then(async function(){
      await authoringuserlisting.txtCreateUserLastName.sendKeys("Manjrekar");
    })
    await authoringuserlisting.txtCreateUserEmail.isDisplayed().then(async function(){
      await authoringuserlisting.txtCreateUserEmail.sendKeys("abcd@gmail.com");
    })
    await authoringuserlisting.btnGENERATE.isDisplayed().then(async function(){
      await authoringuserlisting.btnGENERATE.click().then(async function(){
        browser.sleep(4000);
      })
    })
  });

  When('User clicks on CREATE button to create fresh user', async function () {
    await authoringuserlisting.btnCreateUserCreate.isDisplayed().then(async function(){
      await authoringuserlisting.btnCreateUserCreate.click();
    })
  });

  Then('Fresh User should be created and added to User list', async function () {
    await authoringuserlisting.lnkUserName.isPresent().then(async function(userPresent){
      console.log(userPresent);
      expect(userPresent).to.be.true;
    })
  });

  When('User clicks on any User name', async function () {
    await authoringuserlisting.lnkUserName.isDisplayed().then(async function(){
      await authoringuserlisting.lnkUserName.click();
    })
  });

  Then('User should be able to edit the user details', async function () {
    await authoringuserlisting.txtEditUserFirstName.isDisplayed().then(async function(){
      await authoringuserlisting.txtEditUserFirstName.sendKeys("Abhijeet");
    })
    await authoringuserlisting.txtEditUserLastName.isDisplayed().then(async function(){
      await authoringuserlisting.txtEditUserLastName.sendKeys("Manjrekar");
    })
    await authoringuserlisting.txtEditEmail.isDisplayed().then(async function(){
      await authoringuserlisting.txtEditEmail.sendKeys("abcd@gmail.com");
    })
  });

  When('User clicks on Enable On Off toggle', async function () {
    
  });

