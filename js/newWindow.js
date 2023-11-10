document.addEventListener("DOMContentLoaded", function(){
    document.open();
    document.write(`
        <p>Ejemplo de ventana nueva</p>
        <iframe src="https://www.example.com" width="800" height="600"></iframe>
    `);
    document.close();
})