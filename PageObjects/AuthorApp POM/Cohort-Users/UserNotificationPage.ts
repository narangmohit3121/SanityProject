import { ElementFinder, element, by, browser } from "protractor";


export class notificationPage {

  public users: ElementFinder;
  public journey: ElementFinder;
  public cohort: ElementFinder;
  public createUser: ElementFinder;
  public userAdded: ElementFinder;
  public createBtn: ElementFinder;
  public firstName: ElementFinder;
  public lastName: ElementFinder;
  public email: ElementFinder;
  public password: ElementFinder;
  public msgAdd: ElementFinder;
  public msgTextbox: ElementFinder;
  public msgCancel: ElementFinder;
  public msgSave: ElementFinder;
  public editIcon: ElementFinder;
  public notificationTab:ElementFinder;
  public selectDateTime:ElementFinder;
  public arrowAddMinute:ElementFinder;
  public btnSetDateTime:ElementFinder;
  public content:ElementFinder;
  public actions: ElementFinder;
  


  constructor() {
    this.users = element(by.xpath('//div[contains(text(),"Cohorts/Users")]'));
    this.journey = element(by.xpath('//span[contains(text(),"Notification Journey")]'));
    this.cohort = element(by.xpath('//button[@name="Cohort Title"]'));
    this.createUser = element(by.xpath('//button[@aria-label="Create User"]'));
    this.userAdded = element(by.xpath('//td[contains(text(),"bts")]'));
    this.createBtn = element(by.xpath('//button[contains(text(),"CREATE")]'));
    this.firstName = element(by.xpath('//input[@placeholder="First Name"]'));
    this.lastName = element(by.xpath('//input[@placeholder="Last Name"]'));
    this.email = element(by.xpath('//input[@placeholder="Email"]'));
    this.password = element(by.xpath('//input[@placeholder="Password"]'));
    this.msgAdd = element(by.xpath('//span[@class="author-icon icon-plus"]'));
    this.msgTextbox = element(by.xpath('//div[@class="fr-element fr-view"]//p'));
    this.msgCancel = element(by.xpath('//div[@class="block-submit"]//button[@name="Cancel"][contains(text(),"CANCEL")]'));
    this.msgSave = element(by.xpath('//button[contains(text(),"SAVE")]'));
    this.editIcon = element(by.xpath('//p[contains(text(),"Test Notification Title1")]/parent::div//a[@href="javascript:;"]'));
    this.notificationTab = element(by.xpath('//div[contains(text(),"Notifications")]'));
    this.selectDateTime=element(by.xpath('//input[@placeholder="Select Date Time"]'));
    this.arrowAddMinute=element(by.xpath('//button[@aria-label="Add a minute"]//span'));
    this.btnSetDateTime=element(by.xpath('//span[contains(text(),"Set")]'));
    this.content=element(by.xpath('//div[@class="mat-tab-label-content"][contains(normalize-space(),"Content")]'));
    this.actions = element(by.xpath('//select[@ng-reflect-model="Actions"]'));


    
  }
}

export class BeforeMail {
  public async openPageInNewTab(url: string) {
    await this.createNewBrowserTab();
    await this.switchToTabNumber(1);
    await browser.get(url);
    await element(by.xpath('//input[@id="addOverlay"]')).click();
    await browser.sleep(1000);
    await element(by.xpath('//input[@id="addOverlay"]')).sendKeys("btstester.2020");
    await browser.sleep(1000);
    await element(by.xpath('//button[@id="go-to-public"]')).click();
    await browser.sleep(1000);
    await element(by.xpath('//*[@id="inbox_page_title"]/div[3]/div/div')).getText();
    await browser.sleep(2000);
    await this.switchToTabNumber(0);
    await browser.sleep(1000);
  }

  public createNewBrowserTab() {
    browser.executeScript('window.open()');
  }

  public async switchToTabNumber(number: number) {
    return browser.getAllWindowHandles().then(function (handles) {
      const newWindowHandle = handles[number];
      browser.switchTo().window(newWindowHandle);
    })
  }
}

