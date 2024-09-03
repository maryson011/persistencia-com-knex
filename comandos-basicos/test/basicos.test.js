const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

const criarTabela = require("../src/criarTabela")
const excluirTabela = require("../src/deletarTabela")
const inserirNaTabela1 = require("../src/inserirNaTabela1")
const inserirNaTabela2 = require("../src/inserirNaTabela2")
const inserirNaTabela3 = require("../src/inserirNaTabela3")
const selecionarDaTabela1 = require("../src/selecionarDaTabela")
const selecionarDaTabela2 = require("../src/selecionarDaTabela2")
const selecionarDaTabela3 = require("../src/selecionarDaTabela3")
const fazerPaginacao = require("../src/fazerPaginacao")
const deletarDaTabela = require("../src/deletarDaTabela")
const alterarElementoDaTabela = require("../src/alterarElementoDaTabela")
const desafioCriarTabela = require("../src/desafioCriarTabela")
const desafioAdicionarPessoas = require("../src/desafioAdicionarPessoas")

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

test("Deve inserir outro elemento (#3) na tabela #3", async () => {
    const quantidadeAntes = await contaElementos("livros")

    await inserirNaTabela3(knex)

    const quantidadeDepois = await contaElementos("livros")

    expect(quantidadeDepois).toBe(quantidadeAntes+3)
})


test("Deve selecionar elementos da tabela", async () => {
    const dados = await selecionarDaTabela1(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})

test("Deve selecionar elemento da tabela com where", async () => {
    const dados = await selecionarDaTabela2(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})

test("Deve selecionar outros elemento da tabela com where", async () => {
    const dados = await selecionarDaTabela3(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})

test("Deve trazer uma pagina de dados", async () => {
    const dados = await fazerPaginacao(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})

test("Deve deletar elementos da tabela", async () => {
    const dados = await deletarDaTabela(knex)
    console.log(dados)
    expect(dados).toBeGreaterThan(0)
})

test("Deve alterar elemento de id 1 da tabela", async () => {
    const valorAntes = await knex("livros").select().first()
    await alterarElementoDaTabela(knex)
    const valorDepois = await knex("livros").select().first()
    expect(valorAntes.preco).not.toBe(valorDepois.preco)
    
})

test("Deve criar tabela conforme descrição do desafio", async () => {
    await desafioCriarTabela(knex)
    const tabelaPessoas = await knex.schema.hasTable("pessoas")
    expect(tabelaPessoas).toBe(true)
})

test("Deve inserir elementos da tabela pessoas conforme desafio", async () => {
    const qtdAntes = await contaElementos("pessoas")
    await desafioAdicionarPessoas(knex)
    const qtdDepois = await contaElementos("pessoas")
    expect(qtdDepois).toBe(qtdAntes+4)
})

afterAll( () => {
    knex.destroy()
})