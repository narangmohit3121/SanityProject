import { Then, When, Given, After, Before } from "cucumber";
import { browser, protractor, ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "protractor";
//import { NewLeaderboardPageLocate } from "../../PageObjects/Sprint 15/NewLeaderboardPage";
import { AdminLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { CommonLocate } from "../../../PageObjects/Common";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { ParticipantActivityPageLocate } from "../../../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import { SSOLocate } from "../../../PageObjects/AuthorApp POM/Login/SSOPage";
import config from "../../config.json";
import testData from "../../../testData.json";
import chai = require("chai");
var expect = chai.expect;
import { async } from "q";
var EC = protractor.ExpectedConditions;

//import mongodb, { MongoClient } from "mongodb";
import mongodb, { MongoClient } from "mongodb";
//let mongoClient = mongodb.MongoClient;
let connectionUrl: string = 'mongodb://momentaServicesTest:A7UC4_Cn19z@momentaglobaltestdatabase.btsmomenta.com:27017/momenta?authSource=admin';

let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let ssoLocate = new SSOLocate();
let participantactivitypage = new ParticipantActivityPageLocate();

import mongoose from "mongoose";

let connection: mongoose.Connection = null;
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // reconnectTries: 120,
    // reconnectInterval: 1000
    // bufferMaxEntries: 0,
    // connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
}

Given("the client App is correctly configured with correct SSO settings", async function () {
    browser.waitForAngularEnabled(false);
    await browser.get("https://bts-dev.onelogin.com/").then(async function () {
        await ssoLocate.oneLoginMenu.isPresent().then(async function (isMenuPresent) {
            if (isMenuPresent) {
                await ssoLocate.oneLoginMenu.click().then(async function () {
                    await browser.sleep(2000);
                    await ssoLocate.oneLoginMenuExpanded.isPresent().then(async function (isMenuExpanded) {
                        if (!isMenuExpanded) {
                            await ssoLocate.oneLoginMenu.click();
                            await browser.sleep(2000);
                        }
                    })
                    await browser.wait(EC.presenceOf(ssoLocate.oneLoginLogoutBtn), 5000).then(async function () {
                        //await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginLogoutBtn), 5000);
                        await ssoLocate.oneLoginLogoutBtn.click();
                    })
                })
            }
        })
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginUserId), 60 * 1000);
    });
    await ssoLocate.oneLoginUserId.clear().then(async function () {
        await ssoLocate.oneLoginUserId.sendKeys('mohit.narang@bts.com');
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginPwd), 60 * 1000);
        //await browser.sleep(5000);
        await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginContinueBtn), 60 * 1000);
    })

    await ssoLocate.oneLoginPwd.clear().then(async function () {
        await ssoLocate.oneLoginPwd.sendKeys('BTS@123456');
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginAdminTab), 60 * 1000);
    })
    //Switching to Admin tab
    let currentWindowHandle: string = await browser.getWindowHandle();
    await ssoLocate.oneLoginAdminTab.click().then(async function () {
        await browser.sleep(30 * 1000);
        await browser.getAllWindowHandles().then(async function (windowhandles) {
            windowhandles.forEach(async function (handle) {
                if (handle != currentWindowHandle) {
                    await browser.switchTo().window(handle).then(async function () {
                        await browser.sleep(5 * 1000);
                        // await browser.getCurrentUrl().then(async function (externalURL) {
                        //     console.log(externalURL);

                        // })
                    })
                }
            })
        });
    });
    await ssoLocate.oneLoginApplicatonsTab.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginClientApp), 60 * 1000);
        await ssoLocate.oneLoginClientApp.click().then(async function () {
            await browser.wait(EC.visibilityOf(ssoLocate.clientConfigTab), 60 * 1000);
            await ssoLocate.clientConfigTab.click().then(async function () {
                await browser.wait(EC.visibilityOf(ssoLocate.clientSSOLoginURL), 60 * 1000);
                await browser.wait(EC.elementToBeClickable(ssoLocate.clientSSOLoginURL), 60 * 1000);
                await ssoLocate.clientSSOLoginURL.clear().then(async function () {
                    await ssoLocate.clientSSOLoginURL.sendKeys('https://petronastest.btsmomenta.com/#/auth/sso/petronas/LBESSO');
                })
                await ssoLocate.clientSSOConsumerURL.clear().then(async function () {
                    await ssoLocate.clientSSOConsumerURL.sendKeys('https://momentaregioneuropetest.btsmomenta.com/auth/api/v1/basic/consumeSSO');
                })
                await ssoLocate.clientSSOValidatorURL.clear().then(async function () {
                    await ssoLocate.clientSSOValidatorURL.sendKeys('https://momentaregioneuropetest.btsmomenta.com/auth/api/v1/basic/consumeSSO');
                })
            });
            await ssoLocate.saveConfigBtn.click().then(async function () {
                await browser.sleep(5000);
            })
        })
    });
    await browser.close();
    await browser.switchTo().window(currentWindowHandle).then(async function () {
        await browser.sleep(5000).then(async function () {
            //await browser.executeScript("arguments[0].click()",ssoLocate.oneLoginLogoutBtn);
            await ssoLocate.oneLoginMenu.click().then(async function () {
                await browser.sleep(2000);
                await ssoLocate.oneLoginMenuExpanded.isPresent().then(async function (isMenuExpanded) {
                    if (!isMenuExpanded) {
                        await ssoLocate.oneLoginMenu.click();
                        await browser.sleep(2000);
                    }
                })
                await browser.wait(EC.presenceOf(ssoLocate.oneLoginLogoutBtn), 5000).then(async function () {
                    //await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginLogoutBtn), 5000);
                    await ssoLocate.oneLoginLogoutBtn.click();
                })
            })
        })
    })
    browser.waitForAngularEnabled(true);
})

let ssoPetronasFlagEnabled: boolean = false;

Given("the flag for ssoEnabled flag is set to true for petronas", async function () {
    //console.log(connectionUrl);
    await mongoose.connect(connectionUrl, options);

    // await browser.sleep(20000);
    connection = mongoose.connection;
    connection.on('connected', function () {
        console.log('Connected to Database');
    });
    connection.on('disconnected', function () {
        console.log('MongoDB disconnected!');
    });

    //console.log(connection);
    if (connection.readyState == 1) {
        console.log(connection.readyState);
        // let results = connection.db.collection('customers').find({'name':'coca-cola'});
        // let resultArray =await results.toArray();
        // console.log('length:', resultArray[0].passwordSecurity.length.min);
        await connection.db.collection('customers').findOneAndUpdate({ 'name': 'Petronas' }, { $set: { "ssoConfig.ssoEnabled": true } }).then(function () {
            console.log('Updated Client SSO flag to true');
            ssoPetronasFlagEnabled = true;
        })
        await browser.sleep(2000);
        //results.close();
    }
    else {
        console.log('Failed to connect to DB');
        expect(true).to.be.false;
    }
    // mongoose.connection.once('open', function () {
    //     console.log('Connected to Database');
    // });
    connection.on('error', function (error) {
        console.log(error);
    })
    connection.close().then(function () {
        console.log('Connection has been closed');
    })
});

When("Client SSO User logs in into One Login App", async function () {
    await browser.get(config.ParticipantPetronasUrl).then(async function () {
        await ssoLocate.btnLoginWithSSO.click();
    })
    browser.waitForAngularEnabled(false);
    // await browser.get("https://bts-dev.onelogin.com/").then(async function () {
    //     await browser.wait(EC.visibilityOf(ssoLocate.oneLoginUserId), 60 * 1000);
    // });
    await browser.wait(EC.visibilityOf(ssoLocate.oneLoginUserId), 60 * 1000);
    await ssoLocate.oneLoginUserId.clear().then(async function () {
        await ssoLocate.oneLoginUserId.sendKeys(testData.Sprint17.SSO.ClientSSO.Username);
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginPwd), 60 * 1000);
        //await browser.sleep(5000);
        await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginContinueBtn), 60 * 1000);
    })

    await ssoLocate.oneLoginPwd.clear().then(async function () {
        await ssoLocate.oneLoginPwd.sendKeys(testData.Sprint17.SSO.ClientSSO.Password);
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.sleep(30 * 1000);
        await browser.wait(EC.urlContains('petronastest'), 45 * 1000);
    })
    browser.waitForAngularEnabled(true);
})

Then("User should be successfully able to navigate to Participant App", async function () {
    browser.waitForAngularEnabled(false);
    await browser.getCurrentUrl().then(async function (URL) {
        expect(URL).to.contain('petronastest.btsmomenta.com');
    });
    await ssoLocate.participantAppHomeBtn.isDisplayed().then(async function (result) {
        if (result) {
            console.log('Successfully Navigated to client App');
        }
        expect(result).to.be.true;
    });
    browser.waitForAngularEnabled(true);
})

After({ tags: "@ClientSSO" }, async function () {
    console.log('Post Client SSO settings');
    await mongoose.connect(connectionUrl, options);
    connection = mongoose.connection;
    connection.on('connected', function () {
        console.log('Connected to Database');
    });
    connection.on('disconnected', function () {
        console.log('MongoDB disconnected!');
    });

    if (connection.readyState == 1) {
        await connection.db.collection('customers').findOneAndUpdate({ 'name': 'Petronas' }, { $set: { "ssoConfig.ssoEnabled": false } }).then(function () {
            console.log('Reset Client SSO flag to false');
            ssoPetronasFlagEnabled = false;
        })
        browser.sleep(2000);
    }
    else {
        console.log('Failed to connect to DB');
        expect(true).to.be.false;
    };
    connection.on('error', function (error) {
        console.log(error);
    })
    connection.close().then(function () {
        console.log('Connection has been closed');
    })
})

//-----------------------------------------------------------ADMIN SSO--------------------------------------------------
let ssoBTSFlagEnabled: boolean = false;

Before({ tags: "@AdminSSO" }, async function () {
    console.log('Pre Admin SSO settings');
    await mongoose.connect(connectionUrl, options);
    connection = mongoose.connection;
    connection.on('connected', function () {
        console.log('Connected to Database');
    });
    connection.on('disconnected', function () {
        console.log('MongoDB disconnected!');
    });

    if (connection.readyState == 1) {
        await connection.db.collection('customers').findOneAndUpdate({ 'name': 'BTS' }, { $set: { "ssoConfigAdmin.ssoEnabled": true } }).then(function () {
            console.log('Updated Admin SSO flag to true');
            ssoBTSFlagEnabled = true;
        })
        browser.sleep(2000);
    }
    else {
        console.log('Failed to connect to DB');
        expect(true).to.be.false;
    };
    connection.on('error', function (error) {
        console.log(error);
    })
    connection.close().then(function () {
        console.log('Connection has been closed');
    })
})

After({ tags: "@AdminSSO" }, async function () {
    console.log('Post Admin SSO settings');
    await mongoose.connect(connectionUrl, options);
    connection = mongoose.connection;
    connection.on('connected', function () {
        console.log('Connected to Database');
    });
    connection.on('disconnected', function () {
        console.log('MongoDB disconnected!');
    });

    if (connection.readyState == 1) {
        await connection.db.collection('customers').findOneAndUpdate({ 'name': 'BTS' }, { $set: { "ssoConfigAdmin.ssoEnabled": false } }).then(function () {
            console.log('Reset Admin SSO flag to false');
            ssoBTSFlagEnabled = false;
        })
        browser.sleep(2000);
    }
    else {
        console.log('Failed to connect to DB');
        expect(true).to.be.false;
    };
    connection.on('error', function (error) {
        console.log(error);
    })
    connection.close().then(function () {
        console.log('Connection has been closed');
    })
})

Given("the Author App is correctly configured with correct SSO settings", async function () {
    browser.waitForAngularEnabled(false);
    await browser.get("https://bts-dev.onelogin.com/").then(async function () {
        await ssoLocate.oneLoginMenu.isPresent().then(async function (isMenuPresent) {
            if (isMenuPresent) {
                await ssoLocate.oneLoginMenu.click().then(async function () {
                    await browser.sleep(2000);
                    await ssoLocate.oneLoginMenuExpanded.isPresent().then(async function (isMenuExpanded) {
                        if (!isMenuExpanded) {
                            await ssoLocate.oneLoginMenu.click();
                            await browser.sleep(2000);
                        }
                    })
                    await browser.wait(EC.presenceOf(ssoLocate.oneLoginLogoutBtn), 5000).then(async function () {
                        //await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginLogoutBtn), 5000);
                        await ssoLocate.oneLoginLogoutBtn.click();
                    })
                })
            }
        })
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginUserId), 60 * 1000);
    });
    await ssoLocate.oneLoginUserId.clear().then(async function () {
        await ssoLocate.oneLoginUserId.sendKeys('mohit.narang@bts.com');
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginPwd), 60 * 1000);
        //await browser.sleep(5000);
        await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginContinueBtn), 60 * 1000);
    })

    await ssoLocate.oneLoginPwd.clear().then(async function () {
        await ssoLocate.oneLoginPwd.sendKeys('BTS@123456');
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginAdminTab), 60 * 1000);
    })
    //Switching to Admin tab
    let currentWindowHandle: string = await browser.getWindowHandle();
    await ssoLocate.oneLoginAdminTab.click().then(async function () {
        await browser.sleep(30 * 1000);
        await browser.getAllWindowHandles().then(async function (windowhandles) {
            windowhandles.forEach(async function (handle) {
                if (handle != currentWindowHandle) {
                    await browser.switchTo().window(handle).then(async function () {
                        await browser.sleep(5 * 1000);
                        // await browser.getCurrentUrl().then(async function (externalURL) {
                        //     console.log(externalURL);

                        // })
                    })
                }
            })
        });
    });
    await ssoLocate.oneLoginApplicatonsTab.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginAdminApp), 60 * 1000);
        await ssoLocate.oneLoginAdminApp.click().then(async function () {
            await browser.wait(EC.visibilityOf(ssoLocate.clientConfigTab), 60 * 1000);
            await ssoLocate.clientConfigTab.click().then(async function () {
                await browser.wait(EC.visibilityOf(ssoLocate.clientSSOLoginURL), 60 * 1000);
                await browser.wait(EC.elementToBeClickable(ssoLocate.clientSSOLoginURL), 60 * 1000);
                await ssoLocate.clientSSOLoginURL.clear().then(async function () {
                    await ssoLocate.clientSSOLoginURL.sendKeys('https://admintest.btsmomenta.com/#/auth/sso/bts/adminSSO');
                })
                await ssoLocate.clientSSOConsumerURL.clear().then(async function () {
                    await ssoLocate.clientSSOConsumerURL.sendKeys('https://momentaglobaltest.btsmomenta.com/auth/api/v1/basic/consumeSSO');
                })
                await ssoLocate.clientSSOValidatorURL.clear().then(async function () {
                    await ssoLocate.clientSSOValidatorURL.sendKeys('https://momentaglobaltest.btsmomenta.com/auth/api/v1/basic/consumeSSO');
                })
            });
            await ssoLocate.saveConfigBtn.click().then(async function () {
                await browser.sleep(5000);
            })
        })
    });
    await browser.close();
    await browser.switchTo().window(currentWindowHandle).then(async function () {
        await browser.sleep(5000).then(async function () {
            //await browser.executeScript("arguments[0].click()",ssoLocate.oneLoginLogoutBtn);
            await ssoLocate.oneLoginMenu.click().then(async function () {
                await browser.sleep(2000);
                await ssoLocate.oneLoginMenuExpanded.isPresent().then(async function (isMenuExpanded) {
                    if (!isMenuExpanded) {
                        await ssoLocate.oneLoginMenu.click();
                        await browser.sleep(2000);
                    }
                })
                await browser.wait(EC.presenceOf(ssoLocate.oneLoginLogoutBtn), 5000).then(async function () {
                   // await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginLogoutBtn), 5000);
                    await ssoLocate.oneLoginLogoutBtn.click();
                })
            })
        })
    })
    browser.waitForAngularEnabled(true);
})

When("Admin SSO User logs in into One Login App", async function () {
    await browser.get(config.MomentaUserUrl).then(async function () {
        await ssoLocate.authorAppEmail.clear().then(async function () {
            await ssoLocate.authorAppEmail.sendKeys(testData.Sprint17.SSO.AdminSSO.Username).then(async function () {
                await ssoLocate.authorAppNextBtn.click();
            })
        })
    })
    browser.waitForAngularEnabled(false);
    // await browser.get("https://bts-dev.onelogin.com/").then(async function () {
    //     await browser.wait(EC.visibilityOf(ssoLocate.oneLoginUserId), 60 * 1000);
    // });
    await browser.wait(EC.visibilityOf(ssoLocate.oneLoginUserId), 60 * 1000);
    await ssoLocate.oneLoginUserId.clear().then(async function () {
        await ssoLocate.oneLoginUserId.sendKeys(testData.Sprint17.SSO.AdminSSO.Username);
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(ssoLocate.oneLoginPwd), 60 * 1000);
        //await browser.sleep(5000);
        await browser.wait(EC.elementToBeClickable(ssoLocate.oneLoginContinueBtn), 60 * 1000);
    })

    await ssoLocate.oneLoginPwd.clear().then(async function () {
        await ssoLocate.oneLoginPwd.sendKeys(testData.Sprint17.SSO.AdminSSO.Password);
    });
    await ssoLocate.oneLoginContinueBtn.click().then(async function () {
        await browser.sleep(20 * 1000);
        await browser.wait(EC.urlContains('admintest'), 45 * 1000);
    })
    browser.waitForAngularEnabled(true);
})

Then("User should be successfully able to navigate to Author App", async function () {
    //browser.waitForAngularEnabled(false);
    await browser.getCurrentUrl().then(async function (URL) {
        expect(URL).to.contain('admintest.btsmomenta.com');
    });
    await ssoLocate.authorAppMasterTab.isPresent().then(async function (isElementPresent) {
        expect(isElementPresent).to.be.true;
        await ssoLocate.authorAppMasterTab.isDisplayed().then(async function (result) {
            if (result) {
                console.log('Successfully Navigated to Admin App');
            }
            expect(result).to.be.true;
        });
    })

    //browser.waitForAngularEnabled(true);
})