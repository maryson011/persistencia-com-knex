// contar quantos livros existem na tabela livros
// retornar a quantidade

module.exports = async (conexao) => {
    const data = await conexao("livros")
        .select(conexao.raw("COUNT (livros.id) as qtde_livros"))
    return data
}