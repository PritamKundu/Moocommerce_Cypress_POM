///<reference types="cypress-xpath"/>
import "cypress-real-events";
import { HomePage } from "./TC_001 Home_Page";

/*Locators*/
const saerch_box = '(//input[@class="search-field"])[1]';
const saerch_button = '(//button[@class="search-submit"])[1]';

/*Class & Function*/
export class Search {

    homepage = new HomePage();

    verifySearchBox(search_data, act_placeholder, act_color) {
        cy.xpath(saerch_box).should('be.visible')

        cy.xpath(saerch_box).should('have.attr', 'placeholder').then((exp_placeholder) => {
            expect(exp_placeholder).to.eq(act_placeholder)
        })

        cy.xpath(saerch_box).type(search_data)

        cy.xpath(saerch_box).should('have.css', 'color').then((exp_color) => {
            expect(exp_color).to.eq(act_color)
        })

        cy.xpath(saerch_button).should('be.visible')
        cy.xpath(saerch_button).should('be.enabled')
        cy.xpath(saerch_button).click()

        cy.url().then((productsearch_url) => {
            expect(productsearch_url).to.eq('https://mooleker.moocommerce.no/?s=' + search_data)
        })

    }

}






