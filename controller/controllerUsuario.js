import { usuario } from "../model/modelUsuarios.js";

export function buscarUsuario() {
    let autenticacion = usuario.some((index) => {
        let usuario = document.querySelector('#usuario').value
        let contrasena = document.querySelector('#contraseña').value
        if (usuario == index.usuario && contrasena == index.contrasena) {
            return true
        }
        else {
            return false
        }
    })
    return autenticacion
}

