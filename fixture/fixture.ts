import {test as base , expect} from "@playwright/test"

import{BasePage} from '../pages/Basepage'
import { HomePage } from '../pages/HomePage'
import { CustomerPage } from "../pages/CustomerPage"

type fixture ={
    base: BasePage,
    home: HomePage,
    customer:CustomerPage
}

export const test = base.extend<fixture>({

    base:async({page},use)=>{
        const basepage=new BasePage(page)
        await use(basepage)
    },

    home:async({page},use)=>{
        const homepage=new HomePage(page)
        await use(homepage)
    },
    customer:async({page},use)=>{
        const customerpage=new CustomerPage(page)
        await use(customerpage)
    }

})

export {expect} from "@playwright/test" ;