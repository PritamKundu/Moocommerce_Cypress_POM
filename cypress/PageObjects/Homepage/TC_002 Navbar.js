///<reference types="cypress-xpath"/>

export class Navbar{

    navBar(nav_content){
            cy.get('.moo-text').should('be.visible')
            cy.get('.moo-text').each(($el, index, $list) =>{
                if($el.text() === nav_content){
                    expect($el.text()).to.eq(nav_content)
                    cy.wait(2000)
                }
            })
        }
}





