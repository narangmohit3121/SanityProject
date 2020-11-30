import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../StepDefinitions/config.json";
import { AdminLandingPageLocate } from "../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
//import { MastheadPage } from "../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../PageObjects/Common";
import { LoginPageLocate } from "../PageObjects/AuthorApp POM/Login/LoginPage";
var support = require("protractor-firefox-support");

import chai = require("chai");
import { join } from 'path';
import fs from 'fs';
import { DriverProvider } from "protractor/built/driverProviders";
import testData from "../testData.json";
import { HelperFunctions } from "./HelperClass";
import { ResourceListingLocate } from "../PageObjects/UserApp POM/Resource/ResourceListingPage";

var expect = chai.expect;
var EC = protractor.ExpectedConditions;
let helper = new HelperFunctions();

let activityAuthorPage = new ActivityAuthoringPageLocate();
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let resourceListing = new ResourceListingLocate();
//let mastheadPage = new MastheadPage();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

Given("User Logs in as admin user", async function () {

    await browser.getCapabilities().then(async function (caps) {
        let browserName: string = caps.get("browserName");
        //console.log(browserName);
        if (browserName === 'internet explorer' || browserName === 'Safari') {
            browser.resetUrl = 'about:blank';
        }
    })
    if (browser.params.prodSanityRun) {
        await browser.get(config.momentaAuthorProd)
    }
    else {
        await browser.get(config.MomentaUserUrl);
    }
    await browser.wait(EC.visibilityOf(admloginpage.txtEmail), 20000).then(null, async function (err) {
        if (err) {
            console.log('Email button not visible on admin login');
        }
    })
    await admloginpage.txtEmail.sendKeys(testData.AdminLogin.Username).then(async function () {
        await browser.wait(EC.visibilityOf(admloginpage.btnNextPwd), 20000).then(null, async function (err) {
            if (err) {
                console.log('User not taken to Password page');
            }
        });
        await admloginpage.btnNextPwd.click();
        await browser.sleep(3000);
    })
    await browser.wait(EC.visibilityOf(admloginpage.txtPassword), 20000).then(null, async function (err) {
        if (err) {
            console.log('Password button not visible on admin login. Clicking on Next again');
            await admloginpage.btnNextPwd.click();
        }
    })
    await admloginpage.txtPassword.sendKeys(testData.AdminLogin.Password).then(async function () {
        await admloginpage.btnLogin.click().then(async function () {
            await browser.sleep(3000);
        })
    })
})

When("User clicks on Sprint7 folder", async function () {
    await commonObjects.folderSprint7.click();
    await browser.sleep(2000);
});

When("User clicks on Sprint14 folder", async function () {
    await commonObjects.folderSprint14.click();
    await browser.sleep(2000);
});

When("User clicks on Sprint20 folder", async function () {
    await commonObjects.folderSprint20.click();
    await browser.sleep(2000);
});

When("User navigates to {string} folder in petronas", async function (path) {
    await helper.navigateToFolder(path);
})

When("User navigates to {string} folder in {string} Client", async function (path, clientName) {
    await helper.navigateToCollectionFolder(clientName, path);
})

When("User saves the changes made to the content", async function () {
    await browser.executeScript("arguments[0].scrollIntoView(false)", activityAuthorPage.editDoneButton);
    await activityAuthorPage.editDoneButton.click().then(async function () {
        await browser.sleep(2000);
    })
});

// When("User Saves Draft and Publishes the Content and then clicks on Exit Editor", async function () {
//     let browserName:string = "";
//     await browser.getCapabilities().then(async function(caps){
//         browserName = caps.get("browserName");
//     })
//     await activityAuthorPage.saveDraftBtn.click().then(async function () {
//         await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
//             await activityAuthorPage.toastMessageSuccess.click().then(async function () {
//                 await browser.sleep(2000);
//                 await activityAuthorPage.publishBtn.click().then(async function () {
//                     await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(null, async function (error) {
//                         if (error) {
//                             return;
//                         }
//                     }).then(async function () {
//                         await activityAuthorPage.toastMessageSuccess.click().then(null, async function (error) {
//                             if (error) {
//                                 return;
//                             }
//                         }).then(async function () {
//                             await browser.sleep(2000);
//                             await activityAuthorPage.exitEditor.click().then(async function () {
//                                 await browser.sleep(2000);
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

When("User Saves Draft and Publishes the Content and then clicks on Exit Editor", async function () {
    let browserName: string = "";
    await browser.getCapabilities().then(async function (caps) {
        browserName = caps.get("browserName");
    })
    await activityAuthorPage.saveDraftBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
            await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                await browser.sleep(2000);
                if (browserName == "Safari" || browserName == "safari") {
                    await browser.executeScript("arguments[0].click()", activityAuthorPage.publishBtn);
                }
                else {
                    await activityAuthorPage.publishBtn.click();
                }
                await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(null, async function (error) {
                    if (error) {
                        return;
                    }
                }).then(async function () {
                    await activityAuthorPage.toastMessageSuccess.click().then(null, async function (error) {
                        if (error) {
                            return;
                        }
                    }).then(async function () {
                        await browser.sleep(2000);
                        await activityAuthorPage.exitEditor.click().then(async function () {
                            await browser.sleep(2000);
                        })
                    })
                })
            })
        })
    })
});

When("User Saves Draft and Publishes the Content but does not click on Exit Editor", async function () {

    await activityAuthorPage.saveDraftBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
            await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                await browser.sleep(2000);
                await activityAuthorPage.publishBtn.click().then(async function () {
                    await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                        await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                            await browser.sleep(2000);

                        })
                    })
                })
            })
        })
    })
});

//----------------------------------------------------------------JOURNEY--------------------------------------
When("User Saves and Publishes the Journey on Journey Config and then Exits the Journey by clicking on Cancel", async function () {
    await commonObjects.btnSaveJourney.click().then(async function () {
        await browser.wait(EC.visibilityOf(commonObjects.toastMessageSaveSuccess), 75 * 1000).then(null, async function (error) {
            if (error) {
                return;
            }
        }).then(async function () {
            await commonObjects.toastMessageSaveSuccess.click().then(null, async function (error) {
                if (error) {
                    return;
                }
            }).then(async function () {
                await browser.sleep(2000);
                await commonObjects.btnPublishJourney.click().then(async function () {
                    await browser.wait(EC.visibilityOf(commonObjects.toastMessagePublishSuccess), 20000).then(null, async function (error) {
                        if (error) {
                            return;
                        }
                    }).then(async function () {
                        await commonObjects.toastMessagePublishSuccess.click().then(null, async function (error) {
                            if (error) {
                                return;
                            }
                        }).then(async function () {
                            await browser.sleep(2000);
                            await commonObjects.btnCancelJourney.click().then(async function () {
                                await browser.sleep(2000);
                            })
                        })
                    })
                })
            })
        })
    })
})

When("User Saves and Publishes the Journey and then Exits the Journey on Journey Flow page", async function () {
    await helper.saveAndPublishAndExitOnJourneyFlow();
})

When("user adds the {string} activity to the {string} module and links {string} activity to the same",
    async function (journeyActivityName, moduleName, activityToBeLinked) {
        await helper.addActivityToModule(moduleName, journeyActivityName, activityToBeLinked);

    })

When("User adds the {string} module to the {string} Journey", async function (moduleName, journeyName) {
    let moduleShortName: string = moduleName + '_ShortName';
    let moduleDescription: string = moduleName + 'Description';
    let points: string = '20';
    await helper.createJourneyModule(moduleName, moduleShortName, moduleDescription, points, journeyName);
});

When("User adds the {string} module to the Journey", async function (moduleName) {
    let moduleShortName: string = moduleName + '_ShortName';
    let moduleDescription: string = moduleName + 'Description';
    let points: string = '20';
    await helper.createJourneyModule(moduleName, moduleShortName, moduleDescription, points);
});

When("User Saves and Publishes the Journey on Journey Flow page and then Exits the Journey", async function () {
    // await browser.waitForAngularEnabled(false);
    // await browser.wait(EC.invisibilityOf(element(By.css("div[class*='dot dot-1']"))),60*1000);
    // await browser.sleep(5000);
    // await helper.saveAndPublishAndExitOnJourneyFlow();
    // await browser.waitForAngularEnabled(true);
    try {
        await helper.saveAndPublishAndExitOnJourneyFlow();
    }
    catch (e) {
        await helper.saveAndPublishAndExitOnJourneyFlow();
    }

})

When("User Saves and Publishes the Journey on Journey Flow page but does not exit", async function () {
    await helper.saveAndPublishOnJourneyFlow();
})

When("user deletes the {string} Journey", async function (journeyName) {
    await element(By.xpath(`//p[contains(text(),'${journeyName}')]/ancestor::mat-card//button[contains(@name,'menu')]`)).click();
    await element(By.css("button[name*='delete']")).click().then(async function () {
        await browser.sleep(1000);
        await element(By.css("button[name*='Delete']")).click();
    })
    await browser.sleep(2000);

})

When("User navigates to the themes tab of the Journey", async function () {
    await resourceListing.journeyConfigTab.click().then(async function () {
        await browser.sleep(2000);
        await resourceListing.tabThemes.click();
        await browser.sleep(2000);
    })
})


//----------------------------------------------PARTICIPANT-----------------------------------------------

When("user navigates to the My Journey page", async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(commonObjects.myJourneyPage), 10 * 1000);
    await browser.sleep(3000);
    await commonObjects.myJourneyPage.click().then(async function () {
        await browser.sleep(5000);
    });
    browser.waitForAngularEnabled(true);
})

When("Participant user navigates to the My Journey page with Mobile App", async function () {
    browser.waitForAngularEnabled(false);
    if (!(browser.params.runInLandscapeMode)) {
        await element(By.css("div:not([class*='hide']) > button[name*='Open the menu']")).click();
    }
    await browser.wait(EC.visibilityOf(commonObjects.myJourneyPage), 10 * 1000);
    await browser.sleep(3000);
    await commonObjects.myJourneyPage.click().then(async function () {
        await browser.sleep(5000);
    });
    browser.waitForAngularEnabled(true);
})

When("User navigates to the {string} module and {string} activity", async function (moduleName, activityName) {
    let moduleXpath: string = `//*[contains(text(),'${moduleName}')]//ancestor::div[contains(@class,'_content')]//button`;
    let activityXpath: string = `//*[contains(text(),'${activityName}')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'start') or contains(@name,'resume') or contains(@name,'revisit')]`
    browser.waitForAngularEnabled(false);
    await element(By.xpath(moduleXpath)).isPresent().then(async function (isModuleViewEnabled) {
        if (isModuleViewEnabled) {
            console.log('Module View is enabled');
            await element(By.xpath(moduleXpath)).click();
            await browser.sleep(5000);
        }
    })
    await element(By.xpath(activityXpath)).click().then(async function () {
        await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 10000).then(async function () {
            //await browser.wait(EC.elementToBeClickable(newLeaderboardPage.participantNaviationMenu), 5000);
        });
    })
    browser.waitForAngularEnabled(true);
});

export class ActitivitySelected {
    static activityName: string;
}


When("User navigates to the {string} activity", async function (activityName) {

    let activityXpath: string = `//*[contains(text(),'${activityName}')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'start') or contains(@name,'resume') or contains(@name,'revisit')]`
    browser.waitForAngularEnabled(false);
    await element(By.xpath(activityXpath)).click().then(async function () {
        await browser.sleep(3000);
        await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 7500).then(async function () {
            //await browser.wait(EC.elementToBeClickable(newLeaderboardPage.participantNaviationMenu), 5000);
        });
    })
    ActitivitySelected.activityName = activityName;

    browser.waitForAngularEnabled(true);
});

When("User clicks on Continue Button", async function () {
    browser.waitForAngularEnabled(false);
    await commonObjects.btnContinue.click().then(async function () {
        await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 5000).then(async function () {
            await browser.sleep(4000);
        })
    });
    browser.waitForAngularEnabled(true);
});


Then("participant user should be able to click on continue button", async function(){
    browser.waitForAngularEnabled(false);
    await commonObjects.btnContinue.click().then(async function () {
        await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 5000).then(async function () {
            await browser.sleep(4000);
        })
    });
    browser.waitForAngularEnabled(true);

})


When("Participant user navigates to the Resources page", async function () {
    browser.waitForAngularEnabled(false);
    await commonObjects.resourcesTabParticipant.click().then(async function () {
        await browser.sleep(3000);
    });
    browser.waitForAngularEnabled(true);
    // browser.waitForAngularEnabled(true);
})

When("Participant user navigates to the Actions tab", async function () {
    browser.waitForAngularEnabled(false);
    await commonObjects.participantActionsTab.click().then(async function () {
        await browser.sleep(3000);
    });
    browser.waitForAngularEnabled(true);
    // browser.waitForAngularEnabled(true);
})