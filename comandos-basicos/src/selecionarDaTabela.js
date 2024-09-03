module.exports = async (conexao) => {
    const dados = await conexao
    .select() // selecionar totdos os campos. O * é default
    // .select("titulo") // selecionar um único campo
    // .select(["id", "titulo", "autor"]) // selecionar multiplos campos
    .from("livros")
    return dados
}