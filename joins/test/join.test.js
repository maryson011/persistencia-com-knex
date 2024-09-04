const dotenv = require('dotenv')
dotenv.config()
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

const configurar = require("../src/configuracao")
const join = require("../src/join")
const innerJoin = require("../src/innerJoin")
const leftJoin = require("../src/leftJoin")

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

test("Deve juntar as tabelas", async () => {
    const dados = await join(knex)
    expect(dados).toBeInstanceOf(Array)
    dados.forEach(dado=>{
        expect(dado).toHaveProperty("id")
        expect(dado).toHaveProperty("nome")
        expect(dado).toHaveProperty("id_usuario")
        expect(dado).toHaveProperty("titulo")
    })
})

test("Deve juntar as tabelas com inner join", async () => {
    const dados = await innerJoin(knex)
    expect(dados).toBeInstanceOf(Array)
    dados.forEach(dado=>{
        // expect(dado).toHaveProperty("id")
        expect(dado).toHaveProperty("autor")
        expect(dado).toHaveProperty("conteudo")
        expect(dado).toHaveProperty("titulo")
    })
})

test("Deve juntar as tabelas com left join", async () => {
    const dados = await leftJoin(knex)
    expect(dados).toBeInstanceOf(Array)
    dados.forEach(dado=>{
        expect(dado).toHaveProperty("autor")
        expect(dado).toHaveProperty("conteudo")
        expect(dado).toHaveProperty("titulo")
    })
})

afterAll(() => {
    knex.destroy()
})