/*document.getElementById('')*/

import { buscarUsuario } from "/controller/controllerUsuario.js";

document.getElementById('btnLoggin').addEventListener('click',loggin)
    function loggin(){ 
        if (buscarUsuario()) {
            window.location.href = '/view/page/home.html'  //redireccion a home con ruta absoluta o relativa, depende del servidor
        }else{
            console.log("error de credenciales");            
        }       
    }
    
    // console.log("iniciar Sesion");
    // console.log(usuario);
    // console.log(contrasena);
    // console.log(loggin);
 
/*funcion de expresion*/
/*sintaxis*/
/*let loggin=function(){
    let usuario = document.querySelector('#usuario');
    let contrasena= document.querySelector('#contraseña');

    console.log("iniciar Sesion");
}*/


