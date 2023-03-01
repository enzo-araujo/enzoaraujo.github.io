//variables
const boton = document.querySelector('#boton')
const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const correo = document.querySelector('#correo')
const telefono  = document.querySelector('#telefono')

//funciones
const generarUsuario = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url)
    const {results} = await respuesta.json()
    const datos = results[0]
    console.log(datos)

    foto.src = datos.picture.medium
    nombre.textContent = datos.name.first
    apellido.textContent = datos.name.last
    correo.textContent = datos.email
    telefono.textContent = datos.phone
}

boton.addEventListener('click', generarUsuario)
document.addEventListener('DOMContentLoaded', generarUsuario)//Para cuando se cargue la pagina por 1era vez


//ejemplo 2
//async function consultar(){
//    let resultado = await fetch("https://randomuser.me/api/")
//                            .then(response => response.json())
//                            .then(data => data);
//    console.log(resultado.results[0].picture.medium)
//}
//
//consultar()

