import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../StepDefinitions/config.json";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../PageObjects/Sprint 3/CMSAuthoringPage";
import { MastheadPage } from "../../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import { AuthorSanityPage } from "../../PageObjects/SanityProjectPages/AuthorSanityPage";
import { CreateAllContentsLocate } from "../../PageObjects/SanityProjectPages/CreateAllContentPage";

var support = require("protractor-firefox-support");

import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';
import { DriverProvider } from "protractor/built/driverProviders";
import { DiscussionThreadPage } from "../../PageObjects/Sprint 7/DiscussionThreadPage";

let activityAuthorPage = new ActivityAuthoringPageLocate();
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let mastheadPage = new MastheadPage();
let authorSanityPage = new AuthorSanityPage();
let discussionThreadPage = new DiscussionThreadPage();
let createAllContentsPage = new CreateAllContentsLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + '-' + minutes;

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
let newVGActivityName: string = "";
let newDiscusActivityName: string = "";
let newContentActivityName: string = "";
let newResponseGraphActivityName: string = "";
let newDownloadActivityName: string = "";
let newTextImageActivityName: string = "";

When("user creates a new Activity for {string} Content and navigates into the same", async function (contentTypeName) {
    let newActivityTitle: string = `${contentTypeName} Activity ${currentDateTime}`;
    let newActivityDescription: string = `${contentTypeName} Description ${currentDateTime}`;

    await createAllContentsPage.btnCreateContent.click().then(async function () {
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
        })
    })
    await element(By.xpath(`//p[contains(text(),'${newActivityTitle}')]/../../..`)).isDisplayed().then(async function (activityVisible) {
        expect(activityVisible).to.be.true;
    })
    await element(By.xpath(`//p[contains(text(),'${newActivityTitle}')]/../../..`)).click();

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
        case "Variable Grid": {
            newVGActivityName = newActivityTitle;
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
    await browser.executeScript("arguments[0].scrollIntoView(false)", element(By.xpath("(//div[contains(@class,'edit-area')]//*)[last()]")));
    var fromEle = await element(By.xpath(`//div[contains(text(),'${contentTypeName}')]//div[@class='mat-list-item-ripple mat-ripple']`));
    var toEle = await element(By.css('div[id*=cdk-drop-list].blocks-container.edit-area.cdk-drop-list'));
    //var toEle = await element(By.xpath("(//div[contains(@class,'edit-area')]//div[contains(@class,'subscript-wrapper')])[last()]"));
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
        await activityAuthorPage.directVideoURL.sendKeys(latestVideoURL).then(function () {
            browser.sleep(3 * 1000);
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

Then("the activity with {string} content should get created", async function (contentTypeName) {
    await element(By.xpath(`//p[contains(text(),'${newVideoActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Video')]`)).isDisplayed().then(async function (blockVisible) {
        expect(blockVisible).to.be.true;
        await element(By.xpath("//button[contains(text(),'Edit Video')]")).click();
    });
    await activityAuthorPage.showFullScreenCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
        if (currentFullScreenSetting == "true") {
            expect(latestSetting).to.equal("false");
        }
        else if (currentFullScreenSetting == "false") {
            expect(latestSetting).to.equal("true");
        }
        else {
            expect(true).to.be.false;
        }
    })

    await activityAuthorPage.autoplayCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
        if (currentAutoplaySetting == "true") {
            expect(latestSetting).to.equal("false");
        }
        else if (currentAutoplaySetting == "false") {
            expect(latestSetting).to.equal("true");
        }
        else {
            expect(true).to.be.false;
        }
    })

    await activityAuthorPage.autonavigateCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
        if (currentAutoNavigateSetting == "true") {
            expect(latestSetting).to.equal("false");
        }
        else if (currentAutoNavigateSetting == "false") {
            expect(latestSetting).to.equal("true");
        }
        else {
            expect(true).to.be.false;
        }
    })
    let videoURL: string = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    expect(latestVideoURL).to.equal(videoURL);

    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
})

//------------------------------------------------------------SINGLE SELECT------------------------------------

let singleSelectJSID: string = "";
let singleSelectOptionDesc: string = "";
let singleSelectOptionTitle: string = "";
let currentSingleSelectType: string = "";
When("user selects the Single Select Type as {string}", async function (singleSelectType) {
    currentSingleSelectType = singleSelectType;
    await element(By.xpath(`//mat-radio-button[contains(@value,'${singleSelectType}')]//label`)).click();
    if (singleSelectType == "long") {
        singleSelectJSID = `SS_Long ${currentDateTime}`;
        singleSelectOptionDesc = `SS_Long_Description ${currentDateTime}`;
        singleSelectOptionTitle = `SS_Long_Title ${currentDateTime}`;
    }
})

When("user selects the Single Select Sub-Type as {string}", async function (shortType) {
    await element(By.xpath(`//span[contains(text(),'${shortType}')]/ancestor::mat-radio-button//label`)).click();
    if (shortType == "Radio") {
        singleSelectJSID = `SS_Radio ${currentDateTime}`;
        singleSelectOptionDesc = `SS_Radio_Description ${currentDateTime}`;
        singleSelectOptionTitle = `SS_Rdo_Title ${currentDateTime}`;
    };
    if (shortType == "Dropdown") {
        singleSelectJSID = `SS_DD ${currentDateTime}`;
        singleSelectOptionDesc = `SS_DD_Description ${currentDateTime}`;
        singleSelectOptionTitle = `SS_DD_Title ${currentDateTime}`;
    };
})


let numberOfSSoptions: number = 4;
let ssOptions: string[] = [];
let ssLongDescriptions: string[] = [];
let ssLongDescription: string = `SS_Long_Desc ${currentDateTime}`;

When("user enters data into the fields of Single Select block", async function () {

    await createAllContentsPage.singleSelectJS_Id.sendKeys(singleSelectJSID);
    await createAllContentsPage.singleSelectTitle.sendKeys(singleSelectOptionTitle);

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
    //console.log(ssOptions);
})

Then("the activity with Single Select content of the type {string} should get created", async function (singleSelectType) {
    let newSSActivityName: string = "";
    switch (singleSelectType) {
        case "Short-Radio": {
            newSSActivityName = newSS_ShortRadioActivityName;
            break;
        }
        case "Short-Dropdown": {
            newSSActivityName = newSS_ShortDDActivityName;
            break;
        }
        case "Long": {
            newSSActivityName = newSS_LongActivityName;
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
                    expect(title).to.equal(singleSelectOptionTitle);
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
                    expect(title).to.equal(singleSelectOptionTitle);
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
                    expect(title).to.equal(singleSelectOptionTitle);
                })
            })
            console.log("Inside Short Dropdown case");
            break;
        }
    }
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//---------------------------------------------------MULTI-SELECTS---------------------------------------------------
let mutliSelectJSID: string = "";
let mutliSelectOptionDesc: string = "";
let mutliSelectOptionTitle: string = "";
let currentMutliSelectType: string = "";

When("user selects the Multi Select Type as {string}", async function (multiSelectType) {
    currentMutliSelectType = multiSelectType;
    await element(By.xpath(`//mat-radio-button[contains(@value,'${multiSelectType}')]//label`)).click();
    if (multiSelectType == "long") {
        mutliSelectJSID = `MS_Long ${currentDateTime}`;
        mutliSelectOptionDesc = `MS_Long_Description ${currentDateTime}`;
        mutliSelectOptionTitle = `MS_Long_Title ${currentDateTime}`;
    }
})

When("user selects the Multi Select Sub-Type as {string}", async function (shortType) {
    await element(By.xpath(`//span[contains(text(),'${shortType}')]/ancestor::mat-radio-button//label`)).click();
    if (shortType == "Checkbox") {
        mutliSelectJSID = `MS_CB ${currentDateTime}`;
        mutliSelectOptionDesc = `MS_CB_Description ${currentDateTime}`;
        mutliSelectOptionTitle = `MS_CB_Title ${currentDateTime}`;
    };
    if (shortType == "Dropdown") {
        mutliSelectJSID = `MS_DD ${currentDateTime}`;
        mutliSelectOptionDesc = `MS_DD_Description ${currentDateTime}`;
        mutliSelectOptionTitle = `MS_DD_Title ${currentDateTime}`;
    };
})

let numberOfMSoptions: number = 4;
let MSoptions: string[] = [];
let MSlongDescriptions: string[] = [];
let MSlongDescription: string = `MS_Long_Desc ${currentDateTime}`;

When("user enters data into the fields of Multi Select block", async function () {

    await createAllContentsPage.multiSelJS_Id.sendKeys(mutliSelectJSID);
    await createAllContentsPage.multiSelectTitle.sendKeys(mutliSelectOptionTitle);
    await createAllContentsPage.btnIncreaseMaxSelections.click().then(async function () {
        await createAllContentsPage.btnIncreaseMaxSelections.click();
    })
    await createAllContentsPage.btnIncreaseMinSelections.click();
    MSoptions = [];
    for (let i: number = 1; i <= numberOfMSoptions; i++) {
        let currentOptionTitle: string = `${mutliSelectOptionDesc} Option${i}`;
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

Then("the activity with Multi Select content of the type {string} should get created", async function (multiSelectType) {
    let newMSActivityName: string = "";
    switch (multiSelectType) {
        case "Short-Checkbox": {
            newMSActivityName = newMS_ShortCBActivityName;
            break;
        }
        case "Short-Dropdown": {
            newMSActivityName = newMS_ShortDDActivityName;
            break;
        }
        case "Long": {
            newMSActivityName = newMS_LongActivityName;
            break;
        }
    }
    //console.log(newSSActivityName);
    await element(By.xpath(`//p[contains(text(),'${newMSActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`)).isDisplayed().then(async function (blockVisible) {
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
            await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`)).click().then(async function () {
                await createAllContentsPage.checkboxTypeSelected.isPresent().then(async function (isTypeShortSelected) {
                    expect(isTypeShortSelected).to.be.true;
                });
                await createAllContentsPage.multiSelJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(mutliSelectJSID);
                });
                await createAllContentsPage.multiSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(mutliSelectOptionTitle);
                })
            })
            break;
        }
        case "Short-Dropdown": {
            let multiShortDDoptions: string[] = []
            await authorSanityPage.multiLongPreviewDDArrow.click().then(async function () {
                await authorSanityPage.optionsInMultiDDPreview.each(async function (option) {
                    await option.getText().then(function (optionText) {
                        multiShortDDoptions.push(optionText.trim());
                    })
                })
            })
            expect(MSoptions).to.have.members(multiShortDDoptions);
            let editBtn: ElementFinder = await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`));

            await browser.executeScript("arguments[0].click()", editBtn).then(async function () {
                await createAllContentsPage.dropdownTypeSelected.isPresent().then(async function (isTypeShortSelected) {
                    expect(isTypeShortSelected).to.be.true;
                });
                await createAllContentsPage.multiSelJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(mutliSelectJSID);
                });
                await createAllContentsPage.multiSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(mutliSelectOptionTitle);
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

            await element(By.xpath(`//button[contains(text(),'Edit Single Select')]`)).click().then(async function () {

                await createAllContentsPage.multiSelJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
                    expect(JS_ID).to.equal(mutliSelectJSID);
                });
                await createAllContentsPage.multiSelectTitle.getAttribute("ng-reflect-model").then(async function (title) {
                    expect(title).to.equal(mutliSelectOptionTitle);
                })
            })
            //console.log("Inside Short Dropdown case");
            break;
        }
    }
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//--------------------------------------------------------VARIABLE GRID----------------------------------------------------
let varGridJSId: string = `varGridId_${currentDateTime}`;
let varGridDescription: string = `varGridDesc ${currentDateTime}`;
let varGridTitle: string = `varGridTitle ${currentDateTime}`;
let vgOptions: string[] = [];
let vgOptionDesc = `vgOption ${currentDateTime}`;
let vgQuestions: string[] = [];
let vgQuestionDesc = `vgQuesetion ${currentDateTime}`;

let numberOfVGOptions: number = 4;
let numberOfVGQuestions: number = 4;

When("user enters data into the fields of Variable Grid block", async function () {
    await createAllContentsPage.varGridJSId.sendKeys(varGridJSId);
    await createAllContentsPage.varGridDescription.sendKeys(varGridDescription);
    await createAllContentsPage.varGridTitle.sendKeys(varGridTitle);

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

Then("the activity with Variable Grid Content should get created", async function () {

    await element(By.xpath(`//p[contains(text(),'${newVGActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Variable Grid')]`)).isDisplayed().then(async function (blockVisible) {
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

    await element(By.xpath(`//button[contains(text(),'Edit Variable Grid')]`)).click().then(async function () {
        await createAllContentsPage.varGridJSId.getAttribute("ng-reflect-model").then(async function (vgJSId) {
            expect(vgJSId.trim()).to.contain(varGridJSId);
        })
        await createAllContentsPage.varGridDescription.getAttribute("ng-reflect-model").then(async function (vgDesc) {
            expect(vgDesc.trim()).to.contain(varGridDescription);
        })
        await createAllContentsPage.varGridTitle.getAttribute("ng-reflect-model").then(async function (vgTitle) {
            expect(vgTitle.trim()).to.contain(varGridTitle);
        })
    })

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
        await activityAuthorPage.exitEditor.click().then(function () {
            browser.sleep(2000);
        })
    })
})

//--------------------------------------------------------------RESPONSE GRPAH-----------------------------

let rgDescription: string = `RG Description ${currentDateTime}`;
let rgLabelX_axis: string = "X-Axis: " + currentDateTime;
let rgLabelY_axis: string = "Y-Axis: " + currentDateTime;
let rgInterval: string = (Math.floor(Math.random() * 10)).toString();
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
        await createAllContentsPage.graphInterval.sendKeys(rgInterval);
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
                expect(rgInterval).to.contain(interval.trim());
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
            if(currentMandatorySelection.trim()=="Yes"){
                expect(isMandatory.trim()).to.equal("No")
            }
            else{
                expect(isMandatory.trim()).to.equal("Yes")
            }
        }) 
    })
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})

//--------------------------------------------------------------------TEXT AND IMAGE--------------------------------------
let imageTitle:string = `Text_Image ${currentDateTime}`;
let altText:string = `Automation AltText`;
When('User attaches an image to Text and Image by using BROWSE button', async function () {
    // await activityAuthorPage.chooseImageBtn.sendKeys("C:\\Users\\Administrator\\Desktop\\landscape.jpg").then(function () {
    //     browser.sleep(3000);
    // });
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

Then("the activity with Text and Image Block should get created", async function(){
    await element(By.xpath(`//p[contains(text(),'${newTextImageActivityName}')]/../../..`)).click();
    await element(By.xpath(`//button[contains(text(),'Edit Text & Image')]`)).click().then(async function(){
        await authorSanityPage.currentImageFileName.getText().then(function (currentFileName) {
            expect(currentFileName).to.contain("Bonfire.jpg");
        })
        await activityAuthorPage.imageAltTextOnEditDialog.getAttribute("ng-reflect-value").then(async function(textOnEditPopUp){
            expect(altText).to.contain(textOnEditPopUp.trim());
        })
        await activityAuthorPage.imageAltTextOnEditDialog.getAttribute("src").then(async function(imgSrc){
            expect(imgSrc).to.be.not.null;
        })
    })
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})