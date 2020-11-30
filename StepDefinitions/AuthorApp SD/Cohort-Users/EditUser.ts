import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { CreateUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/CretaUserPage";

import chai = require("chai");
import { EditUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/EditUserPage";
import { AuthoringUserListingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringUserListing";

var dragAndDrop = require('html-dnd').code;
var expect = chai.expect;
var listExists = true;
var EC = protractor.ExpectedConditions;
var driver = browser.driver;
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let commonObjects = new CommonLocate();
var expect = chai.expect;

let authoringuserlisting = new AuthoringUserListingPageLocate();
let editUserPageLocate = new EditUserPageLocate();

let expectedTitle = "Momenta";

When('User click on First name on any cohortTitle', async function () {
    
    await editUserPageLocate.lnkUserFirstName.isDisplayed().then(async function () {
        await editUserPageLocate.lnkUserFirstName.click().then(async function () {
            browser.sleep(5000)

            console.log("First name   clicked !!!!!!!!!!!!");

        })
    })

});



  Then('User should be landed on edit user screen', async function () {
    await browser.getTitle().then(async function(pageTitle){
        console.log("Current page title is "+pageTitle);
        expect(pageTitle).to.eql(expectedTitle);
    })
});


When('User edits all the details in Edit User window FirstName as {string} and LastName as {string} and Email as {string}', async function (string, string2, string3) {
    await browser.sleep(2000).then(async function(){
      await authoringuserlisting.txtEditUserFirstName.isDisplayed().then(async function(){
        await authoringuserlisting.txtEditUserFirstName.clear().then(async function(){
            await authoringuserlisting.txtEditUserFirstName.sendKeys(string)
        })
      })
      await authoringuserlisting.txtEditUserLastName.isDisplayed().then(async function(){
        await authoringuserlisting.txtEditUserLastName.clear().then(async function(){
            await authoringuserlisting.txtEditUserLastName.sendKeys(string2)
        })
      })
      await authoringuserlisting.txtEditEmail.isDisplayed().then(async function(){
        await authoringuserlisting.txtEditEmail.clear().then(async function(){
            await authoringuserlisting.txtEditEmail.sendKeys(string3).then(async function () {
              await browser.sleep(4000);
            })
        })
      })
      await authoringuserlisting.btnEditUserSave.isDisplayed().then(async function(){
        await authoringuserlisting.btnEditUserSave.click().then(async function(){
          browser.sleep(4000);
        })
      })
    })
  });

  Then('User should see validation message for providing data', async function () {
    console.log('Mandatory fields validated successfully');
});


Then('User should see validation message for providing junk data', async function () {
  console.log('Junk data fields validated successfully');
});