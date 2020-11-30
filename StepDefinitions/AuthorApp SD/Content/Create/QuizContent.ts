import { After, Before, Given, Then, When } from "cucumber";
import { browser, By, element, ElementArrayFinder, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../../../StepDefinitions/config.json";
import { AdminLandingPageLocate } from "../../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { AuthorSanityPage } from "../../../../PageObjects/SanityProjectPages/AuthorSanityPage";
import { CreateAllContentsLocate } from "../../../../PageObjects/SanityProjectPages/CreateAllContentPage";
import Testdata from "../../../../testData.json";

import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';
import { DriverProvider } from "protractor/built/driverProviders";
import { HelperFunctions } from "../../../HelperClass";
import { QuizContentLocators } from "../../../../PageObjects/AuthorApp POM/Content/Create/QuizContentPage";
import { count } from "console";
import { ILocation } from "selenium-webdriver";
import { apiHelperFunctions } from "../../../apiHelperClass";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import { cmsHelperFunctions } from "../../../cmsHelperClass";

let helper = new HelperFunctions();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let authorSanityPage = new AuthorSanityPage();
let createAllContentsPage = new CreateAllContentsLocate();
let quizContentPage = new QuizContentLocators();


let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + '-' + minutes;

let quizContentTitle: string = `Quiz Content ${currentDateTime}`;
let questionCount: number = 0;

When("user creates a new Quiz Content and navigates into the same", async function () {

    //let quizContentTitle: string = `${contentTypeName} Activity ${currentDateTime} ${today.getMilliseconds()}`;
    //console.log(quizContentTitle);
    let isQuizContentCreated: boolean = await element(By.xpath(`//p[contains(text(),'${quizContentTitle}')]/../../..`)).isPresent();
    if (isQuizContentCreated) {
        await element(By.xpath(`//p[contains(text(),'${quizContentTitle}')]/../../..`)).click().then(async function () {
            if (browser.params.browserstackRun) {
                await browser.getCapabilities().then(async function (caps) {
                    if (caps.get('browserName') == 'safari' || caps.get('browserName') == 'Safari') {
                        browser.waitForAngularEnabled(false);
                        await browser.sleep(30 * 1000);
                        browser.waitForAngularEnabled(true);
                    }
                })
            }
        })
    }
    else {
        let newActivityDescription: string = `Quiz Description ${currentDateTime}`;

        await createAllContentsPage.btnCreateContent.click().then(async function () {
            await browser.sleep(1.5 * 1000);
            await quizContentPage.btnCreateQuiz.click().then(async function () {
                await createAllContentsPage.activityTitle.sendKeys(quizContentTitle).then(async function () {
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
        await element(By.xpath(`//p[contains(text(),'${quizContentTitle}')]/../../..`)).isDisplayed().then(async function (activityVisible) {
            expect(activityVisible).to.be.true;
        })
        await element(By.xpath(`//p[contains(text(),'${quizContentTitle}')]/../../..`)).click().then(async function () {
            if (browser.params.browserstackRun) {
                await browser.getCapabilities().then(async function (caps) {
                    if (caps.get('browserName') == 'safari' || caps.get('browserName') == 'Safari') {
                        browser.waitForAngularEnabled(false);
                        await browser.sleep(30 * 1000);
                        browser.waitForAngularEnabled(true);
                    }
                })
            }
        })
    }

});

// export class quizSingleSelectQuestion{
//     public static questionPrompt:string = "";
//     public static options:string[] = [];
// }
let quizSingleSelectJSID: string = `Quiz_SS_Id  ${currentDateTime}`;
let quizSingleSelectOptionTitle: string = `Quiz SS ${currentDateTime}`;
let quizSingleSelectPrompt: string = `Quiz_SS Title ${currentDateTime}`;
let quizSingleSelectExp: string = `Quiz_SS Explanation ${currentDateTime}`;
let quizSingleSelectHint: string = `Quiz_SS Hint ${currentDateTime}`;
let ssOptions: string[] = [];
let quizSSOptionDescriptions: string[] = [];
let quizOptionDescription: string = `Quiz_SS Desc ${currentDateTime}`;
let numberOfSSoptions: number = 5;
let correctOptionNumber: number = Math.ceil(Math.random() * numberOfSSoptions);
let quizSSCreateSuccess: boolean = false;

When("user creates a question of the type Single Select", async function () {
    await quizContentPage.addQuestion.click();
    await browser.sleep(2000);
    // await quizContentPage.editQuestion1.click();
    // await browser.sleep(1000);
    await createAllContentsPage.singleSelectJS_Id.sendKeys(quizSingleSelectJSID);
    await quizContentPage.questionPrompt.sendKeys(quizSingleSelectPrompt);
    await quizContentPage.questionExplanation.sendKeys(quizSingleSelectExp);
    await quizContentPage.questionHint.sendKeys(quizSingleSelectHint);

    ssOptions = [];
    for (let i: number = 1; i <= numberOfSSoptions; i++) {
        let currentOptionTitle: string = `${quizSingleSelectOptionTitle} Option${i}`;
        let currentOptionDesc: string = `${quizOptionDescription} Option${i}`;

        ssOptions.push(currentOptionTitle.trim());
        quizSSOptionDescriptions.push(currentOptionDesc.trim());
        if (i == 1) {
            await quizContentPage.newOptionTitle.click().then(async function () {
                await quizContentPage.newOptionTitle.sendKeys(currentOptionTitle);
            });
            await quizContentPage.newOptionDescription.click().then(async function () {
                await quizContentPage.newOptionDescription.sendKeys(currentOptionDesc);

            });
        }
        else {
            await browser.actions().mouseMove(authorSanityPage.btnAddNewOption).perform();
            await browser.sleep(1000);
            //await browser.executeScript("arguments[0].scrollIntoView(false)", authorSanityPage.btnAddNewOption);
            await authorSanityPage.btnAddNewOption.click().then(async function () {
                await browser.sleep(1000);
                await quizContentPage.newOptionTitle.click().then(async function () {
                    await quizContentPage.newOptionTitle.sendKeys(currentOptionTitle);
                });
                await quizContentPage.newOptionDescription.click().then(async function () {
                    await quizContentPage.newOptionDescription.sendKeys(currentOptionDesc);
                });
            })

        }
    }
    await element(By.xpath(`(//mat-slide-toggle[contains(@name,'correct')]//label)[${correctOptionNumber}]`)).click();
    // console.log(ssOptions);
    // console.log(quizSSOptionDescriptions);
});

Then("quiz question of the type Single Select should get created successfully", async function () {
    await element(By.xpath(`//p[contains(text(),'${quizContentTitle}')]/../../..`)).click();
    await browser.sleep(5000);
    questionCount++;

    let quizSSoptions: string[] = []
    await authorSanityPage.optionsInSSPreview.each(async function (option) {
        await option.getText().then(function (optionText) {
            quizSSoptions.push(optionText.trim());
        })
    })
    expect(ssOptions, "The Quiz Single Select Options are not correct").to.have.members(quizSSoptions);
    //console.log(quizSSoptions);

    await quizContentPage.editQuestion1.click().then(async function () {
        await createAllContentsPage.singleSelectJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
            expect(quizSingleSelectJSID, "JS ID of Quiz Single Select is not correct").to.contain(JS_ID.trim());
        });
        await quizContentPage.questionPrompt.getAttribute("ng-reflect-model").then(async function (prompt) {
            expect(quizSingleSelectPrompt, "Prompt of Quiz Single Select is not correct").to.contain(prompt.trim());
        });
        await quizContentPage.questionExplanation.getAttribute("ng-reflect-model").then(async function (explanation) {
            expect(quizSingleSelectExp, "Explanation of Quiz Single Select is not correct").to.contain(explanation.trim());
        });
        await quizContentPage.questionHint.getAttribute("ng-reflect-model").then(async function (hint) {
            expect(quizSingleSelectHint, "Hint of Quiz Single Select is not correct").to.contain(hint.trim());
        });
    })
    quizSSCreateSuccess = true;
    await helper.cancelCMSChangesAndExit();
})

let quizMultiSelectJSID: string = `Quiz_MS_Id  ${currentDateTime}`;
let quizMultiSelectOptionTitle: string = `Quiz MS ${currentDateTime}`;
let quizMultiSelectPrompt: string = `Quiz_MS Title ${currentDateTime}`;
let quizMultiSelectExp: string = `Quiz_MS Explanation ${currentDateTime}`;
let quizMultiSelectHint: string = `Quiz_MS Hint ${currentDateTime}`;
let msOptions: string[] = [];
let msOptionDescriptions: string[] = [];
let msOptionDescription: string = `Quiz_MS Desc ${currentDateTime}`;
let numberOfMSoptions: number = 5;
let correctOptionNumbers: number[] = [];
correctOptionNumbers.push(Math.ceil(Math.random() * numberOfMSoptions));
let correctOption2: number = Math.ceil(Math.random() * numberOfMSoptions);
let quizMSCreateSuccess: boolean = false;

while (correctOptionNumbers.length < 2) {
    if (correctOptionNumbers.indexOf(correctOption2) < 0) {
        correctOptionNumbers.push(correctOption2);
    }
    else {
        correctOption2 = Math.ceil(Math.random() * numberOfMSoptions)
    }

}

console.log(correctOptionNumbers);

When("user creates a question of the type Multi Select", async function () {
    await quizContentPage.addQuestion.click();
    await browser.sleep(2000);
    await quizContentPage.tabMultiselect.click();
    await browser.sleep(1000);

    await createAllContentsPage.singleSelectJS_Id.sendKeys(quizMultiSelectJSID);
    await quizContentPage.questionPrompt.sendKeys(quizMultiSelectPrompt);
    await quizContentPage.questionExplanation.sendKeys(quizMultiSelectExp);
    await quizContentPage.questionHint.sendKeys(quizMultiSelectHint);

    msOptions = [];
    for (let i: number = 1; i <= numberOfMSoptions; i++) {
        let currentOptionTitle: string = `${quizMultiSelectOptionTitle} Option${i}`;
        let currentOptionDesc: string = `${msOptionDescription} Option${i}`;

        msOptions.push(currentOptionTitle.trim());
        msOptionDescriptions.push(currentOptionDesc.trim());
        if (i == 1) {
            await quizContentPage.newOptionTitle.click().then(async function () {
                await quizContentPage.newOptionTitle.sendKeys(currentOptionTitle);
            });
            await quizContentPage.newOptionDescription.click().then(async function () {
                await quizContentPage.newOptionDescription.sendKeys(currentOptionDesc);

            });
        }
        else {
            await browser.actions().mouseMove(quizContentPage.addOptionMultiSelect).perform();
            await browser.sleep(1000)
            await quizContentPage.addOptionMultiSelect.click().then(async function () {
                await browser.sleep(1000);
                await quizContentPage.newOptionTitle.click().then(async function () {
                    await quizContentPage.newOptionTitle.sendKeys(currentOptionTitle);
                });
                await quizContentPage.newOptionDescription.click().then(async function () {
                    await quizContentPage.newOptionDescription.sendKeys(currentOptionDesc);
                });
            })

        }
    }
    correctOptionNumbers.forEach(async function (optionNumber) {
        await element(By.xpath(`(//mat-slide-toggle[contains(@name,'correct')]//label)[${optionNumber}]`)).click();
        await browser.sleep(2000);
    })
    await quizContentPage.increaseNumberOfCorrectAnswers.click();

    //await browser.sleep(150 * 1000);
    // console.log(msOptions);
    // console.log(msOptionDescriptions);
})

Then("quiz question of the type Multi Select should get created successfully", async function () {

    await element(By.xpath(`//p[contains(text(),'${quizContentTitle}')]/../../..`)).click();
    await browser.sleep(5000);
    questionCount++;

    let quizMSoptions: string[] = []
    await authorSanityPage.optionsInMSPreview.each(async function (option) {
        await option.getText().then(function (optionText) {
            quizMSoptions.push(optionText.trim());
        })
    })
    expect(msOptions, "The Quiz Single Select Options are not correct").to.have.members(quizMSoptions);
    console.log(quizMSoptions);

    if (questionCount == 1) {
        await quizContentPage.editQuestion1.click();
    }
    if (questionCount == 2) {
        await quizContentPage.editQuestion2.click();
    }

    await createAllContentsPage.singleSelectJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
        expect(quizMultiSelectJSID, "JS ID of Quiz Multi Select is not correct").to.contain(JS_ID.trim());
    });
    await quizContentPage.questionPrompt.getAttribute("ng-reflect-model").then(async function (prompt) {
        expect(quizMultiSelectPrompt, "Prompt of Quiz Multi Select is not correct").to.contain(prompt.trim());
    });
    await quizContentPage.questionExplanation.getAttribute("ng-reflect-model").then(async function (explanation) {
        expect(quizMultiSelectExp, "Explanation of Quiz Multi Select is not correct").to.contain(explanation.trim());
    });
    await quizContentPage.questionHint.getAttribute("ng-reflect-model").then(async function (hint) {
        expect(quizMultiSelectHint, "Hint of Quiz Multi Select is not correct").to.contain(hint.trim());
    });
    quizMSCreateSuccess = true;
    await helper.cancelCMSChangesAndExit();

})

// interface Person{
//     firstName:string,
//     lastName:string,
//     age:number
// }

// const person1 : Person = {firstName:"dasfa",lastName:"dfadfa",age:33};

// function personDetails(person:Person):void{
//     console.log(`The name of the person is ${person.firstName} ${person.lastName}`)
// };

let quizRankingJSID: string = `Ranking_Id  ${currentDateTime}`;
let quizRankingOptionTitle: string = `Ranking ${currentDateTime}`;
let quizRankingPrompt: string = `Ranking Title ${currentDateTime}`;
let quizRankingExp: string = `Ranking Explanation ${currentDateTime}`;
let quizRankingHint: string = `Ranking Hint ${currentDateTime}`;
let rankingOptions: string[] = [];
let rankingOptionDescriptions: string[] = [];
let rankingOptionDescription: string = `Ranking Desc ${currentDateTime}`;
let numberOfRankingOptions: number = 5;
let quizRankingCreateSuccess: boolean = false;

When("user creates a question of the type Ranking", async function () {
    await quizContentPage.addQuestion.click();
    await browser.sleep(2000);
    await quizContentPage.tabRankingQuestion.click();
    await browser.sleep(1000);

    await createAllContentsPage.singleSelectJS_Id.sendKeys(quizRankingJSID);
    await quizContentPage.questionPrompt.sendKeys(quizRankingPrompt);
    await quizContentPage.questionExplanation.sendKeys(quizRankingExp);
    await quizContentPage.questionHint.sendKeys(quizRankingHint);

    rankingOptions = [];
    for (let i: number = 1; i <= numberOfRankingOptions; i++) {
        let currentOptionTitle: string = `${quizRankingOptionTitle} Option${i}`;
        let currentOptionDesc: string = `${rankingOptionDescription} Option${i}`;

        rankingOptions.push(currentOptionTitle.trim());
        rankingOptionDescriptions.push(currentOptionDesc.trim());
        if (i == 1) {
            await quizContentPage.newOptionTitle.click().then(async function () {
                await quizContentPage.newOptionTitle.sendKeys(currentOptionTitle);
            });
            await quizContentPage.newOptionDescription.click().then(async function () {
                await quizContentPage.newOptionDescription.sendKeys(currentOptionDesc);

            });
        }
        else {
            await browser.actions().mouseMove(quizContentPage.addOptionMultiSelect).perform();
            await browser.sleep(1000);
            await quizContentPage.addOptionMultiSelect.click().then(async function () {
                await browser.sleep(1000);
                await quizContentPage.newOptionTitle.click().then(async function () {
                    await quizContentPage.newOptionTitle.sendKeys(currentOptionTitle);
                });
                await quizContentPage.newOptionDescription.click().then(async function () {
                    await quizContentPage.newOptionDescription.sendKeys(currentOptionDesc);
                });
            })

        }
    }
    // console.log(rankingOptions);
    // console.log(rankingOptionDescriptions);
})

Then("quiz question of the type Ranking should get created successfully", async function () {

    await element(By.xpath(`//p[contains(text(),'${quizContentTitle}')]/../../..`)).click();
    await browser.sleep(5000);
    questionCount++;

    //ul > li:nth-child(1) div[class*='ranking__option'][class*='weight'];
    let countOfRankingOptions: number = await quizContentPage.rankingOptions.count();
    expect(countOfRankingOptions).to.equal(numberOfRankingOptions);

    for (let i: number = 1; i <= countOfRankingOptions; i++) {
        let optionRank: ElementFinder = await element(By.css(`ul[class*='ranking-options'] li:nth-child(${i}) div[class*='ranking__option-index']`));
        let optionTitle: ElementFinder = await element(By.css(`ul[class*='ranking-options'] li:nth-child(${i}) p[class*='option-title']`));
        let optionDescription: ElementFinder = await element(By.css(`ul[class*='ranking-options'] li:nth-child(${i}) p[class*='option-description']`));

        let rank: string = (await optionRank.getText()).trim();
        expect(Number.parseInt(rank), "Ranking order is not correct").to.equal(i);
        let title: string = (await optionTitle.getText()).trim();
        expect(title, "Ranking Options order is not correct").to.equal(rankingOptions[i - 1]);
        let description: string = (await optionDescription.getText()).trim();
        expect(description, "Ranking Options order is not correct").to.equal(rankingOptionDescriptions[i - 1]);
    }
    if (questionCount == 1) {
        await quizContentPage.editQuestion1.click();
    }
    else if (questionCount == 2) {
        await quizContentPage.editQuestion2.click();
    }
    else {
        await quizContentPage.editQuestion3.click();
    }

    await createAllContentsPage.singleSelectJS_Id.getAttribute("ng-reflect-model").then(async function (JS_ID) {
        expect(quizRankingJSID, "JS ID of Quiz Ranking is not correct").to.contain(JS_ID.trim());
    });
    await quizContentPage.questionPrompt.getAttribute("ng-reflect-model").then(async function (prompt) {
        expect(quizRankingPrompt, "Prompt of Quiz Ranking is not correct").to.contain(prompt.trim());
    });
    await quizContentPage.questionExplanation.getAttribute("ng-reflect-model").then(async function (explanation) {
        expect(quizRankingExp, "Explanation of Quiz Ranking is not correct").to.contain(explanation.trim());
    });
    await quizContentPage.questionHint.getAttribute("ng-reflect-model").then(async function (hint) {
        expect(quizRankingHint, "Hint of Quiz Ranking is not correct").to.contain(hint.trim());
    });
    quizRankingCreateSuccess = true;
    await helper.cancelCMSChangesAndExit();

})

let quizActivityName: string = `QuizAutomation ${currentDateTime}`;
let quizActivityDescription: string = `QuizDescription ${currentDateTime}`;
let moduleName: string = "";
let isQuizActivityAlreadyCreated: boolean = false;
let backUpContentUsed: boolean = false;
When("user creates a new Quiz activity under {string} module of the Journey", async function (modName) {
    moduleName = modName;
    if (!isQuizActivityAlreadyCreated) {
        if (questionCount == 0) {
            quizContentTitle = "Quiz BackUp Content";
            questionCount = 3;
            backUpContentUsed = true;
            correctOptionNumber = 5;
            correctOptionNumbers = [2, 3];
            ssOptions = ['Quiz SS 10-20-2020 14-46 Option1', 'Quiz SS 10-20-2020 14-46 Option2', 'Quiz SS 10-20-2020 14-46 Option3',
                'Quiz SS 10-20-2020 14-46 Option4', 'Quiz SS 10-20-2020 14-46 Option5'];
            quizSSOptionDescriptions = ['Quiz_SS Desc 10-20-2020 14-46 Option1', 'Quiz_SS Desc 10-20-2020 14-46 Option2', 'Quiz_SS Desc 10-20-2020 14-46 Option3',
                'Quiz_SS Desc 10-20-2020 14-46 Option4', 'Quiz_SS Desc 10-20-2020 14-46 Option5'];
            msOptions = ['Quiz MS 10-20-2020 14-46 Option1', 'Quiz MS 10-20-2020 14-46 Option2', 'Quiz MS 10-20-2020 14-46 Option3',
                'Quiz MS 10-20-2020 14-46 Option4', 'Quiz MS 10-20-2020 14-46 Option5'];
            msOptionDescriptions = ['Quiz_MS Desc 10-20-2020 14-46 Option1', 'Quiz_MS Desc 10-20-2020 14-46 Option2', 'Quiz_MS Desc 10-20-2020 14-46 Option3',
                'Quiz_MS Desc 10-20-2020 14-46 Option4', 'Quiz_MS Desc 10-20-2020 14-46 Option5'];
            rankingOptions = ['Ranking 10-20-2020 14-46 Option1', 'Ranking 10-20-2020 14-46 Option2', 'Ranking 10-20-2020 14-46 Option3',
                'Ranking 10-20-2020 14-46 Option4', 'Ranking 10-20-2020 14-46 Option5'];

        }
        let isModuleExpanded: boolean = await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel[contains(@class,'expanded')]`)).isPresent();
        if (!isModuleExpanded) {
            await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//mat-expansion-panel-header`)).click();
        }
        let isQuizActivityAlreadyPresent: boolean = await quizContentPage.quizActivityInJourney.isPresent();
        while (isQuizActivityAlreadyPresent) {
            await quizContentPage.quizActivityInJourney.click();
            await element(By.css("button[name*='delete']")).click();
            await browser.sleep(1500);
            isQuizActivityAlreadyPresent = await quizContentPage.quizActivityInJourney.isPresent();
        }
        await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//div[contains(@class,'module')]//button[@name='menu']`)).click();
        await commonObjects.btnAddActivityToModule.click();
        await commonObjects.ddActivityType.click();
        await commonObjects.activityTypeQuiz.click();
        await commonObjects.activityTitle.sendKeys(quizActivityName);
        if (!(quizActivityDescription === undefined)) {
            await commonObjects.activityDescription.sendKeys(quizActivityDescription);
        }
        await commonObjects.btnSave_AddActivity.click();
    }

})
let isQuizActivityAlreadyLinked: boolean = false;

When("user links quiz content to the quiz activity", async function () {
    if (!isQuizActivityAlreadyLinked) {
        let isModuleExpanded: boolean = await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel[contains(@class,'expanded')]`)).isPresent();
        if (!isModuleExpanded) {
            await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//mat-expansion-panel-header`)).click();
        }
        await element(By.xpath(`//p[contains(text(),'${quizActivityName}')]/ancestor::div[contains(@class,'journey-margin')]//button[contains(@name,'menu')]`)).click();
        await commonObjects.btnLinkActivityInActivityMenu.click();
        await browser.sleep(2000);
        await commonObjects.clientCollectionTab.click();
        await browser.sleep(2000);
        await commonObjects.linkActivityPetronasTab.click();
        await browser.sleep(2000);
        await commonObjects.searchActivityToBeLinkedInput.click()
        await commonObjects.searchActivityToBeLinkedInput.clear();
        await commonObjects.searchActivityToBeLinkedInput.sendKeys(quizContentTitle);

        await commonObjects.searchIcon.click();
        await element(By.xpath(`//span[contains(text(),'${quizContentTitle}')]/ancestor::div[contains(@class,'journey-list')]//button[contains(@name,'select')]`)).click();
    }
})

When("user tries to edit the quiz activity", async function () {
    let isModuleExpanded: boolean = await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel[contains(@class,'expanded')]`)).isPresent();
    if (!isModuleExpanded) {
        await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//mat-expansion-panel-header`)).click();
    }
    let quizActivityMenu:ElementFinder =  await element(By.xpath(`//p[contains(text(),'${quizActivityName}')]/ancestor::div[contains(@class,'journey-margin')]//button[contains(@name,'menu')]`));
    await browser.executeScript("arguments[0].scrollIntoView(false)",quizActivityMenu);
    await quizActivityMenu.click();
    await browser.sleep(1000);
    try{
        await commonObjects.btnEditActivity.click();
    }
    catch(e){
        console.log(e);
        await browser.executeScript("arguments[0].click()",commonObjects.btnEditActivity);
    }
    
    await browser.sleep(3000);
})
let expectedKtbIntroText: string[] = ['Each question has a maximum value of 100 points.',
    'Each question has a 20second(s) timer.',
    'After 10second(s) there is a penalty of 5 points per second.',
    'After all time is elapsed, you may still answer the question but the maximum value is reduced based on then penalties.',
    'An incorrect answer is worth zero points.'];

let expectedQuesOrderOptions: string[] = ['Fixed', 'Random'];
let expectedAnsOrderOptions: string[] = ['Fixed', 'Random'];

let expectedFeedbackOptions: string[] = ['Indicator Mark (Selected answers will be marked with a simple check).',
    'Immediate Feedback (See the selected answers’ feedback comments upon submission (if feedback comments are written for this question).',
    'Delay Until End Of Quiz (All feedback is delayed until the end of the quiz).'];

let expectedTimingOptions: string[] = ['None',
    'Keep time (timer counts up, no limit)',
    'Time limit (for whole quiz)*',
    'Ktb Rules'];

let ktbInfoText: string = "KTB mode will set all configuration to KTB defaults";
let ktbTimingRulesInfo: string = "Time per question. How quickly a user responds effects the question score.";
let numberOfAttemptsAllowed: number = 2 + Math.ceil(Math.random() * 5);

Then("the Quiz Condition tab should be functioning properly", async function () {
    await browser.manage().timeouts().implicitlyWait(3 * 1000);
    await quizContentPage.tglIntroPageStatus.getAttribute("ng-reflect-model").then(async function (isIntroChecked) {
        //console.log("isIntroChecked", isIntroChecked);
        expect(isIntroChecked, "Intro Page toggle enabled by default").to.equal("false");
    })

    await quizContentPage.inputIntroPageText.isPresent().then(async function (isIntroPageInputDisplayed) {
        //console.log("isIntroPageInputDisplayed", isIntroPageInputDisplayed);
        expect(isIntroPageInputDisplayed, "Intro Page Input field displayed even though intro page toggle is disabled").to.be.false;
    })
    await quizContentPage.tglIntroPage.click();
    await browser.sleep(1000);
    await quizContentPage.inputIntroPageText.isPresent().then(async function (isIntroPageInputDisplayed) {
        //console.log("isIntroPageInputDisplayed", isIntroPageInputDisplayed);
        expect(isIntroPageInputDisplayed, "Intro Page Input field not displayed even though intro page toggle is enabled").to.be.true;
    })
    await quizContentPage.ktbTextIntroSection.count().then(async function (isIntroPageTextPresent) {
        //console.log("isIntroPageTextPresent", isIntroPageTextPresent);
        expect(isIntroPageTextPresent, "KTB Intro text displayed even though KTB mode not enabled").to.equal(0);
    })
    await quizContentPage.ktbModeInfoIcon.click().then(async function () {
        await browser.sleep(1000);
        let ktbInfoText = await quizContentPage.ktbModeInfo.getText();
        expect(ktbInfoText.trim(), "KTB Mode Info text is not correct").to.equal(ktbInfoText);
        //console.log(ktbInfoText);
        await quizContentPage.closeKtbInfo.click();
        await browser.sleep(1000);
        let isKTBInfoStillDisplayed: boolean = await quizContentPage.ktbModeInfo.isPresent();
        if (isKTBInfoStillDisplayed) {
            await quizContentPage.closeKtbInfo.click();
            await browser.sleep(1000);
        }
    })

    let isKTBChecked: string = await quizContentPage.tglKTBmodeStatus.getAttribute("ng-reflect-model");
    if (isKTBChecked.trim() == "false") {
        await quizContentPage.tglKTBmode.click();
        await browser.sleep(1000);

        await quizContentPage.ktbTextIntroSection.count().then(async function (isIntroPageTextPresent) {
            //console.log("isIntroPageTextPresent", isIntroPageTextPresent);
            expect(isIntroPageTextPresent, "KTB Intro text not displayed even though KTB mode enabled").to.be.greaterThan(0);
        })
        let ktbIntroText: string[] = [];
        await quizContentPage.ktbTextIntroSection.each(async function (ktbIntroTextLine) {
            let line: string = await ktbIntroTextLine.getText();
            ktbIntroText.push(line.trim());
        });
        expect(ktbIntroText, "Default KTB intro text is not correct").to.include.members(expectedKtbIntroText);
        console.log(ktbIntroText);
    }
    else {
        expect(isKTBChecked.trim(), "KTB mode toggle enabled by default").to.equal("false");
    }

    let quesOrderOptions: string[] = [];
    await quizContentPage.questionOrderRadioOptions.each(async function (quesOrder) {
        let quesOrderOption: string = await quesOrder.getText();
        quesOrderOptions.push(quesOrderOption.trim());
    })
    //console.log(quesOrderOptions);
    expect(quesOrderOptions, "Question order radio options are not correct").to.include.members(expectedQuesOrderOptions);

    let quesAnswerOrderOptions: string[] = [];
    await quizContentPage.answerOrderRadioOptions.each(async function (ansOrder) {
        let quesAnswerOrderOption: string = await ansOrder.getText();
        quesAnswerOrderOptions.push(quesAnswerOrderOption.trim());
    })
    console.log(quesAnswerOrderOptions);
    expect(quesAnswerOrderOptions, "Answer option order radio options are not correct").to.include.members(expectedAnsOrderOptions);

    await quizContentPage.isPassingGradeTglChecked.getAttribute("ng-reflect-model").then(async function (isPassingGradeChecked) {
        //console.log("isPassingGradeChecked", isPassingGradeChecked);
        expect(isPassingGradeChecked, "Passing Grade toggle enabled by default").to.equal("false");
    })

    let isScoingTabDisplayed: boolean = await quizContentPage.scoringTab.isPresent();
    let isNoOfCorrectNeededDisplayed: boolean = await quizContentPage.inputNoOfCorrectNeeded.isPresent();

    //console.log("isScoingTabDisplayed", isScoingTabDisplayed);
    //console.log("isNoOfCorrectNeededDisplayed", isNoOfCorrectNeededDisplayed);

    expect(isScoingTabDisplayed, "Scoring tab displayed even though Passing Grade toggle is off").to.be.false;
    expect(isNoOfCorrectNeededDisplayed, "No of correct needed toggle displayed even though Passing Grade toggle is off").to.be.false;

    await quizContentPage.tglPassingGrade.click();
    await browser.sleep(2000);

    isScoingTabDisplayed = await quizContentPage.scoringTab.isPresent();
    isNoOfCorrectNeededDisplayed = await quizContentPage.inputNoOfCorrectNeeded.isPresent();

    //console.log("isScoingTabDisplayed", isScoingTabDisplayed);
    //console.log("isNoOfCorrectNeededDisplayed", isNoOfCorrectNeededDisplayed);

    expect(isScoingTabDisplayed, "Scoring tab not displayed even though Passing Grade toggle is off").to.be.true;
    expect(isNoOfCorrectNeededDisplayed, "No of correct needed toggle not displayed even though Passing Grade toggle is on").to.be.true;

    let currentNoOfCorrectNeeded_string: string = await quizContentPage.inputNoOfCorrectNeeded.getAttribute("ng-reflect-model");
    let currentNoOfCorrectNeeded: number = Number.parseInt(currentNoOfCorrectNeeded_string.trim());
    while (currentNoOfCorrectNeeded < questionCount) {
        await quizContentPage.btnIncreaseNoOfCorrectNeeded.click();
        await browser.sleep(2000);
        currentNoOfCorrectNeeded = Number.parseInt(await (await quizContentPage.inputNoOfCorrectNeeded.getAttribute("ng-reflect-model")).trim());
    }
    if (currentNoOfCorrectNeeded == questionCount) {
        await quizContentPage.btnIncreaseNoOfCorrectNeeded.isEnabled().then(async function (isIncreaseBtnEnabled) {
            console.log("isIncreaseBtnEnabled", isIncreaseBtnEnabled);
            //expect(isIncreaseBtnEnabled, "user is able to link more questions than present in quiz content").to.be.false;
            if (questionCount > 1) {
                await quizContentPage.btnDecreaseNoOfCorrectNeeded.click();
                await browser.sleep(1000);
            }
        })
    }
    await quizContentPage.isAttemptLimitTglChecked.getAttribute("ng-reflect-model").then(async function (isAttemptLimitTglChecked) {
        //console.log("isAttemptLimitTglChecked", isAttemptLimitTglChecked);
        expect(isAttemptLimitTglChecked, "Attempt Limit toggle is enabled by default").to.equal("false");
    })

    let isNoOfAttemptsDisplayed: boolean = await quizContentPage.inputAttemptsAllowed.isPresent();
    //console.log("isNoOfAttemptsDisplayed", isNoOfAttemptsDisplayed);
    expect(isNoOfAttemptsDisplayed, "No of attempts input displayed even though Attempt Limit toggle is off").to.be.false;

    await quizContentPage.tglAttemptLimit.click();
    await browser.sleep(1000);

    isNoOfAttemptsDisplayed = await quizContentPage.inputAttemptsAllowed.isPresent();
    expect(isNoOfAttemptsDisplayed, "No of attempts input not displayed even though Attempt Limit toggle is on").to.be.true;
    //console.log("isNoOfAttemptsDisplayed", isNoOfAttemptsDisplayed);
    await quizContentPage.inputAttemptsAllowed.sendKeys(numberOfAttemptsAllowed.toString());

    let isFeedbackTglChecked: string = await quizContentPage.tglFeedbackChecked.getAttribute("ng-reflect-model");
    if (isFeedbackTglChecked == "false") {
        await quizContentPage.feedbackRadioOptions.count().then(async function (feedbackOptions) {
            //console.log("feedbackOptions", feedbackOptions);
            expect(feedbackOptions, "Feedback Options displayed even though toggled disabled").to.equal(0);
        })
        await quizContentPage.tglFeedback.click();
        await browser.sleep(1000);

        let feedbackOptions: string[] = [];
        await quizContentPage.feedbackRadioOptions.each(async function (option) {
            let feedbackOption: string = await option.getText();
            feedbackOptions.push(feedbackOption.trim());
        })
        //console.log(feedbackOptions);
        expect(feedbackOptions, "Feedback Radio options are not correct").to.include.members(expectedFeedbackOptions);
        await quizContentPage.rdoFeedbackIndicatorMark.click();

    }
    else {
        expect(isFeedbackTglChecked, "Feedback toggle enabled by default").to.equal("false");
    }

    let timingOptions: string[] = [];
    await quizContentPage.timingRadioOptions.each(async function (timingOption) {
        let quizTimingOption: string = await timingOption.getText();
        timingOptions.push(quizTimingOption.trim());
    })
    //console.log(timingOptions);
    expect(timingOptions, "Timing Radio options are not correct").to.include.members(expectedTimingOptions);

    await browser.manage().timeouts().implicitlyWait(15 * 1000);

    await commonObjects.btnSave_AddActivity.click();
    await browser.sleep(2000);

    await helper.saveAndPublishAndExitOnJourneyFlow();
    isQuizActivityAlreadyCreated = true;
    isQuizActivityAlreadyLinked = true;
})

let expectedKTBScoringInfo: string = "Each question is worth 100 points.";
let expectedQuesWorthOptions: string[] = ['None', 'Set Value', 'Ktb Rules'];
let expectedGradeShownOptions:string[] = [ '# out of total correct','% correct','Net # of points achiev' ];
Then("the Quiz Scoring tab should be functioning properly", async function () {
    let isKTBChecked: string = await quizContentPage.tglKTBmodeStatus.getAttribute("ng-reflect-model");
    if (isKTBChecked.trim() == "false") {
        await quizContentPage.tglKTBmode.click();
        await browser.sleep(1000);
    }
    await quizContentPage.scoringTab.isPresent().then(async function (isPassingGradeToggleChecked) {
        console.log(isPassingGradeToggleChecked);
        if (!isPassingGradeToggleChecked) {
            await quizContentPage.tglPassingGrade.click();
            await browser.sleep(2000);
            await quizContentPage.btnIncreaseNoOfCorrectNeeded.click();
            await quizContentPage.tglAttemptLimit.click();
            await quizContentPage.inputAttemptsAllowed.sendKeys(numberOfAttemptsAllowed.toString());
            let isFeedbackTglChecked: string = await quizContentPage.tglFeedbackChecked.getAttribute("ng-reflect-model");
            if (isFeedbackTglChecked == "false") {
                await quizContentPage.tglFeedback.click();
                await browser.sleep(1000);
                await quizContentPage.rdoFeedbackIndicatorMark.click();
            }
            else {
                await quizContentPage.rdoFeedbackIndicatorMark.click();
            }
        }
    })
    await quizContentPage.scoringTab.click();
    console.log('Clicked on scoring tab');
    await browser.sleep(2000);
    await browser.manage().timeouts().implicitlyWait(3 * 1000);
    await quizContentPage.ktbPointsInfoIcon.click().then(async function () {
        await browser.sleep(1000);
        let ktbInfoText = await quizContentPage.ktbModeInfo.getText();
        //console.log(ktbInfoText);
        expect(ktbInfoText.trim(), "KTB Timing Info text is not correct").to.equal(expectedKTBScoringInfo);
        await quizContentPage.closeKtbInfo.click();
        await browser.sleep(1000);
        let isktbPointsInfoStillDisplayed: boolean = await quizContentPage.ktbModeInfo.isPresent();
        if (isktbPointsInfoStillDisplayed) {
            await quizContentPage.closeKtbInfo.click();
            await browser.sleep(1000);
        }
    })

    let questionWorthOptions: string[] = [];
    await quizContentPage.pointsWorthRadioOptions.each(async function (questionWorthOption) {
        let quesWorth: string = await questionWorthOption.getText();
        questionWorthOptions.push(quesWorth.trim());
    })
    //console.log(questionWorthOptions);
    expect(questionWorthOptions).to.include.members(expectedQuesWorthOptions);

    let isKTBModeSelected: boolean = await (await quizContentPage.ktbRulesScoringRadio.getAttribute("ng-reflect-disabled")).trim() == "false";
    if (!isKTBModeSelected) {
        await quizContentPage.rdoSetQuestionValue.click();
        await browser.sleep(1000);
    }

    for (let i: number = 1; i <= 5; i++) {
        await quizContentPage.btnIncreaseQuestionPoints.click();
        await browser.sleep(1000);
    }
    for (let i: number = 1; i <= 5; i++) {
        if (!isKTBModeSelected) {
            i++;
        }
        await quizContentPage.btnDecreaseQuestionPoints.click();
        await browser.sleep(1000);
    }

    await quizContentPage.inputQuestionPoints.getAttribute("ng-reflect-model").then(async function (quesPoints) {
        console.log("quesPoints", quesPoints);
        if (isKTBModeSelected) {
            expect(quesPoints.trim(), 'Increase/Decrease question points buttons not working properly').to.equal("100");
        }
        else {
            expect(quesPoints.trim(), 'Increase/Decrease question points buttons not working properly').to.not.equal("0");
        }

    })

    let gradeShownOptions: string[] = [];
    await quizContentPage.gradeShownRadioOptions.each(async function (gradeShownOption) {
        let howGradeIsShown: string = await gradeShownOption.getText();
        gradeShownOptions.push(howGradeIsShown.trim());
    })
    expect(gradeShownOptions).to.include.members(expectedGradeShownOptions);
    await quizContentPage.rdoGradeShownNetPoints.click();
    await browser.sleep(1000);
    //console.log(gradeShownOptions);
    await browser.manage().timeouts().implicitlyWait(15 * 1000);

    await commonObjects.btnSave_AddActivity.click();
    await browser.sleep(2000);
    await helper.saveAndPublishAndExitOnJourneyFlow();

    isQuizActivityAlreadyCreated = true;
    isQuizActivityAlreadyLinked = true;
})

let summaryMessage: string = `SummaryMessage ${currentDateTime}`;
let passingMessage: string = `You have passed on ${currentDateTime}`;
let failingMessage: string = `You have Failed on ${currentDateTime}`;
Then("the Quiz Summary tab should be functioning properly", async function () {
    let isKTBChecked: string = await quizContentPage.tglKTBmodeStatus.getAttribute("ng-reflect-model");
    if (isKTBChecked.trim() == "false") {
        await quizContentPage.tglKTBmode.click();
        await browser.sleep(1000);
    }
    await quizContentPage.btnIncreaseNoOfCorrectNeeded.isPresent().then(async function (isPassingGradeToggleChecked) {
        //console.log(isPassingGradeToggleChecked);
        if (!isPassingGradeToggleChecked) {
            await quizContentPage.tglPassingGrade.click();
            await browser.sleep(2000);
            await quizContentPage.btnIncreaseNoOfCorrectNeeded.click();
            await quizContentPage.tglAttemptLimit.click();
            await quizContentPage.inputAttemptsAllowed.sendKeys(numberOfAttemptsAllowed.toString());
            let isFeedbackTglChecked: string = await quizContentPage.tglFeedbackChecked.getAttribute("ng-reflect-model");
            if (isFeedbackTglChecked == "false") {
                await quizContentPage.tglFeedback.click();
                await browser.sleep(1000);
                await quizContentPage.rdoFeedbackIndicatorMark.click();
            }
            else {
                await quizContentPage.rdoFeedbackIndicatorMark.click();
            }
        }
    })

    await quizContentPage.summaryTab.click();
    await browser.sleep(2000);

    await quizContentPage.inputSummaryMessage.click().then(async function () {
        await browser.sleep(1000);
    })
    await quizContentPage.inputSummaryMessage.sendKeys(summaryMessage);
    await quizContentPage.inputSummaryMessage.click().then(async function () {
        await browser.sleep(1000);
    })

    await quizContentPage.inputFailingMessage.click().then(async function () {
        await browser.sleep(1000);
    })
    await quizContentPage.inputFailingMessage.sendKeys(failingMessage);
    await quizContentPage.inputFailingMessage.click().then(async function () {
        await browser.sleep(1000);
    })

    await quizContentPage.inputPassingMessage.click().then(async function () {
        await browser.sleep(1000);
    })
    await quizContentPage.inputPassingMessage.sendKeys(passingMessage);
    await quizContentPage.inputPassingMessage.click().then(async function () {
        await browser.sleep(1000);
    })

    await quizContentPage.tglSummary.isSelected().then(async function (isSummaryToggleChecked) {
        //console.log(isPassingGradeToggleChecked);
        if (!isSummaryToggleChecked) {
            await quizContentPage.tglSummary.click();
        }
    })

    await quizContentPage.tglReview.isSelected().then(async function (isReviewToggleChecked) {
        //console.log(isPassingGradeToggleChecked);
        if (!isReviewToggleChecked) {
            await quizContentPage.tglReview.click();
        }
    })
    await commonObjects.btnSave_AddActivity.click();
    await browser.sleep(2000);
    await helper.saveAndPublishAndExitOnJourneyFlow();

    isQuizActivityAlreadyCreated = true;
    isQuizActivityAlreadyLinked = true;
})

After({ tags: "@QuizContent4 or @QuizContent5 or @QuizContent6" }, async function () {
    await browser.manage().timeouts().implicitlyWait(15 * 1000);
    console.log("Reset Implicit timeout");
})

//---------------------------------------------------PARTICIPANT--------------------------------------------------------------

let expectedKtbTextOnIntroPage = ["Each question has a maximum value of 100 points.", "Each question has a 20second(s) timer.",
    "After 10second(s) there is a penalty of 5 points per second.",
    "After all time is elapsed, you may still answer the question but the maximum value is reduced based on then penalties.",
    "An incorrect answer is worth zero points."]

Then("the quiz intro page should be displayed to the Participant", async function () {
    await browser.waitForAngularEnabled(false);
    let participantKtbText: string[] = [];
    await quizContentPage.p_quizIntroMessage.each(async function (ktbLine) {
        let line: string = await ktbLine.getText();
        participantKtbText.push(line.trim());
    })
    try{
        expect(participantKtbText).to.include.members(expectedKtbTextOnIntroPage);
    }
    catch(e){
        console.log(e);
    }
    
    await quizContentPage.p_nextButton.click();
    await browser.sleep(4000);
    await browser.waitForAngularEnabled(true);
})

// ssOptions = ['Quiz SS 10-20-2020 14-46 Option1', 'Quiz SS 10-20-2020 14-46 Option2', 'Quiz SS 10-20-2020 14-46 Option3',
//     'Quiz SS 10-20-2020 14-46 Option4', 'Quiz SS 10-20-2020 14-46 Option5'];
// quizSSOptionDescriptions = ['Quiz_SS Desc 10-20-2020 14-46 Option1', 'Quiz_SS Desc 10-20-2020 14-46 Option2', 'Quiz_SS Desc 10-20-2020 14-46 Option3',
//     'Quiz_SS Desc 10-20-2020 14-46 Option4', 'Quiz_SS Desc 10-20-2020 14-46 Option5'];
// msOptions = ['Quiz MS 10-20-2020 14-46 Option1', 'Quiz MS 10-20-2020 14-46 Option2', 'Quiz MS 10-20-2020 14-46 Option3',
//     'Quiz MS 10-20-2020 14-46 Option4', 'Quiz MS 10-20-2020 14-46 Option5'];
// msOptionDescriptions = ['Quiz_MS Desc 10-20-2020 14-46 Option1', 'Quiz_MS Desc 10-20-2020 14-46 Option2', 'Quiz_MS Desc 10-20-2020 14-46 Option3',
//     'Quiz_MS Desc 10-20-2020 14-46 Option4', 'Quiz_MS Desc 10-20-2020 14-46 Option5'];
// rankingOptions = ['Ranking 10-20-2020 14-46 Option1', 'Ranking 10-20-2020 14-46 Option2', 'Ranking 10-20-2020 14-46 Option3',
//     'Ranking 10-20-2020 14-46 Option4', 'Ranking 10-20-2020 14-46 Option5'];
// backUpContentUsed = true;

function participantQuestionType(prompt: string): string {
    if (prompt.includes("Quiz_SS")) {
        return "SingleSelect";
    }
    else if (prompt.includes("Quiz_MS")) {
        return "MutliSelect";
    }
    else {
        return "Ranking";
    }
}

let attemptMap: Map<string, Map<string, Object>> = new Map();
let participantQuesCounter: number = 0;
let participantAttemptedSSCorrectly: boolean = false;

let expectedRankingInfoText: string = `To change the order of the items, select an item to highlight it. Then drag the item higher or lower in the list.
Note: to change the order with your keyboard, select the option you would like to change with the space bar or enter key and use the arrow keys to change its order.`;

Then("the user should be able to able to attempt quiz question", async function () {
    await browser.waitForAngularEnabled(false);
    await browser.sleep(2000);
    let isUserAttemptingQuestion: boolean = await quizContentPage.p_currentQuesNumber.isPresent();
    if (isUserAttemptingQuestion) {
        let currentQuestionNumber: string = await quizContentPage.p_currentQuesNumber.getText();
        expect(currentQuestionNumber == `Question ${participantQuesCounter + 1}`, "Current Question number is not correct").to.be.true;

        let currentQuestionPrompt: string = await quizContentPage.p_quesPrompt.getText();
        //console.log(currentQuestionPrompt);
        let currentQuesType: string = participantQuestionType(currentQuestionPrompt);
        let participantQuesResponses: string[] = [];
        switch (currentQuesType) {
            case "Ranking": {
                console.log('Checking Quiz Ranking Question');
                let rankingInfoText: string = await quizContentPage.p_rankingQuestionInfoText.getText();
                expect(rankingInfoText, "Ranking Info text is not correct").to.contain(expectedRankingInfoText);
                await quizContentPage.p_hintButton.isPresent().then(async function (isHintbtnDisplayed) {
                    if (isHintbtnDisplayed) {
                        await quizContentPage.p_hintButton.click();
                        await browser.sleep(1000);
                        let hintText: string = await quizContentPage.hintText.getText();
                        if (!backUpContentUsed) {
                            expect(hintText, "Ranking Question hint text is not correct").to.equal(quizRankingHint);
                        }
                        //console.log(hintText);
                    }
                })

                let participantRankingOptionTitles: string[] = [];
                await quizContentPage.p_rankingOptionTitles.each(async function (optionTitle) {
                    let rankingOptionTitle: string = await optionTitle.getText();
                    participantRankingOptionTitles.push(rankingOptionTitle);
                    //console.log(rankingOptionTitle);
                })
                expect(participantRankingOptionTitles, "Ranking Option Titles are not correct").to.include.members(rankingOptions);
                let p_NoOfRankingOptions: number = await quizContentPage.p_rankingOptionCount.count();

                // let locationMap:Map<Number,ILocation> = new Map();
                // for(let i:number = 1; i<=p_NoOfRankingOptions;i++){
                //     let currentOption:ElementFinder = await element(By.xpath(`//li//div[contains(@class,'weight') and contains(text(),'${i}')]`));
                //     let currentOptionLocation:ILocation = await currentOption.getLocation();
                //     locationMap.set(i,currentOptionLocation);        
                // }
                // console.log(locationMap);


                for (let i: number = 1; i <= 4; i++) {
                    let fromEle: ElementFinder = await element(By.xpath(`//p[contains(text(),'Option${i}')]/..`))
                    let toEle: ElementFinder = await element(By.xpath(`//li//div[contains(@class,'weight') and contains(text(),'${i}')]`));
                    await browser.actions().mouseMove(fromEle).perform();
                    await browser.sleep(2000);
                    await browser.actions().mouseDown(fromEle).perform();
                    await browser.sleep(2000);
                    await browser.actions().mouseMove(toEle).perform();
                    await browser.sleep(2000);
                    await browser.actions().mouseUp(toEle).perform();
                    await browser.sleep(2000);
                }
                await quizContentPage.submitButton.click();
                participantQuesCounter++;
                await browser.sleep(1000);
                let attemptCounter: string = await quizContentPage.p_quizTimer.getText();
                let currentQuesTimer: number = Number.parseInt(attemptCounter.split(":")[0]);
                let questionPoints: number = currentQuesTimer > 10 ? 100 : 50 + 5 * currentQuesTimer;
                participantQuesResponses = rankingOptions;

                let countOfCorrectRankingOptions: number = await element.all(By.css("div[class*='correct-ans']")).count();
                expect(countOfCorrectRankingOptions, "Ranking question not graded correctly").to.equal(p_NoOfRankingOptions);

                let currentQuestionAttempt: Map<string, Object> = new Map();
                currentQuestionAttempt.set("title", currentQuestionPrompt);
                currentQuestionAttempt.set("responses", participantQuesResponses);
                currentQuestionAttempt.set("points", questionPoints);
                currentQuestionAttempt.set("numberOfCorrectOptions", countOfCorrectRankingOptions);
                attemptMap.set(currentQuesType, currentQuestionAttempt);

                await quizContentPage.p_btnContinueToNextQues.isPresent().then(async function (isNextQuesBtnPresent) {
                    if (isNextQuesBtnPresent) {
                        await quizContentPage.p_btnContinueToNextQues.click();
                        await browser.sleep(2000);
                    }
                });
                break;
            }
            case "SingleSelect": {
                console.log('Checking Quiz Single Select Question');
                await quizContentPage.p_hintButton.isPresent().then(async function (isHintbtnDisplayed) {
                    if (isHintbtnDisplayed) {
                        await quizContentPage.p_hintButton.click();
                        await browser.sleep(1000);
                        let hintText: string = await quizContentPage.hintText.getText();
                        if (!backUpContentUsed) {
                            expect(hintText, "Single Select Question hint text is not correct").to.equal(quizSingleSelectHint);
                        }
                    }
                })
                let participantSSOptionTitles: string[] = [];
                let p_NoOfSSOptions: number = await quizContentPage.p_singleSelectOptionTitles.count();
                await quizContentPage.p_singleSelectOptionTitles.each(async function (optionTitle) {
                    let ssOptionTitle: string = await optionTitle.getText();
                    participantSSOptionTitles.push(ssOptionTitle);
                })
                expect(participantSSOptionTitles, "Single Select options are not correct").to.include.members(ssOptions);

                let participantSSOptionDescriptions: string[] = [];
                await quizContentPage.p_singleSelectOptionDescriptions.each(async function (optionDescription) {
                    let ssOptionDescription: string = await optionDescription.getText();
                    participantSSOptionDescriptions.push(ssOptionDescription);
                })
                expect(participantSSOptionDescriptions, "Single Select descriptions are not correct").to.include.members(quizSSOptionDescriptions);
                // console.log(participantSSOptionTitles);
                // console.log(participantSSOptionDescriptions);
                let optionSelected: number = Math.ceil(Math.random() * p_NoOfSSOptions);
                let optionSelectedLocator:string = `//span[contains(@class,'title') and contains(text(),'Option${optionSelected}')]/ancestor::label`;
                let optionSelectedElement:ElementFinder = await element(By.xpath(optionSelectedLocator));
                let optionSelectedTitleLocator:string = `//span[contains(@class,'title') and contains(text(),'Option${optionSelected}')]`;
                await browser.actions().mouseMove(optionSelectedElement).perform();
                await optionSelectedElement.click();
                await element(By.xpath(optionSelectedTitleLocator)).getText().then(async function (participantResponse) {
                    participantQuesResponses.push(participantResponse);
                })
                //correctOptionNumber = 5;
                participantAttemptedSSCorrectly = correctOptionNumber == optionSelected;
                console.log(participantAttemptedSSCorrectly);
                let waitTime: number = (Math.ceil(Math.random() * 8)) * 1000;
                await browser.sleep(waitTime);
                console.log('Waiting for ms:', waitTime);

                await quizContentPage.submitButton.click();
                participantQuesCounter++;
                await browser.sleep(2000);

                let attemptCounter: string = await quizContentPage.p_quizTimer.getText();
                let currentQuesTimer: number = Number.parseInt(attemptCounter.split(":")[1]);
                let questionPoints: number = currentQuesTimer > 10 ? 100 : 50 + 5 * currentQuesTimer;
                //console.log(currentQuesTimer);

                if (participantAttemptedSSCorrectly) {
                    let correctFeedbackLocator = `//span[contains(@class,'title') and contains(text(),'Option${optionSelected}')]/ancestor::div[contains(@class,'correct-ans')]`;
                    let isOptionFeedbackDisplayed: boolean = await element(By.xpath(correctFeedbackLocator)).isPresent();
                    expect(isOptionFeedbackDisplayed, "Option Feedback not displayed").to.be.true;
                    //console.log(isOptionFeedbackDisplayed);
                }
                else {
                    let inCorrectFeedbackLocator = `//span[contains(@class,'title') and contains(text(),'Option${optionSelected}')]/ancestor::div[contains(@class,'wrong-ans')]`
                    let isOptionFeedbackDisplayed: boolean = await element(By.xpath(inCorrectFeedbackLocator)).isPresent();
                    expect(isOptionFeedbackDisplayed, "Option Feedback not displayed").to.be.true;
                    //console.log(isOptionFeedbackDisplayed);
                    questionPoints = 0;

                }
                let currentQuestionAttempt: Map<string, Object> = new Map();
                currentQuestionAttempt.set("title", currentQuestionPrompt);
                currentQuestionAttempt.set("responses", participantQuesResponses);
                currentQuestionAttempt.set("points", questionPoints);
                if (participantAttemptedSSCorrectly) {
                    currentQuestionAttempt.set("numberOfCorrectOptions", 1);
                }
                else {
                    currentQuestionAttempt.set("numberOfCorrectOptions", 0);
                }

                attemptMap.set(currentQuesType, currentQuestionAttempt);
                await quizContentPage.p_btnContinueToNextQues.isPresent().then(async function (isNextQuesBtnPresent) {
                    if (isNextQuesBtnPresent) {
                        await quizContentPage.p_btnContinueToNextQues.click();
                        await browser.sleep(2000);
                    }
                })
                break;

            }
            case "MutliSelect": {
                console.log('Checking Quiz Single Select Question');
                await quizContentPage.p_hintButton.isPresent().then(async function (isHintbtnDisplayed) {
                    if (isHintbtnDisplayed) {
                        await quizContentPage.p_hintButton.click();
                        await browser.sleep(1000);
                        let hintText: string = await quizContentPage.hintText.getText();
                        if (!backUpContentUsed) {
                            expect(hintText, "Multi Select Question hint text is not correct").to.equal(quizMultiSelectHint);
                        }
                    }
                })
                let participantMSOptionTitles: string[] = [];
                let p_NoOfMSOptions: number = await quizContentPage.p_multiSelectOptionTitles.count();
                await quizContentPage.p_multiSelectOptionTitles.each(async function (optionTitle) {
                    let msOptionTitle: string = await optionTitle.getText();
                    participantMSOptionTitles.push(msOptionTitle);
                })
                expect(participantMSOptionTitles, "Multi Select Titles are not correct").to.include.members(msOptions);
                let participantMSOptionDescriptions: string[] = [];
                await quizContentPage.p_multiSelectOptionDescriptions.each(async function (optionDescription) {
                    let p_msOptionDescription: string = await optionDescription.getText();
                    participantMSOptionDescriptions.push(p_msOptionDescription);
                })
                expect(participantMSOptionDescriptions, "Multi Select Descriptions are not correct").to.include.members(msOptionDescriptions);

                // console.log(participantMSOptionTitles);
                // console.log(participantMSOptionDescriptions);
                //correctOptionNumbers = [2, 3];
                for (let correctMSOption of correctOptionNumbers) {
                    let optionSelectedLocator:string = `//span[contains(@class,'title') and contains(text(),'Option${correctMSOption}')]/ancestor::label`;
                    let optionSelectedElement:ElementFinder = await element(By.xpath(optionSelectedLocator));
                    let optionSelectedTitleLocator:string = `//span[contains(@class,'title') and contains(text(),'Option${correctMSOption}')]`;
                    await browser.actions().mouseMove(optionSelectedElement).perform();
                    await optionSelectedElement.click();
                    await element(By.xpath(optionSelectedTitleLocator)).getText().then(async function (participantResponse) {
                        participantQuesResponses.push(participantResponse);
                    })
                    await browser.sleep(1000);
                }

                let waitTime: number = (Math.ceil(Math.random() * 8)) * 1000;
                await browser.sleep(waitTime);
                console.log('Waiting for ms:', waitTime);

                await quizContentPage.submitButton.click();
                participantQuesCounter++;
                await browser.sleep(2000);

                let attemptCounter: string = await quizContentPage.p_quizTimer.getText();
                let currentQuesTimer: number = Number.parseInt(attemptCounter.split(":")[1]);
                let questionPoints: number = currentQuesTimer > 10 ? 100 : 50 + 5 * currentQuesTimer;

                let currentQuestionAttempt: Map<string, Object> = new Map();
                currentQuestionAttempt.set("title", currentQuestionPrompt);
                currentQuestionAttempt.set("points", questionPoints);
                currentQuestionAttempt.set("responses", participantQuesResponses);
                currentQuestionAttempt.set("numberOfCorrectOptions", 2);
                attemptMap.set(currentQuesType, currentQuestionAttempt);

                for (let correctMSOption of correctOptionNumbers) {
                    let optionSelectedFeedbackLocator = `//span[contains(@class,'title') and contains(text(),'${correctMSOption}')]/ancestor::div[contains(@class,'active correct-ans')]`;
                    let isOptionFeedbackDisplayed: boolean = await element(By.xpath(optionSelectedFeedbackLocator)).isPresent();
                    expect(isOptionFeedbackDisplayed, "Multi Select option feedback is not correct").to.be.true;
                    //console.log(isOptionFeedbackDisplayed);
                }
                await quizContentPage.p_btnContinueToNextQues.isPresent().then(async function (isNextQuesBtnPresent) {
                    if (isNextQuesBtnPresent) {
                        await quizContentPage.p_btnContinueToNextQues.click();
                        await browser.sleep(2000);
                    }
                })

                break;
            }

        }
    }
    await browser.waitForAngularEnabled(true);

})

let apiHelper = new apiHelperFunctions();
Before({ tags: "@QuizContent7" }, async function () {
    await apiHelper.resetAllJourneys(Testdata.AdminLogin.Username, Testdata.AdminLogin.Password, "bts", Testdata.apiBuildVersion,
        "5d82323fd9b8ca499403e5bd", "QuizAutomation1@petronas.com");
})

//-------------------------------------------------QUIZ SUMMARY------------------------------------------------------------

When("user navigates to the quiz summary page", async function () {
    await browser.waitForAngularEnabled(false);

    await quizContentPage.btnShowSummary.click();
    await browser.sleep(5000);

    await browser.waitForAngularEnabled(true);
})

let totalPoints: number = 0;
Then("the quiz question summary details and question points should be correct", async function () {
    await browser.waitForAngularEnabled(false);

    let questionSummaries: ElementFinder[] = await quizContentPage.p_participantQuesSummaries;
    for (let question of questionSummaries) {
        let questionSummary: ElementArrayFinder = question.all(By.css("td:not([class]"));
        let currentQuesType: string = "";
        let currentQuestionTitle: string = "";
        let currentAnswer: string[] = [];
        let numberOfCorrectOptions: number = 0;
        let currentQuestionPoints: number = 0;
        await questionSummary.each(async function (prop, index) {
            if (index == 0) {
                let questionTitle: string = await (await prop.getText()).trim();
                currentQuesType = participantQuestionType(questionTitle);
                currentQuestionTitle = questionTitle;
            }
            if (index == 1) {
                let participantAnswer: string = await (await prop.getText()).trim();
                currentAnswer = participantAnswer.split("\n").filter(function (elem) {
                    return elem.length > 0 && elem != "done" && elem != "close";
                })
                numberOfCorrectOptions = participantAnswer.split("\n").filter(function (elem) {
                    return elem == "done";
                }).length;
            }
            if (index == 2) {
                let points: string = await (await prop.getText()).trim();
                currentQuestionPoints = Number.parseInt(points);
            }
        })
        // console.log(currentQuesType);
        // console.log("expected", attemptMap.get(currentQuesType).get("title") as string)
        // console.log(currentQuestionTitle);
        expect(currentQuestionTitle,`Title of ${currentQuesType} is not correct on Quiz Summary page`).to.equal(attemptMap.get(currentQuesType).get("title") as string);

        // console.log("expected", attemptMap.get(currentQuesType).get("responses") as string[]);
        // console.log(currentAnswer);
        expect(currentAnswer,`Participant Responses of ${currentQuesType} are not correct on Quiz Summary page`).to.include.members(attemptMap.get(currentQuesType).get("responses") as string[]);

        totalPoints += currentQuestionPoints;
        let expectedPoints = attemptMap.get(currentQuesType).get("points") as number;
        // console.log("expected", expectedPoints);
        // console.log(currentQuestionPoints);
        expect(currentQuestionPoints,`Points of ${currentQuesType} are not correct on Quiz Summary page`).to.equal(expectedPoints);

        // console.log("expected", attemptMap.get(currentQuesType).get("numberOfCorrectOptions") as number);
        // console.log(numberOfCorrectOptions);
        expect(numberOfCorrectOptions,`Option Feedback of ${currentQuesType} is not correct on Quiz Summary page`).to.equal(attemptMap.get(currentQuesType).get("numberOfCorrectOptions") as number);

    }
    await browser.sleep(5000);
    await browser.waitForAngularEnabled(true);

})

Then("the quiz evaluation should be correct", async function () {
    await browser.waitForAngularEnabled(false);
    let currentAttemptsummaryMsg: string = await quizContentPage.p_summaryMessage.getText();
    //expect(currentAttemptsummaryMsg,"Summary messge is not displayed correctly").to.equal(summaryMessage);
    console.log(currentAttemptsummaryMsg);

    let quizScore: number = Number.parseInt(await quizContentPage.p_quizScore.getText());
    expect(quizScore, "The total quiz score is not correct").to.equal(totalPoints);
    let quizPassingScoreInfo: string = await quizContentPage.quizPassingAndScoreInfo.getText();
    let passingScoreString: string = quizPassingScoreInfo.replace(/[()]+/g, "").split(" ")[1];
    let passingScore: Number = Number.parseInt(passingScoreString);
    let passOrFailMessage: string = await quizContentPage.p_passOrFailMessage.getText();

    if (quizScore >= passingScore) {
        console.log(passOrFailMessage);
        //expect(passOrFailMessage,"Passing/Failing Grade message not displayed correctly").to.equal(passingMessage);
    }
    else {
        console.log(passOrFailMessage);
        //expect(passOrFailMessage,"Passing/Failing Grade message not displayed correctly").to.equal(failingMessage);
    }

    await quizContentPage.p_tryAgainButton.isPresent().then(async function (isTryAgainButtonDisplayed) {
        expect(isTryAgainButtonDisplayed, "Try Again button not displayed").to.be.true;
        if (isTryAgainButtonDisplayed) {
            let tryAgainText: string = await quizContentPage.p_tryAgainText.getText();
            let numberOfRemainingAttempts: number = Number.parseInt(tryAgainText.replace(/[a-zA-Z.,\s]*/g, ""));
            expect(numberOfRemainingAttempts, "Number of remaining attemps are not correct").to.equal(numberOfAttemptsAllowed - 1);
        }
    })
    await browser.waitForAngularEnabled(true);
})

//-----------------------------------------CLEAN UP------------------------------------------------------------------
let cmsHelper = new cmsHelperFunctions();
Then("user should be able to delete the quiz content created", async function () {
    if (!quizContentTitle.includes("BackUp") && quizContentTitle !="") {
        await cmsHelper.deleteContent(quizContentTitle);
    }
})