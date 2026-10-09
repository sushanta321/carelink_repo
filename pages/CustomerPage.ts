import{Page,Locator,expect}from '@playwright/test'

import { BasePage } from './Basepage'


export interface customerdetails {
    fullname:string,
    phone :string,
    email :string,
    password:string,

}

export class CustomerPage extends BasePage{

    bookcarebutton:Locator;
    fullname : Locator;
    phone : Locator;
    email : Locator;
    password : Locator ;
    createaccountbutton :Locator;

    constructor(protected readonly page:Page){
        super(page)
        this.bookcarebutton=page.getByRole('link',{name:'Get started'});
        this.fullname =page.locator('.input').first() ;
        this.phone =page.locator('.input').nth(1);
        this.email =page.locator('.input').nth(2);
        this.password = page.locator('.input').nth(3);
        this.createaccountbutton=page.getByRole('button',{name:'Create account'});

    }

 async customerRegister(customer:customerdetails):Promise<void>{

        await this.clickElement(this.bookcarebutton);
        await this.fillElement(this.fullname,customer.fullname);
        await this.fillElement(this.phone,customer.phone);
        await this.fillElement(this.email,customer.email);
        await this.fillElement(this.password,customer.password);
        await this.clickElement(this.createaccountbutton);


    }

}

