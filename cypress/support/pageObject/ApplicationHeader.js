class ApplicationHeader
{
    loginPage()
    {
        return cy.get('#login2')
    }
    homePage()
    {
        return cy.get('.nav-item.active')
    }
    cartPage()
    {
        return cy.contains('Cart')
    }
}
export default ApplicationHeader