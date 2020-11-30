import { When, Then } from "cucumber";
import { browser, element, By } from "protractor";
import chai = require('chai');
import { TagContentObjectToThemePageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/TagContentObjectToThemePage";
import { protractor } from "protractor/built/ptor";

var EC = protractor.ExpectedConditions;


let TCOTTheme = new TagContentObjectToThemePageLocate();

When('User should check if sprint 20 folder is present and click on it', async function () {
    await TCOTTheme.icnSprintFolder.isDisplayed().then(async function () {
        await TCOTTheme.icnSprintFolder.click();
    })
});

When('user should check if configure client tab is present top right corner and click on it', async function () {
    await TCOTTheme.btnConfigureClient.isDisplayed().then(async function () {
        await TCOTTheme.btnConfigureClient.click();
    })
});



//------------------------------------------------------------------------------------------------------

When('user should check if plus icon beside content is present and click on it', async function () {
    await TCOTTheme.btnAddContent.isDisplayed().then(async function () {
        await TCOTTheme.btnAddContent.click();
    })
});

When('user should check if new activity is present and click on it', async function () {
    await TCOTTheme.btnNewActivity.isDisplayed().then(async function () {
        await TCOTTheme.btnNewActivity.click();
    })
});

When('user should check if Activity tittle text field is present under activity setting and enter any tittle as {string}', async function (string) {
    await TCOTTheme.txtEnterActivityTittle.isDisplayed().then(async function () {
        await TCOTTheme.txtEnterActivityTittle.sendKeys(string);
    })
});

When('user should check if resource toggle is present under activity setting and turn ON toggle', async function () {
    await TCOTTheme.tglResourceOn.isDisplayed().then(async function () {
        await TCOTTheme.tglResourceOn.click();
    })
});

When('user should check if select theme dropdown is present under activity setting and click on it', async function () {
    await TCOTTheme.ddSelectTheme.isDisplayed().then(async function () {
        await TCOTTheme.ddSelectTheme.click();
    })
});

When('user should check if theme dropdown list is present and select TCOTTheme Automation1 theme', async function () {

    await TCOTTheme.checkbxTheme1.isDisplayed().then(async function () {
        await TCOTTheme.checkbxTheme1.click();
        await browser.executeScript(`arguments[0].style.display = "none"`, element(By.xpath("//div[contains(@class,'cdk-overlay-connected')]")));
        await browser.sleep(1000);
        await browser.executeScript(`arguments[0].style.display = "none"`, element(By.xpath("//div[contains(@class,'cdk-overlay-transparent')]")));
        await browser.sleep(1000);



    })
});


When('user should check if create button is present under activity setting and click on it', async function () {
    await browser.sleep(2000);
    await TCOTTheme.btnCreateActivity.isDisplayed().then(async function () {
        await TCOTTheme.btnCreateActivity.click().then(async function(){
            //console.log('CLicked on Create');
        })
        await browser.sleep(5000);
    })
});


//--------------------------------------------------------------------------------------------------

When('user should check if Tag Content Theme Activity is present and click on it', async function () {
    await TCOTTheme.actvtyPage.isDisplayed().then(async function () {
        await TCOTTheme.actvtyPage.click();
    })
});

When('user should check if General tab is present on top right corner and click on it', async function () {
    await TCOTTheme.tabGeneral.isDisplayed().then(async function () {
        await TCOTTheme.tabGeneral.click();
    })
});

When('user should check if content type select dropdown is present and click on it', async function () {
    await TCOTTheme.ddSelectContent.isDisplayed().then(async function () {
        await TCOTTheme.ddSelectContent.click();
    })
});

When('user should check if content type list dropdown is present and select any content as Action', async function () {
    await TCOTTheme.ddselectContentType.isDisplayed().then(async function () {
        await TCOTTheme.ddselectContentType.click();
        browser.sleep(2000);
    })
});

When('user should check if select theme dropdown is present in CMS and click on it', async function () {
    await TCOTTheme.ddSelectTheme2.isDisplayed().then(async function () {
        await TCOTTheme.ddSelectTheme2.click();
    })
});

// When('user should check if theme list dropdown is present and select TCOTTheme Automation2 theme', async function () {
//     browser.sleep(2000);
//     await TCOTTheme.checkbxTheme2.isDisplayed().then(async function () {
//         await TCOTTheme.checkbxTheme2.click();
//         await browser.executeScript(`arguments[0].style.display = "none"`, element(By.xpath("//div[contains(@class,'cdk-overlay-connected')]")));
//         await browser.executeScript(`arguments[0].style.display = "none"`, element(By.xpath("//div[contains(@class,'cdk-overlay-transparent')]")));
//         await browser.sleep(1000);
//     })
// });


When ('user should check if save draft and publish and exit editor button  is present on right top corner and click on it',async function(){
await TCOTTheme.btnSaveDraft.click().then(async function () {
    await browser.wait(EC.visibilityOf(TCOTTheme.toastMessageSuccess), 20000).then(async function () {
        await TCOTTheme.toastMessageSuccess.click().then(async function () {
            await browser.sleep(2000);
                        await TCOTTheme.btnExitEditor.click().then(async function () {
                        })
                    })
                })
        
    
    
})
});




//-----------------------------------------------------------------------------------------------------------


When('user should check if themes are present and click on any theme cross icon as TCOTTheme Automation1 to remove theme', async function () {
    await TCOTTheme.rmvTheme.isDisplayed().then(async function () {
        await TCOTTheme.rmvTheme.click();
    })
});



//----------------------------------------------------------------------------------------

When ('User should check if three dot of Tag Content Theme Activity is present and click on it',async function(){
     await TCOTTheme.btnThreeDotDeleteActivity.isDisplayed().then(async function(){
         await TCOTTheme.btnThreeDotDeleteActivity.click();
     })
});


Then ('User should check if delete option is present and click on it',async function(){
 await TCOTTheme.btnDeleteActivity.isDisplayed().then(async function(){
     await TCOTTheme.btnDeleteActivity.click();
 })
 await browser.sleep(1000);
 await TCOTTheme.btnDeleteActivityPopup.isDisplayed().then(async function(){
     await TCOTTheme.btnDeleteActivityPopup.click();
 })

});







//--------------------------------------------------------------------------------------


When ('User should check if TCOTTheme Automation1 theme is present and delete it',async function(){
    await TCOTTheme.btnDeleteTheme1.isDisplayed().then(async function(){
        await TCOTTheme.btnDeleteTheme1.click();
    })

    await browser.sleep(1000);
    await TCOTTheme.btnDeleteThemePopup.isDisplayed().then(async function(){
    await TCOTTheme.btnDeleteThemePopup.click();
    })
});

When ('User should check if TCOTTheme Automation2 theme is present and delelte it', async function(){
    await browser.sleep(5000);
    await TCOTTheme.btnDelteTheme2.isDisplayed().then(async function(){
        await TCOTTheme.btnDelteTheme2.click();
    })

    await browser.sleep(1000);
    await TCOTTheme.btnDeleteThemePopup.isDisplayed().then(async function(){
    await TCOTTheme.btnDeleteThemePopup.click();
    })
});