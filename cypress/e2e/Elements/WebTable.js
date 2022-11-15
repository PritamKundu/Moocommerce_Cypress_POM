import {WebTablePage} from "../../PageObjects/ElementsPages/WebTablePage"
describe('Dynamic Table Handleing', function(){

    const webTable = new WebTablePage();

    it('dynamic list', function(){
        cy.visit('webtables')

        webTable.tableFirstRow().each(($e,index,$list) => {
        
            const text1 = $e.text();
            if(text1.includes("Cantrell"))
            {
                webTable.tableSecondRow().eq(index).prev().then(function(name)
                
                {
                    const colName = name.text()
                    cy.log(colName)
                    expect(colName).to.equal("12000")
                    
                })
            }

        })
    })
    
    })