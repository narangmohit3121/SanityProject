import { Then, When } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
import { TextEntryPageLocate } from "../../PageObjects/Sprint 7/TextEntryPage";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { ParticipantActivityPageLocate } from "../../PageObjects/Sprint 4/ParticipantActivityPage";
import config from "../config.json"
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
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
    await textEntryPage.textEntryContent.click().then(function () {
        browser.sleep(3000);
    })
})

When('User clicks on Edit Content', async function () {
    await textEntryPage.btnEditContent.click().then(function () {
        browser.sleep(1000);
    })
})

When('User clicks on Text Input button', async function () {
    await textEntryPage.btnTextInput.click().then(function () {
        browser.sleep(1000);
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
        await textEntryPage.contentSave.click().then(function () {
            browser.sleep(1500);
        });
    })
});

Then("the changes made to Text Entry content should get saved", async function () {
    await textEntryPage.textEntryContent.click().then(function () {
        browser.sleep(1500);
    });
    let textEntryBlockXpath: string = "//textarea[@id='" + latestTextEntryId + "']";
    let textEntryInputLabelXpath: string = "//textarea[@id='" + latestTextEntryId + "']/preceding-sibling::label";
    let latestTextEntryBlock: ElementFinder = element(By.xpath(textEntryBlockXpath));
    let latestTextEntryBlockLabel: ElementFinder = element(By.xpath(textEntryInputLabelXpath));

    await latestTextEntryBlock.isDisplayed().then(async function (blockVisible) {
        expect(blockVisible).to.be.true;
    });

    await latestTextEntryBlockLabel.getText().then(async function (latestLabel) {
        expect(latestLabel).to.equal(latestTextEntryLabel);
    })

    await latestTextEntryBlock.getAttribute("placeholder").then(async function (latestPlaceholder) {
        expect(latestPlaceholder).to.equal(latestTextEntryPlaceholder);
    })

})

//--------------------------------------------------------------------------------------------
When("User clicks Text Entry Block activity",{timeout: 3 * 5000},async function () {
    
   browser.waitForAngularEnabled(false);
   await browser.sleep(3000).then(async function(){
    await textEntryPage.btnBackToMyJourney.click();
   })
   
   //await browser.sleep(3000);
   await browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'shimmer-div')]")))).then(function(){
       browser.sleep(2000);
   })
   await textEntryPage.textEntryActivity.click();
   await browser.sleep(3000);
    browser.waitForAngularEnabled(true);
    // textEntryPage.textEntryActivity.click();
    // browser.sleep(3000);
    // browser.waitForAngularEnabled(true);

    // browser.driver.findElement(By.xpath("//span[text()='My Journey']//ancestor::a[@aria-label='My Journey']")).click();
    // browser.driver.sleep(3000);
    // browser.driver.findElement(By.xpath("//*[contains(text(),'Automation_TextEntry')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'Start') or contains(@name,'Resume') or contains(@name,'Revisit')]")).click();
    // browser.driver.sleep(3000);

    // await textEntryPage.myJourneyPage.click().then(async function () {
    //    await browser.sleep(3000).then(async function () {
    //       await  textEntryPage.textEntryActivity.click().then(function () {
    //             browser.sleep(3000);
    //         })
    //     })
    // })

})


Then("the latest Text Entry block should be visible to the Participant",{timeout: 3 * 5000}, async function () {
    browser.waitForAngularEnabled(false);
    await textEntryPage.prtcpntTextEntryAreaLatest.getAttribute("id").then(function (prtcptTxtEntryId) {
        expect(prtcptTxtEntryId).to.equal(latestTextEntryId);
    })
    await textEntryPage.prtcpntTextEntryAreaLatest.getAttribute("placeholder").then(function (prtcptTxtEntryPlaceholder) {
        expect(prtcptTxtEntryPlaceholder).to.equal(latestTextEntryPlaceholder);
    })

    await textEntryPage.prtcpntTextEntryLabelLatest.getText().then(function (prtcptTxtEntryLabel) {
        expect(prtcptTxtEntryLabel).to.equal(latestTextEntryLabel);
    });

    await textEntryPage.prtcpntTextEntryAreaLatest.getAttribute("maxlength").then(function (maxlength) {
        expect(Number(maxlength)).to.equal(characterLimit);
    })

    browser.waitForAngularEnabled(true);
})

Then("the user should be able to enter text in the latest Text Entry block", async function () {
    //clicking on the text entry field and entering text equal to max no. of chars allowed
    browser.waitForAngularEnabled(false);
    await textEntryPage.prtcpntTextEntryAreaLatest.click().then(async function () {
        textEntryPage.prtcpntTextEntryAreaLatest.sendKeys("Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus.Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit");
    })
    browser.waitForAngularEnabled(true);

})