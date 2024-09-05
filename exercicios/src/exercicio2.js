// Selecionar todos os livros que nunca foram alugados
// Retornar ests livros

module.exports = async (conexao) => {
    const data = await conexao("livros")
        // .distinct("id", "titulo", "autor", "edicao")
        .select("livros.*")
        // .leftJoin("alugueis", "livros.id", "!=", "alugueis.id_livro")
        .leftJoin("alugueis", "livros.id", "=", "alugueis.id_livro")
        .whereNull("data_retirada")

    return data
}