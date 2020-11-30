import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../../../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { By } from "protractor";
//import { CommonLocate } from "../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { RegistrationFlowPageLocate } from "../../../../PageObjects/UserApp POM/Home/RegistrationFlowPage"
import { ParticipantActivityPageLocate } from "../../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import { RanderingSelectionDropdownPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/RanderingSelectionDropdownPage.js";
import { async } from "q";

let expActivitypagetitle = "Momenta";
let expectedcityName = "Momenta";

var expect = chai.expect;


let randeringSelectionDropdownPage = new RanderingSelectionDropdownPageLocate();


When('Participant user enters valid Email Id as {string} for petronas', async function (string) {
    await randeringSelectionDropdownPage.participantLoginId.clear().then(async function () {
        await randeringSelectionDropdownPage.participantLoginId.sendKeys(string).then(async function () {
            await browser.sleep(3000);
        })

    });
});

When('Participant user enters valid Password as {string} for petronas', async function (string) {
    await randeringSelectionDropdownPage.participantPassword.clear().then(async function () {
        await randeringSelectionDropdownPage.participantPassword.sendKeys(string).then(async function () {
            await browser.sleep(3000);
        })
    });
});

When('Participant user clicks on Login Button to see journey', async function () {
    await randeringSelectionDropdownPage.participantLoginBtn.isDisplayed().then(async function () {
        await randeringSelectionDropdownPage.participantLoginBtn.click().then(async function () {
            await browser.sleep(13000).then(async function () {

            })


        })
    })
});


When("User select an industry as {string}", async function (industryName) {
    browser.waitForAngularEnabled(false);
    await browser.sleep(4000).then(async function () {
        await randeringSelectionDropdownPage.industryDDArrow.isPresent().then(async function (registrationReqd) {
            if (registrationReqd == true) {
                await randeringSelectionDropdownPage.industryDDArrow.click().then(async function () {
                    let industryXpath: string = "//option[contains(text(),'" + industryName + "')]"
                    await element(By.xpath(industryXpath)).click().then(async function () {
                        await randeringSelectionDropdownPage.continueBtn.click().then(function () {
                            browser.sleep(8000);
                        })

                    })
                })
            }
        })
    })
    browser.waitForAngularEnabled(true);
})

When("user select the region as {string}", async function (regionName) {
    browser.waitForAngularEnabled(false);
    await randeringSelectionDropdownPage.selectRegionText.isPresent().then(async function (regionSelectionReqd) {
        if (regionSelectionReqd == true) {
            let radioBtnRegionXpath = "//span[contains(text(),'" + regionName + "')]/ancestor::mat-radio-button[contains(@value,'region_item1')]";
            await element(By.xpath(radioBtnRegionXpath)).click().then(async function () {
                await browser.sleep(6000);
                await randeringSelectionDropdownPage.continueBtn.click().then(function () {

                })

            })
        }
    })
    browser.waitForAngularEnabled(true);
})


When('user landed on Activity SingleSelecet1345 page and click Start button', async function () {

    await browser.waitForAngularEnabled(false);
    await randeringSelectionDropdownPage.ActivityTxt.isDisplayed().then(async function (FLAG) {
        if (FLAG == true)
            await randeringSelectionDropdownPage.StartBtn.click().then(async function () {
                await browser.waitForAngularEnabled(true);
                browser.sleep(2000)
            })
    })
    await browser.waitForAngularEnabled(true);
})

When('user is able to see BTS Products dropdown in joureny page', async function () {
    await browser.waitForAngularEnabled(false);
    await browser.sleep(8000).then(async function () {
        await randeringSelectionDropdownPage.BTSProductTxt.isDisplayed().then(async function (result) {
            expect(result).to.be, true;

        })
    })
    await browser.waitForAngularEnabled(true);
})

When('user select product as {string} from BTS Products dropdown', async function (industryName) {
    await browser.waitForAngularEnabled(false);
    await randeringSelectionDropdownPage.BtsProductsDDArrow.isDisplayed().then(async function (ddArrow) {
        if (ddArrow == true) {
            await randeringSelectionDropdownPage.BtsProductsDDArrow.click().then(async function () {
                let industryXpath: string = "//option[contains(text(),'" + industryName + "')]"
                await element(By.xpath(industryXpath)).click().then(async function () {
                    await browser.sleep(5000);
                })
            })
        }
    })
    await browser.waitForAngularEnabled(true);
})

Then('Momenta should be selected as a BTS product', async function () {
    await browser.waitForAngularEnabled(false);
    await randeringSelectionDropdownPage.selectedMomentaDrp.isSelected().then(async function (prductSelected) {
        console.log(prductSelected);
        expect(prductSelected).to.be.true;
    })
    await browser.waitForAngularEnabled(true);
});

When('user click continue button after select product as Momenta', async function () {
    await randeringSelectionDropdownPage.continueBtn.isDisplayed().then(async function () {
        await randeringSelectionDropdownPage.continueBtn.click().then(async function () {
            await browser.sleep(3000);
        })
    })
});

let isMumbaiCitySelected: boolean;
When('user select a city from the multi-select dropdown of the type checkbox', async function () {
    await browser.waitForAngularEnabled(false);
    await randeringSelectionDropdownPage.ddArrowMultiSelectCB.click();
    await browser.sleep(1000);
    // await randeringSelectionDropdownPage.cityMumbaird.isDisplayed().then(async function () {
    //     await randeringSelectionDropdownPage.cityMumbaird.click().then(async function () {
    //         await browser.sleep(3000);
    //     })
    // })
    await randeringSelectionDropdownPage.cityMumbaird.isSelected().then(async function (flag) {
        if (flag == true) {
            isMumbaiCitySelected = true;
            await randeringSelectionDropdownPage.cityBangalore.click();
            await randeringSelectionDropdownPage.cityMumbaird.click();
            await browser.sleep(1000);
        }
        else {
            isMumbaiCitySelected = false;
            await randeringSelectionDropdownPage.cityMumbaird.click();
            await randeringSelectionDropdownPage.cityBangalore.click();
            await browser.sleep(1000);
        }
    })
    await browser.waitForAngularEnabled(true);
});

Then('the corresponding city should get selected', async function () {
    await browser.waitForAngularEnabled(false);
    if (isMumbaiCitySelected) {
        await randeringSelectionDropdownPage.cityBangalore.isSelected().then(async function (flag) {
            expect(flag).to.be, true;
        })
    }
    else {
        await randeringSelectionDropdownPage.cityMumbaird.isSelected().then(async function (flag) {
            expect(flag).to.be, true;
        })
    }
    await browser.waitForAngularEnabled(true);
});








