export class ButtonsPage{

    doubleClickMe(){
        cy.get("#doubleClickBtn").dblclick()
    }

    rightClickMe(){
        cy.get("#rightClickBtn").rightclick()
    }

    ClickMe(){
    cy.xpath("//button[normalize-space()='Click Me']").click()
    }

}