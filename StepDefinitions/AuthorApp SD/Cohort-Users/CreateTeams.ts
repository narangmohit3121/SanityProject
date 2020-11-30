import {When, Then} from "cucumber";
import chai = require('chai');
var expect = chai.expect;
import { browser, element, ElementFinder } from "protractor";
import { CreateTeamsPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/CreateTeams";
import { ResetJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/ResetJourney";
import { By } from "protractor";
import { HelperFunctions } from "../../HelperClass";

//Date Code
let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: string = today.getMinutes().toString().padStart(2, '0');

let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
//Date Code
let randomdigit = Math.floor(Math.random()*100000);
var temprandom:any;

let helper = new HelperFunctions();
let resetjourney = new ResetJourneyPageLocate();
var EC =  browser.ExpectedConditions;
let createteams = new CreateTeamsPageLocate();

let exprealMadridttl:string = "Real Madrid teams";
let expxiChampttl:string = "XI Champion teams";
let expxSuperkttl:string = "XSuperKings teams";

let actrealMadridopts:Array<string> = [];
let exprealMadridopts:Array<string> = ['Real Madrid1','Real Madrid2','Real Madrid3','Real Madrid4']

let actxicampopts:Array<string> = [];
let expxicampopts:Array<string> = ['XI Champion1','XI Champion2','XI Champion3','XI Champion4']

let actxsuperkopts:Array<string> = [];
let expxsuperkopts:Array<string> = ['XSuperKings1','XSuperKings2','XSuperKings3','XSuperKings4']

When('User click on Cohort-Users folder in AuthorApp', async function () {
    browser.wait(EC.visibilityOf(createteams.fldCohortUsers)).then(async function(){
        await createteams.fldCohortUsers.click();
    })
  });

  When('User click on Automation Create Teams journey', async function () {
    browser.wait(EC.visibilityOf(createteams.jrnAutomationCreateTeams)).then(async function(){
        await createteams.jrnAutomationCreateTeams.click();
    })
  });

  When('User searches Journey in Filter Journeys as {string} and clicks on it', async function (jrnName) {
    await browser.wait(EC.visibilityOf(resetjourney.srcFilterJourneys)).then(async function(){
      await resetjourney.srcFilterJourneys.sendKeys(jrnName);
    })
    let jrnlocator: string = "//span[contains(text(),'"+ jrnName +"')]"
    await element(By.xpath(jrnlocator)).click();
  });


When('User click on Journey Configuration', async function () {
  await createteams.lnkJourneyConfig.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.lnkJourneyConfig))
        await createteams.lnkJourneyConfig.click();
    })
  });

When('User click on Team Type Configuration', async function () {
  await createteams.tabTeamTypeConfig.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.tabTeamTypeConfig))
        await createteams.tabTeamTypeConfig.click();
    })
  });

When('User click on Add Team Type', async function () {
  await createteams.btnAddTeamType.isDisplayed().then(async function(){
    //browser.wait(EC.elementToBeClickable(createteams.btnAddTeamType))
        await createteams.btnAddTeamType.click().then(async function(){
          await browser.sleep(2000);
        })
    })
  });

When('User enters Team Title as {string}', async function (teamttl) {
    temprandom = randomdigit;
  //let constteam = teamttl + " " + currentDateTime;
  await createteams.txtTeamTitle.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.txtTeamTitle))
        //await createteams.txtTeamTitle.sendKeys(constteam);
        await createteams.txtTeamTitle.sendKeys(temprandom + teamttl);
    })
  });

When('User selects value from Team Type dropdown as {string}', async function (optionselect) {
  await createteams.drpTeamType.isDisplayed().then(async function(){
    //await browser.wait(EC.elementToBeClickable(createteams.drpTeamType))
        await createteams.drpTeamType.click();
    })
    let dropdownoption: string = "//option[contains(text(),'"+ optionselect +"')]"
    await element(By.xpath(dropdownoption)).click();
  });

When('User click on Create button', async function () {
  await createteams.btnCreateAddTeamType.isDisplayed().then(async function(){
    //browser.wait(EC.elementToBeClickable(createteams.btnCreateAddTeamType))
        await createteams.btnCreateAddTeamType.click().then(async function(){
          await browser.sleep(2000);
        })
    })
    browser.wait(EC.invisibilityOf(element(By.xpath("//h2[contains(text(),'Add Team Type')]"))));
  });

Then('New team should be added under Team Type as {string}', async function (teamname) {
    let createteam:string = "(//div[@class='theme-row-title'])[contains(text(),'"+ temprandom + teamname +"')]"
        await element(By.xpath(createteam)).getText().then(async function(txtTeam){
          console.log("actual team" + txtTeam);
            expect(txtTeam).contains(teamname);
            
        })
  });

  When('User clicks on Cohort Settings button of Cohort {string}', async function (chrtName) {
    let chrtSettings: string = "//button[@aria-label='"+ chrtName +"']//following::button[@name='Cohort Setting']"+"["+1+"]"
    await element(By.xpath(chrtSettings)).click();
  });

  When('User clicks on Teams Tab', async function () {
    await createteams.tabTeamsCohortSetting.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.tabTeamsCohortSetting))
      await createteams.tabTeamsCohortSetting.click();
    })
  });

  When('User should be able to view created Teams under Teams Tab as {string} and {string} and {string} at Cohort Level', async function (team1,team2,team3) {
    let teamName1: string = "//th[contains(text(),'"+ temprandom + team1 +"')]"
      await element(By.xpath(teamName1)).getText().then(async function(actrealMadridttl){
        console.log("Real Madrid team is " + actrealMadridttl);
        expect(temprandom+exprealMadridttl).to.be.eql(actrealMadridttl);
      })

      let teamName2: string = "//th[contains(text(),'"+ temprandom + team2 +"')]"
      await element(By.xpath(teamName2)).getText().then(async function(actxiChampttl){
        console.log("XI Champion team is " + actxiChampttl);
        expect(temprandom+expxiChampttl).to.be.eql(actxiChampttl);
      })

      let teamName3: string = "//th[contains(text(),'"+ temprandom + team3 +"')]"
      await element(By.xpath(teamName3)).getText().then(async function(actxSuperkttl){
        console.log("XSuperKings team is " + actxSuperkttl);
        expect(temprandom+expxSuperkttl).to.be.eql(actxSuperkttl);
      })

    //await createteams.realMadridTeamTitle.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.realMadridTeamTitle))
    //   await createteams.realMadridTeamTitle.getText().then(async function(actrealMadridttl){
    //     expect(actrealMadridttl).contains(exprealMadridttl);
    //   })
    // })
    //await createteams.xiChampionTeamTitle.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.xiChampionTeamTitle))
      //await createteams.xiChampionTeamTitle.getText().then(async function(actxiChampttl){
        //expect(actxiChampttl).contains(expxiChampttl);
      //})
    //})
    //await createteams.xSuperKingsTeamTitle.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.xSuperKingsTeamTitle))
      //await createteams.xSuperKingsTeamTitle.getText().then(async function(actxSuperkttl){
        //expect(actxSuperkttl).contains(expxSuperkttl);
      //})
    //})
  });

  When('User clicks on Cancel button to exit Cohort Settings', async function () {
    await createteams.btnCancelChrtSetting.isDisplayed().then(async function(){
    //browser.wait(EC.visibilityOf(createteams.btnCancelChrtSetting))
      await createteams.btnCancelChrtSetting.click();
    })
  });

  When('User clicks on Cohort under Cohort listing page as {string}', async function (chrtName) {
    let chrtTitle: string = "//button[@aria-label='" + chrtName + "']"
    await element(By.xpath(chrtTitle)).click();
  });

  When('User clicks on User under User listing page as {string}', async function (userName) {
    let uname: string = "//button[contains(text(),'"+ userName +"')]"
    await element(By.xpath(uname)).click();
  });

  When('User should be able to view created Teams under Teams Tab at User Level', async function () {
    await element.all(By.xpath("//option[@class='ng-star-inserted'][contains(text(),'"+ temprandom +"' +'Real Madrid')]")).each(function (element, index) {
        element.getText().then(function (text) {
          actrealMadridopts.push(text);
          console.log(actrealMadridopts);
        })
    })
     //expect(actrealMadridopts).to.include.members(exprealMadridopts);

    await element.all(By.xpath("//option[@class='ng-star-inserted'][contains(text(),'"+ temprandom +"' +'XI Champion')]")).each(function (element, index) {
        element.getText().then(function (text) {
          actxicampopts.push(text);
        })
    })
     //expect(actxicampopts).to.include.members(expxicampopts);

    await element.all(By.xpath("//option[@class='ng-star-inserted'][contains(text(),'"+ temprandom +"' +'XSuperKings')]")).each(function (element, index) {
        element.getText().then(function (text) {
          actxsuperkopts.push(text);
        })
    })
     //expect(actxsuperkopts).to.include.members(expxsuperkopts);

  });

  Then('User deletes all the Teams from Team Type Configuration', async function () {
    // await createteams.btnDeleteTeam1.isDisplayed().then(async function(){
    // //browser.wait(EC.visibilityOf(createteams.btnDeleteTeam1))
    //   await createteams.btnDeleteTeam1.click().then(async function(){
    //     await createteams.btnYesDeleteTeam.click();
    //   })
    // })
    // await createteams.btnDeleteTeam2.isDisplayed().then(async function(){
    // //browser.wait(EC.visibilityOf(createteams.btnDeleteTeam2))
    //   await createteams.btnDeleteTeam2.click().then(async function(){
    //     await createteams.btnYesDeleteTeam.click();
    //   })
    // })
    // await createteams.btnDeleteTeam3.isDisplayed().then(async function(){
    // //browser.wait(EC.visibilityOf(createteams.btnDeleteTeam3))
    //   await createteams.btnDeleteTeam3.click().then(async function(){
    //     await createteams.btnYesDeleteTeam.click();
    //   })
    // })
    await browser.sleep(3000).then(async function(){
      await createteams.btnDelete.count().then(async function(len){
        for (let i = 1;i<=len;i++){
          let st: ElementFinder = element(By.xpath("(//i[@class='author-icon icon-delete'])['"+i+"']"));
           await st.click().then(async function(){
             await createteams.btnYesDeleteTeam.click().then(async function(){
               await browser.sleep(2000);
               console.log(len);
             })
           })
        }
      })
    })
  });

  Then('User Saves and Publish and Exits Journey Config', async function () {
    helper.saveAndPublishOnJourneyFlow();
  });