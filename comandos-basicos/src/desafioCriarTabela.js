module.exports = async (conexao) => {
    if (await conexao.schema.hasTable("pessoas")) {
        return
    }
    await conexao.schema.createTable("pessoas", (tabela) => {
        tabela.increments("id").primary()
        tabela.string("nome").unique().notNullable()
        tabela.boolean("estaEmDia").notNullable().defaultTo(false)
    })
}