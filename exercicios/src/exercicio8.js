// Criar um novo campo chamado "alugavel" na tabela livros e setar esse 
// campo para falso em todos os livros que estiverem na primeira edição

module.exports = async (conexao) => {
    // await conexao.schema.alterTable("livros", (tabela) => {
    //     tabela.boolean("alugavel")
    // })

    await conexao("livros").where("edicao", "=", "1")
        .update({ alugavel: false })
}