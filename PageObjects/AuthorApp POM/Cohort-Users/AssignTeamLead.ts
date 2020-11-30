import { ElementFinder, element } from "protractor";
import {Workbook, Row, Cell, Worksheet} from "exceljs"
import { By } from "selenium-webdriver";

export class AssignTeamLeadPage{

    chkSelectAll:ElementFinder;
    drpActions:ElementFinder;
    optAddToTeams:ElementFinder;
    inputNoOfTeams:ElementFinder;
    inputNoOfPeople:ElementFinder;
    optTeams:ElementFinder;
    inputAddTeams:ElementFinder;
    inputAddTeamLead:ElementFinder;
    optTeamLeads:ElementFinder;
    btnSaveAddUsers:ElementFinder;
    btnContinueImport:ElementFinder;

    teamLeadEmail:ElementFinder;
    teamName:ElementFinder;
    rdbtnTeamLead:ElementFinder;
    btnSaveEditTeam:ElementFinder;

    userEmail1: string;
    userEmail2: string;
    userEmail3: string;
    userEmail4: string;

    async bulkUpload(emailid: string, domain: string, excelPath: string): Promise<void> {
         //var userEmail1 = emailid + Math.floor(Math.random()*100000) + domain;
        // var userEmail2 = emailid + Math.floor(Math.random()*100000) + domain;
        // var userEmail3 = emailid + Math.floor(Math.random()*100000) + domain;
        // var userEmail4 = emailid + Math.floor(Math.random()*100000) + domain;
        this.userEmail1 = emailid + Math.floor(Math.random()*100000) + domain;
        this.userEmail2 = emailid + Math.floor(Math.random()*100000) + domain;
        this.userEmail3 = emailid + Math.floor(Math.random()*100000) + domain;
        this.userEmail4 = emailid + Math.floor(Math.random()*100000) + domain;

        var wb = new Workbook();

        wb.xlsx.readFile(excelPath).then(async function(){
        let sheet:Worksheet = wb.getWorksheet("Data");

        // sheet.getRow(2).getCell(3).value = userEmail1;
        // sheet.getRow(3).getCell(3).value = userEmail2;
        // sheet.getRow(4).getCell(3).value = userEmail3;
        // sheet.getRow(5).getCell(3).value = userEmail4;

        sheet.getRow(2).getCell(3).value = this.userEmail1;
        sheet.getRow(3).getCell(3).value = this.userEmail2;
        sheet.getRow(4).getCell(3).value = this.userEmail3;
        sheet.getRow(5).getCell(3).value = this.userEmail4;

        wb.xlsx.writeFile(excelPath);
        })
        
    }
    
    constructor(){
        
        //this.chkSelectAll=element(By.xpath("(//div[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])//following::input[@aria-label='deselect all']"));
        this.chkSelectAll=element(By.xpath("(//div[contains(text(),' Select All ')]//following::div[@class='mat-checkbox-frame'])[1]"));
        this.drpActions=element(By.xpath("//select[@ng-reflect-model='Actions']"));
        this.optAddToTeams=element(By.xpath("//option[@ng-reflect-value='addtoteams']"));
        this.inputNoOfTeams=element(By.xpath("//input[@aria-label='Default Number of Teams']"));
        this.inputNoOfPeople=element(By.xpath("//input[@aria-label='Default Maximum Number of People']"));
        
        this.optTeams=element(By.xpath("//span[contains(text(),' TeamSpirit1 ')]"));

        this.inputAddTeams=element(By.xpath("(//label[contains(text(),'TeamSpirit')]//following::input[@aria-label='Add to teams'])[1]"));

        this.inputAddTeamLead=element(By.xpath("//input[@aria-label='Add Team lead']"));

        this.optTeamLeads=element(By.xpath("//span[contains(text(),'teamleadsuser6@petronas.com')]"));
    
        this.btnSaveAddUsers=element(By.xpath("//button[@name='Save']"));
        this.btnContinueImport=element(By.xpath("//button[@name='Continue']"));
        this.teamLeadEmail=element(By.xpath("//td[contains(text(),'teamleadsuser7@petronas.com')]"));

        this.teamName=element(By.xpath("//button[@name='TeamSpirit3']"));

        this.rdbtnTeamLead=element(By.xpath("(//div[@class='mat-radio-outer-circle'])[1]//following::span[contains(text(),' teamleadsuser8@petronas.com ')]//preceding::div[@class='mat-radio-outer-circle'][1]"));
        this.btnSaveEditTeam=element(By.xpath("(//button[@name='Save'])[2]"));
    }
}