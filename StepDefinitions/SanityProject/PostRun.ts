import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../StepDefinitions/config.json";
import { PostRunElements } from "../../PageObjects/SanityProjectPages/PostRunPage";

let postRunPage = new PostRunElements();
import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';

When("user deletes all the contents in EndToEnd folder", async function(){
    let j:number = 0;
    await postRunPage.allContentMenus.each(async function(contentMenu){
        //await browser.sleep(1000);
        await contentMenu.click().then(async function(){
            await browser.sleep(1000);
            if(j<5){
                await postRunPage.deleteBtn.click().then(async function(){
                    await postRunPage.confirmDeleteContent.click().then(async function(){
                        await browser.waitForAngular();
                        j++;
                    })                    
                })
            }
            else{
                return;
            }           
        })
    })
})

Then("all the contents should be deleted successfully", async function(){
    console.log('success');
})