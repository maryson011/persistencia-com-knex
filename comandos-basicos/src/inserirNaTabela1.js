module.exports = async(conexao) => {
    const dados = await conexao.insert({
        titulo:"Livro legal",
        autor:"Fulano",
        edicao:2,
        preco:29.90
    }).into("livros")

    return dados
}