module.exports = async (conexao) => {
    const dados = await conexao("livros")
    .select()
    // .where("autor", "autor 1") // selecionar pelo valor exato
    // .where("preco", "<", "10") // selecionar pelo resultado da expressão
    .where({
        edicao: 2,
        autor: "Fulano"
    }) 
    return dados
}