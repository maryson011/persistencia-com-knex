const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

const criarTabela = require("../src/criarTabela")
const excluirTabela = require("../src/deletarTabela")

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

afterAll( () => {
    knex.destroy()
})