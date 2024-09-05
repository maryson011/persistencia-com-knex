// selecionar o livro mais alugado

module.exports = async (conexao) => {
    const data = await conexao("livros")
        .join("alugueis", "alugueis.id_livro", "=", "livros.id")
        .select("livros.titulo as titulo", conexao.raw("COUNT (alugueis.id_livro) as quantidade"))
        .groupBy("livros.titulo")
        .orderBy('quantidade', "desc")
        .first()

    return data
}