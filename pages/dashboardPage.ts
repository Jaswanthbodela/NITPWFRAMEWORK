import { Locator,Page} from "@playwright/test";

//https://rahulshettyacademy.com/client/#/auth/login
export class DashboardPage{
    page:Page
    products: Locator
    homePageProductPrice: Locator
    viewPageProductPrice:Locator
    viewPageProductName:Locator
    addToCartMessage:Locator
    cart:Locator
    constructor(page:Page){
        this.page=page
        this.products=this.page.locator('div.card-body')
        this.homePageProductPrice= this.page.locator('div.text-muted')
        this.viewPageProductName=this.page.locator('.rtl-text h2')
        this.viewPageProductPrice=this.page.locator('.rtl-text h3');
        this.addToCartMessage=this.page.locator('#toast-container');
        this.cart=this.page.locator('[routerlink="/dashboard/cart"]');
    }
    //create the methods:
    //search product is a method name and it can be anything but some meaningful name

    async searchProductAndAddToCart(productName:string,button:'View'|"Add To Cart"){
        //wait for atleast one element/product to load on the page
        await this.products.nth(0).waitFor()
        const countOfProducts = await this.products.count();
        
        // use the for loop to iterate through the list of products
        for(let i=0;i<countOfProducts;i++){
            //pick one product fromt the list
            const productPick = await this.products.nth(i);
            //read the name of the product
            const ProductText = await productPick.locator('b').textContent();// here locator('b') is tag name here we are using locator chaining
            console.log(ProductText);
            //await this.products.nth(i).locator('b').textContent(); this is same as line 32 and 34

            // compare the captured product name with your test procut name
            //remember while comparing convert the text either Uppercase or Lowercase
            if(ProductText?.trim().toLowerCase()===productName.trim().toLowerCase()){

                // find the button by the text
                await productPick.getByRole('button',{name:button}).click();
                //await this.products.getByText(button).click(); //we can write like this aswell
                break
            }
        }
    }
    async navigateToCart(){
        await this.cart.click();

    }

}