import{Page,Locator,expect} from "@playwright/test"

import {BasePage} from "./Basepage"

export class HomePage extends BasePage{

    signInButton:Locator;
    getStartedButton:Locator;
    findCareButton:Locator;
    careLinkButton:Locator;
    findACareGiverButton:Locator;
    workWithUsButton:Locator;

    constructor(protected readonly page:Page){

    super(page) ;
    this.signInButton=this.page.locator('//a[@href="/login"]')
    this.getStartedButton=this.page.getByRole('link',{name:'Get started'});
    this.findCareButton=this.page.locator('//a[text()="Find care"]').first()
    this.careLinkButton=this.page.locator(".brand")
    this.findACareGiverButton=this.page.locator("//a[text()='Find a caregiver']")
    this.workWithUsButton=this.page.locator("//a[@href='/register?role=provider']").first()



}
async signInButtonIsVisible():Promise<boolean>{
    return await this.checkVisibleElement(this.signInButton)

}

async getStartedButtonIsVisible():Promise<boolean>{
    return await this.checkVisibleElement(this.getStartedButton)
}





}