/// <reference types="Cypress" />

describe('End to End Test Suite',function()
{
    before(function(){
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    
    it('Test Case 1',function(){

        cy.visit(Cypress.env('url'))
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type(this.data.userName)
        cy.get('#loginpassword').type(this.data.password)
        cy.get('button[onclick="logIn()"]').click()        
        cy.contains('Welcome rob543').should('be.visible')
        cy.get('#tbodyid').find('.card.h-100').each((item, index, $list)=>{
            const requiredItem=item.find('.hrefch').text()
            if(requiredItem.includes('Sony xperia z5'))
            {
                cy.wrap(item).find('img').click()
            }
        })
        cy.contains('Add to cart').click()
        cy.get('.nav-item.active').click()
        cy.get('li[class="nav-item active"]').click
        cy.get('#tbodyid').find('.card.h-100').each((item, index, $list)=>{
            const requiredItem=item.find('.hrefch').text()
            if(requiredItem.includes('Samsung galaxy s6'))
            {
                cy.wrap(item).find('img').click()
            }
        })
        cy.contains('Add to cart').click()
        cy.contains('Cart').click() 
        // cy.wait(2000)
        var allItems = []
        cy.get('tr td:nth-child(2)').each((item, index, list)=>{
            allItems.push(item.text())
            }).then(function(){
                expect(allItems).to.have.lengthOf(2)
                expect(this.data.itemName).to.include.members(allItems)
            })      
        // cy.get('tr td:nth-child(2)').then(($els) => Cypress._.map($els, 'innerText'))        
        // .should('deep.equal',this.data.itemName)
        var sum=0
        cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
            const amount=$el.text()
            sum= Number(sum)+Number(amount)
                      
        }).then(function(){
            cy.log(sum) 
        })
        cy.get('#totalp').then(function (element){
            const totalAmount=element.text()
            expect(Number(totalAmount)).to.equal(sum)
        })
        cy.get('.col-lg-1 > .btn').click()
        cy.wait(1000)
        cy.get('#name').type(this.data.name)
        cy.get('#country').type(this.data.country)
        cy.get('#city').type(this.data.city)
        cy.get('#card').type(this.data.card)
        cy.get('#month').type(this.data.month)
        cy.get('#year').type(this.data.year)
        cy.get('button[onclick="purchaseOrder()"]').click()
        cy.get('.sweet-alert > h2').then(function(element){
            const actualText=element.text()
            expect(actualText.includes('Thank you')).to.be.true
        })
        cy.get('.confirm').click()
    })
})