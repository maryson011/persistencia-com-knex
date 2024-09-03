module.exports = async (conexao) => {
    await conexao("livros")
    .where("id", 1)
    .update({
        preco: 12.11
    })
}