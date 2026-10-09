import {Page,Locator,expect} from "@playwright/test"

export class BasePage{

     constructor (protected readonly page:Page){
        this.page=page;
        
    }

    async openurl(url:string):Promise<void>{
        await this.page.goto(url)

    }


    async checkVisibleElement(locator:Locator):Promise<boolean>{
        return await locator.isVisible()
    }


    async isEnable(locator:Locator):Promise<boolean>{
        return await locator.isEnabled()
    }

    async clickElement(locator:Locator):Promise<void>{
        await locator.click()

    }


    async isEditalble(locator:Locator):Promise<boolean>{
        return await locator.isEditable()
    }

    async fillElement(locator:Locator ,values:string):Promise<void>{
        await locator.fill(values)

    }

}