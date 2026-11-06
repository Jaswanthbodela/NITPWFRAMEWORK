import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import data from '../testdata/login.json';//                              <
// json format does not have any class so we are not writing in {data} in ^ line

let lp:LoginPage
test.beforeEach(async({page})=>{
    lp=new LoginPage(page)
    await lp.launchUrl(data.url)
})

test('valid login user',async({page})=>{
    //create the object/instance of the class

    // const lp=new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(data.email,data.password)
    await expect(lp.homePageIdentifier).toBeVisible();

})
test('invalid login user',async({page})=>{
    //create the object/instance of the class
    
    // const lp=new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(data.email,data.invalidPassword)
    await expect(lp.errorMessage).toBeVisible();

})