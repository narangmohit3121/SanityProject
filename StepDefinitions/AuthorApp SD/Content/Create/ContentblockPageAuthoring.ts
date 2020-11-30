import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../../../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { ParticipantLoginPageLocate } from "../../../../PageObjects/UserApp POM/Login/ParticipantLoginPage.js";
import { async } from "q";
import { PageblockPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/PageBlockPage";
import { ContentblockPageAuthoringLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/ContentBlockAuthoringPage.js";

let contentEditerPageTitle = "Momenta";
let expectedPlaceholderValue = "Please enter your user id here";

var expect = chai.expect;

let contentblockpage = new ContentblockPageAuthoringLocate();

When('User click to Content Block Automation content folder', async function () {
    
        await contentblockpage.cntContentBlockAutomation.isDisplayed().then(async function () {
            await contentblockpage.cntContentBlockAutomation.click().then(function () {
            

            })
        })
    
});

Then('content block should be displayed to the user', async function () {
    await contentblockpage.blkContent.isDisplayed().then(async function (result) {
        expect(result).to.be.true;

    });
});


When('user click on edit content link for content block', async function () {
    
    await contentblockpage.lnkEditContent.isDisplayed().then(async function () {
        await contentblockpage.lnkEditContent.click().then(async function () {
            browser.sleep(6000)

        })
    })

});

When('user click on A of word editer window', async function () {
    browser.sleep(5000)

    await contentblockpage.lnkAForAddTextWindow.isDisplayed().then(async function () {
        await contentblockpage.lnkAForAddTextWindow.click().then(async function () {
            browser.sleep(10000)

            

        })
    })

 });


 When('user enter journyscriptId as {string} Label as {string} placeholder as {string} characterLimit as {string}', async function (jid, lable, placeholder, characterLimit) {
    await contentblockpage.txtJourneyScriptId.sendKeys(jid);
    browser.sleep(3000) 
    await contentblockpage.txtInputLabel.sendKeys(lable); 
    browser.sleep(3000) 
    await contentblockpage.txtInputPlaceHolder.sendKeys(placeholder);
    browser.sleep(3000) 
    await contentblockpage.txtCharecterLimit.sendKeys(characterLimit);  
    browser.sleep(6000) 

  });


  When('user click on save button for contentBlock of AddTextfiled', async function () {
    
    await contentblockpage.btnSave.isDisplayed().then(async function () {
        await contentblockpage.btnSave.click().then(async function () {

        })
    })

});


When('user click on save button for TextEntry Editer', async function () {
    
    await contentblockpage.btnSaveTextEntryEditer.isDisplayed().then(async function () {
        await contentblockpage.btnSaveTextEntryEditer.click().then(function () {

        })
    })

});


Then('user should see same label and placeholder in contentBlock editer', async function () {
    await contentblockpage.lblInputLable.isDisplayed().then(async function (result) {
        expect(result).to.be.true;
        await contentblockpage.lblTextfilefPlacefolder.isDisplayed().then(async function (result) {
            expect(result).to.be.true;
            

    });
});
});


When('user enter journyscriptId as {string} placeholder as {string} characterLimit as {string}', async function (jid, placeholder, characterLimit) {
    await contentblockpage.txtJourneyScriptId.sendKeys(jid);
    await contentblockpage.txtInputPlaceHolder.sendKeys(placeholder); 
    await contentblockpage.txtCharecterLimit.sendKeys(characterLimit);  

  });


  Then('user should see content editer window without label', async function () {

    await browser.getTitle().then(async function(pageTitle){
        
        expect(pageTitle).to.eql(contentEditerPageTitle);
    })

});
// need to be validedted properly 
Then('user should see same caption for placeholder in content editer window', async function () {
    await contentblockpage.txtForInputPlaceHolder.isDisplayed().then(async function () {
        await contentblockpage.txtForInputPlaceHolder.getText().then(async function (actualPlaceholdervalue) {
            expect(expectedPlaceholderValue).to.eql(contentEditerPageTitle);

        })
    });
});


When('user enter journyscriptId as {string} Label as {string} characterLimit as {string}', async function (jid, lable, characterLimit) {
    await contentblockpage.txtJourneyScriptId.sendKeys(jid);
  
     await contentblockpage.txtInputLabel.sendKeys(lable); 
      
    await contentblockpage.txtCharecterLimit.sendKeys(characterLimit);  
    

  });

  Then('user should see content editer window without placeholder', async function () {
    await browser.getTitle().then(async function(pageTitle){
        expect(pageTitle).to.eql(contentEditerPageTitle);
    })
});



When('user click on copy icon of edit content Bar', async function () {
    await browser.actions().mouseMove(contentblockpage.icoForCopyEditContentBar).perform().then(async function(){
        await contentblockpage.icoForCopyEditContentBar.isDisplayed().then(async function () {
            browser.sleep(5000)
            await contentblockpage.icoForCopyEditContentBar.click().then(function () {
                browser.sleep(2000)
    
                console.log("COPY ICON clicked !!!!!!!!!!!!1");
    
            })
        })
    })
    

});