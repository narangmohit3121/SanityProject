import { protractor } from "protractor/built/ptor";
import {When, Then, Before} from "cucumber";
import { browser, By, element } from "protractor";
import chai = require('chai');
import {completionBadgesPageLocate} from "../../../PageObjects//AuthorApp POM/Journey/CompletionBadgesPage"
import { join } from "path";
import { cmsHelperFunctions } from "../../cmsHelperClass";
import { apiHelperFunctions } from "../../apiHelperClass";
import Testdata from "../../../testData.json";
var EC = protractor.ExpectedConditions;
var expect = chai.expect;
let completionBadge=new completionBadgesPageLocate();
let actHomePagetxt = "Get started";
let actMyProgresstxt = "My progress";
let actPercentagetxt = "0% of your journey complete";
let actMypoint = "My points";
let actTopPoint = "Top points";
let actAvgPoint = "Average points";
let actMyAcplmennt = "My accomplishments";
let actJrnyCompltdMsg = "Congratulations, you’ve successfully completed this module of your journey.";



When ('User able to see progress and scoring tab and click on it', async function(){
    await completionBadge.tabProgressScoring.isDisplayed().then(async function(){
        await completionBadge.tabProgressScoring.click();
    })
})

When ('User able to see Toggle of Enable My Progress and click on it', async function(){
    await completionBadge.tglMyProgress.isDisplayed().then(async function(){
        await completionBadge.tglMyProgress.click();
    })
})

When ('User able to see Toggle of Completion percent meter and click on it', async function(){
    await completionBadge.tglCompletionPercentMeter.isDisplayed().then(async function(){
        await completionBadge.tglCompletionPercentMeter.click();
    })
})

When ('User able to see Toggle of My points and click on it', async function(){
    await completionBadge.tglMyPoint.isDisplayed().then(async function(){
        await completionBadge.tglMyPoint.click();
    })
})

When ('User able to see Toggle of Top points and click on it',async function(){
    await completionBadge.tglTopPoint.isDisplayed().then(async function(){
        await completionBadge.tglTopPoint.click();
    })
})

When ('User able to see Toggle of Average and click on it', async function(){
    await completionBadge.tglAverage.isDisplayed().then(async function(){
        await completionBadge.tglAverage.click();
    })
})

When ('User able to see radio button of Cohort and click on it',async function(){
    await completionBadge.radiobtnCohort.isDisplayed().then(async function(){
        await completionBadge.radiobtnCohort.click();
    })
})

When ('User able to see Toggle of My accomplishments and click on it', async function(){
    await completionBadge.tglMyAccomplishment.isDisplayed().then(async function(){
        await completionBadge.tglMyAccomplishment.click();
    })
})


When ('User able to see plus icon beside accomplishments and click on it',async function(){
    await completionBadge.btnAddAccomplishment.isDisplayed().then(async function(){
        await completionBadge.btnAddAccomplishment.click();
    })
}) 

When ('User able to type accomlishments badge id as {string}',async function(string){
    await completionBadge.txtInputBadgeId.isDisplayed().then(async function(){
        await completionBadge.txtInputBadgeId.sendKeys(string);
    })
})

When ('User able to type accomlishments title as {string}',async function(string){
    await completionBadge.txtInputAccomplishmentTitle.isDisplayed().then(async function(){
        await completionBadge.txtInputAccomplishmentTitle.sendKeys(string);
    })
})

let helper = new cmsHelperFunctions();
When ('User able to Browse image under not awarded gold',async function(){
    await completionBadge.btnBrowseNA.isDisplayed().then(async function(){
        await completionBadge.btnBrowseNA.click();
    })
    await completionBadge.icnMediaFolder.isDisplayed().then(async function(){
        await completionBadge.icnMediaFolder.click();
    })
    await completionBadge.selectSize.isDisplayed().then(async function(){
        await completionBadge.selectSize.click();
    })
    await completionBadge.imgNotAwardedSG.isDisplayed().then(async function(){
        await completionBadge.imgNotAwardedSG.click();
    })
    await completionBadge.btnInsertImg.isDisplayed().then(async function(){
        await completionBadge.btnInsertImg.click();
    })




    // let imagePath: string = join(process.cwd(), 'TestData','Badges', 'star-gold-notawarded.svg');
    // await helper.uploadImage(imagePath, "Image not awarded", "Completion not Badge");
    // await browser.sleep(5000);
})

When ('User able to Browse image under awarded gold',async function(){
    await completionBadge.btnBrowseA.isDisplayed().then(async function(){
        await completionBadge.btnBrowseA.click();
    })
    await completionBadge.icnMediaFolder.isDisplayed().then(async function(){
        await completionBadge.icnMediaFolder.click();
    })
    await completionBadge.selectSize.isDisplayed().then(async function(){
        await completionBadge.selectSize.click();
    })
    await completionBadge.imgAwardedSG.isDisplayed().then(async function(){
        await completionBadge.imgAwardedSG.click();
    })
    await completionBadge.btnInsertImg.isDisplayed().then(async function(){
        await completionBadge.btnInsertImg.click();
    })
    // let imagePath: string = join(process.cwd(),'TestData','Badges','star-gold-awarded.svg');
    // await helper.uploadImage(imagePath, "Image awarded", "Completion badge awarded");
    // await browser.sleep(5000);
})

When ('User able to see Completion Trigger as Not Selected and click on it',async function(){
    await completionBadge.ddCompletionTrigger.isDisplayed().then(async function(){
        await completionBadge.ddCompletionTrigger.click();
        await browser.sleep(3000);
    })
})

When ('User able to select completion trigger as Completion Badge Stage 1',async function(){
    await completionBadge.ddCTStage1.isDisplayed().then(async function(){
        await completionBadge.ddCTStage1.click();
    })
})

When ('User able to see Save button of accomlishments and click on it',async function(){
    await browser.sleep(5000);
    
    await completionBadge.btnSaveAccomplishment.isDisplayed().then(async function(){
        await completionBadge.btnSaveAccomplishment.click();
    })
    await browser.sleep(2000);
})


When ('User able to Browse image under not awarded silver',async function(){
    await completionBadge.btnBrowseNA.isDisplayed().then(async function(){
        await completionBadge.btnBrowseNA.click();
    })
    await completionBadge.icnMediaFolder.isDisplayed().then(async function(){
        await completionBadge.icnMediaFolder.click();
    })
    await completionBadge.selectSize.isDisplayed().then(async function(){
        await completionBadge.selectSize.click();
    })
    await completionBadge.imgNotAwardedSS.isDisplayed().then(async function(){
        await completionBadge.imgNotAwardedSS.click();
    })
    await completionBadge.btnInsertImg.isDisplayed().then(async function(){
        await completionBadge.btnInsertImg.click();
    })
    // let imagePath: string = join(process.cwd(), 'TestData','Badges', 'star-silver-notawarded.svg');
    // await helper.uploadImage(imagePath, "Image not awarded", "Completion not Badge");
    // await browser.sleep(5000);
})


When ('User able to Browse image under awarded silver',async function(){
    await completionBadge.btnBrowseA.isDisplayed().then(async function(){
        await completionBadge.btnBrowseA.click();
    })
    await completionBadge.icnMediaFolder.isDisplayed().then(async function(){
        await completionBadge.icnMediaFolder.click();
    })
    await completionBadge.selectSize.isDisplayed().then(async function(){
        await completionBadge.selectSize.click();
    })
    await completionBadge.imgAwardedSS.isDisplayed().then(async function(){
        await completionBadge.imgAwardedSS.click();
    })
    await completionBadge.btnInsertImg.isDisplayed().then(async function(){
        await completionBadge.btnInsertImg.click();
    })
    // let imagePath: string = join(process.cwd(), 'TestData','Badges', 'star-silver-awarded.svg');
    // await helper.uploadImage(imagePath, "Image awarded", "Completion Badge");
    // await browser.sleep(5000);
})

When ('User able to select completion trigger as Completion Badge Stage 2',async function(){
    await completionBadge.ddCTStage2.isDisplayed().then(async function(){
        await completionBadge.ddCTStage2.click();
    })
})

When ('User able to see edit icon of Completion badge 1 and click on it',async function(){
    
    await completionBadge.icnEditCB1.isDisplayed().then(async function(){
        await completionBadge.icnEditCB1.click();
    })
    await browser.sleep(3000);
})

When ('User able to see edit icon of Completion badge 2 and click on it',async function(){
    await completionBadge.icnEditCB2.isDisplayed().then(async function(){
        await completionBadge.icnEditCB2.click();
    })
    await browser.sleep(3000);
})


When ('User able to see delete icon of Completion badge 1 and click on it',async function(){
    await completionBadge.icnDeleteCB1.isDisplayed().then(async function(){
        await completionBadge.icnDeleteCB1.click();
    })
})

When ('User able to see Delete confirmation alert popup and click delete button',async function(){
    await completionBadge.btnDeletePopupCB.isDisplayed().then(async function(){
        await completionBadge.btnDeletePopupCB.click();

    })
})

When ('User able to see delete icon of Completion badge 2 and click on it',async function(){
    await completionBadge.icnDeleteCB2.isDisplayed().then(async function(){
        await completionBadge.icnDeleteCB2.click();
    })
})


Then ('User should to see home page of user',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
   await completionBadge.headerHomePage.isDisplayed().then(async function(){
       await completionBadge.headerHomePage.getText().then(async function(homepagetxt){
        await console.log(homepagetxt);   
        expect(homepagetxt).to.equal(actHomePagetxt);
       })
   })
   browser.waitForAngularEnabled(true);
    
})

Then ('User should to see My Progress',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.headerMyProgress.isDisplayed().then(async function(){
        await completionBadge.headerMyProgress.getText().then(async function(myprgs){
            await console.log(myprgs);
            expect(myprgs).to.equal(actMyProgresstxt);
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should to see Percentage of journey complete as zero',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.headerPercentageBar.isDisplayed().then(async function(){
        await completionBadge.headerPercentageBar.getText().then(async function(percentage){
            await console.log(percentage);
            expect(percentage).to.equal(actPercentagetxt);
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should to see My Points Top Points and  Avarage Points as zero',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.headerMyPoints.isDisplayed().then(async function(){
        await completionBadge.headerMyPoints.getText().then(async function(mypoint){
            await console.log(mypoint);
            expect(mypoint).to.equal(actMypoint);
        })
    })
    await completionBadge.valueMyPoints.isDisplayed().then(async function(){
        await completionBadge.valueMyPoints.getText().then(async function(value1){
            await console.log(value1);
            expect(value1).to.equal("0");
        })
    })
    await completionBadge.headerTopPoints.isDisplayed().then(async function(){
        await completionBadge.headerTopPoints.getText().then(async function(toppoint){
            await console.log(toppoint);
            expect(toppoint).to.equal(actTopPoint);
        })
    })
    await completionBadge.valueTopPoints.isDisplayed().then(async function(){
        await completionBadge.valueTopPoints.getText().then(async function(value2){
            await console.log(value2);
            expect(value2).to.equal("0");
        })
    })

    await completionBadge.headerAveragePoints.isDisplayed().then(async function(){
        await completionBadge.headerAveragePoints.getText().then(async function(avgpoint){
            await console.log(avgpoint);
            expect(avgpoint).to.equal(actAvgPoint);
        })
    })
    await completionBadge.valueAveragePoints.isDisplayed().then(async function(){
        await completionBadge.valueAveragePoints.getText().then(async function(value3){
            await console.log(value3);
            expect(value3).to.equal("0");
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should to see My Accomplishment Badges as Not awarded',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.headerMyAccomplishment.isDisplayed().then(async function(){
        await completionBadge.headerMyAccomplishment.getText().then(async function(myacmplmnt){
            await console.log(myacmplmnt);
            expect(myacmplmnt).to.equal(actMyAcplmennt);
        })
    })
    await completionBadge.imgNotAwarededCB1.isDisplayed().then(async function(result){
        await console.log("Completion Badge 1 Not Awarded");
        expect(result).to.be.true;
       
    })
     
    await completionBadge.imgNotAwarededCB2.isDisplayed().then(async function(result1){
        await console.log("Completion Badge 2 Not Awarded");
        expect(result1).to.be.true;
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see Start button of Completion badge Activity 1 and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.btnStartAcvt.isDisplayed().then(async function(){
        await completionBadge.btnStartAcvt.click();
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see continue button of Completion badge Activity 1 and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await browser.wait(EC.visibilityOf(completionBadge.btnCntNxtAcvt),100000).then(async function(){
        await completionBadge.btnCntNxtAcvt.isDisplayed().then(async function(){
            await completionBadge.btnCntNxtAcvt.click();
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see Go to Next Module Button and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await completionBadge.btnGoToNxtModule.isDisplayed().then(async function(){
        await completionBadge.btnGoToNxtModule.click();
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see Start button of Completion badge Activity 2 and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await completionBadge.btnStartAcvt.isDisplayed().then(async function(){
        await completionBadge.btnStartAcvt.click();
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see continue button of Completion badge Activity 2 and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await browser.wait(EC.visibilityOf(completionBadge.btnCntNxtAcvt),100000).then(async function(){
        await completionBadge.btnCntNxtAcvt.isDisplayed().then(async function(){
            await completionBadge.btnCntNxtAcvt.click();
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see continue button of Completion badge Activity 3 and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await browser.wait(EC.visibilityOf(completionBadge.btnCntNxtAcvt),100000).then(async function(){
    await completionBadge.btnCntNxtAcvt.isDisplayed().then(async function(){
        await completionBadge.btnCntNxtAcvt.click();
    })
})
    browser.waitForAngularEnabled(true);
})

Then ('User should see Go to Next Stage Button and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await completionBadge.btnGotoNxtStage.isDisplayed().then(async function(){
        await completionBadge.btnGotoNxtStage.click();
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see Start button of Completion badge Activity 4 and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await completionBadge.btnStartAcvt.isDisplayed().then(async function(){
        await completionBadge.btnStartAcvt.click();
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see continue button of Completion badge Activity 4 and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await browser.wait(EC.visibilityOf(completionBadge.btnCntNxtAcvt),100000).then(async function(){
        await completionBadge.btnCntNxtAcvt.isDisplayed().then(async function(){
            await completionBadge.btnCntNxtAcvt.click();
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see Journey completion message',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await completionBadge.txtJrnyCmplMsg.isDisplayed().then(async function(){
        await completionBadge.txtJrnyCmplMsg.getText().then(async function(msg){
            await console.log(msg);
            expect(msg).to.be.equal(actJrnyCompltdMsg);
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should see Home page button on left panel and click on it',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await completionBadge.btnHomePage.isDisplayed().then(async function(){
        await completionBadge.btnHomePage.click();
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should to see Percentage of journey complete as hundred',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.headerPercentageBar.isDisplayed().then(async function(){
        await completionBadge.headerPercentageBar.getText().then(async function(percentage){
            await console.log(percentage);
            expect(percentage).to.equal("100% of your journey complete");
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should to see My Points Top Points and  Avarage Points as forty',async function(){
    browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    await completionBadge.valueMyPoints.isDisplayed().then(async function(){
        await completionBadge.valueMyPoints.getText().then(async function(value1){
            await console.log(value1);
            expect(value1).to.equal("40");
        })
    })
    
    await completionBadge.valueTopPoints.isDisplayed().then(async function(){
        await completionBadge.valueTopPoints.getText().then(async function(value2){
            await console.log(value2);
            expect(value2).to.equal("40");
        })
    })

    
    await completionBadge.valueAveragePoints.isDisplayed().then(async function(){
        await completionBadge.valueAveragePoints.getText().then(async function(value3){
            await console.log(value3);
            expect(value3).to.equal("20");
        })
    })
    browser.waitForAngularEnabled(true);
})

Then ('User should to see My Accomplishment Badges as awarded',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.imgAwardedCB1.isDisplayed().then(async function(result){
        await console.log("Completion badge 1 Awarded")
        expect(result).to.be.true;
    })

    await completionBadge.imgAwaredeCB2.isDisplayed().then(async function(result){
        await console.log("Completion badge 2 Awarded")
        expect(result).to.be.true;
    })
    browser.waitForAngularEnabled(true);
})


Then ('User should see My points top points and average points correctly',async function(){
    browser.waitForAngularEnabled(false);
    await completionBadge.valueMyPoints.isDisplayed().then(async function(){
        await completionBadge.valueMyPoints.getText().then(async function(mypoints2){
            await console.log(mypoints2);
            expect(mypoints2).to.be.equal("0")
        })
    })

    await completionBadge.valueTopPoints.isDisplayed().then(async function(){
        await completionBadge.valueTopPoints.getText().then(async function(toppoints2){
            await console.log(toppoints2);
            expect(toppoints2).to.be.equal("40")
        })
    })
    await completionBadge.valueAveragePoints.isDisplayed().then(async function(){
        await completionBadge.valueAveragePoints.getText().then(async function(avgpoint2){
            await console.log(avgpoint2);
            expect(avgpoint2).to.be.equal("20")
        })
    })
    browser.waitForAngularEnabled(true);
})

let apiHelper = new apiHelperFunctions();
Before({tags:"@CompletionBadge04"}, async function(){
    await apiHelper.resetUser(Testdata.AdminLogin.Username,Testdata.AdminLogin.Password,"bts",Testdata.apiBuildVersion,
    "5d82323fd9b8ca499403e5bd","completion.badge@petronas.com","ee5c7259cd087a79515e");
    await console.log("Reset Journey Data of completion.badge@petronas.com");
})

Before({tags:"@CompletionBadge06"}, async function(){
    await apiHelper.resetUser(Testdata.AdminLogin.Username,Testdata.AdminLogin.Password,"bts",Testdata.apiBuildVersion,
    "5d82323fd9b8ca499403e5bd","completion.badge1@petronas.com","ee5c7259cd087a79515e");
    await console.log("Reset Journey Data of completion.badge1@petronas.com");
})