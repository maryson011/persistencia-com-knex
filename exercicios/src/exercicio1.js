// selecionar o nome dos estudantes que não devolveram livro
module.exports = async (conexao) => {
    const data = await conexao("estudantes")
        .select("estudantes.nome")
        .leftJoin("alugueis", "estudantes.matricula", "=", "alugueis.matricula_estudante")
        .whereNull("data_retorno")

    return data
}