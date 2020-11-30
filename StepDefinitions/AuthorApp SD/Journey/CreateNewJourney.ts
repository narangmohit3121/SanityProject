import { When, Then } from "cucumber";
import { browser, protractor, element, By } from "protractor"
import { async } from "q";
import chai = require('chai');

import { ClientPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/ClientLandingPage";
import { JourneyAuthoringLocate } from "../../../PageObjects/AuthorApp POM/Journey/JourneyAuthoringPage";
import { CreateNewJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/CreateNewJourneyPage"


let expect = chai.expect;
let path = require("path");
let EC = protractor.ExpectedConditions;
let clientLandingPage = new ClientPageLocate();
let journeyAuthoringPage = new JourneyAuthoringLocate();
let createNewJourney = new CreateNewJourneyPageLocate();

let expJourneyPlusMenuList: Array<string> = [];
let actJourneyPlusMenuList: Array<string> = ['Create New Journey', 'Copy Journey'];
let beforeJourneyList: any;


When('User click on Automation Folder_DONOT DELETE folder', async function () {
      await createNewJourney.AutomationFolderDONOTDELETEFld.isDisplayed().then(async function () {
        await createNewJourney.AutomationFolderDONOTDELETEFld.click().then(function () {
        })
      })
    });

    When('User click on AuthorApp folder in Automation Folder_DONOT DELETE folder', async function () {
        await createNewJourney.AuthorAppFolderFld.isDisplayed().then(async function () {
          await createNewJourney.AuthorAppFolderFld.click().then(function () {
          })
        })
      });

      When('User click journey folder in AuthorApp folder', async function () {
        await createNewJourney.JourneyFolderFld.isDisplayed().then(async function () {
          await createNewJourney.JourneyFolderFld.click().then(function () {
          })
        })
      });


    When('Participant user clicks on Login Button', async function () {
        await createNewJourney.AutomationFolderDONOTDELETEFld.isDisplayed().then(async function () {
          await createNewJourney.AutomationFolderDONOTDELETEFld.click().then(function () {
          })
        })
      });



When('User is on Petronas folder get the count of journeys', async function () {
    await clientLandingPage.journeyList.count().then(async function () {
        await clientLandingPage.journeyList.count().then(async function (beforeJourneyList1) {
            beforeJourneyList = beforeJourneyList1;
        })
    })
})

When('User clicks on Journey plus icon', async function () {
    await createNewJourney.copyJourneyPlus.click().then(async function () {
        await browser.sleep(1000);
    })

});

When('User clicks on Create New Journey', async function () {
    
 await createNewJourney.CreateJourney.click().then(async function () {
    await browser.sleep(1000);
})
});

Then('Create New Journey popup modal window should open up with empty Journey Title and empty description field', async function () {
    await browser.sleep(1000);
    await createNewJourney.enterJourneyTitle.isDisplayed().then(async function () {
        await createNewJourney.enterJourneyTitle.getText().then(function (journeyTitle) {
            expect(journeyTitle).to.be.empty
        })
        await browser.sleep(1000);
        await createNewJourney.enterJourneyDescription.getText().then(function (journeyDesc) {
            expect(journeyDesc).to.be.empty
        })
    })
});

When('User enters valid title as {string} and description {string}', async function (journeyTitle, journeyDescription) {
    await browser.sleep(1000);
    await createNewJourney.enterJourneyTitle.click().then(async function () {
        await createNewJourney.enterJourneyTitle.sendKeys(journeyTitle)
        console.log("Journey title");
    })
    await browser.sleep(1000);
    await createNewJourney.enterJourneyDescription.click().then(async function () {
        await createNewJourney.enterJourneyDescription.sendKeys(journeyDescription)
        console.log("Journey description");
    })
})

When('User clicks on save button', async function () {
    await createNewJourney.createNewJourneySaveButton.isEnabled().then(async function () {
        await createNewJourney.createNewJourneySaveButton.click()

    })
})

Then('User should see Journey is created with same name which is mention', async function () {
    await createNewJourney.qaAutomationJourneyName.isDisplayed().then(async function () {
        await createNewJourney.qaAutomationJourneyName.getText().then(function (journeyTitle) {
            expect(journeyTitle).to.be.eql("Automation QA Journey");
        })
        
    })
});


Then('Create New Journey popup modal window should get closed and new Journey tile should get created under Journeys section', async function () {
    await createNewJourney.journeyList.count().then(async function () {
        await createNewJourney.journeyList.count().then(async function (afterJourneyList) {
            expect(beforeJourneyList).to.be.eql(afterJourneyList - 1)
        })
    })
})


Then('Validation message should be displayed as Title is mandatory', async function () {
    await browser.wait(EC.visibilityOf(createNewJourney.ThisIsMandatoryForJourneyToastMsg), 10000).then(async function () {
     await createNewJourney.ThisIsMandatoryForJourneyToastMsg.isDisplayed().then(async function(result){
        await createNewJourney.ThisIsMandatoryForJourneyToastMsg.getText().then(async function (ToastMeassageText) {
            expect(result).to.be.true;
            browser.sleep(2000);
        });
            
        });
        });
    });




When('User clicks on cancel button', async function () {
    await clientLandingPage.createNewJourneyCancelButton.isEnabled().then(async function () {
        await clientLandingPage.createNewJourneyCancelButton.click();

    })
});

Then('Create New Journey popup modal window should get closed', async function () {
    await browser.getTitle().then(function (title) {
        expect(title).to.be.eql("Momenta")
    })
});

When('User clicks on the newly created Journey', async function () {
    await createNewJourney.qaAutomationJourneyName.isPresent().then(async function () {
        await createNewJourney.qaAutomationJourneyName.click()

    })
});

Then('User should see blank journey after click newly created Journey', async function () {
    
    await createNewJourney.blankJourneyCanvasJrny.getText().then(function (desc) {
        
        expect(desc).to.be.eql("This is your canvas....")
    })
});




When('User clicks on pluse icon of Add Stage to create stage', async function () {
    await createNewJourney.addStageButton.isEnabled().then(async function () {
        browser.sleep(2000)
        await createNewJourney.addStageButton.click();
    })
   
});

When('User Provide Stage tilte as {string} and click save button', async function (string) {

  await createNewJourney.StageTitleTxt.clear().then(async function () {
    await createNewJourney.StageTitleTxt.sendKeys(string)
  });

  await createNewJourney.StageSaveBtn.isEnabled().then(async function () {
    browser.sleep(2000)
    await createNewJourney.StageSaveBtn.click();
})
});

Then('User should see stage is added in journey template', async function () {
    
    await createNewJourney.newStageLbl.getText().then(function (desc) {
        expect(desc).to.be.eql("Stage one")
        
    })
});



When('User clicks on pluse icon of Add module to create module',async function () {
    await createNewJourney.addModuleButton.isEnabled().then(async function () {
        browser.sleep(2000)
        await createNewJourney.addModuleButton.click();
    })
   });

   When('User Provide Module tilte as {string} and click save button',async function (ModuleTitle) {
       browser.sleep(2000)
    await createNewJourney.ModuleTitleTxt.clear().then(async function () {
      await createNewJourney.ModuleTitleTxt.sendKeys(ModuleTitle)
    });
  
    await createNewJourney.StageSaveBtn.isEnabled().then(async function () {
      browser.sleep(2000)
      await createNewJourney.StageSaveBtn.click();
  })

     browser.sleep(10000)
  });


  Then('User should see module is added in journey template', async function () {
    
    await createNewJourney.newModuleLbl.getText().then(function (desc) {
        expect(desc).to.be.eql("Module one")
        
    })
});



// ///////////////////////////////
// Then('Validation message should be displayed as Title is mandatory', async function () {
//     await browser.wait(EC.visibilityOf(createNewJourney.ThisIsMandatoryForJourneyToastMsg), 10000).then(async function () {
//      await createNewJourney.ThisIsMandatoryForJourneyToastMsg.isDisplayed().then(async function(result){
//         await createNewJourney.ThisIsMandatoryForJourneyToastMsg.getText().then(async function (ToastMeassageText) {
//             console.log("Protractor is saying  "+ToastMeassageText);
//             expect(result).to.be.true;
//             browser.sleep(2000);
//         });
            
//         });
//         });
//     });

        When('User Saves Draft and Publishes the Stage and Module', async function () {
        await createNewJourney.saveDraftBtn.click().then(async function () {
            await browser.wait(EC.visibilityOf(createNewJourney.toastMessageSuccesssaveDraftBtn), 20000).then(async function () {
                await createNewJourney.toastMessageSuccesssaveDraftBtn.click().then(async function () {
                    await browser.sleep(2000);
                   

                    await createNewJourney.publishBtn.click().then(async function () {
                        await browser.wait(EC.visibilityOf(createNewJourney.toastMessageSuccesspublishBtn), 20000).then(async function () {
                            await createNewJourney.toastMessageSuccesspublishBtn.click().then(async function () {
                                await browser.sleep(2000);
                                // await activityAuthorPage.exitEditor.click().then(async function () {
                                // })
                            })
                        })
                    })
                })
            })
        })
        });


Then('New Stage & New Module should get added as part of Journey template', async function () {
    await clientLandingPage.newStageAdded.isDisplayed().then(async function () {
        await clientLandingPage.newStageAdded.getText().then(function (stageTxt) {
            console.log(stageTxt);
            expect(stageTxt).to.be.eql("NEW STAGE")
        })
    })
    await clientLandingPage.newModuleAdded.isDisplayed().then(async function () {
        console.log("second");
        await clientLandingPage.newModuleAdded.getText().then(function (moduleTxt) {

            expect(moduleTxt).to.be.eql("New Module")
        })
    })
});

When('User clicks on Cancel button after adding Stage and Module', async function () {
    await clientLandingPage.newJourneyCancelButton.isEnabled().then(async function () {
        await clientLandingPage.newJourneyCancelButton.click().then(async function () {
            await browser.getTitle().then(async function (title) {
                expect(title).to.be.eql("Momenta")
            })
        })
    })

});

When('User clicks on the three dots of new created Journey', async function () {
    await createNewJourney.threedotsOfCreatedJourney.isEnabled().then(async function () {
        await createNewJourney.threedotsOfCreatedJourney.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});


When('User clicks on the delete option to delete journey', async function () {
    await createNewJourney.JourneyDeleteOption.isEnabled().then(async function () {
        await createNewJourney.JourneyDeleteOption.click().then(async function () {
            await browser.sleep(3000);
        })
    })

    await createNewJourney.JourneyDeleteAlertDeleteBtn.isEnabled().then(async function () {
        await createNewJourney.JourneyDeleteAlertDeleteBtn.click().then(async function () {
            await browser.sleep(2000);
        })
    })


});

Then('User should not see created journey exist', async function () {
    await createNewJourney.qaAutomationJourneyName.isPresent().then(async function (flag) {
        expect(flag).to.be.false;
        console.log("Journey Deleted");
        
    })
});





Then('Journey should not get saved and redirected to client landing page', async function () {
    await clientLandingPage.journeyList.count().then(async function () {
        await clientLandingPage.journeyList.count().then(async function (afterJourneyList) {

            expect(beforeJourneyList).to.be.eql(afterJourneyList)
        })
    })
});

When('User clicks on Save button after adding Stage and Module', async function () {
    await clientLandingPage.newJourneySaveButton.isEnabled().then(async function () {
        await clientLandingPage.newJourneySaveButton.click()
    })
});

Then('Journey should get saved successfully with Stage and Module added', async function () {
    await clientLandingPage.newJourneySuccessToast.getText().then(function (alertTxt) {
        //expect(alertTxt).to.be.eql(" Journey Saved Successfully ")
      
    })
});

When('User clicks on preview button on Journey Authoring page', async function () {
    await createNewJourney.newJourneyPreviewButton.isEnabled().then(async function(){
        await createNewJourney.newJourneyPreviewButton.click()
    })
});


Then('Preview page should openup in new tab displaying Journey created', async function () {
    await browser.getAllWindowHandles().then(function (handles) {
        let firstWindowHandle = handles[0];
        let secondWindowHandle = handles[1];
        browser.switchTo().window(secondWindowHandle).then(function () {
            browser.sleep(5000).then(async function () {
                await createNewJourney.newJourneyPreviewPage.isDisplayed().then(async function () {
                    await createNewJourney.newJourneyPreviewPage.getText().then(async function (text) {
                        expect(text).to.be.eql("My Journey")
                    })
                })
            })
        })
    })
});

When('User clicks on publish button on the Journey Authoring page', async function () {
   await clientLandingPage.newJourneyPublishButton.isEnabled().then(async function(){
       await clientLandingPage.newJourneyPublishButton.click()
   }) 
});

Then('Journey should get published successfully with Stage and Module added', async function () {
    await clientLandingPage.newJourneyPublishToast.getText().then(function(alertTxt){
        //expect(alertTxt).to.be.eql(" Journey Published Successfully ")
       
    })
});