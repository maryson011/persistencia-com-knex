const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio4");

test("Deve selecionar o nome dos estudantes e o título dos livros que eles alugaram", async () => {
    const dados = await exercicio(knex);
    expect(dados).toHaveLength(40);
    console.log(dados);
    dados.forEach((dado) => {
        expect(Object.keys(dado)).toHaveLength(2);
        expect(dado).toHaveProperty("nome");
        expect(dado).toHaveProperty("titulo");
    });
});

afterAll(() => {
    knex.destroy();
});
