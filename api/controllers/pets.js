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

function getUserPets(req, res){
    res.json(
        { 
            "name":"Tony", 
            "breed":"Husky",
            "age":3,
        }
    )
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