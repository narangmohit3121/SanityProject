// import { Given, When, Then,    } from "cucumber";
// import { calculator } from "../pageObjects/calculator";
// import { browser, element, by } from "protractor";
// import { angularHomePage } from "../pageObjects/angularHomePage";

// import config from "./config.json";


// import chai from "chai"; 
// var expect = chai.expect;



// let calc = new calculator();
// let ah = new angularHomePage();

// Given('I will navigate to {string} page', async (string)=> {
//   // Write code here that turns the phrase above into concrete actions
// if(string=="Calc")
// {
//   await browser.get(config.cal); 
// }
// else if (string=="AngularJs")
// {
//   await browser.get(config.angular);
// }

// });

// When('I clicked on header link', async () =>{
//   // Write code here that turns the phrase above into concrete actions
//   await ah.angularLink.click();
// });

// When('you will navigate to angular page', async () =>{
//   // Write code here that turns the phrase above into concrete actions
//   console.log("navigated to new page");
// });

// Then('you will enter {string} in search box', async (string) =>{
//   // Write code here that turns the phrase above into concrete actions
//   await browser.sleep(3000);

//         await ah.search.sendKeys(string);
// });
    
//   When('I add two numbers {string} and {string}', async (string, string2) =>{
//     // Write code here that turns the phrase above into concrete actions
    
//         await calc.firstEditBox.sendKeys(string);
//         await calc.secondEditBox.sendKeys(string2);
//         browser.sleep(3000);
//   });
  
//   Then('the output displayed should be {string}', async (string) =>{
//     // Write code here that turns the phrase above into concrete actions
//     await calc.go.click();
//    await calc.getResult.getText().then(function (text) {
        
//         expect(text).to.equal(string);
//    })
//   });

  