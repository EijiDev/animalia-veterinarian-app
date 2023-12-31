const { query } = require("express");
const pool = require("../index");

async function getPetsByRUT(userRut){
    const TEXT = `SELECT tb.User_RUT_FK, ta.Pet_ID, ta.urlimage, ta.Name, ta.Sex, ta.Age, tc.Breed FROM pets AS ta INNER JOIN users_pets AS tb ON ta.Pet_ID = tb.Pet_ID_FK INNER JOIN breeds AS tc ON ta.Breed_ID_FK = tc.Breed_ID WHERE tb.User_RUT_FK = $1;`;

    try {
        const client = await pool.connect();

        const query = await client.query(TEXT, [userRut]);

        client.release(true);

        return query.rows;
    } catch (e) {
        console.log(e);
        throw new Error("No se pudo obtener las mascotas del usuario");
    }
}

async function getPetByID(userid){
    const TEXT = `SELECT td.name || ' ' || td.surname AS Owner, tb.User_RUT_FK, ta.Pet_ID, ta.Name, ta.Sex, ta.Age, tc.Breed, ta.status, ta.esterilizado FROM pets AS ta INNER JOIN users_pets AS tb ON ta.Pet_ID = tb.Pet_ID_FK INNER JOIN breeds AS tc ON ta.Breed_ID_FK = tc.Breed_ID INNER JOIN users AS td ON tb.User_RUT_FK = td.rut WHERE ta.pet_id = $1;`;
    try{
        const client = await pool.connect();

        const query = await client.query(TEXT, [userid]);

        client.release(true);

        return query.rows;
    }catch(e){
        throw new Error("Hubo un error al intentar obtener la mascota");
    }
};

module.exports = {
    getPetsByRUT,
    getPetByID,
};