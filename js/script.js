let databaseUser = []


const mostrar = () => {
    var card = document.getElementById('card')


    card.style.display = "block"


}


const guardarInfo = () => {
    // darle las referencias a los elementos del DOM
    var userNameElement = document.getElementById('user');
    var userPasswordElement = document.getElementById('userPassword');
    var saveUserElement = document.getElementById('stayLogged');

    // Obtener los valores de los elementos
    var btnLogin = 'btnLogin';
    var userName = userNameElement.value;
    var userPassword = userPasswordElement.value;
    var saveUser = saveUserElement.checked;

    // Crear un objeto user y asignar valores
    var user = {
        btnLogin: btnLogin,
        userName: userName,
        userPassword: userPassword,
        saveUser: saveUser
    };

    // Agregar el objeto user a la base de datos
    databaseUser.push(user);

    // Limpiar los campos de entrada
    userNameElement.value = '';
    userPasswordElement.value = '';

    // Hacer algo con la información, como mostrarla en la página
    var card = document.getElementById('card');
    var userDiv = document.createElement('div');
    userDiv.textContent = `Usuario: ${user.userName}, Contraseña: ${user.userPassword}, Guardar usuario: ${user.saveUser}`;
    card.append(userDiv);

    console.log(user);
};



