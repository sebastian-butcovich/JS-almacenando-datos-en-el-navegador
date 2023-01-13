const deleteIcon = () => {
  const i = document.createElement('i'); // Creo un elemento i
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon'); // Agrego un serie de clase al elemento i que modifican su apariencia
  i.addEventListener('click', deleteTask); // Agrego un escuchador al elemento i con la funcion que atiende a ese evento, el evento se produce cuando alguien clickea al objeto
  return i; // Devuelvo el elemento i
};

const deleteTask = (event) => { // Funcion que atiende el evento generado al clickear el elemento i
  const parent = event.target.parentElement; // Obtengo el elemento padre del elemento i
  parent.remove(); // Remuevo el elemento li que contiene la tarea
};

export default deleteIcon; // Exporto la funcion deleteIcon
