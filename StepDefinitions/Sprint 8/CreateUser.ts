import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../PageObjects/Sprint 3/CMSAuthoringPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { CreateUserPageLocate } from "../../PageObjects/Sprint 8/CretaUserPage";

import chai = require("chai");

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

let createUserPage = new CreateUserPageLocate();

let expectedCreateUserLabelValue = "Create User";



When('User click on user tab', async function () {
    
    await createUserPage.btnUser.isDisplayed().then(async function () {
        await createUserPage.btnUser.click().then(async function () {
            browser.sleep(5000)

        })
    })

});

When('User click on any journey', async function () {
    
    await createUserPage.lnkTitle1.isDisplayed().then(async function () {
        await createUserPage.lnkTitle1.click().then(async function () {
            browser.sleep(5000)

        })
    })

});

When('User click on any cohortTitle', async function () {
    
    await createUserPage.lnkCohortTitle.isDisplayed().then(async function () {
        await createUserPage.lnkCohortTitle.click().then(async function () {
            browser.sleep(5000)

            console.log("Cohort Title  clicked !!!!!!!!!!!!");

        })
    })

});

When('User click on create user button', async function () {
    
    await createUserPage.btnCreateUser.isDisplayed().then(async function () {
        await createUserPage.btnCreateUser.click().then(async function () {
            browser.sleep(5000)

            console.log("Create User Button clicked !!!!!!!!!!!!");

        })
    })

});
// TC_01
Then('user should see create user screen', async function () {
    
    await createUserPage.lblCreateUser.isDisplayed().then(async function () {

        await createUserPage.lblCreateUser.getText().then(async function (actualCreateUserLabelValue) {

            console.log("actual value is "+actualCreateUserLabelValue)
         //   expect(expectedCreateUserLabelValue).to.eql(actualCreateUserLabelValue);
            browser.sleep(6000)

            console.log("Create User window validation passed  !!!!!!!!!!");

        })
    });
});

// TC_02
When('User click on create button', async function () {
    
    await createUserPage.btnCreate.isDisplayed().then(async function () {
        await createUserPage.btnCreate.click().then(async function () {
            browser.sleep(5000)

            console.log("Create  Button clicked !!!!!!!!!!!!");

        })
    })

});

Then('user should see validation message for entering Firstname', async function () {
    
   console.log("User see validtion message for entering Firstname");
});

