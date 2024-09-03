const dotenv = require('dotenv')
dotenv.config()
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

const configurar = require("../src/configuracao")

async function contaElementos(nomeTabela) {
    const dados = await knex(nomeTabela).count("*", {as:"qtde"})
    return dados[0].qtde
}

test("Deve conectar no bando", async () => {
    const dados = await knex.raw("SELECT 1")
    // console.log(dados)
    expect(dados).not.toBe(null)
})

test("deve fazer as configurações iniciais", async () => {
    await configurar(knex)
    const tabelaUsuariosExiste = await knex.schema.hasTable("usuarios")
    const tabelaPostsExiste = await knex.schema.hasTable("posts")
    const elementosTabelaUsuarios = await contaElementos("usuarios")
    const elementosTabelaPosts = await contaElementos("posts")

    expect(tabelaPostsExiste).toBe(true)
    expect(tabelaUsuariosExiste).toBe(true)
    expect(elementosTabelaUsuarios).toBe(3)
    expect(elementosTabelaPosts).toBe(3)
})

afterAll(() => {
    knex.destroy()
})