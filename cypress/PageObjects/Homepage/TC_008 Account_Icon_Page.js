///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Locators*/
const account_icon = '(//*[@class="account-icon"])[1]';

/*Class & Function*/
export class Account {

    verifyAccountIcon(account) {
        cy.xpath(account_icon).should('be.visible')
        cy.xpath(account_icon).should('have.css', 'color', 'rgb(0, 0, 0)')
    }
}






