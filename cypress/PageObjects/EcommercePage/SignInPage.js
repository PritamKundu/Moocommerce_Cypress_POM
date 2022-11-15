export class SignInPage{
    email(){
        return cy.get("#email")
    }

    passowrd(){
        return cy.get("#passwd")
    }

    signIn(){
        return cy.get("#SubmitLogin")
    }
}