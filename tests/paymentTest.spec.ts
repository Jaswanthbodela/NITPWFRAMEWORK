import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage'; 
import { DashboardPage } from '../pages/dashboardPage';
import { checkoutPage } from '../pages/cartPage';
import { paymentPage } from '../pages/payment';

import product from '../testdata/product.json';
import payment from '../testdata/payment.json'
//import data from '../testdata/login.json'

let lp:LoginPage
let dp:DashboardPage
let cps:checkoutPage
let pp:paymentPage

test.beforeEach(async({page})=>{
    lp=new LoginPage(page)
    dp=new DashboardPage(page)
    cps=new checkoutPage(page)
    pp=new paymentPage(page)
    await lp.launchUrl(product[0].url);
    await lp.loginIntoApplication(product[0].email,product[0].password);
    await expect(lp.homePageIdentifier).toBeVisible();

})
for(const p of product){

test(`add the product to the cart ${p.productName}`,async()=>{
    await dp.searchProductAndAddToCart(p.productName,'Add To Cart');
    await expect(dp.addToCartMessage).toContainText(p.successMessage)
    await dp.navigateToCart()

    expect(await cps.verifyProductInCart(p.productName)).toBeTruthy();
    await cps.proceedToCheckout();

    await pp.verifyAutofilled(payment.creditcardNumber,payment.email);
    await pp.expiryDate(payment.expiryMonth,payment.expiryDay);
    await pp.enterCardDetails(payment.cvvCode,payment.nameOnCard);
    await pp.selectCountry(payment.countryInput);
    if(payment.couponEnter){
        await pp.ApplyCoupon(payment.couponEnter);
    }
    await pp.orderPlace();
    await expect(pp.orderSuccessMessage).toBeVisible();
    await pp.page.waitForTimeout(2000);

})


}