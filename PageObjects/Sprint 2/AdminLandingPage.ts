import { ElementFinder, element } from "protractor";
import { By } from "protractor";


export class AdminLandingPageLocate {

    //AdminLanding WebElements
    imgMomentaLogo: ElementFinder;
    btnHamburgerMenuIcon: ElementFinder;
    mnuLogout: ElementFinder;
    colLeadership: ElementFinder;
    colCoach: ElementFinder;
    //momentaUserNamePresent: ElementFinder;
    tabMaster: ElementFinder;
    tabClient: ElementFinder;
    colPetronas: ElementFinder;
    colLNT: ElementFinder;
    colCocaCola: ElementFinder;
    tabMasterCollection: ElementFinder;
    txtClientSearch: ElementFinder;

    //Client WebElements ----------------------------- Need to check why these are part of AdminLanding
    ttlPetronas: ElementFinder;
    btnJourneyPlus: ElementFinder;
    btnCopyCopyJourney: ElementFinder;
    mnuCopyJourney: ElementFinder;
    btnPreviewCopyJourney: ElementFinder;
    //journeyList: ElementFinder;

    //Copy Journey WebElements ---------------------- - Need to check why these are part of AdminLanding
    //momentaDialogContainer: ElementFinder;
    txtJourneyTitle: ElementFinder;
    txtJourneyDescription: ElementFinder;
    btnJourneyAuthSave: ElementFinder;


    constructor() {
        //Admin Landing WebElements
        this.imgMomentaLogo = element(By.xpath("//h3[contains(text(),'Momenta')]"));
        this.btnHamburgerMenuIcon = element(By.xpath("//button[@class='content__menuicon']"));
        this.mnuLogout = element(By.xpath("//i[contains(text(),'logout')]"));
        this.colLeadership = element(By.xpath("//span[contains(text(),'Leadership')]"));
        this.colCoach = element(By.xpath("//span[contains(text(),'Coach')]"));
        //this.momentaUserNamePresent = element(By.xpath("//b[contains(text(),'Hello neha')]"));
        this.tabMaster = element(By.xpath("//div[@aria-posinset='1']"));
        this.tabClient = element(By.id('mat-tab-label-0-1'));
        this.colPetronas = element(By.xpath("//span[@class='search-bar-title'][contains(text(),'petronas')]"));
        this.colLNT = element(By.xpath("//span[@class='search-bar-title'][contains(text(),'LnT')]"));
        this.colCocaCola = element(By.xpath("//span[contains(text(),'coca-cola')]/.."));
        this.tabMasterCollection = element(By.xpath("//h3[contains(text(),'Master Collection')]"));
        this.txtClientSearch = element(By.xpath("//input[@placeholder='Filter Collections']"));

        //Client WebElements
        this.ttlPetronas = element(By.xpath("//h4[contains(text(),'Petronas')]"));
        this.btnJourneyPlus = element(By.xpath("(//i[@class='author-icon icon-plus master-collection__header--plus'])[2]"));
        this.btnCopyCopyJourney = element(By.xpath("(//button[contains(text(),'Copy')])[1]"));
        this.mnuCopyJourney = element(By.xpath("//span[contains(text(),'Copy Journey')]"))
        this.btnPreviewCopyJourney = element("(//button[contains(text(),'Preview')])[1]");
        //this.journeyList = element(By.xpath("//div[@class='journey-list__cont ng-star-inserted']//child::div[@class='journey-list__box journey-list--right']"));

        //Copy Journey WebElements
        //this.momentaDialogContainer = element(By.css('.mat-dialog-container ng-tns-c23-11 ng-trigger ng-trigger-dialogContainer ng-star-inserted'));
        this.txtJourneyTitle = element(By.id('mat-input-2'));
        this.txtJourneyDescription = element(By.id('mat-input-3'));
        this.btnJourneyAuthSave = element(By.xpath("//button[contains(text(),'SAVE')]"));
    }
}