import { browser, By, element, ElementFinder, protractor, WebElement, ProtractorExpectedConditions } from "protractor";

import { CommonLocate } from "../PageObjects/Common";
import { JourneySanityPageObjects } from "../PageObjects/SanityProjectPages/JourneySanityPage";
import { AuthorSanityPage } from "../PageObjects/SanityProjectPages/AuthorSanityPage";
import { ActivityAuthoringPageLocate } from "../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CreateUserPageLocate } from "../PageObjects/AuthorApp POM/Cohort-Users/CretaUserPage";
import { AuthoringUserListingPageLocate } from "../PageObjects/AuthorApp POM/Cohort-Users/AuthoringUserListing";

let randomdigit = Math.floor(Math.random() * 100000);


export class HelperFunctions {

    createUserPage = new CreateUserPageLocate();
    authoringuserlisting = new AuthoringUserListingPageLocate();
    activityAuthorPage = new ActivityAuthoringPageLocate();
    commonObjects = new CommonLocate();
    journeyPageObjects = new JourneySanityPageObjects();
    authorSanityPage = new AuthorSanityPage();
    ExpectedConditions: ProtractorExpectedConditions = protractor.ExpectedConditions;
    async navigateToFolder(path: string): Promise<void> {
        let currentlyAtPetronas: boolean = await element(By.xpath("//div[contains(text(),'petronas') and contains(@class,'active')]")).isPresent();
        if (!currentlyAtPetronas) {
            await element(By.xpath("//mat-nested-tree-node//div[contains(text(),'petronas')]")).click();
        }
        let pathArray: string[] = [];
        if (path.includes('/')) {
            pathArray = path.split('/');
        }
        if (path.includes('\\')) {
            pathArray = path.split('\\');
        }
        for (let folder of pathArray) {
            await element(By.xpath(`//p[contains(text(),'${folder}')]/../../..`)).click();
            await browser.sleep(1000);
        }

        // for(let i:number = 0;i<pathArray.length;i++){
        //     await element(By.xpath(`//p[contains(text(),'${pathArray[i]}')]/../../..`)).click();
        //    await browser.sleep(1000)
        // }
    }
    async navigateToCollectionFolder(collectionName: string, path: string): Promise<void> {
        await element(By.xpath(`//a//*[contains(text(),'${collectionName}')]`)).click();
        let pathArray: string[] = [];
        if (path.includes('/')) {
            pathArray = path.split('/');
        }
        if (path.includes('\\')) {
            pathArray = path.split('\\');
        }
        for (let folder of pathArray) {
            await element(By.xpath(`//p[contains(text(),'${folder}')]/../../..`)).click();
            await browser.sleep(1000);
        }
    }

    async createJourneyModule(moduleName: string, moduleShortName: string, description?: string, points?: string, journeyName?: string, journeyPath?: string): Promise<void> {
        if (!(journeyPath === undefined)) {
            await this.navigateToFolder(journeyPath);
        }
        if (!(journeyName === undefined)) {
            await element(By.xpath(`//p[contains(text(),'${journeyName}')]/../../..`)).click();
        }

        await this.commonObjects.addModuleToJourney.click();
        await browser.sleep(2000);

        await this.commonObjects.journeyModuleTitle.click();
        await this.commonObjects.journeyModuleTitle.clear();
        await this.commonObjects.journeyModuleTitle.sendKeys(moduleName);

        await this.commonObjects.journeyModuleShortName.click();
        await this.commonObjects.journeyModuleShortName.clear();
        await this.commonObjects.journeyModuleShortName.sendKeys(moduleShortName);
        if (!(description === undefined)) {
            await this.commonObjects.journeyModuleDescription.sendKeys(description);
        }

        // if (!(points === undefined)) {
        //     await this.commonObjects.journeyModulePoints.sendKeys(points);
        // }
        await this.commonObjects.saveModule.click();
    }

    async createJourneyStage(stageName: string, stageShortName: string, stageDescription?: string, journeyName?: string, journeyPath?: string): Promise<void> {
        if (!(journeyPath === undefined)) {
            await this.navigateToFolder(journeyPath);
        }
        if (!(journeyName === undefined)) {
            await element(By.xpath(`//p[contains(text(),'${journeyName}')]/../../..`)).click();
        }

        await this.commonObjects.addStageToJourney.click();
        await browser.sleep(2000);

        await this.commonObjects.stageTitle.click();
        await this.commonObjects.stageTitle.clear();
        await this.commonObjects.stageTitle.sendKeys(stageName);

        await this.commonObjects.stageShortName.click();
        await this.commonObjects.stageShortName.clear();
        await this.commonObjects.stageShortName.sendKeys(stageShortName);
        if (!(stageDescription === undefined)) {
            await this.commonObjects.journeyModuleDescription.sendKeys(stageDescription);
        }

        // if (!(points === undefined)) {
        //     await this.commonObjects.journeyModulePoints.sendKeys(points);
        // }
        await this.commonObjects.btnCreateStage.click();
    }

    async saveAndPublishAndExitOnJourneyFlow(): Promise<void> {
        let EC = this.ExpectedConditions;
        let commonPage = this.commonObjects;
        await commonPage.journeyFlowSaveBtn.click().then(async function () {
            await browser.wait(EC.visibilityOf(commonPage.toastMessageSaveSuccess), 60000).then(async function () {
                await commonPage.toastMessageSaveSuccess.click().then(async function () {
                    await browser.sleep(2000);
                    await commonPage.journeyFlowPublishBtn.click().then(async function () {
                        await browser.wait(EC.visibilityOf(commonPage.toastMessagePublishSuccess), 20000).then(async function () {
                            await commonPage.toastMessagePublishSuccess.click().then(async function () {
                                await browser.sleep(2000);
                                await commonPage.journeyFlowExithBtn.click().then(async function () {
                                    await browser.sleep(2000);
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    async saveAndPublishOnJourneyFlow(): Promise<void> {
        let EC = this.ExpectedConditions;
        let commonPage = this.commonObjects;
        await commonPage.journeyFlowSaveBtn.click().then(async function () {
            await browser.wait(EC.visibilityOf(commonPage.toastMessageSaveSuccess), 60000).then(null, async function (err) {
                if (err) {
                    return;
                }
            }).then(async function () {
                await commonPage.toastMessageSaveSuccess.click().then(null, async function (err) {
                    if (err) {
                        return;
                    }
                }).then(async function () {
                    await browser.sleep(2000);
                    await commonPage.journeyFlowPublishBtn.click().then(async function () {
                        await browser.wait(EC.visibilityOf(commonPage.toastMessagePublishSuccess), 20000).then(null, async function (err) {
                            if (err) {
                                return;
                            }
                        }).then(async function () {
                            await commonPage.toastMessagePublishSuccess.click().then(null, async function (err) {
                                if (err) {
                                    return;
                                }
                            })
                        })
                    })
                })
            })
        })
    }

    async saveAndPublishOnDiscussions(): Promise<void> {
        let EC = this.ExpectedConditions;
        let commonPage = this.commonObjects;
        await commonPage.journeyFlowSaveBtn.click().then(async function(){
            await browser.wait(EC.visibilityOf(commonPage.toastMessageSaveSuccessDiscussion), 60000).then(async function(){
                await commonPage.toastMessageSaveSuccessDiscussion.click().then(async function () {
                    await browser.sleep(2000);
                    await commonPage.journeyFlowPublishBtn.click().then(async function(){
                        await browser.wait(EC.visibilityOf(commonPage.toastMessagePublishSuccess), 20000).then(async function(){
                            await commonPage.toastMessagePublishSuccess.click().then(async function(){
                                await browser.sleep(2000);
                            })
                        })
                    })
                })
            })
        })
    }

    async saveAndPublishAndCancelOnRegistration(): Promise<void> {
        let EC = this.ExpectedConditions;
        let commonPage = this.commonObjects;
        await commonPage.btnSaveOnRegistrationPage.click().then(async function () {
            await browser.wait(EC.visibilityOf(commonPage.toastMessageSaveSuccess), 60000).then(async function () {
                await commonPage.toastMessageSaveSuccess.click().then(async function () {
                    await browser.sleep(2000);
                    await commonPage.btnPublishOnRegistrationPage.click().then(async function () {
                        await browser.wait(EC.visibilityOf(commonPage.toastMessageSaveSuccess), 20000).then(async function () {
                            await commonPage.toastMessageSaveSuccess.click().then(async function () {
                                await browser.sleep(2000);
                                await commonPage.btnCancelOnRegistrationPage.click().then(async function () {
                                    await browser.sleep(2000);
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    async deleteActivityFromModule(moduleName: string, activityName: string): Promise<void> {
        let commonPage = this.commonObjects;
        let isModuleExpanded: boolean = await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel[contains(@class,'expanded')]`)).isPresent();
        if (!isModuleExpanded) {
            await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//mat-expansion-panel-header`)).click();
        }
        await element(By.xpath(`//p[contains(text(),'${activityName}')]/ancestor::div[contains(@class,'journey-margin')]//button[contains(@name,'menu')]`)).click();
        await commonPage.btnDelete.click().then(async function(){
            await browser.sleep(4000);
        })
    }

    async addActivityToModule(moduleName: string, activityName: string, activityToBeLinked: string, activityDescription?: string): Promise<void> {
        let commonPage = this.commonObjects;
        await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//div[contains(@class,'module')]//button[@name='menu']`)).click();
        await commonPage.btnAddActivityToModule.click();
        await commonPage.ddActivityType.click();
        await commonPage.activityTypeContentObject.click();
        await browser.sleep(1000);
        await commonPage.activityTitle.sendKeys(activityName);
        if (!(activityDescription === undefined)) {
            await commonPage.activityDescription.sendKeys(activityDescription);
        }
        await commonPage.btnSave_AddActivity.click();
        let isModuleExpanded: boolean = await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel[contains(@class,'expanded')]`)).isPresent();
        if (!isModuleExpanded) {
            await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//mat-expansion-panel-header`)).click();
        }
        await element(By.xpath(`//p[contains(text(),'${activityName}')]/ancestor::div[contains(@class,'journey-margin')]//button[contains(@name,'menu')]`)).click();
        await browser.sleep(1000);
        await commonPage.btnLinkActivityInActivityMenu.click();
        await browser.sleep(2000);
        await commonPage.clientCollectionTab.click();
        await browser.sleep(2000);
        try{
            await commonPage.linkActivityPetronasTab.click();
        }
        catch(e){
            await commonPage.linkActivityPetronasTab2.click();
        }
        await browser.sleep(2000);
        await commonPage.searchActivityToBeLinkedInput.click()
        await commonPage.searchActivityToBeLinkedInput.clear();
        await commonPage.searchActivityToBeLinkedInput.sendKeys(activityToBeLinked);

        await commonPage.searchIcon.click();
        await element(By.xpath(`//span[contains(text(),'${activityToBeLinked}')]/ancestor::div[contains(@class,'journey-list')]//button[contains(@name,'select')]`)).click();
    }

    async addActivitywithoutLink(moduleName: string, activityName: string, activityType: string, activityDescription?: string): Promise<void> {
        let commonPage = this.commonObjects;
        await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//div[contains(@class,'module')]//button[@name='menu']`)).click();
        await commonPage.btnAddActivityToModule.click();
        await commonPage.ddActivityType.click();
        await element(By.css("select[name*='Activity Type'] option[value*='"+activityType+"']")).click();
        await commonPage.activityTitle.sendKeys(activityName);
        if (!(activityDescription === undefined)) {
            await commonPage.activityDescription.sendKeys(activityDescription);
        }
        await commonPage.btnSave_AddActivity.click();
        let isModuleExpanded: boolean = await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel[contains(@class,'expanded')]`)).isPresent();
        if (!isModuleExpanded) {
            await element(By.xpath(`//p[contains(text(),'${moduleName}')]/ancestor::mat-expansion-panel//mat-expansion-panel-header`)).click();
        }
    }

    async addModuleToStage(stageName: string, moduleName: string, moduleShortName: string, moduleDescription?: string): Promise<void> {
        await element(By.xpath(`//*[contains(text(),'${stageName}')]/ancestor::mat-expansion-panel//div[contains(@class,'journey')]//button[@name='menu']`)).click();
        await this.commonObjects.addModuleTostage.click();
        await this.commonObjects.journeyModuleTitle.click();
        await this.commonObjects.journeyModuleTitle.clear();
        await this.commonObjects.journeyModuleTitle.sendKeys(moduleName);

        await this.commonObjects.journeyModuleShortName.click();
        await this.commonObjects.journeyModuleShortName.clear();
        await this.commonObjects.journeyModuleShortName.sendKeys(moduleShortName);
        if (!(moduleDescription === undefined)) {
            await this.commonObjects.journeyModuleDescription.sendKeys(moduleDescription);
        }

        // if (!(points === undefined)) {
        //     await this.commonObjects.journeyModulePoints.sendKeys(points);
        // }
        await this.commonObjects.saveModule.click();

    }
    async setShowFullJourneyNameSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusShowFullJourneyName.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglShowFullJourneyName.click();
                await browser.sleep(1000);
            }
        })
    }
    async setDirectLaunchActivitySetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusDirectLaunchActivity.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglDirectLaunchActivity.click();
                await browser.sleep(1000);
            }
        })
    }
    async setSideMenuCollapsedSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusSideMenuCollapsed.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglSideMenuCollapsed.click();
                await browser.sleep(1000);
            }
        })
    }
    async setUseAzureMediaPlayerSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusUseAzurePlayer.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglUseAzurePlayer.click();
                await browser.sleep(1000);
            }
        })
    }

    async setSkipJourneyDetailScreenSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusSkipJourneyDetailScreen.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglSkipJourneyDetailScreen.click();
                await browser.sleep(1000);
            }
        })
    }

    async setShowLeaderBoardDiveBackInSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusShowLeaderboardMetrics.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                //await journeyPage.tglShowLeaderboardMetrics.click();
                await browser.executeScript("arguments[0].click()", journeyPage.tglShowLeaderboardMetrics);
                await browser.sleep(1000);
            }
        })
    }

    async setShowCompletedActivitiesSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusShowCompletedActivitiesSection.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglShowCompletedActivitiesSection.click();
                await browser.sleep(1000);
            }
        })
    }

    async setMyCoachingSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtJourneyConfigNavigationTab: boolean = await journeyPage.tglMyCoaching.isPresent();
        if (!currentlyAtJourneyConfigNavigationTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.navigationTabJourneyConfig.click();
        }
        await journeyPage.tglStatusMyCoaching.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglMyCoaching.click();
                await browser.sleep(1000);
            }
        })
    }

    async setHasEntryPageSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusHasEntryPage.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglHasEntryPage.click();
                await browser.sleep(1000);
            }
        })
    }

    async setDisableLocksSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusDisableLocks.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglDisableLocks.click();
                await browser.sleep(1000);
            }
        })
    }

    async setDisableNotificationsSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusDisableNotifications.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglDisableNotifications.click();
                await browser.sleep(1000);
            }
        })
    }
    async setDisableVideoForwardingSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusDisableVideoForwarding.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglDisableVideoForwarding.click();
                await browser.sleep(1000);
            }
        })
    }

    async setHideLeaderBoardSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusHideLeaderboard.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglHideLeaderboard.click();
                await browser.sleep(1000);
            }
        })
    }

    async setContentSharingSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusAllowContentSharing.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglAllowContentSharing.click();
                await browser.sleep(1000);
            }
        })
    }

    async setShowSupportLinkAsPopUpSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusShowSupportLinkAsPopUp.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglShowSupportLinkAsPopUp.click();
                await browser.sleep(1000);
            }
        })
    }
    async setShowSubMenuNavigationForJourneySetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusShowSubMenuNavigationInJourney.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglShowSubMenuNavigationInJourney.click();
                await browser.sleep(1000);
            }
        })
    }

    async setShowCompletionStatusSetting(setting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let currentlyAtConfigGeneralTab: boolean = await journeyPage.tglDisableVideoForwarding.isPresent();
        if (!currentlyAtConfigGeneralTab) {
            await journeyPage.journeyConfigTab.click();
            await journeyPage.generalTabJourneyConfig.click();
        }
        await journeyPage.tglStatusShowCompletionStatusOnModuleBar.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != setting.toString()) {
                await journeyPage.tglShowCompletionStatusOnModuleBar.click();
                await browser.sleep(1000);
            }
        })
    }

    async setAllJourneyToggles(showFullJourneyNameSetting: boolean, directLaunchActivitySetting: boolean,
        sideMenuCollapsedSetting: boolean, useAzureMediaPlayerSetting: boolean, skipJourneyDetailScreenSetting: boolean,
        showLeaderBoardDiveBackInSetting: boolean, showCompletedActivitiesSetting: boolean, hasEntryPageSetting: boolean,
        disableLocksSetting: boolean, disableNotificationsSetting: boolean,
        disableVideoForwardingSetting: boolean, hideLeaderBoardSetting: boolean,
        contentSharingSetting: boolean, showSupportLinkAsPopUpSetting: boolean,
        showSubMenuNavigationForJourneySetting: boolean, showCompletionStatusSetting: boolean): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        await journeyPage.journeyConfigTab.click();
        await journeyPage.generalTabJourneyConfig.click();

        await journeyPage.tglStatusShowFullJourneyName.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != showFullJourneyNameSetting.toString()) {
                await journeyPage.tglShowFullJourneyName.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusDirectLaunchActivity.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != directLaunchActivitySetting.toString()) {
                await journeyPage.tglDirectLaunchActivity.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusSideMenuCollapsed.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != sideMenuCollapsedSetting.toString()) {
                await journeyPage.tglSideMenuCollapsed.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusUseAzurePlayer.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != useAzureMediaPlayerSetting.toString()) {
                await journeyPage.tglUseAzurePlayer.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusSkipJourneyDetailScreen.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != skipJourneyDetailScreenSetting.toString()) {
                await journeyPage.tglSkipJourneyDetailScreen.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusShowLeaderboardMetrics.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != showLeaderBoardDiveBackInSetting.toString()) {
                //await journeyPage.tglShowLeaderboardMetrics.click();
                await browser.executeScript("arguments[0].click()", journeyPage.tglShowLeaderboardMetrics);
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusShowCompletedActivitiesSection.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != showCompletedActivitiesSetting.toString()) {
                await journeyPage.tglShowCompletedActivitiesSection.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusHasEntryPage.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != hasEntryPageSetting.toString()) {
                await journeyPage.tglHasEntryPage.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusDisableLocks.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != disableLocksSetting.toString()) {
                await journeyPage.tglDisableLocks.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusDisableNotifications.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != disableNotificationsSetting.toString()) {
                await journeyPage.tglDisableNotifications.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusDisableVideoForwarding.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != disableVideoForwardingSetting.toString()) {
                await journeyPage.tglDisableVideoForwarding.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusHideLeaderboard.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != hideLeaderBoardSetting.toString()) {
                await journeyPage.tglHideLeaderboard.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusAllowContentSharing.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != contentSharingSetting.toString()) {
                await journeyPage.tglAllowContentSharing.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusShowSupportLinkAsPopUp.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != showSupportLinkAsPopUpSetting.toString()) {
                await journeyPage.tglShowSupportLinkAsPopUp.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusShowSubMenuNavigationInJourney.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != showSubMenuNavigationForJourneySetting.toString()) {
                await journeyPage.tglShowSubMenuNavigationInJourney.click();
                await browser.sleep(1000);
            }
        })
        await journeyPage.tglStatusShowCompletionStatusOnModuleBar.getAttribute("ng-reflect-model").then(async function (tglStatus) {
            if (tglStatus != showCompletionStatusSetting.toString()) {
                await journeyPage.tglShowCompletionStatusOnModuleBar.click();
                await browser.sleep(1000);
            }
        })
    }
    async createCohortInJourney(journeyName: string, cohortTitle: string, cohortStartDate: string, cohortEndDate: string): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let EC = this.ExpectedConditions;
        await journeyPage.cohort_UsersTab.click();

        // await journeyPage.fiterJourneys.click();
        // await journeyPage.fiterJourneys.clear();
        // await journeyPage.fiterJourneys.sendKeys(journeyName);
        let counter: number = 0;
        try {
            browser.manage().timeouts().implicitlyWait(2 * 1000);
            let isJourneyPresent = await element(By.xpath(`//span[contains(text(),'${journeyName}')]/..`)).isPresent();

            while ((!isJourneyPresent) && counter < 50) {
                await element(By.css("div[class*='show'] button")).click();
                await browser.sleep(2000);
                isJourneyPresent = await element(By.xpath(`//span[contains(text(),'${journeyName}')]/..`)).isPresent();
                counter++;
            }

        }
        catch (e) {
            let isBackUpJourneyPresent = await element(By.xpath(`//span[contains(text(),'${journeyName}')]/..`)).isPresent();

            while ((!isBackUpJourneyPresent) && counter < 50) {
                await element(By.css("div[class*='show'] button")).click();
                await browser.sleep(2000);
                isBackUpJourneyPresent = await element(By.xpath(`//span[contains(text(),'insert_backUpJourneyName')]/..`)).isPresent();
                counter++;
            }
        }
        finally {
            await browser.manage().timeouts().implicitlyWait(30 * 1000);
        }

        if (counter >= 49) {
            console.log('Journey Not found in the Journey list on cohort tab');
        }
        await element(By.xpath(`//span[contains(text(),'${journeyName}')]/..`)).click();
        await journeyPage.btnCreateCohort.click();

        await journeyPage.cohortTitle.click();
        await journeyPage.cohortTitle.clear();
        await journeyPage.cohortTitle.sendKeys(cohortTitle);

        await journeyPage.cohortStartDate.click();
        await journeyPage.cohortStartDate.clear();
        await journeyPage.cohortStartDate.sendKeys(cohortStartDate);

        await journeyPage.cohortEndDate.click();
        await journeyPage.cohortEndDate.clear();
        await journeyPage.cohortEndDate.sendKeys(cohortEndDate);

        await journeyPage.tglEnableCohort.click();
        await journeyPage.saveCohort.click();

        await browser.wait(EC.visibilityOf(element(By.css("div[aria-label*= 'Cohort Success']"))), 10 * 1000).then(null, async function (error) {
            return;
        }).then(async function () {
            await element(By.css("div[aria-label*= 'Cohort Success']")).click();
        }).catch(async function (error) {
            console.log(error);
            console.log("Cohort Success toast message not visible");
            return;
        })
        // await browser.wait(EC.invisibilityOf(element(By.css("div[aria-label*= 'Cohort Success']"))), 10 * 1000).then(null, async function (error) {
        //     if (error) {
        //         await element(By.css("div[aria-label*= 'Cohort Success']")).click();
        //         await browser.sleep(1000);
        //         return;
        //     }
        // });
    }
    async createUserInCohort(userFirstName: string, userLastName: string, email: string, password: string): Promise<void> {
        let journeyPage = this.journeyPageObjects;
        let EC = this.ExpectedConditions;
        await journeyPage.btnCohortFunctions.click();
        await browser.sleep(1000);
        await journeyPage.btnCreateNewUser.click();
        await browser.sleep(1000);

        await journeyPage.newUserFName.click();
        await journeyPage.newUserFName.clear();
        await journeyPage.newUserFName.sendKeys(userFirstName);

        await journeyPage.newUserLName.click();
        await journeyPage.newUserLName.clear();
        await journeyPage.newUserLName.sendKeys(userLastName);

        await journeyPage.newUserEmail.click();
        await journeyPage.newUserEmail.clear();
        await journeyPage.newUserEmail.sendKeys(email);

        await journeyPage.newUserPassword.click();
        await journeyPage.newUserPassword.clear();
        await journeyPage.newUserPassword.sendKeys(password);

        await journeyPage.btnCreateUser.click();
        await browser.sleep(2000);
        await browser.wait(EC.visibilityOf(element(By.css("div[aria-label*= 'success']"))), 10 * 1000).then(null, async function (error) {
            return;
        }).then(async function () {
            await element(By.css("div[aria-label*= 'success']")).click();
        }).catch(async function (error) {
            console.log(error);
            console.log("Create User Success toast message not visible");
            return;
        })
        await browser.sleep(2000);

    }
    async unlockContent(): Promise<void> {
        await element(By.css("button[name*='View Read-only']")).isPresent().then(async function (isContentLocked) {
            if (isContentLocked) {
                await element(By.css("button[name*='View Read-only']")).click();
            }
        })
    }

    async continueWithoutSavingChanges(): Promise<void> {
        await element(By.css("button[name*='Continue']")).isPresent().then(async function (isBtnVisible) {
            if (isBtnVisible) {
                await element(By.css("button[name*='Continue']")).click();
                await browser.sleep(2000);
            }
        })
    }
    async cancelCMSChangesAndExit(): Promise<void> {
        let authSanityPage = this.authorSanityPage;
        await authSanityPage.cancelEdit.click();
        await authSanityPage.exitEditor.click().then(async function () {
            await element(By.css("button[name*='Continue']")).isPresent().then(async function (isBtnVisible) {
                if (isBtnVisible) {
                    await element(By.css("button[name*='Continue']")).click();
                    await browser.sleep(2000);
                }
                else {
                    await browser.sleep(2000);
                }
            })
        })
    }



    async createRandomUserAndClickOnIt(userFirstName: string, userLastName: string, userEmailId: string): Promise<void> {
        let authuserlist = this.authoringuserlisting;
        let createP = this.createUserPage;

        let temprandom: any = randomdigit;
        await browser.sleep(2000).then(async function () {
            await authuserlist.txtCreateUserFirstName.isDisplayed().then(async function () {
                await authuserlist.txtCreateUserFirstName.sendKeys(temprandom + userFirstName);
            })
            await authuserlist.txtCreateUserLastName.isDisplayed().then(async function () {
                await authuserlist.txtCreateUserLastName.sendKeys(userLastName);
            })
            await authuserlist.txtCreateUserEmail.isDisplayed().then(async function () {
                await authuserlist.txtCreateUserEmail.sendKeys(temprandom + userEmailId);
            })
            await authuserlist.btnGENERATE.isDisplayed().then(async function () {
                await authuserlist.btnGENERATE.click().then(async function () {
                    browser.sleep(4000);
                })
            })
            await createP.btnCreate.isDisplayed().then(async function () {
                await createP.btnCreate.click().then(async function () {
                    browser.sleep(5000)
                    console.log("Create  Button clicked !!!!!!!!!!!!");

                })
            })
            let temptext: ElementFinder = element(By.xpath("//button[contains(text(),'" + temprandom + "')]"));
            await temptext.click().then(async function () {
                console.log("The username is " + temptext);
                await browser.sleep(5000);
            })
        })
    }


    async uploadNewImageCMS(imageLocation: string, imageTitle: string, imageAltText: string): Promise<void> {
        let activityAuthPage = this.activityAuthorPage;
        await activityAuthPage.btnUploadImage.click().then(async function () {
            await activityAuthPage.browseImageBtn.sendKeys(imageLocation).then(async function () {
                await browser.sleep(5000).then(async function () {
                    await activityAuthPage.imageTitle.sendKeys(imageTitle);
                    await activityAuthPage.imageAltText.sendKeys(imageAltText);
                    await activityAuthPage.btnUploadSelectedImage.click();
                    await browser.sleep(2000)
                })
            });
        })
    }
}

