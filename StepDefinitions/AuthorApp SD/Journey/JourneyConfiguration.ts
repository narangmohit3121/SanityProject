import { When, Then } from "cucumber";
import { browser } from "protractor";
import { JourneyConfigurationLocate } from "../../../PageObjects/AuthorApp POM/Journey/JourneyConfiguration";
import { HelperFunctions } from "../../HelperClass";
import { apiHelperFunctions } from "../../apiHelperClass";
let helper = new HelperFunctions();
let apihelper = new apiHelperFunctions();
import chai = require("chai");
var expect = chai.expect;
let journeyconfiguration = new JourneyConfigurationLocate();


let expmyjourneyttl :String = "Journey Configuration";
let expmyjourneyttlchevron :String = "My Journey";





When("User updates General Settings under Journey Configuration for MSFT", async function () {
    //await helper.setAllJourneyToggles(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
    await helper.setShowFullJourneyNameSetting(true);
    await helper.setDirectLaunchActivitySetting(true);
    await helper.setSideMenuCollapsedSetting(false);
    await helper.setUseAzureMediaPlayerSetting(true);
    await helper.setSkipJourneyDetailScreenSetting(true);
    await helper.setHideLeaderBoardSetting(true);
    await helper.setShowCompletedActivitiesSetting(false);
    await helper.setHasEntryPageSetting(true);
    await helper.setDisableLocksSetting(true);
    await helper.setDisableNotificationsSetting(false);
    await helper.setDisableVideoForwardingSetting(false);
    await helper.setShowCompletionStatusSetting(true);
    await helper.setShowSubMenuNavigationForJourneySetting(true);
    await helper.setShowSupportLinkAsPopUpSetting(true);
    await helper.setContentSharingSetting(false);
    await helper.setHideLeaderBoardSetting(false);
    await browser.sleep(3000);




})

When("User updates General Settings under Journey Configuration for Chevron", async function () {
    //await helper.setAllJourneyToggles(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
    await helper.setShowFullJourneyNameSetting(false);
    await helper.setDirectLaunchActivitySetting(false);
    await helper.setSideMenuCollapsedSetting(false);
    await helper.setUseAzureMediaPlayerSetting(false);
    await helper.setSkipJourneyDetailScreenSetting(false);
    await helper.setHideLeaderBoardSetting(false);
    await helper.setShowCompletedActivitiesSetting(true);
    await helper.setHasEntryPageSetting(false);
    await helper.setDisableLocksSetting(false);
    await helper.setDisableNotificationsSetting(false);
    await helper.setDisableVideoForwardingSetting(true);
    await helper.setShowCompletionStatusSetting(true);
    await helper.setShowSubMenuNavigationForJourneySetting(true);
    await helper.setShowSupportLinkAsPopUpSetting(false);
    await helper.setContentSharingSetting(false);
    await helper.setHideLeaderBoardSetting(false);
    await browser.sleep(3000);




})

When("User clicks on Continue button", async function () {
    browser.waitForAngularEnabled(false);

    await journeyconfiguration.continueBtn.click().then(async function () {
        await browser.sleep(5000);
    })



    browser.waitForAngularEnabled(true);
})

When("Author User reset the Journey data for MSFT", async function () {


    await apihelper.resetUser("qa_momenta@bts.com", "ABab12$", "bts", "1.1.20", "5d82323fd9b8ca499403e5bd", "j.c@petronas.com", "26a322dfc835a0dfe762");


})

// When('User clicks on X icon and try to close the P', async function () {
//     await journeypopuppage.iconclose.isDisplayed().then(async function () {
//         await journeypopuppage.iconclose.click().then(async function () {
//             await browser.sleep(1000);


//         })

//     })

// });


Then('User validates Show Full Journey Name toggle for MSFT', async function () {
    browser.waitForAngularEnabled(false);
    await journeyconfiguration.ttlmyJourney.isDisplayed().then(async function () {

        await journeyconfiguration.ttlmyJourney.getText().then(async function (txt) {
            expect(txt).to.be.contains(expmyjourneyttl);
            console.log(txt);

        })
    })
    
    browser.waitForAngularEnabled(true);
});


Then('User validates Direct launch activity toggle for MSFT', async function () {
    browser.waitForAngularEnabled(false);
    await journeyconfiguration.btncontinuefirstactivity.isDisplayed().then(async function () {
        await journeyconfiguration.btncontinuefirstactivity.isPresent().then(async function (isPresent) {
            expect(isPresent).to.be.true;
        })
    })
    browser.waitForAngularEnabled(true);
});


Then('User validates side menu collapsed toggle for MSFT', async function () {
    browser.waitForAngularEnabled(false);
    await journeyconfiguration.logosidemenu.isDisplayed().then(async function () {
        await journeyconfiguration.logosidemenu.isPresent().then(async function (isPresent) {
            expect(isPresent).to.be.true;
        })
    })
    browser.waitForAngularEnabled(true);
});



Then('User validates disable locks toggle', async function () {
    browser.waitForAngularEnabled(false);
    await journeyconfiguration.btnmyJourney.isDisplayed().then(async function () {

        await journeyconfiguration.btnmyJourney.click().then(async function () {

            
        })

        

        })
    })
    

    Then('User validates hide leaderboard toggle', async function () {
        browser.waitForAngularEnabled(false);
        await journeyconfiguration.btnmyJourney.isDisplayed().then(async function () {
    
            await journeyconfiguration.btnmyJourney.click().then(async function () {
    
                // await journeyconfiguration.btnstart.equals().then(async function(count) {
                //     expect(count).to.equal(2);
    
                // })
            })
    
            
    
            })
        })







        Then('User validates Show Full Journey Name toggle for Chevron', async function () {
            browser.waitForAngularEnabled(false);
            await journeyconfiguration.ttlmyJourney.isDisplayed().then(async function () {
        
                await journeyconfiguration.ttlmyJourney.getText().then(async function (txt) {
                    expect(txt).to.be.contains(expmyjourneyttlchevron);
                    console.log(txt);
        
                })
            })
            
            browser.waitForAngularEnabled(true);
        });
        
        
        Then('User validates Direct launch activity toggle for Chevron', async function () {
            browser.waitForAngularEnabled(false);
            await journeyconfiguration.btnvalidatedivebackin.isDisplayed().then(async function () {
                await journeyconfiguration.btnvalidatedivebackin.isPresent().then(async function (isPresent) {
                    expect(isPresent).to.be.true;
                })
            })
            browser.waitForAngularEnabled(true);
        });
        
        
        Then('User validates side menu collapsed toggle for Chevron', async function () {
            browser.waitForAngularEnabled(false);
            await journeyconfiguration.logosidemenu.isDisplayed().then(async function () {
                await journeyconfiguration.logosidemenu.isPresent().then(async function (isPresent) {
                    expect(isPresent).to.be.true;
                })
            })
            browser.waitForAngularEnabled(true);
        });
        
        
        
        Then('User validates disable locks toggle for Chevron', async function () {
            browser.waitForAngularEnabled(false);
            await journeyconfiguration.btnmyJourney.isDisplayed().then(async function () {
        
                await journeyconfiguration.btnmyJourney.click().then(async function () {
        
                    
                })
        
                
        
                })
            })
            
        
            Then('User validates hide leaderboard toggle for Chevron', async function () {
                browser.waitForAngularEnabled(false);
                await journeyconfiguration.btnmyJourney.isDisplayed().then(async function () {
            
                    await journeyconfiguration.btnmyJourney.click().then(async function () {
            
                        
                    })
            
                    
            
                    })
                })
  

    When("Author User reset the Journey data for Chevron", async function () {


                    await apihelper.resetUser("qa_momenta@bts.com", "ABab12$", "bts", "1.1.20", "5d82323fd9b8ca499403e5bd", "j.c@petronas.com", "26a322dfc835a0dfe762");
                
                
                })