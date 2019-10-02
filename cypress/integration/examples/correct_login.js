describe('Los estudiantes success login', function() {
    it('Visits los estudiantes and success at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        //Login correcto
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("correofalso9999@gmail.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("P!assword123")
        cy.get('.cajaLogIn').contains('Ingresar').click() 
        cy.screenshot()       
    })
})