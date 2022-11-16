///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Locators*/
const about_us = '#menu-item-20>a';

/*Class & Function*/
export class AboutUs {

    verifyAboutUs(act_about) {
        cy.get(about_us).should('be.visible')
        cy.get(about_us).invoke('text').then((exp_about) => {
            expect(exp_about).to.eq(act_about)
        })
        cy.get(about_us).should('have.css', 'color', 'rgb(0, 0, 0)')
        cy.get('#menu-item-20').realHover().should('have.css', 'color', 'rgb(75, 79, 88)')
    }

    }






