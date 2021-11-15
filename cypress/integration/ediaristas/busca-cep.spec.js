context('Busca pelo CEP', () => {

    beforeEach(() => {
        cy.visit('/encontrar-diarista');
    })

    // it('botao desabilitado e habilitado', () => {
    //     cy.get('.MuiOutlinedInput-input').type('1234567');

    //     const button = cy.get('button').contains(/buscar/i);
    //     button.should('be.disabled');

    //     cy.get('.MuiOutlinedInput-input').clear().type('12345678');
    //     button.should('not.be.disabled');
    // });

    it('buscar cep', () => {
        cy.get('.MuiOutlinedInput-input').type('69316765');
        const button = cy.get('button').contains(/buscar/i).click();
    });

})