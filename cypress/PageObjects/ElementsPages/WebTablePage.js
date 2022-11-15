export class WebTablePage{

    tableFirstRow(){
        return cy.get('div[class="rt-tr-group"] div:nth-child(2)')
    }
    
    tableSecondRow(){
        return cy.get('div[class="rt-tr-group"] div:nth-child(6)')
    }
}