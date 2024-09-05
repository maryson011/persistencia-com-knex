const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio1");

test("Deve selecionar os estudantes que ainda não entrgaram livros", async () => {
    const dados = await exercicio(knex);
    console.log(dados);
    expect(dados).toHaveLength(6);
});

afterAll(() => {
    knex.destroy();
});
