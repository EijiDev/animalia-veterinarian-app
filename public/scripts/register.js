const button = document.getElementById('register-button');

button.addEventListener('click', async (e) => {
    e.preventDefault();

    //Extrae los valores de los campos
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let rut = document.getElementById('rut').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    
    //Creo un objeto data que contendra las credenciales a enviar
    let data = { 
        email,
        password,
        name,
        surname,
        rut: parseInt(rut),
        phone: parseInt(phone),
        address
    };

    try {
        //Permite saber el estado de la solicitud
        console.log("Enviando solicitud🧠");
        let request = await fetch('http://localhost:3000/api/v1/register', {
            method: "POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(data),
        });
        console.log("Respuesta recibida!😀")

        //Transforma la respuesta del servidor de JSON a un objeto JS
        const response = await request.json();

        console.log(response) //Imprimir la respuesta del servidor

        location.href = 'http://localhost:3000/';
    }catch(error){
        //Imprime un error en caso de que la petición falle
        console.error('Error al obtener los datos:', error);
    }

});