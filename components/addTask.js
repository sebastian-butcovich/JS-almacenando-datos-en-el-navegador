import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento)=>{
    evento.preventDefault(); //? El preventDefault() método de la Eventinterfaz le dice al agente de usuario que si el evento no se maneja explícitamente, su acción predeterminada no debe tomarse como lo haría normalmente.
    const list = document.querySelector('[data-list]'); // Es un ul que contiene las tareas
    const input = document.querySelector('[data-form-input]'); // Trae el input donde escribo la tarea
    const calendar = document.querySelector('[data-form-date]') // Trae el input donde selecciono la fecha

    const value = input.value; // Guardo el valor de lo que escribi como tarea
    const date = calendar.value; // Guardo el valor de la fecha que ingrese
    const dateFormat = moment(date).format("DD/MM/YYYY"); // Guardo la fecha con otro formato

    if(value == "" || date == ""){ //Condiciona el agregado de tarea, sino se escribe la tarea o no se ingresa la fecha, no se crea una nueva tarea
        return;
    } 
    else{
        input.value = ''; //Vacio el cuadro donde ingrese la tarea
        calendar.value = ""; // Reinicio el cuadro donde selecciono la fecha

        const taskObj = { // Creo un objeto donde guardo la tarea y la fecha
            value,
            dateFormat
        }

        const taskList = JSON.parse(localStorage.getItem("task")) || [] ; // Obtengo el arreglo guardado en localStorage y la convierto en un objeto

        taskList.push({value,dateFormat}); // Ingreso la ultima tarea ingresada

        localStorage.setItem("task",JSON.stringify(taskList)); // Ingreso el arreglo actualizado en la localStorage

        const task = createTask(taskObj);  // LLamo una funcion para crear la tarea y le paso la ultimo datos ingresados
        list.appendChild(task); // Agrega la tarea
    }   
    
  
  }
  
  
  export const createTask = ({value,dateFormat}) => { // Crea  la tarea
    const task = document.createElement('li'); // Creo un elemento li
          task.classList.add('card'); // Le agrego la clas card al elemento li
    //backticks
    const taskContent = document.createElement('div'); // Creo un elemento div
   
    
    const titleTask = document.createElement('span'); // Creo un elemento span
        titleTask.classList.add('task'); // Agrego la clase task al elemento span
        titleTask.innerText = value; // Le agrego el contenido de value a la etiqueta span
        taskContent.appendChild(checkComplete()); // Agrego al elemento div un hijo checkbox
        taskContent.appendChild(titleTask); // Agreo al elemento div un hijo span
    
    const dateElement = document.createElement("span"); // Creo un elemento span
        dateElement.innerHTML=dateFormat; // Al elemento span le ingreso la fecha 
        task.appendChild(taskContent); // Agrego el div como hijo del elemento li
        task.appendChild(dateElement); // Agrego como hijo al elemento span con la fecha
        task.appendChild(deleteIcon()); // Agrego un icono de basura al elemento li
    return task; // Devuelvo el elemento li
  };