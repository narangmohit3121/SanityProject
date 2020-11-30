import { Before, Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../StepDefinitions/config.json";
import { AdminLandingPageLocate } from "../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { MastheadPage } from "../../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/AuthorApp POM/Login/LoginPage";
import { AuthorSanityPage } from "../../PageObjects/SanityProjectPages/AuthorSanityPage";
import { CreateAllContentsLocate } from "../../PageObjects/SanityProjectPages/CreateAllContentPage";
import { DownloadBlockLocate } from "../../PageObjects/AuthorApp POM/Content/Create/DownloadBlockPage";
import TestData from "../../testData.json";
let remote = require("protractor/node_modules/selenium-webdriver/remote");

var support = require("protractor-firefox-support");

import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';
import { DriverProvider } from "protractor/built/driverProviders";
import { DiscussionThreadPage } from "../../PageObjects/AuthorApp POM/Content/Create/DiscussionThreadPage";
import { HelperFunctions } from "../HelperClass";
import { clear } from "console";
import { participantHelperFunctions } from "../participantHelperClass";

if (browser.params.browserstackRun) {
    browser.setFileDetector(new remote.FileDetector);
}

let helper = new HelperFunctions();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let mastheadPage = new MastheadPage();
let authorSanityPage = new AuthorSanityPage();
let discussionThreadPage = new DiscussionThreadPage();
let createAllContentsPage = new CreateAllContentsLocate();
let downloadBlockPage = new DownloadBlockLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + '-' + minutes;

export class CreatedContents {
    public static sanityContents: string[] = [];
    public static goDoActivityName: string = "";
    public static goDoDueDate: string = "";
}
//let createdContents:string[]=[];

When("user navigates to the EndToEnd folder", async function () {
    await commonObjects.e2eBackUpFolder.click();
})

let newVideoActivityName: string = "";
let newSS_ShortRadioActivityName: string = "";
let newSS_ShortDDActivityName: string = "";
let newSS_LongActivityName: string = "";
let newMS_ShortCBActivityName: string = "";
let newMS_ShortDDActivityName: string = "";
let newMS_LongActivityName: string = "";
let newRBMActivityName: string = "";
let newDiscusActivityName: string = "";
let newContentActivityName: string = "";
let newResponseGraphActivityName: string = "";
let newDownloadActivityName: string = "";
let newTextImageActivityName: string = "";
let cohortResponseActivityName: string = "";
let participantResponseActivityName: string = "";
let cardsActivityName: string = "";
let wordcloudActivityName: string = "";
let customCodeActivityName: string = "";
let genDocumentActivityName: string = "";
let mastheadActivityName: string = "";
let shareLinkActivityName: string = "";
let nestedContentActivityName: string = "";
let calloutActivityName: string = "";
let storylineActivityName: string = "";
let imageActivityName: string = "";
let newGoDoActivityName: string = "";

let currentContentType: string = '';
When("user creates a new Activity for {string} Content and navigates into the same", async function (contentTypeName) {
    currentContentType = contentTypeName;
    let newActivityTitle: string = `${contentTypeName} Activity ${currentDateTime}`;
    //let newActivityTitle: string = `${contentTypeName} Activity ${currentDateTime} ${today.getMilliseconds()}`;
    //console.log(newActivityTitle);
    let newActivityDescription: string = `${contentTypeName} Description ${currentDateTime}`;

    await createAllContentsPage.btnCreateContent.click().then(async function () {
        await browser.sleep(1.5 * 1000);
        await createAllContentsPage.btnCreateNewActivity.click().then(async function () {
            await createAllContentsPage.activityTitle.sendKeys(newActivityTitle).then(async function () {
                await createAllContentsPage.activityDescription.sendKeys(newActivityDescription);
            });
            await createAllContentsPage.btnStandardActivity.getAttribute("aria-pressed").then(async function (isCurrentlySelected) {
                if (!(isCurrentlySelected = "true")) {
                    await createAllContentsPage.btnStandardActivity.click();
                }
            });
            await createAllContentsPage.btnCreateActivity.click();
            await browser.sleep(5000);
        })
    })
    await element(By.xpath(`//p[contains(text(),'${newActivityTitle}')]/../../..`)).isDisplayed().then(async function (activityVisible) {
        expect(activityVisible).to.be.true;
    })
    await element(By.xpath(`//p[contains(text(),'${newActivityTitle}')]/../../..`)).click().then(async function () {
        if (browser.params.browserstackRun) {
            await browser.getCapabilities().then(async function (caps) {
                if (caps.get('browserName') == 'safari' || caps.get('browserName') == 'Safari') {
                    browser.waitForAngularEnabled(false);
                    await browser.sleep(30 * 1000);
                    browser.waitForAngularEnabled(true);
                }
            })
            //await browser.waitForAngular();
        }
    })

    switch (contentTypeName) {
        case "Video": {
            newVideoActivityName = newActivityTitle;
            break;
        }
        case "Single Select Radio": {
            newSS_ShortRadioActivityName = newActivityTitle;
            break;
        }
        case "Single Select DD": {
            newSS_ShortDDActivityName = newActivityTitle;
            break;
        }
        case "Single Select Long": {
            newSS_LongActivityName = newActivityTitle;
            break;
        }
        case "Multi Select CB": {
            newMS_ShortCBActivityName = newActivityTitle;
            break;
        }
        case "Multi Select DD": {
            newMS_ShortDDActivityName = newActivityTitle;
            break;
        }
        case "Multi Select Long": {
            newMS_LongActivityName = newActivityTitle;
            break;
        }
        case "Radio Button Matrix": {
            newRBMActivityName = newActivityTitle;
            break;
        }
        case "Discussion Thread": {
            newDiscusActivityName = newActivityTitle;
            break;
        }
        case "Content": {
            newContentActivityName = newActivityTitle;
            break;
        }
        case "Response Graph": {
            newResponseGraphActivityName = newActivityTitle;
            break;
        }
        case "Download": {
            newDownloadActivityName = newActivityTitle;
            break;
        }
        case "Text and Image": {
            newTextImageActivityName = newActivityTitle;
            break;
        }
        case "Cohort Response": {
            cohortResponseActivityName = newActivityTitle;
            break;
        }
        case "Participant Response": {
            participantResponseActivityName = newActivityTitle;
            break;
        }
        case "Cards": {
            cardsActivityName = newActivityTitle;
            break;
        }
        case "Wordcloud": {
            wordcloudActivityName = newActivityTitle;
            break;
        }
        case "Custom Code": {
            customCodeActivityName = newActivityTitle;
            break;
        }
        case "Generate Document": {
            genDocumentActivityName = newActivityTitle;
            break;
        }
        case "Masthead": {
            mastheadActivityName = newActivityTitle;
            break;
        }
        case "Share Link": {
            shareLinkActivityName = newActivityTitle;
            break;
        }
        case "Nested Content": {
            nestedContentActivityName = newActivityTitle;
            break;
        }
        case "Callout": {
            calloutActivityName = newActivityTitle;
            break;
        }
        case "Storyline": {
            storylineActivityName = newActivityTitle;
            break;
        }
        case "Image": {
            imageActivityName = newActivityTitle;
            break;
        }
        case "Go-Do": {
            newGoDoActivityName = newActivityTitle;
            break;
        }

    }
});

When("user adds the content of the type {string}", async function (contentTypeName) {
    await createAllContentsPage.ddContentType.isPresent().then(async function (isUserOnGeneralTab) {
        if (isUserOnGeneralTab) {
            await createAllContentsPage.ddContentType.click().then(async function () {
                await createAllContentsPage.contentTypeAction.click();
            })
            await createAllContentsPage.tabContent.click();
        }
    })
    // let scrollToBottomScript:string= `var editArea = document.querySelector("div[class*='edit-area']");
    //                                     editArea.scrollTop = editArea.scrollHeight;`
    // await browser.executeScript(scrollToBottomScript);
    // if (contentTypeName == "Page Divider") {
    //     await browser.executeScript("arguments[0].scrollIntoView(false)", element(By.xpath("(//div[contains(@class,'edit-area')]//*)[last()]")));
    // }
    // else {
    //     await browser.executeScript("arguments[0].scrollIntoView(false)", element(By.xpath("(//div[contains(@class,'subscript-wrapper')])[last()]")));
    // }
    await browser.executeScript("arguments[0].scrollIntoView(false)", element(By.xpath("(//div[contains(@class,'edit-area')]//*)[last()]")));
    var fromEle = await element(By.xpath(`//div[contains(text(),'${contentTypeName}')]//div[@class='mat-list-item-ripple mat-ripple']`));
    if (contentTypeName === "Image") {
        fromEle = await element(By.xpath(`//div[contains(text(),'Image') and not(contains(text(),'Text'))]//div[@class='mat-list-item-ripple mat-ripple']`));
    }
    //var toEle = await element(By.css('div[id*=cdk-drop-list].blocks-container.edit-area.cdk-drop-list'));
    var toEle = await element(By.xpath("(//div[contains(@id,'cdk-drop-list')]//*)[last()]"));
    await browser.actions().mouseMove(fromEle).perform();
    await browser.sleep(2000);
    await browser.actions().mouseDown(fromEle).perform();
    await browser.sleep(2000);
    await browser.actions().mouseMove(toEle).perform();
    await browser.sleep(2000);
    await browser.actions().mouseUp(toEle).perform();
    await browser.sleep(6000);
})

When("user clicks on the Edit {string} button", async function (contentTypeName) {
    await element(By.xpath(`//button[contains(text(),'Edit ${contentTypeName}')]`)).click();
});
//-----------------------------------------------------VIDEO-------------------------------------------

let latestVideoURL: string = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
let currentFullScreenSetting: string = "";
let currentAutoplaySetting: string = "";
let currentAutoNavigateSetting: string = "";
//let currentSecureSetting: string = "";
When("user enters data into the fields of Video block", async function () {
    await createAllContentsPage.videoSizeMedium.click();
    await activityAuthorPage.directVideoURL.clear().then(async function () {
        await activityAuthorPage.directVideoURL.sendKeys(latestVideoURL).then(async function () {
            await browser.sleep(3 * 1000);
        })
    });

    await activityAuthorPage.showFullScreenCurrentSetting.getAttribute("ng-reflect-model").then(async function (currentSetting1) {
        currentFullScreenSetting = currentSetting1;
        await activityAuthorPage.videoShowFullScreen.click().then(async function () {
            await browser.sleep(1000);
        })
    })

    await activityAuthorPage.autoplayCurrentSetting.getAttribute("ng-reflect-model").then(async function (currentSetting2) {
        currentAutoplaySetting = currentSetting2;
        await activityAuthorPage.videoAutoplay.click().then(async function () {
            await browser.sleep(1000);
        })
    })

    await activityAuthorPage.autonavigateCurrentSetting.getAttribute("ng-reflect-model").then(async function (currentSetting3) {
        currentAutoNavigateSetting = currentSetting3;
        await activityAuthorPage.videoAutonavigate.click().then(async function () {
            await browser.sleep(1000);
        })
    })
})

Then("the activity with video content should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${newVideoActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Video')]`)).isDisplayed().then(async function (blockVisible) {
        expect(blockVisible, "Video Block not visible").to.be.true;
        await element(By.xpath("//button[contains(text(),'Edit Video')]")).click();
    });
    await activityAuthorPage.showFullScreenCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
        if (currentFullScreenSetting == "true") {
            expect(latestSetting, "Show Full Screen Setting not updated").to.equal("false");
        }
        else if (currentFullScreenSetting == "false") {
            expect(latestSetting, "Show Full Screen Setting not updated").to.equal("true");
        }
        else {
            expect(true, "Unable to Get Show Full Screen Setting").to.be.false;
        }
    })

    await activityAuthorPage.autoplayCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
        if (currentAutoplaySetting == "true") {
            expect(latestSetting, "Autoplay Setting not updated").to.equal("false");
        }
        else if (currentAutoplaySetting == "false") {
            expect(latestSetting, "Autoplay Setting not updated").to.equal("true");
        }
        else {
            expect(true, "Unable to Get Autoplay Setting").to.be.false;
        }
    })

    await activityAuthorPage.autonavigateCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
        if (currentAutoNavigateSetting == "true") {
            expect(latestSetting, "AutoNavigate Setting not updated").to.equal("false");
        }
        else if (currentAutoNavigateSetting == "false") {
            expect(latestSetting, "AutoNavigate Setting not updated").to.equal("true");
        }
        else {
            expect(true, "Unable to Get AutoNavigate Setting").to.be.false;
        }
    })
    let videoURL: string = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    expect(latestVideoURL).to.equal(videoURL);

    CreatedContents.sanityContents.push(newVideoActivityName);
    await authorSanityPage.cancelEdit.click();
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
})

//------------------------------------------------------------SINGLE SELECT------------------------------------

let singleSelectJSID: string = "";
let singleSelectOptionDesc: string = "";
let singleSelectContentTitle: string = "";
let currentSingleSelectType: string = "";
let singleSelectRadioTitle: string = "";
let singleSelectDropdownTitle: string = "";
let singleSelectLongTitle: string = "";
let singleSelectResGraphTitle: string = "";

When("user selects the Single Select Type as {string}", async function (singleSelectType) {
    currentSingleSelectType = singleSelectType;
    await element(By.xpath(`//mat-radio-button[contains(@value,'${singleSelectType}')]//label`)).click();
    if (singleSelectType == "long") {
        singleSelectJSID = `SS_Long ${currentDateTime}`;
        singleSelectOptionDesc = `SS_Long_Description ${currentDateTime}`;
        singleSelectContentTitle = `SS_Long_Title ${currentDateTime}`;
    }
})

When("user selects the Single Select Sub-Type as {string}", async function (shortType) {
    await element(By.xpath(`//span[contains(text(),'${shortType}')]/ancestor::mat-radio-button//label`)).click();
    if (shortType == "Radio") {
        if (currentContentType.includes("Generate")) {
            singleSelectJSID = `SS_GenDoc_Auto`;
            singleSelectOptionDesc = `SS_GenDoc_Desc ${currentDateTime}`;
            singleSelectContentTitle = `SS_GenDoc_Title ${currentDateTime}`;
        }
        else if (currentContentType.includes("Response Graph")) {
            singleSelectJSID = `SS_ResGraph_Auto`;
            singleSelectOptionDesc = `SS_ResGraph_Desc ${currentDateTime}`;
            singleSelectContentTitle = `SS_ResGraph_Title ${currentDateTime}`;
        }
        else {
            singleSelectJSID = `SS_Radio ${currentDateTime}`;
            singleSelectOptionDesc = `SS_Radio_Description ${currentDateTime}`;
            singleSelectContentTitle = `SS_Rdo_Title ${currentDateTime}`;
        }
    };
    if (shortType == "Dropdown") {
        singleSelectJSID = `SS_DD ${currentDateTime}`;
        singleSelectOptionDesc = `SS_DD_Description ${currentDateTime}`;
        singleSelectContentTitle = `SS_DD_Title ${currentDateTime}`;
    };
})


let numberOfSSoptions: number = 4;
let ssOptions: string[] = [];
let ssLongDescriptions: string[] = [];
let ssLongDescription: string = `SS_Long_Desc ${currentDateTime}`;
let ssGenDocOptions: string[] = [];
let ssTypeRadioOptions: string[] = [];
let ssTypeDropdownOptions: string[] = [];
let ssTypeLongOptions: string[] = [];
let ssResGraphOptions: string[] = [];

//let ssGenDocOptionDescriptions: string[] = [];


When("user enters data into the fields of Single Select block", async function () {

    await createAllContentsPage.singleSelectJS_Id.sendKeys(singleSelectJSID);
    await createAllContentsPage.singleSelectTitle.sendKeys(singleSelectContentTitle);

    ssOptions = [];
    for (let i: number = 1; i <= numberOfSSoptions; i++) {
        let currentOptionTitle: string = `${singleSelectOptionDesc} Option${i}`;
        let currentOptionDesc: string = `${ssLongDescription} Option${i}`;

        ssOptions.push(currentOptionTitle.trim());
        if (i == 1) {
            await authorSanityPage.newOptionTitle.click().then(async function () {
                await authorSanityPage.newOptionTitle.sendKeys(currentOptionTitle);
            })
            if (currentSingleSelectType == "long") {
                await authorSanityPage.newOptionDescription.click().then(async function () {
                    await authorSanityPage.newOptionDescription.sendKeys(currentOptionDesc);
                    ssLongDescriptions.push(currentOptionDesc.trim());
                });
            }
        }
        else {
            await authorSanityPage.btnAddNewOption.click().then(async function () {
                await authorSanityPage.newOptionTitle.click().then(async function () {
                    await authorSanityPage.newOptionTitle.sendKeys(currentOptionTitle);
                })
                if (currentSingleSelectType == "long") {
                    await authorSanityPage.newOptionDescription.click().then(async function () {
                        await authorSanityPage.newOptionDescription.sendKeys(currentOptionDesc);
                        ssLongDescriptions.push(currentOptionDesc.trim());
                    });
                }
            })
        }
    }
    if (currentContentType.includes("Generate")) {
        ssGenDocOptions = ssOptions;
    }
    if (currentContentType.includes("Response Graph")) {
        singleSelectResGraphTitle = singleSelectContentTitle;
        ssResGraphOptions = ssOptions;
    }
    //console.log(ssOptions);
})

Then("the activity with Single Select content of the type {string} should get created", async function (singleSelectType) {
    let newSSActivityName: string = "";
    switch (singleSelectType) {
        case "Short-Radio": {
            newSSActivityName = newSS_ShortRadioActivityName;
            singleSelectRadioTitle = singleSelectContentTitle;
            ssTypeRadioOptions = ssOptions;
            break;
        }
        case "Short-Dropdown": {
            newSSActivityName = newSS_ShortDDActivityName;
            singleSelectDropdownTitle = singleSelectContentTitle;
            ssTypeDropdownOptions = ssOptions;
            break;
        }
        case "Long": {
            newSSActivityName = newSS_LongActivityName;
            singleSelectLongTitle = singleSelectContentTitle;
            ssTypeLongOptions = ssOptions;
            break;
        }
    }
    //console.log(newSSActivityName);
    await element(By.xpath(`//p[contains(text(),'${newSSActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`)).isDisplayed().then(async function (blockVisible) {
        expect(blockVisible).to.be.true;
        //await element(By.xpath("//button[contains(text(),'Edit Single Select')]")).click();
    });
    switch (singleSelectType) {
        case "Short-Radio": {
            let ssShortRadioOptions: string[] = []
            await authorSanityPage.optionsInSSPreview.each(async function (option) {
                await option.getText().then(function (optionText) {
                    ssShortRadioOptions.push(optionText.trim());
                })
            })
            expect(ssOptions).to.have.members(ssShortRadioOptions);
            await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`)).click().then(async function () {
                await createAllContentsPage.radioTypeSelected.isPresent().then(async function (isTypeShortSelected) {
                    expect(isTypeShortSelected).to.be.true;
                });
                await createAllContentsPage.singleSelectJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(singleSelectJSID);
                });
                await createAllContentsPage.singleSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(singleSelectContentTitle);
                })
            })
            break;
        }
        case "Short-Dropdown": {
            let ssShortDDoptions: string[] = []
            await authorSanityPage.optionsInPreviewSingleSelectDD.each(async function (option) {
                await option.getText().then(function (optionText) {
                    ssShortDDoptions.push(optionText.trim());
                })
            })
            expect(ssOptions).to.have.members(ssShortDDoptions);
            await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`)).click().then(async function () {
                await createAllContentsPage.dropdownTypeSelected.isPresent().then(async function (isTypeShortSelected) {
                    expect(isTypeShortSelected).to.be.true;
                });
                await createAllContentsPage.singleSelectJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(singleSelectJSID);
                });
                await createAllContentsPage.singleSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(singleSelectContentTitle);
                })
            })
            console.log("Inside Short Dropdown case");
            break;
        }
        case "Long": {
            let ssShortDDoptions: string[] = [];
            let ssLongOptionsDescription: string[] = [];
            await authorSanityPage.optionsInSSPreview.each(async function (option) {
                await option.getText().then(function (optionText) {
                    ssShortDDoptions.push(optionText.trim());
                })
            })
            expect(ssOptions).to.have.members(ssShortDDoptions);

            await createAllContentsPage.ssLongOptionsDescriptionInPreview.each(async function (optionDesc) {
                await optionDesc.getText().then(function (optionDescText) {
                    ssLongOptionsDescription.push(optionDescText.trim());
                })
            })

            expect(ssLongDescriptions).to.have.members(ssLongOptionsDescription);

            await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`)).click().then(async function () {

                await createAllContentsPage.singleSelectJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(singleSelectJSID);
                });
                await createAllContentsPage.singleSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(singleSelectContentTitle);
                })
            })
            console.log("Inside Short Dropdown case");
            break;
        }
    }
    CreatedContents.sanityContents.push(newSSActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//---------------------------------------------------MULTI-SELECTS---------------------------------------------------
let multiSelectJSID: string = "";
let multiSelectOptionDesc: string = "";
let multiSelectContentTitle: string = "";
let currentMutliSelectType: string = "";

When("user selects the Multiple Select Tab", async function () {
    await createAllContentsPage.multiSelectTab.click();
})

When("user selects the Multi Select Type as {string}", async function (multiSelectType) {
    currentMutliSelectType = multiSelectType;
    await element(By.xpath(`//mat-radio-button[contains(@value,'${multiSelectType}')]//label`)).click();
    if (multiSelectType == "long") {
        multiSelectJSID = `MS_Long ${currentDateTime}`;
        multiSelectOptionDesc = `MS_Long_Description ${currentDateTime}`;
        multiSelectContentTitle = `MS_Long_Title ${currentDateTime}`;
    }
})

When("user selects the Multi Select Sub-Type as {string}", async function (shortType) {
    await element(By.xpath(`//span[contains(text(),'${shortType}')]/ancestor::mat-radio-button//label`)).click();
    if (shortType == "Checkbox") {
        multiSelectJSID = `MS_CB ${currentDateTime}`;
        multiSelectOptionDesc = `MS_CB_Description ${currentDateTime}`;
        multiSelectContentTitle = `MS_CB_Title ${currentDateTime}`;
    };
    if (shortType == "Dropdown") {
        multiSelectJSID = `MS_DD ${currentDateTime}`;
        multiSelectOptionDesc = `MS_DD_Description ${currentDateTime}`;
        multiSelectContentTitle = `MS_DD_Title ${currentDateTime}`;
    };
})

let numberOfMSoptions: number = 4;
let MSoptions: string[] = [];
let MSlongDescriptions: string[] = [];
let MSlongDescription: string = `MS_Long_Desc ${currentDateTime}`;

When("user enters data into the fields of Multi Select block", async function () {

    await createAllContentsPage.multiSelJS_Id.sendKeys(multiSelectJSID);
    await createAllContentsPage.multiSelectTitle.sendKeys(multiSelectContentTitle);
    await createAllContentsPage.btnIncreaseMaxSelections.click().then(async function () {
        await createAllContentsPage.btnIncreaseMaxSelections.click();
    })
    await createAllContentsPage.btnIncreaseMinSelections.click();
    MSoptions = [];
    for (let i: number = 1; i <= numberOfMSoptions; i++) {
        let currentOptionTitle: string = `${multiSelectOptionDesc} Option${i}`;
        let currentOptionDesc: string = `${MSlongDescription} Option${i}`;
        MSoptions.push(currentOptionTitle);
        if (i == 1) {
            await authorSanityPage.newOptionTitle.click().then(async function () {
                await authorSanityPage.newOptionTitle.sendKeys(currentOptionTitle);
            })
            if (currentMutliSelectType == "long") {
                await authorSanityPage.newOptionDescription.click().then(async function () {
                    await authorSanityPage.newOptionDescription.sendKeys(currentOptionDesc);
                    MSlongDescriptions.push(currentOptionDesc);
                });
            }
        }
        else {
            await authorSanityPage.btnAddNewOption.click().then(async function () {
                await authorSanityPage.newOptionTitle.click().then(async function () {
                    await authorSanityPage.newOptionTitle.sendKeys(currentOptionTitle);
                })
                if (currentMutliSelectType == "long") {
                    await authorSanityPage.newOptionDescription.click().then(async function () {
                        await authorSanityPage.newOptionDescription.sendKeys(currentOptionDesc);
                        MSlongDescriptions.push(currentOptionDesc);
                    });
                }
            })
        }
    }
})
let multiSelectCBTitle: string = "";
let multiSelectCBOptions: string[] = [];
let multiSelectDDTitle: string = "";
let multiSelectDDOptions: string[] = [];
let multiSelectLongTitle: string = "";
let multiSelectLongOptions: string[] = [];

Then("the activity with Multi Select content of the type {string} should get created", async function (multiSelectType) {
    let newMSActivityName: string = "";
    switch (multiSelectType) {
        case "Short-Checkbox": {
            newMSActivityName = newMS_ShortCBActivityName;
            multiSelectCBTitle = multiSelectContentTitle;
            multiSelectCBOptions = MSoptions;
            break;
        }
        case "Short-Dropdown": {
            newMSActivityName = newMS_ShortDDActivityName;
            multiSelectDDTitle = multiSelectContentTitle;
            multiSelectDDOptions = MSoptions;
            break;
        }
        case "Long": {
            newMSActivityName = newMS_LongActivityName;
            multiSelectLongTitle = multiSelectContentTitle;
            multiSelectLongOptions = MSoptions;
            break;
        }
    }
    //console.log(newSSActivityName);
    await element(By.xpath(`//p[contains(text(),'${newMSActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Multiple Select')]`)).isDisplayed().then(async function (blockVisible) {
        expect(blockVisible).to.be.true;
        //await element(By.xpath("//button[contains(text(),'Edit Single Select')]")).click();
    });
    switch (multiSelectType) {
        case "Short-Checkbox": {
            let multiShortCBOptions: string[] = []
            await authorSanityPage.optionsInMSPreview.each(async function (option) {
                await option.getText().then(function (optionText) {
                    multiShortCBOptions.push(optionText.trim());
                })
            })
            expect(MSoptions).to.have.members(multiShortCBOptions);
            await element(By.xpath(`//button[contains(text(),'Edit Multiple Select')]`)).click().then(async function () {
                await createAllContentsPage.checkboxTypeSelected.isPresent().then(async function (isTypeShortSelected) {
                    expect(isTypeShortSelected).to.be.true;
                });
                await createAllContentsPage.multiSelJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(multiSelectJSID);
                });
                await createAllContentsPage.multiSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(multiSelectContentTitle);
                })
            })
            break;
        }
        case "Short-Dropdown": {
            let multiShortDDoptions: string[] = []
            await authorSanityPage.multiLongPreviewDDArrow.click().then(async function () {
                await browser.sleep(1000);
                await authorSanityPage.optionsInMultiDDPreview.each(async function (option) {
                    await option.getText().then(function (optionText) {
                        multiShortDDoptions.push(optionText.trim());
                    })
                })
            })
            expect(MSoptions).to.have.members(multiShortDDoptions);
            let editBtn: ElementFinder = await element(By.xpath(`//button[contains(text(),'Edit Multiple Select')]`));

            await browser.executeScript("arguments[0].click()", editBtn).then(async function () {
                await createAllContentsPage.dropdownTypeSelected.isPresent().then(async function (isTypeShortSelected) {
                    expect(isTypeShortSelected).to.be.true;
                });
                await createAllContentsPage.multiSelJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(multiSelectJSID);
                });
                await createAllContentsPage.multiSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(multiSelectContentTitle);
                })
            })
            //console.log("Inside Short Dropdown case");
            break;
        }
        case "Long": {
            let mutliShortDDoptions: string[] = [];
            let multiLongOptionsDescription: string[] = [];
            await authorSanityPage.optionsInMSPreview.each(async function (option) {
                await option.getText().then(function (optionText) {
                    mutliShortDDoptions.push(optionText.trim());
                })
            })
            expect(MSoptions).to.have.members(mutliShortDDoptions);

            await createAllContentsPage.multiLongOptionDescriptionsInPreview.each(async function (optionDesc) {
                await optionDesc.getText().then(function (optionDescText) {
                    multiLongOptionsDescription.push(optionDescText.trim());
                })
            })
            expect(MSlongDescriptions).to.have.members(multiLongOptionsDescription);

            await element(By.xpath(`//button[contains(text(),'Edit Multiple Select')]`)).click().then(async function () {

                await createAllContentsPage.multiSelJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(multiSelectJSID);
                });
                await createAllContentsPage.multiSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(multiSelectContentTitle);
                })
            })
            //console.log("Inside Short Dropdown case");
            break;
        }
    }
    CreatedContents.sanityContents.push(newMSActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        if (multiSelectType = "Short-Dropdown") {
            await browser.executeScript("arguments[0].click()", activityAuthorPage.exitEditor).then(async function () {
                await browser.sleep(2000);
            });
        }
        else {
            await activityAuthorPage.exitEditor.click().then(async function () {
                await browser.sleep(2000);
            });
        }
    });
})

//--------------------------------------------------------VARIABLE GRID----------------------------------------------------
let varGridJSId: string = `RBM_Id ${currentDateTime}`;
let varGridTitle: string = `RBM_Title ${currentDateTime}`;
let varGridDescription: string = `RBM_Desc ${currentDateTime}`;
let varGridQuestionTitle: string = `Question ${currentDateTime}`;
let vgOptions: string[] = [];
let vgOptionDesc = `RBM Option ${currentDateTime}`;
let vgQuestions: string[] = [];
let vgQuestionDesc = `RBM Quesetion ${currentDateTime}`;

let numberOfVGOptions: number = 4;
let numberOfVGQuestions: number = 4;

When("user enters data into the fields of Radio Button Matrix block", async function () {
    await createAllContentsPage.varGridJSId.sendKeys(varGridJSId);
    await createAllContentsPage.varGridTitle.sendKeys(varGridTitle);
    await createAllContentsPage.varGridDescription.sendKeys(varGridDescription);
    await createAllContentsPage.varGridQuestionTitle.sendKeys(varGridQuestionTitle);

    //ssOptions = [];
    for (let i: number = 1; i <= numberOfVGOptions; i++) {
        let currentOptionDesc: string = `${vgOptionDesc} Option${i}`;

        vgOptions.push(currentOptionDesc.trim());
        if (i == 1) {
            await authorSanityPage.newVarGridOptionText.click().then(async function () {
                await authorSanityPage.newVarGridOptionText.sendKeys(currentOptionDesc);
            })
        }
        else {
            await authorSanityPage.variableGridAddOption.click().then(async function () {
                await authorSanityPage.newVarGridOptionText.click().then(async function () {
                    await authorSanityPage.newVarGridOptionText.sendKeys(currentOptionDesc);
                })
            });
        }
    }

    for (let i: number = 1; i <= numberOfVGQuestions; i++) {
        let currentQuestionDesc: string = `${vgQuestionDesc} Option${i}`;

        vgQuestions.push(currentQuestionDesc.trim());
        if (i == 1) {
            await authorSanityPage.newVarGridQuestionTitle.click().then(async function () {
                await authorSanityPage.newVarGridQuestionTitle.sendKeys(currentQuestionDesc);
            });
            await authorSanityPage.newVarGridQuestionId.click().then(async function () {
                await authorSanityPage.newVarGridQuestionId.sendKeys(`TQ${Math.floor(Math.random() * 1000000)}`);
            });
        }
        else {
            await authorSanityPage.variableGridAddQuestion.click().then(async function () {
                await authorSanityPage.newVarGridQuestionTitle.click().then(async function () {
                    await authorSanityPage.newVarGridQuestionTitle.sendKeys(currentQuestionDesc);
                });
                await authorSanityPage.newVarGridQuestionId.click().then(async function () {
                    await authorSanityPage.newVarGridQuestionId.sendKeys(`TQ${Math.floor(Math.random() * 1000000)}`);
                });
            });
        }
    }

})

Then("the activity with Radio Button Matrix Content should get created", async function () {

    await element(By.xpath(`//p[contains(text(),'${newRBMActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Radio Button Matrix')]`)).isDisplayed().then(async function (blockVisible) {
        expect(blockVisible).to.be.true;
        //await element(By.xpath("//button[contains(text(),'Edit Single Select')]")).click();
    });
    let options: string[] = [];
    await authorSanityPage.optionsInVarGridPreview.each(async function (option) {
        await option.getText().then(function (optionText) {
            //console.log(optionText);
            options.push(optionText.trim());
        })
    });
    expect(vgOptions).to.have.members(options);

    let questions: string[] = [];
    await authorSanityPage.questionsInVarGridPreview.each(async function (questionPreview) {
        await questionPreview.getAttribute("aria-label").then(function (questionText) {
            //console.log(questionText);
            questions.push(questionText.trim());
        })
    });
    expect(vgQuestions).to.have.members(questions);

    await element(By.xpath(`//button[contains(text(),'Edit Radio Button Matrix')]`)).click().then(async function () {
        await createAllContentsPage.varGridJSId.getAttribute("ng-reflect-model").then(async function (vgJSId) {
            expect(vgJSId.trim()).to.contain(varGridJSId);
        })
        await createAllContentsPage.varGridTitle.getAttribute("ng-reflect-model").then(async function (vgTitle) {
            expect(vgTitle.trim()).to.contain(varGridTitle);
        })
        await createAllContentsPage.varGridDescriptionText.getText().then(async function (vgDesc) {
            expect(vgDesc.trim()).to.contain(varGridDescription);
        })
        await createAllContentsPage.varGridQuestionTitle.getAttribute("ng-reflect-model").then(async function (vgQuestionTitle) {
            expect(vgQuestionTitle.trim()).to.contain(varGridQuestionTitle);
        })
    })
    CreatedContents.sanityContents.push(newRBMActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//---------------------------------------------------DISCUSSION THREAD--------------------------------------------------

let discJSId: string = `DiscId ${currentDateTime}`;
let titleDiscThread: string = `Title ${currentDateTime}`;
let commentBtnName: string = `commentBtn ${currentDateTime}`;
let commentFieldLabel: string = `CommentFieldLabel ${currentDateTime}`;
let replyBtnLabel: string = `replyLabel ${currentDateTime}`;
let loadMoreText: string = `loadMore ${currentDateTime}`;
let commentsLabel: string = `commentsLabel ${currentDateTime}`;
let numberOfComments: string = (Math.floor(Math.random() * 10)).toString();


When("User enters data into the fields of Discussion thread block", async function () {
    await discussionThreadPage.txtDiscussThreadBlockId.click().then(async function () {
        await discussionThreadPage.txtDiscussThreadBlockId.clear().then(async function () {
            await discussionThreadPage.txtDiscussThreadBlockId.sendKeys(discJSId).then(function () {
                browser.sleep(1000);
            });
        })
        // await browser.executeScript("arguments[0].click()", discussionThreadPage.txtCommentButtonTxt).then(async function(){
        //     await browser.executeScript("arguments[0].innerText='" + latestCommentBtnName + "'", discussionThreadPage.txtCommentButtonTxt).then(async function () {
        //         await browser.executeScript("arguments[0].click()", discussionThreadPage.txtCommentButtonTxt);
        //     })
        // })
        await createAllContentsPage.titleDiscusThread.click().then(async function () {
            await createAllContentsPage.titleDiscusThread.clear().then(async function () {
                await createAllContentsPage.titleDiscusThread.sendKeys(titleDiscThread);
            })
        });


        await discussionThreadPage.txtCommentButtonTxt.click().then(async function () {
            await discussionThreadPage.txtCommentButtonTxt.clear().then(async function () {
                await discussionThreadPage.txtCommentButtonTxt.sendKeys(commentBtnName);
            })
        });

        await discussionThreadPage.txtCommentFieldLabel.click().then(async function () {
            await discussionThreadPage.txtCommentFieldLabel.clear().then(async function () {
                await discussionThreadPage.txtCommentFieldLabel.sendKeys(commentFieldLabel);
            })
        });

        await discussionThreadPage.txtReplyLabel.click().then(async function () {
            await discussionThreadPage.txtReplyLabel.clear().then(async function () {
                await discussionThreadPage.txtReplyLabel.sendKeys(replyBtnLabel);
            })
        });

        await discussionThreadPage.txtLoadMore.click().then(async function () {
            await discussionThreadPage.txtLoadMore.clear().then(async function () {
                await discussionThreadPage.txtLoadMore.sendKeys(loadMoreText);
            })
        });

        await createAllContentsPage.numberOfComments.click().then(async function () {
            await createAllContentsPage.numberOfComments.clear().then(async function () {
                await createAllContentsPage.numberOfComments.sendKeys(numberOfComments);
            })
        });

        await discussionThreadPage.txtCommentsLabel.click().then(async function () {
            await discussionThreadPage.txtCommentsLabel.clear().then(async function () {
                await discussionThreadPage.txtCommentsLabel.sendKeys(commentsLabel);
            })
        });
    });

    // await discussionThreadPage.txtCommentButtonTxt.click().then(async function () {
    //     await discussionThreadPage.txtCommentButtonTxt.clear().then(async function () {
    //         discussionThreadPage.txtCommentButtonTxt.sendKeys(latestCommentBtnName);
    //     })
    // });

})

Then("the activity with Discussion thread Content should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${newDiscusActivityName}')]/../../..`)).click().then(async function () {
        await discussionThreadPage.btnEditDiscussionThread.click().then(async function () {
            await discussionThreadPage.txtDiscussThreadBlockId.getAttribute("ng-reflect-model").then(async function (blockId) {
                expect(discJSId).to.contain(blockId.trim());
            })

            await createAllContentsPage.titleDiscusThread.getAttribute("ng-reflect-model").then(async function (title) {
                expect(titleDiscThread).to.contain(title.trim());
            });

            await discussionThreadPage.txtCommentButtonTxt.getAttribute("ng-reflect-model").then(async function (btnName) {
                expect(commentBtnName).to.contain(btnName.trim());
            })

            await discussionThreadPage.txtCommentFieldLabel.getAttribute("ng-reflect-model").then(async function (fieldLabel) {
                expect(commentFieldLabel).to.contain(fieldLabel.trim());
            })

            await discussionThreadPage.txtReplyLabel.getAttribute("ng-reflect-model").then(async function (replyLabel) {
                expect(replyBtnLabel).to.contain(replyLabel.trim());
            })

            await discussionThreadPage.txtLoadMore.getAttribute("ng-reflect-model").then(async function (loadMoreText) {
                expect(loadMoreText).to.contain(loadMoreText.trim());
            });

            await createAllContentsPage.numberOfComments.getAttribute("ng-reflect-model").then(async function (noOfComments) {
                expect(numberOfComments).to.contain(noOfComments.trim());
            });

            await discussionThreadPage.txtCommentsLabel.getAttribute("ng-reflect-model").then(async function (label) {
                expect(commentsLabel).to.contain(label.trim());
            });
        })
    })
    CreatedContents.sanityContents.push(newDiscusActivityName);
    await discussionThreadPage.btnCancelEditDiscussion.click().then(async function () {
        await discussionThreadPage.btnExitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//------------------------------------------------------------CONTENT------------------------------------------

let dateTimeContentFormat: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
let contentText: string = `AutomationContent: ${dateTimeContentFormat}`;

Then('the activity with Content Block should get created', async function () {
    await element(By.xpath(`//p[contains(text(),'${newContentActivityName}')]/../../..`)).click().then(async function () {
        let columnText: string = await activityAuthorPage.textInFirstContent.getText();
        expect(columnText).to.contain(contentText);
        CreatedContents.sanityContents.push(newContentActivityName);
        await activityAuthorPage.exitEditor.click().then(function () {
            browser.sleep(2000);
        })
    })
})

//--------------------------------------------------------------RESPONSE GRPAH-----------------------------

let rgDescription: string = `RG Description ${currentDateTime}`;
let rgLabelX_axis: string = "X-Axis: " + currentDateTime;
let rgLabelY_axis: string = "Y-Axis: " + currentDateTime;
let rgInterval: number = (Math.ceil(Math.random() * 10));
let rgJSId: string = `RGId ${currentDateTime}`;
let myVoteLegendText = "MyVote";
let othersVoteLegendText = "OthersVote";

When("User enters data into the fields of Response Graph block", async function () {
    await createAllContentsPage.graphTypeBar.click();

    await createAllContentsPage.graphDescription.click().then(async function () {
        await createAllContentsPage.graphDescription.sendKeys(rgDescription);
    })
    await authorSanityPage.responseGraphLabelXaxis.click().then(async function () {
        await authorSanityPage.responseGraphLabelXaxis.sendKeys(rgLabelX_axis);
    })
    await authorSanityPage.responseGraphLabelYaxis.click().then(async function () {
        await authorSanityPage.responseGraphLabelYaxis.sendKeys(rgLabelY_axis);
    })
    await createAllContentsPage.graphInterval.click().then(async function () {
        await createAllContentsPage.graphInterval.sendKeys(rgInterval.toString());
    })
    await createAllContentsPage.rgLinkedJSId.click().then(async function () {
        //await createAllContentsPage.rgLinkedJSId.sendKeys(singleSelectJSID);
        await createAllContentsPage.linkedSSIdOption.click();
    })
    await createAllContentsPage.rgJSId.click().then(async function () {
        await createAllContentsPage.rgJSId.sendKeys(rgJSId);
    })
    await createAllContentsPage.myVoteLegendText.click().then(async function () {
        await createAllContentsPage.myVoteLegendText.sendKeys(myVoteLegendText);
    })
    await createAllContentsPage.othersVoteLegendText.click().then(async function () {
        await createAllContentsPage.othersVoteLegendText.sendKeys(othersVoteLegendText);
    })

})

Then("the activity with Response Graph should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${newResponseGraphActivityName}')]/../../..`)).click().then(async function () {
        await element(By.xpath(`//button[contains(text(),'Edit Response Graph')]`)).click().then(async function () {
            await createAllContentsPage.graphDescription.getAttribute("ng-reflect-model").then(async function (desc) {
                expect(rgDescription).to.contain(desc.trim());
            })
            await authorSanityPage.responseGraphLabelXaxis.getAttribute("ng-reflect-model").then(async function (xAxisName) {
                expect(rgLabelX_axis).to.contain(xAxisName.trim());
            })
            await authorSanityPage.responseGraphLabelYaxis.getAttribute("ng-reflect-model").then(async function (yAxisName) {
                expect(rgLabelY_axis).to.contain(yAxisName.trim());
            })
            await createAllContentsPage.graphInterval.getAttribute("ng-reflect-model").then(async function (interval) {
                expect(rgInterval.toString()).to.contain(interval.trim());
            })
            await createAllContentsPage.rgLinkedJSId.getAttribute("ng-reflect-model").then(async function (linkedJSId) {
                expect(singleSelectJSID).to.contain(linkedJSId.trim());
            })
            await createAllContentsPage.rgJSId.getAttribute("ng-reflect-model").then(async function (jsId) {
                expect(rgJSId).to.contain(jsId.trim());
            })
            await createAllContentsPage.myVoteLegendText.getAttribute("ng-reflect-model").then(async function (myVoteText) {
                expect(myVoteLegendText).to.contain(myVoteText.trim());
            })
            await createAllContentsPage.othersVoteLegendText.getAttribute("ng-reflect-model").then(async function (othersVoteText) {
                expect(othersVoteLegendText).to.contain(othersVoteText.trim());
            })
        })
    })
    CreatedContents.sanityContents.push(newResponseGraphActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//-----------------------------------------------------------DOWNLOAD----------------------------------------------------
let downloadPrehead: string = `Prehead ${currentDateTime}`;
let downloadJSId: string = `Download_Id ${currentDateTime}`;
let downloadHeading: string = `Heading ${currentDateTime}`;
let currentMandatorySelection: string = "";

When("user enters data into the fields of Download Block", async function () {
    await createAllContentsPage.downloadPrehead.click().then(async function () {
        await createAllContentsPage.downloadPrehead.sendKeys(downloadPrehead);
    })
    await createAllContentsPage.downloadJSId.click().then(async function () {
        await createAllContentsPage.downloadJSId.sendKeys(downloadJSId);
    })
    await createAllContentsPage.downloadHeading.click().then(async function () {
        await createAllContentsPage.downloadHeading.sendKeys(downloadHeading);
    })
    await createAllContentsPage.txtMandatorySelection.getText().then(async function (currentlyMandatory) {
        currentMandatorySelection = currentlyMandatory.trim();
        await createAllContentsPage.tglIsMandatory.click();
    })
})

Then("the activity with Download Block should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${newDownloadActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Download')]`)).click().then(async function () {
        await authorSanityPage.uploadedFileName.getAttribute("ng-reflect-model").then(async function (fileName) {
            expect(fileName).to.contain("SampleReport.pdf");
        });

        await createAllContentsPage.downloadPrehead.getAttribute("ng-reflect-model").then(async function (prehead) {
            expect(downloadPrehead).to.contain(prehead.trim());
        })
        await createAllContentsPage.downloadJSId.getAttribute("ng-reflect-model").then(async function (JSId) {
            expect(downloadJSId).to.contain(JSId.trim());
        })
        await createAllContentsPage.downloadHeading.getAttribute("ng-reflect-model").then(async function (heading) {
            expect(downloadHeading).to.contain(heading.trim());
        })
        await createAllContentsPage.txtMandatorySelection.getText().then(async function (isMandatory) {
            if (currentMandatorySelection.trim() == "Yes") {
                expect(isMandatory.trim()).to.equal("No")
            }
            else {
                expect(isMandatory.trim()).to.equal("Yes")
            }
        })
    })
    CreatedContents.sanityContents.push(newDownloadActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//--------------------------------------------------------------------TEXT AND IMAGE--------------------------------------
let imageTitle: string = `Text_Image ${currentDateTime}`;
let altText: string = `Automation AltText`;
When('User attaches an image to Text and Image by using BROWSE button', async function () {
    let imagePath: string = join(process.cwd(), 'TestData', 'Bonfire.jpg');
    // await authorSanityPage.currentImageFileName.getText().then(function (fileName) {
    //     if (fileName.includes("cube")) {
    //         imagePath = join(process.cwd(), 'TestData', 'Bonfire.jpg');
    //         latestImageName = "Bonfire"
    //     }
    //     else {
    //         imagePath = join(process.cwd(), 'TestData', 'cube-1280.jpg');
    //         latestImageName = "cube-1280";
    //     }
    // })
    await activityAuthorPage.btnUploadImage.click().then(async function () {
        await activityAuthorPage.browseImageBtn.sendKeys(imagePath).then(async function () {
            await browser.sleep(5000).then(async function () {
                await activityAuthorPage.imageTitle.sendKeys(imageTitle);
                await activityAuthorPage.imageAltText.sendKeys(altText);
                await activityAuthorPage.btnUploadSelectedImage.click();
            })
        });
    })

})

Then("the activity with Text and Image Block should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${newTextImageActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Text & Image')]`)).click().then(async function () {
        await authorSanityPage.currentImageFileName.getText().then(function (currentFileName) {
            expect(currentFileName).to.contain("Bonfire.jpg");
        })
        await activityAuthorPage.imageAltTextOnEditDialog.getAttribute("ng-reflect-value").then(async function (textOnEditPopUp) {
            expect(altText).to.contain(textOnEditPopUp.trim());
        })
        await activityAuthorPage.imageAltTextOnEditDialog.getAttribute("src").then(async function (imgSrc) {
            expect(imgSrc).to.be.not.null;
        })
    })
    CreatedContents.sanityContents.push(newTextImageActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//----------------------------------------------------------COHORT RESPONSE------------------------------------------------
let cohortResJSID: string = `CR_ID ${currentDateTime}`;
let cohorResTitle: string = `CR_Title ${currentDateTime}`;
let nextResponseBtnTxt: string = `NextRes ${currentDateTime}`;
let cohortResRelatedContentJSId: string = "";

When("User enters data into the fields of Cohort Response block", async function () {

    await createAllContentsPage.cohortResJSID.click().then(async function () {
        await createAllContentsPage.cohortResJSID.clear().then(async function () {
            await createAllContentsPage.cohortResJSID.sendKeys(cohortResJSID);
        })
    });

    await authorSanityPage.titleCohortRes.click().then(async function () {
        await authorSanityPage.titleCohortRes.clear().then(async function () {
            await authorSanityPage.titleCohortRes.sendKeys(cohorResTitle);
        })
    });
    await authorSanityPage.cohortResNextResponseLabel.click().then(async function () {
        await authorSanityPage.cohortResNextResponseLabel.clear().then(async function () {
            await authorSanityPage.cohortResNextResponseLabel.sendKeys(nextResponseBtnTxt);
        })
    });

    let multipleRelatedContentBlocks: boolean = await createAllContentsPage.deleteCohortResRelatedContentBlock.isPresent();
    while (multipleRelatedContentBlocks) {
        await createAllContentsPage.deleteCohortResRelatedContentBlock.click();
        multipleRelatedContentBlocks = await createAllContentsPage.deleteCohortResRelatedContentBlock.isPresent();
    }
    cohortResRelatedContentJSId = singleSelectJSID;
    await createAllContentsPage.cohortResRelatedContentJSId.clear().then(async function () {
        await createAllContentsPage.cohortResRelatedContentJSId.sendKeys(cohortResRelatedContentJSId);
    })
    // await createAllContentsPage.cohortResRelatedContentJSId.click().then(async function () {        
    // });

    await createAllContentsPage.cohortResShowExerciseLabel.click();
    // await browser.sleep(240*1000);
})

Then("the activity with Cohort Response should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${cohortResponseActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Cohort Response')]`)).click().then(async function () {
        await createAllContentsPage.cohortResJSID.getAttribute("ng-reflect-model").then(function (JSID) {
            expect(JSID.trim()).to.contain(cohortResJSID, "Cohort Response JS ID is incorrect");
        })
        await authorSanityPage.titleCohortRes.getAttribute("ng-reflect-model").then(function (title) {
            expect(title.trim()).to.contain(cohorResTitle, "Cohort Response Title is incorrect");
        })
        await authorSanityPage.cohortResNextResponseLabel.getAttribute("ng-reflect-model").then(function (btnText) {
            expect(btnText.trim()).to.contain(nextResponseBtnTxt, "Cohort Response Next Response Button Name is incorrect");
        })
        await createAllContentsPage.cohortResRelatedContentJSId.getAttribute("ng-reflect-model").then(function (relatedJSID) {
            expect(relatedJSID.trim()).to.contain(cohortResRelatedContentJSId, "Cohort Response Next Response Button Name is incorrect");
        })
        await createAllContentsPage.cohortResShowExerciseStatus.getAttribute("aria-checked").then(function (showLabel) {
            expect(showLabel.trim()).to.equal("true", "Cohort Response Show Exercise Label not updated");
        })
    })
    CreatedContents.sanityContents.push(cohortResponseActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//----------------------------------------------------PARTICIPANT RESPONSE-----------------------------------------------------
let textInputJSID: string = `Input_Id ${currentDateTime}`;
let textInputQuestionText: string = `QuestionText ${currentDateTime}`;
let textInputPlaceholder: string = `Placeholder ${currentDateTime}`;
let textInputCharLimit: string = `200`;

When("user clicks on Text Input button in Edit Content Modal", async function () {
    await element(By.css("mat-dialog-container button[id*='moreRich']")).click();
    await browser.sleep(1500);
    await createAllContentsPage.textInputBtn.click();
})

When("user enters Data into Text Input fields and saves changes", async function () {
    await createAllContentsPage.textInputJSID.click().then(async function () {
        await createAllContentsPage.textInputJSID.clear().then(async function () {
            await createAllContentsPage.textInputJSID.sendKeys(textInputJSID);
        })
    })
    await createAllContentsPage.textInputLabel.click().then(async function () {
        await createAllContentsPage.textInputLabel.clear().then(async function () {
            await createAllContentsPage.textInputLabel.sendKeys(textInputQuestionText);
        })
    })
    await createAllContentsPage.textInputPlaceholderText.click().then(async function () {
        await createAllContentsPage.textInputPlaceholderText.clear().then(async function () {
            await createAllContentsPage.textInputPlaceholderText.sendKeys(textInputPlaceholder);
        })
    })
    await createAllContentsPage.textInputCharacterLimit.click().then(async function () {
        await createAllContentsPage.textInputCharacterLimit.clear().then(async function () {
            await createAllContentsPage.textInputCharacterLimit.sendKeys(textInputCharLimit);
        })
    })
    await createAllContentsPage.textInputSaveChanges.click();
})


When("User enters data into the fields of Participant Response block", async function () {
    await createAllContentsPage.participantResRelatedContentJSId.clear().then(async function () {
        await createAllContentsPage.participantResRelatedContentJSId.sendKeys(textInputJSID);
    })
    await createAllContentsPage.participantResShowExerciseLabel.click();

})

Then("the activity with Participant Response should get created", async function () {

    await element(By.xpath(`//p[contains(text(),'${participantResponseActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Participant Response')]`)).click().then(async function () {
        await createAllContentsPage.participantResRelatedContentJSId.getAttribute("ng-reflect-model").then(function (relatedJSID) {
            expect(relatedJSID.trim()).to.contain(textInputJSID, "Particpant Response Related JS ID is incorrect");
        })
        await createAllContentsPage.participantResShowExerciseStatus.getAttribute("aria-checked").then(function (showLabel) {
            expect(showLabel.trim()).to.equal("false", "Participant Response Show Exercise Label not updated");
        })
    })
    CreatedContents.sanityContents.push(participantResponseActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//--------------------------------------------------------------CARDS------------------------------------------
let currentCardCount: number = null;
let cardFrontContent: string[] = [];
let cardBackContent: string[] = [];
When("user enters Data into Cards fields and saves changes", async function () {
    await createAllContentsPage.radioSizeMedium.click();
    await createAllContentsPage.radioAlignmentCenter.click();
    await activityAuthorPage.cardFrontContainers.count().then(async function (cardCount) {
        currentCardCount = cardCount;
        activityAuthorPage.addCardBtn.click().then(async function () {
            currentCardCount = cardCount + 1;
            await browser.sleep(1000).then(async function () {
                let cardCountLatest: number = await activityAuthorPage.cardFrontContainers.count();
                expect(cardCountLatest).to.equal(cardCount + 1);
            })
        })
    })
    let cardFrontText: string = 'automation_text_Card: ' + currentDateTime;
    let cardBackText: string = 'automation_text_Card: ' + currentDateTime;
    // console.log(cardFrontText);
    // console.log(cardBackText);
    for (let i = 1; i <= currentCardCount; i++) {
        let cardFronttWrapper: ElementFinder = await element(By.xpath(`(//label[contains(text(),'Card Front')]//following-sibling::app-input//div[contains(@class,'fr-element')]//p)[${i}]`));
        let cardBacktWrapper: ElementFinder = await element(By.xpath(`(//label[contains(text(),'Card Back')]//following-sibling::app-input//div[contains(@class,'fr-element')]//p)[${i}]`));

        await browser.executeScript(`arguments[0].innerText = '${cardFrontText} Front:${i}'`, cardFronttWrapper).then(async function () {
            await cardFronttWrapper.click().then(async function () {
                cardFrontContent.push(`${cardFrontText} Front:${i}`);
                await browser.sleep(1000);
            })
        })
        await browser.executeScript(`arguments[0].innerText = '${cardBackText} Back:${i}'`, cardBacktWrapper).then(async function () {
            await cardBacktWrapper.click().then(async function () {
                cardBackContent.push(`${cardBackText} Back:${i}`);
                await browser.sleep(1000);
            })
        })
    }
})

Then("the activity with Cards should get created", async function () {

    await element(By.xpath(`//p[contains(text(),'${cardsActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Cards')]`)).click();
    await createAllContentsPage.sizeCurrentlySelected.getText().then(async function (size) {
        expect(size, "Card Size not updated").to.equal("Medium");
    })
    await createAllContentsPage.alignmentSelected.getText().then(async function (alignment) {
        expect(alignment, "Card Alignment not updated").to.equal("Center");
    })
    await createAllContentsPage.frontContentAllCards.each(async function (frontContent) {
        await frontContent.getText().then(async function (cardFrontText) {
            expect(cardFrontText, "Card Front Content not added properly").to.be.oneOf(cardFrontContent);
        })
    })
    await createAllContentsPage.backContentAllCards.each(async function (backContent) {
        await backContent.getText().then(async function (cardBackText) {
            expect(cardBackText, "Card Back Content not added properly").to.be.oneOf(cardBackContent);
        })
    })
    CreatedContents.sanityContents.push(cardsActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//---------------------------------------------------------------WORDCLOUD-----------------------------------------------
let wordcloudNumberOfWords: number = 0;
let latestWordcloudWordFormat: string = "";
let wordcloudJSID: string = `WC_ID ${currentDateTime}`;
When("User enters data into the fields of Wordcloud block", async function () {
    wordcloudJSID = textInputJSID;
    await createAllContentsPage.wordCloudJSID.clear().then(async function () {
        await createAllContentsPage.wordCloudJSID.sendKeys(wordcloudJSID);
    })
    while (wordcloudNumberOfWords < 20) {
        await authorSanityPage.btnIncreaseNumberOfWords.click().then(async function () {
            await browser.sleep(0.5 * 1000);
            await authorSanityPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (currentNumber) {
                wordcloudNumberOfWords = Number.parseInt(currentNumber);
            })
        })
    }
    //WordCase 
    await authorSanityPage.wordFormatUppercase.click().then(async function () {
        latestWordcloudWordFormat = "Uppercase"
    })
    await createAllContentsPage.wordCloudScopeCohort.click();

})

Then("the activity with Wordcloud should get created", async function () {

    await element(By.xpath(`//p[contains(text(),'${wordcloudActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Wordcloud')]`)).click();

    await createAllContentsPage.wordCloudJSID.getAttribute("ng-reflect-model").then(function (relatedJSID) {
        expect(relatedJSID.trim(), "Wordcloud Related JS ID is incorrect").to.contain(wordcloudJSID);
    })
    await authorSanityPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (latestNumber) {
        expect(Number.parseInt(latestNumber), "Word Count not updated ").to.equal(wordcloudNumberOfWords);
    });
    await authorSanityPage.currentWordFormat.getText().then(async function (latestFormatting) {
        expect(latestFormatting, "Word Formatting not updated").to.equal(latestWordcloudWordFormat);
    })
    await createAllContentsPage.selectedWordCloudScope.getText().then(async function (scope) {
        expect(scope, "Wordcloud Scope not updated").to.equal("Cohort");;
    })
    CreatedContents.sanityContents.push(wordcloudActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//----------------------------------------------------CUSTOM CODE-----------------------------------------------------

let latestCustomCodeText: string = `Create CustomCode: ${currentDateTime}`;
When("User enters some code into Custom Code Block", async function () {
    let customCode: string = `<p class="fr-text-uppercase" style="text-align: center;"><span style="font-size: 30px; color: rgb(240, 115, 0);">${latestCustomCodeText}</span></p> <video controls="" height="260" style="text-align: center;" width="320"><source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4">&nbsp;Your browser does not support the video tag.</video>`;
    await authorSanityPage.btnShowMiscButtons.click();
    await browser.sleep(1000);
    await authorSanityPage.codeViewButton.click();
    await authorSanityPage.inputCustomCode.click().then(async function () {
        await browser.sleep(1000);
    })
    // await browser.executeScript(`arguments[0].innerHTML = '${customCode}'`, authorSanityPage.customCodeContainer).then(async function () {
    //     await authorSanityPage.customCodeContainer.click().then(async function () {
    //         await browser.sleep(2000);
    //     })
    // })
    await authorSanityPage.inputCustomCode.sendKeys(customCode);
    await authorSanityPage.inputCustomCode.click().then(async function () {
        await browser.sleep(1000);
    })
    await authorSanityPage.codeViewButton.click();
    await browser.sleep(1000);
})

Then("the activity with Custom Code should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${customCodeActivityName}')]/../../..`)).click();
    await authorSanityPage.textInCustomCodePreview.getText().then(function (customCodeText) {
        expect(customCodeText).to.be.oneOf([latestCustomCodeText, latestCustomCodeText.toUpperCase()]);
        //expect(customCodeText).to.contain(/latestCustomCodeText|/)
    })
    CreatedContents.sanityContents.push(customCodeActivityName);
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//----------------------------------------------------------GENERATE DOCUMENT-------------------------------------------------
let genDocPrehead: string = `genDoc Prehead ${currentDateTime}`;
let genDocJSId: string = `genDoc ${currentDateTime}`;
let genDocHeading: string = `genDoc Heading ${currentDateTime}`;
let genDoctMandatorySelection: string = "";

When("user enters Data into Generate Document fields", async function () {
    //Generate Document fields are the same as Download. Hence using the Download block locators
    await createAllContentsPage.downloadPrehead.click().then(async function () {
        await createAllContentsPage.downloadPrehead.sendKeys(genDocPrehead);
    })
    await createAllContentsPage.downloadJSId.click().then(async function () {
        await createAllContentsPage.downloadJSId.sendKeys(genDocJSId);
    })
    await createAllContentsPage.downloadHeading.click().then(async function () {
        await createAllContentsPage.downloadHeading.sendKeys(genDocHeading);
    })
    await createAllContentsPage.txtIsMandatoryGenDoc.getText().then(async function (currentlyMandatory) {
        genDoctMandatorySelection = currentlyMandatory.trim();
        await createAllContentsPage.tglIsMandatoryGenDoc.click();
    })

})

When("user uploads a template file to generate document", async function () {
    let downloadFilePath: string = join(process.cwd(), 'TestData', 'GenerateDoc.docx');
    await browser.wait(EC.elementToBeClickable(downloadBlockPage.radioBtnMomentaContentDoc), 5000).then(async function () {
        await downloadBlockPage.radioBtnMomentaContentDoc.click().then(async function () {
            await browser.sleep(1500);
            await downloadBlockPage.uploadedFileName.clear().then(async function () {
                await downloadBlockPage.uploadFileInputBox.sendKeys(downloadFilePath).then(async function () {
                    await browser.wait(EC.invisibilityOf(downloadBlockPage.loaderContainer), 15 * 1000);
                })
            })
        })
    })
});

Then("the activity with Generate Document should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${genDocumentActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Generate Document')]`)).click().then(async function () {
        await authorSanityPage.uploadedFileName.getAttribute("ng-reflect-model").then(async function (fileName) {
            expect(fileName).to.contain("GenerateDoc.docx");
        });

        await createAllContentsPage.downloadPrehead.getAttribute("ng-reflect-model").then(async function (prehead) {
            expect(genDocPrehead).to.contain(prehead.trim());
        })
        await createAllContentsPage.downloadJSId.getAttribute("ng-reflect-model").then(async function (JSId) {
            expect(genDocJSId).to.contain(JSId.trim());
        })
        await createAllContentsPage.downloadHeading.getAttribute("ng-reflect-model").then(async function (heading) {
            expect(genDocHeading).to.contain(heading.trim());
        })
        await createAllContentsPage.txtIsMandatoryGenDoc.getText().then(async function (isMandatory) {
            if (genDoctMandatorySelection.trim() == "Yes") {
                expect(isMandatory.trim()).to.equal("No")
            }
            else {
                expect(isMandatory.trim()).to.equal("Yes")
            }
        })
    })
    CreatedContents.sanityContents.push(genDocumentActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//----------------------------------------------------------MASTHEAD-----------------------------------------------
let mastheadContent: string = "Masthead Content:" + currentDateTime;
let mastheadHeading: string = "Masthead Heading:" + currentDateTime;
let mastheadImageTitle: string = `MastheadImage ${currentDateTime}`;
let mastheadImageAltText: string = `MastheadImageAltText ${Math.floor(Math.random() * 10000)}`;

console.log('Browserstack Run:', browser.params.browserstackRun);

When("user enters Data into Masthead fields", async function () {
    await mastheadPage.ddHeaderType.click().then(async function () {
        await mastheadPage.headerTypeFullScreen.click();
    });
    await mastheadPage.mastheadIconDD.click().then(async function () {
        await mastheadPage.iconOptionInsights.click();
    })
    let imagePath: string = join(process.cwd(), 'TestData', 'Bonfire.jpg');
    if (browser.params.browserstackRun) {
        browser.setFileDetector(new remote.FileDetector);
        await helper.uploadNewImageCMS(imagePath, mastheadImageTitle, mastheadImageAltText);
        // await activityAuthorPage.browseImageBtn.sendKeys(imagePath).then(async function () {
        //     await browser.sleep(3000);
        // })
    }
    else {
        await helper.uploadNewImageCMS(imagePath, mastheadImageTitle, mastheadImageAltText);
        // await activityAuthorPage.browseImageBtn.sendKeys(imagePath).then(async function () {
        //     await browser.sleep(3000);
        // })
    }

    // await browser.executeScript(`arguments[0].innerText = '${mastheadContent}'`, mastheadPage.mastheadContentLastPara).then(async function () {
    //     await mastheadPage.mastheadContentLastPara.click().then(async function () {
    //         await browser.sleep(2000);
    //     })
    // });
    // await browser.executeScript(`arguments[0].innerText = '${mastheadHeading}'`, mastheadPage.mastheadHeading).then(async function () {
    //     await mastheadPage.mastheadHeading.click().then(async function () {
    //         await browser.sleep(2000);
    //     })
    // });
    await createAllContentsPage.mastheadContent.click().then(async function () {
        await browser.sleep(2000);
    })
    await createAllContentsPage.mastheadContent.sendKeys(mastheadContent);
    await createAllContentsPage.mastheadContent.click().then(async function () {
        await browser.sleep(2000);
    });

    await createAllContentsPage.mastheadheading.click().then(async function () {
        await browser.sleep(2000);
    })
    await createAllContentsPage.mastheadheading.sendKeys(mastheadHeading);
    await createAllContentsPage.mastheadheading.click().then(async function () {
        await browser.sleep(2000);
    })

})

Then("the activity with Masthead should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${mastheadActivityName}')]/../../..`)).click();
    await mastheadPage.mastheadPreviewContentLastPara.getText().then(async function (lastParagrpah) {
        expect(lastParagrpah.trim(), "Masthead Content Not Updated").to.equal(mastheadContent);
    });
    await mastheadPage.mastheadPreviewHeading.getText().then(async function (heading) {
        expect(heading.trim(), "Masthead Heading Not Updated").to.equal(mastheadHeading);
    })
    await element(By.xpath(`//button[contains(text(),'Edit Masthead')]`)).click().then(async function () {
        await mastheadPage.ddHeaderType.getAttribute("ng-reflect-model").then(async function (value) {
            expect(value.trim(), "Masthead HeaderType not updated").to.equal("2");
        });
        await mastheadPage.mastheadIconDD.getAttribute("ng-reflect-model").then(async function (iconType) {
            expect(iconType.trim(), "Masthead Icon not updated").to.equal("insights");
        });
    })
    CreatedContents.sanityContents.push(mastheadActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//---------------------------------------------------------------SHARE LINK----------------------------------------
let shareLinkActiveDays: number = 0;
let expectedNumberOfActiveDays = 2 + Math.floor(Math.random() * 10);
let linkedContentObjectName: string = "";
let linkedContentObjectId: string = "";
When("user enters Data into Share Link fields", async function () {
    await createAllContentsPage.selectContentObjDD.click().then(async function () {
        linkedContentObjectName = await createAllContentsPage.firstOptionContentObjDD.getText();
        linkedContentObjectId = await createAllContentsPage.firstOptionContentObjDD.getAttribute("value");
        await createAllContentsPage.firstOptionContentObjDD.click();
    })

    await createAllContentsPage.numberOfActiveDays.getAttribute("ng-reflect-model").then(async function (currentNumber) {
        shareLinkActiveDays = Number.parseInt(currentNumber);
    })
    if (shareLinkActiveDays < expectedNumberOfActiveDays) {
        while (shareLinkActiveDays < expectedNumberOfActiveDays) {
            await createAllContentsPage.increaseNumberOfActiveDays.click().then(async function () {
                await browser.sleep(0.5 * 1000);
                await createAllContentsPage.numberOfActiveDays.getAttribute("ng-reflect-model").then(async function (currentNumber) {
                    shareLinkActiveDays = Number.parseInt(currentNumber);
                })
            })
        }
    }
    else {
        while (shareLinkActiveDays > expectedNumberOfActiveDays) {
            await createAllContentsPage.decreaseNumberOfActiveDays.click().then(async function () {
                await browser.sleep(0.5 * 1000);
                await createAllContentsPage.numberOfActiveDays.getAttribute("ng-reflect-model").then(async function (currentNumber) {
                    shareLinkActiveDays = Number.parseInt(currentNumber);
                })
            })
        }
    }
})

Then("the activity with Share Link should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${shareLinkActivityName}')]/../../..`)).click();
    await createAllContentsPage.linkedContentObjNameInPreview.getText().then(async function (linkedContentName) {
        expect(linkedContentName.trim(), "Content Linked to Share Link Block is not correct").to.equal(linkedContentObjectName)
    })
    await createAllContentsPage.shareLinkExpireText.getText().then(async function (expiryText) {
        expect(expiryText.trim(), "Number of Active Days is not correct").to.contain(`the link will expire in ${expectedNumberOfActiveDays} days`);
    })
    CreatedContents.sanityContents.push(shareLinkActivityName);
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//---------------------------------------------------------NESTED CONTENT-------------------------------------------------------
let nestedContentHeadings: string[] = [];
let nestedContentDescriptions: string[] = [];
When("user enters Data into Nested Content fields", async function () {
    await createAllContentsPage.nestedContentTypeAccordion.click();
    for (let i: number = 1; i <= 2; i++) {
        let nestedContentTabHeading: string = `NestedContent${i} Heading ${currentDateTime}`;
        let nestedContentTabDesc: string = `NestedContent${i} Description ${currentDateTime}`;
        if (i === 1) {
            await browser.executeScript(`arguments[0].innerText = '${nestedContentTabHeading}'`, authorSanityPage.nestedContentNewTabHeading).then(async function () {
                await authorSanityPage.nestedContentNewTabHeading.click().then(async function () {
                    nestedContentHeadings.push(nestedContentTabHeading);
                    await browser.sleep(1000);
                })
            });
            await browser.executeScript(`arguments[0].innerText = '${nestedContentTabDesc}'`, authorSanityPage.nestedContentNewTabDesc).then(async function () {
                await authorSanityPage.nestedContentNewTabDesc.click().then(async function () {
                    nestedContentDescriptions.push(nestedContentTabDesc);
                    await browser.sleep(1000);
                })
            });
        }
        else {
            await authorSanityPage.btnNestedContentAddItem.click().then(async function () {
                await browser.executeScript(`arguments[0].innerText = '${nestedContentTabHeading}'`, authorSanityPage.nestedContentNewTabHeading).then(async function () {
                    await authorSanityPage.nestedContentNewTabHeading.click().then(async function () {
                        nestedContentHeadings.push(nestedContentTabHeading);
                        await browser.sleep(1000);
                    })
                });
                await browser.executeScript(`arguments[0].innerText = '${nestedContentTabDesc}'`, authorSanityPage.nestedContentNewTabDesc).then(async function () {
                    await authorSanityPage.nestedContentNewTabDesc.click().then(async function () {
                        nestedContentDescriptions.push(nestedContentTabDesc);
                        await browser.sleep(1000);
                    })
                });
            });
        }
    }
})

Then("the activity with Nested Content should get created", async function () {
    let accordionHeadings: string[] = [];
    let accordionDescriptions: string[] = [];

    await element(By.xpath(`//p[contains(text(),'${nestedContentActivityName}')]/../../..`)).click();
    await createAllContentsPage.accordionHeadingsInPreview.each(async function (heading) {
        await heading.getText().then(async function (headingText) {
            accordionHeadings.push(headingText);
        })
    })
    let tabCount: number = await element.all(By.xpath("//mat-expansion-panel//mat-expansion-panel//mat-expansion-panel-header")).count();
    for (let i: number = 1; i <= tabCount; i++) {
        await element(By.xpath(`(//mat-expansion-panel//mat-expansion-panel//mat-expansion-panel-header)[${i}]`)).click();
        await browser.sleep(1500);
        let j: number = 0;
        await createAllContentsPage.accordionDescriptionsInPreview.each(async function (description) {
            await description.getText().then(async function (descriptionText) {
                j++;
                //console.log(i,j,descriptionText);
                if (i == j) {
                    accordionDescriptions.push(descriptionText.trim());
                }
            })
        })
    }

    expect(accordionHeadings, "All Nested Content Headings not added").to.include.members(nestedContentHeadings);
    expect(accordionDescriptions, "All Nested Content Descriptions not added").to.include.members(nestedContentDescriptions);

    CreatedContents.sanityContents.push(nestedContentActivityName);
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//----------------------------------------CALLOUT-------------------------------------------------------------------
let calloutContentText: string = `Callout Content ${currentDateTime}`;
let calloutFloatText: string = `Callout Float ${currentDateTime}`
When("user enters Data into Callout fields", async function () {

    await createAllContentsPage.calloutTypeDD.click().then(async function () {
        await createAllContentsPage.calloutTypeFloatRight40.click();
    })

    await createAllContentsPage.calloutContentText.click().then(async function () {
        await browser.sleep(1000);
    })
    await createAllContentsPage.calloutContentText.sendKeys(calloutContentText);
    await createAllContentsPage.calloutContentText.click().then(async function () {
        await browser.sleep(1000);
    });

    await createAllContentsPage.calloutFloatText.click().then(async function () {
        await browser.sleep(1000);
    })
    await createAllContentsPage.calloutFloatText.sendKeys(calloutFloatText);
    await createAllContentsPage.calloutFloatText.click().then(async function () {
        await browser.sleep(1000);
    });

    // await browser.executeScript(`arguments[0].innerText = '${calloutContentText}'`, createAllContentsPage.calloutContentText).then(async function () {
    //     await createAllContentsPage.calloutContentText.click().then(async function () {
    //         await browser.sleep(1000);
    //     })
    // });
    // await browser.executeScript(`arguments[0].innerText = '${calloutFloatText}'`, createAllContentsPage.calloutFloatText).then(async function () {
    //     await createAllContentsPage.calloutFloatText.click().then(async function () {
    //         await browser.sleep(1000);
    //     })
    // });
})

Then("the activity with Callout should get created", async function () {
    await element(By.xpath(`//p[contains(text(),'${calloutActivityName}')]/../../..`)).click();
    await createAllContentsPage.calloutContentInPreview.getText().then(async function (contentText) {
        expect(contentText, "Callout Content Text not added properly").to.contain(calloutContentText);
    })
    await createAllContentsPage.calloutFloatTextInPreview.getText().then(async function (floatText) {
        expect(floatText, "Callout Float Text not added properly").to.contain(calloutFloatText);
    })
    await element(By.xpath(`//button[contains(text(),'Edit Callout')]`)).click().then(async function () {
        await createAllContentsPage.calloutTypeDD.getAttribute("ng-reflect-model").then(async function (typeValue) {
            await element(By.xpath(`//select[contains(@name,'-type')]//option[@value='${typeValue}']`)).getText().then(async function (calloutType) {
                expect(calloutType, 'Callout Type not updated').to.contain('Secondary Text float right 40%');
            })
        })
    })
    CreatedContents.sanityContents.push(calloutActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})
//-------------------------------------------------------------STORYLINE-----------------------------------------------------
let currentStorylineMandatorySelection: string = "";
When("user enters Data into Storyline fields", async function () {
    await browser.executeScript(`document.querySelector("#file-input-zip").style.opacity = 1`).then(async function () {
        await browser.sleep(1000);
    })
    let storylineZipFile: string = join(process.cwd(), 'TestData', 'Test_Quiz.zip');
    await createAllContentsPage.uploadStoryLineFileInputBox.sendKeys(storylineZipFile);
    await createAllContentsPage.storylineHeight.clear().then(async function () {
        await createAllContentsPage.storylineHeight.sendKeys('600px');
    });
    let currentStorylineMandatorySelection: string = await createAllContentsPage.completionMandatoryCurrentValue.getText();
    await createAllContentsPage.tglCompletionMandatory.click();
})

Then('the activity with Storyline should get created', async function () {
    await element(By.xpath(`//p[contains(text(),'${storylineActivityName}')]/../../..`)).click();
    await createAllContentsPage.storylineURLInPreview.getText().then(async function (url) {
        expect(url, 'Storyline File not uploaded').to.contain('index_lms.html');
    })
    await createAllContentsPage.storylineHeightInPreview.getText().then(async function (height) {
        expect(height, 'Storyline Height not updated').to.contain('600px');
    })
    await createAllContentsPage.storylineURLInPreview.getText().then(async function (url) {
        expect(url, 'Storyline File not uploaded').to.contain('index_lms.html');
    })
    await createAllContentsPage.completionMandatoryInPreview.getAttribute("ng-reflect-model").then(async function (isMandatory) {
        if (currentStorylineMandatorySelection == "No") {
            expect(isMandatory, 'Storyline Mandatory Completion Toggle not updated').to.be('true');
        }
        if (currentStorylineMandatorySelection == "Yes") {
            expect(isMandatory, 'Storyline Mandatory Completion Toggle not updated').to.be('false');
        }
    })
    CreatedContents.sanityContents.push(storylineActivityName);
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });

})

//-------------------------------------------------------------IMAGE-----------------------------------------------------

let nameOfImageSelected: string = "";
let altTextOfImageSelected: string = "";
When("user enters Data into Image fields", async function () {

    await createAllContentsPage.btnBrowseImage.click().then(async function () {
        await createAllContentsPage.imageFolderAutomationRegSuite.click().then(async function () {
            await createAllContentsPage.mediaFolderInRegSuiteFolder.click().then(async function () {
                await browser.wait(EC.invisibilityOf(element(By.css("div[class*='loader_container']"))), 30 * 1000);
            })
        })
        // await element(By.xpath("//div[contains(@class,'breadcrumb')]//a[contains(text(),'petronas')]")).click().then(async function(){
        //     await browser.wait(EC.invisibilityOf(element(By.css("div[class*='loader_container']"))),30*1000);
        // })
    })
    await createAllContentsPage.imagesInMediaFolder.count().then(async function (imageCount) {
        expect(imageCount, 'No Images found in Media Folder').to.be.greaterThan(0);
    })
    await createAllContentsPage.selectFirstImageInMediaFolder.getAttribute("aria-describedby").then(async function (imageNameId) {
        let imageNameContainer: ElementFinder = await element(By.xpath(`//div[contains(@id,'${imageNameId}')]`));
        await browser.executeScript(`return arguments[0].innerText`, imageNameContainer).then(async function (firstImageName) {
            nameOfImageSelected = firstImageName as string;
        })
    })
    await createAllContentsPage.firstImageAltText.getAttribute("alt").then(async function (firstImageAltText) {
        altTextOfImageSelected = firstImageAltText;
    })

    await createAllContentsPage.ddImageSize.click().then(async function () {
        await browser.sleep(1000);
        await createAllContentsPage.imageSizeSecondOption.click();
    })

    await createAllContentsPage.selectFirstImageInMediaFolder.click().then(async function () {
        await createAllContentsPage.btnInsertImage.click();
    })
})

let uploadedImageS3Path:string = "";
Then("the activity with Image should get created", async function () {

    await element(By.xpath(`//p[contains(text(),'${imageActivityName}')]/../../..`)).click();

    await element(By.xpath(`//button[contains(text(),'Edit Image')]`)).click().then(async function () {
        await createAllContentsPage.uploadedImage.getAttribute("cmsimageurl").then(async function (imageURL) {
            expect(imageURL, 'Image URL not found').to.be.not.null;
        })
        await createAllContentsPage.uploadedImageFileName.getText().then(async function (imageName) {
            let imageRegex: RegExp = /.jpg|.jpeg|.png|.gif|.bmp|.tiff/i;
            let relevantName: string = imageName.trim().split("File Name: ")[1];
            expect(nameOfImageSelected, 'Name of Uploaded Image is not correct').to.contain((relevantName.split(imageRegex))[0]);
        })
        await createAllContentsPage.uploadedImageAltText.getAttribute("ng-reflect-value").then(async function (imageAltText) {
            expect(altTextOfImageSelected, 'Image URL not found').to.equal(imageAltText);
        })
        uploadedImageS3Path = await createAllContentsPage.imageUnderEditPopUp.getAttribute("s3filepath");
    })
    CreatedContents.sanityContents.push(imageActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//----------------------------------------------------------Go-Do------------------------------------------------------
let goDoJSId: string = `Go-Do Id ${currentDateTime}`;
let goDoTitle: string = `Go-Do Title ${currentDateTime}`;
let goDoDescription: string = `Description ${currentDateTime}`;
let goDoCompletionMessage: string = `This is Go-Do completion Message ${currentDateTime}`;
let goDoCommitmentInstructions = `These are Go-Do commitment instructions ${currentDateTime}`;
let goDoCommitmentMessage: string = `This is Go-Do commitment Message ${currentDateTime}`;
let numberOfDaysOffset: string = (Math.ceil(Math.random() * 10)).toString();
let firstThemeText: string = "";
let resultsContentObject: string = "Automation Go-Do Results Object";
let instructionsContentObject: string = "Automation Go-Do Instructions Object";
let durationOptions: string[] = ['Hours', 'Days', 'Weeks'];
let priorToOptions = ['Prior to', 'After'];
let conditionOptions = ['Cohort start', 'Stage start', 'Module start', 'Activity start'];
let instructionsContentObjOptions: string[] = ['Current Content Object', 'Select Content Object'];
let targetDate: string = (new Date(Date.now() + 1000 * 60 * 60 * 24 * Number.parseInt(numberOfDaysOffset))).toString();
console.log(targetDate);

When("user enters Data into Go-Do fields", async function () {
    await createAllContentsPage.goDoJSId.clear().then(async function () {
        await createAllContentsPage.goDoJSId.sendKeys(goDoJSId);
    })
    await createAllContentsPage.goDoTitle.clear().then(async function () {
        await createAllContentsPage.goDoTitle.sendKeys(goDoTitle);
    })
    await createAllContentsPage.goDoDescription.clear().then(async function () {
        await createAllContentsPage.goDoDescription.sendKeys(goDoDescription);
    })
    // await createAllContentsPage.goDoCompletionMessage.click().then(async function () {
    //     await browser.sleep(1000);
    //     await createAllContentsPage.goDoCompletionMessage.clear();
    //     await createAllContentsPage.goDoCompletionMessage.sendKeys(goDoCompletionMessage);
    //     await createAllContentsPage.goDoCompletionMessage.click();
    //     await browser.sleep(1000);
    // })

    await createAllContentsPage.goDoCommitmentInstructions.click().then(async function () {
        await browser.sleep(1000);
        await createAllContentsPage.goDoCommitmentInstructions.clear();
        await createAllContentsPage.goDoCommitmentInstructions.sendKeys(goDoCommitmentInstructions);
        await createAllContentsPage.goDoCommitmentInstructions.click();
        await browser.sleep(1000);
    })

    await createAllContentsPage.goDoCommitmentMessage.click().then(async function () {
        await browser.sleep(1000);
        await createAllContentsPage.goDoCommitmentMessage.clear();
        await createAllContentsPage.goDoCommitmentMessage.sendKeys(goDoCommitmentMessage);
        await createAllContentsPage.goDoCommitmentMessage.click();
        await browser.sleep(1000);
    })

    // await createAllContentsPage.rdoDateOffset.click().then(async function(){
    //     await browser.sleep(1000);        
    // })
    await browser.executeScript("arguments[0].click()", createAllContentsPage.rdoDateOffset).then(async function () {
        await browser.sleep(1000);
    })
    await createAllContentsPage.dateOffSetNumberOfDays.isPresent().then(async function (isPresent) {
        if (!isPresent) {
            await browser.executeScript("arguments[0].click()", createAllContentsPage.rdoDateOffset);
        }
    })
    await createAllContentsPage.dateOffSetNumberOfDays.clear().then(async function () {
        await createAllContentsPage.dateOffSetNumberOfDays.sendKeys(numberOfDaysOffset);
    })
    let actualDurationOptions: string[] = [];
    await createAllContentsPage.ddSelectDuration.click().then(async function () {
        await browser.sleep(1000);
        await createAllContentsPage.ddOptionsSelectDuration.each(async function (option) {
            let optionText: string = (await option.getText()).trim();
            actualDurationOptions.push(optionText);
        })
        await createAllContentsPage.daysOptionInDurationDD.click();
    })
    //console.log(actualDurationOptions);
    expect(actualDurationOptions).to.include.members(durationOptions);

    let actualPriorOptions: string[] = [];
    await createAllContentsPage.ddSelectPriorTo.click().then(async function () {
        await browser.sleep(1000);
        await createAllContentsPage.ddOptionsSelectPriorTo.each(async function (option) {
            let optionText: string = (await option.getText()).trim();
            actualPriorOptions.push(optionText);
        })
        await createAllContentsPage.afterOptionInPriorToDD.click();
    })
    //console.log(actualPriorOptions);
    expect(actualPriorOptions).to.include.members(priorToOptions);

    let actualConditionOptions: string[] = [];
    await createAllContentsPage.ddSelectCondition.click().then(async function () {
        await browser.sleep(1000);
        await createAllContentsPage.ddOptionsSelectCondition.each(async function (option) {
            let optionText: string = (await option.getText()).trim();
            actualConditionOptions.push(optionText);
        })
        await createAllContentsPage.moduleOptionInConditionDD.click();
    })
    expect(actualConditionOptions).to.include.members(conditionOptions);
    //console.log(actualConditionOptions);

    await createAllContentsPage.tglDueDateParticipantEditable.click();
    await createAllContentsPage.tglRequired.click();
    await createAllContentsPage.tglEnableReminders.click();

    await createAllContentsPage.selectTheme.click().then(async function () {
        firstThemeText = await createAllContentsPage.selectThemeFirstOption.getText();
        await createAllContentsPage.selectThemeFirstOption.click();
    })
    expect(firstThemeText, "No Themes available to select under Go-Do").to.not.equal("");

    let actualInstructionsContentObjOptions: string[] = [];
    await createAllContentsPage.instructionsContentObjOptions.each(async function (option) {
        let optionText = await option.getText();
        actualInstructionsContentObjOptions.push(optionText);
    })
    expect(actualInstructionsContentObjOptions).to.include.members(instructionsContentObjOptions);

    await createAllContentsPage.rdoSelectContentObject.click().then(async function () {
        let isSelectContentObjClicked: boolean = await createAllContentsPage.btnSelectContentObj.isPresent();
        if (!isSelectContentObjClicked) {
            await createAllContentsPage.rdoSelectContentObject.click();
        }
        await createAllContentsPage.btnSelectContentObj.click();
        await browser.sleep(2000);
        await createAllContentsPage.linkActivityPetronasTab.click();
        await browser.sleep(2000);
        await commonObjects.searchActivityToBeLinkedInput.click()
        await commonObjects.searchActivityToBeLinkedInput.clear();
        await commonObjects.searchActivityToBeLinkedInput.sendKeys(instructionsContentObject);

        await commonObjects.searchIcon.click();
        await element(By.xpath(`//span[contains(text(),'${instructionsContentObject}')]/ancestor::div[contains(@class,'journey-list')]//button[contains(@name,'select')]`)).click();

    })
    await createAllContentsPage.resultsContentObj.click().then(async function () {
        await browser.sleep(2000);
        await createAllContentsPage.linkActivityPetronasTab.click();
        await browser.sleep(2000);
        await commonObjects.searchActivityToBeLinkedInput.click()
        await commonObjects.searchActivityToBeLinkedInput.clear();
        await commonObjects.searchActivityToBeLinkedInput.sendKeys(resultsContentObject);

        await commonObjects.searchIcon.click();
        await element(By.xpath(`//span[contains(text(),'${resultsContentObject}')]/ancestor::div[contains(@class,'journey-list')]//button[contains(@name,'select')]`)).click();
    })
})
export class GoDoContentDetails {
    public static title: string = "";
    public static description: string = "";
    public static commitmentInstructions: string = "";
    public static commitmentMessage: string = "";
    public static dueDate: string = "";

}
Then("the activity with Go-Do should get created", async function () {
    //newGoDoActivityName;
    await element(By.xpath(`//p[contains(text(),'${newGoDoActivityName}')]/../../..`)).click();
    CreatedContents.goDoActivityName = newGoDoActivityName;

    GoDoContentDetails.title = goDoTitle;
    GoDoContentDetails.description = goDoDescription;
    GoDoContentDetails.commitmentInstructions = goDoCommitmentInstructions;
    GoDoContentDetails.commitmentMessage = goDoCommitmentMessage;
    GoDoContentDetails.dueDate = targetDate.substring(0, 15);
    await element(By.xpath(`//button[contains(text(),'Edit Go-Do')]`)).click();

    await createAllContentsPage.goDoJSId.getAttribute("ng-reflect-model").then(async function (jsId) {
        expect(jsId.trim(), "Go-Do JS Id has not been stored correctly").to.equal(goDoJSId);
    })
    await createAllContentsPage.goDoTitle.getAttribute("ng-reflect-model").then(async function (title) {
        expect(title.trim(), "Go-do Title has not been stored correctly").to.equal(goDoTitle);
    })
    await createAllContentsPage.goDoDescription.getAttribute("ng-reflect-model").then(async function (desc) {
        expect(desc.trim(), "Go-do Description has not been stored correctly").to.equal(goDoDescription);
    })
    // await createAllContentsPage.goDoCompletionMessageText.getText().then(async function(message){        
    //     expect(message.trim(),"Go-do Completion Message has not been stored correctly").to.equal(goDoCompletionMessage);
    // })
    await createAllContentsPage.goDoCommitmentInstructionsText.getText().then(async function (text) {
        expect(text.trim(), "Go-do Commitment instructions have not been stored correctly").to.equal(goDoCommitmentInstructions);
    })
    await createAllContentsPage.goDoCommitmentMessage.getText().then(async function (text) {
        expect(text.trim(), "Go-do Commitment Message has not been stored correctly").to.equal(goDoCommitmentMessage);
    })
    await createAllContentsPage.dateOffSetNumberOfDays.getAttribute("ng-reflect-model").then(async function (days) {
        expect(days.trim(), "Due-Date number of days has not been stored correctly").to.equal(numberOfDaysOffset);
    })
    await createAllContentsPage.ddSelectDuration.getAttribute("ng-reflect-model").then(async function (currentOption) {
        expect(currentOption.trim(), "Due-Date duration dropdown option has not been updated correctly").to.be.oneOf(["days", "Days"]);
    })
    await createAllContentsPage.ddSelectPriorTo.getAttribute("ng-reflect-model").then(async function (currentOption) {
        expect(currentOption.trim(), "Due-Date Prior-To dropdown option has not been updated correctly").to.be.oneOf(["after", "After"]);
    })
    await createAllContentsPage.ddSelectCondition.getAttribute("ng-reflect-model").then(async function (currentOption) {
        expect(currentOption.trim(), "Due-Date Condition dropdown option has not been updated correctly").to.be.oneOf(["modulestart", "ModuleStart", "moduleStart"]);
    })
    await createAllContentsPage.tglRemindersStatus.getText().then(async function (status) {
        expect(status.trim(), "Go-Do Required toggle not updated correctly").to.equal("Yes");
    })
    await createAllContentsPage.tglRemindersStatus.getText().then(async function (status) {
        expect(status.trim(), "Go-Do Enable Reminders toggle not updated correctly").to.equal("Yes");
    })
    await createAllContentsPage.instructionsContentObj.getText().then(async function (contentName) {
        expect(contentName.trim(), "Go-Do results object not added correctly").to.equal(instructionsContentObject);
    })
    await createAllContentsPage.resultsContentObjName.getText().then(async function (contentName) {
        expect(contentName.trim(), "Go-Do results object not added correctly").to.equal(resultsContentObject);
    })
    CreatedContents.sanityContents.push(newGoDoActivityName);
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//--------------------------------------------------------PARTICIPANT SANITY-----------------------------------------------
let participantHelper = new participantHelperFunctions();
import { emailNewSanityUserOne } from "./JourneySanity";
import { emailNewSanityUserTwo } from "./JourneySanity";
import { passwordNewUser } from "./JourneySanity";
import { FileManager } from "../FileManagementHelper";
import { apiHelperFunctions } from "../apiHelperClass";
import { cmsHelperFunctions } from "../cmsHelperClass";
import { ISize } from "selenium-webdriver";

Given("Participant should login in with a user of newly created journey", async function () {
    await participantHelper.login(emailNewSanityUserOne, passwordNewUser);
})

Given("Participant should login in with another user of newly created journey", async function () {
    await participantHelper.login(emailNewSanityUserTwo, passwordNewUser);
})

When("user navigates to the {string} activity in the newly created journey", async function (contentName) {

    //let activityXpath: string = `//*[contains(text(),'${activityName}')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'start') or contains(@name,'resume') or contains(@name,'revisit')]`;
    browser.waitForAngularEnabled(false);
    let activityXpath: string = `//*[contains(text(),'${contentName}')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'start')]`;
    
    await element(By.xpath(activityXpath)).click().then(async function () {
        await browser.sleep(5000);
        // await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 5000).then(async function () {
        //     //await browser.wait(EC.elementToBeClickable(newLeaderboardPage.participantNaviationMenu), 5000);
        // });
    })
    browser.waitForAngularEnabled(true);
});

//-------------------------------------------------------------PARTICIPANT DISCUSSION THREAD--------------------------------------------

Then("Discussion Thread Fields should be displayed correctly on the Participant UI", async function () {
    browser.waitForAngularEnabled(false);
    await discussionThreadPage.txtEnterCommentsTopLevel.getAttribute("placeholder").then(function (participantCommentFieldLabel) {
        expect(participantCommentFieldLabel.trim()).to.contain(commentFieldLabel);
        //console.log(participantCommentFieldLabel);
    });

    // await discussionThreadPage.commentBtnNameContainer.getText().then(function(commentButtonName){
    //     expect(commentButtonName).to.equal(latestCommentBtnName);
    // });

    await discussionThreadPage.replyBtnLabelContainer.getText().then(function (replyButtonName) {
        expect(replyButtonName.trim()).to.equal(replyBtnLabel);
    });
    await discussionThreadPage.commentsLabelContainer.getText().then(function (commentsLabelText) {
        expect(commentsLabelText.trim()).to.equal(commentsLabel)
        //console.log(commentsLabelText);
    });

    await discussionThreadPage.btnContinueToNextActivity.click().then(async function () {
        await browser.sleep(5000);
    })
    browser.waitForAngularEnabled(true);

})

//----------------------------------------------PARTICIPANT GENERATE DOCUMENT-------------------------------------------------

When("user creates a new Generate Document activity under {string} module of the Journey", async function (moduleName) {
    await helper.addActivityToModule(moduleName, `GenerateDoc Activity`, genDocumentActivityName);
    await helper.saveAndPublishAndExitOnJourneyFlow();
})

let apiHelper = new apiHelperFunctions();
Before({ tags: "@ParticipantGenerateDoc01" }, async function () {
    await apiHelper.resetAllJourneys(TestData.AdminLogin.Username, TestData.AdminLogin.Password, "bts", TestData.apiBuildVersion,
        "5d82323fd9b8ca499403e5bd", "gendoc1@petronas.com");

})

Before({ tags: "@GenerateDocument03" }, async function () {
    await apiHelper.resetAllJourneys(TestData.AdminLogin.Username, TestData.AdminLogin.Password, "bts", TestData.apiBuildVersion,
        "5d82323fd9b8ca499403e5bd", "GenerateDocAutomation1@petronas.com");

})

let p_ssOptionSelectedForGenDoc: string = '';
let p_ssTitleForGenDoc: string = '';

export class ParticipantResponses {
    public static p_cohortResponses: string[] = []
}

let p_responseGraphVoteDetails : Map<string, number> = new Map<string, number>();
let p_currentUserSelection:string = "";

When("participant user selects an option for Single Select of {string} content", async function (contentType) {
    await browser.waitForAngularEnabled(false);
    //ssGenDocOptions = ["Indi", "New Zealand", "Spain"];
    let p_countOfSSOptions: number = await createAllContentsPage.p_radioOptionsSingleSelect.count();
    let optionSelected = Math.floor(Math.random() * p_countOfSSOptions);
    await createAllContentsPage.p_radioOptionsSingleSelect.get(optionSelected).click();
    await browser.sleep(1500);
    switch (contentType) {
        case "Generate Document": {
            p_ssOptionSelectedForGenDoc = ssGenDocOptions[optionSelected];
            p_ssTitleForGenDoc = await createAllContentsPage.p_titleSingleSelect.getText();
            expect(p_ssTitleForGenDoc).to.equal(singleSelectContentTitle);
            break;
        }
        case "Cohort Response": {
            let p_ssOptionSelectedForCohortRes: string = await createAllContentsPage.p_radioOptionsSingleSelect.get(optionSelected).getText();
            ParticipantResponses.p_cohortResponses.push(p_ssOptionSelectedForCohortRes)
            break;
        }
        case "Response Graph" : {
            p_currentUserSelection= await (await createAllContentsPage.p_radioOptionsSingleSelect.get(optionSelected).getText()).trim();
            if(p_responseGraphVoteDetails.has(p_currentUserSelection)){
                let voteCount: number = p_responseGraphVoteDetails.get(p_currentUserSelection) + 1;
                p_responseGraphVoteDetails.set(p_currentUserSelection,voteCount);
            }
            else{
                p_responseGraphVoteDetails.set(p_currentUserSelection,1);
            }
            break;
        }
    }

    await browser.waitForAngularEnabled(true);

})

let manager = new FileManager();
Then("the document should get downloaded and the contents of the downloaded file should be correct", async function () {
    // let downloadDir: string = join(process.cwd(), 'DownloadFolder');
    // manager.removeAllFiles(downloadDir);
    await browser.waitForAngularEnabled(false);
    let genDocFilePath = join(process.cwd(), 'DownloadFolder', 'GenerateDoc.docx');

    let fileDownload: boolean = fs.existsSync(genDocFilePath);
    expect(fileDownload, "Generated document not getting downloaded").to.be.true;

    let xmlContent: string = await manager.readDocFile(genDocFilePath);
    let content: string = manager.extractDataFromDocFile(xmlContent);
    console.log(content)
    //await browser.sleep(5000);
    expect(content.toString(), "Generated document does not contain the title of associated Content").to.contain(`Question Title :  ${p_ssTitleForGenDoc}`);
    expect(content.toString(), "Generated document does not contain option selected by Participant").to.contain(`Input  ${p_ssOptionSelectedForGenDoc}`);
    await browser.waitForAngularEnabled(true);
})

let cmsHelper = new cmsHelperFunctions();
Then("user should be able to delete the Generate Document content", async function () {
    if (genDocumentActivityName != "") {
        await cmsHelper.deleteContent(genDocumentActivityName);
    }
})

//-----------------------------------------------------PARTICIPANT SINGLE SELECT RADIO-----------------------------------------------



Then("the title and options displayed for Single Select radio should be correct", async function () {
    let p_ssRadioOptions: string[] = [];
    let p_ssRadioTitle: string = '';
    await browser.waitForAngularEnabled(false);
    //ssGenDocOptions = ["Indi", "New Zealand", "Spain"];
    await createAllContentsPage.p_radioOptionsSingleSelect.each(async function (ssRadioOption) {
        let currentRadioOption: string = await ssRadioOption.getText();
        p_ssRadioOptions.push(currentRadioOption);
    });
    expect(p_ssRadioOptions, "Single Select radio options are not correct").to.include.members(ssTypeRadioOptions);
    p_ssRadioTitle = await createAllContentsPage.p_titleSingleSelect.getText();
    expect(p_ssRadioTitle, "Single Select Dropdown title is not correct").to.equal(singleSelectRadioTitle);
    await browser.waitForAngularEnabled(true);

})

Then("participant user should be able to make a selection for single select radio", async function () {

    await browser.waitForAngularEnabled(false);
    //ssGenDocOptions = ["Indi", "New Zealand", "Spain"];
    let p_countOfSSOptions: number = await createAllContentsPage.p_radioOptionsSingleSelect.count();
    let optionSelected = Math.floor(Math.random() * p_countOfSSOptions);
    await createAllContentsPage.p_radioOptionsSingleSelect.get(optionSelected).click();
    await browser.sleep(1500);
    await browser.waitForAngularEnabled(true);
})


//-----------------------------------------------------PARTICIPANT SINGLE SELECT DROPDOWN-----------------------------------------------




Then("the title and options displayed for Single Select dropdown should be correct", async function () {
    let p_ssDropdownOptions: string[] = [];
    let p_ssDropdownTitle: string = '';
    await browser.waitForAngularEnabled(false);
    //ssGenDocOptions = ["Indi", "New Zealand", "Spain"];
    await createAllContentsPage.p_singleSelectDD.click();
    await browser.sleep(1000);
    await createAllContentsPage.p_singleSelectDDoptions.each(async function (ssRadioOption) {
        let currentRadioOption: string = await ssRadioOption.getText();
        p_ssDropdownOptions.push(currentRadioOption);
    });
    expect(p_ssDropdownOptions, "Single Select dropdown options are not correct").to.include.members(ssTypeDropdownOptions);
    p_ssDropdownTitle = await createAllContentsPage.p_titleSingleSelect.getText();
    expect(p_ssDropdownTitle, "Single Select Dropdown title is not correct").to.equal(singleSelectDropdownTitle);
    await browser.waitForAngularEnabled(true);

})

Then("participant user should be able to make a selection for single select dropdown", async function () {

    await browser.waitForAngularEnabled(false);
    //ssGenDocOptions = ["Indi", "New Zealand", "Spain"];
    let p_countOfSSOptions: number = await createAllContentsPage.p_singleSelectDDoptions.count();
    let optionSelected = Math.floor(Math.random() * p_countOfSSOptions);
    await createAllContentsPage.p_singleSelectDDoptions.get(optionSelected).click();
    await browser.sleep(1000);
    await browser.waitForAngularEnabled(true);
})

//-----------------------------------------------------PARTICIPANT SINGLE SELECT LONG-----------------------------------------------




Then("the title and options displayed for Single Select Long should be correct", async function () {

    let p_ssLongTitle: string = '';
    let p_ssLongOptions: string[] = [];
    let p_ssLongOptionDescriptions: string[] = [];

    await browser.waitForAngularEnabled(false);
    p_ssLongTitle = await createAllContentsPage.p_titleSingleSelect.getText();
    expect(p_ssLongTitle, "Single Select Long Title is not correct").to.equal(singleSelectRadioTitle);

    await createAllContentsPage.p_radioOptionsSingleSelect.each(async function (ssRadioOption) {
        let currentRadioOption: string = await ssRadioOption.getText();
        p_ssLongOptions.push(currentRadioOption);
    });
    expect(p_ssLongOptions, "Single Select Long options are not correct").to.include.members(ssTypeRadioOptions);

    await createAllContentsPage.p_singleSelectLongDescriptions.each(async function (ssLongDescription) {
        let currentLongDescripton: string = await ssLongDescription.getText();
        p_ssLongOptionDescriptions.push(currentLongDescripton);
    });
    expect(p_ssLongOptionDescriptions, "Single Select Long Descriptions are not correct").to.include.members(ssLongDescriptions);

    await browser.waitForAngularEnabled(true);

})

Then("participant user should be able to make a selection for single select Long", async function () {

    await browser.waitForAngularEnabled(false);
    //ssGenDocOptions = ["Indi", "New Zealand", "Spain"];
    let p_countOfSSOptions: number = await createAllContentsPage.p_radioOptionsSingleSelect.count();
    let optionSelected = Math.floor(Math.random() * p_countOfSSOptions);
    await createAllContentsPage.p_radioOptionsSingleSelect.get(optionSelected).click();
    await browser.sleep(1500);
    await browser.waitForAngularEnabled(true);
})

//-------------------------------------------------------PARTICIPANT VIDEO-----------------------------------------------------


Then("the video settings and source should be correct", async function () {
    await browser.waitForAngularEnabled(false);
    await createAllContentsPage.p_videoSource.getAttribute("src").then(async function (videoURL) {
        expect(videoURL, "video URL is not correct on participant app").to.contain(latestVideoURL);
    })
    await createAllContentsPage.p_video.getAttribute("class").then(async function (alignment_size) {
        expect(alignment_size, "Size of video is not correct on participant app").to.contain("medium");
        expect(alignment_size, "alignment of video is not correct on participant app").to.contain("left");
    })

    if (currentAutoplaySetting == "false") {
        await createAllContentsPage.p_video.getAttribute("autoplay").then(async function (autoplaySetting) {
            expect(autoplaySetting, "Autoplay setting not working on participant app").to.be.not.null;
        })
    }

    if (currentAutoNavigateSetting == "false") {
        await browser.sleep(15 * 1000);
        let isVideoPresent: boolean = await createAllContentsPage.p_videoSource.isPresent();
        expect(isVideoPresent, "Participant User not autonavigated to next activity").to.be.false;
    }
    else {
        await commonObjects.btnContinue.click().then(async function () {
            await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 5000).then(async function () {
                await browser.sleep(4000);
            })
        });
    }
    await browser.waitForAngularEnabled(true);
})

//-----------------------------------------------PARTICIPANT RADIO BUTTON MATRIX----------------------------------------------------
let p_radioMatrixOptions: string[] = [];
let p_radioMatrixQuestionTitles: string[] = [];
Then("the Radio Button Matrix title, description, question titles, and options should be correct", async function () {
    await browser.waitForAngularEnabled(false);

    let p_radioMatrixTitle: string = await (await createAllContentsPage.p_radioMatrixTitle.getText()).trim();
    expect(p_radioMatrixTitle, "Radio Button Matrix title is not correct").to.equal(varGridTitle);

    let p_radioMatrixQuesTitle: string = await (await createAllContentsPage.p_radioMatrixQuesTitle.getText()).trim();;
    expect(p_radioMatrixQuesTitle, "Radio Button Matrix Question Title is not correct").to.equal(varGridQuestionTitle);

    let p_radioMatrixDescription: string = await (await createAllContentsPage.p_radioMatrixDescription.getText()).trim();
    expect(p_radioMatrixDescription, "Radio Button Matrix Description is not correct").to.equal(varGridDescription);


    await createAllContentsPage.p_radioMatrxOptions.each(async function (radioMatrixOption) {
        let currentOption: string = await (await radioMatrixOption.getText()).trim();
        p_radioMatrixOptions.push(currentOption);
    });
    expect(p_radioMatrixOptions, "All Radio Button matrix options not displayed").to.include.members(vgOptions);


    await createAllContentsPage.p_radioMatrixQuesTitles.each(async function (radioMatrixQuesTitle) {
        let currentQuesTitle: string = await (await radioMatrixQuesTitle.getText()).trim();
        p_radioMatrixQuestionTitles.push(currentQuesTitle);
    });
    expect(p_radioMatrixQuestionTitles, "All Radio Button Question Titles not displayed").to.include.members(vgQuestions);
    await browser.waitForAngularEnabled(true);
})


Then("participant user should be able to select options for Radio Button Matrix", async function () {
    await browser.waitForAngularEnabled(false);
    p_radioMatrixQuestionTitles.forEach(async function (quesTitle) {
        let radioOptionSelected = Math.ceil(Math.random() * p_radioMatrixOptions.length) + 1;
        let radioButtonXpath: string = `//mat-radio-group[contains(@aria-label,'${quesTitle}')]//div[${radioOptionSelected}]//label`;
        await element(By.xpath(radioButtonXpath)).click();
        await browser.sleep(1000);
    })
    await browser.waitForAngularEnabled(true);
})

//------------------------------------------------------MULTI SELECTS------------------------------------------------------------

Then("the {string} title and options should be correct", async function (multiSelectType) {
    await browser.waitForAngularEnabled(false);
    let p_multiSelectTitle: string = "";
    let p_multiSelectOptionTitles: string[] = [];

    switch (multiSelectType) {
        case "Multi Select CB": {
            p_multiSelectTitle = (await createAllContentsPage.p_titleMultiSelect.getText()).trim();
            await createAllContentsPage.p_multiSelectCBOptionTitles.each(async function (multiSelectOption) {
                let currentOptionTitle = (await multiSelectOption.getText()).trim();
                p_multiSelectOptionTitles.push(currentOptionTitle);
            })
            expect(p_multiSelectTitle, `${multiSelectType} title is not correct`).to.equal(multiSelectCBTitle);
            expect(p_multiSelectOptionTitles, `${multiSelectType} option titles are not correct`).to.include.members(multiSelectCBOptions);
            break;
        }
        case "Multi Select Long": {
            let p_multiSelectOptionDesc: string[] = [];
            p_multiSelectTitle = (await createAllContentsPage.p_titleMultiSelect.getText()).trim();
            await createAllContentsPage.p_multiSelectCBOptionTitles.each(async function (multiSelectOption) {
                let currentOptionTitle = (await multiSelectOption.getText()).trim();
                p_multiSelectOptionTitles.push(currentOptionTitle);
            })
            await createAllContentsPage.p_multiSelectLongDescriptions.each(async function (multiSelOptionDesc) {
                let currentOptionDesc = (await multiSelOptionDesc.getText()).trim();
                p_multiSelectOptionDesc.push(currentOptionDesc);
            })
            expect(p_multiSelectTitle, `${multiSelectType} title is not correct`).to.equal(multiSelectLongTitle);
            expect(p_multiSelectOptionTitles, `${multiSelectType} option titles are not correct`).to.include.members(multiSelectLongOptions);
            break;
        }
        case "Multi Select DD": {
            await createAllContentsPage.p_multiSelectDDShowOptions.click();
            p_multiSelectTitle = (await createAllContentsPage.p_titleMultiSelect.getText()).trim();
            await createAllContentsPage.p_multiSelectDDOptionTitles.each(async function (multiSelectOption) {
                let currentOptionTitle = (await multiSelectOption.getText()).trim();
                p_multiSelectOptionTitles.push(currentOptionTitle);
            })
            expect(p_multiSelectTitle, `${multiSelectType} title is not correct`).to.equal(multiSelectDDTitle);
            expect(p_multiSelectOptionTitles, `${multiSelectType} option titles are not correct`).to.include.members(multiSelectDDOptions);
            break;
        }

    }
    //expect(p_multiSelectTitle).to.equal()
    await browser.waitForAngularEnabled(true);

})

Then("participant user should be able to select options for {string}", async function (multiSelectType) {
    await browser.waitForAngularEnabled(false);
    let numberOfOptionsSelected: number = 0;
    switch (multiSelectType) {
        case "Multi Select CB": {
            let optionsSelected: number[] = [];
            while (optionsSelected.length < 2) {
                let countOfMSOptions: number = await createAllContentsPage.p_multiSelectCBOptionTitles.count();
                let currentMSOption: number = Math.floor(Math.random() * countOfMSOptions);
                while (optionsSelected.indexOf(currentMSOption) >= 0) {
                    currentMSOption = Math.floor(Math.random() * countOfMSOptions);
                }
                optionsSelected.push(currentMSOption);
                await createAllContentsPage.p_multiSelectCheckBoxes.get(currentMSOption).click();
            }
            numberOfOptionsSelected = await createAllContentsPage.p_multiSelectOptionsChecked.count();
            break;
        }
        case "Multi Select Long": {
            let optionsSelected: number[] = [];
            while (optionsSelected.length < 2) {
                let countOfMSOptions: number = await createAllContentsPage.p_multiSelectCBOptionTitles.count();
                let currentMSOption: number = Math.floor(Math.random() * countOfMSOptions);
                while (optionsSelected.indexOf(currentMSOption) >= 0) {
                    currentMSOption = Math.floor(Math.random() * countOfMSOptions);
                }
                optionsSelected.push(currentMSOption);
                await createAllContentsPage.p_multiSelectCheckBoxes.get(currentMSOption).click();
            }
            numberOfOptionsSelected = await createAllContentsPage.p_multiSelectOptionsChecked.count();
            break;
        }
        case "Multi Select DD": {
            let optionsSelected: number[] = [];
            while (optionsSelected.length < 2) {
                let countOfMSOptions: number = await createAllContentsPage.p_multiSelectDDCheckBoxes.count();
                let currentMSOption: number = Math.floor(Math.random() * countOfMSOptions);
                while (optionsSelected.indexOf(currentMSOption) >= 0) {
                    currentMSOption = Math.floor(Math.random() * countOfMSOptions);
                }
                optionsSelected.push(currentMSOption);
                await createAllContentsPage.p_multiSelectDDCheckBoxes.get(currentMSOption).click();
            }
            numberOfOptionsSelected = await createAllContentsPage.p_multiSelectOptionsChecked.count();
            break;
        }

    }
    expect(numberOfOptionsSelected, "User is able to select more options than allowed to select").to.equal(1);
    await browser.executeScript("arguments[0].click()", commonObjects.btnContinue);
    await browser.sleep(5000);
    await browser.waitForAngularEnabled(true);
})

//---------------------------------------------------------RESPONSE GRAPH--------------------------------------------------------


Then("the Response Graph details displayed to the participant should be correct", async function () {
    await browser.waitForAngularEnabled(false);
    let p_responseGraphSelectionOptions: string[] = [];
    await createAllContentsPage.p_resgraphSelectionOptions.each(async function (resGraphOption) {
        let currentResGraphOption: string = (await resGraphOption.getText()).trim();
        p_responseGraphSelectionOptions.push(currentResGraphOption);
    })
    expect(p_responseGraphSelectionOptions).to.include.members(ssResGraphOptions);
    let p_resGraphInterval: number = Number.parseInt(await (await createAllContentsPage.p_resgraphIntervals.get(1).getText()).trim()) -
        Number.parseInt(await (await createAllContentsPage.p_resgraphIntervals.get(0).getText()).trim());

    let xAxisTitle:string = await createAllContentsPage.p_xAxisTitle.getText();
    let yAxisTitle:string = await createAllContentsPage.p_yAxisTitle.getText();

    expect(xAxisTitle).to.equal(rgLabelX_axis);
    expect(yAxisTitle).to.equal(rgLabelY_axis);
    expect(p_resGraphInterval).to.equal(rgInterval);

    //console.log(xAxisTitle,'|',yAxisTitle,'|',p_resGraphInterval);

    let p_resGraphLegends:string[] = [];
    await createAllContentsPage.p_responseGraphLegends.each(async function (resGraphLegend) {
        let currentLegend : string = (await resGraphLegend.getText()).trim();
        p_resGraphLegends.push(currentLegend);
    })
    expect(p_resGraphLegends).to.include.members([ 'MyVote', 'OthersVote' ]);
    await browser.waitForAngularEnabled(true);

})

Then("the response graph should be correctly generated on the basis of user selections", async function(){
    await browser.waitForAngularEnabled(false);
    await browser.actions().mouseMove(createAllContentsPage.p_currentUserVoteBar).perform();
    await browser.sleep(500);

    // let currentUserVoteDetails:string[] = [];
    // await createAllContentsPage.p_myVoteDetails.each(async function (voteDetail) {
    //     let currentDetail : string = (await voteDetail.getText()).trim();
    //     currentUserVoteDetails.push(currentDetail);
    // })
    let currentUserVoteDetail:string = await (await createAllContentsPage.p_myVoteDetails.get(0).getText()).trim();
    let currentUserVoteCount:number = Number.parseInt(await (await createAllContentsPage.p_myVoteDetails.get(2).getText()).trim());
    expect(p_currentUserSelection).to.equal(currentUserVoteDetail);
    expect(currentUserVoteCount).to.equal(p_responseGraphVoteDetails.get(currentUserVoteDetail));
    //console.log(currentUserVoteDetail, currentUserVoteCount);    

    let countOfOptionsWithNoResponse:number = await createAllContentsPage.p_noResponseBars.count();
    //console.log(countOfOptionsWithNoResponse);
    if(p_responseGraphVoteDetails.size > 1){
       expect(countOfOptionsWithNoResponse,"Graph bars for options selected not generated properly. ").to.be.gte(2);       

    }
    else{
        expect(countOfOptionsWithNoResponse,"Graph bars for options selected not generated properly.").to.be.gte(3);
    }

    await browser.waitForAngularEnabled(true);
})

//-------------------------------------------------IMAGE-----------------------------------------------------------------------

Then("the image content should be displayed properly to the participant", async function(){

    await browser.waitForAngularEnabled(false);
    let p_imgSrc:string = await createAllContentsPage.p_imageForImageContent.getAttribute("src");
    expect(p_imgSrc,"Image source is not correct").to.contain(uploadedImageS3Path);
    //console.log(p_imgSrc);
    let p_imgSize:ISize = await createAllContentsPage.p_imageForImageContent.getSize();

    expect(p_imgSize.height,"Image height is 0").to.be.greaterThan(0);
    expect(p_imgSize.width,"Image width is 0").to.be.greaterThan(0);

    await browser.waitForAngularEnabled(true);
})

//--------------------------------------------------STORYLINE---------------------------------------------------------------------

Then("the Storyline Quiz should be displayed properly to the participant", async function(){
    

})