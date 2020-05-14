import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../PageObjects/Sprint 3/CMSAuthoringPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { CreateUserPageLocate } from "../../PageObjects/Sprint 8/CretaUserPage";

import chai = require("chai");
import { EditUserPageLocate } from "../../PageObjects/Sprint 8/EditUserPage";

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