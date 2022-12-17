/// <reference types="Cypress" />
import ApplicationHeader from '../../support/pageObject/ApplicationHeader'
import CartPage from '../../support/pageObject/CartPage'
import HomePage from '../../support/pageObject/HomePage'
import LoginPage from '../../support/pageObject/LoginPage'
import ProductPage from '../../support/pageObject/ProductPage'
import OrderConfirmationPage from '../../support/pageObject/OrderConfirmationPage'

describe('End to End Test Suite',function()
{
    before(function(){
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    
    it('Test Case 1',function(){

        const applicationHeader= new ApplicationHeader()
        const loginPage=new LoginPage()
        const homePage=new HomePage()
        const productPage=new ProductPage()
        const cartpage=new CartPage()
        const orderConfirmationpage=new OrderConfirmationPage()
        cy.visit(Cypress.env('url'))
        applicationHeader.loginPage().click()
        cy.wait(2000)
        loginPage.loginUsingUsernamePassword(this.data.userName,this.data.password)
        homePage.verifyLogin().should('be.visible')
        cy.wait(2000)
        homePage.selectItems(this.data.itemName[0]) 
        productPage.addToCart().click()
        applicationHeader.homePage().click()
        homePage.selectItems(this.data.itemName[1]) 
        productPage.addToCart().click()
        applicationHeader.cartPage().click()
        cy.wait(2000)
        cartpage.verifyCartItems()
        // cartpage.verifyCartItems().should('deep.equal',this.data.itemName)
        cartpage.verifyTotalAmount()
        cartpage.placeOrder().click()
        cy.wait(2000)
        orderConfirmationpage.enterOrderDetails(this.data.name,this.data.country,this.data.city,this.data.card,this.data.month,this.data.year)
        orderConfirmationpage.clickOnPurchase().click()
        orderConfirmationpage.verifyOrderConfirmation()
        orderConfirmationpage.clickOK().click()
    })
})