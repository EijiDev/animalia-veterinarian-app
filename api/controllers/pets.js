const Users = require("../models/users");
const Pets = require("../models/pets");

function addPet(req, res){
    res.json(
        { 
            "name":"Tony", 
            "breed":"Husky",
            "age":3,
        }
    )
};

function getPet(req, res){
    res.json(
        { 
            "name":"Tony", 
            "breed":"Husky",
            "age":3,
        }
    )
};

function getAllPets(req, res){
    res.json(
        { 
            "name":"Tony", 
            "breed":"Husky",
            "age":3,
        }
    )
};

async function getUserPets(req, res){
    const userId = req.params.useraccountid;
    try {
        let user = await Users.getUserByID(userId);
        let userRut = user.rows[0].rut;
        console.log(user.rows[0].rut);

        const pets = await Pets.getPetsByRUT(userRut);

        console.log(pets);

        //Pasar todas las mascotas devueltas a un objeto transformable en JSON
        res.status(200).json(pets);
    } catch (e) {
        console.log(e);
    }
};

function updatePet(req, res){
    res.json(
        { 
            "name":"Tony", 
            "breed":"Husky",
            "age":3,
        }
    )
};

function deletePet(req, res){
    res.json(
        { 
            "name":"Tony", 
            "breed":"Husky",
            "age":3,
        }
    )
};




module.exports = { addPet, getPet, getAllPets, getUserPets, updatePet, deletePet };