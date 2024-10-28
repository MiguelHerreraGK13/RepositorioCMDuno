/*document.getElementById('')*/

import { buscarUsuario } from "/controller/controllerUsuario.js";
import { listarRecetasNoVegetarianas, listarRecetasVegetarianas } from "../../../controller/controllerEvo.js";


let btnIniciar=document.getElementById('btnLoggin')

if (btnIniciar) {
    document.getElementById('btnLoggin').addEventListener('click',loggin)
    function loggin(){ 
        if (buscarUsuario()) {
            window.location.href = '/view/page/home.html'  //redireccion a home con ruta absoluta o relativa, depende del servidor
        }else{
            console.log("error de credenciales");            
        }       
    }    
}

document.getElementById('evo1').addEventListener('click',()=>{
    
    listarRecetasVegetarianas()
})
document.getElementById('evo2').addEventListener('click',()=>{
    
    listarRecetasNoVegetarianas()
})
document.getElementById('cerrarSesion').addEventListener('click',()=>{
    Window.location.href= '/index.html'
})


    
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


