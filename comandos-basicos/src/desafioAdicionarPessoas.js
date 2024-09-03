module.exports = async (conexao) => {
    const dados = await conexao("pessoas").insert([
        {nome: "Maria", estaEmDia: true},
        {nome: "Paulo"},
        {nome: "Ricardo"},
        {nome: "Magali", estaEmDia: true},
    ])
    return dados
}