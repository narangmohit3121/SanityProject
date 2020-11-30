// import { Given, When, Then } from "cucumber";
import { Given, When, Then, Before } from "cucumber";
import { MyInsightPageLocate } from "../../../PageObjects/UserApp POM/My Journey/MyInsightPage";
import Testdata from "../../../testData.json"
import { browser, element, By, ElementFinder } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { async } from "q";
import { join } from 'path';
import { protractor } from "protractor/built/ptor";
import { apiHelperFunctions } from "../../apiHelperClass";
var expect = chai.expect;

var EC = protractor.ExpectedConditions;

// let admloginpage = new LoginPageLocate();
let myInsights = new MyInsightPageLocate();



let apiHelper = new apiHelperFunctions();

Before({ tags: "@MyInsight1" }, async function () {
  await apiHelper.resetUser("qa_momenta@bts.com", "ABab12$", "bts", Testdata.apiBuildVersion, "777efae5d275fc1af6d2", "myinsightautomationmansha1@petronas.com", "97b5ec410f6e1de181f5")
  console.log("API Called for MyInsight !!!");
})




When('User click on configure client button', { timeout: 70 * 1000 }, async function () {
    await browser.sleep(5000);
    await myInsights.configureClientBtn.isDisplayed().then(async function () {
        await myInsights.configureClientBtn.click().then(async function () {
            await browser.sleep(3000);

        });
    })
});

When('User click on top right corner arrow to navigate My Insights option', async function () {
    await myInsights.rightsideArrow.isDisplayed().then(async function () {
        await myInsights.rightsideArrow.click().then(async function () {
            await browser.sleep(3000);

        });

        await myInsights.rightsideArrow.click().then(async function () {
            await browser.sleep(3000);
        });
    })
});

When('User click My Insights option', async function () {
    await myInsights.myInsightsLbl.isDisplayed().then(async function () {
        await myInsights.myInsightsLbl.click().then(async function () {
            await browser.sleep(3000);
        });
    })
});


Then('User should be able to see My Insights configuration window', async function () {
    await myInsights.enableMyInsightsLbl.getText().then(function (text) {
        expect(text).to.be.eql("Enable My Insights")
    });
});

When('User click on My Insights Export Template link', async function () {
    await myInsights.myInsightsExportTemplatLnke.isDisplayed().then(async function () {
        await myInsights.myInsightsExportTemplatLnke.click().then(async function () {
            await browser.sleep(3000);
        });
    })
});


Then('User should be able to download My Insights Template', async function () {

});

When('User click on Cancel button after landed My Insights', async function () {
    await myInsights.cancelBtn.isDisplayed().then(async function () {
        await myInsights.cancelBtn.click().then(async function () {
            await browser.sleep(3000);
        });
    })
});

Then('User should see insight window close and user landed on client landing page', async function () {
    await myInsights.configureClientBtn.getText().then(async function (text) {
        expect(text).to.be.eql("CONFIGURE CLIENT")
    });
});

When("User click on Enable My Insights toggle to set as Yes", async function () {
    await myInsights.enableMyInsightToggleBtn.isSelected().then(async function (insightToggle) {
        console.log("Second time toggle button   "+insightToggle);
       if (insightToggle == false) {
           
            await myInsights.enableMyInsightToggleBtn.click().then(async function () {
                await browser.sleep(1000);
                console.log("Toggle button clicke  for Yes"); 

            })
        }

    })
    await myInsights.enableMyInsightToggleBtn.isSelected().then(async function (insightToggle) {
        console.log("Second time toggle button after select Yes   "+insightToggle);
    })
});


When('User upload BTSInsightsTemplate docx file', async function () {
    let BTSInsightsTemplatePath: string = join(process.cwd(), 'TestData', 'BTSInsightsTemplate.docx');
    await myInsights.fileUploadTab.sendKeys(BTSInsightsTemplatePath).then(async function () {
        await browser.sleep(5000);
    });
})

Then('User should see BTSInsightsTemplate is uploaded properly', async function () {
    await myInsights.attchedFileIconWithText.isDisplayed().then(function (flag) {
        expect(flag).to.be.true;
    });
});


When('User click Save button after BTSInsightsTemplate uploaded', async function () {
    await myInsights.saveBtn.isDisplayed().then(async function () {
        await myInsights.saveBtn.click().then(async function () {
            await browser.sleep(5000);
        });
    })
});

When('User navigate home page of MyInsightAutomationJourney journey', { timeout: 70 * 1000 }, async function () {
    browser.ignoreSynchronization = true;
    await browser.sleep(1500);
});

Then('User should see My Insights option with eye icon', async function () {
    browser.ignoreSynchronization = true;
    await browser.sleep(2000);
    await myInsights.myInsightInLeftPanenlWithEyeIcon.isDisplayed().then(async function (flag) {
        expect(flag).to.be.true;
        await browser.sleep(3000);
    });
});

// When("User click on Enable My Insights toggle to set as No", async function () {
//     await myInsights.enableMyInsightToggleBtn.isEnabled().then(async function (insightToggle) {
// console.log("Before click toggle button  "+insightToggle);
//         if (insightToggle == true) {
//             await myInsights.enableMyInsightToggleBtn.click().then(async function () {
//                 console.log("After click toggle button  "+insightToggle);
//                 await browser.sleep(5000);

//             })
//         }  
//         else{
//             await browser.sleep(500);
//             console.log("Else block");
//         }  

//     })
// });





When("User click on Enable My Insights toggle to set as No", async function () {
    await myInsights.ToggleTxt.isDisplayed().then(async function () {
        await myInsights.ToggleTxt.getText().then(async function(insightToggle){
            if (insightToggle == "Yes") {
                await myInsights.enableMyInsightToggleBtn.click().then(async function () {
                    console.log("After click toggle button  "+insightToggle);
                    await browser.sleep(5000);
    
                })
            }  
            // else{
            //     await browser.sleep(500);
            //     console.log("Else block");
            // } 
        })
//console.log("Before click toggle button  "+insightToggle);
        
         

    })
});



Then('User should not see My Insights option with eye icon', async function () {
    browser.ignoreSynchronization = true;
    await myInsights.myInsightInLeftPanenlWithEyeIcon.isPresent().then(async function (flag) {
        expect(flag).to.be.false;
        await browser.sleep(3000);
    });
});



When('User click My Insights option with eye icon', async function () {
    await myInsights.myInsightInLeftPanenlWithEyeIcon.isDisplayed().then(async function () {
        await myInsights.myInsightInLeftPanenlWithEyeIcon.click().then(async function () {
            await browser.sleep(6000);
        });
    })
});


Then("User should see No Insights available", async function () {
    await browser.sleep(2000);
    await myInsights.noInsightsAvailable.getText().then(async function (text) {
    expect(text).to.be.eql("No insights available")

    });
});

When('User click on start button of MyInsightContentooneActivity', async function () {
    await myInsights.startBtn.isDisplayed().then(async function () {
        await myInsights.startBtn.click().then(async function () {
            await browser.sleep(500);
        });
    })
});

When('User click on Add an Insight button to add insights', async function () {
    await browser.sleep(2000);
    await myInsights.addInsighttBtn.isDisplayed().then(async function () {
        await myInsights.addInsighttBtn.click().then(async function () {
            await browser.sleep(1000);
        });
    })
});

When('User add some insights and save', async function () {
    let columnTextWrapper: ElementFinder = await element(By.xpath(`//div[contains(@class,'fr-element')]`));
        await columnTextWrapper.click().then(async function () {
            await browser.sleep(2000);
        })
        await columnTextWrapper.sendKeys('This is first insight in automation test for momenta of sanity test.');
        await columnTextWrapper.click().then(async function () {
            await browser.sleep(2000);
        });
       await myInsights.insightSaveBtn.click()
   await browser.waitForAngularEnabled(true);
});

Then('User should see insight should be added', async function () {

    await browser.waitForAngularEnabled(false)

    await browser.sleep(5000)
    await myInsights.oneActivityinsightText.getText().then(async function (text) {
        expect(text).to.be.eql("This is first insight in automation test for momenta of sanity test.")
        await browser.sleep(1000)

        await browser.waitForAngularEnabled(true)
    });
});


When('User click on Resume button of MyInsightContentooneActivity', async function () {
    await myInsights.oneActivityResumeBtn.isDisplayed().then(async function () {
        await myInsights.oneActivityResumeBtn.click().then(async function () {
            await browser.sleep(1000);
        });
    })
});




When('User click on continue button of activity', async function () {
    await myInsights.ContinueButtonOfActivityBtn.isDisplayed().then(async function () {
        await myInsights.ContinueButtonOfActivityBtn.click().then(async function () {
            await browser.sleep(1000);
        });
    })
});

When('User click on Edit button to edit existing insight', async function () {
    await myInsights.editBtn.isDisplayed().then(async function () {
        await myInsights.editBtn.click().then(async function () {
            await browser.sleep(10000);
        });
    })
});

// below code is for edit insight
When('User edit existing insight and click save', async function () {
    let columnTextWrapper: ElementFinder = await element(By.xpath(`//div[contains(@class,'fr-element')]`));
        await columnTextWrapper.click().then(async function () {
            await browser.sleep(2000);
        })
        await columnTextWrapper.clear();
        await browser.sleep(700);
        await columnTextWrapper.sendKeys('This is first insight in automation test for momenta of sanity test.updated.');
        await browser.sleep(700);
        await columnTextWrapper.click().then(async function () {
            await browser.sleep(2000);
        });
       await myInsights.insightSaveBtn.click()
   await browser.waitForAngularEnabled(true);
});

// below is the code for edit insight validation wich is done
Then('User should see updated insight for MyInsightContentooneActivity', async function () {
    await browser.sleep(4000)
    await myInsights.EditedOneActivityInsighttTxt.getText().then(async function (text) {
        expect(text).to.be.eql("This is first insight in automation test for momenta of sanity test.updated.")

    });
});

When('User click on Delete button to delete existing MyInsightContentooneActivity insight', async function () {
    await myInsights.deleteBtn.isDisplayed().then(async function () {
        await myInsights.deleteBtn.click().then(async function () {
            await browser.sleep(4000);
        });
    })
});

When('User click Yes,Cancel button to confirm delete insight', async function () {
    await myInsights.YesDeleteBtn.isDisplayed().then(async function () {
        await myInsights.YesDeleteBtn.click().then(async function () {
            await browser.sleep(4000);
        });
    })
});



Then('User should see insight is deleted for MyInsightContentooneActivity', async function () {
    browser.ignoreSynchronization = true;
    await browser.sleep(2000);
    await myInsights.EditedOneActivityInsighttTxt.isPresent().then(async function (flag) {
        expect(flag).to.be.false;
        await browser.sleep(2000);
    });
});



Then('User should see all insights should be displayed on My Insights page', async function () {
    await browser.sleep(1000);
    await myInsights.firstActivityInsight.getText().then(async function (text) {
        expect(text).to.be.eql("This is first insight in automation test for momenta of sanity test.")
    });
    await browser.sleep(1000);
    await myInsights.secondtActivityInsight.getText().then(async function (text) {
        expect(text).to.be.eql("This is second insight for two activity in automation test for momenta of sanity test.")
    });
    await browser.sleep(1000);
    await myInsights.threeActivityInsight.getText().then(async function (text) {
        expect(text).to.be.eql("This is three insight for two activity in automation test for momenta of sanity test.")
    });
    await browser.sleep(1000);

});


When('User add insights for one activity and save', async function () {
    let columnTextWrapper1: ElementFinder = await element(By.xpath(`//div[contains(@class,'fr-element')]`));
        await columnTextWrapper1.click().then(async function () {
            await browser.sleep(2000);
        })
        await columnTextWrapper1.sendKeys('This is first insight in automation test for momenta of sanity test.');
        await columnTextWrapper1.click().then(async function () {
            await browser.sleep(2000);
        });
       await myInsights.insightSaveBtn.click()
   await browser.waitForAngularEnabled(true);

   await browser.sleep(2000);
   
});


When('User add insights for two activity and save', async function () {
    let columnTextWrapper2: ElementFinder = await element(By.xpath(`//div[contains(@class,'fr-element')]`));
        await columnTextWrapper2.click().then(async function () {
            await browser.sleep(2000);
        })
        await columnTextWrapper2.sendKeys('This is second insight for two activity in automation test for momenta of sanity test.');
        await columnTextWrapper2.click().then(async function () {
            await browser.sleep(2000);
        });
       await myInsights.insightSaveBtn.click()
   await browser.waitForAngularEnabled(true);

   await browser.sleep(2000);
});


When('User add insights for three activity and save', async function () {
    let columnTextWrapper3: ElementFinder = await element(By.xpath(`//div[contains(@class,'fr-element')]`));
        await columnTextWrapper3.click().then(async function () {
            await browser.sleep(2000);
        })
        await columnTextWrapper3.sendKeys('This is three insight for two activity in automation test for momenta of sanity test.');
        await columnTextWrapper3.click().then(async function () {
            await browser.sleep(2000);
        });
       await myInsights.insightSaveBtn.click()
   await browser.waitForAngularEnabled(true);

   await browser.sleep(2000);   
});


When('User provide insight name in Filter by keyword text box to search insight', async function () {
    await myInsights.filterInsightTxt.isDisplayed().then(async function(){
        await myInsights.filterInsightTxt.clear().then(async function(){
            await myInsights.filterInsightTxt.sendKeys("second").then(async function(){
                browser.sleep(2000);
            })
        })
    })
  });




  Then('User should see same insight should be searched and displayed on My Insights page', async function () {
    await browser.sleep(1000);
    await myInsights.secondtActivityInsight.getText().then(async function (text) {
        expect(text).to.be.eql("This is second insight for two activity in automation test for momenta of sanity test.")
        await browser.sleep(1000);
    });

    await myInsights.firstActivityInsight.isPresent().then(async function (flag) {
        expect(flag).to.be.false;
        await browser.sleep(1000);
    });

    await myInsights.threeActivityInsight.isPresent().then(async function (flag) {
        expect(flag).to.be.false;

    });
    await browser.sleep(1000);

});


