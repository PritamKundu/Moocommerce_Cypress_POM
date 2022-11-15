import { ButtonsPage } from "../../PageObjects/ElementsPages/ButtonsPage"

describe('Verify All Buttons', ()=>{
    
before(()=>{
    cy.visit("buttons")
})

 it('Verify buttons are working properly or not', ()=>{
    const button = new ButtonsPage
    button.doubleClickMe()
    button.rightClickMe()
    button.ClickMe()
 })

})