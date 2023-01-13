const fecha = new Date();
console.log(fecha.toLocaleDateString('es-AR'));

const dataOption = {
    weekend: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}

const horarioOptions = {
    hour12:false,
    hour:"numeric",
    minute:"2-digit",
    seconds:"2-digit",
    timeZone:"America/Buenos_Aires"
}
console.log(fecha.toLocaleDateString('es-AR',dataOption));
console.log(fecha.toLocaleTimeString("es-AR",horarioOptions));