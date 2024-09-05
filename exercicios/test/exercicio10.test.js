const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const exercicio = require("../src/exercicio10");

const contaElementosNaTabela = async (nomeTabela) => {
    const resposta = await knex(nomeTabela).count("*", { as: "qtde" });
    return resposta[0].qtde;
};
test("Deve inserir 4 novos alugueis", async () => {
    const alugueisIniciais = await contaElementosNaTabela("alugueis");
    await exercicio(knex);
    const alugueisFinais = await contaElementosNaTabela("alugueis");
    expect(alugueisFinais).toBe(alugueisIniciais + 4);
});

afterAll(() => {
    knex.destroy();
});
