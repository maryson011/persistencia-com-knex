// inserir 2 livros novos e 3 estudantes novos no banco

module.exports = async (conexao) => {
    await conexao("livros").insert([
        {id:34,titulo:"Novo livro 4",autor:"Scot Harvie",edicao:1},
        {id:35,titulo:"Novo livro 5",autor:"Scot Harvie",edicao:1},
    ])

    await conexao("estudantes").insert([
        {matricula:32003010,nome:"Novo estudante 4"},
        {matricula:32003091,nome:"Novo estudante 5"},
        {matricula:32003023,nome:"Novo estudante 6"},
    ])
}