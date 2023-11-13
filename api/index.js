const { Pool } = require("pg");

const config = {
    user: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    port: 17364,
    password: '3G*C4bC*f612E1FbCdbbcGCAAa3cFb3C',
    database: 'railway',
}

const pool = new Pool(config);

//Interacción directa con bd
const p = async () => {
  const a = await pool.query(``);
  console.log(a);
};
// p();
module.exports = pool;