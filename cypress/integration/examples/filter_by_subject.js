describe('Los estudiantes filter teacher comments by subject', function() {
    it('Visits los estudiantes, search a teacher and filter by subject', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        //Search teacher, go to the teacher page and filter by subject
        cy.get('.Select-placeholder').click()
        cy.get('.Select-placeholder').get('input').type("Rodriguez")
        cy.get('.Select-menu-outer').get('.Select-menu').get('.Select-option-group').get('.Select-option').first().click()        
        cy.get('.materias').get('input[name="id:DERE1300"]').click()
        cy.screenshot()
    })
})