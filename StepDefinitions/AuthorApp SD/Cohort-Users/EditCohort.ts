import {When, Then} from "cucumber";
import chai = require("chai");
var expect = chai.expect;
//import { AuthoringUserListingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringUserListing";
import { browser, element, ElementFinder, protractor } from "protractor";
var EC = protractor.ExpectedConditions;
//let authoringuserlisting = new AuthoringUserListingPageLocate();
import { EditCohortPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/EditCohort";
import { AuthoringCreateCohortPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringCreateCohort";
import { By } from "selenium-webdriver";
let editcohort = new EditCohortPageLocate();  
let authoringcreatecohort = new AuthoringCreateCohortPageLocate();

//Date Code
let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: string = today.getMinutes().toString().padStart(2, '0');

//let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
let currentDateTime: string = dd + '-' + mm + '-' + year + ' ' + hours;
//Date Code
let chrtTitleTxt: string = "CohortEdit Cohort" + currentDateTime;

// When('User clicks on Users Tab', async function () {
    
//   });

//Duplicate method in AuthoringUserListing
  // Then('User should land to User listing page', async function () {
    
  // });
  //Duplicate method in AuthoringUserListing

  //Duplicate method in AuthoringUserListing
  // When('User clicks on Create User', async function () {
  //   await authoringuserlisting.btnCreateUser.isDisplayed().then(async function(){
  //     await authoringuserlisting.btnCreateUser.click();
  //   })
  // });
  //Duplicate method in AuthoringUserListing

  //Duplicate method in AuthoringUserListing
  // When('User fills all the details in Create User window', async function () {
  //   await authoringuserlisting.txtCreateUserFirstName.isDisplayed().then(async function(){
  //     await authoringuserlisting.txtCreateUserFirstName.sendKeys("Abhijeet");
  //   })
  //   await authoringuserlisting.txtCreateUserLastName.isDisplayed().then(async function(){
  //     await authoringuserlisting.txtCreateUserLastName.sendKeys("Manjrekar");
  //   })
  //   await authoringuserlisting.txtCreateUserEmail.isDisplayed().then(async function(){
  //     await authoringuserlisting.txtCreateUserEmail.sendKeys("abcd@gmail.com");
  //   })
  //   await authoringuserlisting.btnGENERATE.isDisplayed().then(async function(){
  //     await authoringuserlisting.btnGENERATE.click().then(async function(){
  //       browser.sleep(4000);
  //     })
  //   })
  // });
  //Duplicate method in AuthoringUserListing

  //Duplicate method in AuthoringUserListing
  // When('User clicks on CREATE button to create fresh user', async function () {
  //   await authoringuserlisting.btnCreateUserCreate.isDisplayed().then(async function(){
  //     await authoringuserlisting.btnCreateUserCreate.click();
  //   })
  // });
  //Duplicate method in AuthoringUserListing

  //Duplicate method in AuthoringUserListing
  // Then('Fresh User should be created and added to User list', async function () {
  //   await authoringuserlisting.lnkUserName.isPresent().then(async function(userPresent){
  //     console.log(userPresent);
  //     expect(userPresent).to.be.true;
  //   })
  // });
  //Duplicate method in AuthoringUserListing

  //Duplicate method in AuthoringUserListing
  // When('User clicks on any User name', async function () {
  //   await authoringuserlisting.lnkUserName.isDisplayed().then(async function(){
  //     await authoringuserlisting.lnkUserName.click();
  //   })
  // });
  //Duplicate method in AuthoringUserListing

  //Duplicate method in AuthoringUserListing
  // Then('User should be able to edit the user details', async function () {
  //   await authoringuserlisting.txtEditUserFirstName.isDisplayed().then(async function(){
  //     await authoringuserlisting.txtEditUserFirstName.sendKeys("Abhijeet");
  //   })
  //   await authoringuserlisting.txtEditUserLastName.isDisplayed().then(async function(){
  //     await authoringuserlisting.txtEditUserLastName.sendKeys("Manjrekar");
  //   })
  //   await authoringuserlisting.txtEditEmail.isDisplayed().then(async function(){
  //     await authoringuserlisting.txtEditEmail.sendKeys("abcd@gmail.com");
  //   })
  // });
  //Duplicate method in AuthoringUserListing

  When('User verifies Toggle', async function () {
    browser.wait(EC.visibilityOf(editcohort.txtToggleEnabled)).then(async function(){
      await editcohort.txtToggleEnabled.getText().then(async function(txtToggle){
              if(txtToggle == "True"){
                await browser.sleep(2000).then(async function(){
                  await editcohort.tglEnabled.isDisplayed().then(async function(){
                    await editcohort.tglEnabled.click().then(async function(){
                      browser.wait(EC.visibilityOf(editcohort.txtToggleEnabled)).then(async function(){
                        await editcohort.txtToggleEnabled.getText().then(async function(txtToggle){
                          expect(txtToggle).to.be.false;
                        })
                      })
                    })
                  })
                })
              }
              else{
                (txtToggle == "False")
                {
                  await browser.sleep(2000).then(async function(){
                    await editcohort.tglEnabled.isDisplayed().then(async function(){
                      await editcohort.tglEnabled.click().then(async function(){
                        browser.wait(EC.visibilityOf(editcohort.txtToggleEnabled)).then(async function(){
                          await editcohort.txtToggleEnabled.getText().then(async function(txtToggle){
                            expect(txtToggle).to.be.true;
                          })
                        })
                      })
                    })
                  })
                }
              }
            })
          })
        });

        When('User edits the Cohort Title as {string}', async function (ttlCohort) {
           await authoringcreatecohort.txtCohortTitle.isDisplayed().then(async function(){
             await authoringcreatecohort.txtCohortTitle.clear().then(async function(){
              await authoringcreatecohort.txtCohortTitle.sendKeys(ttlCohort+currentDateTime).then(async function(){
                await browser.sleep(4000);
              })
             })
           })
          })

          When('User clicks on Save button of Cohort Settings', async function () {
            await editcohort.btnSaveChrSettings.isDisplayed().then(async function () {
              await editcohort.btnSaveChrSettings.click().then(async function () {
                await browser.sleep(3000);
              })
            })
           })

        Then('User should validate the edited Cohort Title as {string}', async function (ttlCohort) {
            let CohortName: ElementFinder = element(By.xpath("//button[contains(text(),'" + ttlCohort + "')]"));
            await CohortName.getText().then(async function(txt){
              console.log(txt);
              expect(txt).to.be.eql(chrtTitleTxt);
            })
          })
        