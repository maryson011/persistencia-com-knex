module.exports = async (conexao) => {
    const dados = await conexao("usuarios")
        .leftJoin("posts", "usuarios.id", "=", "posts.id_usuario")
        .select("usuarios.id", "usuarios.nome", conexao.raw("COUNT (posts.id) as qtde_posts"))
        .groupBy("usuarios.id")
        // .having("qtde_posts", ">", "1")
        // .havingRaw("qtde_posts > ?", [1])
        .havingBetween("id", [2, 3])
        // .havingNotBetween("id", [2, 3])
    console.log(dados)
    return dados
}