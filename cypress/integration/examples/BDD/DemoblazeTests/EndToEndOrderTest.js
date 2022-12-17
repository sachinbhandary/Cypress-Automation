/// <reference types="Cypress" />
import ApplicationHeader from '../../../../support/pageObject/ApplicationHeader'
import CartPage from '../../../../support/pageObject/CartPage'
import HomePage from '../../../../support/pageObject/HomePage'
import LoginPage from '../../../../support/pageObject/LoginPage'
import ProductPage from '../../../../support/pageObject/ProductPage'
import OrderConfirmationPage from '../../../../support/pageObject/OrderConfirmationPage'
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { when } from "cypress/types/jquery";
const applicationHeader= new ApplicationHeader()
const loginPage=new LoginPage()
const homePage=new HomePage()
const productPage=new ProductPage()
const cartpage=new CartPage()
const orderConfirmationpage=new OrderConfirmationPage()

    Given('I open Demoblaze webpage and login with credentials and Validate login',function()
    {
        cy.visit(Cypress.env('url'))
        applicationHeader.loginPage().click()
        cy.wait(2000)
        loginPage.loginUsingUsernamePassword(this.data.userName,this.data.password)
        homePage.verifyLogin().should('be.visible')
    })
    when('I add two items to cart and Validate items present in the cart and total price and place order',function()
    {
        cy.wait(2000)
        homePage.selectItems(this.data.itemName[0]) 
        productPage.addToCart().click()
        applicationHeader.homePage().click()
        homePage.selectItems(this.data.itemName[1]) 
        productPage.addToCart().click()
        applicationHeader.cartPage().click()
        cy.wait(2000)
        cartpage.verifyCartItems()
        cartpage.verifyTotalAmount()
        cartpage.placeOrder().click()
    })
    Then('Enter delivery details submit and verify Thank You and click OK',function()
    {
        cy.wait(2000)
        orderConfirmationpage.enterOrderDetails(this.data.name,this.data.country,this.data.city,this.data.card,this.data.month,this.data.year)
        orderConfirmationpage.clickOnPurchase().click()
        orderConfirmationpage.verifyOrderConfirmation()
        orderConfirmationpage.clickOK().click()
    })