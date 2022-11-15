///<reference types="cypress-xpath"/>
import "cypress-real-events";

export class ContactUs{

    contactUs(act_contact){
            cy.get('#menu-item-19').should('be.visible')
            cy.get('#menu-item-19').invoke('text').then((exp_contact) =>{
                expect(exp_contact).to.eq(act_contact)
            })
            cy.get('#menu-item-19>a').should('have.css', 'color', 'rgb(0, 0, 0)')
            cy.get('#menu-item-19>a').realHover().should('have.css', 'color', 'rgb(200, 200, 200)')    
        }
}





