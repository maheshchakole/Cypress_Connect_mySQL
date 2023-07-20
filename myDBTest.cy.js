/// <reference types="cypress"/>

describe("data base",()=>{
    it("Testing db", ()=>{

        cy.task('queryDb', 'SELECT * FROM maheshdb.cricketers;').then(res =>{
            var rec =rec 
            
            const results = Object.values(res[0])
            cy.log(results[0])
            cy.log(results[1])
            cy.log(results[2])
            cy.log(results[3])
            cy.log(results[4])
            

        });
    })
})