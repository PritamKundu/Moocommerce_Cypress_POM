import { RadioButtonsPage } from "../../PageObjects/ElementsPages/RadioButtonsPage"

describe('Check Radio Button', ()=> {
    

    before(() => {
        cy.visit("radio-button")
        
    })

    it("Verify No Radio button is disabled or not", ()=> {
        const radioButton = new RadioButtonsPage()
        radioButton.checkNoRadioBtn()
        
        
    })

    it("Verify Yes & Impressive Radio button can be checked or not", ()=>{
       const radioButton = new RadioButtonsPage()
       radioButton.checkYesRadioBtn()
       cy.get(".text-success").should('contain','Yes')
       radioButton.checkImpressiveRadioBtn()
       cy.get(".text-success").should('contain','Impressive')
    })

})
