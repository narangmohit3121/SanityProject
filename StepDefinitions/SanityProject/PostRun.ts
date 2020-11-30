import { Given, Then, When, After } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../StepDefinitions/config.json";
import { PostRunElements } from "../../PageObjects/SanityProjectPages/PostRunPage";

let postRunPage = new PostRunElements();
import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';

import mongoose from "mongoose";
import { Console } from "console";
import { emailNewSanityUserOne } from "./JourneySanity";
let connectionURL: string = "mongodb://root:password@momentaregioneuropetest.btspulse.com:27017/petronas?authSource=admin";
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
let connection: mongoose.Connection = null;


async function deleteAllContents(): Promise<void> {
    let j: number = 0;
    let countOfContents: number = await postRunPage.allContentMenus.count();
    while (countOfContents > 0) {
        await postRunPage.firstContentMenu.click().then(async function () {
            //await browser.sleep(1000);
            // await contentMenu.click().then(async function(){

            // }) 
            await browser.sleep(1000);
            await postRunPage.deleteBtn.click().then(async function () {
                await browser.wait(EC.visibilityOf(postRunPage.confirmDeleteContent), 10 * 1000);
                await postRunPage.confirmDeleteContent.click();
                await browser.sleep(2.5*1000);
            })
        })
        countOfContents = await postRunPage.allContentMenus.count();
        console.log(countOfContents);
    }

}
When("user deletes all the contents in EndToEnd folder", async function () {
    try {
        await deleteAllContents();
    }
    catch (e) {
        await deleteAllContents();
    }
})

Then("all the contents should be deleted successfully", async function () {
    let countOfContents: number = await postRunPage.allContentMenus.count();
    expect(countOfContents, "All Contents created during Sanity test not deleted. Please Delete Manually").to.equal(0);
})

//DELETE USER CREATED FOR SANITY, will run after the scenario tagged @DeleteAllContents
After({ tags: "@DeleteAllContents" }, async function () {
    await mongoose.connect(connectionURL, options);
    connection = mongoose.connection;

    connection.on("connected", function () {
        console.log('Connected to Petronas DB')
    })

    connection.on("disconnected", function () {
        console.log('disconnected from Petronas DB')
    })
    connection.on('error', function (error) {
        console.log(error);
    })
    //console.log(emailNewSanityUser);

    if (connection.readyState == 1) {
        await connection.db.collection("users").findOneAndDelete({ 'email': emailNewSanityUserOne }).then(async function () {
            console.log('Deleted Sanity User', emailNewSanityUserOne);
        })
    }
    else {
        console.log('Unable to establish connection with petronas DB - Sanity User not deleted. Please delete it manually');
    }

    connection.close().then(function () {
        console.log('DB Connection has been closed');
    })
})

When("user deletes all the Media Objects created during the sanity test", async function () {
    try {
        await deleteAllContents();
    }
    catch (e) {
        await deleteAllContents();
    }
})

Then("all the Media Objects should get deleted successfully", async function () {
    let countOfContents: number = await postRunPage.allContentMenus.count();
    expect(countOfContents, "All Media Objects created during Sanity test not deleted. Please Delete Manually").to.equal(0);
})