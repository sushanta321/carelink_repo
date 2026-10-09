import {test,expect}from '../fixture/fixture.ts';
import { customerdetail } from '../data/data.ts';

test('register a new customer',async({home,customer})=>{
    await home.openurl('https://carelink-fh4o.onrender.com')
    await customer.customerRegister(customerdetail)



})