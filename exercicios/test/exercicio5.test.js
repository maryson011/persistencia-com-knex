const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio5");

test("Deve Selecionar o livro mais alugado", async () => {
    const dados = await exercicio(knex);
    console.log(dados);
    expect(dados).toHaveProperty("titulo");
    expect(dados).toHaveProperty("quantidade", 4);
});

afterAll(() => {
    knex.destroy();
});
