module.exports = async (conexao) => {
    const data = await conexao("usuarios")
        .join("posts", "usuarios.id", "=", "posts.id_usuario")
        .select()
    return data
}