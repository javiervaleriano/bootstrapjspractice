let txtNombre = document.getElementById('text-nombre');
let txtCorreo = document.getElementById('text-correo');
let checkEstudiante = document.getElementById('check-estudia');
let selectNiveles = document.getElementById('div-nivel-estudio');
let nivelEstudio = document.getElementById('select-nivel');


/* Va plasmando en el elemento con el id 'n-nombre'
* lo que se vaya escribiendo en el input del 'nombre' */
txtNombre.onkeyup = function() {
	document.getElementById('n-nombre').innerText = txtNombre.value;
}

// Dice si está, o no, enfocado el input del 'Correo'
txtCorreo.onfocus = function() {
	document.getElementById('enfoque').innerText = 'Entrada del correo enfocada.';
}
txtCorreo.onblur = function() {
	document.getElementById('enfoque').innerText = 'La entrada del correo ya no está enfocada.';
}

/* Sí el switch de estudiante está activado, muestra el
* elemento <select>, sino lo desaparece */
checkEstudiante.onchange = function() {
	if (checkEstudiante.checked) {
		selectNiveles.style.display = 'block';
	} else {
		selectNiveles.style.display = 'none';
	}
}

/* Notifica al usuario de su elección de nivel de estudio
*	en el elemento <select> del formulario */
selectNiveles.onchange = function() {
	alert(`Seleccionaste "${nivelEstudio.value}".`);
}

// Confirma si se llenaron los campos de 'Nombre' y 'Correo'.
let formulario = document.getElementById('formulario');
formulario.onsubmit = function() {
	if (txtNombre.value == '' || txtCorreo.value == '') {
		alert('Llena todos los campos, por favor.');
		return false;
	}
}


// Cambio de modo claro a oscuro y viceversa.
let botonOscuro = document.getElementById('modo-oscuro');
let estado = true;
botonOscuro.onclick = function clarOscuro() {
	let cuerpo = document.body;
	let titulo = document.getElementsByClassName('h1')[0];
	let labels = document.getElementsByTagName('label');
	let botonEnvio = document.getElementById('boton-envioform');
	let enlaces = document.getElementsByClassName('text-decoration-none');

	estado === true ? oscuro() : claro();

	// Cambia a modo oscuro
	function oscuro() {
		cuerpo.style.backgroundColor = '#7A7978';
		titulo.style.color = '#fff';

		for (let i = 0; i < labels.length; i++) {
			labels[i].style.color = '#fff';
		}

		document.getElementById('n-nombre').style.color = '#fff';
		document.getElementById('enfoque').style.color = '#fff';

		botonEnvio.classList.remove('btn-primary');
		botonEnvio.style.borderColor = '#2DC660';
		botonEnvio.style.color = '#fff';
		botonEnvio.style.backgroundColor = '#2DC660';

		botonOscuro.classList.replace('btn-outline-secondary', 'btn-outline-warning');
		botonOscuro.innerHTML = '<i class="fas fa-sun"></i> Modo claro';

		for (let j = 0; j < enlaces.length; j++) {
			enlaces[j].classList.remove('text-info');
			enlaces[j].style.color = '#2AE4A3';
		}

		estado = false;
	}

	// Cambia a modo claro
	function claro() {
		cuerpo.style.backgroundColor = '#fff';
		titulo.style.color = '#000';

		for (let i = 0; i < labels.length; i++) {
			labels[i].style.color = '#000';
		}

		document.getElementById('n-nombre').style.color = '#000';
		document.getElementById('enfoque').style.color = '#000';

		botonEnvio.classList.add('btn-primary');
		botonEnvio.attributes[botonEnvio.attributes.length-1].value = '';

		botonOscuro.classList.replace('btn-outline-warning', 'btn-outline-secondary');
		botonOscuro.innerHTML = '<i class="fas fa-moon"></i> Modo oscuro';

		for (let j = 0; j < enlaces.length; j++) {
			enlaces[j].classList.add('text-info');
		}

		estado = true;
	}
}