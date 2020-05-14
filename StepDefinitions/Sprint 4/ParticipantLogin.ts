import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { ParticipantLoginPageLocate } from "../../PageObjects/Sprint 4/ParticipantLoginPage.js";
import { async } from "q";

var expect = chai.expect;

let participantloginpage = new ParticipantLoginPageLocate();

Given('Participant user should be on valid url to login', async function () {
    await browser.get(config.MomentaParticipant).then(async function () {
    await participantloginpage.participantLoginBtn.isDisplayed().then(async function(result){
         expect(result).to.be.true;
         
      });
     });
   });
   

   When('Participant user enters valid Email Id as {string}', async function (string) {
       await participantloginpage.participantLoginId.clear().then(async function () {
         await participantloginpage.participantLoginId.sendKeys(string)
         
       });
     });

     When('Participant user enters valid Password as {string}', async function (string) {
         await participantloginpage.participantPassword.clear().then(async function () {
           await participantloginpage.participantPassword.sendKeys(string)
           
         })
       });

       When('Participant user clicks on Login Button', async function () {
           await participantloginpage.participantLoginBtn.isDisplayed().then(async function () {
             await participantloginpage.participantLoginBtn.click().then(function () {
               console.log("Login Page Toast Message")
              
             })
           })
         });

         Then('Customer branding page should be displayed with Assigned Journey', async function () {
            await participantloginpage.clientPageTitle.isDisplayed().then(async function(result){
               expect(result).to.be.true;
             });
           });
          
           Then('Customer branding page should not be displayed with Assigned Journey', async function () {
               await participantloginpage.clientPageTitle.isPresent().then(async function(result){
               //  expect(result).to.be.true;
               console.log("Result for  invalid user "+result);
                  expect(result).to.be.false;
               });
             });
            

// Given('Participant user should be on valid url to login', async function () {
//   await browser.get(config.MomentaParticipant).then(async function () {
//   await participantloginpage.participantLoginBtn.isDisplayed().then(async function(result){
//       expect(result).to.be.true;
//     });
//   });
// });

// When('Participant user enters valid Email Id as {string}', async function (string) {
//   await participantloginpage.participantLoginId.clear().then(async function () {
//     await participantloginpage.participantLoginId.sendKeys(string)
//   })
// });

// When('Participant user enters valid Password as {string}', async function (string) {
//   await participantloginpage.participantPassword.clear().then(async function () {
//     await participantloginpage.participantPassword.sendKeys(string)
//   })
// });

// When('Participant user clicks on Login Button', async function () {
//   await participantloginpage.participantLoginBtn.isDisplayed().then(async function () {
//     await participantloginpage.participantLoginBtn.click().then(function () {
//       console.log("Login Page Toast Message")
//     })
//   })
// });


// Then('Customer branding page should be displayed with Assigned Journey', async function () {
//  await participantloginpage.clientPageTitle.isDisplayed().then(async function(result){
//     expect(result).to.be.true;
//   });
// });


// When('Participant user enters invalid Email Id as {string}', async function (string) {

//   await participantloginpage.participantLoginId.clear().then(async function () {
//     await participantloginpage.participantLoginId.sendKeys(string)

//   });

// });

// When('Participant user enters invalid Password as {string}', async function (string) {

//   await participantloginpage.participantPassword.clear().then(async function () {
//     await participantloginpage.participantPassword.sendKeys(string)

//   });

// });

// Then('Customer branding page should not be displayed with Assigned Journey', async function () {
//   await participantloginpage.clientPageTitle.isPresent().then(async function(result){
//   //  expect(result).to.be.true;
//   console.log("Result for  invalid user "+result);
//      expect(result).to.be.false;
//   });
// });

// When('Participant user enters blank Email Id as {string}', async function (string) {

//   await participantloginpage.participantLoginId.clear().then(async function () {
//     await participantloginpage.participantLoginId.sendKeys(string)

//   });

// });

// When('Participant user enters blank Password as {string}', async function (string) {

//   await participantloginpage.participantPassword.clear().then(async function () {
//     await participantloginpage.participantPassword.sendKeys(string)

//   });

// });