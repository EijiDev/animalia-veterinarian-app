const petsRouter = require("express").Router();
const mdEnsureAuth = require("../middlewares/authentication"); //Validar el JWT del usuario para ver si su sesión es valida
const PetsController = require("../controllers/pets");

petsRouter.get('/pet/:petid', mdEnsureAuth, PetsController.getPet);

petsRouter.get('/pets', mdEnsureAuth, PetsController.getAllPets);

petsRouter.get('/:useraccountid/pets', mdEnsureAuth, PetsController.getUserPets);

petsRouter.get('/i/p/:petid/YXF1aW5vaGF5bmFkYXF1ZXRlaW50ZXJlc2VwYQ==', PetsController.getPetAlerta2);

petsRouter.post('/pet', mdEnsureAuth, PetsController.addPet);

petsRouter.put('/pet/:petid', mdEnsureAuth, PetsController.updatePet);

petsRouter.delete('/pet/:petid', mdEnsureAuth, PetsController.deletePet);


module.exports = petsRouter;