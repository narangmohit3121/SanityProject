import { ElementFinder, By, element, browser, ExpectedConditions } from "protractor";
let EC = ExpectedConditions

export class UserCreation {
    adminEmail: ElementFinder;
    adminNextButton: ElementFinder;
    adminPassword: ElementFinder;
    adminLoginButton: ElementFinder;
    adminSearchbox: ElementFinder;
    adminUsersTab: ElementFinder;
    adminClientTab: ElementFinder;
    adminCollectionSearch: ElementFinder;
    cohortOfTestUnverified: ElementFinder;
    createUserButton:ElementFinder;
    createUserFirstName:ElementFinder;
    createUserLastName:ElementFinder;
    createUserEmail:ElementFinder;
    generatedPassword:ElementFinder;
    createButton:ElementFinder;
    succesMessage:ElementFinder;




constructor() {
    this.adminEmail = element(By.xpath('//input[@placeholder="Email"]'))
    this.adminNextButton = element(By.name('next'))
    this.adminPassword = element(By.xpath('//input[@type="password"]'))
    this.adminLoginButton = element(By.name('login'))
    this.adminSearchbox = element(By.xpath('//input[@type="text"]'))
    this.adminClientTab = element(By.xpath('//div[contains(text(),"Client")]'))
    this.adminUsersTab = element(By.xpath('//div[contains(text(),"Users")]'))
    this.adminCollectionSearch = element(By.xpath('//input[@placeholder="Filter Journeys"]'))
    this.cohortOfTestUnverified = element(By.xpath('//td[contains(text()," Practice Cohort ")]'))
    this.createUserButton = element(By.name('Create User'))
    this.createUserFirstName=element(By.xpath('//input[@placeholder="First Name"]'))
    this.createUserLastName=element(By.xpath('//input[@placeholder="Last Name"]'))
    this.createUserEmail=element(By.xpath('//input[@placeholder="Email"]'))
    this.generatedPassword=element(By.xpath('//button[contains(text(),"Generate ")]'))
    this.createButton=element(By.xpath('//button[contains(text(),"CREATE")]'))
    this.succesMessage=element(By.xpath('//div[contains(text()," User creation successful")]'))

    // this.cohortUnverifiedEmail = element(By.xpath('//td[contains(text(),"tushartest2@mailinator.com")]/preceding-sibling::td[contains(text(),"Test")]'))
}
}