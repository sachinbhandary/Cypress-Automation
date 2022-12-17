class HomePage
{
    verifyLogin()
    {
        return cy.contains('Welcome rob543')
    }

    selectItems(itemName)
    {
        return cy.get('#tbodyid').find('.card.h-100').each((item, index, $list)=>{
            const requiredItem=item.find('.hrefch').text()
            if(requiredItem.includes(itemName))
            {
                cy.wrap(item).find('img').click()
            }
        })
    }
}
export default HomePage