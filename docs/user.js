user=""
nuser=""
function showAlert(message) {
    alert(message);
    user=message
    console.log(miVariableGlobal)
  }
  function mostrarTextoEnH2(texto) {
    const elementoH2 = document.getElementById("texto-bienvenida");
    elementoH2.innerText = texto;
    nuser=texto;
  }
// Clase que representa un nodo de la lista enlazada
class Nodo {
    constructor(carnet, carpetas) {
      this.carnet = carnet;
      this.carpetas = carpetas;
      this.siguiente = null;
    }
  }
  
  // Clase que representa la lista enlazada
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
      this.longitud = 0;
    }
    imprimir() {
        let nodoActual = this.cabeza;
    
        while (nodoActual !== null) {
          console.log(`Carnet: ${nodoActual.carnet}`);
          console.log("Carpetas:");
          console.log(nodoActual.carpetas);
          console.log("----------------------");
    
          nodoActual = nodoActual.siguiente;
        }
      }
  
    // Agrega un nuevo nodo al final de la lista
    agregar(carnet, carpetas) {
      const nuevoNodo = new Nodo(carnet, carpetas);
  
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
      } else {
        let nodoActual = this.cabeza;
  
        while (nodoActual.siguiente !== null) {
          nodoActual = nodoActual.siguiente;
        }
  
        nodoActual.siguiente = nuevoNodo;
      }
  
      this.longitud++;
    }
  
    // Devuelve el nodo en la posición indicada (0-indexado)
    obtener(posicion) {
      if (posicion < 0 || posicion >= this.longitud) {
        return null;
      }
  
      let nodoActual = this.cabeza;
      let indiceActual = 0;
  
      while (indiceActual < posicion) {
        nodoActual = nodoActual.siguiente;
        indiceActual++;
      }
  
      return nodoActual;
    }
  }
  
  // Clase que representa un árbol indexado de carpetas
  class ArbolIndexado {
    constructor() {
      this.carpetas = new Map();
    }
  
    // Agrega una nueva carpeta con el nombre indicado
    agregarCarpeta(nombreCarpeta) {
      this.carpetas.set(nombreCarpeta, new MatrizDispersa());
    }
  
    // Devuelve la carpeta con el nombre indicado, o null si no existe
    obtenerCarpeta(nombreCarpeta) {
      return this.carpetas.get(nombreCarpeta) || null;
    }
  }
  
  // Clase que representa una matriz dispersa de documentos
  class MatrizDispersa {
    constructor() {
      this.filas = new Map();
    }
  
    // Agrega un nuevo documento en la fila y columna indicadas
    agregarDocumento(fila, columna, documento) {
      if (!this.filas.has(fila)) {
        this.filas.set(fila, new Map());
      }
  
      this.filas.get(fila).set(columna, documento);
    }
  
    // Devuelve el documento en la fila y columna indicadas, o null si no existe
    obtenerDocumento(fila, columna) {
      const filaActual = this.filas.get(fila);
  
      return filaActual ? filaActual.get(columna) || null : null;
    }
  }
  
  
  // Función auxiliar para recorrer el árbol en orden
//   const lista = new ListaEnlazada();
 
  
  // Crear una nueva lista enlazada

  
  // Crear un primer nodo con datos de ejemplo
//   const carnet1 = "20210001";
//   const carpetas1 = new ArbolIndexado();
//   carpetas1.agregarCarpeta("Documentos");
//   carpetas1.obtenerCarpeta("Documentos").agregarDocumento(0, 0, "Documento 1");
//   carpetas1.obtenerCarpeta("Documentos").agregarDocumento(1, 1, "Documento 2");
//   lista.agregar(carnet1, carpetas1);
  
//   // Crear un segundo nodo con datos de ejemplo
//   const carnet2 = "20210002";
// console.log(miVariableGlobal);
document.getElementById("btnrep").addEventListener("click", cargarArbolDesdeLocalStorage());
