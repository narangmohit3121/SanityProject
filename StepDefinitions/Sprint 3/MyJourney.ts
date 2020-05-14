import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../config.json"
import chai = require('chai');
import { By } from "protractor";
import { async } from "q";
import { MyJourneyPageLocate } from "../../PageObjects/Sprint 3/MyJourneyPage.js";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage.js";
import { ClientPageLocate } from "../../PageObjects/ClientLandingPage.js";
let expect = chai.expect;
let adminlandingpage = new AdminLandingPageLocate();
let clientlandingpage = new ClientPageLocate();
let myjourneypage = new MyJourneyPageLocate();
let stageSectionsArray1: Array<string> = [];
// let stageSectionsArray2: Array<string> = ['A Tale of Two Mindsets',
// 'Obsessing Relentlessly About the Customer (Design Thinking)',
// 'Leading from the future back (Future-Back Thinking)'];
let stageSectionsArray2: Array<string> = ['Episode 1: Know the Industry Executive Mindset',
'Episode 2: Engage Executive Decision Makers',
'Episode 3: Demonstrate Business Value'];
let moduleSectionsArray1: Array<string> = [];
// let moduleSectionsArray2: Array<string> = ['Introduction to Emergent Leadership',
// 'Champion understanding of the customer',
// 'Inquire Thoroughly',
// 'Ask Who / What / Why',
// 'Start with the end in mind',
// 'Perform regular "future storming" exercises',
// 'Articulate "Opportunity Spaces"',
// 'Articulate the business case for change',
// 'Stay informed of external practices and benchmarks of excellence'];
let moduleSectionsArray2: Array<string> = ['Welcome to Sales Skills Simulation',
'Opportunities and trends in the industry',
'Experience executive decision making',
'Develop financial acumen',
'Create a reframe',
'Module 2A',
'Module 2B',
'Module 2C',
'Module 3A',
'Module 3B',
'Module 3C',
'New Module'];

let firstWindow:any = browser.getAllWindowHandles().then(async function(handles){
    let firstWindowHandle = handles[0];
    return firstWindowHandle;
});


When('User is on Client Collection Page', async function () {
    await adminlandingpage.tabClient.click().then(async function () {
        await adminlandingpage.colPetronas.click().then(async function () {
            await clientlandingpage.momentaPetronasTitle.getText().then(async function (text) {
                console.log(text);
            })
        })
    })
});

//Multiple stepdefinition match

// When('User should click on Client Tab', async function () {
//     await adminlandingpage.momentaClientTab.isDisplayed().then(async function () {
//         await adminlandingpage.momentaClientTab.click();
//     })
// });

When('User should click on LnT folder', async function () {
    await adminlandingpage.colLNT.isDisplayed().then(async function () {
        await adminlandingpage.colLNT.click();
    })
});

When('User should check if plus icon is present besides Journeys and click on it to select copy', async function () {
    await clientlandingpage.copyJourneyPlus.isDisplayed().then(async function () {
        await clientlandingpage.copyJourneyPlus.click().then(async function () {
            await browser.sleep(2000).then(async function () {
                await clientlandingpage.copyJourneyPopupSelect.click().then(async function(){
                    await browser.driver.switchTo().activeElement().then(function () {
                        browser.sleep(2000);
                    })  
                })
            })
        })
    })
});

When('User selects any Journey to preview under Copy Journey popup', async function () {

    await clientlandingpage.momentaJourneySearch.sendKeys("microsoft sales skills").then(async function () {
        await clientlandingpage.momentaJourneyPreviewBtn.click().then(function () {
            browser.sleep(3000);
        })
    })
});

// Then('My Journey page should open up in different tab', async function () {
//     await browser.getAllWindowHandles().then(function (handles) {
//         let firstWindowHandle = handles[0];
//         let secondWindowHandle = handles[1];
//         browser.switchTo().window(secondWindowHandle).then(function () {
//             browser.sleep(5000).then(async function () {
//                 await myjourneypage.myJourneyPageTitle.isDisplayed().then(async function () {
//                     await myjourneypage.myJourneyPageTitle.getText().then(async function (text) {
//                         console.log(text)
//                         await browser.close();
//                         browser.switchTo().window(firstWindowHandle).then(async function () {
//                             await browser.sleep(3000).then(async function(){
//                                 //await browser.close();
//                             });
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

Then('My Journey page should open up in different tab', async function () {
    await browser.getAllWindowHandles().then(function (handles) {
        let firstWindowHandle = handles[0];
        let secondWindowHandle = handles[1];
        browser.switchTo().window(secondWindowHandle).then(function () {
            browser.sleep(5000).then(async function () {
                await myjourneypage.myJourneyPageTitle.isDisplayed().then(async function () {
                    await myjourneypage.myJourneyPageTitle.getText().then(async function (text) {
                        console.log(text)
                        // await browser.close();
                        // browser.switchTo().window(firstWindowHandle).then(async function () {
                        //     await browser.sleep(3000).then(async function(){
                        //         //await browser.close();
                        //     });
                        // })
                    })
                })
            })
        })
    })
});

Then('List of Stages Modules and Activities are to be shown on My Journey page', { timeout: 50 * 1000 }, async function () {
    await myjourneypage.myJourneyStageList.each(function (element) {
        element.getText().then(function (text) {
            console.log("Stages : " + text);
            stageSectionsArray1.push(text);
        })
    })
    expect(stageSectionsArray2).to.include.members(stageSectionsArray1);
    await myjourneypage.myJourneyModuleList.each(function (element) {
        element.getText().then(function (text) {
            console.log("Modules : " + text);
            moduleSectionsArray1.push(text);
        })
    })
    expect(moduleSectionsArray2).to.include.members(moduleSectionsArray1);
    await myjourneypage.myJourneyActivityCount.count().then(function (count) {
        console.log(count);
        expect(count).to.be.equal(9);
            
    })
});

Then('My Journey title with its description should be displayed in header part of My Journey page', async function (){
    await myjourneypage.myJourneyPageTitle.isDisplayed().then(async function(){
        await myjourneypage.myJourneyPageTitle.getText().then(async function(text){
            console.log(text)
            expect(text).to.be.equal("My Journey")
        }) 
    })

    await myjourneypage.myJourneyDescription.isDisplayed().then(async function(){
        await myjourneypage.myJourneyDescription.getText().then(async function(txt){
            console.log(txt)
            expect(txt).to.be.equal("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.");
        })
    })
})

Then('Stages should be present under My Journey page', { timeout: 50 * 1000 }, async function(){
    await myjourneypage.myJourneyStageList.each(function (element) {
        element.getText().then(function (text) {
            stageSectionsArray1.push(text);
            console.log("Stages are as follows : " + text)
        })
    })
    expect(stageSectionsArray2).to.include.members(stageSectionsArray1);

})

Then('Modules should be shown under Stages in My Journey page', {timeout: 50 * 1000}, async function(){
    await myjourneypage.myJourneyModuleList.each(function (element) {
        element.getText().then(function (txt) {
            moduleSectionsArray1.push(txt);
            console.log("Modules are as follows : " + txt)
        })
    })
    expect(moduleSectionsArray2).to.include.members(moduleSectionsArray1);
})

Then('Module window should be closed for MyJourney', async function () {
    await browser.close().then(async function(){
        await browser.switchTo().window(firstWindow);
        
    })
})