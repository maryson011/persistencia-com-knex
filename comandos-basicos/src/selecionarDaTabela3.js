module.exports = async (conexao) => {
    const dados = await conexao("livros")
    .select()
    .whereNot("id", 1)
    // .whereIn("id", [32, 45, 14, 8, 4, 5, 2])
    // .whereNotIn("id", [32, 45, 14, 8, 4, 5, 2])
    // .whereBetween("preco", [2, 10])
    // .whereNotBetween("preco", [2, 10])
    // .whereNull("preco")
    // .whereNotNull("preco")
    // .andWhere("preco", ">", "3.00")
    .orWhere("preco", ">", "3.00")
    return dados
}