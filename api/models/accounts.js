const pool = require('../index');

async function getAccount(email, password){
    const TEXT = `SELECT * FROM user_accounts WHERE email = $1 AND password = $2;`;
    const VALUES = [ email, password ]
    try {
        //Crear un nuevo cliente para consultas
        const client = await pool.connect();

        //Consultar por la cuenta
        const result = await client.query(TEXT, VALUES);
        
        //Destruir el cliente
        client.release(true);

        //Devolver el resultado de la consulta
        return result;
    } catch(e){
        throw new Error({ message: "Hubo un error al intentar obtener la cuenta del usuario", e });
    }
}

module.exports = {
    getAccount,
}