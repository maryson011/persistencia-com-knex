const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio3");

test("Deve selecionar o número total de livros", async () => {
    const dados = await exercicio(knex);
    const qtde = Object.values(dados[0])[0];
    expect(qtde).toBe(30);
});

afterAll(() => {
    knex.destroy();
});
