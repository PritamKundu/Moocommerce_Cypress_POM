///<reference types="cypress-xpath"/>

export class HomePage{

    homepage_logo(){
        cy.xpath("(//img[@alt='mooleker'])[1]").should('be.visible')
        cy.wait(2000) 
    }

    verify_Url(act_url){
        cy.url().then((exp_url) =>{
            expect(exp_url).to.eq(act_url)
        cy.log(exp_url)})
    }

}