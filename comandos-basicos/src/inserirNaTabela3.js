module.exports = async(conexao) => {
    const dados = await conexao("livros").insert([
        {titulo:"Livro 1",autor:"autor 1",edicao:1,preco:3.99,},
        {titulo:"Livro 2",autor:"autor 2",edicao:2,preco:4.99,},
        {titulo:"Livro 3",autor:"autor 3",edicao:3,preco:5.99,},
    ])

    return dados
}