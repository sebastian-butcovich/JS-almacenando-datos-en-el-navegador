import { createTask } from "./addTask.js";
export const readTask = ()=>{ // Toma los elementos del localStorage y los agrega al elemento ul donde estan las tareas
    const list = document.querySelector('[data-list]') // Trae al elemento ul 
    const taskList = JSON.parse(localStorage.getItem("task")) || []; // Trae un arreglo de los datos guardado en la clave task en localStrorage

    taskList.forEach((task)=>{ // Para cada elemento del arreglo de la clave task
        list.appendChild(createTask(task)); // Crea y agrega  un elemento li a la lista ul
    })
}