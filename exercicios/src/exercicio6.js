// selecionar todos os livros cuja edição é maior que 5

module.exports = async (conexao) => {
    const data = await conexao("livros")
        .select()
        .where("edicao", ">", "5")

    return data
}