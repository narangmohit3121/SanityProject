import{When,Then} from "cucumber";
import { BluePrintPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/BluePrintPage";
import { ClientPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/ClientLandingPage";
import { element, browser, protractor } from "protractor";
import { By } from "selenium-webdriver";
import chai = require('chai');
import { HelperFunctions } from "../../HelperClass";
let expect = chai.expect;
var EC = protractor.ExpectedConditions;
let blueprint = new BluePrintPageLocate();
let clientLandingPage = new ClientPageLocate();
let helperclass = new HelperFunctions();

let expttlBPS3: string = "BluePrint Stage 3";

When('User clicks on Edit Stage {string}', async function (stagename) {
    let bpstage: string = "(//h3[contains(text(),'" + stagename + "')]//following::span[@class='mat-button-wrapper']//i[@class='author-icon icon-dots master-collection__icon journey-section__fontcolor'])[1]"
    await element(By.xpath(bpstage)).click().then(async function(){
        await clientLandingPage.moreIconEditOption.isDisplayed().then(async function () {
            await clientLandingPage.moreIconEditOption.click()
        })
    })
});

When('User clicks on Lifecycle Tab', async function () {
    await blueprint.tabLifecycleEditStage.isDisplayed().then(async function(){
        await blueprint.tabLifecycleEditStage.click().then(async function(){
            await browser.sleep(5000);
        })
    })
});

When('User clicks on plus icon of Lifecycle {string}', async function (lifecycle) {
    let bpstage: string = "//label[contains(text(),'" + lifecycle + "')]//following::span[contains(text(),'+')][1]"
    await element(By.xpath(bpstage)).click();
});

When('User clicks on static radio button of Lifecycle {string}', async function (lifecycle) {
    let radiobtn: string = "(//label[contains(text(),'" + lifecycle + "')]//following::span[contains(text(),'Static')][1])//preceding::div[@class='mat-radio-container'][1]"
    await browser.actions().mouseMove(element(By.xpath(radiobtn))).click().perform().then(async function(){
        await element(By.xpath(radiobtn)).isPresent().then(async function(){
            await browser.sleep(2000).then(async function(){
                await element(By.xpath(radiobtn)).click().then(async function(){
                    await browser.sleep(5000).then(async function(){
                    })
                })
            })
        })
    }) 
});

When('User clicks on relative radio button of Lifecycle {string}', async function (lifecycle) {
    let radiobtn: string = "(//label[contains(text(),'" + lifecycle + "')]//following::span[contains(text(),'Relative')][1])//preceding::div[@class='mat-radio-container'][1]"
    await element(By.xpath(radiobtn)).isPresent().then(async function(){
        await browser.sleep(2000).then(async function(){
            await element(By.xpath(radiobtn)).click().then(async function(){
                await browser.sleep(5000).then(async function(){
                })
            })
        })
    })
});

When('User sets date and time', async function () {
    await browser.actions().mouseMove(blueprint.selectDateTime).perform().then(async function(){
        await blueprint.selectDateTime.isDisplayed().then(async function(){
            await blueprint.selectDateTime.click().then(async function(){
                for (let i = 1; i <= 4; i = i + 1){
                    await blueprint.arrowAddMinute.click().then(async function(){
                        await browser.sleep(1000);
                    })
                }
                await blueprint.btnSetDateTime.click();
            })
        })
    })
});

When('User selects Days as {string} and After as {string} and Stage as {string} and final Stage as {string}', async function (days, after, stage, finalstage) {
    await blueprint.drpCondition1.isDisplayed().then(async function(){
        await blueprint.drpCondition1.click().then(async function(){
            await blueprint.optDays.isDisplayed().then(async function(){
                await blueprint.optDays.click();
            })
        })
    })
    await blueprint.drpCondition2.isDisplayed().then(async function(){
        await blueprint.drpCondition2.click().then(async function(){
            await blueprint.optAfter.isDisplayed().then(async function(){
                await blueprint.optAfter.click();
            })
        })
    })
    await blueprint.drpCondition3.isDisplayed().then(async function(){
        await blueprint.drpCondition3.click().then(async function(){
            await blueprint.optActivityStart.isDisplayed().then(async function(){
                await blueprint.optActivityStart.click();
            })
        })
    })
    await blueprint.drpCondition4.isDisplayed().then(async function(){
        await blueprint.drpCondition4.click().then(async function(){
            await blueprint.optBluePrintAct1.isDisplayed().then(async function(){
                await blueprint.optBluePrintAct1.click();
            })
        })
    })
});

When('User clicks on Save button of Edit Stage', async function () {
    await blueprint.btnSaveEditStage.isDisplayed().then(async function(){
        await blueprint.btnSaveEditStage.click().then(async function(){
            await browser.sleep(3000);
        })
    })
});

When('User starts first Activity', async function () {
    //browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    await blueprint.btnStartModule1.isDisplayed().then(async function(){
        await blueprint.btnStartModule1.click().then(async function(){
            // await blueprint.btnStartActivity1.isDisplayed().then(async function(){
            //     await blueprint.btnStartActivity1.click();
            // })
            await browser.sleep(3000);
        })
    })
    browser.waitForAngularEnabled(true);
});

When('User clicks on My Journey', async function () {
    browser.waitForAngularEnabled(false);
    await blueprint.myJourney.isDisplayed().then(async function(){
        await blueprint.myJourney.click().then(async function(){
            await browser.sleep(3000);
        })
    })
    browser.waitForAngularEnabled(true);
});

Then('User verifies that First Stage should be Locked', async function () {
    browser.waitForAngularEnabled(false);
    await blueprint.icnLockedBP1.isPresent().then(async function(lockIcn){
        console.log(lockIcn);
        expect(lockIcn).to.be.true;
    })
    await browser.sleep(3000);
    browser.waitForAngularEnabled(true);
});

When('User starts second Activity', async function () {
    browser.waitForAngularEnabled(false);
    await blueprint.btnStartModule2.isDisplayed().then(async function(){
        await blueprint.btnStartModule2.click().then(async function(){
            await browser.wait(EC.visibilityOf(blueprint.btnStartActivity2)).then(async function(){
                await blueprint.btnStartActivity2.click().then(async function(){
                    await browser.sleep(3000);
                })
            })
            // await blueprint.btnStartActivity2.isDisplayed().then(async function(){
            //     await blueprint.btnStartActivity2.click();
            // })
        })
    })
    browser.waitForAngularEnabled(true);
});

Then('User verifies that Second Stage should become Invisible', async function () {
    browser.waitForAngularEnabled(false);
    await blueprint.ttlBluePrintStage2.isDisplayed().then(async function(ttlBPS2){
        console.log(ttlBPS2);
        //expect(ttlBPS2).to.be.false;
    })
    browser.waitForAngularEnabled(true);
});

Then('User verifies that Third Stage should become Visible', async function () {
    browser.waitForAngularEnabled(false);
    // await blueprint.ttlBluePrintStage3.isDisplayed().then(async function(){
    //     await blueprint.ttlBluePrintStage3.getText().then(async function(actttlBPS3){
    //         expect(actttlBPS3).to.be.eql(expttlBPS3);
    //     })
    // })
    await browser.wait(EC.visibilityOf(blueprint.ttlBluePrintStage3)).then(async function(){
            await blueprint.ttlBluePrintStage3.getText().then(async function(actttlBPS3){
                console.log(actttlBPS3);
                expect(actttlBPS3).to.be.eql(expttlBPS3);
            })
        })
    browser.waitForAngularEnabled(true);
});

Then('User verifies that Fourth Stage should become Available', async function () {
    browser.waitForAngularEnabled(false);
    //await blueprint.btnStartModule4.isDisplayed().then(async function(){
        await browser.wait(EC.visibilityOf(blueprint.btnStartModule4)).then(async function(){
            await blueprint.btnStartModule4.click().then(async function(){
                await browser.wait(EC.visibilityOf(blueprint.btnStartActivity4)).then(async function(){
                    await blueprint.btnStartActivity4.click().then(async function(){
                        await browser.sleep(3000);
                    })
                })
                // await blueprint.btnStartActivity4.isDisplayed().then(async function(){
                //     await blueprint.btnStartActivity4.click();
                // })
            })
        })
    //})
    browser.waitForAngularEnabled(true);
});

Then('User clicks on Save Publish and Exit on Journey Flow', async function () {
    await helperclass.saveAndPublishAndExitOnJourneyFlow();
});