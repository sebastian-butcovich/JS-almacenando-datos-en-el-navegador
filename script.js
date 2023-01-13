import {addTask} from "./components/addTask.js"
import { readTask } from "./components/readTask.js";

const btn = document.querySelector('[data-form-btn]'); // Elemento boton para crear la tarea
//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask); // Agrego un evento de click y la funcion que atiende dicho evento del boton agregar tarea
readTask(); // LLama la funcion que obtiene lo que esta en localStorage, cada vez que reinicio la pagina 