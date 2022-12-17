class CartPage
{
    verifyCartItems()
    {
         var allItems = []
        cy.get('tr td:nth-child(2)').each((item, index, list)=>{
            allItems.push(item.text())
            }).then(function(){
                expect(allItems).to.include.members(this.data.itemName)
                }) 
        // cy.get('tr td:nth-child(2)').then(($els) => Cypress._.map($els, 'innerText'))
    }
    verifyTotalAmount()
    {
        var sum=0
        cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
            const amount=$el.text()
            sum= Number(sum)+Number(amount)
                      
        })
        cy.get('#totalp').then(function (element){
            const totalAmount=element.text()
            expect(Number(totalAmount)).to.equal(sum)
        })
    }
    placeOrder()
    {
        return cy.get('.col-lg-1 > .btn')
    }
}
export default CartPage