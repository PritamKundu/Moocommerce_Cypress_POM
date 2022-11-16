///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Locators*/
const contact_us = '#menu-item-19>a';

/*Class & Function*/
export class ContactUs {

    verifyContactUs(act_contact) {
        cy.get(contact_us).should('be.visible')
        cy.get(contact_us).invoke('text').then((exp_contact) => {
            expect(exp_contact).to.eq(act_contact)
        })
        cy.get(contact_us).should('have.css', 'color', 'rgb(0, 0, 0)')
        cy.get('#menu-item-19').realHover().should('have.css', 'color', 'rgb(75, 79, 88)')
    }
}





