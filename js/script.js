function escrita(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    textArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra; 
        }, 75 * i);
    });
}

const titulo = document.getElementById('titulo');
escrita(titulo);
setInterval(() => {
    escrita(titulo);
}, 4000);
