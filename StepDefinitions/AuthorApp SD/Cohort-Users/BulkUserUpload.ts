import{When,Then} from "cucumber";
import chai = require('chai');
import {Workbook, Row, Cell, Worksheet} from "exceljs"
import { join } from "path";
var expect = chai.expect;
let path = require("path");
//var Excel = require('xlsx');
// var workbook = Excel.readFile('D:/Bulk Upload/auto1_bulk-upload-template.xlsx');
// var worksheet = workbook.Sheets['Sheet2'];
import { BulkUserPageLocate } from "../../../PageObjects/AuthorApp POM/Cohort-Users/BulkUserUploadPage";
import { browser } from "protractor";
let exptxtSuccess = 'Great, all looks good! Continue on.';
let bulkuserupload = new BulkUserPageLocate();

//process.cwd
let excelPath: string = join(process.cwd(), 'TestData', 'bulkUploadFILE.xlsx');
//process.cwd

// var userEmail1 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";
// var userEmail2 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";
// var userEmail3 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";
// var userEmail4 = "bulkuserupload" + Math.floor(Math.random()*100000) + "@nestle.com";

// var wb = new Workbook();

// wb.xlsx.readFile("D:\\Automation\\momentafunctionalautomation\\TestData\\bulkUploadFILE.xlsx").then(async function(){
//   let sheet:Worksheet = wb.getWorksheet("Data");

//   sheet.getRow(2).getCell(3).value = userEmail1;
//   sheet.getRow(3).getCell(3).value = userEmail2;
//   sheet.getRow(4).getCell(3).value = userEmail3;
//   sheet.getRow(5).getCell(3).value = userEmail4;

//   wb.xlsx.writeFile("D:\\Automation\\momentafunctionalautomation\\TestData\\bulkUploadFILE.xlsx");
// })

When('User click on Bulk Upload Auto Jrn', async function () {
    await bulkuserupload.jrnBulkUpload.isDisplayed().then(async function(){
        await bulkuserupload.jrnBulkUpload.click();
    })
  });

  When('User click on Import button for Bulk Upload', async function () {
    await bulkuserupload.btnImport.isDisplayed().then(async function(){
        await bulkuserupload.btnImport.click();
    })
  });

  When('User upload bulk upload file click on Upload', async function () {
  //When('User upload bulk upload file as {string} and click on Upload', async function (string) {
    // await bulkuserupload.txtBrowserFile.isDisplayed().then(async function(){
    //     await bulkuserupload.txtBrowserFile.sendKeys(string).then(async function(){
    //       await browser.sleep(3000);
    //     })
    // })
    let filePath1 = "D:/Bulk Upload/auto1_bulk-upload-template.xlsx";
    let fpath = path.resolve("D:",filePath1);
    await bulkuserupload.txtBrowserFile.isDisplayed().then(async function(){
      await bulkuserupload.txtBrowserFile.sendKeys(fpath).then(async function(){
        await browser.sleep(3000);
      })
    })
    await bulkuserupload.btnUpload.isDisplayed().then(async function(){
        await bulkuserupload.btnUpload.click().then(async function(){
          await browser.sleep(3000);
        });
    })
  });

  //Replica

//   When('User upload bulk upload file as {string} and click on Upload', async function (filePath1) {
    
//       let fpath = path.resolve("D:",filePath1);
//       await bulkuserupload.txtBrowserFile.isDisplayed().then(async function(){
//         await bulkuserupload.txtBrowserFile.sendKeys(fpath).then(async function(){
//           await browser.sleep(3000);
//         })
//       })
//       await bulkuserupload.btnUpload.isDisplayed().then(async function(){
//           await bulkuserupload.btnUpload.click().then(async function(){
//             await browser.sleep(3000);
//           });
//       })
//     });

    //Replica

    When('User upload bulk upload file as {string} and click on Upload', async function (fileName) {
    
        let excelPath: string = join(process.cwd(), 'TestData', fileName);

        let fpath = path.resolve("D:",excelPath);
        await bulkuserupload.txtBrowserFile.isDisplayed().then(async function(){
          await bulkuserupload.txtBrowserFile.sendKeys(fpath).then(async function(){
            await browser.sleep(3000);
          })
        })
        await bulkuserupload.btnUpload.isDisplayed().then(async function(){
            await bulkuserupload.btnUpload.click().then(async function(){
              await browser.sleep(3000);
            });
        })
      });



  When('User upload bulk upload file two click on Upload', async function () {
      let filePath2 = "D:/Bulk Upload/auto2_bulk-upload-template.xlsx";
      let fpath = path.resolve("D:",filePath2);
      await bulkuserupload.txtBrowserFile.isDisplayed().then(async function(){
        await bulkuserupload.txtBrowserFile.sendKeys(fpath).then(async function(){
          await browser.sleep(3000);
        })
      })
      await bulkuserupload.btnUpload.isDisplayed().then(async function(){
          await bulkuserupload.btnUpload.click().then(async function(){
            await browser.sleep(3000);
          });
      })
    });

    When('User upload bulk upload file three click on Upload', async function () {
      let filePath3 = "D:/Bulk Upload/auto3_bulk-upload-template.xlsx";
      let fpath = path.resolve("D:",filePath3);
      await bulkuserupload.txtBrowserFile.isDisplayed().then(async function(){
        await bulkuserupload.txtBrowserFile.sendKeys(fpath).then(async function(){
          await browser.sleep(3000);
        })
      })
      await bulkuserupload.btnUpload.isDisplayed().then(async function(){
          await bulkuserupload.btnUpload.click().then(async function(){
            await browser.sleep(3000);
          });
      })
    });


  Then('User validates success message', async function () {
    await browser.sleep(2000).then(async function(){
      await bulkuserupload.msgImportSucess.isDisplayed().then(async function(){
        await bulkuserupload.msgImportSucess.getText().then(async function(acttxtSuccess){
            expect(acttxtSuccess).to.be.eql(exptxtSuccess);
        })
      })
    })
  });

  When('User checks Randomize in to multiple cohort', async function () {
    await bulkuserupload.chkboxRandomize.isDisplayed().then(async function(){
        await bulkuserupload.chkboxRandomize.click();
    })
  });

  When('User click on Bulk Upload Auto Cohort', async function () {
    await bulkuserupload.chrtBulkUpload.isDisplayed().then(async function(){
      await bulkuserupload.chrtBulkUpload.click();
    })
  });


  