CREATE OR REPLACE PROCEDURE SP_Insert_Pet(
    User_RUT INT, 
    name varchar(50),
    sex varchar(50), 
    age INT
)
LANGUAGE plpgsql 
AS $$
DECLARE 
    new_id INT;
BEGIN
    SELECT MAX(pet_id) + 1 INTO new_id FROM pets;
    INSERT INTO pets VALUES (new_id, name, sex, age, 1);
    INSERT INTO users_pets(User_RUT_FK, Pet_ID_FK) VALUES (User_RUT, new_id);
    RETURN;
END; $$

CREATE OR REPLACE PROCEDURE SP_create_user_account(
    _email text,
    _password text,
    _rol text,
    _rut int,
    _name text,
    _surname text,
    _phone int,
    _address text
)
LANGUAGE plpgsql 
AS $$
DECLARE 
    c_account_id int;
    c_rol_id int;
    c_address_id int;
    c_phone_id int;
BEGIN
    -- Obtener el id del rol ingresado
    SELECT rol_id INTO c_rol_id FROM roles WHERE name = _rol;

    -- Crear la cuenta de usuario
    INSERT INTO user_accounts(email, password, rol_id_fk) VALUES(_email, _password, c_rol_id) RETURNING account_id INTO c_account_id;

    -- Agregar la información personal del usuario a la bd enlazándolo a la cuenta del usuario por ID
    INSERT INTO users(rut, name, surname, user_account_id_fk) VALUES(_rut, _name, _surname, c_account_id);

    -- Agregar un nuevo numero de telefono y dirección a la bd y obtener sus id's
    INSERT INTO phones(phone) VALUES (_phone) RETURNING phone_id INTO c_phone_id;
    INSERT INTO addresses(address) VALUES(_address) RETURNING address_id INTO c_address_id;

    -- Enlazar el numero de telefono y la dirección con el usuario
    INSERT INTO users_phones(user_rut_fk, phone_id_fk) VALUES(_rut, c_phone_id);
    INSERT INTO users_addresses(user_rut_fk, address_id_fk) VALUES(_rut, c_address_id);
END;
$$;
