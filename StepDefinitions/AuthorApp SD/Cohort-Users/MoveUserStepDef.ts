import { ExpectedConditions, browser, element, By, ElementFinder } from "protractor";
import {MoveUsers} from "../../../PageObjects/AuthorApp POM/Cohort-Users/moveUsersPage";
import config from "../../config.json";
import { Given, Then } from "cucumber";
import chai = require('chai');
import { UserCreation } from "../../../PageObjects/coreFunctionality/userCreation";
let userCreation=new UserCreation()
let EC= ExpectedConditions;
let mu=new MoveUsers();
var expect = chai.expect;



Given('User get login in Admin site', {timeout: 50*1000}, async function () {
  await browser.get(config.momentaAuthor)
    await browser.wait(EC.visibilityOf(userCreation.adminEmail),15000)
    await userCreation.adminEmail.click();
    await userCreation.adminEmail.sendKeys("abhi@bts.com")
    await userCreation.adminNextButton.click()
    await browser.wait(EC.visibilityOf(userCreation.adminPassword),15000)
    await userCreation.adminPassword.sendKeys("ABab86$")
    await userCreation.adminLoginButton.click()
    await browser.sleep(6000)  
})


Then('I click on Client button', async function(){
   await browser.wait(EC.visibilityOf(mu.clientTab),15000)
    await mu.clientTab.click()
})

Then('I enter {string} in search text box', async function(clientName){
    await browser.wait(EC.visibilityOf(mu.searchTextBox),15000)
    await mu.searchTextBox.sendKeys(clientName);
})

Then('click on petronas Client',async function(){
    await browser.wait(EC.visibilityOf(mu.selectPetronasClient),15000)
    await mu.selectPetronasClient.isDisplayed().then(async function(bool){
        await expect(bool).to.be.true;
        await mu.selectPetronasClient.click()
    })
})

Then('click on Cohorts-Users tab',async function(){
    await browser.wait(EC.visibilityOf(mu.clickCohort),15000)
    await mu.clickCohort.click()
})

Then('enter {string} in search text box and hit on enter',async function(journeyName){
    await browser.wait(EC.visibilityOf(mu.searchTextBoxJourney),15000)
    await mu.searchTextBoxJourney.sendKeys(journeyName);
    })


Then('click on Automation Journey Pramod Journey', async function(){
  await browser.wait(EC.visibilityOf(mu.clickOnAutomationJourneyPramod),15000)
  await mu.clickOnAutomationJourneyPramod.click() 


})

Then('click on cohort pramod test cohort',async function(){
    await browser.wait(EC.visibilityOf(mu.clickOnCohort),15000)
    await mu.clickOnCohort.click();
})

Then('click on user pramod',async function(){
    await browser.wait(EC.visibilityOf(mu.clickOnUser),15000)
    await mu.clickOnUser.click();
    })


Then('click on Teams tab',async function(){
  await browser.wait(EC.visibilityOf(mu.clickOnTeams),15000)
  await mu.clickOnTeams.click();

})

Then('click on Move button',async function(){
  await browser.wait(EC.visibilityOf(mu.clickOnMoveButton),15000)
  await mu.clickOnMoveButton.click();

})

Then('get current cohort name',async function(){
  await browser.wait(EC.visibilityOf(mu.getCurrentValueDropDown),15000)
  await mu.getCurrentValueDropDown.getText();

})


Then('select another cohort name',async function(){
  await browser.wait(EC.visibilityOf(mu.selectAnotherCohort),15000)
  await mu.selectAnotherCohort.click();
  await browser.sleep(5000);
})

Then('User clicks on Move button and selects Cohort dropdown as {string} and clicks on Move',async function(drpvalue){
  await browser.wait(EC.visibilityOf(mu.clickOnMoveButton)).then(async function () {
    await mu.clickOnMoveButton.click().then(async function(){
      await mu.getCurrentValueDropDown.isDisplayed().then(async function(){
        await mu.getCurrentValueDropDown.click().then(async function () {
          let cohortvalue: ElementFinder = element(By.xpath("//option[contains(text(),'" + drpvalue + "')]"));
          await cohortvalue.click().then(async function () {
            await mu.moveCohortBtn.isDisplayed().then(async function(){
              await mu.moveCohortBtn.click();
            })
          })
        })
      })
    })
  })
})


Then('select different team from drop down',async function(){
  await browser.wait(EC.visibilityOf(mu.selectTeam),15000)
  
  await mu.selectTeam.click();

})

Then('click on the Move button',async function(){
  await browser.wait(EC.visibilityOf(mu.moveCohortBtn),15000)
  await mu.moveCohortBtn.click();

})

Then('verify the success message',async function(){
  await browser.wait(EC.visibilityOf(mu.moveCohortBtn),15000)
  await mu.moveCohortBtn.click();

})

Then('User validates whether the user {string} has moved successfully', async function (uName) {
  let UserName: ElementFinder = element(By.xpath("//button[@name='User Click'][contains(text(),'" + uName + "')]"));
    await UserName.isPresent().then(async function(userPresent){
      expect(userPresent).to.be.true;
    })
      console.log("User moved successfully");
});