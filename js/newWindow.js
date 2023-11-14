document.addEventListener("DOMContentLoaded", function(){
    document.open();
    document.write(`
    <h2>Ejemplo de nueva ventana</h2>
        <p>
        <b>URL completa:</b> ${window.location.href} <br>
        <b>Protocolo utilizado:</b> ${window.location.protocol} <br>
        </p>
        <iframe src="https://hotellallastra.app/inicio" height="600" width="800"></iframe>
    `);
    document.close();
});