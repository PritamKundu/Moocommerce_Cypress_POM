///<reference types="cypress-xpath"/>
import "cypress-real-events";

/* Locators */
const puchase_button = '//a[@class="uagb-buttons-repeater wp-block-button__link"][1]';


/*Class & Function*/
export class Banner {

    verifyBanner(banner_number) {
        const banner = '(//img[@data-object-fit])[' + banner_number + ']'
        const banner_header = '//h1[@class="has-text-align-center has-text-color"]'


        if (banner_number == 1) {
            cy.xpath(banner).should('be.visible')
            cy.xpath(banner_header).should('be.visible')
            cy.xpath(banner_header).should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.xpath(puchase_button).should('be.visible')
            cy.xpath(puchase_button).invoke('text').then((act_purchase_btn) => {
                expect(act_purchase_btn).to.eq('Kjøp Nå')
            })
            cy.wait(1000)
            cy.xpath(puchase_button).should('have.css', 'border-color', 'rgb(229, 171, 171)')
            cy.wait(1000)
            cy.xpath(puchase_button).should('have.css', 'background-color', 'rgb(229, 171, 171)')
            cy.wait(1000)
            cy.xpath(puchase_button).should('have.css', 'color', 'rgb(0, 0, 0)')
            cy.wait(1000)
        }

        else {

            cy.xpath(banner).should('be.visible')
        }
    }

    verifyBannerHeader(helper_banner_header_number) {
        const banner_header = '(//h2[@class="uagb-heading-text"])[' + helper_banner_header_number + ']'
            cy.xpath(banner_header).scrollIntoView().should('be.visible')
            cy.xpath(banner_header).should('have.css', 'color', 'rgb(255, 255, 255)')
    }

    verifyButton(helper_puchase_btn_number, act_btn_text) {
        const helper_puchase_button = '(//a[@class="uagb-buttons-repeater wp-block-button__link has-background has-text-color"])[' + helper_puchase_btn_number + ']';
            cy.xpath(helper_puchase_button).should('be.visible')
            cy.xpath(helper_puchase_button).should('have.css', 'border-color', 'rgb(51, 51, 51)')
            cy.xpath(helper_puchase_button).should('have.css', 'background-color', 'rgb(255, 255, 255)')
            cy.xpath(helper_puchase_button).should('have.css', 'color', 'rgb(0, 0, 0)')
            cy.xpath(helper_puchase_button).invoke('text').then((exp_btn_text) => {
                expect(exp_btn_text).to.eq(act_btn_text)
            })

    }


}







