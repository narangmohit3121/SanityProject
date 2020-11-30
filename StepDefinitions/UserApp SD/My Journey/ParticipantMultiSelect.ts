import { Given, When, Then, Before } from "cucumber";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import { ParticipantActivityMultiSelectPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantMultiSelectPage";
import Testdata from "../../../testData.json"
import { browser } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { async } from "q";
var expect = chai.expect;
import { apiHelperFunctions } from "../../apiHelperClass";
let expjourneypagetitle = "My Journey";
let expactvitiytitle = "What is important in this industry to succeed";
let expmoduletitle = "Opportunities and trends in the industry";

let participantactivitypage = new ParticipantActivityPageLocate();
let participantactivitymultiselectpage = new ParticipantActivityMultiSelectPageLocate();



let apiHelper = new apiHelperFunctions();

Before({ tags: "@MultiSelect1" }, async function () {
  await apiHelper.resetUser("qa_momenta@bts.com", "ABab12$", "bts", Testdata.apiBuildVersion, "5d82323fd9b8ca499403e5bd", "single_n_multiselect@petronas.com", "feb066622bc0f9064a23")
  console.log("API Called  For MultiSelect!!!");
})



Then("Participant should see all multi select items are unselected with unchecked items", async function () {
  await browser.sleep(3000)
  await participantactivitymultiselectpage.angularCheckbox.isSelected().then(async function (flag) {
    expect(flag).to.be.false;

  })

  await participantactivitymultiselectpage.protracotCheckbox.isSelected().then(async function (flag) {
    expect(flag).to.be.false;
  })

  await participantactivitymultiselectpage.postmanCheckbox.isSelected().then(async function (flag) {
    expect(flag).to.be.false;
  })

  await participantactivitymultiselectpage.genkinCheckbox.isSelected().then(async function (flag) {
    expect(flag).to.be.false;
  })


  await participantactivitymultiselectpage.bitBucketCheckbox.isSelected().then(async function (flag) {
    expect(flag).to.be.false;
  })


});


When("Participant click angular checkbox option", async function () {
    await participantactivitymultiselectpage.angularCheckbox.isDisplayed().then(async function(){
        await participantactivitymultiselectpage.angularCheckbox.click().then(async function(){
            await browser.sleep(3000);
        })
    })
  });

  

Then("Participant should see angular checkbox item is checked and selected", async function () {

  await browser.sleep(5000)
  await participantactivitymultiselectpage.angularCheckbox.isEnabled().then(async function (flag) {
    expect(flag).to.be.true;

  })

});



Then("Participant should not allowed to select protractor checkbox item", async function () {

  await browser.sleep(5000)
  await participantactivitymultiselectpage.protracotCheckbox.isEnabled().then(async function (flag) {
    expect(flag).to.be.false;

  })

});



When("Participant click protractor checkbox option", async function () {
  await participantactivitymultiselectpage.protracotCheckbox.isDisplayed().then(async function(){
      await participantactivitymultiselectpage.protracotCheckbox.click().then(async function(){
          await browser.sleep(3000);
      })
  })
});



When("Participant select four options as Angular Protractor Postman Jenkin", async function () {

  await participantactivitymultiselectpage.angularCheckbox.isDisplayed().then(async function(){
    await participantactivitymultiselectpage.angularCheckbox.click().then(async function(){
        await browser.sleep(1000);
    })
})

  await participantactivitymultiselectpage.protracotCheckbox.isDisplayed().then(async function(){
      await participantactivitymultiselectpage.protracotCheckbox.click().then(async function(){
          await browser.sleep(1000);
      })
  })

  
  await participantactivitymultiselectpage.postmanCheckbox.isDisplayed().then(async function(){
    await participantactivitymultiselectpage.postmanCheckbox.click().then(async function(){
        await browser.sleep(1000);
    })
})

await participantactivitymultiselectpage.genkinCheckbox.isDisplayed().then(async function(){
  await participantactivitymultiselectpage.genkinCheckbox.click().then(async function(){
      await browser.sleep(1000);
  })
})



});


Then("Participant should not allowed to select four items", async function () {

  await browser.sleep(5000)
  await participantactivitymultiselectpage.genkinCheckbox.isSelected().then(async function (flag) {
    expect(flag).to.be.false;

  })

});

Then("Participant should see multiselect dropdown displayed", async function () {

  await browser.sleep(3000);
  await participantactivitymultiselectpage.OurCustomersLbl.getText().then(function (text) {
    expect(text).to.be.eql("Our Customers");
});
await participantactivitymultiselectpage.NothingSelectedDD.getText().then(function (text) {
  expect(text).to.be.eql("Nothing selected");
});
 await browser.sleep(3000);

});


When("Participant click on arrow of Our Customers multiselect dropdown", async function () {
  await browser.sleep(3000);
  await participantactivitymultiselectpage.NothingSelectedDDArrow.isDisplayed().then(async function(){
      await participantactivitymultiselectpage.NothingSelectedDDArrow.click().then(async function(){
          await browser.sleep(1000);
      })
  })
});


When("Participan select three option as Microsoft Coca cola Petronas from multiselect dropdown", async function () {
  await browser.sleep(3000);
  await participantactivitymultiselectpage.MicrosoftCheckBoxOption.isDisplayed().then(async function(){
      await participantactivitymultiselectpage.MicrosoftCheckBoxOption.click().then(async function(){
          await browser.sleep(1000);
          
      })
  })
  await participantactivitymultiselectpage.CocaColaCheckBoxOption.isDisplayed().then(async function(){
    await participantactivitymultiselectpage.CocaColaCheckBoxOption.click().then(async function(){
        await browser.sleep(1000);
    })
})

await participantactivitymultiselectpage.PetronasCheckBoxOption.isDisplayed().then(async function(){
  await participantactivitymultiselectpage.PetronasCheckBoxOption.click().then(async function(){
      await browser.sleep(1000);
  })
})

});


Then("Participant should not be allowed to select more than two options which is set by minimum 2 by admin", async function () {

  await browser.sleep(1000)
  await participantactivitymultiselectpage.PetronasCheckBoxOption.isEnabled().then(async function (flag) {
    expect(flag).to.be.false;
  })
});




When("Participan select four options as Microsoft Coca cola Petronas Chevron from multiselect dropdown", async function () {
  await browser.sleep(1000);
  await participantactivitymultiselectpage.MicrosoftCheckBoxOption.isDisplayed().then(async function(){
      await participantactivitymultiselectpage.MicrosoftCheckBoxOption.click().then(async function(){
          await browser.sleep(1000);
      })
  })
  await participantactivitymultiselectpage.CocaColaCheckBoxOption.isDisplayed().then(async function(){
    await participantactivitymultiselectpage.CocaColaCheckBoxOption.click().then(async function(){
        await browser.sleep(1000);
    })
})

await participantactivitymultiselectpage.PetronasCheckBoxOption.isDisplayed().then(async function(){
  await participantactivitymultiselectpage.PetronasCheckBoxOption.click().then(async function(){
      await browser.sleep(1000);
  })
})


await participantactivitymultiselectpage.ChevronCheckBoxOption.isDisplayed().then(async function(){
  await participantactivitymultiselectpage.ChevronCheckBoxOption.click().then(async function(){
      await browser.sleep(1000);
  })
})

});

Then("Participant should not be allowed to select more than three options which is set maximum 3 by admin", async function () {
  await browser.sleep(5000)
  await participantactivitymultiselectpage.PetronasCheckBoxOption.isSelected().then(async function (flag) {
    expect(flag).to.be.false;
  })
});
