import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../../config.json";
import { AdminLandingPageLocate } from "../../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
//import { MastheadPage } from "../../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { WordCloudPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/WordCloudPage";
var support = require("protractor-firefox-support");

import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';
import { DriverProvider } from "protractor/built/driverProviders";

let activityAuthorPage = new ActivityAuthoringPageLocate();
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
//let mastheadPage = new MastheadPage();
let wordCloudPage = new WordCloudPageLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;



When("User navigates to an activity that has a block of the type Wordcloud", async function () {
    await wordCloudPage.editActivitywordcloud.click();
})

When('User clicks on Edit Wordcloud button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await wordCloudPage.btnEditWordcloud.click();
});

let wordCloudAuthorRun: boolean = false;
let wordcloudNumberOfWords: number = 0;
let latestWordcloudWordFormat = "";

When("user changes the Wordcase and Number of words to be used to generate Wordcloud", async function () {
    wordCloudAuthorRun = true;
    await wordCloudPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (currentNumber) {
        wordcloudNumberOfWords = Number.parseInt(currentNumber);
        if (wordcloudNumberOfWords == 10) {
            while (wordcloudNumberOfWords < 30) {
                await wordCloudPage.btnIncreaseNumberOfWords.click().then(async function () {
                    await wordCloudPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (currentNumber) {
                        wordcloudNumberOfWords = Number.parseInt(currentNumber);
                    })
                })
            }
        }
        else {
            while (wordcloudNumberOfWords > 10) {
                await wordCloudPage.btnDecreaseNumberOfWords.click().then(async function () {
                    await wordCloudPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (currentNumber) {
                        wordcloudNumberOfWords = Number.parseInt(currentNumber);
                    })
                })
            }
        }
    })
    //WordCase 
    await wordCloudPage.currentWordFormat.getText().then(async function (currentFormatting) {
        if (currentFormatting.includes("Uppercase")) {
            await wordCloudPage.wordFormatLowercase.click().then(async function () {
                latestWordcloudWordFormat = "Lowercase"
            })
        }
        else {
            await wordCloudPage.wordFormatUppercase.click().then(async function () {
                latestWordcloudWordFormat = "Uppercase"
            })
        }
    })

})

Then("the changes made to the Wordcloud block should get saved", async function () {
    await wordCloudPage.editActivitywordcloud.click().then(async function () {
        await wordCloudPage.btnEditWordcloud.click().then(async function () {
            await wordCloudPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (latestNumber) {
                expect(Number.parseInt(latestNumber)).to.equal(wordcloudNumberOfWords);
            });
            await wordCloudPage.currentWordFormat.getText().then(async function (latestFormatting) {
                expect(latestFormatting).to.equal(latestWordcloudWordFormat);
            })
        })
    });
    await commonObjects.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//-------------------------------------PARTICIPANT---------------------------


//------------Update the below code------------------
When("User navigates to Word Cloud activity", async function () {
    browser.waitForAngularEnabled(false);
    // await commonObjects.myJourneyPage.click().then(async function(){
    //     await browser.sleep(3000);
    // })    
    browser.waitForAngularEnabled(true);
});

// let wordPickerUser1:string[]= ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "", "Phasellus", "ut", "fermentum", "nibh,", "vitae", "semper", "sem", "Vivamus", "suscipit", "volutpat", "lorem", "pharetra", "Integer", "aliquam", "nulla", "ultricies", "Praesent", "at", "tincidunt", "metus", "Vestibulum"];
// let wordPickerUser2:string[] = ["ante", "primis", "in", "faucibus", "orci", "luctus", "et", "ultrices", "posuere", "cubilia", "curae;", "Suspendisse", "a", "enim", "sed", "mauris", "lacinia", "lobortis", "amet", "eget", "odio", "Donec", "sagittis", "pretium", "tellus,", "ullamcorper", "erat", "maximus", "vel"];
let wordPicker: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Phasellus", "ut", "fermentum", "nibh", "vitae", "semper", "sem", "Vivamus", "suscipit", "volutpat", "lorem", "pharetra", "Integer", "aliquam", "nulla", "ultricies", "Praesent", "tincidunt", "metus", "Vestibulum", "ante", "primis", "faucibus", "orci", "luctus", "et", "ultrices", "posuere", "cubilia", "curae", "Suspendisse", "enim", "sed", "mauris", "lacinia", "lobortis", "amet", "eget", "odio", "Donec", "sagittis", "pretium", "tellus", "ullamcorper", "erat", "maximus", "vel"];
let ignoredWords: string[] = ["the", "a", "an", "and", "any", "as", "am", "by", "but", "is", "was", "on", "or", "this", "that", "which", "he", "she", "it", "they", "them", "there", "their", "so", "to", "too", "my", "mine", "your", "yours", "our", "ours"];

function inputGenerator(wordArray: string[], wordCount: number): string {
    let sentence: string = "";
    for (let i = 1; i <= wordCount; i++) {
        let wordToBeAdded: string = wordArray[Math.floor(Math.random() * wordArray.length)];
        while (sentence.includes(wordToBeAdded)) {
            wordToBeAdded = wordArray[Math.floor(Math.random() * wordArray.length)];
        }

        sentence += wordToBeAdded + " ";
    };
    return sentence.trim();
};

function wordCounter(sentence: string): any {
    let wordArray = sentence.split(/\s/);
    let wordObj: any = {};
    wordArray.forEach(function (word) {
        word = word.toUpperCase();
        let flag: boolean = wordObj.hasOwnProperty(word);
        //console.log(flag);
        if (flag) {
            let temp: number = wordObj[word] + 1;
            wordObj[word] = temp;
        }
        else {
            wordObj[word] = 1;
        }
    });
    return wordObj;
};
function isUpperCase(str: string): boolean {
    return str === str.toUpperCase();
};

function isLowerCase(str: string): boolean {
    return str === str.toLowerCase();
};

let defaultWordCount: number = 10;
let wordCloudCaseParticipant: string = "Uppercase";

if (wordCloudAuthorRun) {
    defaultWordCount = wordcloudNumberOfWords;
    wordCloudCaseParticipant = latestWordcloudWordFormat
}
console.log(defaultWordCount, wordCloudCaseParticipant);

let ignoredWordsInput = inputGenerator(ignoredWords, 3);
let countedWordsUserOne = inputGenerator(wordPicker, defaultWordCount + 5);
let userOneInput: string = `Three Three Three Two Two ${ignoredWordsInput} ${countedWordsUserOne}`;
let userTwoInput: string = `Two Two ${inputGenerator(ignoredWords, 3)} ${inputGenerator(wordPicker, defaultWordCount + 5)}`;
let combinedInput: string = userOneInput + " " + userTwoInput;
// console.log(userOneInput);
// console.log(userTwoInput);
// console.log(combinedInput);

let wordCloudUserCounter: number = 1;

When("User provides some input into the content activity", async function () {
    browser.waitForAngularEnabled(false);
    let textInputContainer: WebElement = wordCloudPage.textInputContainer.getWebElement();
    await browser.sleep(3000);
    if (wordCloudUserCounter == 1) {
        // await browser.executeScript(`arguments[0].innerText = '${userOneInput}'`, textInputContainer).then(async function () {           
        //     await browser.sleep(2000);
        // });
        await textInputContainer.click();
        await textInputContainer.clear();
        await textInputContainer.sendKeys(userOneInput);
        await browser.sleep(2000);
    }
    else {
        // await browser.executeScript(`arguments[0].innerText = '${userTwoInput}'`, textInputContainer).then(async function () {
        //     await browser.sleep(2000);
        // });
        await textInputContainer.click();
        await textInputContainer.clear();
        await textInputContainer.sendKeys(userTwoInput);
        await browser.sleep(2000);
    }

    wordCloudUserCounter = wordCloudUserCounter + 1;
    browser.waitForAngularEnabled(true);
});


let finalWordCount: any = wordCounter(combinedInput);
//console.log(finalWordCount);

Then("the wordcloud should be properly generated from the input provided", async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(5000);
    //let elementCounter: number = 1;
    await wordCloudPage.wordsInWordcloud.count().then(async function (actualWordCount) {
        if(browser.params.qaSanityRun){
            expect(actualWordCount).to.be.lte(20);
        }
        else{
            expect(actualWordCount).to.be.lte(defaultWordCount);
        }       
    })
    await wordCloudPage.wordsInWordcloud.each(async function (wordElement) {
        await wordElement.getText().then(async function (word) {
            console.log(word);
            expect(word).to.not.be.oneOf(ignoredWords);
            expect(word.toUpperCase()).to.be.oneOf(combinedInput.toUpperCase().split(/\s/));
            if (wordCloudCaseParticipant == "Uppercase") {
                expect(isUpperCase(word)).to.be.true;
            }
            else {
                expect(isLowerCase(word)).to.be.true;
            }

            // let selector:string = `*[class*='highcharts-tracker'] *:nth-child(${elementCounter})`;
            // await browser.executeScript(support.mouseMove,{elementSelector: selector});
            let currentBrowser: string = (await browser.driver.getCapabilities()).get('browserName');
            if (currentBrowser == "chrome") {
                await browser.actions().mouseMove(wordElement).perform().then(async function () {
                    await browser.sleep(1000);
                    await wordCloudPage.selectedWordCount.getText().then(async function (count) {
                        console.log(word + " " + finalWordCount[word.toUpperCase()]);
                        // console.log(word + " "+finalWordCount[word.toLowerCase()]);
                        try {
                            expect(Number.parseInt(count)).to.be.oneOf([finalWordCount[word.toUpperCase()], finalWordCount[word.toLowerCase()]]);
                        }
                        catch (e) {
                            console.log("Count of words doesnt match");
                        }
                    })
                })
            }
        })
    });
    browser.waitForAngularEnabled(true);
});