module.exports = async (conexao) => {
    const dados = await conexao("livros")
    .where("id", 5)
    .delete()

    return dados
}