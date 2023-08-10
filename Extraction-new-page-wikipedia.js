javascript:(function() {
    // Obtener todos los enlaces con la clase "new"
    var links = document.querySelectorAll('a.new');

    // Verificar si se encontraron enlaces con la clase "new"
    if (links.length > 0) {
        // Crear una lista ordenada de enlaces con la clase "new"
        var linkList = 'Enlaces con la clase "new":\n\n';
        for (var i = 0; i < links.length; i++) {
            linkList += (i + 1) + '. ' + links[i].href + '\n';
        }

        // Crear un archivo Blob y un enlace de descarga
        var blob = new Blob([linkList], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'enlaces_con_clase_new.txt';
        a.textContent = 'Descargar enlaces';
        a.style.display = 'none';

        // Agregar el enlace al cuerpo del documento y hacer clic en él para descargar el archivo
        document.body.appendChild(a);
        a.click();

        // Liberar el objeto URL
        URL.revokeObjectURL(url);
    } else {
        alert('No se encontraron enlaces con la clase "new".');
    }
})();
