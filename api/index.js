const { Pool } = require("pg");

const config = {
    user: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    port: 53247,
    password: 'Fc3e1F4Fg6G*EC1C-aga*cG32AG23Bdc',
    database: 'railway',
}

const pool = new Pool(config);

//Interacción directa con bd
const p = async () => {
  const a = await pool.query(`SELECT * FROM pets;`);
  console.log(a);
};
p();
module.exports = pool;