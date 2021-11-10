Cypress.Commands.add('LlenarRegistro', (correoRegistroExitoso) =>{
    cy.get('.login').click();
    cy.get('#email_create').type(correoRegistroExitoso);
    cy.get('#SubmitCreate > span').click();
    cy.wait(2000)
})

Cypress.Commands.add('CompletarFormulario',(nombre,apellido,contraseña,direccion,ciudad,telefono,estado,codigo_postal)=>{
    cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(nombre);
        cy.get('#customer_lastname').type(apellido)
        cy.get('#passwd').type(contraseña)
        cy.get('#address1').type(direccion)
        cy.get('#city').type(ciudad)
        cy.get('#phone_mobile').type(telefono)
        cy.get('#id_state').select(estado)
        cy.get('#postcode').type(codigo_postal)
        cy.get('#submitAccount > span').click();
})