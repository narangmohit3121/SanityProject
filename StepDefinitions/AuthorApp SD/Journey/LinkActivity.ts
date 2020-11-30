import { When, Then } from "cucumber";
import { browser, element, By } from "protractor";
import chai = require('chai');
var expect = chai.expect;
import { DeleteJourneyContentFldPageLocate } from "../../../PageObjects/AuthorApp POM/Folder/DeleteJourneyContentFolderPage";
import { LinkActivityPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/LinkActivityPage";
import { PostRunElements } from "../../../PageObjects/SanityProjectPages/PostRunPage";
import { CommonLocate } from "../../../PageObjects/Common";
let newJourneyName: string = '';

let deletejrncntfld = new DeleteJourneyContentFldPageLocate();
let linkactivity = new LinkActivityPageLocate();
let expJourneytxt: string = 'Journey Description';

When('User click on Automation Link Activity folder', async function () {
    await browser.sleep(2000);
    await linkactivity.fldAutomationLinkActivity.isDisplayed().then(async function () {
        await linkactivity.fldAutomationLinkActivity.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

When('User click on Client Collection Journey', async function () {
    await linkactivity.jrnClient_Collection_Jrn.isDisplayed().then(async function () {
        await linkactivity.jrnClient_Collection_Jrn.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

When('User click on Client Collection Search Journey', async function () {
    await linkactivity.jrnClient_Collection_Search_Jrn.isDisplayed().then(async function () {
        await linkactivity.jrnClient_Collection_Search_Jrn.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

When('User click on Master Collection Journey', async function () {
    await linkactivity.jrnMaster_Collection_Jrn.isDisplayed().then(async function () {
        await linkactivity.jrnMaster_Collection_Jrn.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

When('User adds Module and Activity for Client Collection', async function () {

    await deletejrncntfld.threeDotsNewModule.isDisplayed().then(async function () {
        await deletejrncntfld.threeDotsNewModule.click().then(async function () {
            await deletejrncntfld.btnAddActivity.isDisplayed().then(async function () {
                await deletejrncntfld.btnAddActivity.click();
            })
        })
    })
});


When("User links Activity to the Content for Client Collection", async function () {
    await browser.sleep(3000);
    await linkactivity.ClientCollectionLbl.isDisplayed().then(async function () {
        await linkactivity.ClientCollectionLbl.click().then(async function () {
            await browser.sleep(3000);
        })
        await browser.driver.switchTo().activeElement().then(function () {
            browser.sleep(5000);
        })
        await linkactivity.MasterCollectionSearchTxt.isDisplayed().then(async function(){
            await linkactivity.MasterCollectionSearchTxt.sendKeys("Client_Collection").then(async function(){
                await browser.sleep(2000);
                await linkactivity.MasterCollectionSearchICON.isDisplayed().then(async function(){
                    await linkactivity.MasterCollectionSearchICON.click().then(async function(){
                        await browser.sleep(2000);
                    })
                })
            })
        })
            await linkactivity.btnSelectClientCollectionContent.isDisplayed().then(async function () {
                await linkactivity.btnSelectClientCollectionContent.click().then(async function () {
                    await browser.sleep(2000);
                    console.log("First ClickEDDDDDDD");
                })
            })
        })
    })

// When('User links Activity to the Content for Master Collection', async function () {
//     await browser.sleep(3000);
//     await linkactivity.tabMastColLnkAct.isDisplayed().then(async function () {
//         await linkactivity.tabMastColLnkAct.click().then(async function () {
//             await browser.sleep(7000);
//         })
//         await browser.driver.switchTo().activeElement().then(function () {
//             browser.sleep(5000);
//         })
//         await linkactivity.fldQACollectionLnkAct.isDisplayed().then(async function () {
//             await linkactivity.fldQACollectionLnkAct.click().then(async function () {
//                 await browser.sleep(7000);
//             })
//             await linkactivity.btnSelectTempSantLnkAct.isDisplayed().then(async function () {
//                 await linkactivity.btnSelectTempSantLnkAct.click().then(async function () {
//                     await browser.sleep(2000);
//                 })
//             })
//         })
//     })
// });



When('User links Activity to the Content for Master Collection', async function () {
    await browser.sleep(3000);
    await linkactivity.tabMastColLnkAct.isDisplayed().then(async function () {
        await linkactivity.tabMastColLnkAct.click().then(async function () {
            await browser.sleep(7000);
        })
        await browser.driver.switchTo().activeElement().then(function () {
            browser.sleep(5000);
        })
        await linkactivity.MasterCollectionSearchTxt.isDisplayed().then(async function(){
            await linkactivity.MasterCollectionSearchTxt.sendKeys("Temp_Sanity_Cnt").then(async function(){
                await browser.sleep(2000);
                await linkactivity.MasterCollectionSearchICON.isDisplayed().then(async function(){
                    await linkactivity.MasterCollectionSearchICON.click().then(async function(){
                        await browser.sleep(2000);
                    })
                })
            })
        })
            await linkactivity.btnSelectTempSantLnkAct.isDisplayed().then(async function () {
                await linkactivity.btnSelectTempSantLnkAct.click().then(async function () {
                    await browser.sleep(2000);
                    console.log("Last ClickEDDDDDDD");
                })
            })
        })
    })







When('User adds Module and Activity for Master Collection', async function () {
    await deletejrncntfld.icnPlusAddModule.isDisplayed().then(async function () {
        await deletejrncntfld.icnPlusAddModule.click().then(async function () {
            await browser.sleep(2000);
        })
    })
    await deletejrncntfld.threeDotsNewModule.isDisplayed().then(async function () {
        await deletejrncntfld.threeDotsNewModule.click().then(async function () {
            await deletejrncntfld.btnAddActivity.isDisplayed().then(async function () {
                await deletejrncntfld.btnAddActivity.click();
            })
        })
    })
});

When("User links Activity to the Content for Search Client Collection", async function () {
    await deletejrncntfld.tabPetronasLnkAct.isDisplayed().then(async function () {
        await deletejrncntfld.tabPetronasLnkAct.click().then(async function () {
            await browser.sleep(2000);
        })
        await browser.driver.switchTo().activeElement().then(function () {
            browser.sleep(2000);
        })
        await deletejrncntfld.fldDoNotDeleteLnkAct.isDisplayed().then(async function () {
            await deletejrncntfld.fldDoNotDeleteLnkAct.click().then(async function () {
                await browser.sleep(2000);
            })
            await linkactivity.fldSprint16LnkAct.isDisplayed().then(async function () {
                await linkactivity.fldSprint16LnkAct.click().then(async function () {
                    await browser.sleep(2000);
                })
                await linkactivity.fldLink_Activity_AMLnkAct.isDisplayed().then(async function () {
                    await linkactivity.fldLink_Activity_AMLnkAct.click().then(async function () {
                        await browser.sleep(2000);
                    })

                    await linkactivity.btnSelectSrcCntColLnkAct.isDisplayed().then(async function () {
                        await linkactivity.btnSelectSrcCntColLnkAct.click();
                    })
                })

            })
        })
    })
});

Then('User should get land on Journey Authoring Page', async function () {
    await linkactivity.txtJourneyName.isDisplayed().then(async function () {
        await linkactivity.txtJourneyName.getText().then(async function (actRegLnkttltext) {
            expect(actRegLnkttltext).to.be.eql(expJourneytxt);
        })
    })
});


When('User clicks on X icon and try to close the Pop up of Link Activity', async function () {
    await linkactivity.iconcloseLinkActivity.isDisplayed().then(async function () {
        await linkactivity.iconcloseLinkActivity.click().then(async function () {
            await browser.sleep(1000);
        })

    })

});
