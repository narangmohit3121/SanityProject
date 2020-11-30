import {When, Then} from "cucumber";
import chai = require('chai');
import { ResetJourneyPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/ResetJourney";
import { browser, element, By, protractor, ElementFinder } from "protractor";
import { SearchUserAcrossJourneysPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/SearchUserAcrossJourneysPage";
var expect = chai.expect;
var EC = protractor.ExpectedConditions;

let searchUser = new SearchUserAcrossJourneysPageLocate();




let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: number = today.getMinutes();

let currentDateTime: string = mm + '-' + dd + '-' + year;
// let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

let DPA_Updated: string = "DPA Status:Approved on" + currentDateTime;
// let latestTextEntryLabel: string = "textEntryLabel_" + currentDateTime;
// let latestTextEntryPlaceholder: string = "textEntryPlaceholder_" + currentDateTime;
// let characterLimit: number = 200;







When("User navigate to search user page", async function () {
 await browser.sleep(3000);
})
  

Then("Search User textfiled should be displayed on search user page", async function () {
    await browser.sleep(2000)
     await searchUser.searchUserTxt.isDisplayed().then(async function (flag) {
       expect(flag).to.be.true;
   
   });
});



When("User to search user which is mapped with only one journey as {string}", async function (string) {
//  browser.ignoreSynchronization=true;
  await browser.sleep(2000);
  await searchUser.searchUserTxt.isDisplayed().then(async function () {
      await searchUser.searchUserTxt.clear().then(async function(){
          await searchUser.searchUserTxt.sendKeys(string);
      })
      
    })

});

Then("User should see one journey user is searched by admin user", async function () {

  await browser.sleep(2000)
   await searchUser.OneJourneyMapppedUser.isDisplayed().then(async function (flag) {
     expect(flag).to.be.true;
 });
});

Then("User should see two journey user is searched by admin user", async function () {
  await browser.sleep(2000)
   await searchUser.TwoJourneyMapppedUser.isDisplayed().then(async function (flag) {
     expect(flag).to.be.true;
 });
});



When("User click on user as search_user_1_across_journey after searched", async function () {
  await browser.sleep(1000);
  await searchUser.OneJourneyMapppedUser.isDisplayed().then(async function(){
      await searchUser.OneJourneyMapppedUser.click().then(async function(){
          await browser.sleep(1000).then(async function(){
          })
      })
  })
});


Then("User should see one journey, Client name and DPA status is diplayed with mapped", async function () {
  await browser.sleep(2000)
   await searchUser.JourneyName_1.isDisplayed().then(async function (flag) {
     expect(flag).to.be.true;
 });

 await searchUser.petronasLableNLogo.isDisplayed().then(async function (flag) {
  expect(flag).to.be.true;
});

await searchUser.DPA_status_Lbl.isDisplayed().then(async function (flag) {
  expect(flag).to.be.true;
});

});
   


When("User click on OpenArrow to see same user in reset user window", async function () {
  await browser.sleep(1000);
  await searchUser.OpenArrow.isDisplayed().then(async function(){
      await searchUser.OpenArrow.click().then(async function(){
          await browser.sleep(500).then(async function(){
          })
      })
  })
});

Then("User should see use see same user with DPA status Not Yet Approved in reset user window", async function () {
  await browser.sleep(700)
  await searchUser.DPAStatusNotApproved.getText().then(function (text) {
    console.log("DPA vlaue is  "+text);
    expect(text).to.be.eql("DPA Status:Not Yet Approved");
  });

});




When("User clicks on SearchUserAcrossJourney_1 journey", async function () {
  await browser.sleep(1000);
  await searchUser.SearchUser_1Journey.isDisplayed().then(async function(){
      await searchUser.SearchUser_1Journey.click().then(async function(){
          await browser.sleep(500).then(async function(){
          })
      })
  })
});


When("User click on Data Privacy Agreement option in journey configuration", async function () {
  await browser.sleep(1000);
  await searchUser.DPALabel.isDisplayed().then(async function(){
      await searchUser.DPALabel.click().then(async function(){
          await browser.sleep(500).then(async function(){
          })
      })
  })
});

When("User set toggle as enable of Data Privacy Agreement", async function () {
  await searchUser.DPAToggleBtn.isSelected().then(async function (DPAToggle) {
      console.log("Second time toggle button   "+DPAToggle);
     if (DPAToggle == false) {
         
          await searchUser.DPAToggleBtn.click().then(async function () {
              await browser.sleep(1000);
              console.log("Toggle button click  for Enable"); 

          })
      }

  })
  await searchUser.DPAToggleBtn.isSelected().then(async function (Toggle) {
      console.log("Second time toggle button after select Enable   "+Toggle);
  })
});

// When("User provide all configuration data for Data Privacy Agreement", async function () {
//   let columnTextWrapper: ElementFinder = await element(By.xpath(`//div[contains(@class,'fr-element')]`));
//       await columnTextWrapper.click().then(async function () {
//           await browser.sleep(2000);
//       })
//       await columnTextWrapper.clear();
//       await browser.sleep(700);
//       await columnTextWrapper.sendKeys('BTS Strategy Alignment and Execution Pvt Ltd in Goregaon West, Mumbai');
//       await browser.sleep(700);
//       await columnTextWrapper.click().then(async function () {
//           await browser.sleep(2000);
//       });


//       await searchUser.AcceptButtonTxt.isDisplayed().then(async function () {
//         await searchUser.AcceptButtonTxt.clear().then(async function(){
//             await searchUser.AcceptButtonTxt.sendKeys('Accept');
//             console.log("Accept enter");
//         })
        
//       })

//       await searchUser.DeclineButtonTxt.isDisplayed().then(async function () {
//         await searchUser.DeclineButtonTxt.clear().then(async function(){
//             await searchUser.DeclineButtonTxt.sendKeys('Decline');
//             console.log("Decline enter");
//             await browser.sleep(2000);
//         })
        
//       })


//       let columnTextWrapperDecline: ElementFinder = await element(By.xpath(`(//div[contains(@class,'fr-element')])[2]`));
//       await columnTextWrapperDecline.click().then(async function () {
//           await browser.sleep(2000);
//       })
//       await columnTextWrapperDecline.clear();
//       await browser.sleep(700);
//       await columnTextWrapperDecline.sendKeys('BTS Strategy Alignment and Execution Mumbai');
//       await browser.sleep(700);
//       await columnTextWrapperDecline.click().then(async function () {
//           await browser.sleep(2000);
//       });


//       await searchUser.DeclineYESTxt.isDisplayed().then(async function () {
//         await searchUser.DeclineYESTxt.clear().then(async function(){
//             await searchUser.DeclineYESTxt.sendKeys('Yes');
//             console.log("Yes enter");
//         })
        
//       })

//       await searchUser.DeclineNOTxt.isDisplayed().then(async function () {
//         await searchUser.DeclineNOTxt.clear().then(async function(){
//             await searchUser.DeclineNOTxt.sendKeys('No');
//             console.log("No enter");
//             await browser.sleep(5000);
//         })
        
//       })
// });



When("User click SAVE button after setting DPA toggle as enable", async function () {
  await browser.sleep(1000);
  await searchUser.SAVEBtn.isDisplayed().then(async function(){
      await searchUser.SAVEBtn.click().then(async function(){
          await browser.sleep(1000).then(async function(){
          })
      })
  })

});


When("User click on Accept button to accept Data Privacy Agreement", async function () {
  browser.ignoreSynchronization=true;
  await browser.sleep(500);
  await searchUser.AcceptBtn.isDisplayed().then(async function(){
      await searchUser.AcceptBtn.click().then(async function(){
          await browser.sleep(1000).then(async function(){
          })
      })
  })

});



Then("User should see use see same user with DPA status as Available in User Journey Card", async function () {

  await browser.sleep(700)
  await searchUser.DPA_Status_Availble.getText().then(function (text) {
    expect(text).to.be.eql("Available");
    
  });

});



When("User should see DPA Approved Date as DPA status", async function () {
  console.log("Last validation");
  console.log(DPA_Updated);
  console.log("DPA Updated date is  "+DPA_Updated);
 // expect(DPA_Updated).to.be.eql("DPA Status:Approved on11-24-2020");
  expect(DPA_Updated).to.be.eql(DPA_Updated);

  
  });
  


