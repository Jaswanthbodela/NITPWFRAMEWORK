# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.js >> invalid login user
- Location: tests\loginPage.spec.js:17:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | // in java script we wont wrte any thing
  3  | export class PageLogin{
  4  |     // class consists of properties :: locators and methods
  5  |     // locators when passed inside the class will be acting as properties of an object
  6  |     // create all the properties of the page inside the class
  7  | 
  8  |     // page property will definitely provide page as a property (targeting to url)
  9  |      
  10 |     // username - yivek45656@leafflip.com
  11 |     // password - 789@testuserI
  12 | 
  13 |         constructor(Page){
> 14 |             this.page=page
     |                       ^ ReferenceError: page is not defined
  15 |             this.email=this.page.locator('#userEmail');
  16 |             this.password = this.page.getByPlaceholder('enter your passsword');
  17 |             this.loginButton=this.page.locator('#login');
  18 |             this.errorMessage=this.page.locator('#toast-container');
  19 |             this.homePageIdentifier=this.page.locator('[routerlink="/dashboard/"]');
  20 |         }
  21 |         // create the methods::
  22 |         // launch the url and
  23 |         // loginIntoApplication
  24 | 
  25 |         async launchUrl(url){
  26 |             await this.page.goto(url)
  27 |         }
  28 |         async loginIntoApplication(username,password){
  29 |             await this.email.fill(username);
  30 |             await this.password.fill(password);
  31 |             await this.loginButton.click()
  32 |         }
  33 | 
  34 | 
  35 | }
  36 | 
```