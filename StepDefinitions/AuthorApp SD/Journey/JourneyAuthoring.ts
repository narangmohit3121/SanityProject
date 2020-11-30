import { When, Then } from "cucumber";
import { browser, protractor, element, By } from "protractor";
import chai = require('chai');
import { JourneyAuthoringLocate } from "../../../PageObjects/AuthorApp POM/Journey/JourneyAuthoringPage";
import { async } from "q";
let path = require("path");
let expect = chai.expect;
var listexists = true;
let journeystr = "Journey: Journey Name";
let previewtitle = "My Journey";
let EC = protractor.ExpectedConditions;

let journeyauthoring = new JourneyAuthoringLocate();
let exppanellist: Array<string> = [];
// let actpanellist:Array<string>=['Journey Flow',
// 'Journey Configuration',
// 'Resources',
// 'Leader Board',
// 'Journey Script',
// 'Notifications'];

var actpanellist = ['Journey Flow', 'Journey Configuration', 'Notifications', 'Assessment Reports', 'Scheduling Blueprint', 'Discussions', 'Support', 'Registration'];
// var actpanellist = ['Journey Flow','Journey Configuration','Resources','Leader Board','Journey Script','Notifications'];

let expstageoptions: Array<string> = [];
let expmoduleoptions: Array<string> = [];
let expactivityoptions: Array<string> = [];
let actstageoptions: Array<string> = ['Edit Stage', 'Add Module', 'Add Activity', 'Delete'];
let actmoduleoptions: Array<string> = ['Edit', 'Add Activity', 'Delete'];
let actactivityoptions: Array<string> = ['Edit', 'Delete'];

When('User clicks on any Journey and landed to Journey Authoring page', async function () {
    await journeyauthoring.tleJourneyName.isDisplayed().then(async function () {
        await journeyauthoring.tleJourneyName.click().then(async function () {
            browser.sleep(2000);
        })
    })
});

Then('User should verfiy that the Journey name should match the Journey name on page top', async function () {
    await journeyauthoring.journeyNameText.getText().then(async function (journeytext) {
        console.log(journeytext);
        expect(journeytext).to.equal("Journey: Automation QA Journey");
    })
})




Then('User should be able to validate presence of Add Stage and Add Module icons', async function () {
    await journeyauthoring.btnAddStage.isDisplayed().then(async function () {
        browser.sleep(1000);
        await journeyauthoring.btnAddModule.isDisplayed().then(async function () {
            browser.sleep(1000);
        })
    })
});


Then('User should be able to view client name and logo', async function () {
    await journeyauthoring.imgClientLogo.isDisplayed();
});

Then('User should be able to view static menu content at the left side panel', async function () {
    await journeyauthoring.lstLeftPanelTreeItem.each(function (element) {
        element.getText().then(function (txt) {
            exppanellist.push(txt);
            //console.log(txt);
        })
    })

    expect(actpanellist).to.include.members(exppanellist);
});

When('User clicks on Add Stage button', async function () {
    await journeyauthoring.btnAddStage.isDisplayed().then(async function () {
        await journeyauthoring.btnAddStage.click().then(async function () {
            browser.sleep(1000);
        })
    })
});

Then('User should be able to see New Stage should be added', async function () {
    await journeyauthoring.ttlNewStage.isDisplayed().then(async function () {
        await browser.sleep(1000);
    })
});


When('User select activity type as {string} from Activity type dropdown', async function (activityyName) {
    //  browser.waitForAngularEnabled(false);
    await browser.sleep(1000).then(async function () {
        await journeyauthoring.activityDDArrow.isDisplayed().then(async function (ddArrow) {
            if (ddArrow == true) {
                await journeyauthoring.activityDDArrow.click().then(async function () {
                    let LongTextXpath: string = "//option[contains(text(),'" + activityyName + "')]"
                    await element(By.xpath(LongTextXpath)).click().then(async function () {
                        await browser.sleep(5000);
                        console.log("Dropdown value is " + LongTextXpath)

                    })
                })
            }
        })
    })
    //  browser.waitForAngularEnabled(true);
})

When('User provide Activity title as {string} and activity description as {string}', async function (activityTitle, activityeDescription) {
    await journeyauthoring.activityTitleTxt.click().then(async function () {
        await journeyauthoring.activityTitleTxt.sendKeys(activityTitle)
    })
    await journeyauthoring.activityDescTxt.click().then(async function () {
        await journeyauthoring.activityDescTxt.sendKeys(activityeDescription)
    })

})



Then('User should click on Save button', async function () {
    await journeyauthoring.btnJourneyAuthSave.isDisplayed().then(async function () {
        await journeyauthoring.btnJourneyAuthSave.click().then(async function () {
            browser.sleep(2000);
        })
    })
});

When('User clicks on Preview button', async function () {
    await journeyauthoring.btnJourneyAuthPreview.isEnabled().then(async function () {
        await journeyauthoring.btnJourneyAuthPreview.click().then(function () {
            browser.sleep(8000);
        });

        // browser.getAllWindowHandles().then(function(handles){

        //     //let firstWindow = handles[0];
        //     //let previewWindow = handles[1];
        //     browser.switchTo().window(handles[1]).then(function (){
        //         browser.sleep(2000);
        //     });    
        //    });
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow).then(function () {
                browser.sleep(5000);
            })
            //browser.switchTo().window(parentWindow);
        })
    });
})


Then('User should be landed to Preview page', async function () {
    await journeyauthoring.previewMyJourney.getText().then(function (journeytitle) {
        expect(journeytitle).to.equal(previewtitle);
    })
});

When('User clicks on more icon of STAGE', async function () {
    await journeyauthoring.journeyStageMoreIcon.isDisplayed().then(async function () {
        await journeyauthoring.journeyStageMoreIcon.click();
    })
});

Then('User should view four options of STAGE', async function () {
    await journeyauthoring.journeyStageMoreOptions.each(function (element, index) {
        element.getText().then(async function (stageopts) {
            //console.log(stageopts);
            expstageoptions.push(stageopts);
             console.log("Expected option is "+expstageoptions);
              console.log("Expected option is "+actstageoptions);
            expect(actstageoptions).to.include.members(expstageoptions);
        })
    })
});

When('User clicks on Add Module option', async function () {
    await journeyauthoring.dotAddModuleInStage.isDisplayed().then(async function () {
        await journeyauthoring.dotAddModuleInStage.click().then(async function () {
            browser.sleep(1000);
        })
    })
});


When('User enters valid title as {string} short name as {string} and description as {string}', async function (moduleTitle, shortName, moduleDescription) {
    await journeyauthoring.moduleTitleTxt.click().then(async function () {
        await journeyauthoring.moduleTitleTxt.sendKeys(moduleTitle)
    })
    await journeyauthoring.moduleShortNameTxt.click().then(async function () {
        await journeyauthoring.moduleShortNameTxt.sendKeys(shortName)
    })

    await journeyauthoring.moduleDescTxt.click().then(async function () {
        await journeyauthoring.moduleDescTxt.sendKeys(moduleDescription)
    })
})

Then('User should view New Module should get added under STAGE', async function () {
    await journeyauthoring.journeyStageNewModule.isDisplayed().then(async function () {
        await journeyauthoring.journeyStageNewModule.getText().then(async function (moduletitle) {
            expect(moduletitle).to.equal("Module two");
            console.log("Add module validation passed");
        })
        browser.sleep(2000);
    })
});

When('User clicks on Add Activity option', async function () {
    await journeyauthoring.dotAddActivityInStage.isDisplayed().then(async function () {
        await journeyauthoring.dotAddActivityInStage.click().then(async function () {
            browser.sleep(1000);
        })
    })
});

Then('User should view New Activity added under STAGE', async function () {
    await journeyauthoring.journeyStageNewActivity.getText().then(async function (activitytext) {
        console.log(activitytext);
        expect(activitytext).to.equal("Automation Activity one");
    })
});

When('User clicks on Edit option', async function () {
    await journeyauthoring.dotEditStage.isDisplayed().then(async function () {
        await journeyauthoring.dotEditStage.click().then(async function () {
            browser.sleep(1000);
        })
    })
});

When('User enters name of STAGE as blank', async function () {
    await journeyauthoring.journeyStageTextBox.isDisplayed().then(async function () {
        await journeyauthoring.journeyStageTextBox.clear();
        await journeyauthoring.journeyStageTextBox.sendKeys(" ");
        browser.sleep(10000);
    })
});

When('User clicks on Save button after edit stage', async function () {
    await journeyauthoring.journeyStageDonebtn.isDisplayed().then(async function () {
        await journeyauthoring.journeyStageDonebtn.click().then(async function () {
            //await browser.sleep(1000);
        })
    })
});

Then('Validation message should be displayed as Title is mandatory for stage', async function () {
    await browser.waitForAngularEnabled(false);
    await browser.sleep(100).then(async function () {
        await browser.wait(EC.visibilityOf(journeyauthoring.TitleIsMandatoryForstageToastMsg), 5000).then(async function () {

            await browser.sleep(2000);
            await journeyauthoring.TitleIsMandatoryForstageToastMsg.isDisplayed().then(async function (result) {
                await journeyauthoring.TitleIsMandatoryForstageToastMsg.getText().then(async function () {
                    console.log("Value is " + result);
                    expect(result).to.be.true;
                    await browser.sleep(2000);
                });

            });
        });
    })
    await browser.waitForAngularEnabled(true);
});

Then('Validation message should be displayed as Title is mandatory for module', async function () {
    await browser.waitForAngularEnabled(false);
    await browser.sleep(100).then(async function () {
        await browser.wait(EC.visibilityOf(journeyauthoring.TitleIsMandatoryForstageToastMsg), 5000).then(async function () {

            await browser.sleep(2000);
            await journeyauthoring.TitleIsMandatoryForstageToastMsg.isDisplayed().then(async function (result) {
                await journeyauthoring.TitleIsMandatoryForstageToastMsg.getText().then(async function () {
                    console.log("Value is " + result);
                    expect(result).to.be.true;
                    await browser.sleep(2000);
                });

            });
        });
    })
    await browser.waitForAngularEnabled(true);
});

// Then('Validation message should be displayed as Title is mandatory', async function () {
//     await browser.wait(EC.visibilityOf(createNewJourney.ThisIsMandatoryForJourneyToastMsg), 10000).then(async function () {
//      await createNewJourney.ThisIsMandatoryForJourneyToastMsg.isDisplayed().then(async function(result){
//         await createNewJourney.ThisIsMandatoryForJourneyToastMsg.getText().then(async function (ToastMeassageText) {
//             expect(result).to.be.true;
//             browser.sleep(2000);
//         });

//         });
//         });
//     });

When('User clicks on more icon of MODULE', async function () {
    await journeyauthoring.journeyModuleMoreIcon.isDisplayed().then(async function () {
        await journeyauthoring.journeyModuleMoreIcon.click();
    })
});

When('User enters name of MODULE as blank', async function () {
    await journeyauthoring.moduleTitleTxt.isDisplayed().then(async function () {
        await journeyauthoring.moduleTitleTxt.clear();
        await journeyauthoring.moduleTitleTxt.sendKeys(" ");
        browser.sleep(5000);
    })
});

Then('User should view New Activity under MODULE', async function () {
    await journeyauthoring.activityTwoUnderModule.isDisplayed().then(async function () {
        await journeyauthoring.activityTwoUnderModule.getText().then(async function (activityName) {
            console.log("Activity Name is   "+activityName);
            expect(activityName).to.equal("Automation Activity one");
        })
        browser.sleep(2000);
    })
});

When('User clicks on more icon of Automation Activity two module of one', async function () {
    await journeyauthoring.AutomationActivitytwoMoreIcon.isDisplayed().then(async function () {
        await journeyauthoring.AutomationActivitytwoMoreIcon.click();
        browser.sleep(2000);
    })
});

When('User clicks on Edit Activity option to edit activity', async function () {
    browser.sleep(2000);
    await journeyauthoring.editActivityOptionBtn.isDisplayed().then(async function () {
        await journeyauthoring.editActivityOptionBtn.click();
        browser.sleep(2000);
    })
});


When('User clicks on more icon of ACTIVITY', async function () {
    browser.sleep(2000);
    await journeyauthoring.journeyActivityMoreIcon.isDisplayed().then(async function () {
        await journeyauthoring.journeyActivityMoreIcon.click();
    })
});

When('User enters name of ACTIVITY as blank', async function () {
    await journeyauthoring.journeyStageTextBox.isDisplayed().then(async function () {
        await journeyauthoring.journeyStageTextBox.clear();
    })
});

Then('User should view three options of MODULE', async function () {
    await journeyauthoring.journeyStageMoreOptions.each(function (element, index) {
        element.getText().then(function (moduleopts) {
            //console.log(stageopts);
            expmoduleoptions.push(moduleopts);
            console.log(expmoduleoptions);
            console.log(actmoduleoptions);
            //expect(actstageoptions).to.include.members(expstageoptions);
        })
    })
});

Then('User should view two options of ACTIVITY', async function () {
    await journeyauthoring.journeyStageMoreOptions.each(function (element, index) {
        element.getText().then(function (activityopts) {
            //console.log(stageopts);
            expactivityoptions.push(activityopts);
            console.log(expactivityoptions);
            console.log(actactivityoptions);
            //expect(actstageoptions).to.include.members(expstageoptions);
        })
    })
});

When('User delete Automation QA Journey', async function () {
    await journeyauthoring.ThreeDotsAutomationQAJourneyJourneyName.isDisplayed().then(async function () {
        await journeyauthoring.ThreeDotsAutomationQAJourneyJourneyName.click().then(function () {
            browser.sleep(1000);
        });
    });


    await journeyauthoring.AutomationQAJourneyDeleteBtn.isDisplayed().then(async function () {
        await journeyauthoring.AutomationQAJourneyDeleteBtn.click().then(function () {
            browser.sleep(2000);
        });
    });

    await journeyauthoring.AutomationQAJourneyAlertWindowDeleteBtn.isDisplayed().then(async function () {
        await journeyauthoring.AutomationQAJourneyAlertWindowDeleteBtn.click().then(function () {
            browser.sleep(10000);
        });
    });
        console.log("Journey deleted !!");


});
    


Then('User should see journey should be deleted and not be displayed', async function () {
  //  browser.ignoreSynchronization = true;
    await journeyauthoring.QaAutomationJourneyName.isPresent().then(async function (flag) {
        expect(flag).to.be.false;
        await browser.sleep(3000);
    });
});