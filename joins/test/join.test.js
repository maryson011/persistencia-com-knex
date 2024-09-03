const dotenv = require('dotenv')
dotenv.config()
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

test("Deve conectar no bando", async () => {
    const dados = await knex.raw("SELECT 1")
    // console.log(dados)
    expect(dados).not.toBe(null)
})

afterAll(() => {
    knex.destroy()
})