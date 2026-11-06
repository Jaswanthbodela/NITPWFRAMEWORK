import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage'; 
import { DashboardPage } from '../pages/dashboardPage';
import product from '../testdata/product.json';
//import data from '../testdata/login.json'

let lp:LoginPage
let dp:DashboardPage
test.beforeEach(async({page})=>{
    lp=new LoginPage(page)
    dp=new DashboardPage(page)
    await lp.launchUrl(product[0].url);
    await lp.loginIntoApplication(product[0].email,product[0].password);
    await expect(lp.homePageIdentifier).toBeVisible();

})
for(const p of product){

test(`add the product to the cart ${p.productName}`,async()=>{
    await dp.searchProductAndAddToCart(p.productName,'Add To Cart');
    await expect(dp.addToCartMessage).toContainText(p.successMessage)
    await dp.navigateToCart()

})

test(`view the item ${p.productName}`,async()=>{
    await dp.searchProductAndAddToCart(p.productName,'View');
    await expect(dp.viewPageProductName).toContainText(p.productName)
    // await dp.navigateToCart()

})

}




















