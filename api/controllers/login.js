const Accounts = require('../models/accounts');
const Users = require('../models/users');

async function logInUser(req, res){
    console.log("En login");
    //Obtiene las credenciales enviadas por el cliente
    const { email, password } = req.body; 
    
    try {
        //Consulta las credenciales en la base de datos
        const isUser = await Accounts.getAccount(email, password);

        console.log(isUser);
        //Valida si hubo resultado o no
        if(!isUser.rows.length){
            //Si no hay resultado, no existe
            res.status(400).send("Correo o contraseña incorrectas");

        } else {
            //Si hay, existe
            //Obtiene el ID de la cuenta y el rol
            const ID = isUser.rows[0].account_id;
            const ROL = isUser.rows[0].rol_id_fk;
            //Crea el token de la sesión --
            //envia el token de la sesión al cliente --
            res.status(200).json({ token: ID, rolID: ROL })
        }
    } catch(e) {
        console.error(e.message)
    }
}; 

//Es un usuario de rol usuario general
async function registerUser(req, res){
    const { email, password, rut, name, surname, phone, address } = req.body;
    const rol = 'User';
    try {
        
        //Ejecutar procedimiento almacenado
        const x = await Users.createUser(email, password, rol, rut, name, surname, phone, address);
        console.log("x: "+ x);
        
        //Validar que se creo el usuario
        let result = await Accounts.getAccount(email, password)
        result = result.rows.length;

        if(!result){
            res.status(400).json({ message: "No se ha podido crear la cuenta de usuario" });
        } else {
            res.status(200).json({ message: "Se ha creado la cuenta de usaurio con éxito" });
        }
    } catch(e) {
        console.error(e.error);
    }
};

module.exports = {
    logInUser,
    registerUser,
};