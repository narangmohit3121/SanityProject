import {Given, When, Then} from "cucumber";
import { ParticipantModulePageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantModulePage";
import { async } from "q";
import { browser } from "protractor";
import chai = require('chai');
var expect = chai.expect;
let participantmodulepage = new ParticipantModulePageLocate();

let expectedJourneyTitle = "ParticipantUserLogin Journey";
let expstagetitle = "Participant Login Stage One";

let expmoduleStagetitle = "Participant Login Stage one";

let expmoduledescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
let expmodulepoints = "+30 Points";
let expmoduleactivities = "3 Activities";
let expmoduleminutes = "30 Min";
var numberofactivites:any;
let expcompletedText = "Completed";
let expmodulescorepts = "+ 75 Points";


When("Participant user click on my journey option from left panel", async function () {

    browser.waitForAngularEnabled(false);
    await participantmodulepage.myJourneyLinkLnk.isDisplayed().then(async function(){
        await participantmodulepage.myJourneyLinkLnk.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });


  Then("Participant should all modules displayed on my journey Page", async function () {
    await participantmodulepage.moduleOne.isDisplayed().then(async function(){
        await participantmodulepage.moduleOne.getText().then(async function(actmoduletitle1){
            console.log("Module one is  "+actmoduletitle1);
            expect("Participant Login Module one").to.equal(actmoduletitle1);
            console.log("Module one passed")
        })
    })
    await participantmodulepage.moduleTwo.isDisplayed().then(async function(){
        await participantmodulepage.moduleTwo.getText().then(async function(actmoduletitle2){
            console.log("Module two is  "+actmoduletitle2);
            expect("Module two").to.equal(actmoduletitle2);
            console.log("Module two passed")
        })
    })
        await browser.sleep(3000);
  });


// Then('Participant should be landed to Module Page', async function () {
//     await participantmodulepage.p_moduleTitle.isDisplayed().then(async function(){
//         await participantmodulepage.p_moduleTitle.getText().then(async function(actmoduletitle){
//             expect(expmoduletitle).to.equal(actmoduletitle);
//         })
//     })
//   });

  Then("Participant should verify Journey Title, Stage Title, Module Title, Module Description, Points, Activity count, Time and SVG icon", async function () {
   
    await participantmodulepage.journeyTitle.isDisplayed().then(async function(){
        await participantmodulepage.journeyTitle.getText().then(async function(actjourneytitle){
            console.log("Journey Title is "+actjourneytitle);
            expect(expectedJourneyTitle).to.equal(actjourneytitle);
        })
    })
   
    await participantmodulepage.p_moduleStageTitle.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleStageTitle.getText().then(async function(actmoduleStagetitle){
            console.log("Module Stage Title is "+actmoduleStagetitle);
            expect(expmoduleStagetitle).to.equal(actmoduleStagetitle);
        })
    })



    await participantmodulepage.moduleOne.isDisplayed().then(async function(){
        await participantmodulepage.moduleOne.getText().then(async function(actmoduletitle1){
            console.log("Module1 Title is "+actmoduletitle1);
            expect("Participant Login Module one").to.equal(actmoduletitle1);
        })
    })
    await participantmodulepage.moduleTwo.isDisplayed().then(async function(){
        await participantmodulepage.moduleTwo.getText().then(async function(actmoduletitle2){
            console.log("Module2 Title is "+actmoduletitle2);
            expect("Module two").to.equal(actmoduletitle2);
        })
    })


    await participantmodulepage.p_moduleActivities.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleActivities.getText().then(async function(actmoduleactivities){
            console.log("Module2 activity  is  "+actmoduleactivities);
            expect(expmoduleactivities).to.equal(actmoduleactivities);
        })
    })

  });

  Then('Participant should compare count of activities in header with activities in Module Page', async function () {
      await browser.sleep(4000);
      var numberofactivites1:string;
    await participantmodulepage.p_moduleActivities.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleActivities.getText().then(async function(actmoduleactivities:string){

            
            console.log(actmoduleactivities);
             numberofactivites1 = actmoduleactivities.charAt(0)
             //console.log("first character is "+numberofactivites1);
             console.log(actmoduleactivities.charAt(0));
        })
    })

    await participantmodulepage.StartButtonModuleOne.click().then(async function(){
        
    })
    numberofactivites = numberofactivites1;
    console.log(numberofactivites);
    await participantmodulepage.p_moduleActivitiesList.count().then(async function(actcount:any){
        console.log("Before Validation !!!!")
     //   expect(numberofactivites).to.equal(actcount);
     let acc = actcount.toString();
     console.log("Before validation  count value is  "+acc);
     console.log("Before validation  no of activities  value is  "+numberofactivites);
   //     expect(numberofactivites).eql(actcount);
        expect(numberofactivites).to.be.eql(acc);
        console.log("Validation Passed !!!!")
        
    })
  });


  
When("Participant user complete first activity of first module", async function () {
      await browser.sleep(5000);
      browser.waitForAngularEnabled(false);
//  await browser.sleep(2000)
    await participantmodulepage.oneActivityStartBtn.isDisplayed().then(async function(){
        await participantmodulepage.oneActivityStartBtn.click().then(async function(){
            await browser.sleep(5000);
        })
    })

    browser.waitForAngularEnabled(false);
    await browser.sleep(5000);
    await participantmodulepage.activityContinuetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activityContinuetBtn.click().then(async function(){
            await browser.sleep(4000);
        })
    })

  });


  When("Participant clicks on resume button of module one", async function () {

    browser.waitForAngularEnabled(false);

    await participantmodulepage.activitymoduleOneResumetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activitymoduleOneResumetBtn.click().then(async function(){
            await browser.sleep(2000);

        })
    })
  });


  
  When("Participant clicks on resume button of module one to complete all activiites", async function () {
 
    await browser.sleep(4000);
    browser.waitForAngularEnabled(false);

    await participantmodulepage.activitymoduleOneResumetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activitymoduleOneResumetBtn.click().then(async function(){
            await browser.sleep(2000);

        })
    })
  });

    
  When("Participant user complete all activiites in module one", async function () {
 
    await browser.sleep(4000);
  //  browser.waitForAngularEnabled(false);

    await participantmodulepage.activityContinuetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activityContinuetBtn.click().then(async function(){
            await browser.sleep(2000);
        })
    })

   //  browser.waitForAngularEnabled(false);
    await browser.sleep(5000);
    await participantmodulepage.activityContinuetBtn.isDisplayed().then(async function(){
        await participantmodulepage.activityContinuetBtn.click().then(async function(){
            await browser.sleep(2000);
        })
    })


  });



  Then('Participant should see the completed activities converted as Revisit', async function () {
    await participantmodulepage.activitymoduleOneRevisittBtn.isPresent().then(async function(falg){
        expect(falg).to.be.true;
        //await browser.sleep(2000);
    })
    //browser.ignoreSynchronization=true;
   // browser.waitForAngularEnabled(false);
  });

  When('Participant clicks on Back Top Arrow', async function () {
    await participantmodulepage.p_moduleCompletionPageTopBackArrow.isDisplayed().then(async function(){
        await participantmodulepage.p_moduleCompletionPageTopBackArrow.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

//   Then('Participant should see the module completion page along with check icon and completed status', async function () {
//       await participantmodulepage.p_moduleCompletionPageCompletedText.getText().then(async function(actcompletedText){
//         expect(actcompletedText).to.equal(expcompletedText);
//     }) 
//       await participantmodulepage.p_moduleCompletionPageCompletedCheckIcon.isDisplayed().then(async function(isIconPresent){
//         expect(isIconPresent).to.be.true;
//       })
//       await participantmodulepage.p_moduleCompletionPageScorePoints.getText().then(async function(actmodulescorepts){
//         expect(actmodulescorepts).to.equal(expmodulescorepts);
//       })
//   });

  
  Then('Participant should see the module completion page along with check icon and completed status', async function () {
    
    await participantmodulepage.moduleCompletionPageLbl.isPresent().then(async function(falg){
        expect(falg).to.be.true;
        await browser.sleep(2000);


    })
});