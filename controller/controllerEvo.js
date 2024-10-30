import { recetasVegetarianas } from "../model/modelRecetas.js";
import { recetasNoVegetarianas } from "../model/modelRecetas.js";



export function listarRecetasVegetarianas() {
    document.getElementById('contenido').innerHTML=" "

    recetasVegetarianas.map((recetavegetariana)=>{
        let contenedor=document.createElement('div')
        let nombre=document.createElement('p')
        let ingredientes=document.createElement('ul')
        let tiempoPreparacion=document.createElement('p')
        let dificultad=document.createElement('p')
        let tipoComida=document.createElement('p')

        nombre.textContent= "nombre"+ recetasVegetarianas.nombre
        ingredientes.textContent= "ingredientes" + recetasVegetarianas.ingredientes
        tiempoPreparacion.textContent= "tiempoPreparacion" + recetasVegetarianas.tiempoPreparacion
        dificultad.textContent= "dificultad" +recetasVegetarianas.dificultad
        tipoComida.textContent= "tipoComida" + recetasVegetarianas.tipoComida
        
        contenedor.append(nombre,ingredientes,tiempoPreparacion,dificultad,tipoComida)
        document.getElementById('contenido').append(contenedor)

    }) //generalmente el parametro interno de la flecha en singular del arreglo ppal
}
export function listarRecetasNoVegetarianas() {
    recetasNoVegetarianas.map((recetaNoVegetariana)=>{
        let contenedor=document.createElement('div')
        let nombre=document.createElement('p')
        let ingredientes=document.createElement('ul')
        let tiempoPreparacion=document.createElement('p')
        let dificultad=document.createElement('p')
        let tipoComida=document.createElement('p')

        contenedor.append(nombre,ingredientes,tiempoPreparacion,dificultad,tipoComida)
        document.getElementById('contenido').append(contenedor)

        nombre.textContent= "nombre"+ recetasNoVegetarianas.nombre
        ingredientes.textContent= "ingredientes" + recetasNoVegetarianas.ingredientes
        tiempoPreparacion.textContent= "tiempoPreparacion" + recetasNoVegetarianas.tiempoPreparacion
        dificultad.textContent= "dificultad" +recetasNoVegetarianas.dificultad
        tipoComida.textContent= "tipoComida" + recetasNoVegetarianas.tipoComida
})
}

export function FiltarPorNombre(value) {
    let recetas = recetasVegetarianas.filter((recetavegetariana)=>recetasVegetarianas.nombre==value)
    console.log(recetas)
    
    
}

export function FiltrarPorTipo() {
    
}
export function FiltrarPorDificultad() {
    
}
