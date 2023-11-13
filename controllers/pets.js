const Users = require("../models/users");
const Pets = require("../models/pets");
const path = require("path");

function addPet(req, res){
    res.json(
        { 
            "name":"Tony", 
            "breed":"Husky",
            "age":3,
        }
    )
};

async function getPet(req, res){
    const petid = parseInt(req.params.petid);
    console.log(petid);
    try{
        const pet = await Pets.getPetByID(petid);

        res.json(pet);
    } catch(e){
        console.error(e);
    }
};

async function getPetAlerta2(req, res){
    try{
        const options = {
            root: path.join(__dirname, '..', 'public', 'views'),
        };

        res.status(200).sendFile('alerta2.html', options);
    } catch(e){
        console.error(e);
    }
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




module.exports = { addPet, getPet, getAllPets, getUserPets, updatePet, deletePet, getPetAlerta2 };