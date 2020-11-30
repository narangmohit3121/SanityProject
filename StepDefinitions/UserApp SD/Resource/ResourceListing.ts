import { Then, When, Given, After, Before } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
//import { NewLeaderboardPageLocate } from "../../PageObjects/Sprint 15/NewLeaderboardPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import { ResourceListingLocate } from "../../../PageObjects/UserApp POM/Resource/ResourceListingPage";
import { ActivityAuthoringPageLocate } from "../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";

import config from "../../config.json";
import testData from "../../../testData.json";
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
import { join } from "path";
import { ActitivitySelected } from "../../CommonSteps";
import { cmsHelperFunctions } from "../../cmsHelperClass";

var EC = protractor.ExpectedConditions;

let commonObjects = new CommonLocate();
let participantactivitypage = new ParticipantActivityPageLocate();
let resourceListing = new ResourceListingLocate();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let cmsHelper = new cmsHelperFunctions();

let newTheme: string = "";
let themeDisplayName: string = newTheme;
export class NewlyCreatedTheme {
    public static themeName: string;
}
When("User adds a new theme under Themes tab and Saves the same", async function () {
    newTheme = `AutoTheme ${Math.floor(Math.random() * 10000)}`;
    await resourceListing.btnConfigureClient.click().then(async function () {
        let themeTabVisible: boolean = false;
        while (!themeTabVisible) {
            await resourceListing.tabThemes.isDisplayed().then(async function (tabVisible) {
                if (tabVisible) {
                    themeTabVisible = tabVisible;
                    await resourceListing.tabThemes.click().then(async function () {
                        await browser.sleep(2000);
                        await browser.wait(EC.visibilityOf(resourceListing.btnAddTheme), 5000).then(null, async function (err) {
                            await resourceListing.btnAddTheme.isPresent().then(async function (addThemeVisible) {
                                if (!addThemeVisible) {
                                    await resourceListing.tabThemes.click();
                                    await browser.sleep(2000);
                                }
                            })
                        })
                        // await browser.wait(EC.visibilityOf(resourceListing.btnAddTheme), 5000).then(async function () {
                        //     await resourceListing.btnAddTheme.isDisplayed().then(async function (addThemeVisible) {
                        //         if (!addThemeVisible) {
                        //             await resourceListing.tabThemes.click();
                        //         }
                        //     })
                        // });
                    })

                }
                else {
                    await resourceListing.configPopUpNextTab.click();
                    await browser.sleep(2000);
                }
            })
        }
    })
    let imagePath: string = join(process.cwd(), 'TestData', 'Bonfire.jpg');
    await resourceListing.btnAddTheme.click().then(async function () {
        await browser.sleep(2000);
        await resourceListing.themeTitle.sendKeys(newTheme);
        await resourceListing.themeDisplayName.sendKeys(themeDisplayName);
        // await cmsHelper.uploadImage(imagePath,`${newTheme} Title`,`${newTheme} AltText`);
        // await browser.sleep(10000);
        await resourceListing.btnAddThemeInPopUp.click();
        await browser.sleep(2000);
        await resourceListing.btnSaveChangesConfigTab.click();
        await browser.sleep(3000);
        NewlyCreatedTheme.themeName = newTheme;
    })

})

Then("User should be able to add this new theme to the activities", async function () {
    let actArray: ElementFinder[] = await element.all(By.xpath("//p[contains(text(),'Resources ')]/../../.."));
    console.log(actArray.length);
    actArray.forEach(async function (activity) {
        console.log('inside');
        //console.log(activity);
        await activity.click().then(async function () {
            console.log('inside 2');
            await resourceListing.selectThemeDD.click().then(async function () {
                await element(By.xpath(`//span[contains(text(),'${newTheme}')]/preceding-sibling::mat-pseudo-checkbox`));
                let window: ElementFinder = await element(By.xpath("//div[contains(@class,'coe-editor')]/.."));
                browser.switchTo().frame(window);

            })
            await activityAuthorPage.saveDraftBtn.click().then(async function () {
                await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                    await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                        await browser.sleep(2000);
                        await activityAuthorPage.publishBtn.click().then(async function () {
                            await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                                await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                                    await browser.sleep(2000);
                                    await activityAuthorPage.exitEditor.click().then(async function () {
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})

When("User adds the new Theme to {string} activity", async function (activityName) {
    await element(By.xpath(`//p[contains(text(),'${activityName} ')]/../../..`)).click().then(async function () {
        await browser.actions().mouseMove(resourceListing.tglShareable).perform();
        let themesAlreadySelected: number = await resourceListing.cancelThemeBtns.count();
        if (themesAlreadySelected > 0) {
            await resourceListing.cancelThemeBtns.each(async function (cancelTheme) {
                await cancelTheme.click();
            })
        }
        switch (activityName) {
            case "Resources 1": {
                await resourceListing.isTglResourceCMSChecked.getAttribute("ng-reflect-checked").then(async function (isChecked) {
                    if (!(isChecked == "true")) {
                        await resourceListing.tglResourceCMS.click();
                    }
                });
                break;
            }
            case "Resources 2": {
                await resourceListing.isTglResourceCMSChecked.getAttribute("ng-reflect-checked").then(async function (isChecked) {
                    if (isChecked == "true") {
                        await resourceListing.tglResourceCMS.click();
                    }
                });
                break;
            }
            case "Resources 3": {
                await resourceListing.isTglResourceCMSChecked.getAttribute("ng-reflect-checked").then(async function (isChecked) {
                    if (!(isChecked == "true")) {
                        await resourceListing.tglResourceCMS.click();
                    }
                });
                break;
            }
        }
        await resourceListing.selectThemeDD.click().then(async function () {
            let themeDDOpened: boolean = await element(By.css("mat-select[aria-owns]")).isPresent();;
            let counter: number = 0;
            while ((!themeDDOpened) && counter < 3) {
                await resourceListing.selectThemeDD.click();
                counter++;
                themeDDOpened = await element(By.css("mat-select[aria-owns]")).isPresent();
            }
            let themeToBeAdded: ElementFinder = await element(By.xpath(`//span[contains(text(),'${newTheme}')]/preceding-sibling::mat-pseudo-checkbox`));
            // await browser.actions().mouseMove(themeToBeAdded).perform().then(async function(){
            //     await browser.sleep(5000);
            // })
            await browser.executeScript("arguments[0].scrollIntoView(false)", themeToBeAdded).then(async function () {
                await browser.sleep(4000);
            })
            await themeToBeAdded.click().then(null, async function (err) {
                if (err) {
                    console.log('Error while linking Theme to activity: ');
                    // let script:string = `document.querySelector("div[class*='mat-select-panel-wrap'] > div").scrollTop = document.querySelector("div[class*='mat-select-panel-wrap'] > div").scrollHeight`;
                    // await browser.executeScript(script);
                    await browser.executeScript("arguments[0].click()", themeToBeAdded);
                    //await themeToBeAdded.click();
                }
            })
            await browser.executeScript(`arguments[0].style.display = "none"`, resourceListing.overlayElement).then(async function () {

                await browser.sleep(3000);
            });

        })
        await activityAuthorPage.saveDraftBtn.click().then(async function () {
            await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                    await browser.sleep(2000);
                    await activityAuthorPage.publishBtn.click().then(async function () {
                        await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                            await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                                await browser.sleep(2000);
                                await activityAuthorPage.exitEditor.click().then(async function () {
                                    await browser.sleep(2000);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

When("User navigates to the themes tab of the Resource Listing Journey", async function () {
    await commonObjects.automationFolderOnLeftMenu.click().then(async function () {
        await browser.sleep(2000);
        await commonObjects.automationjourneyMohit.click();
        await browser.sleep(2000);
    })
    await resourceListing.journeyConfigTab.click().then(async function () {
        await browser.sleep(2000);
        await resourceListing.tabThemes.click();
        await browser.sleep(2000);
    })
})
let currentScenario: string = "";

When("User enables newly added Theme for actions and Resources", async function () {
    let newThemeCheckBox: ElementFinder = await element(By.xpath(`//div[contains(text(),'${newTheme}')]/ancestor::tr//label[contains(@class,'checkbox')]`));
    let newThemeEnableResources: ElementFinder = await element(By.xpath(`//div[contains(text(),'${newTheme}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Resources')]//label`));
    let newThemeEnableActions: ElementFinder = await element(By.xpath(`//div[contains(text(),'${newTheme}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Actions')]//label`))
    await newThemeEnableResources.isDisplayed().then(async function (newThemeVisible) {
        if (newThemeVisible) {
            // await newThemeCheckBox.click().then(async function () {
            //     await newThemeEnableActions.click().then(async function () {
            //         await newThemeEnableResources.click();
            //         currentScenario = "resources-enabled-actions-enabled";
            //     })
            // })
            await newThemeEnableActions.click().then(async function () {
                await newThemeEnableResources.click();
                currentScenario = "resources-enabled-actions-enabled";
                await browser.sleep(2000);
            })
        }
        else {
            console.log('New Theme is not visible under Themes tab');
            expect(true).to.be.false;
        }
    })
})

Then("the changes made to the theme under Themes tab should get saved", async function () {
    await commonObjects.automationjourneyMohit.click().then(async function () {
        await browser.sleep(2000);
    })
    await resourceListing.journeyConfigTab.click().then(async function () {
        await browser.sleep(2000);
        await resourceListing.tabThemes.click();
        await browser.sleep(2000);
    })
    try {
        let newThemeCheckBoxStatus: ElementFinder = await element(By.xpath(`//div[contains(text(),'${newTheme}')]/ancestor::tr//mat-checkbox[contains(@class,'checkbox')]`));
        let newThemeResourcesTgl: ElementFinder = await element(By.xpath(`//div[contains(text(),'${newTheme}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Resources')]`));
        let newThemeActionsTgl: ElementFinder = await element(By.xpath(`//div[contains(text(),'${newTheme}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Actions')]`));
        // await newThemeCheckBoxStatus.getAttribute("ng-reflect-checked").then(async function (isChecked) {
        //     expect(isChecked).to.equal("true");
        // })
        await newThemeResourcesTgl.getAttribute("ng-reflect-model").then(async function (isChecked) {
            expect(isChecked).to.equal("true");
        })
        await newThemeActionsTgl.getAttribute("ng-reflect-model").then(async function (isChecked) {
            expect(isChecked).to.equal("true");
        })
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await commonObjects.btnCancelJourney.click().then(async function () {
            await browser.sleep(2000);
        })
    }

})

Then("the related resources should be not be displayed to the user as the current page is not the last page", async function () {
    await browser.waitForAngularEnabled(false);
    if (ActitivitySelected.activityName == "ResourceListing 1") {
        let cardCount: number = await resourceListing.relatedCardsOnActivityPage.count();
        console.log('Card Count on 1st Page', cardCount);
        try {
            expect(cardCount).to.equal(0, 'Card Count on the 1st page is greater than 0');
        }
        catch (e) {
            console.log("Assertion Error:", e);
        }

        await commonObjects.btnContinue.click().then(async function () {
            await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 10000).then(async function () {
                await browser.sleep(2000);
            })
        });
    }

    await browser.waitForAngularEnabled(true);
})

Then("the related resources should be displayed to the user on the as this is the last activity page", async function () {
    await browser.waitForAngularEnabled(false);
    //console.log("Participant Activity", ActitivitySelected.activityName);
    if (ActitivitySelected.activityName == "ResourceListing 1") {
        await resourceListing.textInContentActivity.getText().then(async function (activityText) {
            let result: boolean = activityText.includes("Related Resources should be displayed");
            if (!result) {
                try {
                    expect(true, "Test case will fail as User not taken to the last page on the activity").to.be.false;
                }
                catch (e) {
                    console.log(e);
                }

            }
        })
    }
    let cardCount: number = await resourceListing.relatedCardsOnActivityPage.count();
    expect(cardCount).to.be.greaterThan(0, 'Related content not present on activity last page');

    //let relatedResTypeArray: String[] = [];
    let relatedActivityNames: String[] = [];
    //newTheme = '123456';
    await resourceListing.participantActRelatedResTypes.each(async function (resourceType) {
        await resourceType.getText().then(async function (type) {
            //relatedResTypeArray.push(type);
            expect(type).to.equal('Action');
        })
    })
    await resourceListing.participantActRelatedActNames.each(async function (activityName) {
        await activityName.getText().then(async function (name) {
            expect(name).to.not.equal(ActitivitySelected.activityName, "Related activities include current activity");
            relatedActivityNames.push(name);
        })
    })
    // await resourceListing.relatedActThemeTags.each(async function (themeTag) {
    //     await themeTag.getText().then(async function (tag) {
    //         expect(tag).to.equal(`${newTheme}`);
    //     })
    // })
    let tagCount: number = await element.all(By.xpath(`//mat-card//mat-basic-chip//span[contains(text(),'${newTheme}')]`)).count();
    if (!resourceTglCMSDisabled) {
        console.log("Positive Flow Resource Listing");
        try {
            expect(tagCount, 'Tag is not displayed under each of the card').to.equal(cardCount);
        }
        catch (e) {
            console.log('Assertion error');
        }
    }

    // console.log('Actions', relatedActivityNames);

    try {
        switch (currentScenario) {
            case "resources-enabled-actions-enabled": {
                expect(relatedActivityNames).to.include.members(['Resources 2', 'Resources 3']);
                break;
            }
            case "resources-enabled-actions-disabled": {
                expect(relatedActivityNames).to.not.include.members(['Resources 2']);
                expect(relatedActivityNames).to.include.members(['Resources 3']);
                break;
            }
            case "resources-disabled-actions-enabled": {
                expect(relatedActivityNames).to.not.include.members(['Resources 3']);
                expect(relatedActivityNames).to.include.members(['Resources 2']);
                break;
            }
        }

    }
    catch (e) {
        console.log("Assertion Error: Related Activities not displayed on Actions Page correctly");
    }
    await browser.waitForAngularEnabled(true);
})



Then("the new theme should be visible under the dropdown and the activities related to the theme should be displayed", async function () {
    await browser.waitForAngularEnabled(false);
    // await commonObjects.resourcesTabParticipant.click().then(async function () {
    //     await browser.sleep(2000);
    // })
    await browser.wait(EC.visibilityOf(resourceListing.resourcesTabSelectThemeDD), 5000).then(null, function (error) {
        if (error) {
            console.log('Navigation to Resources Tab failed');
            expect(true).to.be.false;
        }
    })
    await resourceListing.resourcesTabSelectThemeDD.click().then(async function () {
        //newTheme = '123456';
        await element(By.xpath(`//option[contains(text(),'${newTheme}')]`)).isPresent().then(async function (newThemeVisible) {
            if (!newThemeVisible) {
                console.log('New Theme not visible under Resources tab')
            }
            expect(newThemeVisible).to.be.true;
            await element(By.xpath(`//option[contains(text(),'${newTheme}')]`)).click();
        })
    })
    // let relatedResTypeArray: String[] = [];
    let relatedActivityNames: String[] = [];
    await resourceListing.participantActRelatedResTypes.each(async function (resourceType) {
        await resourceType.getText().then(async function (type) {
            expect(type).to.equal('Action');
            //relatedResTypeArray.push(type);
        })
    })
    await resourceListing.participantActRelatedActNames.each(async function (activityName) {
        await activityName.getText().then(async function (name) {
            relatedActivityNames.push(name);
        })
    })
    // await resourceListing.relatedActThemeTags.each(async function (themeTag) {
    //     await themeTag.getText().then(async function (tag) {
    //         expect(tag).to.equal(`${newTheme}`);
    //     })
    // })
    let tagCount: number = await element.all(By.xpath(`//mat-card//mat-basic-chip//span[contains(text(),'${newTheme}')]`)).count();
    try {
        expect(tagCount, "New Theme tag not present in cards").to.be.greaterThan(0);
    }
    catch (e) {
        console.log("Assertion Error: New Theme tag not present in cards");
    }

    //console.log('New theme:', relatedActivityNames);
    try {
        expect(relatedActivityNames).to.include.members(['Resources 1', 'Resources 3']);
        expect(relatedActivityNames).to.not.include.members(['Resources 2']);
    }
    catch (e) {
        console.log("Assertion Error: All related Activities to the New theme not displayed on Resources Tab");
    }
    await browser.waitForAngularEnabled(true);

})

//--------------------------------------------------NEGATIVE FLOW--------------------------------------
let resourceTglCMSDisabled: boolean = false;
let currentThemeInActivitiy: string = "";
When("User disables the Resources toggle of {string} activity", async function (activityName) {
    resourceTglCMSDisabled = true;
    await element(By.xpath(`//p[contains(text(),'${activityName} ')]/../../..`)).click().then(async function () {
        await browser.actions().mouseMove(resourceListing.tglShareable).perform();
        await element(By.xpath("//mat-chip")).getText().then(async function (currentTheme) {
            currentThemeInActivitiy = currentTheme.split(/\s/)[1];
        })
        await resourceListing.isTglResourceCMSChecked.getAttribute("ng-reflect-checked").then(async function (isChecked) {
            if ((isChecked == "true")) {
                await resourceListing.tglResourceCMS.click();
            }
        })
        await activityAuthorPage.saveDraftBtn.click().then(async function () {
            await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                    await browser.sleep(2000);
                    await activityAuthorPage.publishBtn.click().then(async function () {
                        await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                            await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                                await browser.sleep(2000);
                                await activityAuthorPage.exitEditor.click().then(async function () {
                                    await browser.sleep(2000);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

Then("the {string} activity should not be displayed among activities related to the theme", async function (disabledActivityName) {

    await browser.waitForAngularEnabled(false);
    // await commonObjects.resourcesTabParticipant.click().then(async function () {
    //     await browser.sleep(2000).then(async function () {           
    //     })
    // })
    await browser.wait(EC.visibilityOf(resourceListing.resourcesTabSelectThemeDD), 5000).then(null, function (error) {
        if (error) {
            console.log('Navigation to Resources Tab failed');
            expect(true).to.be.false;
        }
    })
    await resourceListing.resourcesTabSelectThemeDD.click().then(async function () {
        //newTheme = '123456';
        await element(By.xpath(`//option[contains(text(),'${currentThemeInActivitiy}')]`)).isPresent().then(async function (newThemeVisible) {
            if (!newThemeVisible) {
                console.log('New Theme not visible under Resources tab')
            }
            expect(newThemeVisible).to.be.true;
            await element(By.xpath(`//option[contains(text(),'${currentThemeInActivitiy}')]`)).click();
        })
    })
    // let relatedResTypeArray: String[] = [];
    let relatedActivityNames: String[] = [];
    await resourceListing.participantActRelatedActNames.each(async function (activityName) {
        await activityName.getText().then(async function (name) {
            relatedActivityNames.push(name);
        })
    })

    try {
        expect(relatedActivityNames).to.not.include.members(['Resources 1']);
    }
    catch (e) {
        console.log("Assertion Error: Activity with Resource toggle disabled in CMS is displayed to the user");
    }
    await browser.waitForAngularEnabled(true);
})
//----------------------------------------------------------SCENARIO 4--------------------------------------------------------

When("User enables the Resources toggle of {string} activity", async function (activityName) {
    resourceTglCMSDisabled = true;
    await element(By.xpath(`//p[contains(text(),'${activityName} ')]/../../..`)).click().then(async function () {
        await browser.actions().mouseMove(resourceListing.tglShareable).perform();
        await element(By.xpath("//mat-chip")).getText().then(async function (currentTheme) {
            currentThemeInActivitiy = currentTheme.split(/\s/)[1];
        })
        await resourceListing.isTglResourceCMSChecked.getAttribute("ng-reflect-checked").then(async function (isChecked) {
            if ((isChecked == "false")) {
                await resourceListing.tglResourceCMS.click();
            }
        })
        await activityAuthorPage.saveDraftBtn.click().then(async function () {
            await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                    await browser.sleep(2000);
                    await activityAuthorPage.publishBtn.click().then(async function () {
                        await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                            await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                                await browser.sleep(2000);
                                await activityAuthorPage.exitEditor.click().then(async function () {
                                    await browser.sleep(2000);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

When("User disables the Actions toggle but enables the Resources toggle", async function () {

    let currentThemeCheckBoxStatus: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-checkbox[contains(@class,'checkbox')]`));
    let currentThemeResourcesTgl: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Resources')]`));
    let currentThemeActionsTgl: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Actions')]`));
    let currentThemeCheckBox: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//label[contains(@class,'checkbox')]`));
    let currentThemeEnableResources: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Resources')]//label`));
    let currentThemeEnableActions: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Actions')]//label`))

    // await currentThemeCheckBoxStatus.getAttribute("ng-reflect-checked").then(async function (isChecked) {
    //     if (isChecked == "false") {
    //         await currentThemeCheckBox.click();
    //     }
    // })

    await currentThemeResourcesTgl.getAttribute("ng-reflect-model").then(async function (isChecked) {
        if (isChecked == "false") {
            await currentThemeEnableResources.click();
        }
    })
    await currentThemeActionsTgl.getAttribute("ng-reflect-model").then(async function (isChecked) {
        if (isChecked == "true") {
            await currentThemeEnableActions.click();
        }
    })
    currentScenario = "resources-enabled-actions-disabled";

})

Then("the activities related to the current theme should be displayed", async function () {
    await browser.waitForAngularEnabled(false);

    await browser.wait(EC.visibilityOf(resourceListing.resourcesTabSelectThemeDD), 5000).then(null, function (error) {
        if (error) {
            console.log('Navigation to Resources Tab failed');
            expect(true).to.be.false;
        }
    })
    await resourceListing.resourcesTabSelectThemeDD.click().then(async function () {
        //newTheme = '123456';
        await element(By.xpath(`//option[contains(text(),'${currentThemeInActivitiy}')]`)).isPresent().then(async function (currentThemeVisible) {
            if (!currentThemeVisible) {
                console.log('Theme used in activity not visible under Resources tab')
            }
            expect(currentThemeVisible).to.be.true;
            await element(By.xpath(`//option[contains(text(),'${currentThemeInActivitiy}')]`)).click();
        })
    })
    // let relatedResTypeArray: String[] = [];
    let relatedActivityNames: String[] = [];
    await resourceListing.participantActRelatedResTypes.each(async function (resourceType) {
        await resourceType.getText().then(async function (type) {
            expect(type).to.equal('Action');
            //relatedResTypeArray.push(type);
        })
    })
    await resourceListing.participantActRelatedActNames.each(async function (activityName) {
        await activityName.getText().then(async function (name) {
            relatedActivityNames.push(name);
        })
    })
    // await resourceListing.relatedActThemeTags.each(async function (themeTag) {
    //     await themeTag.getText().then(async function (tag) {
    //         expect(tag).to.equal(`${newTheme}`);
    //     })
    // })
    let tagCount: number = await element.all(By.xpath(`//mat-card//mat-basic-chip//span[contains(text(),'${currentThemeInActivitiy}')]`)).count();
    try {
        expect(tagCount, "Theme tag not present in cards").to.be.greaterThan(0);
    }
    catch (e) {
        console.log("Assertion Error: Theme tag not present in cards");
    }


    try {
        //console.log('Resources Tab:', relatedActivityNames);
        expect(relatedActivityNames).to.include.members(['Resources 1', 'Resources 3']);
    }
    catch (e) {
        console.log("Assertion Error: All related Activities to the theme not displayed on Resources Tab");
    }
    await browser.waitForAngularEnabled(true);

})

//----------------------------------------------------------SCENARIO 5----------------------------------------------------------

When("User enables the Actions toggle but disables the Resources toggle", async function () {

    let currentThemeCheckBoxStatus: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-checkbox[contains(@class,'checkbox')]`));
    let currentThemeResourcesTgl: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Resources')]`));
    let currentThemeActionsTgl: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Actions')]`));
    let currentThemeCheckBox: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//label[contains(@class,'checkbox')]`));
    let currentThemeEnableResources: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Resources')]//label`));
    let currentThemeEnableActions: ElementFinder = await element(By.xpath(`//div[contains(text(),'${currentThemeInActivitiy}')]/ancestor::tr//mat-slide-toggle[contains(@name,'Actions')]//label`))

    // await currentThemeCheckBoxStatus.getAttribute("ng-reflect-checked").then(async function (isChecked) {
    //     if (isChecked == "false") {
    //         await currentThemeCheckBox.click();
    //     }
    // })

    await currentThemeResourcesTgl.getAttribute("ng-reflect-model").then(async function (isChecked) {
        if (isChecked == "true") {
            await currentThemeEnableResources.click();
        }
    })
    await currentThemeActionsTgl.getAttribute("ng-reflect-model").then(async function (isChecked) {
        if (isChecked == "false") {
            await currentThemeEnableActions.click();
        }
    })
    currentScenario = "resources-disabled-actions-enabled";
})

Then("the activities related to the current theme should not be displayed", async function () {
    await browser.waitForAngularEnabled(false);

    await browser.wait(EC.visibilityOf(resourceListing.resourcesTabSelectThemeDD), 5000).then(null, function (error) {
        if (error) {
            console.log('Navigation to Resources Tab failed');
            expect(true).to.be.false;
        }
    })
    await resourceListing.resourcesTabSelectThemeDD.click().then(async function () {
        await element(By.xpath(`//option[contains(text(),'${currentThemeInActivitiy}')]`)).isPresent().then(async function (currentThemePresent) {
            if (currentThemePresent) {
                await element(By.xpath(`//option[contains(text(),'${currentThemeInActivitiy}')]`)).isDisplayed().then(async function (currentThemeVisible) {
                    if (currentThemeVisible) {
                        expect(false, "Theme Displayed in Resources tab even after disabling under Journey Themes").to.be.true;
                    }
                })
            }
        })
    })
})

//------------------------------------------------CLEAN UP--------------------------------------------------------


Then("User should delete the theme created for testing Resources", async function(){
    await browser.sleep(5*1000);
    if (newTheme.includes("AutoTheme")) {
        await cmsHelper.deleteTheme(newTheme);
    }

})