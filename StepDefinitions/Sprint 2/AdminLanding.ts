import { Given, Then, When } from "cucumber";
import { browser, By, element, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../PageObjects/Sprint 2/AdminLandingPage";
import { LoginPageLocate } from "../../PageObjects/Sprint 1/LoginPage";
import config from "../config.json";
import chai = require('chai');
var expect = chai.expect;
var listexists = true;
var EC = protractor.ExpectedConditions;
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let arr1: Array<string> = [];
let actarr: Array<string> = ['Leadership Master Journey1', 'Microsoft Sales Skills Simulation', 'Emergent Leadership', 'Emergent Leadership (Oil & Gas)', 'Self-Paced Journey Template'];

Given('User should be loged in with username as {string} and password as {string}', { timeout: 100 * 10000 }, async function (string, string2) {
    await browser.get(config.MomentaUserUrl);
    await admloginpage.txtEmail.sendKeys(string);
    await admloginpage.btnNextPwd.click().then(async function () {
        await admloginpage.txtPassword.sendKeys(string2);
        await admloginpage.btnLogin.click()
    })
});


Then('User should be able to see clickable logo on Landing Page', async function () {
    await admlandpage.imgMomentaLogo.isDisplayed().then(function () {
        admlandpage.imgMomentaLogo.getText().then(function (logoText) {
            console.log(logoText);
        })
    })
});


Then('User should able to see all the collections under Master tab', async function () {
    await admlandpage.tabMaster.isDisplayed().then(async function () {
        await admlandpage.colLeadership.isDisplayed().then(async function () {
            await admlandpage.colCoach.isDisplayed().then(function () {
                console.log("Collections Verified");
            });
        })
    })
})

//Master Collection Tab
When('User clicks on Master tab TAB', async function () {
    await admlandpage.tabMaster.isDisplayed().then(async function () {
        await admlandpage.tabMaster.click();
    })
});

When('User clicks on any of the Master collection loaded', async function () {
    await admlandpage.colLeadership.isDisplayed().then(async function () {
        await admlandpage.colLeadership.click();
    })
});

Then('User should be able to see Master collection landing page with title', async function () {
    await admlandpage.tabMasterCollection.isDisplayed().then(async function () {
        await admlandpage.tabMasterCollection.getText().then(async function (masterTitle) {
            expect(masterTitle).to.equal("Master Collection");
        })
    })
});

When('User clicks on more icon', async function () {
    await admlandpage.btnHamburgerMenuIcon.isDisplayed().then(async function () {
        await admlandpage.btnHamburgerMenuIcon.click().then(async function () {
            await browser.sleep(1000);
        })
    })
});

Then('User should be able to see Signout option', async function () {
    await admlandpage.mnuLogout.isDisplayed().then(async function () {
        await admlandpage.mnuLogout.getText().then(async function (logoutText) {
            console.log(logoutText);
        });
    })
})

When('User clicks on signout button', async function () {
    await admlandpage.mnuLogout.isDisplayed().then(async function () {
        await admlandpage.mnuLogout.click().then(async function () {
            await browser.sleep(2000);
        })
    })
})

Then('User should be logged out and landed to Login Page', async function () {
    await browser.getTitle().then(function (loginPageTitle) {
        console.log(loginPageTitle);
    })
});


When('User clicks on refresh', async function () {
    await browser.refresh().then(function () {
        browser.sleep(5000);
    })
});


Then('User should stay on Admin Landing Page', async function () {
    await browser.getTitle().then(async function (pageTitle) {
        expect(pageTitle).to.equal("Momenta");
    })
});


//Client Tab
When('User should click on Client Tab', async function () {
    await admlandpage.tabClient.isDisplayed().then(async function () {
        await admlandpage.tabClient.click();
    })
});

When('User should click on Petronas folder', async function () {
    await admlandpage.txtClientSearch.sendKeys("petronas").then(async function () {
        await admlandpage.colPetronas.isDisplayed().then(async function () {
            await admlandpage.colPetronas.click()
        })
    })
});

Then('User should check if plus icon is present besides Journeys and click on it', async function () {
    await admlandpage.btnJourneyPlus.isDisplayed().then(async function () {
        await admlandpage.btnJourneyPlus.click().then(async function () {
            await admlandpage.mnuCopyJourney.isDisplayed().then(async function () {
                await admlandpage.mnuCopyJourney.click().then(async function () {
                    await browser.driver.switchTo().activeElement().then(function () {
                        browser.sleep(2000);
                    })
                })
            })
        })
    })
});

Then('User should view the list of Journeys under Copy Journey', async function () {
    await element.all(By.xpath("//div[@class='journey-list ng-star-inserted']//div[@class='journey-list__box']//div//span[@class='journey-list--fontsize']")).each(function (element, index) {
        element.getText().then(function (text) {
            arr1.push(text);
        })
    })
    expect(actarr).to.include.members(arr1);
});


Then('User should click on Copy button under Copy Journey dialog box', async function () {
    await admlandpage.btnCopyCopyJourney.isDisplayed().then(async function () {
        await admlandpage.btnCopyCopyJourney.click().then(async function () {
            await browser.sleep(4000);
        })
    })
});


Then('User should give Journey Title as {string} and Journey Description as {string}', async function (string, string2) {
    await admlandpage.txtJourneyTitle.clear().then(async function () {
        await admlandpage.txtJourneyTitle.sendKeys(string).then(async function () {
            await admlandpage.txtJourneyDescription.clear().then(async function () {
                await admlandpage.txtJourneyDescription.sendKeys(string2).then(async function () {
                    await browser.sleep(4000);
                })
            })
        })
    })
});


Then('User should click on Save button of Journey Configuration', async function () {
    await admlandpage.btnJourneyAuthSave.isEnabled().then(async function () {
        await admlandpage.btnJourneyAuthSave.click().then(async function () {
            await browser.sleep(5000);
        })
    })
});     