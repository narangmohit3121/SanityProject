import {When, Then} from "cucumber";
import { AuthoringVariableGridPageLocate } from "../../PageObjects/Sprint 14/AuthoringVariableGrid";
import { MasterCopyJourneyPageLocate } from "../../PageObjects/Sprint 15/MasterCopyJourneyPage";
import { browser } from "protractor";
import chai = require('chai');
import { Alert } from "selenium-webdriver";
let expectedCopiedJourneyName = "QA Master Copy Journey Automation";



var expect = chai.expect;

 let masterCopyjourneypagelocate = new MasterCopyJourneyPageLocate();


 When('User click on master tab to select master collection',async function () {
   
    await masterCopyjourneypagelocate.MasterTab.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.MasterTab.click().then(async function () {
        })

    })
  });

  When('User click QA Collection',async function () {
   
    await masterCopyjourneypagelocate.CollectionItemCol.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.CollectionItemCol.click().then(async function () {
            
        })

    })
  });

  When('User click 3 dots of QA Master Journey Automation',async function () {
   
    await masterCopyjourneypagelocate.Journey3dot.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.Journey3dot.click().then(async function () {
        })

    })
  });

  When('User click on Copy option',async function () {
   
    await masterCopyjourneypagelocate.CopyBtn.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.CopyBtn.click().then(async function () {
            browser.sleep(7000);
        })

    })
  });

  // When('User click copy button with Chevron Corporation journey',async function () {
   
  //   await masterCopyjourneypagelocate.chevronCopyjourneyBtn.isDisplayed().then(async function () {
  //       await masterCopyjourneypagelocate.chevronCopyjourneyBtn.click().then(async function () {
  //           browser.sleep(7000);
  //       })

  //   })
  // });

  When('User click copy button with Automation do not delete journey as {string}',async function (string) {
   await masterCopyjourneypagelocate.searchJourney.isDisplayed().then(async function(){
     await masterCopyjourneypagelocate.searchJourney.clear().then(async function(){
       await masterCopyjourneypagelocate.searchJourney.sendKeys(string).then(async function(){
         await browser.sleep(2000).then(async function(){
          await masterCopyjourneypagelocate.chevronCopyjourneyBtn.isDisplayed().then(async function () {
            await masterCopyjourneypagelocate.chevronCopyjourneyBtn.click().then(async function () {
                browser.sleep(7000);
            })
          })
         })
       })
     })
   })
 });

  When('User enter name for copy journey as {string} in Journey title text field',async function (string) {

    await masterCopyjourneypagelocate.JourneyTitleTxt.clear().then(async function () {
             await masterCopyjourneypagelocate.JourneyTitleTxt.sendKeys(string)
             browser.sleep(3000);
        
           });
    
  });


  When('User click on Save button after given journey title',async function () {
   
    await masterCopyjourneypagelocate.SaveBtn.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.SaveBtn.click().then(async function () {
            browser.sleep(5000);
        })

    })
  });

  When('User click on momenta title on top left corner of page',async function () {
   
    await masterCopyjourneypagelocate.MomentatitleLnk.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.MomentatitleLnk.click().then(async function () {
            browser.sleep(3000);
        })

    })
  });

  When('User click on client tab to search chevron client',async function () {
   
    await masterCopyjourneypagelocate.ClientTab.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.ClientTab.click().then(async function () {
            browser.sleep(3000);
        })

    })
  });


  When('User click on Automation do not Delete folder',async function () {
   await masterCopyjourneypagelocate.fldAutomationDonotDelete.isDisplayed().then(async function(){
     await masterCopyjourneypagelocate.fldAutomationDonotDelete.click().then(async function(){
       await browser.sleep(5000);
     })
   })
  });

  

  When('User click on Chevron Corporation to check copy journey',async function () {
   
    await masterCopyjourneypagelocate.ChevronCol.isDisplayed().then(async function () {
        await masterCopyjourneypagelocate.ChevronCol.click().then(async function () {
            browser.sleep(3000);
        })

    })
  });


  Then('Copied journey should be displayed under journey folder', async function () {
    await masterCopyjourneypagelocate.CopiedJourneytle.isDisplayed().then(async function(){
      await masterCopyjourneypagelocate.CopiedJourneytle.getText().then(async function(actualCopiedJournyName){
        expect(actualCopiedJournyName).to.equal(expectedCopiedJourneyName);
    })
  })
})


Then('Copied journey should be deleted', async function () {
  await masterCopyjourneypagelocate.JourneyDelete3dot.isDisplayed().then(async function(){
    await masterCopyjourneypagelocate.JourneyDelete3dot.click().then(async function(){
      await masterCopyjourneypagelocate.btnDelete.isDisplayed().then(async function(){
        await masterCopyjourneypagelocate.btnDelete.click().then(async function(){
          await masterCopyjourneypagelocate.btnDeleteJustJourney.isDisplayed().then(async function(){
            await masterCopyjourneypagelocate.btnDeleteJustJourney.click().then(async function(){
              await browser.sleep(5000);
            })
          })
        })
      })
    })
  })
})