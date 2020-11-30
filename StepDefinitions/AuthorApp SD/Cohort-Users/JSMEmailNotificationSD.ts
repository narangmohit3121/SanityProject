
import { Given, When, Then } from "cucumber";
import { browser, by, element, By, protractor, ExpectedConditions, Browser, ElementFinder, ElementArrayFinder } from "protractor";
import config from "../../config.json"
import chai from "chai";
import { notificationPage, BeforeMail } from "../../../PageObjects/AuthorApp POM/Cohort-Users/JSMEmailNotificationPage";



var expect = chai.expect;
declare var require: any;
let EC = ExpectedConditions;
let path = require("path");
let np = new notificationPage();
let bo = new BeforeMail();
var { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);

Given('User will navigate to momentaAuthor page', async () => {
  browser.manage().window().maximize();
  await browser.get(config.momentaAuthor);
  await browser.manage().timeouts().implicitlyWait(3000);

});

Then('User enter {string} in textbox having id {string}', async function (value, id) {
  browser.sleep(3000);
  await browser.waitForAngularEnabled(false)
  await element(by.id(id)).sendKeys(value)
  await browser.waitForAngularEnabled(true)
});

Then('User will click on {string} button', async function (locator) {

  await browser.sleep(2000);
  await browser.waitForAngularEnabled(false)
  var elem: ElementFinder = element(by.cssContainingText('.mat-raised-button', locator));
  await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
  await browser.wait(EC.visibilityOf(elem), 5000)
  browser.sleep(3000);
  await browser.wait(EC.elementToBeClickable(elem), 5000)
  await elem.click();
  await browser.waitForAngularEnabled(true)
});


Then('User navigates to petronas dashboard page', async function () {

  browser.wait(EC.visibilityOf(element(by.xpath('//div[contains(text(),"Client")]'))), 15000)
  await element(by.xpath('//div[contains(text(),"Client")]')).click();
  await element(by.xpath('//input[@placeholder="Filter Collections"]')).sendKeys("petronas").then(function () {
    browser.sleep(3000);
    element(by.xpath('//span[contains(text(),"petronas")]')).click();
    return browser.sleep(5000);

  })

});

Then('User will click on Journey', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.wait(EC.visibilityOf(element(by.xpath('//p[contains(text(),"Automation Folder_DONOT DELETE")]'))), 15000)
  await element(by.xpath('//p[contains(text(),"Automation Folder_DONOT DELETE")]')).click();
  browser.sleep(2000);

  await browser.wait(EC.visibilityOf(element(by.xpath('//p[contains(text(),"AuthorApp")]'))), 15000)
  await element(by.xpath('//p[contains(text(),"AuthorApp")]')).click();
  browser.sleep(2000);

  await browser.wait(EC.visibilityOf(element(by.xpath('//p[contains(text(),"Journey")]'))), 15000)
  await element(by.xpath('//p[contains(text(),"Journey")]')).click();
  browser.sleep(2000);

  await browser.wait(EC.visibilityOf(element(by.xpath('//p[contains(text(),"Notification")]'))), 15000)
  await element(by.xpath('//p[contains(text(),"Notification")]')).click();
  browser.sleep(2000);
  await browser.waitForAngularEnabled(true)
});

Then('User will verify Notifications link is present', async function () {
  await browser.waitForAngularEnabled(false)
  browser.sleep(3000);
  await element(by.xpath('//div[contains(text(),"Notifications")]')).click();
  browser.sleep(5000);
  await browser.waitForAngularEnabled(true)
});

Then ('User click on Add Notification icon', async function () {
  await browser.waitForAngularEnabled(false)
  browser.sleep(3000);
  await element(by.xpath('//i[@class="author-icon icon-plus"]')).click();
  await browser.waitForAngularEnabled(true)
});

Then('User will verify header name is present', async function () {
  await browser.waitForAngularEnabled(false)
  browser.sleep(3000);
  await element(by.xpath('//h3[@class="modal-common__title generic-border"]')).getText().then(async function (text) {
    await expect(text).to.contains("Custom Notification")
    await browser.sleep(3000);
    await browser.waitForAngularEnabled(true)
  })

});

Then('User select one cohort and click on Send Notification', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.manage().timeouts().implicitlyWait(3000);
  await np.selectCohort.click();
  await browser.manage().timeouts().implicitlyWait(3000);
  await np.sendNotification.click();
  await browser.waitForAngularEnabled(true)
  
})

Then('User select one user and click on Send Notification', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.manage().timeouts().implicitlyWait(3000);
  await np.userSelect.click();
  await browser.manage().timeouts().implicitlyWait(3000);
  await np.sendNotification.click();
  await browser.waitForAngularEnabled(true)
  
})


Given('User click on Save button and verify error message for title', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(1000);
  await element(by.xpath('//div[@class="block-submit"]//button[@name="Save"]')).click();
  await browser.sleep(1000);
  await element(by.xpath('//div[@class="toast-message ng-star-inserted"]')).getText().then(async function (text) {
    await expect(text).to.contains("Enter Notification name")
    await element(by.xpath('//button[@name="Cancle"]')).click();
    await browser.waitForAngularEnabled(true)
  })

});

// Then('I click on Save button and verify error message for subject', async function () {
//   await browser.waitForAngularEnabled(false)
//   browser.sleep(3000);
//   await element(by.xpath('//i[@class="author-icon icon-plus"]')).click();
//   await browser.sleep(3000);
//   await element(by.xpath('//input[@placeholder="Enter Notification Title"]')).sendKeys("Test Notification");
//   await browser.sleep(3000);
//   await element(by.xpath('//div[@class="block-submit"]//button[@name="Save"]')).click();
//   await browser.wait(EC.visibilityOf(element(by.cssContainingText('.toast-container', 'Enter Email Subject.'))), 15000).then(async function () {
//     await element(by.id('toast-container')).getText().then(async function (text) {
//       await expect(text).to.contains("Enter Email Subject.")
//       await browser.sleep(3000);
//       await element(by.xpath('//button[@name="Cancle"]')).click();
//       await browser.waitForAngularEnabled(true)
//     })
//   })
// });

Given('User go to new tab and create malinator email', async function () {
  await browser.waitForAngularEnabled(false)
  await bo.openPageInNewTab("https://www.mailinator.com");
  await browser.sleep(5000);
  await browser.waitForAngularEnabled(true)
});




Then ('User enters name and subject in Notification', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);

  await browser.wait(EC.visibilityOf(element(by.xpath('(//input[@aria-label="Notification title"])[1]'))), 15000)
  await element(by.xpath('(//input[@aria-label="Notification title"])[1]')).sendKeys("Test Notification Title");

  await browser.wait(EC.visibilityOf(element(by.xpath('(//input[@aria-label="Notification title"])[2]'))), 15000)
  await element(by.xpath('(//input[@aria-label="Notification title"])[2]')).sendKeys("Test Notification Title");

  await browser.sleep(1000);
  await browser.waitForAngularEnabled(true)

});


Then ('User selects Inapp radio option', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(1000);

  await browser.wait(EC.visibilityOf(element(by.xpath('//input[@value="InApp"]'))), 15000)
  await element(by.xpath('//input[@value="InApp"]')).click();

  await browser.sleep(1000);
  await browser.waitForAngularEnabled(true)

});


Then('User clicks on Add button and enter message text', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(3000);
  await np.msgAdd.click();
  await browser.sleep(2000);
  await browser.wait(EC.visibilityOf(np.msgTextbox), 15000)
  await np.msgTextbox.click();
  await browser.sleep(1000);
  await np.msgTextbox.sendKeys("Test Notification Message");
  await browser.wait(EC.visibilityOf(np.msgSave), 15000)
  await browser.sleep(2000);
  await np.msgSave.click();
  await browser.sleep(2000);
  await browser.waitForAngularEnabled(true)
});


Then('User checks Static Time selected', async function () {
  await browser.waitForAngularEnabled(false)
      await np.selectDateTime.isDisplayed().then(async function(){
        await np.selectDateTime.click().then(async function(){
            for (let i = 1; i <= 1; i = i + 1){
                await np.arrowAddMinute.click().then(async function(){
                    await browser.sleep(1000);
                })
            }
            await np.btnSetDateTime.click();
        })
    })
    await browser.waitForAngularEnabled(true)

});

Then('User checks success message', async function () {
  await browser.waitForAngularEnabled(false)

  await browser.sleep(50000);
await np.sucMessage.getText().then(async function (text) {
  await console.log("success message ==> "+text)
  await expect(text).equal("Save notification success")
await browser.sleep(1000)

  await browser.waitForAngularEnabled(true)
  
})
});


Then('User check Static Time selected in Schedule Notifications', async function () {
  await browser.waitForAngularEnabled(false)
      await np.selectDateTime.isDisplayed().then(async function(){
        await np.selectDateTime.click().then(async function(){
            for (let i = 1; i <= 10; i = i + 1){
                await np.arrowAddMinute.click().then(async function(){
                    await browser.sleep(1000);
                })
            }
            await np.btnSetDateTime.click();
        })
    })
  await browser.waitForAngularEnabled(true)

});


Then('User checks Dynamic Time selected', async function () {
  await browser.waitForAngularEnabled(false)
  var DynamicTime = element(By.xpath('(//div[@class="mat-radio-label-content"])[2]'));
  await browser.actions().mouseMove(DynamicTime).perform()
  await browser.sleep(2000);
  await DynamicTime.click();
  await browser.sleep(2000)

  await browser.waitForAngularEnabled(true)
  
})


Then('User checks Send Now selected', async function () {
await browser.waitForAngularEnabled(false)
await browser.sleep(1000);
var SendNow = element(By.xpath('//input[@id="mat-radio-4-input"]'));
await browser.actions().mouseMove(SendNow).perform()
await browser.sleep(2000);
await SendNow.click();
await browser.sleep(2000)
await browser.waitForAngularEnabled(true)
  
})

// Then('I enter other details in Notification', async function () {
//   await browser.waitForAngularEnabled(false)
  
//   await browser.sleep(3000);
//   await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
//   await browser.sleep(3000);

//   await element(by.xpath('//select[@aria-label="Select duration"]')).click();
//   await browser.sleep(1000);
//   await element(by.xpath('//select[@aria-label="Select duration"]')).sendKeys("Hours");
//  // await element(by.xpath('//span[contains(text(),"Hours")]')).click();

//   await browser.sleep(1000);
//   await element(by.xpath('//select[@aria-label="Select Prior to"]')).click();
//   await browser.sleep(1000);
//   await element(by.xpath('//select[@aria-label="Select Prior to"]')).sendKeys("After")
// //  await element(by.xpath('//span[contains(text(),"After")]')).click();

//   await browser.sleep(1000);
//   await element(by.xpath('//select[@aria-label="Select Cohort"]')).click();
//   await browser.sleep(1000);
//   await element(by.xpath('//select[@aria-label="Select Cohort"]')).sendKeys("User created")
//   //await element(by.xpath('//span[contains(text(),"User created")]')).click();
//   await browser.sleep(1000);
//   await browser.waitForAngularEnabled(true)
// });


// Then('User clicks on Save button and verify notification created', async function () {
//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(1000);
//   await np.saveBtn.click();
//   await browser.wait(ExpectedConditions.visibilityOf(np.sucMessage), 5000)
//   await np.sucMessage.getText().then(async function (text) {
//   await console.log("success message ==> "+text)
//   await expect(text).equal("Save notification success")
//   await browser.sleep(50000)
//   await browser.waitForAngularEnabled(true)

// })
// });


Then('User clicks on OK button on confirmation message', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);
  await np.clickOK.click();
  await browser.wait(ExpectedConditions.visibilityOf(np.sucMessage), 5000)
  await np.sucMessage.getText().then(async function (text) {
  await console.log("success message ==> "+text)
  await expect(text).equal("Notifications sent successfully")
  await browser.sleep(50000)
  await browser.waitForAngularEnabled(true)
})
});

Then('User clicks on Cancel button', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);
   await np.cancelBtn.click();
  await browser.waitForAngularEnabled(true)
});



  Then('I will navigate to participant page and login with {string} and {string}', async (email, password) => {
    await browser.waitForAngularEnabled(false)
    await browser.get(config.ParticipantPetronasUrl)
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(np.emailField),15000)
    await np.emailField.sendKeys(email)
    await browser.wait(EC.visibilityOf(np.pwdField),15000)
    await np.pwdField.sendKeys(password)
    await np.loginBtn.click()
    await browser.sleep(2000)  
    await browser.waitForAngularEnabled(true)
      });

      Then('User check notification count', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.sleep(2000)     
         await np.notificationCount.getText().then(async function (text) {
          await console.log("notification count ==> "+text)
          await expect(text).equal("1")
        await browser.sleep(2000)  
        await browser.waitForAngularEnabled(true)
         })
          });  

      Then('User click on notification tab', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.sleep(2000)     
        await np.clickOnNotification.click()
        await browser.sleep(2000)  
        await browser.waitForAngularEnabled(true)
          });

          Then('User will received notification mail', async function () {
            await browser.waitForAngularEnabled(false)
            await browser.sleep(2000)     
             await np.getNotificationMessage.getText().then(async function (text) {
              await console.log("notification message ==> "+text)
              await expect(text).equal("Test Notification Message")
            await browser.sleep(2000)  
            await browser.waitForAngularEnabled(true)
             })
              });       

Then('User click on CohortUsers', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(5000);
  await np.users.click();
  await browser.sleep(5000);
  await browser.waitForAngularEnabled(true)
});

Then('User click on Journey', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);
  await browser.element(By.xpath('//input[@placeholder="Filter Journeys"]')).sendKeys("Notification")
  await browser.sleep(5000);
  await np.journey.click();
  await browser.waitForAngularEnabled(true)
});



Given('User clicks on Cohort', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(1000);
  await np.cohort.click();
  await browser.sleep(1000);
  await browser.waitForAngularEnabled(true)
});

Then('View Notifications tab present', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(5000);
  await np.notificationTab.isPresent().then(NotificationTabPresent => {
    console.log('Is Notification Tab Present: ', NotificationTabPresent)
    })
    await browser.sleep(2000);
  await np.notificationTab.click(); 
  await browser.waitForAngularEnabled(true)
});


Then('View if notification is listed under History of Notification sent', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);
  await browser.element(by.xpath('(//table[1]/tbody[1]/tr[1]/td[1])[1]')).getText().then(async function (text) {
  await console.log(text)
  await expect(text).equal("Test Notification Title")
    await browser.sleep(2000);
  await browser.waitForAngularEnabled(true)
})
});

Given ('Click on ReRun next to the current notification scheduled', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);
  await browser.element(by.xpath('(//table[1]/tbody[1]/tr[1]/td[3])[1]')).click(); 
  await browser.waitForAngularEnabled(true)
});


Given ('Click on ReRun next to the future notification scheduled', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);
  await browser.element(by.xpath('(//table[1]/tbody[1]/tr[1]/td[3])[1]')).click(); 
  await browser.waitForAngularEnabled(true)
});

Then ('Validate if Notification got triggered or not', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.getAllWindowHandles().then(async function (handles) {
    await console.log(handles);
    await browser.sleep(2000);
    await  browser.switchTo().window(handles[1]);
    await browser.sleep(22000);
    var elem = element(by.xpath('//a[@class="ng-binding"][contains(normalize-space(),"Test Notification Subject")]'));
    await elem.getText().then(async function(text){
      await console.log(text)    
      await browser.sleep(2000);
      await  elem.click();
      await browser.sleep(2000);
     // await  expect(browser.driver.getCurrentUrl())
       // .toMatch("https://www.mailinator.com");
        await   browser.driver.close();
      await browser.sleep(2000);  browser.sleep(2000);
        await   browser.driver.switchTo().window(handles[0]);
     await  browser.sleep(5000);
     await browser.waitForAngularEnabled(true)
    })
    })
  });


  Given('User will click on Content', async function () {
    await browser.waitForAngularEnabled(false)
    await browser.sleep(3000);
    await np.content.click();
    await browser.sleep(5000);
    await browser.waitForAngularEnabled(true)
  });


Then('View if notification is listed under Schedule Upcoming Notifications', async function () {
  await browser.waitForAngularEnabled(false)
  await browser.sleep(2000);
  await browser.element(by.xpath('(//table[1]/tbody[1]/tr[1]/td[1])[2]')).getText().then(async function (text) {
  await console.log(text)
  await expect(text).equal("Test Notification Title")
    await browser.sleep(2000);
  await browser.waitForAngularEnabled(true)
})
});



// Then('I click on Create User', async function () {
//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(2000);
//   await browser.element(By.xpath('//i[contains(text(),"expand_more")]')).click()
//   await browser.sleep(1000);
//   await np.createUser.click();
//   await browser.waitForAngularEnabled(true)
// });

// Given('I enter user details', async function () {
//   await browser.waitForAngularEnabled(false)
//   await browser.sleep(2000);
//   await np.firstName.sendKeys("btstester")
//   await np.lastName.sendKeys("tester")
//   await np.email.sendKeys("btstester.2020@mailinator.com")
//   await np.password.sendKeys("ABCabc12$")
//   await browser.sleep(2000);
//   await browser.waitForAngularEnabled(true)

// });

// Then('I click on Create button', async function () {
//   await browser.sleep(3000);
//   await np.createBtn.click();
//   await browser.sleep(3000);
//   await expect(np.userAdded.getText()).equal("btstester");

// });


Given('I will go to Edit notification page by clicking on Edit icon', async function () {
  await browser.sleep(3000);
  await np.editIcon.click();


});

Then('I will attached document and click on save', async function () {
  await browser.sleep(3000);
  let filePath = "C:\\Users\\Administrator\\Desktop\\report.pdf"
  //let fpath=path.resolve("C:",filePath)
  await element(by.xpath('//input[@id="file-input"]')).sendKeys(filePath).then(async function () {

    await element(by.xpath('//button[@name="save"]')).click();

    return browser.sleep(3000);
  })

});

Then('I will go to Edit notification and check attachment is saved', async function () {

  await browser.sleep(3000);
  await np.editIcon.click();
  await browser.sleep(3000);
  await element(by.xpath('//span[@class="ng-star-inserted"]')).getText().then(async function (text) {
    await console.log(text)
    await expect(text).to.contains("report.pdf")
    await element(by.xpath('//button[@name="save"]')).click();

    browser.sleep(5000);

    await element(by.xpath('//div[@class="content"]//button[1]')).click();
    browser.sleep(2000);
    await element(by.xpath('//div[@id="toast-container"]')).click();
    browser.sleep(2000);

    await element(by.xpath('//span[contains(text(),"Push Changes Live")]')).click();
    browser.sleep(2000);
    await element(by.xpath('//div[@id="toast-container"]')).click();
    browser.sleep(2000);

  })
});

Given('User will checks notification mail received', async function(){
  await browser.waitForAngularEnabled(false)
  await browser.getAllWindowHandles().then(async function (handles) {
    await console.log(handles);
    await browser.sleep(2000);
    await  browser.switchTo().window(handles[1]);
    await browser.sleep(22000);
    var elem = element (by.xpath('//a[@class="ng-binding"][contains(normalize-space(),"Test Notification Subject")]'))
    await  elem.getText().then(async function(text){
      await console.log(text)    
      await browser.sleep(2000);
      await  elem.click();
      await browser.sleep(2000);
      await   browser.driver.close();
      await browser.sleep(2000);  browser.sleep(2000);
        await   browser.driver.switchTo().window(handles[0]);
     await  browser.sleep(5000);
     await browser.waitForAngularEnabled(true)
    })
    })
  });
