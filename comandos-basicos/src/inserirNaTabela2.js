module.exports = async(conexao) => {
    const dados = await conexao("livros").insert({
        titulo:"Livro do Ano",
        autor:"Zé",
        edicao:1
    })
    return dados
}