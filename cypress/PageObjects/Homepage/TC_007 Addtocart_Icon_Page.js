///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Locators*/
const addtocart_icon = '(//i[@class="moocommerce-icon moo-icon-shopping-cart "])[1]';

/*Class & Function*/
export class Addtocart {

    verifyAddtocartIcon() {
        cy.xpath(addtocart_icon).should('be.visible')
        cy.xpath(addtocart_icon).click()
    }
}






