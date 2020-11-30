import { browser, By, element, ElementFinder, protractor, WebElement, ProtractorExpectedConditions } from "protractor";

import { CommonLocate } from "../PageObjects/Common";
import { JourneySanityPageObjects } from "../PageObjects/SanityProjectPages/JourneySanityPage";
import { AuthorSanityPage } from "../PageObjects/SanityProjectPages/AuthorSanityPage";
import { ActivityAuthoringPageLocate } from "../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CreateAllContentsLocate } from "../PageObjects/SanityProjectPages/CreateAllContentPage";
import { ResourceListingLocate } from "../PageObjects/UserApp POM/Resource/ResourceListingPage";
import { PostRunElements } from "../PageObjects/SanityProjectPages/PostRunPage";


export class cmsHelperFunctions {

    activityAuthorPage = new ActivityAuthoringPageLocate();
    commonObjects = new CommonLocate();
    journeyPageObjects = new JourneySanityPageObjects();
    authorSanityPage = new AuthorSanityPage();
    createAllContentsPage = new CreateAllContentsLocate();
    resourceListPage = new ResourceListingLocate();
    ExpectedConditions: ProtractorExpectedConditions = protractor.ExpectedConditions;
    postRunPage = new PostRunElements();

    async uploadImage(imagePath: string, imageTitle: string, imageAltText: string): Promise<void> {
        let activityAuthPage = this.activityAuthorPage;
        await activityAuthPage.btnUploadImage.click().then(async function () {
            await activityAuthPage.browseImageBtn.sendKeys(imagePath).then(async function () {
                await browser.sleep(5000).then(async function () {
                    await activityAuthPage.imageTitle.sendKeys(imageTitle);
                    await activityAuthPage.imageAltText.sendKeys(imageAltText);
                    await activityAuthPage.btnUploadSelectedImage.click();
                    await browser.sleep(3000);
                })
            });
        })
    }


    async linkActivity(activityName: string, isClientTabDisplayed?: boolean): Promise<void> {
        let commonPage = this.commonObjects;
        await browser.sleep(2000);
        if (isClientTabDisplayed || isClientTabDisplayed == undefined) {
            await commonPage.clientCollectionTab.click();
            await browser.sleep(2000);
        }

        try{
            await commonPage.linkActivityPetronasTab.click();
        }
        catch(e){
            await commonPage.linkActivityPetronasTab2.click();
        }
        
        await browser.sleep(2000);
        await commonPage.searchActivityToBeLinkedInput.click()
        await commonPage.searchActivityToBeLinkedInput.clear();
        await commonPage.searchActivityToBeLinkedInput.sendKeys(activityName);

        await commonPage.searchIcon.click();
        await browser.sleep(1000);
        await element(By.xpath(`//span[contains(text(),'${activityName}')]/ancestor::div[contains(@class,'journey-list')]//button[contains(@name,'select')]`)).click();
    }

    async deleteTheme(themeName: string): Promise<void> {
        let resourceListing = this.resourceListPage;
        let EC = this.ExpectedConditions;
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
        await element(By.xpath(`//div[contains(text(),'${themeName}')]/ancestor::tr//button[contains(@name,'Delete')]`)).click();
        await browser.sleep(2000);
        await resourceListing.confirmDeleteTheme.click();
        await browser.sleep(3000);
        await resourceListing.btnSaveChangesConfigTab.click();
        await browser.sleep(2000);
    }

    async deleteContent(contentName: string): Promise<void> {
        let postRun = this.postRunPage;
        let EC = this.ExpectedConditions;
        await element(By.xpath(`//p[contains(text(),'${contentName}')]/ancestor::mat-card//button[@name ='menu']`)).click();
        await browser.sleep(1000);
        await postRun.deleteBtn.click().then(async function () {
            await browser.wait(EC.visibilityOf(postRun.confirmDeleteContent), 5 * 1000);
            await postRun.confirmDeleteContent.click();
            await browser.sleep(3 * 1000);
        })
    }
}