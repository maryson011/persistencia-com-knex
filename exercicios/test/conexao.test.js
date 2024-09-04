const dotenv = require("dotenv")
dotenv.config()

const knexfile = require("../knexfile")
const knex = require("knex")(knexfile)

test("Deve conetar ao banco", async () => {
    const dados = knex.raw("SELECT 1")
    expect(dados).not.toBe(null)
})

afterAll(() => {
    knex.destroy()
})