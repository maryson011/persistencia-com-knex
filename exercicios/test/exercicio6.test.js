const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio6");

test("Deve selecionar os livros cuja edição seja maior que 5", async () => {
    const dados = await exercicio(knex);
    expect(dados).toHaveLength(13);
    dados.forEach((dado) => {
        expect(dado.edicao).toBeGreaterThan(5);
    });
});

afterAll(() => {
    knex.destroy();
});
