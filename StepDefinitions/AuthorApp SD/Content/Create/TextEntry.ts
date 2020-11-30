import { Then, When } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { TextEntryPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/TextEntryPage";
import { AdminLandingPageLocate } from "../../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { ParticipantActivityPageLocate } from "../../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import config from "../../../config.json"
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
import { HelperFunctions } from "../../../HelperClass";
var EC = protractor.ExpectedConditions;

let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let textEntryPage = new TextEntryPageLocate();
let participantactivitypage = new ParticipantActivityPageLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: number = today.getMinutes();

let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

let latestTextEntryId: string = "textEntryId_" + currentDateTime;
let latestTextEntryLabel: string = "textEntryLabel_" + currentDateTime;
let latestTextEntryPlaceholder: string = "textEntryPlaceholder_" + currentDateTime;
let characterLimit: number = 200;

When('User selects the Text Entry Content', async function () {
    await textEntryPage.textEntryContent.click().then(async function () {
        await browser.sleep(3000);
    })
})

When('User clicks on Edit Content', async function () {
    await textEntryPage.btnEditContent.click().then(async function () {
        await browser.sleep(1000);
    })
})

When("User deletes the previous text entry", async function(){
    await textEntryPage.editContentArea.click();
    await textEntryPage.editContentArea.clear();
    await browser.sleep(2000);
    // for(let i:number = 1; i < 20;i++){
    //     await textEntryPage.editContentArea.sendKeys(protractor.Key.ARROW_RIGHT);
    //     console.log('Clicked on Right',i);
    // }

    // let isPrevTextEntryPresent:boolean = await textEntryPage.textEntryInputLabel.isPresent();
    // while(isPrevTextEntryPresent){
    //     await textEntryPage.editContentArea.sendKeys(protractor.Key.BACK_SPACE);
    //     console.log('Clicked on Backspace');
    //     await browser.sleep(100);
    //     isPrevTextEntryPresent = await textEntryPage.textEntryInputLabel.isPresent();
    // }    
})

When('User clicks on Text Input button', async function () {
    await textEntryPage.btnTextInput.click().then(async function () {
        await browser.sleep(1000);
    })
})

When('user provides Data in Text Entry fields', async function () {
    await textEntryPage.txtInputId.clear().then(async function () {
        await textEntryPage.txtInputId.click().then(function () {
            textEntryPage.txtInputId.sendKeys(latestTextEntryId);
        })
    })

    await textEntryPage.txtInputLabel.clear().then(async function () {
        await textEntryPage.txtInputLabel.click().then(function () {
            textEntryPage.txtInputLabel.sendKeys(latestTextEntryLabel);
        })
    })

    await textEntryPage.txtPlaceholderText.clear().then(async function () {
        await textEntryPage.txtPlaceholderText.click().then(function () {
            textEntryPage.txtPlaceholderText.sendKeys(latestTextEntryPlaceholder);
        });
    })

    await textEntryPage.txtCharacterLimit.clear().then(async function () {
        await textEntryPage.txtCharacterLimit.click().then(function () {
            textEntryPage.txtCharacterLimit.sendKeys(characterLimit);
        });
    })

    await textEntryPage.tglMandatory.click().then(async function () {
        textEntryPage.tglMandatory.click();
    })
})

When("user clicks on Increase,Decrease Rows in Input buttons", async function () {
    await textEntryPage.btnIncreaseNumberOfRows.click().then(async function () {
        textEntryPage.btnDecreaseNumberOfRows.click().then(function () {
            expect(true).to.be.true;
        })
    })
})

When('user clicks on Save button of Text Entry', async function () {
    await textEntryPage.btnTextEntrySave.click().then(async function () {
        await textEntryPage.contentSave.click().then(async function () {
           await browser.sleep(1500);
        });
    })
});

let helper = new HelperFunctions();
Then("the changes made to Text Entry content should get saved", async function () {
    await textEntryPage.textEntryContent.click().then(async function () {
        await browser.sleep(1500);
    });
    let textEntryBlockXpath: string = "//div[@id='" + latestTextEntryId + "']";
    let textEntryInputLabelXpath: string = "//mat-dialog-container//p[contains(@class,'labelVal')]//span";
    let latestTextEntryBlock: ElementFinder = await element(By.xpath(textEntryBlockXpath));
    let latestTextEntryBlockLabel: ElementFinder = await element(By.xpath(textEntryInputLabelXpath));

    await latestTextEntryBlock.isDisplayed().then(async function (blockVisible) {
        expect(blockVisible).to.be.true;
    });
    await textEntryPage.btnEditContent.click();
    await latestTextEntryBlockLabel.getText().then(async function (latestLabel) {
        expect(latestLabel).to.equal(latestTextEntryLabel);
    })

    await latestTextEntryBlock.getAttribute("data-text").then(async function (latestPlaceholder) {
        expect(latestPlaceholder).to.equal(latestTextEntryPlaceholder);
    })
    await helper.cancelCMSChangesAndExit();
})

//--------------------------------------------------------------------------------------------
When("User clicks Text Entry Block activity",{timeout: 3 * 5000},async function () {
    
   browser.waitForAngularEnabled(false);
//    await browser.sleep(3000).then(async function(){
//     await textEntryPage.btnBackToMyJourney.click();
//    })
   
//    //await browser.sleep(3000);
//    await browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'shimmer-div')]")))).then(function(){
//        browser.sleep(2000);
//    })
   await textEntryPage.textEntryActivity.click();
   await browser.sleep(3000);
    browser.waitForAngularEnabled(true);

})


Then("the latest Text Entry block should be visible to the Participant",{timeout: 3 * 5000}, async function () {
    browser.waitForAngularEnabled(false);
    await textEntryPage.prtcpntTextEntryAreaLatest.getAttribute("id").then(function (prtcptTxtEntryId) {
        //console.log(prtcptTxtEntryId);
        expect(prtcptTxtEntryId.trim()).to.equal(latestTextEntryId);
    })
    await textEntryPage.prtcpntTextEntryAreaLatest.getAttribute("data-text").then(function (prtcptTxtEntryPlaceholder) {
        //console.log(prtcptTxtEntryPlaceholder);
        expect(prtcptTxtEntryPlaceholder.trim()).to.equal(latestTextEntryPlaceholder);
    })

    await textEntryPage.prtcpntTextEntryLabelLatest.getText().then(function (prtcptTxtEntryLabel) {
        //console.log(prtcptTxtEntryLabel);
        expect(prtcptTxtEntryLabel.trim()).to.equal(latestTextEntryLabel);
    });

    await textEntryPage.prtcpntTextEntryMaxChar.getText().then(function (maxlength) {
        //console.log(maxlength);
        expect(maxlength).to.include(characterLimit.toString());
    })

    browser.waitForAngularEnabled(true);
})

Then("the user should be able to enter text in the latest Text Entry block", async function () {
    //clicking on the text entry field and entering text equal to max no. of chars allowed
    browser.waitForAngularEnabled(false);
    await textEntryPage.prtcpntTextEntryAreaLatest.click().then(async function () {
        await textEntryPage.prtcpntTextEntryAreaLatest.sendKeys("Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus.Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit");
        await browser.sleep(2000);
    })
    browser.waitForAngularEnabled(true);

})