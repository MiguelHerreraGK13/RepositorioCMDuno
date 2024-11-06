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

        nombre.textContent= "nombre"+ recetavegetariana.nombre
        ingredientes.textContent= "ingredientes" + recetavegetariana.ingredientes
        tiempoPreparacion.textContent= "tiempoPreparacion" + recetavegetariana.tiempoPreparacion
        dificultad.textContent= "dificultad" +recetavegetariana.dificultad
        tipoComida.textContent= "tipoComida" + recetavegetariana.tipoComida
        
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

        nombre.textContent= "nombre"+ recetaNoVegetariana.nombre
        ingredientes.textContent= "ingredientes" + recetaNoVegetariana.ingredientes
        tiempoPreparacion.textContent= "tiempoPreparacion" + recetaNoVegetariana.tiempoPreparacion
        dificultad.textContent= "dificultad" +recetaNoVegetariana.dificultad
        tipoComida.textContent= "tipoComida" + recetaNoVegetariana.tipoComida
})
}

export function FiltarPorNombre(value) {
    let recetas = recetasVegetarianas.filter((recetavegetariana)=>recetavegetariana.nombre==value)
    console.log(recetas)
    crearRecetasPorNombre(recetas)
    
}

function crearRecetasPorNombre(recetas) {
    document.getElementById('contenido').innerHTML=" "

    recetas.map((recetavegetariana)=>{
        let contenedor=document.createElement('div')
        let nombre=document.createElement('p')
        let ingredientes=document.createElement('ul')
        let tiempoPreparacion=document.createElement('p')
        let dificultad=document.createElement('p')
        let tipoComida=document.createElement('p')

        nombre.textContent= "nombre"+ recetavegetariana.nombre
        ingredientes.textContent= "ingredientes" + recetavegetariana.ingredientes
        tiempoPreparacion.textContent= "tiempoPreparacion" + recetavegetariana.tiempoPreparacion
        dificultad.textContent= "dificultad" +recetavegetariana.dificultad
        tipoComida.textContent= "tipoComida" + recetavegetariana.tipoComida
        
        contenedor.append(nombre,ingredientes,tiempoPreparacion,dificultad,tipoComida)
        document.getElementById('contenido').append(contenedor)

    })    
}

export function FiltrarPorTipo(value) {
    let recetas = recetasVegetarianas.filter((recetavegetariana)=>recetavegetariana.tipoComida==value)
    console.log(recetas)
    crearRecetasPortipo(recetas)
    
}

function crearRecetasPortipo(recetas) {
    document.getElementById('contenido').innerHTML=" "

    recetas.map((recetavegetariana)=>{
        let contenedor=document.createElement('div')
        let nombre=document.createElement('p')
        let ingredientes=document.createElement('ul')
        let tiempoPreparacion=document.createElement('p')
        let dificultad=document.createElement('p')
        let tipoComida=document.createElement('p')

        nombre.textContent= "nombre"+ recetavegetariana.nombre
        ingredientes.textContent= "ingredientes" + recetavegetariana.ingredientes
        tiempoPreparacion.textContent= "tiempoPreparacion" + recetavegetariana.tiempoPreparacion
        dificultad.textContent= "dificultad" +recetavegetariana.dificultad
        tipoComida.textContent= "tipoComida" + recetavegetariana.tipoComida
        
        contenedor.append(nombre,ingredientes,tiempoPreparacion,dificultad,tipoComida)
        document.getElementById('contenido').append(contenedor)

    })    
}
export function FiltrarPorDificultad(value) {
    let recetas = recetasVegetarianas.filter((recetavegetariana)=>recetavegetariana.dificultad==value)
    console.log(recetas)
    crearRecetasPorDificultad(recetas)
}

function crearRecetasPorDificultad(recetas) {
    document.getElementById('contenido').innerHTML=" "

    recetas.map((recetavegetariana)=>{
        let contenedor=document.createElement('div')
        let nombre=document.createElement('p')
        let ingredientes=document.createElement('ul')
        let tiempoPreparacion=document.createElement('p')
        let dificultad=document.createElement('p')
        let tipoComida=document.createElement('p')

        nombre.textContent= "nombre"+ recetavegetariana.nombre
        ingredientes.textContent= "ingredientes" + recetavegetariana.ingredientes
        tiempoPreparacion.textContent= "tiempoPreparacion" + recetavegetariana.tiempoPreparacion
        dificultad.textContent= "dificultad" +recetavegetariana.dificultad
        tipoComida.textContent= "tipoComida" + recetavegetariana.tipoComida
        
        contenedor.append(nombre,ingredientes,tiempoPreparacion,dificultad,tipoComida)
        document.getElementById('contenido').append(contenedor)

    })    
}
