//Funcinalidades

/// <referece typess="cypress"/>

describe('Burcar dispositivos', ()=>{
//Cenários
    it('Cadastrar dispósitivo', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {  "name": "PC Gamer",
                    "data": {
                    "year": 2024,
                    "price": 3000,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                    }
                }
        })
        .then((response) => {
            console.log("minha resposta: ", response);
            expect(response.status).to.equal(200);
        })

    });

});


