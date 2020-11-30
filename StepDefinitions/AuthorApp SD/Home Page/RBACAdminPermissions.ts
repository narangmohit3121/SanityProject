import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../../config.json"
import chai = require('chai');
import { Alert, WebElement } from "selenium-webdriver";
import { By } from "protractor";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { MasterLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/MasterLandingPage.js";
import { AuthoringCreateCohortPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/AuthoringCreateCohort";
import { async } from "q";
import { exec } from "child_process";
import { CommonLocate } from "../../../PageObjects/Common";
import { protractor } from "protractor/built/ptor";
import { RBACLocate } from "../../../PageObjects/AuthorApp POM/Home Page/RBACAdminPermissions";
let expect = chai.expect;
let EC = protractor.ExpectedConditions;
let rbac = new RBACLocate();

let admloginpage = new LoginPageLocate();
let masterLandingpage = new MasterLandingPageLocate();
let common = new CommonLocate();
let sectionsArray1: Array<string> = [];
let sectionsArray2: Array<string> = ['FOLDERS', 'JOURNEYS', 'CONTENT'];
//let foldersArray1: Array<string> = [];
let foldersArray2: Array<string> = ['Frontline Leader', 'Leader of Leaders', 'Executive Leadership'];
let LnpArray1: Array<string> = [];
//let LNPArray2: Array<string> = ['Frontline Leader', 'Leader of Leaders', 'Executive Leadership'];
let expmanagepermissiontxt: String = "MANAGE PERMISSIONS";
let expcreateusertxt: String = "CREATE USER";
let expaddusertxt: String = "ADD USER";
let expfirstname: String = "First";
let explastname: String = "Last";
let expemailid: String = "Email";
let expfolderpermissionforQAcollection: String = "QA Collection";
let exprolepermissionforcollectionowner: String = "Collection Owner";
let expfolderpermissionforpetronas: string = "petronas";
let exprolepermissionforauthor: string = "Author";
let exprolepermissionforcollectionadmin: string = "Collection Administrator";
let expfolderpermissionforBTS: String = "BTS";
let exprolepermissionforglobalsystemadmin: String = "Global System Administrator";
let exprolepermissionforglobaldeveloper: String = "Global Developer (Production Support)";
let exprolepermissionforjsm: String = "Journey Success Manager";
let expfolderpermissionforleaership: string = "Leadership";
let expfolderpermissionforsales: string = "Sales";
let expfolderpermissionforoilgas: string = "Oil & Gas";
let expfolderpermissionforinnovation: string = "Innovation";





Then('User is able to see Manage Permissions button', async function () {
    await rbac.btnmanagepermissions.isDisplayed().then(async function () {
        await rbac.btnmanagepermissions.getText().then(async function (actmanagepermissiontext) {
            expect(actmanagepermissiontext).to.be.contains(expmanagepermissiontxt);
            await browser.sleep(3000);
        })
    })
});

When('User clicks on Manage Permissions button', async function () {
    await rbac.btnmanagepermissions.isDisplayed().then(async function () {
        await rbac.btnmanagepermissions.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});


Then('User is able to view CREATE USER & ADD USER buttons', async function () {
    await rbac.btncreateuser.isDisplayed().then(async function () {
        await rbac.btncreateuser.getText().then(async function (actcreateusertext) {
            expect(actcreateusertext).to.be.contains(expcreateusertxt);
        })
    })
    await rbac.btnadduser.isDisplayed().then(async function () {
        await rbac.btnadduser.getText().then(async function (actaddusertext) {
            expect(actaddusertext).to.be.contains(expaddusertxt);
            await browser.sleep(3000);
        })
    })
});



When('User can view list of Users', async function () {
    await rbac.txtfirstname.isDisplayed().then(async function () {
        await rbac.txtfirstname.getText().then(async function (actfirstnametext) {
            expect(actfirstnametext).to.be.contains(expfirstname);
        })
    })
    await rbac.txtlastname.isDisplayed().then(async function () {
        await rbac.txtlastname.getText().then(async function (actlastnametext) {
            expect(actlastnametext).to.be.contains(explastname);

        })
    })
    await rbac.txtemailId.isDisplayed().then(async function () {
        await rbac.txtemailId.getText().then(async function (actemailIdtext) {
            expect(actemailIdtext).to.be.contains(expemailid);
            await browser.sleep(3000);
        })
    })
});


// When('User clicks on RBAC user profile', async function () {
//     await rbac.btnrbacuserone.isDisplayed().then(async function () {
//         await rbac.btnrbacuserone.click().then(async function () {
//             await browser.sleep(3000);


//         })

//     })

// });


When('User clicks on ADD NEW PERMISSION', async function () {
    await rbac.btnaddnewpermission.isDisplayed().then(async function () {
        await rbac.btnaddnewpermission.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});


When('User selects value from Collections dropdown as {string}', async function (string) {
    await rbac.collections.isDisplayed().then(async function () {
        //await browser.wait(EC.elementToBeClickable(createteams.drpTeamType))
        await rbac.collections.click();
    })
    let dropdownoption: string = "//option[contains(text(),'" + string + "')]"
    await element(By.xpath(dropdownoption)).click();
    await browser.sleep(2000);
});



When('User selects Collection Owner option from list', async function () {
    await rbac.chkboxcollectionowner.isDisplayed().then(async function () {
        await rbac.chkboxcollectionowner.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});

When('User clicks on SAVE button', async function () {
    await rbac.btnsave.isDisplayed().then(async function () {
        await rbac.btnsave.click().then(async function () {
            await browser.sleep(7000);


        })

    })

});


When('User validates if permission got added for QA collection as Collection owner', async function () {
    await rbac.txtfolderpermissionforQAcollection.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforQAcollection.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforQAcollection);
        })
    })
    await rbac.txtrolepermissionforcollectionowner.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforcollectionowner.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforcollectionowner);

        })
    })

});


When('User clicks on SAVE button from permission landing Page', async function () {
    await rbac.tbnsavepermissionpage.isDisplayed().then(async function () {
        await rbac.tbnsavepermissionpage.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});

When('User selects Author option from list', async function () {
    await rbac.chkboxauthor.isDisplayed().then(async function () {
        await rbac.chkboxauthor.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});

When('User switched to Client tab under Permission page', async function () {
    await rbac.tabclientpermissionpage.isDisplayed().then(async function () {
        await rbac.tabclientpermissionpage.click().then(async function () {
            await browser.sleep(5000);


        })

    })

});


When('User validates if permission got added for Petronas as Author', async function () {
    await rbac.txtfolderpermissionforPetronas.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforPetronas.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforpetronas);
        })
    })
    await rbac.txtrolepermissionforauthor.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforauthor.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforauthor);

        })
    })

});


When('User selects Collection Administrator option from list', async function () {
    await rbac.chkboxcollectionadmin.isDisplayed().then(async function () {
        await rbac.chkboxcollectionadmin.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});



When('User validates if permission got added for Petronas as Collection Administrator', async function () {
    await rbac.txtfolderpermissionforPetronas.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforPetronas.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforpetronas);
        })
    })
    await rbac.txtrolepermissionforcollectionadmin.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforcollectionadmin.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforcollectionadmin);

        })
    })

});

When('User should click on {string} client', async function (string) {

    await rbac.txtClientSearch.sendKeys(string).then(async function () {
        let clientoption: string = "//span[@class='search-bar-title'][contains(text(),'" + string + "')]"
        await element(By.xpath(clientoption)).isDisplayed().then(async function () {
            await element(By.xpath(clientoption)).click().then(async function () {
                await browser.sleep(6000);
            })
        })
    })
});


When('User should click on {string} master collection', async function (string) {

    await rbac.tabmastercollection.click().then(async function () {
    await rbac.txtClientSearch.sendKeys(string).then(async function () {
        let clientoption: string = "//span[@class='search-bar-title'][contains(text(),'" + string + "')]"
        await element(By.xpath(clientoption)).isDisplayed().then(async function () {
            await element(By.xpath(clientoption)).click().then(async function () {
                await browser.sleep(6000);
            })
        })
    })
})
});


When('User clicks on {string} journey under journey list', async function (string) {
    await rbac.txtjourneySearch.sendKeys(string).then(async function () {
        let journeyoption: string = "//span[contains(text(),'" + string + "')]"
        await element(By.xpath(journeyoption)).isDisplayed().then(async function () {
            await element(By.xpath(journeyoption)).click().then(async function () {
                await browser.sleep(3000);


            })

        })
    })

});



When('User clicks on {string} cohort under cohort list', async function (string) {
    let cohortoption: string = "//button[@name='Cohort Title'][contains(text(),'" + string + "')]"
    await element(By.xpath(cohortoption)).isDisplayed().then(async function () {
        await element(By.xpath(cohortoption)).click().then(async function () {
            await browser.sleep(3000);


        })

    })

});





When('User clicks on {string} user profile', async function (string) {
    let searchbar: string = "//input[@name='Search Users']"
    await element(By.xpath(searchbar)).isDisplayed().then(async function () {
        await element(By.xpath(searchbar)).sendKeys(string).then(async function () {
            await browser.sleep(3000);
        })
    })

    let useroption: string = "//button[contains(text(),'" + string + "')]"
    await element(By.xpath(useroption)).isDisplayed().then(async function () {
        await element(By.xpath(useroption)).click().then(async function () {
            await browser.sleep(3000);


        })

    })

});



When('User clicks on Admin Permission Tab', async function () {
    await rbac.tabadminpermissions.isDisplayed().then(async function () {
        await rbac.tabadminpermissions.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});


When('User selects Global System Admin checkbox', async function () {
    await rbac.chkboxglobalsystemadmin.isDisplayed().then(async function () {
        await rbac.chkboxglobalsystemadmin.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});


When('User validates if permission got added for BTS as Global System Admin', async function () {
    await rbac.txtfolderpermissionforBTS.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforBTS.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforBTS);
        })
    })
    await rbac.txtrolepermissionforglobalsystemadmin.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforglobalsystemadmin.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforglobalsystemadmin);

        })
    })

});



When('User selects Global developer checkbox', async function () {
    await rbac.chkboxglobaldeveloper.isDisplayed().then(async function () {
        await rbac.chkboxglobaldeveloper.click().then(async function () {
            await browser.sleep(3000);


        })

    })

});


When('User validates if permission got added for BTS as Global developer', async function () {
    await rbac.txtfolderpermissionforBTS.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforBTS.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforBTS);
        })
    })
    await rbac.txtrolepermissionforglobaldeveloper.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforglobaldeveloper.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforglobaldeveloper);

        })
    })

});


When('User selects Journey Success Manager checkbox', async function () {
    await rbac.chkboxjsm.isDisplayed().then(async function () {
        await rbac.chkboxjsm.click().then(async function () {
            await browser.sleep(5000);


        })

    })

});


When('User validates if permission got added for Petronas as JSM', async function () {
    await rbac.txtfolderpermissionforPetronas.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforPetronas.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforpetronas);
        })
    })
    await rbac.txtrolepermissionforjsm.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforjsm.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforjsm);

        })
    })

});


Then('User is able to view ADD USER buttons after landing on permission page of Petronas and BTS', async function () {

    await rbac.btnadduser.isDisplayed().then(async function () {
        await rbac.btnadduser.getText().then(async function (actaddusertext) {
            expect(actaddusertext).to.be.contains(expaddusertxt);
            await browser.sleep(3000);
        })
    })
});



When('User validates if permission got added for multiple master level permissions', async function () {
    await rbac.txtfolderpermissionforQAcollection.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforQAcollection.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforQAcollection);
        })
    })
    await rbac.txtrolepermissionforcollectionowner.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforcollectionowner.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforcollectionowner);

        })
    })
    await browser.sleep(3000);

    await rbac.txtfolderpermissionforleadership.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforleadership.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforleaership);
        })
    })
    await rbac.txtrolepermissionforauthor.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforauthor.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforauthor);

        })
    })

    await browser.sleep(3000);
    await rbac.txtfolderpermissionforsales.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforsales.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforsales);
        })
    })
    await rbac.txtrolepermissionforcollectionadmin.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforcollectionadmin.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforcollectionadmin);

        })
    })

    await browser.sleep(3000);
    await rbac.txtfolderpermissionforoilgas.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforoilgas.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforoilgas);
        })
    })
    await rbac.txtrolepermissionforjsm.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforjsm.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforjsm);

        })
    })

    await browser.sleep(3000);
    await rbac.txtfolderpermissionforinnovation.isDisplayed().then(async function () {
        await rbac.txtfolderpermissionforinnovation.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforinnovation);
        })
    })
    await rbac.txtrolepermissionforcollectionowner.isDisplayed().then(async function () {
        await rbac.txtrolepermissionforcollectionowner.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforcollectionowner);

        })
    })


});

When('User deletes the added permission', async function () {
    await rbac.deletepermission.isDisplayed().then(async function () {
        await rbac.deletepermission.click().then(async function () {
            await browser.sleep(5000);


        })

    })

    await rbac.btndelete.isDisplayed().then(async function () {
        await rbac.btndelete.click().then(async function () {
            await browser.sleep(5000);


        })

    })


});


When('User lands on Client Landing Page', async function () {
    await rbac.btnclientlanding.isDisplayed().then(async function () {
        await rbac.btnclientlanding.click().then(async function () {
            await browser.sleep(5000);


        })

    })

});