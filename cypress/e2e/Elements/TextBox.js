import { TextBoxPage } from "../../PageObjects/ElementsPages/TextBoxPage"

    before(()=>{  
        cy.fixture('testData').as('data')
    })

describe('Check Full Name', ()=>{
    before(()=>{
        cy.visit('text-box')
    })


    it('Verify Placeholder Name Visible are not', ()=>{
        const formElement = new TextBoxPage()
        formElement.fullname().invoke('attr', 'placeholder').should('eq', 'Full Name')
        formElement.email().invoke('attr', 'placeholder').should('eq', 'name@example.com')
        formElement.currentAddress().invoke('attr', 'placeholder').should('eq', 'Current Address')
    })


    it('Verify Form with data', function() {
        const formElement = new TextBoxPage()
        const textBoxDataLength = this.data.textBoxData.length
        for (var i = 0; i < textBoxDataLength; i++) {
            formElement.fullname().type(this.data.textBoxData[i].fullname)
            formElement.email().type(this.data.textBoxData[i].email)
            formElement.currentAddress().type(this.data.textBoxData[i].currentAddress)
            formElement.permanentAddress().type(this.data.textBoxData[i].permanentAddress)
            formElement.submitButton().click()
        }
    })
    })






    // it('Check Full Name', ()=>
    // {
    //     // cy.get('#userName-label').invoke('text').then((text1) =>{
    //     //     expect(text1).to.eq('Full Name')
    //     //     cy.log(text1)

    //     //     const has = new TextBoxPage()
    //     //     has.checkFullName("Pranta")
    //     // })
       
    // })