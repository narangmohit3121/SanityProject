import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../../config.json";
import { AdminLandingPageLocate } from "../../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import {DownloadBlockLocate} from "../../../../PageObjects/AuthorApp POM/Content/Create/DownloadBlockPage";
//import { MastheadPage } from "../../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";
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
let downloadBlockPage = new DownloadBlockLocate();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

When("User navigates to an activity that has a block of the type Download", async function () {
    await downloadBlockPage.editActivityDownload.click();
})

When('User clicks on Edit Download button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await downloadBlockPage.btnEditDownload.click();
});

let authDownloadBlockRun:boolean = false;

When("user selects the option Upload Momenta Content Doc and uploads a file", async function () {
    let downloadFilePath: string = join(process.cwd(), 'TestData', 'SampleReport.pdf');
    await browser.wait(EC.elementToBeClickable(downloadBlockPage.radioBtnMomentaContentDoc),5000).then(async function(){
        await downloadBlockPage.radioBtnMomentaContentDoc.click().then(async function () {
            await browser.sleep(1500);
            await downloadBlockPage.uploadedFileName.clear().then(async function () {
                await downloadBlockPage.uploadFileInputBox.sendKeys(downloadFilePath).then(async function () {
                    await browser.wait(EC.invisibilityOf(downloadBlockPage.loaderContainer), 45 * 1000);
                })
            })
        })
    })    
});

let latestDownloadHeading: string = `Heading: ${currentDateTime}`;
When("user updates the Heading of Download Block", async function () {
    //browser.waitForAngularEnabled(false);
    await downloadBlockPage.downloadHeading.click().then(async function () {
        await downloadBlockPage.downloadHeading.clear().then(async function () {
            await downloadBlockPage.downloadHeading.sendKeys(latestDownloadHeading);
        })
    });
    //browser.waitForAngularEnabled(true);
})

Then("the file should get uploaded to the Download block", async function () {
    await downloadBlockPage.editActivityDownload.click().then(async function () {
        await downloadBlockPage.btnEditDownload.click().then(async function () {
            await downloadBlockPage.uploadedFileName.getAttribute("ng-reflect-model").then(async function (fileName) {
                expect(fileName).to.contain("SampleReport.pdf");
            })
        })
    });
    await commonObjects.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
});

//let externalLinks:string[] = ["https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf","https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"];
let latestURL: string = "";
let latestURLWebsite = "";
When("user selects the option External Link and provides a Link", async function () {
    
    await browser.wait(EC.elementToBeClickable(downloadBlockPage.radioBtnExternalLink),5000).then(async function(){
        await downloadBlockPage.radioBtnExternalLink.click().then(async function () {
            await browser.sleep(1500);
            await downloadBlockPage.externalDocumentLink.getAttribute("ng-reflect-value").then(async function (currentLink) {
                if (currentLink.includes("adobe")) {
                    latestURL = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
                    latestURLWebsite = "www.w3.org";
                }
                else {
                    latestURL = "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf";
                    latestURLWebsite = "www.adobe.com";
                }
            });
            //browser.waitForAngularEnabled(false);
            await downloadBlockPage.externalDocumentLink.click().then(async function () {
                await downloadBlockPage.externalDocumentLink.clear().then(async function () {
                    await downloadBlockPage.externalDocumentLink.sendKeys(latestURL);
                })
            })
            // browser.waitForAngularEnabled(true);
        })
    });
    authDownloadBlockRun = true;   
    
});

When("User saves the changes made to the Download Block", async function () {
   // browser.waitForAngularEnabled(false);
    await activityAuthorPage.editDoneButton.click();
    //browser.waitForAngularEnabled(true);
});

Then("the Heading should get updated and External Link should get added to the Download block", async function () {
    await downloadBlockPage.editActivityDownload.click().then(async function () {
        await downloadBlockPage.btnEditDownload.click().then(async function () {
            await downloadBlockPage.externalDocumentLink.getAttribute("ng-reflect-value").then(async function (currentLink) {
                expect(currentLink).to.contain(latestURLWebsite);
            });
            await downloadBlockPage.downloadHeading.getAttribute("ng-reflect-model").then(async function (currentHeading) {
                expect(currentHeading).to.contain(latestDownloadHeading);
            });
        })
    });
    await commonObjects.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//------------------------------------------------PARTICIPANT----------------------------------------------------

//let configuredHeading = "TestHeading";
Then("the Download heading should be correct", async function () {
    browser.waitForAngularEnabled(false);
    await downloadBlockPage.downloadTitle.getText().then(async function (heading) {
        console.log(heading);
        expect(heading).to.contain("Heading:");
    })
    browser.waitForAngularEnabled(true);
});

let downloadDirectory: string = join(process.cwd(), 'DownloadFolder');
let downloadedFileName = join(process.cwd(), 'DownloadFolder', 'SampleReport.pdf');

//console.log(downloadDirectory);
//--Below function is to remove all files from the folder before downloading file

    function removeAllFiles(directoryName: string): void {
        console.log("removing all files from Download Folder");
        fs.readdir(directoryName, function (err, files) {
            if (err) throw err;
            for (let file of files) {
                fs.unlink(join(directoryName, file), function (err) {
                    if (err) throw err;
                })
            }
        })
    }

let testDownloadFlag: boolean = true;

When("User clicks on Download button to download the file", { timeout: 120 * 1000 }, async function () {
    try{
        removeAllFiles(downloadDirectory);
    }
    catch(e){
        console.log('Issue in clearing download folder',e);
    }
    
    browser.waitForAngularEnabled(false);
    let currentBrowser: string = (await browser.driver.getCapabilities()).get('browserName');
    if (currentBrowser == "chrome") {
        await browser.sleep(5000).then(async function () {
            await downloadBlockPage.downloadBtn.click().then(async function () {
                console.log("clicked on Download button");
                await browser.sleep(10 * 1000);
            });
        })
    }
    else {
        testDownloadFlag = false;
    }

    browser.waitForAngularEnabled(true);
});
let currentWindowHandle: string = "";
When("User clicks on ExternalURL button to download the file", { timeout: 120 * 1000 }, async function () {
    browser.waitForAngularEnabled(false);
    currentWindowHandle = await browser.getWindowHandle();
    //console.log(currentWindowHandle);
    await browser.sleep(3000).then(async function () {
        await downloadBlockPage.downloadBtn.click().then(async function () {
            console.log("clicked on ExternalURL button");
            await browser.sleep(10 * 1000);
        });
    })
    //console.log(await browser.getWindowHandle());
    browser.waitForAngularEnabled(true);
});

Then("the file should get downloaded", async function () {
    if (testDownloadFlag) {
        let fileDownload: boolean = fs.existsSync(downloadedFileName);
        if (!fileDownload) {
            console.log("Cannot find downloaded file");
        }
        expect(fileDownload).to.be.true;
    }
    else{
        console.log("CucumberConfig not configured to test Download File on Firefox Currently");
    }
});

let configuredURL: string = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

// if((latestURL!="") && authDownloadBlockRun){
//     configuredURL = latestURL;
// }

Then("User should be taken to the URL provided in Download block", async function () {
    browser.waitForAngularEnabled(false);
    let downloadExternalURL: string = "";
    await browser.getAllWindowHandles().then(async function (windowhandles) {
        //console.log(windowhandles);
        windowhandles.forEach(async function (handle) {
            if (handle != currentWindowHandle) {
                await browser.switchTo().window(handle).then(async function () {
                    await browser.sleep(2000);
                    await browser.getCurrentUrl().then(async function (externalURL) {
                        console.log(externalURL);
                        downloadExternalURL = externalURL;
                    })
                })
            }
        })
    });
    await browser.close();
    await browser.switchTo().window(currentWindowHandle);
    expect(downloadExternalURL).to.equal(configuredURL);
    browser.waitForAngularEnabled(false);
})