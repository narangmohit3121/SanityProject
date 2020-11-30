import {When, Then} from "cucumber";
import chai = require("chai");
import { browser,element,ElementFinder,protractor } from "protractor";
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { CreateUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/CretaUserPage";
import { AuthoringUserListingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringUserListing";
import { By } from "selenium-webdriver";
let createUserPage = new CreateUserPageLocate();

let authoringuserlisting = new AuthoringUserListingPageLocate();

let actlistofUsers: Array<string> = [];
let explistofUsers: Array<string> = ['userlisting1', 'userlisting2', 'userlisting3', 'userlisting4','userlisting5'];

let actbeforeSortUserList: Array<string> = [];
let expbeforeSortUserList: Array<string> = ['userlisting1', 'userlisting2', 'userlisting3', 'userlisting4','userlisting5'];

let actafterSortUserList: Array<string> = [];
let expafterSortUserList: Array<string> = ['userlisting5', 'userlisting4', 'userlisting3', 'userlisting2','userlisting1'];

let randomdigit = Math.floor(Math.random()*100000);


// When('User clicks on Users Tab', async function () {
    
//   });

  Then('User should land to User listing page', async function () {
    await authoringuserlisting.lstUserName.each(async function(element){
      element.getText().then(async function(listCohorts){
        actlistofUsers.push(listCohorts);
      })
    })
    expect(explistofUsers).to.be.eql(actlistofUsers);
  });

  When('User clicks on Create User', async function () {
    await authoringuserlisting.btnCreateUser.isDisplayed().then(async function(){
      await authoringuserlisting.btnCreateUser.click();
    })
  });

  When('User validates the User list before sorting', async function () {
    await authoringuserlisting.lstUserName.each(function (element, index) {
      element.getText().then(async function (listofUsers) {
        console.log(listofUsers);
        actbeforeSortUserList.push(listofUsers);
      })
    })
    expect(actbeforeSortUserList).to.be.eql(expbeforeSortUserList);
    console.log("Before Sorting User List validated");
  });

  Then('User should be able to sort the Users header', async function () {
    await authoringuserlisting.lstUserName.each(function(element){
      element.getText().then(async function(listofUsers){
        actafterSortUserList.push(listofUsers)
      })
    })
    expect(actafterSortUserList).to.be.eql(expafterSortUserList);
    console.log("After Sorting User List validated");
  });

  When('User fills all the details in Create User window FirstName as {string} and LastName as {string} and Email as {string}', async function (string, string2, string3) {
    let temprandom: any = randomdigit;
    await browser.sleep(2000).then(async function(){
      await authoringuserlisting.txtCreateUserFirstName.isDisplayed().then(async function(){
        await authoringuserlisting.txtCreateUserFirstName.sendKeys(temprandom + string);
      })
      await authoringuserlisting.txtCreateUserLastName.isDisplayed().then(async function(){
        await authoringuserlisting.txtCreateUserLastName.sendKeys(string2);
      })
      await authoringuserlisting.txtCreateUserEmail.isDisplayed().then(async function(){
        await authoringuserlisting.txtCreateUserEmail.sendKeys(temprandom + string3);
      })
      await authoringuserlisting.btnGENERATE.isDisplayed().then(async function(){
        await authoringuserlisting.btnGENERATE.click().then(async function(){
          browser.sleep(4000);
        })
      })
      await createUserPage.btnCreate.isDisplayed().then(async function () {
        await createUserPage.btnCreate.click().then(async function () {
            browser.sleep(5000)
            console.log("Create  Button clicked !!!!!!!!!!!!");

        })
    })
      let temptext: ElementFinder = element(By.xpath("//button[contains(text(),'" + temprandom + "')]"));
      await temptext.click().then(async function(){
        console.log("The username is " + temptext);
        await browser.sleep(5000);
      })
    })
  });

  When('User enters all the details in Create User window FirstName as {string} and LastName as {string} and Email as {string}', async function (string, string2, string3) {
    let temprandom: any = randomdigit;
    await browser.sleep(2000).then(async function(){
      await authoringuserlisting.txtCreateUserFirstName.isDisplayed().then(async function(){
        await authoringuserlisting.txtCreateUserFirstName.sendKeys(temprandom + string);
      })
      await authoringuserlisting.txtCreateUserLastName.isDisplayed().then(async function(){
        await authoringuserlisting.txtCreateUserLastName.sendKeys(string2);
      })
      await authoringuserlisting.txtCreateUserEmail.isDisplayed().then(async function(){
        await authoringuserlisting.txtCreateUserEmail.sendKeys(temprandom + string3);
      })
      await authoringuserlisting.btnGENERATE.isDisplayed().then(async function(){
        await authoringuserlisting.btnGENERATE.click().then(async function(){
          browser.sleep(4000);
        })
      })
    //   await createUserPage.btnCreate.isDisplayed().then(async function () {
    //     await createUserPage.btnCreate.click().then(async function () {
    //         browser.sleep(5000)
    //         console.log("Create  Button clicked !!!!!!!!!!!!");

    //     })
    // })
      // let temptext: ElementFinder = element(By.xpath("//button[contains(text(),'" + temprandom + "')]"));
      // await temptext.click().then(async function(){
      //   console.log("The username is " + temptext);
      //   await browser.sleep(5000);
      // })
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

  When('User clicks on arrow icon next to the User header', async function () {
    await browser.actions().mouseMove(authoringuserlisting.ttlUser).perform().then(async function(){
      await browser.wait(EC.visibilityOf(authoringuserlisting.arrwUsers)).then(async function(){
        await browser.actions().mouseMove(authoringuserlisting.arrwUsers).click().perform().then(async function(){
          await browser.actions().mouseMove(authoringuserlisting.arrwUsers).click().perform();
        })
      })
    }) 
  });
  

  Then('User should be able to edit the user details FirstName as {string} and LastName as {string} and Email as {string}', async function (string, string2, string3) {
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
        await authoringuserlisting.txtEditEmail.sendKeys(string3)
      })
    })
    await authoringuserlisting.btnEditUserSave.isDisplayed().then(async function(){
      await authoringuserlisting.btnEditUserSave.click();
    })
  });

  When('User clicks on Enable On Off toggle', async function () {
    
  });

