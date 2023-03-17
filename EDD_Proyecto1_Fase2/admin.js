// Método para cargar el archivo JSON
function loadJSON(callback) {
	var input = document.createElement('input');
	input.type = 'file';
	input.accept = '.json';
	input.onchange = function() {
		var file = this.files[0];
		var reader = new FileReader();
		reader.onload = function() {
			var data = JSON.parse(reader.result);
			callback(data);
		};
		reader.readAsText(file);
	};
	input.click();
}

// Método para actualizar la tabla con los datos del archivo cargado
function updateTable(data) {
	var table = document.getElementById('dataTable');
	var tbody = table.getElementsByTagName('tbody')[0];
	tbody.innerHTML = '';
	for (var i = 0; i < data.alumnos.length; i++) {
		var alumno = data.alumnos[i];
		var row = tbody.insertRow();
		var carnetCell = row.insertCell();
		var nombreCell = row.insertCell();
		carnetCell.innerHTML = alumno.carnet;
		nombreCell.innerHTML = alumno.nombre;
	}
}

// Función para cargar el archivo y actualizar la tabla
function loadFile() {
	loadJSON(updateTable);
}

// Evento para cargar el archivo al hacer clic en el botón correspondiente
var loadFileBtn = document.getElementById('loadFileBtn');
loadFileBtn.addEventListener('click', loadFile);
var reload = document.getElementById('btnreload');
reload.addEventListener('click', updateTable(data));
var avlvar = document.getElementById('avlload');
avlvar.addEventListener('click', loadFile);
