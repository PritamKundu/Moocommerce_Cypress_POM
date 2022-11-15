export class RadioButtonsPage{

    checkYesRadioBtn(){
        cy.get("#yesRadio").first().check({force: true})
    }

    checkImpressiveRadioBtn(){
        cy.get("#impressiveRadio").first().check({force: true})
    }

    checkNoRadioBtn(){
        cy.get("#noRadio").should('be.disabled')
        cy.log("No Radio Button Is Deactive")
    }

}