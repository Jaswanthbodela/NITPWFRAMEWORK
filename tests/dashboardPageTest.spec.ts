import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

const url='https://rahulshettyacademy.com/client/#/auth/login'
let email='yivek45656@leafflip.com'
let password='789@testuserI'
let productName = 'ADIDAS ORIGINAL'

let lp:LoginPage
let dp:DashboardPage

test.beforeEach(async({page})=>{
    lp=new LoginPage(page);
    dp= new DashboardPage(page);
    await lp.launchUrl(url) 
    await lp.loginIntoApplication(email,password);
    await expect(lp.homePageIdentifier).toBeVisible();
})

test('add to cart',async()=>{
    await dp.searchProductAndAddToCart(productName,'Add To Cart')
    await expect(dp.addToCartMessage).toBeVisible();
    await dp.navigateToCart()

})

test('view product',async()=>{
    await dp.searchProductAndAddToCart(productName,'View');
    await expect(dp.viewPageProductName).toHaveText(productName);

})










