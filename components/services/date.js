export const  uniquesDates = (task)=>{
    const unique = []; // Crea un vector vacio
    task.forEach((task)=>{ // Para cada elemento de task en el local storage
        if(!unique.includes(task.dateFormat)) // Pregunta si el elemento con una fecha en particular no se encuentra en el vector unique
        {
            unique.push(task.dateFormat); // si no esta lo agrega 
        }
    })
    return unique; // Devuelve un vector con fechas
};

export const orderDate= (dates)=>{ // Le llega un vector con fechas 
    return dates.sort((a,b) =>{ // Ordena el vector con fecha 
        const firtDate = moment(a,"DD/MM/YYYY");
        const secondDate = moment(b,"DD/MM/YYYY");
        return firtDate - secondDate;
    }) 

    
}