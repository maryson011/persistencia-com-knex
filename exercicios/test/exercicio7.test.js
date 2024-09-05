const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio7");

test("Deve selecionar todos os estudantes que alugaram o livro de id 12", async () => {
    const dados = await exercicio(knex);
    expect(dados).toHaveLength(4);
});

afterAll(() => {
    knex.destroy();
});
