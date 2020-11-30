import { Given, Then, When } from "cucumber";
import { browser, By, element, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import config from "../../config.json";
import chai = require('chai');

import { RBACParticipantPermissionLocate } from "../../../PageObjects/AuthorApp POM/Home Page/RBACParticipantPermissionPage";


let expect = chai.expect;
// let EC = protractor.ExpectedConditions;
let rbac_Participant = new RBACParticipantPermissionLocate();
let expectedCheck = "checked";


When("User clicks on Participant Permission Tab", async function () {
    await rbac_Participant.ParticipantPermissionBtn.isDisplayed().then(async function () {
        await rbac_Participant.ParticipantPermissionBtn.click().then(async function () {
            await browser.sleep(1000);

        })
    })
});

When("User navigate Participant Permission Tab Roles Page", async function () {
  await browser.sleep(500);
});



Then("User should see Participant Roles option is checked by default with Permissions", async function () {

 await browser.sleep(1000)
  await rbac_Participant.ParticipantCheckBox.isEnabled().then(async function (flag) {
    expect(flag).to.be.true;

  })
  await rbac_Participant.ViewAssessmentReportsChckIcon.getText().then(async function (actualCheck) {
    expect(actualCheck).to.be.eql(expectedCheck);
  })
  await rbac_Participant.ReadDiscussionsChckIcon.getText().then(async function (actualCheck) {
    expect(actualCheck).to.be.eql(expectedCheck);
  })

  await rbac_Participant.EditDiscussionsChckIcon.getText().then(async function (actualCheck) {
    expect(actualCheck).to.be.eql(expectedCheck);
  })

});


When("User click Participant checkbox to uncheck", async function () {
    await rbac_Participant.ParticipantCheckBox.isDisplayed().then(async function () {
        await rbac_Participant.ParticipantCheckBox.click().then(async function () {
            await browser.sleep(3000);

        })
    })
});



When("User click Report Reviewer checkbox to check", async function () {
    await rbac_Participant.ReportReviewerCheckBox.isDisplayed().then(async function () {
        await rbac_Participant.ReportReviewerCheckBox.click().then(async function () {
            await browser.sleep(1000);

        })
    })
});





Then("User should see Report Reviewer Roles  is checked with Permissions", async function () {

    await browser.sleep(1000)
     await rbac_Participant.ReportReviewerCheckBox.isEnabled().then(async function (flag) {
       expect(flag).to.be.true;
   
     })
     await rbac_Participant.ViewAssessmentReportsChckIcon.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
     
     await rbac_Participant.SponsordashboardCheckBox.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
   
   });
   

   
When("User click Participant Team Lead checkbox to check", async function () {
    await rbac_Participant.ParticipantTeamLeadCheckBox.isDisplayed().then(async function () {
        await rbac_Participant.ParticipantTeamLeadCheckBox.click().then(async function () {
            await browser.sleep(1000);

        })
    })
});



Then("User should see Participant Team Lead Roles is checked with Permissions", async function () {

    await browser.sleep(1000)
     await rbac_Participant.ParticipantTeamLeadCheckBox.isEnabled().then(async function (flag) {;
       expect(flag).to.be.true;
   
     })
     await rbac_Participant.ModeratediscussionsCheckBox.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
     
   });
   

 
   When("User click Test User checkbox to check", async function () {
    await rbac_Participant.TestUserCheckBox.isDisplayed().then(async function () {
        await rbac_Participant.TestUserCheckBox.click().then(async function () {
            await browser.sleep(1000);

        })
    })
});



Then("User should see Test User Roles is checked with Permissions", async function () {

    await browser.sleep(1000)
     await rbac_Participant.TestUserCheckBox.isEnabled().then(async function (flag) {
       expect(flag).to.be.true;
   
     })
     await rbac_Participant.ViewAssessmentReportsChckIcon.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
     await rbac_Participant.ReadDiscussionsChckIcon.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
   
     await rbac_Participant.EditDiscussionsChckIcon.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
   
   });
   

   
   When("User click UAT User checkbox to check", async function () {
    await rbac_Participant.UATUserCheckBox.isDisplayed().then(async function () {
        await rbac_Participant.UATUserCheckBox.click().then(async function () {
            await browser.sleep(1000);

        })
    })
});




Then("User should see UAT User Roles is checked with Permissions", async function () {

    await browser.sleep(1000)
     await rbac_Participant.UATUserCheckBox.isEnabled().then(async function (flag) {
       expect(flag).to.be.true;
   
     })
     
     await rbac_Participant.ReadDiscussionsChckIcon.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
   
     await rbac_Participant.EditDiscussionsChckIcon.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })

     
     await rbac_Participant.EditDiscussionsChckIcon.getText().then(async function (actualCheck) {
        expect(actualCheck).to.be.eql(expectedCheck);
      })

      await rbac_Participant.ModeratediscussionsCheckBox.getText().then(async function (actualCheck) {
        expect(actualCheck).to.be.eql(expectedCheck);
      })

   });
   

   
   
   When("User click Facilitator checkbox to check", async function () {
    await rbac_Participant.FacilitatorCheckBox.isDisplayed().then(async function () {
        await rbac_Participant.FacilitatorCheckBox.click().then(async function () {
            await browser.sleep(1000);

        })
    })
});





Then("User should see Facilitator Roles is checked with Permissions", async function () {

    await browser.sleep(1000)
     await rbac_Participant.FacilitatorCheckBox.isEnabled().then(async function (flag) {
       expect(flag).to.be.true;
   
     })
     
     await rbac_Participant.FacilitatorPermissionCheckBox.getText().then(async function (actualCheck) {
       expect(actualCheck).to.be.eql(expectedCheck);
     })
   
     console.log("Last Passed !!!!!!!!!!");
   });
   