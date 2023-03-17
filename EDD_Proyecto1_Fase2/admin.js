// Método para cargar el archivo JSON
var graphText=""
var alumnos=[];
function loadJSON(callback) {
	var input = document.createElement('input');
	input.type = 'file';
	input.accept = '.json';
	input.onchange = function() {
		var file = this.files[0];
		var reader = new FileReader();
		reader.onload = function() {
			var data = JSON.parse(reader.result);
			alumnos = data.alumnos; // Actualizar la variable global con los datos de los alumnos
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
		var passCell = row.insertCell();
		carnetCell.innerHTML = alumno.carnet;
		nombreCell.innerHTML = alumno.nombre;
		carnetCell.innerHTML = alumno.carnet;
		passCell.innerHTML = alumno.password;
	}
}

// Función para cargar el archivo y actualizar la tabla
function loadFile() {
	loadJSON(updateTable);
}

//////////////////////////
class NodoAVL {
	constructor(valor,nombre, contraseña) {
	  this.valor = valor;
	  this.nombre = nombre;
	  this.contraseña = contraseña;
	  this.izquierdo = null;
	  this.derecho = null;
	  this.altura = 1;
	}
  }
  
  class AVL {
	constructor() {
	  this.raiz = null;
	}
  
	// Función auxiliar para calcular la altura de un nodo
	altura(nodo) {
	  if (nodo === null) {
		return 0;
	  }
	  return nodo.altura;
	}
  
	// Función auxiliar para obtener el factor de balance de un nodo
	balanceFactor(nodo) {
	  if (nodo === null) {
		return 0;
	  }
	  return this.altura(nodo.izquierdo) - this.altura(nodo.derecho);
	}
  
	// Función auxiliar para realizar una rotación hacia la izquierda
	rotacionIzquierda(nodo) {
	  const nodoDerecho = nodo.derecho;
	  const nodoIzquierdoSubArbolDerecho = nodoDerecho.izquierdo;
  
	  nodoDerecho.izquierdo = nodo;
	  nodoDerecho.nombre = nodo.nombre;
	  nodoDerecho.valor = nodo.valor;
	  nodoDerecho.contraseña = nodo.contraseña;
  
	  nodo.nombre = nodoIzquierdoSubArbolDerecho.nombre;
	  nodo.valor = nodoIzquierdoSubArbolDerecho.valor;
	  nodo.contraseña = nodoIzquierdoSubArbolDerecho.contraseña;
  
	  nodo.derecho = nodoIzquierdoSubArbolDerecho;
  
	  nodo.altura = Math.max(this.altura(nodo.izquierdo), this.altura(nodo.derecho)) + 1;
	  nodoDerecho.altura = Math.max(this.altura(nodoDerecho.izquierdo), this.altura(nodoDerecho.derecho)) + 1;
  
	  return nodoDerecho;
	}
  
	// Función auxiliar para realizar una rotación hacia la derecha
	rotacionDerecha(nodo) {
	  const nodoIzquierdo = nodo.izquierdo;
	  const nodoDerechoSubArbolIzquierdo = nodoIzquierdo.derecho;
	  nodoIzquierdo.derecho = nodo;
	  nodoIzquierdo.nombre = nodo.nombre;
	  nodoIzquierdo.valor = nodo.valor;
	  nodoIzquierdo.contraseña = nodo.contraseña;
  
	  nodo.nombre = nodoDerechoSubArbolIzquierdo.nombre;
	  nodo.valor = nodoDerechoSubArbolIzquierdo.valor;
	  nodo.contraseña = nodoDerechoSubArbolIzquierdo.contraseña;
  
	  nodo.izquierdo = nodoDerechoSubArbolIzquierdo;
  
	  nodo.altura = Math.max(this.altura(nodo.izquierdo), this.altura(nodo.derecho)) + 1;
	  nodoIzquierdo.altura = Math.max(this.altura(nodoIzquierdo.izquierdo), this.altura(nodoIzquierdo.derecho)) + 1;
  
	  return nodoIzquierdo;
	}
  
	// Función para insertar un nodo en el árbol AVL
	insertar(valor,nombre,contraseña) {
	  this.raiz = this.insertarNodo(this.raiz, valor,nombre,contraseña);
	}
  
	insertarNodo(nodo, valor,nombre,contraseña) {
	  // Si el nodo es nulo, lo creamos con el valor dado
	  if (nodo === null) {
		return new NodoAVL(valor,nombre,contraseña);
	  }
  
	  // Si el valor es menor que el valor del nodo actual, insertamos en el subárbol izquierdo
	  if (valor < nodo.valor) {
		nodo.izquierdo = this.insertarNodo(nodo.izquierdo, valor,nombre,contraseña);
	  }
  
	  // Si el valor es mayor que el valor del nodo actual, insertamos en el subárbol derecho
	  else if (valor > nodo.valor) {
		nodo.derecho = this.insertarNodo(nodo.derecho, valor,nombre,contraseña);
	  }
  
	  // Si el valor es igual al valor del nodo actual, no hacemos nada
	  else {
		return nodo;
		}
	// Actualizamos la altura del nodo actual
nodo.altura = 1 + Math.max(this.altura(nodo.izquierdo), this.altura(nodo.derecho));

// Calculamos el factor de balance del nodo actual
const factorBalance = this.balanceFactor(nodo);

// Si el factor de balance es mayor que 1, significa que el árbol está desequilibrado hacia la izquierda
if (factorBalance > 1) {
  // Si el valor a insertar es menor que el valor del nodo hijo izquierdo, realizamos una rotación hacia la derecha
  if (valor < nodo.izquierdo.valor) {
    return this.rotacionDerecha(nodo);
  }
  // Si el valor a insertar es mayor que el valor del nodo hijo izquierdo, realizamos una rotación izquierda-derecha
  else {
    nodo.izquierdo = this.rotacionIzquierda(nodo.izquierdo);
    return this.rotacionDerecha(nodo);
  }
}

// Si el factor de balance es menor que -1, significa que el árbol está desequilibrado hacia la derecha
if (factorBalance < -1) {
  // Si el valor a insertar es mayor que el valor del nodo hijo derecho, realizamos una rotación hacia la izquierda
  if (valor > nodo.derecho.valor) {
    return this.rotacionIzquierda(nodo);
  }
  // Si el valor a insertar es menor que el valor del nodo hijo derecho, realizamos una rotación derecha-izquierda
  else {
    nodo.derecho = this.rotacionDerecha(nodo.derecho);
    return this.rotacionIzquierda(nodo);
  }
}

// Si el factor de balance está entre -1 y 1, el árbol está equilibrado
return nodo;
	}
// Función para imprimir el árbol AVL
imprimir() {
	let graph = "digraph G {\n";
	graph += "node [fontname=\"Arial\"];\n";
	graph += this.imprimirNodo1(this.raiz);
	graph += "}";
	console.log(graph)
	return graph;
  }
  imprimirNodo1(nodo) {
	let graph = "";
	if (nodo !== null) {
	  graph += `"${nodo.valor} - ${nodo.nombre}\\n${nodo.altura}" [shape=rectangle, style=filled, fillcolor=white];\n`;
	  if (nodo.izquierdo !== null) {
		graph += `"${nodo.valor} - ${nodo.nombre}\\n${nodo.altura}" -> "${nodo.izquierdo.valor} - ${nodo.izquierdo.nombre}\\n${nodo.izquierdo.altu}";\n`;
	  }
	  if (nodo.derecho !== null) {
		graph += `"${nodo.valor} - ${nodo.nombre}\\n${nodo.altura}" -> "${nodo.derecho.valor} - ${nodo.derecho.nombre}\\n${nodo.derecho.altura}";\n`;
	  }
	  graph += this.imprimirNodo1(nodo.izquierdo);
	  graph += this.imprimirNodo1(nodo.derecho);
	}
	const miParrafo = document.getElementById("miParrafo");
	miParrafo.textContent = graph;
	// const image = Viz(graph, { format: "svg" });
	// const graphDiv = document.getElementById("graph");
	// Insertar la imagen SVG en el div
	// graphDiv.innerHTML = image;
	return graph;
  }
	
	imprimirNodo(nodo) {
	if (nodo !== null) {
	console.log("Carnet: " + nodo.valor + " - Nombre: " + nodo.nombre + " - Altura: " + nodo.altura+" - Contraseña: " + nodo.contraseña);
	this.imprimirNodo(nodo.izquierdo);
	this.imprimirNodo(nodo.derecho);
	}
	}
	}
function addprint(){
	const arbolAVL = new AVL();
	
	// Recorrer los datos de los alumnos y agregarlos al árbol AVL
	for (var i = 0; i < alumnos.length; i++) {
		arbolAVL.insertar(alumnos[i].carnet,alumnos[i].nombre,alumnos[i].password);
	}
	
	
// arbolAVL.insertar(10);
// arbolAVL.insertar(20);
// arbolAVL.insertar(30);
// arbolAVL.insertar(40);
// arbolAVL.insertar(50);
// arbolAVL.insertar(25);

arbolAVL.imprimir(); // Resultado esperado: 30, 20, 10, 25, 40, 50

}

//////////////////////////
// Evento para cargar el archivo al hacer clic en el botón correspondiente
var loadFileBtn = document.getElementById('loadFileBtn');
loadFileBtn.addEventListener('click', loadFile);
var reload = document.getElementById('btnreload');
reload.addEventListener('click', updateTable);
var avlvar = document.getElementById('avlload');
avlvar.addEventListener('click', addprint);
