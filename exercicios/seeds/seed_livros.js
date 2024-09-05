const dados = require("./dados/dados_livros.json")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('livros').del()
  await knex('livros').insert(dados);
};
