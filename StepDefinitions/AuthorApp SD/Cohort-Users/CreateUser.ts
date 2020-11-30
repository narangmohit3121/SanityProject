import { Given, Then, When } from "cucumber";
import { Browser, browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { CreateUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/CretaUserPage";

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
When ('User click on Cohort Fucntion',async function (){
    await createUserPage.btnCohortFunction.isDisplayed().then(async function (){
        await createUserPage.btnCohortFunction.click().then(async function(){
            await browser.sleep(1000);
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

When('user click create button', async function () {
    await createUserPage.btnCreate.isDisplayed().then(async function () {
        await createUserPage.btnCreate.click().then(async function () {
            browser.sleep(5000)
            console.log("Create  Button clicked !!!!!!!!!!!!");

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
When('User click create button of create user screen without entering Firstname,Lastname and Email', async function () {
    
    await createUserPage.btnCreate.isDisplayed().then(async function () {
        await createUserPage.btnCreate.click().then(async function () {
            browser.sleep(5000)

            console.log("Create  Button clicked !!!!!!!!!!!!");

        })
    })

});

Then('user should see validation error message for entering Firstname', async function () {
    
   console.log("User see validtion message for entering Firstname");
});

Then('user should see validation error message for entering email id', function () {
    
    console.log("User see validtion message for entering email id");
  });

  Then('user should see validation error message for entering last name', function () {
    
    console.log("User see validtion message for entering last name");
  });

  Then('user should see the submited recods in next page', async function () {
    await createUserPage.lnkUserName.isPresent().then(async function(userPresent){
        console.log(userPresent);
        expect(userPresent).to.be.true;
      })
  });

  Then('user should not see the submited recods in next page', async function () {
    await createUserPage.lnkUserName2.isPresent().then(async function(userPresent){
        console.log(userPresent);
        expect(userPresent).to.be.false;
      })
  });

  Then('user click Cancel button', async function () {
    await createUserPage.btnCancelCreateUsr.isDisplayed().then(async function(){
        await createUserPage.btnCancelCreateUsr.click();
    })
  });