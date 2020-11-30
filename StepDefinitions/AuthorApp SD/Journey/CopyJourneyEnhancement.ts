import { When, Then } from "cucumber";
import { browser } from "protractor";
import chai = require('chai');
import { CopyFeatureEnhancementPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/CopyJourneyEnhancementPage";
import { DeleteJourneyContentFldPageLocate } from "../../../PageObjects/AuthorApp POM/Folder/DeleteJourneyContentFolderPage";
import { LinkActivityPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/LinkActivityPage";
import { AsyncResource } from "async_hooks";
var expect = chai.expect;
let copyfeatureenh = new CopyFeatureEnhancementPageLocate();
let deletejrncntfld = new DeleteJourneyContentFldPageLocate();
let linkactivity = new LinkActivityPageLocate();

let exptxtCopiedfrommaster = '[ Copied from master ]';



When('User click on Copy Feature Enhancement folder', async function () {
  await copyfeatureenh.fldCopyFeatureEnhancement.isDisplayed().then(async function () {
    await copyfeatureenh.fldCopyFeatureEnhancement.click();
  })
});

When('User enter journey name in search bar as {string}', async function (string) {
  await copyfeatureenh.srcCopyJourney.isDisplayed().then(async function () {
    await copyfeatureenh.srcCopyJourney.sendKeys(string);
  })
  await copyfeatureenh.btnsrchCollection.isDisplayed().then(async function(){
    await copyfeatureenh.btnsrchCollection.click();
  })

});

Then('User click on Copy button to copy Journey from Master Collection', async function () {
  await copyfeatureenh.btnCopyCopyJrn.isDisplayed().then(async function () {
    await copyfeatureenh.btnCopyCopyJrn.click();
  })
  await copyfeatureenh.btnSaveCopyJrn.isDisplayed().then(async function () {
    await copyfeatureenh.btnSaveCopyJrn.click();
  })
});

Then('User verify whether Journey is copied from Master Collection', async function () {
  await copyfeatureenh.symcopiedfrommasterJrn.isDisplayed().then(async function () {
    await copyfeatureenh.symcopiedfrommasterJrn.getText().then(async function (acttxtJRNConfig) {
      expect(acttxtJRNConfig).to.eql(exptxtCopiedfrommaster);
    })
  })
});

When('User click on JRN Config Journey', async function () {
  await copyfeatureenh.jrnJRNConfig.isDisplayed().then(async function () {
    await copyfeatureenh.jrnJRNConfig.click();
  })
});

When('User click on Add Module and enter tittle as {string} and click on save button', async function (string) {

  await copyfeatureenh.btnAddNewModule.isDisplayed().then(async function () {
    await copyfeatureenh.btnAddNewModule.click();
  })
  await copyfeatureenh.txtModuleTittle.isDisplayed().then(async function () {
    await copyfeatureenh.txtModuleTittle.sendKeys(string);
  })
  await copyfeatureenh.btnSaveModule.isDisplayed().then(async function () {
    await copyfeatureenh.btnSaveModule.click();
  })
});


When('User click on Add Activity and Select Content Object and enter tittle as {string} and click on save button', async function (string) {
  await copyfeatureenh.btnThreeDotOfModule.isDisplayed().then(async function () {
    await copyfeatureenh.btnThreeDotOfModule.click();
  })
  await browser.sleep(1000);
  await copyfeatureenh.btnAddNewActivity.isDisplayed().then(async function () {
    await copyfeatureenh.btnAddNewActivity.click();
  })
  await copyfeatureenh.ddSelectActivityType.isDisplayed().then(async function () {
    await copyfeatureenh.ddSelectActivityType.click();

  })
  await browser.sleep(1000);
  await copyfeatureenh.ddselectContentObject.isDisplayed().then(async function () {
    await copyfeatureenh.ddselectContentObject.click();
  })
  await copyfeatureenh.txtActivityTittle.isDisplayed().then(async function () {
    await copyfeatureenh.txtActivityTittle.sendKeys(string);
  })
  await copyfeatureenh.btnSaveActivity.isDisplayed().then(async function () {
    await copyfeatureenh.btnSaveActivity.click();
  })
});

When('User click on link Activity and switch to link Activity frame for cutomized activity', async function () {
  await browser.sleep(2000);
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

When('User links Activity to the Content for Master Collection as {string}', async function (string) {
  await linkactivity.tabMastColLnkAct.isDisplayed().then(async function () {
    await linkactivity.tabMastColLnkAct.click().then(async function () {
      await browser.sleep(2000);
    })
    await browser.driver.switchTo().activeElement().then(function () {
      browser.sleep(2000);
    })
    await linkactivity.fldQACollectionLnkAct.isDisplayed().then(async function () {
      await linkactivity.fldQACollectionLnkAct.click();
    })

    await copyfeatureenh.btnSelectCnt1974.isDisplayed().then(async function () {
      await copyfeatureenh.btnSelectCnt1974.click();
    })

  })
});

When('User clicks on threedots of New Activity to verify Customize option clicks on Customize option', async function () {
  await copyfeatureenh.threedotsEditActivity.isDisplayed().then(async function () {
    await copyfeatureenh.threedotsEditActivity.click();
  })
  
  await browser.sleep(2000);
  await copyfeatureenh.btnCustomize.isDisplayed().then(async function () {
    
    await copyfeatureenh.btnCustomize.click();
    console.log("Customize button displayed");
  })
});





When('User enter content name is search bar as {string}', async function (string) {
  //browser.waitForAngularEnabled(false);
  await copyfeatureenh.srcCustomizeCopyContent.isDisplayed().then(async function () {
    await copyfeatureenh.srcCustomizeCopyContent.sendKeys(string);
  })
  await browser.sleep(1000);
  await copyfeatureenh.icnSearchFolder.isDisplayed().then(async function(){
    await copyfeatureenh.icnSearchFolder.click();
  })
  //browser.waitForAngularEnabled(true);
});

When('User should click on Copy Here button under Copy Content', async function () {
  await browser.sleep(1000);
  await copyfeatureenh.btnCopyHereCopyCnt.isDisplayed().then(async function () {
    await copyfeatureenh.btnCopyHereCopyCnt.click();
  })
  await copyfeatureenh.btnSaveCopyCnt.isDisplayed().then(async function () {
    await copyfeatureenh.btnSaveCopyCnt.click();
  })
});

Then('User click on FLD Copy Feature folder to verify content copied from Master Collection', async function () {
  await copyfeatureenh.fldCopyFeature.isDisplayed().then(async function () {
    await copyfeatureenh.fldCopyFeature.click();
  })
  await copyfeatureenh.symcopiedfrommasterCnt.isDisplayed().then(async function () {
    await copyfeatureenh.symcopiedfrommasterCnt.getText().then(async function (acttxtCnt1974) {
      expect(acttxtCnt1974).to.eql(exptxtCopiedfrommaster);
    })
  })
});

When ('User Deleted Newly cutomized activity', async function(){
  await copyfeatureenh.icnThreedotActivity.isDisplayed().then(async function(){
    await copyfeatureenh.icnThreedotActivity.click();
  })
  await copyfeatureenh.btnDelete.isDisplayed().then(async function(){
    await copyfeatureenh.btnDelete.click();
  })
  await copyfeatureenh.btnPopupDelete.isDisplayed().then(async function(){
    await copyfeatureenh.btnPopupDelete.click();
  })
})

When ('User Delete the newly added module', async function(){
  await copyfeatureenh.btnThreeDotOfModule.isDisplayed().then(async function(){
    await copyfeatureenh.btnThreeDotOfModule.click();
  })
  await copyfeatureenh.btnDeleteModule.isDisplayed().then(async function(){
    await copyfeatureenh.btnDeleteModule.click();
    })
})