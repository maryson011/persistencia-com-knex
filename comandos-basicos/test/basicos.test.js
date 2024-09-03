const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

const criarTabela = require("../src/criarTabela")
const excluirTabela = require("../src/deletarTabela")
const inserirNaTabela1 = require("../src/inserirNaTabela1")
const inserirNaTabela2 = require("../src/inserirNaTabela2")
const inserirNaTabela3 = require("../src/inserirNaTabela3")

async function contaElementos(nomeTabela) {
    const resposta = await knex.raw(`SELECT COUNT(*) as qtde FROM ${nomeTabela}`)
    return resposta[0][0].qtde
}

test("Deve criar tabela", async () => {
    await criarTabela(knex)
    const tabelaExiste = await knex.schema.hasTable("livros")
    expect(tabelaExiste).toBe(true)
})

test("Deve deletar tabela", async () => {
    await excluirTabela(knex)
    const tabelaExiste = await knex.schema.hasTable("livros")
    expect(tabelaExiste).toBe(false)
})

test("Deve inserir na tabela", async () => {
    const dados = await inserirNaTabela1(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
    expect(dados).toHaveLength(1)
})

test("Deve inserir outro elemento na tabela", async () => {
    const dados = await inserirNaTabela2(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
    expect(dados).toHaveLength(1)
})

test("Deve inserir outro elemento na tabela #3", async () => {
    const quantidadeAntes = await contaElementos("livros")

    await inserirNaTabela3(knex)

    const quantidadeDepois = await contaElementos("livros")

    expect(quantidadeDepois).toBe(quantidadeAntes+3)
})

afterAll( () => {
    knex.destroy()
})