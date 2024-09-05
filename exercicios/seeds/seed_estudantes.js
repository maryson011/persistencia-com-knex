const dados = require("./dados/dados_estudantes.json")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('estudantes').del()
  await knex('estudantes').insert(dados);
};
