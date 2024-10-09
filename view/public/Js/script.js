/*document.getElementById('')*/

import { usuario } from "../../../model/modelUsuarios.js";

console.log(usuario);

usuario.map((index)=>{
    console.log(index);
})


document.getElementById('btnLoggin').addEventListener('click',loggin)



function loggin(){   
    let usuario = document.querySelector('#usuario').value
    let contrasena = document.querySelector('#contraseña').value
    if (usuario=='admin' && contrasena=='54321') {
        console.log('esta correto!');
        
    }
    else{
        console.log('usuario o contraseña no coinciden');
        
    }
    
    
    // console.log("iniciar Sesion");
    // console.log(usuario);
    // console.log(contrasena);
    // console.log(loggin);
    
    
    

}

/*funcion de espresion*/
/*sintaxis*/
/*let loggin=function(){
    let usuario = document.querySelector('#usuario');
    let contrasena= document.querySelector('#contraseña');

    console.log("iniciar Sesion");
}*/


