import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { ExcelUtils } from '../utils/excelUtils'
import path from 'path'


const filepath=path.join(__dirname,'../testdata/logindata.xlsx')

    // take the sheetname
    const sheetname='login'
    let datas : any
    try{
        datas=ExcelUtils.getExcelData(filepath,sheetname)
    }
    catch(error){
        console.log(error);
    }
    let lp:LoginPage
    let dp:DashboardPage

test.beforeEach(async({page})=>{
    lp=new LoginPage(page);
    dp= new DashboardPage(page);

})
for(let product of datas){
    test(`Add an item to cart from excel ${product.productName}`,async()=>{
        await lp.launchUrl(product.url)
        await lp.loginIntoApplication(product.email,product.password);
        await expect(lp.homePageIdentifier).toBeVisible();
        await dp.searchProductAndAddToCart(product.productName,'Add To Cart');
        await expect(dp.addToCartMessage).toHaveText('Product Added To Cart ')
        await dp.navigateToCart();

    })
}












