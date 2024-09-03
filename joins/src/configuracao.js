module.exports = async (conexao) => {
    await conexao.schema.dropTableIfExists("usuarios")
    await conexao.schema.dropTableIfExists("posts")

    await conexao.schema.createTable("usuarios", (tabela) => {
        tabela.increments("id").primary()
        tabela.string("nome", 100).notNullable()
    })
    await conexao.schema.createTable("posts", (tabela) => {
        tabela.increments("id").primary()
        tabela.string("titulo").unique().notNullable()
        tabela.text("conteudo").notNullable()

        tabela.integer("id_usuario").unsigned().references("id").inTable("usuarios")
    })

    await conexao("usuarios").insert([
        {nome: "Cintia"},
        {nome: "Maria"},
        {nome: "Pedro"},
    ])

    await conexao("posts").insert([
        {titulo:"post 1",conteudo:"Primeiro post",id_usuario:1},
        {titulo:"post 2",conteudo:"Segundo post",id_usuario:1},
        {titulo:"post 3",conteudo:"Terceiro post",id_usuario:2},
    ])
}