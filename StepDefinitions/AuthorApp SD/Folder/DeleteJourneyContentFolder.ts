import {When, Then} from "cucumber";
import {browser, element, By} from "protractor";
import { DeleteJourneyContentFldPageLocate } from "../../../PageObjects/AuthorApp POM/Folder/DeleteJourneyContentFolderPage";
import { del } from "selenium-webdriver/http";
import { CopyFeatureEnhancementPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/CopyJourneyEnhancementPage";
import { HelperFunctions } from "../../HelperClass";


let deletejrncntfld = new DeleteJourneyContentFldPageLocate();
let helper = new HelperFunctions();

Then('User should check if plus icon is present besides Folders and click on it', async function () {
    await deletejrncntfld.btnFolderPlus.isDisplayed().then(async function () {
        await deletejrncntfld.btnFolderPlus.click().then(async function () {
            await deletejrncntfld.mnuCreateNewFld.isDisplayed().then(async function () {
                await deletejrncntfld.mnuCreateNewFld.click().then(async function () {
                    await browser.driver.switchTo().activeElement().then(function () {
                        browser.sleep(2000);
                    })
                })
            })
        })
    })
});

Then('User should check if plus icon is present besides Journeys and click it', async function () {
    await deletejrncntfld.btnJourneyPlus.isDisplayed().then(async function () {
        await deletejrncntfld.btnJourneyPlus.click().then(async function () {
            await deletejrncntfld.mnuCreateNewJrn.isDisplayed().then(async function () {
                await deletejrncntfld.mnuCreateNewJrn.click().then(async function () {
                    await browser.driver.switchTo().activeElement().then(function () {
                        browser.sleep(2000);
                    })
                })
            })
        })
    })
});

Then('User should check if plus icon is present besides Content and click on it', async function () {
    await browser.sleep(5000);
    console.log("Before")
    await deletejrncntfld.btnContentPlus.isDisplayed().then(async function () {
        await deletejrncntfld.btnContentPlus.click().then(async function () {
            await deletejrncntfld.mnuNewAct.isDisplayed().then(async function () {
                await deletejrncntfld.mnuNewAct.click().then(async function () {
                    await browser.driver.switchTo().activeElement().then(async function () {
                       await browser.sleep(2000);
                       console.log("After")
                    })
                })
            })
        })
    })
});

When('User click on Sprint 15 folder', async function () {
    await deletejrncntfld.fldSprint15.isDisplayed().then(async function(){
        await deletejrncntfld.fldSprint15.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  When('User click on Automation_Delete_Jrn_Cnt_Fld folder', async function () {
    await deletejrncntfld.fldDelete_Jrn_Cnt_Fld.isDisplayed().then(async function(){
        await deletejrncntfld.fldDelete_Jrn_Cnt_Fld.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  When('User enter name of Folder as {string} and clicks on Save', async function (string) {
    await deletejrncntfld.txtEnterFldName.isDisplayed().then(async function(){
        await deletejrncntfld.txtEnterFldName.sendKeys(string).then(async function(){
            await deletejrncntfld.btnSaveAddFld.isDisplayed().then(async function(){
                await deletejrncntfld.btnSaveAddFld.click().then(async function(){
                    await browser.sleep(2000);
                })
            })
        })
    })
  });

  When('User enter name of first Journey as {string} and Description as {string} and clicks on Save', async function (string,string2) {
    await deletejrncntfld.txtEnterJrnTitle.isDisplayed().then(async function(){
        await deletejrncntfld.txtEnterJrnTitle.sendKeys(string).then(async function(){
            await deletejrncntfld.txtEnterJrnDesc.isDisplayed().then(async function(){
                await deletejrncntfld.txtEnterJrnDesc.sendKeys(string2).then(async function(){
                    await deletejrncntfld.btnSaveAddJrn.isDisplayed().then(async function(){
                        await deletejrncntfld.btnSaveAddJrn.click().then(async function(){
                            await browser.sleep(2000);
                        })
                    })
                })
            })
        })
    })
  });

  When('User enter name of second Journey as {string} and Description as {string} and clicks on Save', async function (string, string2) {
    await deletejrncntfld.txtEnterJrnTitle.isDisplayed().then(async function(){
        await deletejrncntfld.txtEnterJrnTitle.sendKeys(string).then(async function(){
            await deletejrncntfld.txtEnterJrnDesc.isDisplayed().then(async function(){
                await deletejrncntfld.txtEnterJrnDesc.sendKeys(string2).then(async function(){
                    await deletejrncntfld.btnSaveAddJrn.isDisplayed().then(async function(){
                        await deletejrncntfld.btnSaveAddJrn.click().then(async function(){
                            await browser.sleep(2000);
                        })
                    })
                })
            })
        })
    })
  });

  When('User enter name of first Content as {string} and Description as {string} and clicks on Save', async function (string, string2) {
    await deletejrncntfld.txtEnterActTitle.isDisplayed().then(async function(){
        await deletejrncntfld.txtEnterActTitle.sendKeys(string).then(async function(){
            await deletejrncntfld.txtEnterActDesc.isDisplayed().then(async function(){
                await deletejrncntfld.txtEnterActDesc.sendKeys(string2).then(async function(){
                    await deletejrncntfld.btnCreateAct.isDisplayed().then(async function(){
                        await deletejrncntfld.btnCreateAct.click().then(async function(){
                            await browser.sleep(4000);
                        })
                    })
                })
            })
        })
    })
  });

  When('User enter name of second Content as {string} and Description as {string} and clicks on Save', async function (string, string2) {
    await deletejrncntfld.txtEnterActTitle.isDisplayed().then(async function(){
        await deletejrncntfld.txtEnterActTitle.sendKeys(string).then(async function(){
            await deletejrncntfld.txtEnterActDesc.isDisplayed().then(async function(){
                await deletejrncntfld.txtEnterActDesc.sendKeys(string2).then(async function(){
                    await deletejrncntfld.btnCreateAct.isDisplayed().then(async function(){
                        await deletejrncntfld.btnCreateAct.click().then(async function(){
                            await browser.sleep(2000);
                        })
                    })
                })
            })
        })
    })
  });

  When('User click on first Journey', async function () {
    await deletejrncntfld.jrnJrn_1.isDisplayed().then(async function(){
        await deletejrncntfld.jrnJrn_1.click().then(async function(){
            await browser.sleep(2000);
        })
    })
  });

  When('User adds Module and Activity in the first Journey as {string} and {string} and {string}', async function (string, string2, string3) {
    await deletejrncntfld.icnPlusAddModule.isDisplayed().then(async function(){
        await deletejrncntfld.icnPlusAddModule.click().then(async function(){
            await browser.sleep(2000);
        })
    })
    await deletejrncntfld.txtEnterMdTitle.isDisplayed().then(async function(){
        await deletejrncntfld.txtEnterMdTitle.sendKeys(string).then(async function(){
            await deletejrncntfld.txtEnterMdSname.isDisplayed().then(async function(){
                await deletejrncntfld.txtEnterMdSname.sendKeys(string2).then(async function(){
                    await deletejrncntfld.btnSaveModule.isDisplayed().then(async function(){
                        await deletejrncntfld.btnSaveModule.click();
                    })
                })
            })
        })
    })
    await deletejrncntfld.threeDotsNewModule.isDisplayed().then(async function(){
        await deletejrncntfld.threeDotsNewModule.click().then(async function(){
            await deletejrncntfld.btnAddActivity.isDisplayed().then(async function(){
                await deletejrncntfld.btnAddActivity.click();
            })
        })
    })
    await deletejrncntfld.drpActivityType.isDisplayed().then(async function(){
        await deletejrncntfld.drpActivityType.click().then(async function(){
            await deletejrncntfld.optContentObj.isDisplayed().then(async function(){
                await deletejrncntfld.optContentObj.click().then(async function(){
                    await deletejrncntfld.txtEnterActName.isDisplayed().then(async function(){
                        await deletejrncntfld.txtEnterActName.sendKeys(string3).then(async function(){
                            await deletejrncntfld.btnSaveNewAct.isDisplayed().then(async function(){
                                await deletejrncntfld.btnSaveNewAct.click();
                            })
                        })
                    })
                })
            })
        })
    })
    await deletejrncntfld.moduleHeader.isDisplayed().then(async function(){
        await deletejrncntfld.moduleHeader.click();
    })
  });

  When('User click on link Activity and switch to link Activity frame', async function () {
    await deletejrncntfld.ddModuleScroll.isDisplayed().then(async function(){
        await deletejrncntfld.ddModuleScroll.click();
    })

    await deletejrncntfld.threeDotsNewActivity.isDisplayed().then(async function(){
        await deletejrncntfld.threeDotsNewActivity.click().then(async function(){
            await deletejrncntfld.btnLinkActivity.isDisplayed().then(async function(){
                await deletejrncntfld.btnLinkActivity.click().then(async function(){
                    //browser.ignoreSynchronization = true;
                    await browser.sleep(2000).then(async function(){
                        //await browser.switchTo().frame(element(By.xpath("(//div[@class='journey-dialog mat-dialog-content'])[1]")).getWebElement());
                        await browser.driver.switchTo().activeElement().then(function () {
                            browser.sleep(2000);
                        })
                    })
                })
            })
        })
    })
  });

  When('User links Activity to the Content', async function () {
    await deletejrncntfld.tabPetronasLnkAct.isDisplayed().then(async function(){
        await deletejrncntfld.tabPetronasLnkAct.click().then(async function(){
            await browser.sleep(2000);
        })
        //await browser.switchTo().frame(element(By.className("journey-list--title")).getWebElement());
        await browser.driver.switchTo().activeElement().then(function () {
            browser.sleep(2000);
        })
            await deletejrncntfld.fldDoNotDeleteLnkAct.isDisplayed().then(async function(){
                await deletejrncntfld.fldDoNotDeleteLnkAct.click().then(async function(){
                    await browser.sleep(2000);
                })
                    await deletejrncntfld.fldSprint15LnkAct.isDisplayed().then(async function(){
                        await deletejrncntfld.fldSprint15LnkAct.click().then(async function(){
                            await browser.sleep(2000);
                        })
                            await deletejrncntfld.fldDlt_Jrn_Cnt_FldLnkAct.isDisplayed().then(async function(){
                                await deletejrncntfld.fldDlt_Jrn_Cnt_FldLnkAct.click().then(async function(){
                                    await browser.sleep(2000);
                                })
                                    await deletejrncntfld.fldCnt_1LnkAct.isDisplayed().then(async function(){
                                        await deletejrncntfld.fldCnt_1LnkAct.click().then(async function(){
                                            await browser.sleep(2000);
                                        })
                                            await deletejrncntfld.btnSelectLnkAct.isDisplayed().then(async function(){
                                                await deletejrncntfld.btnSelectLnkAct.click();
                                            })
                                        
                                    })
                                
                            })
                        
                    })
                
            })
        
    })
  });

  When('User clicks on Save and Publish to link Activity', async function () {
    await deletejrncntfld.btnSaveJrn.isDisplayed().then(async function(){
        await deletejrncntfld.btnSaveJrn.click().then(async function(){
            await browser.sleep(8000);
            await browser.refresh();
        })
    })
    await deletejrncntfld.btnPublishJrn.isDisplayed().then(async function(){
        await deletejrncntfld.btnPublishJrn.click().then(async function(){
            await browser.sleep(10000);
            await browser.refresh();
        })
    })
  });
  
  

  When('User clicks on Cancel button and Leave of link Activity', async function () {
    await deletejrncntfld.btnCancelJrn.isDisplayed().then(async function(){
        await deletejrncntfld.btnCancelJrn.click().then(async function(){
            // await deletejrncntfld.btnLeaveAlrt.isDisplayed().then(async function(){
            //     await deletejrncntfld.btnLeaveAlrt.click();
            // })
        })
    })
  });

  When('User clicks on three Dots of Folder and click on Delete', async function () {
    await deletejrncntfld.threeDotsFld.isDisplayed().then(async function(){
        await deletejrncntfld.threeDotsFld.click().then(async function(){
            await browser.sleep(3000);
                    await deletejrncntfld.btnDeleteFJC.isDisplayed().then(async function(){
                        await deletejrncntfld.btnDeleteFJC.click().then(async function(){
                            await browser.sleep(5000);
                    })
                })
                                await deletejrncntfld.btnYesAlrFldCnt.isDisplayed().then(async function(){
                                    await deletejrncntfld.btnYesAlrFldCnt.click().then(async function(){
                                        await browser.sleep(3000);
                                    })
                                })
        })
    })
  });

  When('User clicks on three Dots of first Journey and click on Delete Journey and Contents', async function () {
    await deletejrncntfld.threeDotsJrn1.isDisplayed().then(async function(){
        await deletejrncntfld.threeDotsJrn1.click().then(async function(){
            await browser.sleep(3000).then(async function(){
                await deletejrncntfld.btnDeleteFJC.isDisplayed().then(async function(){
                    await deletejrncntfld.btnDeleteFJC.click().then(async function(){
                        await browser.sleep(3000).then(async function(){
                            await deletejrncntfld.btnDeleteJrnCnt.isDisplayed().then(async function(){
                                await deletejrncntfld.btnDeleteJrnCnt.click().then(async function(){
                                    await browser.sleep(5000);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
  });

  When('User clicks on three Dots of second Journey and click on Delete just Journey', async function () {
    await deletejrncntfld.threeDotsJrn2.isDisplayed().then(async function(){
        await deletejrncntfld.threeDotsJrn2.click().then(async function(){
            await browser.sleep(3000).then(async function(){
                await deletejrncntfld.btnDeleteFJC.isDisplayed().then(async function(){
                    await deletejrncntfld.btnDeleteFJC.click().then(async function(){
                        await browser.sleep(3000).then(async function(){
                            await deletejrncntfld.btnDeleteJrn.isDisplayed().then(async function(){
                                await deletejrncntfld.btnDeleteJrn.click().then(async function(){
                                    await browser.sleep(5000);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
  });

  When('User clicks on three Dots of second Content and click on Delete', async function () {
    await deletejrncntfld.threeDotsCnt2.isDisplayed().then(async function(){
        await deletejrncntfld.threeDotsCnt2.click().then(async function(){
            await browser.sleep(3000).then(async function(){
                await deletejrncntfld.btnDeleteFJC.isDisplayed().then(async function(){
                    await deletejrncntfld.btnDeleteFJC.click().then(async function(){
                        await browser.sleep(3000).then(async function(){
                            await deletejrncntfld.btnYesAlrFldCnt.isDisplayed().then(async function(){
                                await deletejrncntfld.btnYesAlrFldCnt.click().then(async function(){
                                    await browser.sleep(5000);
                                })
                            })
                        })
                    })
                })  
            })
        })
    })
  });

  When ('User clicks on three Dots of first Content and click on Delete', async function(){
        await deletejrncntfld.threeDotnewCnt2.isDisplayed().then(async function(){
            await deletejrncntfld.threeDotnewCnt2.click();
        })
        await deletejrncntfld.btnDeleteCn2.isDisplayed().then(async function(){
            await deletejrncntfld.btnDeleteCn2.click();
        })
        await deletejrncntfld.btnDeleteYescn2.isDisplayed().then(async function(){
            await deletejrncntfld.btnDeleteYescn2.click();
        })
    
  })

