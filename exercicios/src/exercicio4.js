// Selecionar os nome dos estudantes e os titulos dos livros que
// eles alugaram. Retornar essa informação

module.exports = async (conexao) => {
    const data = await conexao("estudantes")
        // .leftJoin("alugueis", "alugueis.matricula_estudante", "=", "estudantes.matricula")
        // .leftJoin("livros", "alugueis.id_livro", "=", "livros.id")
        // .select("estudantes.nome", "livros.titulo")
        .join("alugueis", "alugueis.matricula_estudante", "=", "estudantes.matricula")
        .join("livros", "alugueis.id_livro", "=", "livros.id")
        .select("estudantes.nome", "livros.titulo")
    return data
}