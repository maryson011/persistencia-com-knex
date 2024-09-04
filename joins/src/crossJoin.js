module.exports = async (conexao) => {
    const dados = await conexao("usuarios")
        .select()
        .crossJoin("posts")
    console.log(dados)
    return dados
}