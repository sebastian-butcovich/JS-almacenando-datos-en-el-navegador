import { createTask } from "./addTask.js";
import { uniquesDates } from "./services/date.js";
import dateElement from "./dateElement.js"
import { orderDate } from "./services/date.js";
export const displayTask = ()=>{ // Toma los elementos del localStorage y los agrega al elemento ul donde estan las tareas
    const list = document.querySelector('[data-list]') // Trae al elemento ul 
    const taskList = JSON.parse(localStorage.getItem("task")) || []; // Trae un arreglo de los datos guardado en la clave task en localStrorage
    const dates = uniquesDates(taskList); // Trae un vector con fechas
    orderDate(dates); // Ordena el vector dates
    dates.forEach(date =>{ // Para cada elemento de dates
        const dateMoment = moment(date,"DD/MM/YYYY"); //Crea un elemento date con un formato especifico
        list.appendChild(dateElement(date)); // Agrega un elemento li a la lista ul
        taskList.forEach((task)=>{ // Para cada elemento del arreglo de la clave task
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY"); // Le da un formato especifico a cada fecha de task
            const dif = dateMoment.diff(taskDate); // Se Ordena por fechas
            if(dif == 0)
            {
                list.appendChild(createTask(task)); // Crea y agrega  un elemento li a la lista ul
            }
        })
    })
   
}