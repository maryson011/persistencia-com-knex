const dados = require("./dados/dados_alugueis.json")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('alugueis').del()
  await knex('alugueis').insert(dados);
};
