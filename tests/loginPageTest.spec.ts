

import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

// first time we will vwrify with the hardcoded value

const url='https://rahulshettyacademy.com/client/#/auth/login'
let email='yivek45656@leafflip.com'
let password='789@testuserI'
let errorMessage='Incorrect email or password.'
let invalidPassword='asfdgfh'


test('valid login user',async({page})=>{
    //create the object/instance of the class

    // const lp=new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email,password)
    await expect(lp.homePageIdentifier).toBeVisible();

})
test('invalid login user',async({page})=>{
    //create the object/instance of the class
    
    // const lp=new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email,invalidPassword)
    await expect(lp.errorMessage).toBeVisible();

})

// when we have the repetition we have to use hooks concept in playwright
// for this we will create a new testmethod
let lp:LoginPage
test.beforeEach(async({page})=>{
    lp=new LoginPage(page)
    await lp.launchUrl(url)
})



















