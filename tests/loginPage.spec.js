// this is jusst to see the difference between TS and JS 

import {test,expect} from '@playwright/test';
import { PageLogin } from '../pages/loginPage';
import data from '../testdata/login.json';
let lps
test.beforeEach(async({page})=>{
    lps=new PageLogin(page)
    await lps.launchUrl(data.url)
})

test('valid login user',async({page})=>{
    await lps.loginIntoApplication(data.email,data.password)
    await expect(lps.homePageIdentifier).toBeVisible();

})
test('invalid login user',async({page})=>{
    await lps.loginIntoApplication(data.email,data.invalidPassword)
    await expect(lps.errorMessage).toBeVisible();

})
test('invalid Password',async({page})=>{


})