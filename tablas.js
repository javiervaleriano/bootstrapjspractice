const agregar = () => {
	let tabla = document.getElementById('tablaVideojuegos');
	let filaRef = tabla.getElementsByTagName('tbody')[0];
	let nuevaFila = filaRef.insertRow(filaRef.length).innerHTML = `<td>${document.getElementById('text-lanzamiento').value}</td><td>${document.getElementById('text-videojuego').value}</td><td>${document.getElementById('text-plataformas').value}</td><td><button type="button" class="btn btn-sm btn-danger" onclick="eliminar(this)">Eliminar</button></td>`;


	document.getElementById('text-lanzamiento').value = '';
	document.getElementById('text-videojuego').value = '';
	document.getElementById('text-plataformas').value = '';
}

const eliminar = boton => {
	let fila = boton.parentNode.parentNode;
	fila.parentNode.removeChild(fila);
}