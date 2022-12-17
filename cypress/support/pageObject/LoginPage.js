class LoginPage
{
    loginUsingUsernamePassword(userName,password)
    {
        cy.get('#loginusername').type(userName)
        cy.get('#loginpassword').type(password)
        cy.get('button[onclick="logIn()"]').click()
    }
}
export default LoginPage