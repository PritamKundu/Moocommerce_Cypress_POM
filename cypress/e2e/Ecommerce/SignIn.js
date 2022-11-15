import { SignInPage } from "../../PageObjects/EcommercePage/SignInPage"

before(() => {
    cy.fixture('testData').as('data')
})


// beforeEach(function () {
//     cy.fixture('testData').then((data) => {
//       this.data = data
//     })
//   })


describe('Sign In Checking', function(){

    before(()=>{
        cy.visit("index.php?controller=authentication&back=my-account")

})



it('Verify Valid Sign In', function (){
    const signIn = new SignInPage()
    //const length = this.data.Signin.length
    //for(var i=0; i<length; i++){
        signIn.email().type(this.data.Signin[0].email)
        signIn.passowrd().type(this.data.Signin[0].password)
        signIn.signIn().click()
    //}
})
})