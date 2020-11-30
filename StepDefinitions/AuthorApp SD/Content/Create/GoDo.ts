import { Before, Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";


import chai = require("chai");
import { HelperFunctions } from "../../../HelperClass";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { AuthorSanityPage } from "../../../../PageObjects/SanityProjectPages/AuthorSanityPage";
import { CreateAllContentsLocate } from "../../../../PageObjects/SanityProjectPages/CreateAllContentPage";
import { CreatedContents, GoDoContentDetails } from "../../../SanityProject/CreateAllContents";
import { GoDoLocators } from "../../../../PageObjects/AuthorApp POM/Content/Create/GoDoPage";
import { NewlyCreatedTheme } from "../../../UserApp SD/Resource/ResourceListing";
import { cmsHelperFunctions } from "../../../cmsHelperClass";
import { apiHelperFunctions } from "../../../apiHelperClass";
import testdata from "../../../../testData.json";

var expect = chai.expect;
var EC = protractor.ExpectedConditions;

let helper = new HelperFunctions();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let commonObjects = new CommonLocate();
let authorSanityPage = new AuthorSanityPage();
let createAllContentsPage = new CreateAllContentsLocate();
let goDoPage = new GoDoLocators();

let cmsHelper = new cmsHelperFunctions();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let nextMonth: string = String(today.getMonth() + 2).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
//let date1MonthFromTodayInMomentaFormat: string = nextMonth + '/' + (String)(today.getDate()) + '/' + (String)(today.getFullYear());
let date1MonthFromTodayInMomentaFormat: string = nextMonth + '/' + "28" + '/' + (String)(today.getFullYear());
let monthArray: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

if (nextMonth == "13") {
    date1MonthFromTodayInMomentaFormat = "01" + '/' + "28" + '/' + (String)(today.getFullYear() + 1);
}

When("user navigates to the activity that has a Go-Do block", async function () {
    if (CreatedContents.goDoActivityName != "") {
        await element(By.xpath(`//p[contains(text(),'${CreatedContents.goDoActivityName}')]/../../..`)).click();
    }
    else {
        await goDoPage.contentGoDo.click();
    }

})

let toastTextJSIDmissing: string = "ID cannot be left empty";
let toastTextTitleMissing: string = "title cannot be left empty";
let toastTextDescriptionMissing: string = "description cannot be left empty";
let toasttextCompletionMessageMissting: string = "Completion Message cannot be left empty";
let toasttextInstructionsMissting: string = "Commitment Instructions cannot be left empty";
let toasttextCommitmentMessageMissting: string = "Commitment Message cannot be left empty";

Then("error message should be displayed to the user in case user removes a mandatory field and clicks on Save", async function () {
    // await createAllContentsPage.goDoTitle.clear().then(async function(){

    // })
    // await browser.sleep(20000);
    await createAllContentsPage.goDoTitle.click();
    let currentTextTitle: string = await createAllContentsPage.goDoTitle.getAttribute("ng-reflect-model");
    while (!(currentTextTitle == "")) {
        await createAllContentsPage.goDoTitle.sendKeys(protractor.Key.BACK_SPACE);
        currentTextTitle = await createAllContentsPage.goDoTitle.getAttribute("ng-reflect-model");
    }
    await activityAuthorPage.editDoneButton.click();
    await browser.wait(EC.presenceOf(goDoPage.goDoToastMessage), 5000).then(async function () {
        await goDoPage.goDoToastMessage.getText().then(async function (toastText) {
            expect(toastText.trim()).to.contain(toastTextTitleMissing);
        })
    })
    await browser.sleep(3000);
    await authorSanityPage.cancelEdit.click();
    await goDoPage.btnEditGoDo.click();
    await createAllContentsPage.goDoDescription.click();
    let currentTextDesc: string = await createAllContentsPage.goDoDescription.getAttribute("ng-reflect-model");
    while (!(currentTextDesc == "")) {
        await createAllContentsPage.goDoDescription.sendKeys(protractor.Key.BACK_SPACE);
        currentTextDesc = await createAllContentsPage.goDoDescription.getAttribute("ng-reflect-model");
    }
    await activityAuthorPage.editDoneButton.click();
    await browser.wait(EC.presenceOf(goDoPage.goDoToastMessage), 5000).then(async function () {
        await goDoPage.goDoToastMessage.getText().then(async function (toastText) {
            expect(toastText.trim()).to.contain(toastTextDescriptionMissing);
        })
    })
    await browser.sleep(3000);
    await authorSanityPage.cancelEdit.click();
    await goDoPage.btnEditGoDo.click();

    await createAllContentsPage.goDoCompletionMessage.clear();
    await activityAuthorPage.editDoneButton.click();
    await browser.wait(EC.presenceOf(goDoPage.goDoToastMessage), 5000).then(async function () {
        await goDoPage.goDoToastMessage.getText().then(async function (toastText) {
            expect(toastText.trim()).to.contain(toasttextCompletionMessageMissting);
        })
    })
    await browser.sleep(3000);
    await authorSanityPage.cancelEdit.click();
    await goDoPage.btnEditGoDo.click();

    await createAllContentsPage.goDoCommitmentInstructions.clear();
    await activityAuthorPage.editDoneButton.click();
    await browser.wait(EC.presenceOf(goDoPage.goDoToastMessage), 5000).then(async function () {
        await goDoPage.goDoToastMessage.getText().then(async function (toastText) {
            expect(toastText.trim()).to.contain(toasttextInstructionsMissting);
        })
    })
    await browser.sleep(3000);
    await authorSanityPage.cancelEdit.click();
    await goDoPage.btnEditGoDo.click();

    await createAllContentsPage.goDoCommitmentMessage.clear();
    await activityAuthorPage.editDoneButton.click();
    await browser.wait(EC.presenceOf(goDoPage.goDoToastMessage), 5000).then(async function () {
        await goDoPage.goDoToastMessage.getText().then(async function (toastText) {
            expect(toastText.trim()).to.contain(toasttextCommitmentMessageMissting);
        })
    })
    await browser.sleep(3000);
    await authorSanityPage.cancelEdit.click();
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });

})
let goDoContentName: string = "";
When("User creates an activity with newly created Go-Do block", async function () {
    goDoContentName = CreatedContents.goDoActivityName;
    await helper.addActivityToModule("Mod 1", `Go-Do Activity`, goDoContentName);
    await helper.saveAndPublishOnJourneyFlow();

})
let themeName: string = "";
When("User adds Instructions content and Results content for the theme", async function () {
    themeName = NewlyCreatedTheme.themeName;
    let newThemeLinkInstructionsObj: string = `//div[contains(text(),'${themeName}')]/ancestor::tr//div[contains(@aria-label,'Instructions')]`;
    let newThemeLinkResultsObj: string = `//div[contains(text(),'${themeName}')]/ancestor::tr//div[contains(@aria-label,'Results')]`;
    await element(By.xpath(newThemeLinkInstructionsObj)).click();
    await cmsHelper.linkActivity("Automation Go-Do Instructions Object",false);
    //await browser.sleep(5000);
    await element(By.xpath(newThemeLinkResultsObj)).click();
    await cmsHelper.linkActivity("Automation Go-Do Results Object",false);
})

Then("User should delete the theme created for testing Go-Do actions", async function () {
    await browser.sleep(5*1000);
    if (themeName.includes("AutoTheme")) {
        await cmsHelper.deleteTheme(themeName);
    }
})

Then("User should delete the content created for testing Go-Do actions", async function () {
    if (goDoContentName.includes("Go-Do Activity")) {
        await cmsHelper.deleteContent(goDoContentName);
    }
})

//---------------------------------------------------------PARTICIPANT----------------------------------------
let apiHelper = new apiHelperFunctions();
Before({tags:"@GoDoBlock04"}, async function(){
    await apiHelper.resetUser(testdata.AdminLogin.Username,testdata.AdminLogin.Password,"bts",testdata.apiBuildVersion,
    "5d82323fd9b8ca499403e5bd","AutomationGoDo1@petronas.com","bd913f8dd8b8d1f246fd")
})

let currentTheme: string = "";
let actionTitle: string = `Action Title ${currentDateTime}`;
let actionDescription: string = `Action Description ${currentDateTime}`;
let textInInstructionsObject: string = "This is sample Instructions Object for Automation of Go-Do block.";
let textInResultsObject: string = "This is sample Results Object for Automation of Go-Do block.";

When("User creates an action for the newly created theme", async function () {
    await browser.waitForAngularEnabled(false);
    await goDoPage.btnCreateAction.click();
    await browser.sleep(2000);
    await goDoPage.selectTheme.click();
    if (themeName.includes("AutoTheme")) {
        currentTheme = themeName;
        await element(By.css(`option[value*='${themeName}']`)).click();
    }
    else {
        currentTheme = (await goDoPage.firstOptionInThemeDD.getText()).trim();
        await goDoPage.firstOptionInThemeDD.click();
    }
    await goDoPage.actionTitle.click().then(async function () {
        await goDoPage.actionTitle.clear().then(async function () {
            await goDoPage.actionTitle.sendKeys(actionTitle);
        })
    })
    await goDoPage.actionDescription.click().then(async function () {
        await goDoPage.actionDescription.clear().then(async function () {
            await goDoPage.actionDescription.sendKeys(actionDescription);
        })
    })
    await goDoPage.actionDueDate.click().then(async function () {
        await goDoPage.actionDueDate.clear().then(async function () {
            await goDoPage.actionDueDate.sendKeys(date1MonthFromTodayInMomentaFormat);
        })
    })
    //await goDoPage.saveAction.click();
    await browser.executeScript("arguments[0].click()", goDoPage.saveAction);
    await browser.sleep(2000);

    await browser.waitForAngularEnabled(true);
})

Then("action should be created successfully", async function () {
    await browser.waitForAngularEnabled(false);
    await goDoPage.actionTitleOnPage.getText().then(async function (actionTitle) {
        expect(actionTitle.trim(), "The Action title on Action Page is not correct").to.equal(actionTitle);
    })
    await goDoPage.themeNameOnPage.getText().then(async function (actionThemeName) {
        expect(actionThemeName.trim(), "The Action title on Action Page is not correct").to.equal(currentTheme);
    })
    let statusOptions: string[] = []
    await goDoPage.actionStatusDD.click();
    await goDoPage.statusOptions.each(async function (option) {
        statusOptions.push((await option.getText()).trim());
    })
    //console.log(statusOptions);
    expect(statusOptions,"Status Options for Go-do not displayed correctly").to.include.members(['Committed', 'Behind', 'On track', 'Completed', 'Abandoned' ]);
    await browser.sleep(2000);
    if (currentTheme.includes("AutoTheme")) {
        await goDoPage.instructionsTab.click();
        await browser.sleep(2000);
        await goDoPage.instructionsObjectText.getText().then(async function (instructionText) {
            expect(instructionText.trim(), "The content of Instructions object not displayed properly").to.equal(textInInstructionsObject);
        })

        await goDoPage.resultsTab.click();
        await browser.sleep(2000);
        await goDoPage.resultsObjectText.getText().then(async function (resultsText) {
            expect(resultsText.trim(), "The content of Results object not displayed properly").to.equal(textInResultsObject);
        })
    }

    await browser.waitForAngularEnabled(true);
})

Then("the created action should be displayed on Resources page and its details should be correct", async function () {

    await browser.waitForAngularEnabled(false);
    let createdActionCardOnResourcesTab: ElementFinder = element(By.xpath(`//mat-card-title//h2[contains(text(),'${actionTitle}')]`));
    let dueDateInActionCard: ElementFinder = await element(By.xpath(`//h2[contains(text(),'${actionTitle}')]/ancestor::mat-card//span[not(contains(@class,'status'))]`));
    let actionStatusInCard: ElementFinder = await element(By.xpath(`//h2[contains(text(),'${actionTitle}')]/ancestor::mat-card//span[contains(@class,'status')]`));
    let themeNameInCard: ElementFinder = await element(By.xpath(`//h2[contains(text(),'${actionTitle}')]/ancestor::mat-card//div[contains(@class,'pills')]`));
    let viewButtonInCard: ElementFinder = await element(By.xpath(`//h2[contains(text(),'${actionTitle}')]/ancestor::mat-card//button[contains(@name,'View')]`));

    await createdActionCardOnResourcesTab.isPresent().then(async function (isCardPresent) {
        expect(isCardPresent, "Created Action not found on Resources page").to.be.true;
    })
    let expectedDueDateMonth: string = "";
    if (nextMonth != "13") {
        expectedDueDateMonth = monthArray[Number.parseInt(nextMonth) - 1];
    }
    else {
        expectedDueDateMonth = "Jan";
    }
    console.log(expectedDueDateMonth);
    await dueDateInActionCard.getText().then(async function (dueDate) {
        let dueDateDetails: string[] = (dueDate.trim()).split(" ");
        expect(dueDateDetails[1], "Month of Due date in action card is not correct").to.contain(expectedDueDateMonth);
        expect(dueDateDetails[2], "Date of Due date in action card is not correct").to.contain("28");
        if (nextMonth == "13") {
            expect(dueDateDetails[3], "Date of Due date in action card is not correct").to.contain((String)(today.getFullYear() + 1));
        }
        else {
            expect(dueDateDetails[3], "Date of Due date in action card is not correct").to.contain((String)(today.getFullYear()));
        }
    })
    await actionStatusInCard.getText().then(async function (actionStatus) {
        expect(actionStatus.trim(), "The status of action in action card is not correct").to.equal("Committed");
    })
    await themeNameInCard.getText().then(async function (nameOfTheme) {
        expect(nameOfTheme.trim(), "The name of theme in action card is not correct").to.contain(currentTheme);
    })
    await viewButtonInCard.isPresent().then(async function (isViewButtonPresent) {
        expect(isViewButtonPresent, "View Button not displayed in Action card").to.be.true;
    })
    await viewButtonInCard.click();
    await browser.sleep(3000);
    await goDoPage.actionTitleOnPage.getText().then(async function (actionTitle) {
        expect(actionTitle.trim(), "User not taken to action Page on clicking on View Button").to.equal(actionTitle);
    })
    await browser.waitForAngularEnabled(true);
})

Then("the action under Go Do activity should not be displayed as it has not been committed", async function () {
    await browser.waitForAngularEnabled(false);
    let goDoTitle :string = GoDoContentDetails.title;
    //let goDoTitle: string = "Go-Do Title 09-17-2020 13-37"
    //let goDoActivityActionCard: ElementFinder = element(By.xpath(`//mat-card-title[contains(text(),'${GoDoContentDetails.title}')]`));
    let goDoActivityActionCard: ElementFinder = element(By.xpath(`//mat-card-title[contains(text(),'${goDoTitle}')]`));
    await goDoActivityActionCard.isPresent().then(async function (isCardPresent) {
        expect(isCardPresent, "the action under Go Do activity displayed on Actions tab even though not committed").to.be.false;
    })
    await browser.waitForAngularEnabled(true);
})

Then("the details of the Go-Do block displayed to the Participant should be correct", async function () {
    await browser.waitForAngularEnabled(false);
    await goDoPage.goDoActivityTitle.getText().then(async function (title) {
        //console.log(title);
        expect(title.trim(),"The Go Do Title displayed to Participant is not correct").to.contain(GoDoContentDetails.title);
    })
    await goDoPage.goDoActivityDescription.getText().then(async function (description) {
        //console.log(description);
        expect(description.trim(),"The Go Do Description displayed to Participant is not correct").to.contain(GoDoContentDetails.description);
    })
    await goDoPage.goDoActivityInstructions.getText().then(async function (instructions) {
        //console.log(instructions);
        expect(instructions.trim(),"The Go Do Instructions displayed to Participant is not correct").to.contain(GoDoContentDetails.commitmentInstructions);
    })
    await goDoPage.goDoPrefilledDueDate.getAttribute("ng-reflect-model").then(async function (dueDate) {
        //console.log(dueDate);
        expect(dueDate.trim(),"The Go Do Due displayed to Participant is not correct").to.contain(GoDoContentDetails.dueDate);
    })
    await browser.waitForAngularEnabled(true);
})

When("User commits the action in the Go Do activity", async function () {
    await browser.waitForAngularEnabled(false);
    await goDoPage.btnCommitGoDo.click();
    await browser.sleep(2000);
    await browser.waitForAngularEnabled(true);
})

Then("the action under Go Do activity should be displayed as it has been committed", async function () {
    await browser.waitForAngularEnabled(false);
    let goDoTitle :string = GoDoContentDetails.title;
    //let goDoTitle: string = "Go-Do Title 09-17-2020 13-37"
    let goDoActivityActionCard: ElementFinder = element(By.xpath(`//h2[contains(text(),'${goDoTitle}')]`));
    let actionStatusInCard: ElementFinder = await element(By.xpath(`//h2[contains(text(),'${goDoTitle}')]/ancestor::mat-card//span[contains(@class,'status')]`))
    let viewButtonInCard: ElementFinder = await element(By.xpath(`//h2[contains(text(),'${goDoTitle}')]/ancestor::mat-card//button[contains(@name,'View')]`))
    await goDoActivityActionCard.isPresent().then(async function (isCardPresent) {
        expect(isCardPresent, "the action under Go Do activity not displayed on Actions tab even though it has been committed").to.be.true;
    })
    await actionStatusInCard.getText().then(async function (actionStatus) {
        expect(actionStatus.trim(), "The status of committed action is not correct").to.equal("Committed");
    })
    await viewButtonInCard.click();
    await browser.sleep(3000);
    await goDoPage.instructionsTab.click();
    await browser.sleep(2000);
    await goDoPage.instructionsObjectText.getText().then(async function (instructionText) {
        expect(instructionText.trim(), "The content of Instructions object not displayed properly").to.contain(textInInstructionsObject);
    })

    await goDoPage.resultsTab.click();
    await browser.sleep(2000);
    await goDoPage.resultsObjectText.getText().then(async function (resultsText) {
        expect(resultsText.trim(), "The content of Results object not displayed properly").to.contain(textInResultsObject);
    })

    await browser.waitForAngularEnabled(true);

})