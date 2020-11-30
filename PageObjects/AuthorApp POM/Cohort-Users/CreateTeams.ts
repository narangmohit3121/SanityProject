import { ElementFinder, element, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";

export class CreateTeamsPageLocate{

    fldCohortUsers:ElementFinder;
    jrnAutomationCreateTeams:ElementFinder;
    lnkJourneyConfig:ElementFinder;
    tabTeamTypeConfig:ElementFinder;
    btnAddTeamType:ElementFinder;
    txtTeamTitle:ElementFinder;
    btnCohortSetting:ElementFinder;
    tabTeamsCohortSetting:ElementFinder;
    minusCountTeams:ElementFinder;
    plusCountTeams:ElementFinder;
    minusCountPeople:ElementFinder;
    plusCountPeople:ElementFinder;
    btnCreateAddTeamType:ElementFinder;
    drpTeamType:ElementFinder;
    btnDeleteTeam1:ElementFinder;
    btnDeleteTeam2:ElementFinder;
    btnDeleteTeam3:ElementFinder;
    btnYesDeleteTeam:ElementFinder;
    teamsTitles:ElementArrayFinder;
    btnDelete:ElementArrayFinder;

    drpvaluesRealMadrid:ElementArrayFinder;
    drpvaluesXIChampion:ElementArrayFinder;
    drpvaluesXSuperKings:ElementArrayFinder;

    realMadridTeamTitle:ElementFinder;
    xiChampionTeamTitle:ElementFinder;
    xSuperKingsTeamTitle:ElementFinder;
    btnCancelChrtSetting:ElementFinder;

    constructor(){

        this.fldCohortUsers=element(By.xpath("//p[contains(text(),'Cohort-Users')]"));
        this.jrnAutomationCreateTeams=element(By.xpath("//p[contains(text(),'Automation Create Teams')]"));
        this.lnkJourneyConfig=element(By.xpath("//div[contains(text(),'Journey Configuration')]"));
        this.tabTeamTypeConfig=element(By.xpath("//div[contains(text(),'Team Type Configuration')]"));
        this.btnAddTeamType=element(By.xpath("//button[contains(text(),' Add Team Type ')]"));
        this.txtTeamTitle=element(By.xpath("//input[@placeholder='Enter Team Title here']"));
        this.btnCohortSetting=element(By.xpath("//button[@name='Cohort Setting'][1]"));
        this.tabTeamsCohortSetting=element(By.xpath("//div[@role='tab']//div[contains(text(),'Teams')]"));
        this.minusCountTeams=element(By.xpath("//mat-label[contains(text(),' Default number of teams')]//following::span[@class='modal-common__count-icon'][1]"));
        this.plusCountTeams=element(By.xpath("//mat-label[contains(text(),' Default number of teams')]//following::span[@class='modal-common__count-icon'][2]"));
        this.minusCountPeople=element(By.xpath("//mat-label[contains(text(),'Default maximum number of people')]//following::span[@class='modal-common__count-icon'][1]"));
        this.plusCountPeople=element(By.xpath("//mat-label[contains(text(),'Default maximum number of people')]//following::span[@class='modal-common__count-icon'][2]"));
        this.btnCreateAddTeamType=element(By.xpath("//button[contains(text(),'Create')]"));
        this.drpTeamType=element(By.xpath("//select[@name='teamType']"));
        this.btnDeleteTeam1=element(By.xpath("(//div[@class='theme-row-title'])[contains(text(),'Real Madrid')]//following::button[@name='delete team'][1]"));
        this.btnDeleteTeam2=element(By.xpath("(//div[@class='theme-row-title'])[contains(text(),'XI Champion')]//following::button[@name='delete team'][1]"));
        this.btnDeleteTeam3=element(By.xpath("(//div[@class='theme-row-title'])[contains(text(),'XSuperKings')]//following::button[@name='delete team'][1]"));
        this.btnYesDeleteTeam=element(By.xpath("//button[contains(text(),'Yes')]"));
        this.teamsTitles=element.all(By.xpath("//table[@class='teams__table']"));

        this.btnDelete=element.all(By.xpath("//i[@class='author-icon icon-delete']"));

        this.realMadridTeamTitle=element(By.xpath("//th[contains(text(),'Real Madrid teams')]"));
        this.xiChampionTeamTitle=element(By.xpath("//th[contains(text(),'XI Champion teams')]"));
        this.xSuperKingsTeamTitle=element(By.xpath("//th[contains(text(),'XSuperKings teams')]"));
        this.btnCancelChrtSetting=element(By.xpath("//button[@name='Cancel']"));

        this.drpvaluesRealMadrid=element.all(By.xpath("//option[@class='ng-star-inserted'][contains(text(),'Real Madrid')]"));
        this.drpvaluesXIChampion=element.all(By.xpath("//option[@class='ng-star-inserted'][contains(text(),'XI Champion')]"));
        this.drpvaluesXSuperKings=element.all(By.xpath("//option[@class='ng-star-inserted'][contains(text(),'XSuperKings')]"));
    }
}