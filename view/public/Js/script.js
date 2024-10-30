/*document.getElementById('')*/

import { buscarUsuario } from "/controller/controllerUsuario.js";
import { listarRecetasNoVegetarianas, listarRecetasVegetarianas, FiltarPorNombre,FiltrarPorDificultad,FiltrarPorTipo } from "../../../controller/controllerEvo.js";


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
let evo1=document.getElementById('evo1')
if (evo1){
    evo1.addEventListener('click',()=>{
    
        listarRecetasVegetarianas()
    })
} 

let evo2=document.getElementById('evo2')
if (evo2) {
    evo2.addEventListener('click',()=>{
        listarRecetasNoVegetarianas()
    })
} 

let cerrarSesion=document.getElementById('cerrarSesion')
if (cerrarSesion) {
    cerrarSesion.addEventListener('click',()=>{
        Window.location.href= '/index.html'
    })
}

    let inputs = document.querySelectorAll('form input')
    inputs.forEach((input)=>{
        input.addEventListener('keyup',(e)=>{
            switch (e.target.name) {
                    case 'nombre':
                    FiltarPorNombre(e.target.value)
                    break;
                    case 'dificultad':
                    FiltrarPorDificultad()
                    break;
                    case 'tipoRecerta':
                    FiltrarPorTipo()
                    break;
            } 
        })
    }) //se acostumbra que se haga en singular el parametro de la funcion


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


