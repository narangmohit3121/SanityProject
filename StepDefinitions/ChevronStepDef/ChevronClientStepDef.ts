import { Given, When, Then } from "cucumber";
import { browser, by, element, By, protractor, ExpectedConditions, Browser, ElementFinder, ElementArrayFinder } from "protractor";
import {ParticipantAssessment} from "../../PageObjects/ChevronPages/ChevronProdPages";
import config from "../config.json"
//import chai from "chai";
import chai = require('chai');
let expect = chai.expect;
import { async } from "q";
//import _ from "lodash";
//import { Driver } from "selenium-webdriver/ie";
//var expect = chai.expect;
//declare var require: any;
let EC = ExpectedConditions;
let pa = new ParticipantAssessment();
//let path = require("path");

//var Excel = require('xlsx');
//var {setDefaultTimeout} = require('cucumber');

var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);



Given('I will navigate participant page and login with {string} and {string}', async (email, password) => {
  await browser.sleep(5000)
  await browser.get(config.ChevronProdUrl)
  await browser.sleep(5000)
  await browser.wait(EC.visibilityOf(pa.emailField),15000)
  await pa.emailField.sendKeys(email)
  await browser.wait(EC.visibilityOf(pa.pwdField),15000)
  await pa.pwdField.sendKeys(password)
  await pa.loginBtn.click()
  await browser.sleep(2000)  

    });

    Then('I will check the Title as {string}', async function (title) {
      await browser.waitForAngularEnabled(false)
       await pa.pageTitle.getText().then(async function (text) { 
      await console.log("the Header is ==>  " + text)
       await expect(title).to.equal(text)
      await browser.waitForAngularEnabled(true)
    
      })
    });

    Then('I will check the pgTitle is {string}', async function (title) {
      await browser.waitForAngularEnabled(false)
       await pa.pgTitle.getText().then(async function (text) { 
      await console.log("the Header is ==>  " + text)
       await expect(title).to.equal(text)
      await browser.waitForAngularEnabled(true)
    
      })
    });



    Then('I fill Registration page', async function () {
      await browser.waitForAngularEnabled(false)
        await browser.sleep(2000)
      await pa.fullName.sendKeys("Pramod Shinde")
      await browser.sleep(1000)
      await pa.emailTextBox.sendKeys("pramod.shinde@chevron.com")
      await browser.sleep(1000)
      await browser.waitForAngularEnabled(true)
    });


    Then('I will click on Continue button', async function () {
      await browser.waitForAngularEnabled(false)
      await browser.sleep(1000)
      await element(By.xpath('//span[@class="plugin-common__btn-continue__text"]')).click();
      await browser.sleep(3000)
      await browser.waitForAngularEnabled(true)
    
    });


    Then('I select dropdown values', async function () {
      await browser.waitForAngularEnabled(false)
      await browser.sleep(2000)
      await pa.drpdn1.sendKeys("D. 6-10 years");
      await browser.sleep(1000)
      await pa.drpdn2.sendKeys("Australia, Asia Pacific");
      await browser.sleep(1000)
      await pa.drpdn3.sendKeys("C. Manager");
      await browser.sleep(2000)
      await browser.waitForAngularEnabled(true)
    });


    Then('I click on My Learning Path menu', async function () {
      await browser.waitForAngularEnabled(false)
      await browser.wait(EC.visibilityOf(pa.learningPath),15000)
      await browser.sleep(2000)
      await pa.learningPath.click()
      await browser.waitForAngularEnabled(true)
    });


Then('I click on Start button and initialise the assessment', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.wait(EC.visibilityOf(pa.startBtn),15000)
  await browser.sleep(5000)
  await pa.startBtn.click()
  await browser.waitForAngularEnabled(true)
});



Then ('I selects {string} from dropdown', async (value) => {
  await browser.waitForAngularEnabled(false)
  await browser.wait(EC.visibilityOf(pa.journeyDropdown),15000)
  await browser.sleep(2000)
  await pa.journeyDropdown.click()
  await browser.sleep(2000)
  await browser.wait(EC.visibilityOf(pa.selectOption),15000)
  await pa.selectOption.click()
  await browser.waitForAngularEnabled(true)


});


Then ('I will click on Volatile panel and verify texts', async () => {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
  await browser.wait(EC.visibilityOf(pa.panel_1),15000)
  await pa.panel_1.click()
  await browser.sleep(2000)
  var elem = element(By.xpath('//div[@class="plugin-accordion__content"]'));
  await elem.getText().then(async function (text) { 
  await console.log("the content is ==>  " + text)
  await expect(text).to.equal("Change happens rapidly and at large scale.")
  await browser.waitForAngularEnabled(true)
})
});


  When('I will run video', async function(keyToPress){
  await browser.waitForAngularEnabled(false)
  await  browser.sleep(5000);
  await browser.actions().click(element(By.xpath('//video[@class="size-large content-center"]'))).perform()
 //await element(By.xpath('//video[@class="size-large content-center"]')).click();
  await browser.waitForAngularEnabled(true)

});


Then ('I will click on Transcription panel and verify texts', async () => {
  await browser.waitForAngularEnabled(false)
  await  browser.sleep(10000);
  await browser.wait(EC.visibilityOf(pa.TranscriptionPanel),15000)
  await pa.TranscriptionPanel.click()
  var elem = element(By.xpath('//p[contains(text(),"To me, leadership is really about three things. Th")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the content is ==>  " + text)
  await expect(text).to.contains('To me, leadership is really about three things.')
  await browser.waitForAngularEnabled(true)
})
});

Then ('I will click on Competitive Performance panel and verify texts', async () => {
  await browser.waitForAngularEnabled(false)
  await  browser.sleep(10000);
  await browser.wait(EC.visibilityOf(pa.CompetitivePanel),15000)
  await pa.CompetitivePanel.click()
  var elem = element(By.xpath('//span[contains(text(),"What the organization wants to achieve.")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the content is ==>  " + text)
  await expect(text).to.equal('What the organization wants to achieve.')
  await browser.waitForAngularEnabled(true)
})
});


Then ('I will check all tabs', async () => {
  await browser.waitForAngularEnabled(false)
  await  browser.sleep(5000);
   await pa.tabName1.getText().then(async function (text) { 
    await console.log("the tab name is ==>  " + text)
    await  browser.sleep(1000);
    await pa.tabName2.click()
    await pa.tabName2.getText().then(async function (text) { 
      await console.log("the tab name is ==>  " + text)
      await  browser.sleep(1000);
      await pa.tabName3.click()
      await pa.tabName3.getText().then(async function (text) { 
        await console.log("the tab name is ==>  " + text)
        await  browser.sleep(1000);
        await pa.tabName4.click()
        await pa.tabName4.getText().then(async function (text) { 
          await console.log("the tab name is ==>  " + text)
 await  browser.sleep(5000);
  await browser.waitForAngularEnabled(true)
  

})
})
})
})

});


Then ('I will click on Transcript panel and verify texts', async () => {
  await browser.waitForAngularEnabled(false)
  await  browser.sleep(5000);
  await browser.wait(EC.visibilityOf(pa.TranscriptPanel),15000)
  await pa.TranscriptPanel.click()
  var elem = element(By.xpath('//p[contains(text(),"Throughout your learning path, I’ll share with you")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the content is ==>  " + text)
  await expect(text).to.contains("Throughout your learning path, I’ll share with you")
  await browser.waitForAngularEnabled(true)
})
});


Then('I will check the pageTitle1 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle1.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.equal(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle2 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle2.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.equal(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle3 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle3.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle4 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle4.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains("People are our greatest asset")
  await browser.waitForAngularEnabled(true)

  })
});



Then('I will check the pageTitle5 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle5.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle5_1 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle5_1.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle6 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle6.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle7 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle7.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle8 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle8.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle9 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle9.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle10 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle10.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle11 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle11.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle12 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle12.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle13 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle13.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle14 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle14.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle15 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle15.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle16 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle16.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle17 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle17.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle18 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle18.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle19 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle19.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle20 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle20.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle21 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle21.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle22 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle22.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle23 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle23.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle24 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle24.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle25 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle25.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle26 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle26.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle27 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle27.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle28 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle28.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle29 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle29.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle30 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle30.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle31 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle31.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle32 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle32.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle33 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle33.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle34 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle34.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle35 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle35.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle36 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle36.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle37 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle37.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle38 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle38.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle39 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle39.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle40 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle40.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle41 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle41.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle42 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle42.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle43 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle43.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle44 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle44.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle45 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle45.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle46 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle46.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle47 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle47.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});

Then('I will check the pageTitle48 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle48.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});


Then('I will check the pageTitle49 is {string}', async function (title) {
  await browser.waitForAngularEnabled(false)
   await pa.pageTitle49.getText().then(async function (text) { 
  await console.log("the Header is ==>  " + text)
   await expect(title).to.contains(text)
  await browser.waitForAngularEnabled(true)

  })
});






Then('I will click on Go to Next Stage button', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
   await pa.goToNextStageBtn.click()
  await browser.waitForAngularEnabled(true)

});

Then('I will click on Go to NextModule button', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
   await pa.goToNextStageBtn.click()
  await browser.waitForAngularEnabled(true)

});

Then('I will click on Go to Next Module button', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
   await pa.goToNextModuleBtn_s3.click()
  await browser.waitForAngularEnabled(true)

});

Then('I will click on Go to Next Module button', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
   await pa.goToNextModuleBtn_s4.click()
  await browser.waitForAngularEnabled(true)

});


Then('I will click on Go to NextStageButton', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
   await pa.goToNextModuleBtn_s5.click()
  await browser.waitForAngularEnabled(true)

});


Then('I will select story', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(10000)
  await browser.switchTo().frame(element(By.css("object[id='storyline-window']")).getWebElement());
  await browser.sleep(15000)
   await element(By.xpath('//div[@class="main-window-slide-container cs-slide-container"]//div[4]//div[1]//div[1]//div[1]')).click();
  await browser.sleep(1000)
  await element(By.xpath('//div[@class="main-window-slide-container cs-slide-container"]//div[7]//div[1]//div[1]//div[1]')).click();
  await browser.sleep(1000)
  await element(By.xpath('//div[@class="main-window-slide-container cs-slide-container"]//div[9]//div[1]//div[1]//div[1]')).click();
   
  await browser.waitForAngularEnabled(true)

});


Then ('I will enter comment in discussion board', async () => {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000)
  await element(By.xpath('//select[@aria-label="comments filter"]')).click();
  await element(By.xpath('//select[@aria-label="comments filter"]')).sendKeys('My Comments');
  await browser.sleep(2000)
  await browser.wait(EC.visibilityOf(pa.commentBox),15000)
  await pa.commentBox.sendKeys('this is nice one')
  await browser.sleep(2000)
  await pa.commentBtn.click();
  await browser.sleep(2000)
  await element(By.xpath('//select[@aria-label="comments filter"]')).click();
  await element(By.xpath('//select[@aria-label="comments filter"]')).sendKeys('Most Recent');
  await browser.sleep(2000)
  await pa.commentText.getText().then(async function (text) { 
  await console.log("the comment text is ==>  " + text)
  await expect(text).to.equal("this is nice one")
  await browser.sleep(5000)
 await browser.waitForAngularEnabled(true)
  })
});

Then ('I will select value from dropdown', async () => {
  await browser.waitForAngularEnabled(false)
  var elem = element(By.xpath('//option[contains(text(),"Select option")]'));
  await browser.wait(EC.visibilityOf(elem),15000)
  await elem.click()
  await elem.sendKeys('A bit confident: Maybe it would be fine?')
  await browser.waitForAngularEnabled(true)


});



Then ('I will enter data in text field', async () => {
  await browser.waitForAngularEnabled(false)
 await element(By.xpath('//div[@id="Inspiration_Input"]')).sendKeys('This is the test note');
  await browser.sleep(2000)
  await browser.waitForAngularEnabled(true)
 
});

Then ('I will enter data in edit box', async () => {
  await browser.waitForAngularEnabled(false)
 await element(By.xpath('//div[@id="AIrecapreflect1"]')).sendKeys('This is the test message');
  await browser.sleep(2000)
  await element(By.xpath('//div[@id="AIrecapreflect2"]')).sendKeys('This is the test message');
  await browser.waitForAngularEnabled(true)
 
});

Then ('I will click on Transcript panel_s2 and verify texts', async () => {
  await browser.waitForAngularEnabled(false)
  await  browser.sleep(5000);
  await browser.wait(EC.visibilityOf(pa.TranscriptPanel),15000)
  await pa.TranscriptPanel.click()
  await  browser.sleep(2000);
  var elem = element(By.xpath('//p[contains(text(),"Learning to include my team")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the content is ==>  " + text)
  await expect(text).to.contains("Learning to include my team")
  await browser.waitForAngularEnabled(true)
})
});


Then ('I will click on Transcript panel_s3 and verify texts', async () => {
  await browser.waitForAngularEnabled(false)
  await  browser.sleep(5000);
  await browser.wait(EC.visibilityOf(pa.TranscriptPanel),15000)
  await pa.TranscriptPanel.click()
  var elem = element(By.xpath('//p[contains(text(),"I remember how hard it was for me to relocate for")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the content is ==>  " + text)
  await expect(text).to.contains("I remember how hard it was for me to relocate for")
  await browser.waitForAngularEnabled(true)
})
});


Then ('I will select checkbox options', async () => {
  await browser.waitForAngularEnabled(false)
  await browser.refresh();
  await browser.sleep(4000)
  await element(By.xpath('//div[@class="mat-select-value"]')).click();
  await browser.sleep(1000)
  await element(By.xpath('//mat-option[@id="mat-option-0"]')).click();
  await browser.sleep(1000)
  await element(By.xpath('//mat-option[@id="mat-option-1"]')).click();
  await browser.sleep(1000)
  await browser.waitForAngularEnabled(true)
 
});


Then ('I will completed insight', async () => {
  await browser.waitForAngularEnabled(false)
  
  await browser.sleep(1000)

  var elem = element(By.xpath('//mat-card-subtitle[contains(text(),"AI: Recap and Try-Out: Align & Inspire")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the header is ==>  " + text)
  await expect(text).to.equal("AI: Recap and Try-Out: Align & Inspire")
  await browser.sleep(1000)
  await elem.click();

  await browser.sleep(1000)
  var elem = element(By.xpath('//h1[contains(text(),"Resource")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the header is ==>  " + text)
  await expect(text).to.equal("Resource")
  await browser.sleep(1000)
  await element(By.xpath('//span[@class="plugin-common__btn-continue__text"]')).click()
  await browser.sleep(1000)

    await element (By.xpath('//div[@id="LB_values1"]')).sendKeys("core values")
    await element (By.xpath('//div[@id="LB_behaviors"]')).sendKeys("behaviors")
    await element (By.xpath('//div[@id="LB_knownfor"]')).sendKeys("known")
    await element (By.xpath('//div[@id="LB_mybest"]')).sendKeys("my best")
    await element (By.xpath('//div[@id="LB_myworst"]')).sendKeys("my worst")
    await browser.sleep(1000)
    await element(By.xpath('//button[@name="captureAndDownload"]//div[@class="plugin-download-text"]')).click()
  await browser.sleep(2000)
  await element(By.xpath('//button[@name="Download document"]//div[@class="plugin-download-text"]')).click()
  await browser.sleep(2000)

  var elem = element(By.xpath('//h3[contains(text(),"Sharing Try-Out insights")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the header is ==>  " + text)
  await expect(text).to.equal("Sharing Try-Out insights")

  await browser.sleep(2000)

  await element(By.xpath('//select[@aria-label="comments filter"]')).click()
  await element(By.xpath('//select[@aria-label="comments filter"]')).sendKeys('My Comments');
  await browser.wait(EC.visibilityOf(pa.commentBox),15000)
  await pa.commentBox.sendKeys('this is nice one')
  await browser.sleep(2000)
  await pa.commentBtn.click()
  await browser.sleep(2000)
  await element(By.xpath('//select[@aria-label="comments filter"]')).click()
  await element(By.xpath('//select[@aria-label="comments filter"]')).sendKeys('Most Recent');
  await browser.sleep(2000)
  await pa.commentText.getText().then(async function (text) { 
  await console.log("the comment text is ==>  " + text)
  await expect(text).to.equal("this is nice one")
  await browser.sleep(2000)

  await element(By.xpath('//span[contains(text(),"Back")]')).click()
  await browser.sleep(2000)
  await element(By.xpath('//span[contains(text(),"Back")]')).click()
  await browser.sleep(2000)
  var elem = element(By.xpath('//h1[contains(text(),"Resource")]'));
  await elem.getText().then(async function (text) { 
  await console.log("the header is ==>  " + text)
  await expect(text).to.equal("Resource")
  await browser.sleep(2000)

  await element(By.xpath('//span[contains(text(),"My Learning Path")]')).click()
  await browser.sleep(2000)
  await element(By.xpath('//button[@name="Start with your core valuesCurrent Status Resume"]')).click()
  await browser.sleep(2000)
  await element(By.xpath('//span[@class="plugin-common__btn-start__text"]')).click()
  await browser.sleep(2000)
  
  await browser.waitForAngularEnabled(true)



})

})
})
})
})
});


Then ('I will enter texts in edit box', async () => {
  await browser.waitForAngularEnabled(false)
  
  await browser.sleep(2000)
  await element(By.xpath('//div[@id="To me, living this value means"]')).sendKeys("this is test message")
  await browser.sleep(1000)
  await element(By.xpath('//div[@id="behaviors when not at best"]')).sendKeys("this is test message")
  await browser.sleep(1000)
  
  await browser.waitForAngularEnabled(true)
 
});


Then ('I will select options and enter values', async () => {
  await browser.waitForAngularEnabled(false)
  
  await browser.sleep(2000)
  await element(By.xpath('//label[@class="mat-radio-label"]')).click();
  await browser.sleep(1000)
  await element(By.xpath('//i[@name="edit-text-box"]')).sendKeys("this is test message")
  await browser.sleep(1000)
  
  await browser.waitForAngularEnabled(true)
 
});


Then ('I will enter value', async () => {
  await browser.waitForAngularEnabled(false)
  
  await browser.sleep(1000)
  await element(By.xpath('//i[@name="edit-text-box"]')).sendKeys("this is test message")
  await browser.sleep(1000)
  
  await browser.waitForAngularEnabled(true)
 
});


Then ('I will enter values', async () => {
  await browser.waitForAngularEnabled(false)
  
  await element (By.xpath('//div[@id="LB_values1"]')).sendKeys("core values")
  await element (By.xpath('//div[@id="LB_behaviors"]')).sendKeys("behaviors")
  await element (By.xpath('//div[@id="LB_knownfor"]')).sendKeys("known")
  await element (By.xpath('//div[@id="LB_mybest"]')).sendKeys("my best")
  await element (By.xpath('//div[@id="LB_myworst"]')).sendKeys("my worst")
  await browser.sleep(1000)
  await element(By.xpath('//button[@name="captureAndDownload"]//div[@class="plugin-download-text"]')).click()
  await browser.sleep(2000)
  await element(By.xpath('//button[@name="Download document"]//div[@class="plugin-download-text"]')).click()
  await browser.sleep(2000)
  await browser.waitForAngularEnabled(true)
 
});




// Then('I click on panel {string}', async function (panelName) {
//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(2000)
//    await pa.pgTitle2.getText().then(async function (text) { 
//   await console.log("the Header is ==>  " + text)
//    await expect(panelName).to.equal(text)
//   await browser.waitForAngularEnabled(true)

//   })
// });












// Then('I will check the Percentage is {string}', async function (percentage) {
//   await browser.waitForAngularEnabled(false)
//   await pa.percentage.getText().then(async function (text) { 
//   await console.log("the Percentage is ==>  " + text)
//   await expect(percentage).to.equal(text)
//   await browser.waitForAngularEnabled(true)

//   })
// });



// Then('I will click on Reject button', async function () {
//     await browser.waitForAngularEnabled(false)  
//     await pa.rejectBtn;
//     await browser.wait(EC.visibilityOf(pa.rejectBtn), 20000)
//     await browser.wait(EC.elementToBeClickable(pa.rejectBtn), 20000)
//     await pa.rejectBtn.click();
//     await browser.waitForAngularEnabled(true)

// });


//     Then('I will check i am on participant page', async function () {
//             browser.waitForAngularEnabled(false)
//             await browser.getCurrentUrl().then(function (text) {
//                 expect(text).to.equal("https://petronastest.btsmomenta.com/#/auth/login")
        
//             })
//         });


//         Then('I will click on Accept button', async function () {
//           await browser.waitForAngularEnabled(false)  
//           await pa.acceptBtn;
//           await browser.wait(EC.visibilityOf(pa.acceptBtn), 20000)
//           await browser.wait(EC.elementToBeClickable(pa.acceptBtn), 20000)
//           await pa.acceptBtn.click();
//           await browser.waitForAngularEnabled(true)
      
//       });

//   Then('I will fillout the user profile form', async function () {
//     await browser.waitForAngularEnabled(false) 
//     await pa.userprofileUsername.sendKeys("tester");
//     await browser.sleep(1000)
//     await pa.userprofileEmail.sendKeys("tester@bts.com");
//     await browser.sleep(1000)
//     await element(By.xpath('//select[@aria-label="Your age"]')).sendKeys("20-30");
//     await browser.sleep(1000)
//     await element(By.xpath('//select[@aria-label="Your gender"]')).sendKeys("Male");
//     await browser.sleep(1000)
//     await element(By.xpath('//select[@aria-label="Your race/ethnic identification"]')).sendKeys("Asian");
//     await browser.sleep(1000)
//     await browser.waitForAngularEnabled(true) 

// });

// Then('I will fillout the Single Horizontal form', async function () {
//   await browser.waitForAngularEnabled(false)   
//   await browser.sleep(2000)
//   await element(By.xpath('//div[@class="mat-radio-outer-circle"]')).click();
//   await browser.sleep(2000)
//   await browser.waitForAngularEnabled(true)

// });


// Then('I will check the question is {string}', async function (question) {
//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(2000)
//   await pa.question.getText().then(async function (text) { 
//   await console.log("the Question is ==>  " + text)
//   await expect(question).to.equal(text)
//   await browser.sleep(2000)
//   await browser.waitForAngularEnabled(true)

//   })
// });


// Then('I will check error message', async function () {
//   await browser.waitForAngularEnabled(false)
//   await browser.executeScript("arguments[0].scrollIntoView(true);", pa.nextBtn);
//   await browser.sleep(2000)
//   await pa.nextBtn.click()
//   await browser.sleep(2000)
//   await browser.executeScript("arguments[0].scrollIntoView(true);", pa.errorMsg);
//   await pa.errorMsg.getText().then(async function (text) { 
//   await console.log("the Error Message is ==>  " + text)
//   await expect(text).to.equal("This question is mandatory")
//   await browser.sleep(2000)
//   await browser.waitForAngularEnabled(true)

//   })
// });

// Then('I will fillout the Single Vertical form', async function () {

//   await browser.waitForAngularEnabled(false)
//   await element(By.xpath('//div[contains(text(),"I enjoy having the challenge")]')).click();
//   await browser.sleep(2000)
//   var elem = element(By.xpath('//div[contains(text(),"30-40 times")]'));
//   await browser. executeScript("arguments[0]. click()",elem);
//    await browser.sleep(2000)
//   await browser.waitForAngularEnabled(true)


// });


// Then('I will fillout the texts form', async function () {

//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(1000)
//   element(By.xpath('//div[@class="mat-form-field-infix"]')).sendKeys("Testing Data")
//    await browser.sleep(1000)
//   await browser.waitForAngularEnabled(true)

// });


// Then('I will fillout the polar form', async function () {

//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(1000)
//   var elem = element(By.xpath('//mat-icon[contains(text(),"chevron_left")]'));
//   await browser. executeScript("arguments[0]. click()",elem);
//    await browser.sleep(1000)
//   await browser.waitForAngularEnabled(true)

// });

// Then('I will fillout the Variable Grid form', async function () {

//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(1000)
//   var elem = element(By.xpath('//mat-icon[contains(text(),"chevron_left")]'));
//   await browser. executeScript("arguments[0]. click()",elem);
//    await browser.sleep(1000)
//   await browser.waitForAngularEnabled(true)

// });
