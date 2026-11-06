import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage'; 
import { DashboardPage } from '../pages/dashboardPage';
import { checkoutPage } from '../pages/cartPage';

import product from '../testdata/product.json';
//import data from '../testdata/login.json'

let lps:LoginPage
let dps:DashboardPage
let cps:checkoutPage


test.beforeEach(async({page})=>{
    lps=new LoginPage(page)
    dps=new DashboardPage(page)
    cps=new checkoutPage(page)
    await lps.launchUrl(product[0].url);
    await lps.loginIntoApplication(product[0].email,product[0].password);
    await expect(lps.homePageIdentifier).toBeVisible();

})
for(const p of product){

test(`add the product to the cart ${p.productName}`,async()=>{
    await dps.searchProductAndAddToCart(p.productName,'Add To Cart');
    await expect(dps.addToCartMessage).toContainText(p.successMessage)
    await dps.navigateToCart()
    
    expect(await cps.verifyProductInCart(p.productName)).toBeTruthy();
    await cps.proceedToCheckout();
    

})


// test(`checkout product${p.productName}`,async()=>{
    
//     expect(await cp.verifyProductInCart(p.productName)).toBeTruthy();
//     await cp.proceedToCheckout();


// })

}



















