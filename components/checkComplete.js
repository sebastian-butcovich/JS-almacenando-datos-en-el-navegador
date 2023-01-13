const checkComplete = () => {
  const i = document.createElement('i'); // Creo un elemento i
  i.classList.add('far', 'fa-check-square', 'icon'); // Agrego un conjunto de clases al elemento i
  i.addEventListener('click', completeTask); // Agrego un escuchador de evento al elemento i
  return i; // Retorno el elemento i
};
// Immediately invoked function expression IIFE
const completeTask = (event) => { // Funcion que atiende el evento generado al hacer click sobre el elemento i
  const element = event.target;  // Referencia al objeto en el cual se lanzo el evento, eso quiere decir que me da el objeto
  element.classList.toggle('fas'); // Agrego un serie de clases al objeto para que cambie su apariencia
  element.classList.toggle('completeIcon'); //""
  element.classList.toggle('far');// ""
};

export default checkComplete; // Exporto la funcion checkComplete 
