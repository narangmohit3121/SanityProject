//span[contains(text(),' RBAC Folder Permission Automation DND ')]/../..//..//div[@class='mat-checkbox-inner-container']

import { When } from "cucumber";
import { browser, By, element } from "protractor";
import { protractor } from "protractor/built/ptor";
import { MasterLandingPageLocate } from "../../../PageObjects/AuthorApp POM/Home Page/MasterLandingPage.js";
import { RBACLocate } from "../../../PageObjects/AuthorApp POM/Home Page/RBACAdminPermissions";
import { RBACFolderPermissionLocate } from "../../../PageObjects/AuthorApp POM/Home Page/RBACFolderPermission";
import { LoginPageLocate } from "../../../PageObjects/AuthorApp POM/Login/LoginPage";
import { CommonLocate } from "../../../PageObjects/Common";

import chai = require('chai');
let expect = chai.expect;
let EC = protractor.ExpectedConditions;
let rbac = new RBACLocate();
let rbacfolder = new RBACFolderPermissionLocate();

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
let expfolderpermissionforpetronasforrbacmainfolder: String = "petronas > RBAC Folder Permission Automation DND";
let expfolderpermissionforqacollectionforrbacmainfolder: String = "QA Collection > RBAC Folder Permission QA collection";
let expcreatecohorttext: String = "CREATE COHORT";
let expfolderpermissionforleaership: string = "Leadership";
let expfolderpermissionforsales: string = "Sales";
let expfolderpermissionforoilgas: string = "Oil & Gas";
let expfolderpermissionforinnovation: string = "Innovation";


When('User selects {string} folder from given folder list', async function (string) {
    let folderoption: string = "//span[contains(text(),'" + string + "')]/../..//..//div[@class='mat-checkbox-inner-container']"
    await element(By.xpath(folderoption)).isDisplayed().then(async function () {
        await element(By.xpath(folderoption)).click().then(async function () {
            await browser.sleep(3000);


        })

    })

});


When('User validates if permission got added for Petronas as JSM for RBAC Folder Permission', async function () {
    await rbacfolder.txtfolderpermissionforPetronaswithrbacfolder.isDisplayed().then(async function () {
        await rbacfolder.txtfolderpermissionforPetronaswithrbacfolder.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforpetronasforrbacmainfolder);
        })
    })
    await rbacfolder.txtrolepermissionforjsm.isDisplayed().then(async function () {
        await rbacfolder.txtrolepermissionforjsm.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforjsm);

        })
    })

});


When('User validates JSM permissions along with Folder permissions for Petronas', async function () {

    await rbacfolder.btnmanagepermissions.isPresent().then(async function (actvisibility) {
        expect(actvisibility).to.be.true;
    })
    await rbacfolder.btnconfigureclient.isPresent().then(async function (actvisibility) {
        expect(actvisibility).to.be.true;

    })


    await rbacfolder.iconplus.count().then(async function (countofele) {
        console.log(countofele);
        expect(countofele).to.equal(0);
    })
});


When('User validates JSM permissions along with Folder permissions for QA collection', async function () {


    await rbacfolder.btnconfigureclient.isPresent().then(async function (actvisibility) {
        expect(actvisibility).to.be.true;

    })


    await rbacfolder.iconplus.count().then(async function (countofele) {
        console.log(countofele);
        expect(countofele).to.equal(0);
    })
});


When('User clicks on {string} folder', async function (string) {
    let folderoption: string = "//p[contains(text(),'" + string + "')]"
    await element(By.xpath(folderoption)).isDisplayed().then(async function () {
        await element(By.xpath(folderoption)).click().then(async function () {
            await browser.sleep(3000);


        })

    })

});

When('User validates if Create Cohort button is visible', async function () {
    await rbacfolder.btncreatecohort.isDisplayed().then(async function () {
        await rbacfolder.btncreatecohort.getText().then(async function (acttext) {
            expect(acttext).to.be.contains(expcreatecohorttext);
        })
    })
});


When('User validates if permission got added for QA Collection as JSM for RBAC Folder Permission', async function () {
    await rbacfolder.txtfolderpermissionforqacollectionwithfolder.isDisplayed().then(async function () {
        await rbacfolder.txtfolderpermissionforqacollectionwithfolder.getText().then(async function (actfolderpermissiontext) {
            expect(actfolderpermissiontext).to.be.contains(expfolderpermissionforqacollectionforrbacmainfolder);
        })
    })
    await rbacfolder.txtrolepermissionforjsm.isDisplayed().then(async function () {
        await rbacfolder.txtrolepermissionforjsm.getText().then(async function (actrolepermissiontext) {
            expect(actrolepermissiontext).to.be.contains(exprolepermissionforjsm);

        })
    })

});

