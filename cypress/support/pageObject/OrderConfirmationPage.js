class OrderConfirmationPage
{
    enterOrderDetails(name,country,city,card,month,year)
    {
        cy.get('#name').type(name)
        cy.get('#country').type(country)
        cy.get('#city').type(city)
        cy.get('#card').type(card)
        cy.get('#month').type(month)
        cy.get('#year').type(year)
    }
    clickOnPurchase()
    {
        return cy.get('button[onclick="purchaseOrder()"]')
    }
    verifyOrderConfirmation()
    {
        cy.get('.sweet-alert > h2').then(function(element){
            const actualText=element.text()
            expect(actualText.includes('Thank you')).to.be.true
        })
    }
    clickOK()
    {
        return cy.get('.confirm')
    }
}
export default OrderConfirmationPage