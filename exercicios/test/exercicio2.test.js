const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio2");

test("Deve selecionar todos os dados de todos os livros que ainda não foram alugados", async () => {
    const dados = await exercicio(knex);
    console.log(dados);
    expect(dados).toHaveLength(11);
    dados.forEach((dado) => {
        expect(dado).toHaveProperty("id");
        expect(dado).toHaveProperty("titulo");
        expect(dado).toHaveProperty("autor");
        expect(dado).toHaveProperty("edicao");
    });
});

afterAll(() => {
    knex.destroy();
});
