function loginController(req, res){
    //Validación de las credenciales

    //Si las credenciales son incorrectas responde con 200

    //Si son correctas crea el token con la información necesaria para autenticar la sesión del usuario en el futuro y lo envia al cliente
    res.json({ "id":1 });
}; 

module.exports = loginController;