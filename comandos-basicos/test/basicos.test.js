const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

const criarTabela = require("../src/criarTabela")
const excluirTabela = require("../src/deletarTabela")
const inserirNaTabela1 = require("../src/inserirNaTabela1")

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

afterAll( () => {
    knex.destroy()
})