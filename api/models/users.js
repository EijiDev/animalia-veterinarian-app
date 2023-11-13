const pool = require("../index");

//Crear y ejecutar un procedimiento almacenado
async function createUser(email, password, rol, RUT, name, surname, phone, address){
    const TEXT = `CALL SP_create_user_account($1, $2, $3, $4, $5, $6, $7, $8);`; 
    const VALUES = [ email, password, rol, parseInt(RUT), name, surname, parseInt(phone), address ];

    try{
        const client = await pool.connect();

        const result = await client.query(TEXT, VALUES);
        
        client.release(true);

        return result;
    } catch(e){
        throw new Error(e.error);
    }
}

module.exports = {
    createUser,
}
