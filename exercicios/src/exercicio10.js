// Inserir 4 alugueis novos

module.exports = async (conexao) => {
    await conexao("alugueis").insert([
        {id_livro: 31, matricula_estudante: 32003010},
        {id_livro: 32, matricula_estudante: 32003091},
        {id_livro: 33, matricula_estudante: 32003010},
        {id_livro: 34, matricula_estudante: 32003091},
    ])
}