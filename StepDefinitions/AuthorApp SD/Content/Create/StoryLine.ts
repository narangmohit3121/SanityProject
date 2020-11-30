import { When, Then } from "cucumber";
import chai = require('chai');
let path = require("path");
import { StoryLinePageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/StoryLinePage";
import { browser } from "protractor";
import { join } from "path";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { HelperFunctions } from "../../../HelperClass";
var expect = chai.expect;
let storyline = new StoryLinePageLocate();
let activityAuthorPage = new ActivityAuthoringPageLocate();

When('User click on Sprint 21 folder', async function () {
    await storyline.fldSprint21.isDisplayed().then(async function () {
        await storyline.fldSprint21.click();
    })
});

When('User click on Story Line Auto Content', async function () {
    await storyline.cntStoryLineAuto.isDisplayed().then(async function () {
        await storyline.cntStoryLineAuto.click();
    })
});

When('User click on Edit StoryLine', async function () {
    await storyline.btnEditStoryLine.isDisplayed().then(async function () {
        await storyline.btnEditStoryLine.click();
    })
});

When('User click on Browse button of StoryLine window', async function () {
    await storyline.btnBrowse.isDisplayed().then(async function () {
        await storyline.btnBrowse.click();
    })
});

When('User upload StoryLine file and click on Ok', async function () {
    //When('User upload StoryLine file as {string} and click on Ok', async function (string) {
    // await storyline.txtStoryLineZip.isDisplayed().then(async function(){
    //     await storyline.txtStoryLineZip.sendKeys(string).then(async function(){
    //         await browser.sleep(3000);
    //     })
    // })
    //let filePath = "D:/AutoTestFolder/Test_Quiz.zip";
    //let fpath = path.resolve("D:",filePath);
    let filePath: string = join(process.cwd(), 'TestData', 'Test_Quiz.zip')

    await browser.executeScript(`document.querySelector("#file-input-zip").style.opacity = 1`).then(async function () {
        await browser.sleep(1000);

        await storyline.txtStoryLineZip.isPresent().then(async function () {
            await storyline.txtStoryLineZip.sendKeys(filePath).then(async function () {
                await browser.sleep(3000);
            })
        })
    })

    await storyline.btnOkStoryLine.isDisplayed().then(async function () {
        await storyline.btnOkStoryLine.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

let helper = new HelperFunctions();
Then("the file should be uploaded successfully", async function () {
    await storyline.storylineURLInPreview.getText().then(async function (url) {
        expect(url, 'Storyline File not uploaded').to.contain('index_lms.html');
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})

When('User upload StoryLine video and click on Ok', async function () {
    //let filePath = "D:/AutoTestFolder/Test_Video.zip";
    let filePath: string = join(process.cwd(), 'TestData', 'Test_Video.zip')
    //let fpath = path.resolve("D:", filePath);
    await browser.executeScript(`document.querySelector("#file-input-zip").style.opacity = 1`).then(async function () {
        await browser.sleep(1000);
    });
    await storyline.txtStoryLineZip.isDisplayed().then(async function () {
        await storyline.txtStoryLineZip.sendKeys(filePath).then(async function () {
            await browser.sleep(3000);
        })
    })
    await storyline.btnOkStoryLine.isDisplayed().then(async function () {
        await storyline.btnOkStoryLine.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

Then("the video file should be uploaded successfully", async function () {
    await storyline.storylineURLInPreview.getText().then(async function (url) {
        expect(url, 'Storyline File not uploaded').to.contain('index_lms.html');
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await helper.continueWithoutSavingChanges();
        await browser.sleep(2000);
    })
})