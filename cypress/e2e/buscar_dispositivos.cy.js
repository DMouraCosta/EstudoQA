//Funcinalidades

/// <referece typess="cypress"/>

describe('Burcar dispositivos', ()=>{
//Cenários
    it('Listar dispsitivos especifico', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/1'
        })
        .then((response) => {
            console.log("minha resposta: ", response);
            expect(response.status).to.equal(200);
        })

    });

    it('Buscar dispositivo inexistente', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/n',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal('Oject with id=n was not found.');
        })
    });

});


