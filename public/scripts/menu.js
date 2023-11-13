(async () => {
    const petsBox = document.getElementById('petsBox'); 

    //Obtener el id del usuario de la sesión actual
    const token = localStorage.getItem('token');

    //Configurar cabecera y contenido de la petición
    let pets = await fetch(`http://localhost:3000/api/v1/${token}/pets`, {
        headers:{
            "authorization": token,
        }
    });

    pets = await pets.json();

    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('animales');
        const petImage = document.createElement('img');
        petImage.src = pet.urlimage;
        petImage.classList.add('animal');
        const petName = document.createElement('h3');
        petName.textContent = pet.name;
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-pen-to-square')
        petCard.appendChild(petImage);
        petCard.appendChild(petName);
        petCard.appendChild(icon);

        console.log(pet);
        petsBox.appendChild(petCard)
    });

})()

const addPetBtn = document.getElementById('corazon');

addPetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    location.href = 'http://localhost:3000/addpet';
});