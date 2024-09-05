// Selecionar todos os estudantes que alugaram o livro de id 12

module.exports = async (conexao) => {
    const data = await conexao("estudantes")
        .join("alugueis", "alugueis.matricula_estudante", "=", "estudantes.matricula")
        .join("livros", "livros.id", "=", "alugueis.id_livro")
        .select()
        .where("livros.id", "=", "12")

    return data
}