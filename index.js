const { Pool } = require("pg");

const config = {
    user: process.env.USER || 'postgres',
    host: process.env.HOST || 'monorail.proxy.rlwy.net',
    port: process.env.PORT || 16109,
    password: process.env.PASSWORD || 'CaBa5CgbFacg5DE3ad2CgeAgBD2GFe3C',
    database: process.env.DATABASE || 'railway',
}

const pool = new Pool(config);

//Interacción directa con bd
const p = async () => {
  const a = await pool.query(``);
  console.log(a);
};
// p();
module.exports = pool;