function validar() {
	let nombreApellido = document.getElementById('nombre').value;
	let radioButtons = document.getElementsByName('programar');
	let estudia = document.getElementById('estudia');
	let estudios = document.getElementById('estudios').value;
	let valorDeRadio = '';

	for (let i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			valorDeRadio = radioButtons[i].value;
		}
	}

	if (estudia.checked) {
		console.log(`${nombreApellido} ${valorDeRadio} sabe programar y estudia ${estudios}.`);
	} else {
		console.log(`${nombreApellido} ${valorDeRadio} sabe programar.\nNo estudia.`);
	}

	document.getElementById('nombre').value = '';
	estudia = document.getElementById('estudia');

	for (let i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			radioButtons[i].checked = false;
		}
	}

	if (estudia.checked) { estudia.checked = false; }
	document.getElementById('estudios').value = '';

	let primerNombre = nombreApellido.split(' ')[0];
	let primeraLetra = primerNombre[0].toUpperCase();
	let primero = primeraLetra+primerNombre.slice(1);

	alert(`${primero}, tus datos fueron enviados correctamente. Gracias.`);
}