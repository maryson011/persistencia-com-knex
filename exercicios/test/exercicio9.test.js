const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio9");

const contaElementosNaTabela = async (nomeTabela) => {
    const resposta = await knex(nomeTabela).count("*", { as: "qtde" });
    return resposta[0].qtde;
};
test("Deve inserir 2 livros novos e 3 estudantes novos", async () => {
    const livrosIniciais = await contaElementosNaTabela("livros");
    const estudantesIniciais = await contaElementosNaTabela("estudantes");
    await exercicio(knex);
    const livrosFinais = await contaElementosNaTabela("livros");
    const estudantesFinais = await contaElementosNaTabela("estudantes");

    expect(livrosFinais).toBe(livrosIniciais + 2);
    expect(estudantesFinais).toBe(estudantesIniciais + 3);
});

afterAll(() => {
    knex.destroy();
});
