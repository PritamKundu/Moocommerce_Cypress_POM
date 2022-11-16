///<reference types="cypress-xpath"/>
import "cypress-real-events";

/*Class & Function*/
export class Menus {

    verifyMenus(menu) {
        const home = "(//a[@class='menu-link'][normalize-space()='"+menu+"'])[1]" ;
        cy.xpath(home).should('be.visible')
        cy.xpath(home).each(($el, index, $list) => {
            if ($el.text() === menu) {
                expect($el.text()).to.eq(menu)
                cy.wait(2000)
            }
        })
    }
}






