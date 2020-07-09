import { element, ElementFinder, ElementArrayFinder } from "protractor";
import { By } from "protractor";

export class PostRunElements{
    allContentMenus: ElementArrayFinder;
    deleteBtn: ElementFinder;
    confirmDeleteContent: ElementFinder;
    firstContentMenu: ElementFinder;

    constructor(){
        this.allContentMenus = element.all(By.css("a[name*='content details'] button[name='menu']"));
        this.firstContentMenu = element(By.css("mat-card:nth-child(1) a[name*='content details'] button[name='menu']"));
        this.deleteBtn = element(By.css("button[name = 'delete']"));
        this.confirmDeleteContent = element(By.css("mat-dialog-container button[name='Delete']"));
    }
}