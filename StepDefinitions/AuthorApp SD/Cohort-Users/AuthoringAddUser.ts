import { Given, Then, When } from "cucumber";
import { browser, protractor, element } from "protractor";
import { AuthoringCohortListingPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringCohortListing"
import { AuthoringAddUserLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringAddUser";
import chai = require("chai");
import { By } from "protractor";

var expect = chai.expect;
var EC = protractor.ExpectedConditions;
let AuthoringCohortListing = new AuthoringCohortListingPageLocate();
let AddUserCohortPage = new AuthoringAddUserLocate();
var driver = browser.driver;


function generateRandomWord(length: number): string {
  let result: string = "";
  let selectionPool: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let len: number = selectionPool.length;
  for (let i = 0; i < length; i++) {
    result = result + selectionPool.charAt(Math.floor(Math.random() * len));
  }
  //console.log(result);
  return result;
}

let randomWord: string = generateRandomWord(6);
let fnameCreateUser: string = "fname" + randomWord;
let lnameCreateUser: string = "lname" + randomWord;

When('User clicks on the Journey named Automation_Add Cohort', async function () {
  await AddUserCohortPage.lnkTestJourney.isDisplayed().then(async function () {
    await AddUserCohortPage.lnkTestJourney.click();
  })
});

When('User clicks on the cohort named Automation Cohort', async function () {
  await AddUserCohortPage.lnkCohortName.isDisplayed().then(async function () {
    await AddUserCohortPage.lnkCohortName.click();
  })
});

Given('user is on the cohort page', async function () {
  await AddUserCohortPage.btnAddUser.isDisplayed().then(function (result) {
    expect(result).to.be.true;
  })
  // return 'pending';
});

When('user click on Add User button', async function () {

  await AddUserCohortPage.btnAddUser.click().then(async function () {
    await browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'dot dot-3')]"))), 5000).then(function () {
      browser.sleep(1000);
    })

  })
  //return 'pending';
});

// Then('Add User popup list should get displayed', async function () {
//   await AddUserCohortPage.txtSearchUsers.isDisplayed().then(function (bool) {
//     expect(bool).to.be.true;
//   })
//   //return 'pending';
// });

When('Add User popup list should get displayed', async function () {
  await AddUserCohortPage.userList.isDisplayed().then(async function (bool) {
    if (bool == true) {
      await AddUserCohortPage.txtSearchUsers.click();
    }
    else {
      expect(false).to.be.true;
    }

  })
})

When("user tries to search {string}", async function (firstName) {
  await AddUserCohortPage.txtSearchUsers.sendKeys(firstName);
})

Then("user should able to view searched user successfully under popup", async function () {
  await AddUserCohortPage.searchResults.count().then(function (searchCount) {
    expect(searchCount).to.be.greaterThan(0);
  })
})
let fName_UserToBeAdded: string = '';
let lName_UserToBeAdded: string = '';
let email_userToBeAdded: string = '';
When("user adds the first user in the search results", async function () {
  await AddUserCohortPage.firstUserInSearchResults_FName.getText().then(async function (firstName) {
    fName_UserToBeAdded = firstName;
  })
  await AddUserCohortPage.firstUserInSearchResults_Lname.getText().then(async function (lastName) {
    lName_UserToBeAdded = lastName;
  })
  await AddUserCohortPage.firstUserInSearchResults_Email.getText().then(async function (email) {
    email_userToBeAdded = email.replace(/\(/, "").replace(/\)/, "");
  })
  await AddUserCohortPage.chkBoxFirstUserInSearchResults.click();

});

When("user clicks on Add button", async function () {
  await AddUserCohortPage.btnAdd.click().then(async function () {
    await browser.sleep(2000).then(async function () {
      // await browser.wait(EC.presenceOf(element(By.id("toast-container")))).then(async function () {
      //   await browser.driver.findElement(By.id("toast-container")).click().then(async function () {
      //   })
      // })      
    })
    //await browser.sleep(2000);
    let addUserClicked = await element(By.css("button[name*='cancel']")).isPresent();
    if (!addUserClicked) {
      AddUserCohortPage.btnAdd.click();
    }
    await element(By.css("button[name*='cancel']")).click();
  })
})

Then("user should get mapped to the cohort successfully", async function () {
  let addedUserOnCohortPageXpath: string = `//div[contains(@class,'common-table')]//tbody/tr//button[contains(text(),'${fName_UserToBeAdded}')]/ancestor::td[contains(@class,'fname')]/following-sibling::td[contains(@class,'email') and contains(text(),'${email_userToBeAdded}')]`;
  await element(By.xpath(addedUserOnCohortPageXpath)).isDisplayed().then(async function (result) {
    expect(result).to.be.true;

  })

})

Then('searched user should also get removed from the Add User list', async function () {
  await AddUserCohortPage.btnAddUser.click().then(async function () {
    await AddUserCohortPage.txtSearchUsers.click().then(async function () {
      let usernameOnAddUserPopUpXpath: string = "//span[contains(text(),'" + email_userToBeAdded + "')]";
      element(By.xpath(usernameOnAddUserPopUpXpath)).isPresent().then(function (result) {
        expect(result).to.be.false;
      })
    })
  })
})

When('user clicks on Cancel button', async function () {
  await AddUserCohortPage.btnCancel.click().then(async function () {
    await browser.sleep(2000);
  })
})

Then("searched user should not get mapped to the cohort", async function () {
  let addedUserOnCohortPageXpath: string = `//div[contains(@class,'common-table')]//tbody/tr//button[contains(text(),'${fName_UserToBeAdded}')]/ancestor::td[contains(@class,'fname')]/following-sibling::td[contains(@class,'email') and contains(text(),'${email_userToBeAdded}')]`;
  await element(By.xpath(addedUserOnCohortPageXpath)).isPresent().then(async function (result) {
    expect(result).to.be.false;

  })
})

Given("user navigates to a different Cohort", async function () {
  // await AddUserCohortPage.journeyPetronas_QA.click().then(async function () {
  //   await AddUserCohortPage.lnkCohortAutomationMohit.click().then(function () {
  //     browser.sleep(2000);
  //   })
  // })
  await AddUserCohortPage.backToJourneyCohorts.click().then(async function () {
    await AddUserCohortPage.lnkCohortAutomationMohit.click().then(async function () {
      await browser.sleep(2000);
    })
  })


})

When('user click on Create User button', async function () {
  AddUserCohortPage.btnCreateUser.click().then(function () {
    browser.sleep(2000);
  })
})

When("user creates a new Participant User", async function () {
  await AddUserCohortPage.btnCreateUser.click().then(async function () {
    await AddUserCohortPage.txtFNameCreateUser.click().then(async function () {
      await AddUserCohortPage.txtFNameCreateUser.sendKeys(fnameCreateUser);
    })

    await AddUserCohortPage.txtLNameCreateUser.click().then(async function () {
      await AddUserCohortPage.txtLNameCreateUser.sendKeys(lnameCreateUser);
    })

    await AddUserCohortPage.txtEmailCreateuser.click().then(async function () {
      await AddUserCohortPage.txtEmailCreateuser.sendKeys("automation_" + randomWord + "@petronas.com");
    })

    await AddUserCohortPage.txtPwdCreateUser.click().then(async function () {
      await AddUserCohortPage.txtPwdCreateUser.sendKeys("ABab12$");
    })
    await AddUserCohortPage.btnCreate.click().then(async function () {
      browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'toast-success')]"))), 5000);
      await browser.sleep(2000);
    })
  })
})

When("newly created user should get mapped to the cohort successfully", async function () {
  //let createdUserOnCohortPageXpath: string = "//div[contains(@class,'common-table')]//tbody/tr/td[contains(@class,'fname') and contains(text(),'" + fnameCreateUser + "')]/following-sibling::td[contains(text(),'" + lnameCreateUser + "')]";
  let createdUserOnCohortPageXpath: string = `//div[contains(@class,'common-table')]//tbody/tr//button[contains(text(),'${fnameCreateUser}')]/ancestor::td[contains(@class,'fname')]/following-sibling::td[contains(@class,'lname') and contains(text(),'${lnameCreateUser}')]`;
  await element(By.xpath(createdUserOnCohortPageXpath)).isDisplayed().then(async function (result) {
    expect(result).to.be.true;
    if (result == true) {
      // await AddUserCohortPage.journeyPetronas_QA.click().then(async function () {
      //   browser.sleep(1000);
      // })
      await AddUserCohortPage.backToJourneyCohorts.click().then(async function () {
        browser.sleep(1000);
      })
    }
  })
})

Then("the newly added user should not get listed in another cohort when ADD USER button is clicked", async function () {
  await AddUserCohortPage.txtSearchUsers.click().then(async function () {
    await AddUserCohortPage.txtSearchUsers.sendKeys(fnameCreateUser).then(async function () {
      await browser.sleep(1000);
      let createdUserOnAddUserXpath: string = "//span[contains(text(),'" + fnameCreateUser + "')]/following-sibling::span[contains(text(),'" + lnameCreateUser + "')]";
      await element(By.xpath(createdUserOnAddUserXpath)).isPresent().then(async function (result) {
        expect(result).to.be.false;
        await AddUserCohortPage.cancelBtnAddUser.click();
      })
    })
  })

})

When("user navigates to the Client Journey List", async function () {
  await AddUserCohortPage.userDashboard.click().then(async function () {
    await browser.sleep(2000);
  })
})

When('user navigates to a different journey', async function () {
  let counter: number = 0;
  try {
    browser.manage().timeouts().implicitlyWait(2 * 1000);
    let isJourneyPresent = await AddUserCohortPage.journeyTwo.isPresent();

    while ((!isJourneyPresent) && counter < 50) {
      await element(By.css("div[class*='show'] button")).click();
      await browser.sleep(2000);
      isJourneyPresent = await AddUserCohortPage.journeyTwo.isPresent();
      counter++;
    }

  }
  catch (e) {
    console.log("Specified cohort is not visible. Please check testData file");
    expect(true).to.be.false;
  }
  finally {
    browser.manage().timeouts().implicitlyWait(30 * 1000);
  }

  if (counter >= 49) {
    console.log('Journey Not found in the Journey list on cohort tab');
  }
  await AddUserCohortPage.journeyTwo.click();
});

When('User clicks on the cohort of changed journey', async function () {
  await AddUserCohortPage.journeyTwoCohort.isPresent().then(async function (cohortVisible) {
    if (cohortVisible == true) {
      await AddUserCohortPage.journeyTwoCohort.click();
    }
    else {
      console.log("Specified cohort is not visible. Please check testData file");
      expect(true).to.be.false;
    }
  })
});

Then("the newly added user should be listed in another cohort when ADD USER button is clicked", async function () {
  await AddUserCohortPage.txtSearchUsers.click().then(async function () {
    await AddUserCohortPage.txtSearchUsers.sendKeys(fnameCreateUser).then(async function () {
      await browser.sleep(1000);
      let createdUserOnAddUserXpath: string = "//span[contains(text(),'" + fnameCreateUser + "')]/following-sibling::span[contains(text(),'" + lnameCreateUser + "')]";
      await element(By.xpath(createdUserOnAddUserXpath)).isDisplayed().then(async function (result) {
        expect(result).to.be.true;
      })
    })
  })
})