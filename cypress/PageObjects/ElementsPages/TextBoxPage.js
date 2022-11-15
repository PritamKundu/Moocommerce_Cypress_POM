export class TextBoxPage{

    fullname() {
        return cy.get("#userName").clear()
    }

    email() {
        return cy.get("#userEmail").clear()
    }

    currentAddress() {
        return cy.get("#currentAddress").clear()
    }

    permanentAddress() {
        return cy.xpath("//textarea[@id='permanentAddress']").clear()
    }

    submitButton() {
        return cy.get("#submit")
    }


}