import {When, Then} from "cucumber";
import { AuthoringVariableGridPageLocate } from "../../../PageObjects/AuthorApp POM/Content/Create/AuthoringVariableGrid";
import { MasterCopyJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/MasterCopyJourneyPage";
import { browser } from "protractor";
import chai = require('chai');
import { Alert } from "selenium-webdriver";
let expectedCopiedJourneyName = "QA Master Copy Journey Automation updated1";
let expJrnTitle = "QA Master Copy Journey Automation to Master";



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

  When('User click copy button with Automation do not delete journey as Automation Folder_DONOT DELETE',async function () {
   // browser.waitForAngularEnabled(false);
    
    await masterCopyjourneypagelocate.btnClientCollection.isDisplayed().then(async function(){
      await masterCopyjourneypagelocate.btnClientCollection.click();
      await browser.sleep(1000);
    })
    await browser.sleep(3000);
    await masterCopyjourneypagelocate.icnPetronasCollection.isDisplayed().then(async function(){      
      await masterCopyjourneypagelocate.icnPetronasCollection.click();
    })
    // await browser.sleep(3000);
    // await masterCopyjourneypagelocate.icnAutomationDNDFolder.isDisplayed().then(async function(){      
    //   await masterCopyjourneypagelocate.icnAutomationDNDFolder.click();
    // })
    // await masterCopyjourneypagelocate.icnsearch.isDisplayed().then(async function(){
    //   await masterCopyjourneypagelocate.icnsearch.click();
    // })
    await masterCopyjourneypagelocate.btnCopyJourney.isDisplayed().then(async function(){
      await browser.sleep(1000);
      await masterCopyjourneypagelocate.btnCopyJourney.click();
    })




  //  await masterCopyjourneypagelocate.searchJourney.isDisplayed().then(async function(){
  //    await masterCopyjourneypagelocate.searchJourney.clear().then(async function(){
  //      await masterCopyjourneypagelocate.searchJourney.sendKeys(string).then(async function(){
  //        await masterCopyjourneypagelocate.icnsearch.click();
  //        await browser.sleep(2000).then(async function(){
  //         await masterCopyjourneypagelocate.chevronCopyjourneyBtn.isDisplayed().then(async function () {
  //           await masterCopyjourneypagelocate.chevronCopyjourneyBtn.click().then(async function () {
  //               browser.sleep(7000);
  //           })
  //         })
  //        })
  //      })
  //    })
  //  })
   //browser.waitForAngularEnabled(true);
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
      await browser.sleep(3000);
        await masterCopyjourneypagelocate.MomentatitleLnk.click().then(async function () {
            browser.sleep(3000);
        })

    })
  });

  When('User click on client tab to search petronas client',async function () {
   
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

//-------------------------Master to master Copy Joureny------------------------
When ('User should click on Master collection and select automation folder_donot delete under QA collection and click on Copy Here button',async function(){
await masterCopyjourneypagelocate.icnMasterCollection.isDisplayed().then(async function(){
  await masterCopyjourneypagelocate.icnMasterCollection.click();
})
await masterCopyjourneypagelocate.icnQAcollection.isDisplayed().then(async function(){
  await masterCopyjourneypagelocate.icnQAcollection.click();
})
await masterCopyjourneypagelocate.btnCopyHere.isDisplayed().then(async function(){
  await masterCopyjourneypagelocate.btnCopyHere.click();
})

})

When ('User enter title as {string} and Save',async function(string){
await masterCopyjourneypagelocate.JourneyTitleTxt.clear().then(async function(){
  await masterCopyjourneypagelocate.JourneyTitleTxt.sendKeys(string);
})
await masterCopyjourneypagelocate.SaveBtn.isDisplayed().then(async function(){
  await masterCopyjourneypagelocate.SaveBtn.click();
})
})

Then ('User Should see QA Master Copy Journey Automation to Master under automation folder_donot delete folder',async function(){
  await masterCopyjourneypagelocate.icnFolder.isDisplayed().then(async function(){
    await masterCopyjourneypagelocate.icnFolder.click();
  })
  await browser.sleep(2000);
  await masterCopyjourneypagelocate.icnJourney.getText().then(async function(jrntitle){
    expect(jrntitle).to.equal(expJrnTitle);
    console.log(jrntitle);
  })
})

Then ('Copied Journey should be deleted',async function(){
  await masterCopyjourneypagelocate.threeDotJourneyMasterC.isDisplayed().then(async function(){
    await masterCopyjourneypagelocate.threeDotJourneyMasterC.click();
  })
  await masterCopyjourneypagelocate.icnDelete.isDisplayed().then(async function(){
    await masterCopyjourneypagelocate.icnDelete.click();
  })
  await masterCopyjourneypagelocate.btnJourneyDlt.isDisplayed().then(async function(){
    await masterCopyjourneypagelocate.btnJourneyDlt.click();
  })
})