import {displayTask} from "./readTask.js";
const deleteIcon = (id) => {
  const i = document.createElement('i'); // Creo un elemento i
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon'); // Agrego un serie de clase al elemento i que modifican su apariencia
  i.addEventListener('click',()=> deleteTask(id)); // Agrego un escuchador al elemento i con la funcion que atiende a ese evento, el evento se produce cuando alguien clickea al objeto
  return i; // Devuelvo el elemento i
};

const deleteTask = (id) => { // Funcion que atiende el evento generado al clickear el elemento i
  const li = document.querySelector("[data-list]");
  const tasks = JSON.parse(localStorage.getItem("task"));
  const index = tasks.findIndex((item)=>item.id == id);
  tasks.splice(id,1);
  tasks.splice(index,1);
  li.innerHTML = "";
  localStorage.setItem('task',JSON.stringify(tasks));
  displayTask();
};

export default deleteIcon; // Exporto la funcion deleteIcon
