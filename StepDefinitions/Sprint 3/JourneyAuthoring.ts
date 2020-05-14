import {When, Then} from "cucumber";
import {browser, protractor, element, By} from "protractor";
import chai = require('chai');
import { JourneyAuthoringLocate } from "../../PageObjects/Sprint 3/JourneyAuthoring";
import { async } from "q";
let path = require("path");
let expect = chai.expect;
var listexists = true;
let journeystr = "Journey: Journey Name";
let previewtitle = "My Journey";

let journeyauthoring = new JourneyAuthoringLocate();
let exppanellist:Array<string>=[];
// let actpanellist:Array<string>=['Journey Flow',
// 'Journey Configuration',
// 'Resources',
// 'Leader Board',
// 'Journey Script',
// 'Notifications'];
var actpanellist = ['Journey Flow','Journey Configuration','Resources','Leader Board','Journey Script','Notifications'];

let expstageoptions:Array<string>=[];
let expmoduleoptions:Array<string>=[];
let expactivityoptions:Array<string>=[];
let actstageoptions:Array<string>=['Edit','Add Module','Add Activity','Delete'];
let actmoduleoptions:Array<string>=['Edit','Add Activity','Delete'];
let actactivityoptions:Array<string>=['Edit','Delete'];

When('User clicks on any Journey and landed to Journey Authoring page', async function () {
    await journeyauthoring.tleJourneyName.isDisplayed().then(async function(){
        await journeyauthoring.tleJourneyName.click().then(async function(){
            browser.sleep(2000);
        })
    })
  });

  Then('User should verfiy that the Journey name should match the Journey name on page top', async function () {
    await journeyauthoring.journeyNameText.getText().then(async function(journeytext){
        console.log(journeytext);
        expect(journeytext).to.equal(journeystr);
    })
    })
  
    Then('User should be able to validate presence of Add Stage and Add Module icons', async function () {
        await journeyauthoring.btnAddStage.isDisplayed().then(async function(){
            browser.sleep(1000);
        await journeyauthoring.btnAddModule.isDisplayed().then(async function(){
            browser.sleep(1000);
        })    
        })
      });

    Then('User should be able to view client name and logo', async function () {
        await journeyauthoring.imgClientLogo.isDisplayed();
      });

    Then('User should be able to view static menu content at the left side panel', async function () {
        await journeyauthoring.lstLeftPanelTreeItem.each(function(element){
            element.getText().then(function(txt){
                exppanellist.push(txt);
                //console.log(txt);
            })
        })
        
        expect(actpanellist).to.include.members(exppanellist);
      });

    When('User clicks on Add Stage button', async function () {
        await journeyauthoring.btnAddStage.isDisplayed().then(async function(){
            await journeyauthoring.btnAddStage.click().then(async function(){
                browser.sleep(1000);
            })
        })
      });
      
    Then('User should be able to see New Stage should be added', async function () {
        await journeyauthoring.ttlNewStage.isDisplayed().then(async function(){
            await browser.sleep(1000);
        })
      });

    Then('User should click on Save button', async function () {
        await journeyauthoring.btnJourneyAuthSave.isDisplayed().then(async function(){
            await journeyauthoring.btnJourneyAuthSave.click().then(async function(){
                browser.sleep(2000);
            })
        })
      });

    When('User clicks on Preview button', async function () {
        await journeyauthoring.btnJourneyAuthPreview.isEnabled().then(async function(){
            await journeyauthoring.btnJourneyAuthPreview.click().then(function(){
                browser.sleep(8000);
            });
            
                // browser.getAllWindowHandles().then(function(handles){
                     
                //     //let firstWindow = handles[0];
                //     //let previewWindow = handles[1];
                //     browser.switchTo().window(handles[1]).then(function (){
                //         browser.sleep(2000);
                //     });    
                //    });
                var winHandles=browser.getAllWindowHandles();
                winHandles.then(function(handles) 
                    {
                        var parentWindow=handles[0];
                        var popUpWindow=handles[1];
                        browser.switchTo().window(popUpWindow).then(function(){
                            browser.sleep(5000);
                        })
                        //browser.switchTo().window(parentWindow);
                    })
                });  
        })
     

    Then('User should be landed to Preview page', async function () {
        await journeyauthoring.previewMyJourney.getText().then(function(journeytitle){
           expect(journeytitle).to.equal(previewtitle);
        })
      });

    When('User clicks on more icon of STAGE', async function () {
        await journeyauthoring.journeyStageMoreIcon.isDisplayed().then(async function(){
            await journeyauthoring.journeyStageMoreIcon.click();
        })
      });

    Then('User should view four options of STAGE', async function () {
        await journeyauthoring.journeyStageMoreOptions.each(function(element,index){
            element.getText().then(function(stageopts){
                //console.log(stageopts);
                expstageoptions.push(stageopts);
                console.log(expstageoptions);
                console.log(actstageoptions);
                //expect(actstageoptions).to.include.members(expstageoptions);
            })
        })
      });

    When('User clicks on Add Module option', async function () {
        await journeyauthoring.dotAddModuleInStage.isDisplayed().then(async function(){
            await journeyauthoring.dotAddModuleInStage.click().then(async function(){
                browser.sleep(1000);
            })
        })
      });

    Then('User should view New Module should get added under STAGE', async function () {
        await journeyauthoring.journeyStageNewModule.isDisplayed().then(async function(){
            browser.sleep(2000);
        })
      }); 

    When('User clicks on Add Activity option', async function () {
        await journeyauthoring.dotAddActivityInStage.isDisplayed().then(async function(){
            await journeyauthoring.dotAddActivityInStage.click().then(async function(){
                browser.sleep(1000);
            })
        })
      });

    Then('User should view New Activity under STAGE', async function () {
        await journeyauthoring.journeyStageNewActivity.isDisplayed().then(async function(){
            browser.sleep(2000);
        })
      });

    When('User clicks on Edit option', async function () {
        await journeyauthoring.dotEditStage.isDisplayed().then(async function(){
            await journeyauthoring.dotEditStage.click().then(async function(){
                browser.sleep(1000);
            })
        })
      });

    When('User enters name of STAGE as blank', async function () {
        await journeyauthoring.journeyStageTextBox.isDisplayed().then(async function(){
            await journeyauthoring.journeyStageTextBox.clear();
        })
      });

    Then('User clicks on Done button', async function () {
        await journeyauthoring.journeyStageDonebtn.isDisplayed().then(async function(){
            await journeyauthoring.journeyStageDonebtn.click().then(async function(){
                browser.sleep(4000);
            })
        })
      });  

    Then('User should get error message', async function () {
        
      });

    When('User clicks on more icon of MODULE', async function () {
        await journeyauthoring.journeyModuleMoreIcon.isDisplayed().then(async function(){
            await journeyauthoring.journeyModuleMoreIcon.click();
        })
      });

    When('User enters name of MODULE as blank', async function () {
        await journeyauthoring.journeyStageTextBox.isDisplayed().then(async function(){
            await journeyauthoring.journeyStageTextBox.clear();
        })
      });

    Then('User should view New Activity under MODULE', async function () {
        await journeyauthoring.journeyStageNewActivity.isDisplayed().then(async function(){
            browser.sleep(2000);
        })
      });

    When('User clicks on more icon of ACTIVITY', async function () {
        await journeyauthoring.journeyActivityMoreIcon.isDisplayed().then(async function(){
            await journeyauthoring.journeyActivityMoreIcon.click();
        })
      });

    When('User enters name of ACTIVITY as blank', async function () {
        await journeyauthoring.journeyStageTextBox.isDisplayed().then(async function(){
            await journeyauthoring.journeyStageTextBox.clear();
        })
      });

    Then('User should view three options of MODULE', async function () {
        await journeyauthoring.journeyStageMoreOptions.each(function(element,index){
            element.getText().then(function(moduleopts){
                //console.log(stageopts);
                expmoduleoptions.push(moduleopts);
                console.log(expmoduleoptions);
                console.log(actmoduleoptions);
                //expect(actstageoptions).to.include.members(expstageoptions);
            })
        })
      });

    Then('User should view two options of ACTIVITY', async function () {
        await journeyauthoring.journeyStageMoreOptions.each(function(element,index){
            element.getText().then(function(activityopts){
                //console.log(stageopts);
                expactivityoptions.push(activityopts);
                console.log(expactivityoptions);
                console.log(actactivityoptions);
                //expect(actstageoptions).to.include.members(expstageoptions);
            })
        })
      });