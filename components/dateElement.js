 export default (date)=>{
        const dateElement = document.createElement("li"); // Crea un elemento li
        dateElement.classList.add("date"); // Agrega la clase al elemento li
        dateElement.innerHTML = date; // Pone la fecha en el contenido del elemento li
        return dateElement; // Devuelve el elemento
}