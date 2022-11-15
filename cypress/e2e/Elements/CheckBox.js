import {CheckBoxPage} from "../../PageObjects/ElementsPages/CheckBoxPage"

    before(()=>{
        cy.fixture('testData.json').as('data')
    })
  
    describe('Test CheckBox Feature', ()=>{
        

        before(function(){
            cy.visit("checkbox")
        })
    
        it("Verify Home checkbox can be checked or not", () => {
            const checkBox =  new CheckBoxPage()
            checkBox.checkUncheckItem(['home'])
            cy.get("#result").should('contain','home')
            checkBox.checkUncheckItem(['home'])
    
        })
    
        it("Verify multiple checkbox can be checked or not", function(){
            
            const checkBox =  new CheckBoxPage()
            const data = this.data.checkBoxData
            checkBox.clickExpandAllButton()
            checkBox.checkUncheckItem(data)
            data.forEach(item=>{
            cy.get("#result").should('contain',item)
      })
    
        })
})

