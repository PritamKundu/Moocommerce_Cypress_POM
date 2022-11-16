///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Locators*/
const contact_us = '#menu-item-19>a';

/*Class & Function*/
export class ContactUs {

    contactUs(act_contact) {
        cy.get(contact_us).should('be.visible')
        cy.get(contact_us).invoke('text').then((exp_contact) => {
            expect(exp_contact).to.eq(act_contact)
        })
        cy.get(contact_us).should('have.css', 'color', 'rgb(0, 0, 0)')
        cy.get(contact_us).realHover().should('have.css', 'color', 'rgb(200, 200, 200)')
    }
}





