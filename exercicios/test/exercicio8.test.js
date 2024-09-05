const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio8");

test("Deve criar o campo 'alugável' e setar pra falso pra todos os livros em primeira edição", async () => {
    await exercicio(knex);

    const colunaAlugavelExiste = await knex.schema.hasColumn("livros", "alugavel");
    const livrosNaoAlugaveis = await knex("livros").select().where("alugavel", 0);

    expect(colunaAlugavelExiste).toBeTruthy();
    livrosNaoAlugaveis.forEach((livro) => {
        expect(livro.edicao).toBe(1);
    });
});

afterAll(() => {
    knex.destroy();
});
