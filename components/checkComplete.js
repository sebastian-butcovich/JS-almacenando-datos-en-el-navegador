const checkComplete = (id) => {
  const i = document.createElement('i'); // Creo un elemento i
  i.classList.add('far', 'fa-check-square', 'icon'); // Agrego un conjunto de clases al elemento i
  i.addEventListener('click', (evento)=> completeTask(evento,id)); // Agrego un escuchador de evento al elemento i
  return i; // Retorno el elemento i
};
// Immediately invoked function expression IIFE
const completeTask = (event,id) => { // Funcion que atiende el evento generado al hacer click sobre el elemento i
  const element = event.target;  // Referencia al objeto en el cual se lanzo el evento, eso quiere decir que me da el objeto
  element.classList.toggle('fas'); // Agrego un serie de clases al objeto para que cambie su apariencia
  element.classList.toggle('completeIcon'); //""
  element.classList.toggle('far');// ""
  const tasks = JSON.parse(localStorage.getItem('task'));
  const index = tasks.findIndex(item => item.id == id);
  tasks[index]["complete"] = !tasks[index]["complete"];
  localStorage.setItem("task",JSON.stringify(tasks));
};

export default checkComplete; // Exporto la funcion checkComplete 
