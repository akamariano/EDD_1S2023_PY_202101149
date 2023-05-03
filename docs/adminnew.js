class nodoHash{
    constructor(carnet, usuario, password){
        this.carnet = carnet
        this.usuario = usuario
        this.password = password
    }
}

class TablaHash{
    constructor(){
        this.tabla = new Array(7)
        this.capacidad = 7
        this.utilizacion = 0
    }

    insertar(carnet, usuario, password){
        let indice = this.calculoIndice(carnet)
        const nuevoNodo = new nodoHash(carnet, usuario, password)
        if(indice < this.capacidad){
            try{
                if(this.tabla[indice] == null){
                    console.log("Entre")
                    this.tabla[indice] = nuevoNodo
                    this.utilizacion++
                    this.capacidad_tabla()
                }else{
                    let contador = 1
                    indice = this.RecalculoIndice(carnet,contador)
                    while(this.tabla[indice] != null){
                        contador++
                        indice = this.RecalculoIndice(carnet, contador)
                    }
                    this.tabla[indice] = nuevoNodo
                    this.utilizacion++
                    this.capacidad_tabla()
                }
            }catch(err){
                console.log("Hubo un error en insercion")
            }
        }
    }

    calculoIndice(carnet){ 
        let carnet_cadena = carnet.toString()
        let divisor = 0
        for(let i = 0; i < carnet_cadena.length; i++){
            divisor = divisor + carnet_cadena.charCodeAt(i)
        }
        let indice_final = divisor % this.capacidad
        return indice_final
    }

    capacidad_tabla(){
        let aux_utilizacion = this.capacidad*0.75
        if(this.utilizacion > aux_utilizacion){
            this.capacidad = this.nueva_capacidad()
            this.utilizacion = 0
            this.ReInsertar()
        } 
    }
    isPrime(numero) {
        if (numero <= 1) {
            return false
        }
        if (numero === 2) {
            return true
        }
        if (numero % 2 === 0) {
            return false
        }
        for (let i = 3; i <= Math.sqrt(numero); i += 2) {
            if (numero % i === 0) {
                return false
            };
        }
        return true;
    }
    nueva_capacidad(){ //Sustituir por un algoritmo del siguiente numero primo
        let numero = this.capacidad + 1;
        while (!this.isPrime(numero)) {
            numero++;
        }
        console.log(numero)
        return numero;
    }

    ReInsertar(){
        const auxiliar_tabla = this.tabla
        this.tabla = new Array(this.capacidad)
        auxiliar_tabla.forEach((alumno) => {
            this.insertar(alumno.carnet, alumno.usuario, alumno.password)
        })
    }

    RecalculoIndice(carnet, intento){
        let nuevo_indice = this.calculoIndice(carnet) + intento*intento
        let nuevo = this.nuevo_Indice(nuevo_indice)
        return nuevo
    }

    nuevo_Indice(numero){
        let nueva_posicion = 0
        if(numero < this.capacidad){
            nueva_posicion = numero
        }else{
            nueva_posicion = numero - this.capacidad
            nueva_posicion = this.nuevo_Indice(nueva_posicion)
        }
        return nueva_posicion
    }

    busquedaUsuario(carnet){
        let indice = this.calculoIndice(carnet);
        if(indice < this.capacidad){
            try{
                if(this.tabla[indice] != null && this.tabla[indice].carnet == carnet){
                    alert("Datos: " + this.tabla[indice].usuario +" Carnet: "+ this.tabla[indice].carnet);
                } else {
                    let contador = 1;
                    indice = this.RecalculoIndice(carnet,contador);
                    while(indice < this.capacidad && this.tabla[indice] != null){
                        if(this.tabla[indice].carnet == carnet){
                            alert("Datos: " + this.tabla[indice].usuario+" Carnet: "+ this.tabla[indice].carnet);
                            return;
                        }
                        contador++;
                        indice = this.RecalculoIndice(carnet, contador);
                    }
                }
            } catch(err) {
                console.log("Hubo un error en busqueda");
            }
        }
    }

    /**
     * Este codigo es un extra para generar una tabla 
     */

    genera_tabla() {
        // Obtener la referencia del elemento body
        var body = document.getElementsByTagName("body")[0];
      
        // Crea un elemento <table> y un elemento <tbody>
        var divtable = document.createElement("div");
        
        var tabla   = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var salto_html = document.createElement("br")
        divtable.className = "container"
        tabla.className = "table"
        tabla.style.backgroundColor = "#265f70";
        //carnet
        var encabezado = document.createElement("tr")
        var celda_encabezado = document.createElement("td");
        celda_encabezado.style.color = "white";
        celda_encabezado.style.fontFamily = "Arial";
        var encabezado_contenido = document.createTextNode("Carnet")
        celda_encabezado.appendChild(encabezado_contenido);
        encabezado.appendChild(celda_encabezado)
        tblBody.appendChild(encabezado)
        //Nombre
        celda_encabezado = document.createElement("td");
        celda_encabezado.style.color = "white";
        celda_encabezado.style.fontFamily = "Arial";
        encabezado_contenido = document.createTextNode("Nombre")
        celda_encabezado.appendChild(encabezado_contenido);
        encabezado.appendChild(celda_encabezado)
        tblBody.appendChild(encabezado)
        //Password
        celda_encabezado = document.createElement("td");
        celda_encabezado.style.color = "white";
        celda_encabezado.style.fontFamily = "Arial";
        encabezado_contenido = document.createTextNode("Password")
        celda_encabezado.appendChild(encabezado_contenido);
        encabezado.appendChild(celda_encabezado)
       
        tblBody.appendChild(encabezado)

        for(var i = 0; i < this.capacidad; i++){
            if(this.tabla[i] != null){
                var hilera = document.createElement("tr");
                var arreglo = new Array(3)
                arreglo[0] = this.tabla[i].carnet
                arreglo[1] = this.tabla[i].usuario
                arreglo[2] = this.tabla[i].password
                for(var j = 0; j < 3; j++){
                    var celda = document.createElement("td");
                    celda.style.color = "white";
                    celda.style.fontFamily = "Arial";
                    var textoCelda = document.createTextNode(arreglo[j]);
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                tblBody.appendChild(hilera);
            }
        }


        divtable.appendChild(tabla)
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(salto_html);
        body.appendChild(divtable);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        tabla.setAttribute("border", "2");
    }

    isPrime(numero) {
        if (numero <= 1) {return false}
        if (numero === 2) {return true}
        if (numero % 2 === 0) {return false}
        for (let i = 3; i <= Math.sqrt(numero); i += 2) {
          if (numero % i === 0) {return false};
        }
        return true;
    }

}

tablaHash = new TablaHash()

// const inputElement = document.getElementById("input");
// inputElement.addEventListener("change", onChange, false);
// function onChange(event) {
//     var reader = new FileReader();
//     reader.onload = onReaderLoad;
//     reader.readAsText(event.target.files[0]);
// }
document.addEventListener("DOMContentLoaded", function() {
    onReaderLoad();
  });
  function caesarCipher(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const n = alphabet.length;
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const index = alphabet.indexOf(char);
  
      if (index !== -1) {
        const newIndex = (index + shift) % n;
        result += alphabet[newIndex];
      } else {
        result += char;
      }
    }
  
    return result;
  }
  function guardarTablaHashEnLocalStorage(tablaHash) {
    const tablaHashSerializada = JSON.stringify(tablaHash.tabla);
    localStorage.setItem('tablaHash', tablaHashSerializada);
}
  function cargarTablaHashDesdeLocalStorage() {
    const tablaHashSerializada = localStorage.getItem('tablaHash');
    if (tablaHashSerializada) {
        const tablaHashData = JSON.parse(tablaHashSerializada);
        const nuevaTablaHash = new TablaHash();
        nuevaTablaHash.tabla = tablaHashData;
        nuevaTablaHash.capacidad = tablaHashData.length;
        nuevaTablaHash.utilizacion = tablaHashData.filter(nodo => nodo !== null).length;
        return nuevaTablaHash;
    }
    return null;
}
  function encrypt(password, shift = 3) {
    return caesarCipher(password, shift);
  }
  
  function decrypt(encrypted, shift = 3) {
    return caesarCipher(encrypted, -shift);
  }
  function onReaderLoad() {
    if (cargarTablaHashDesdeLocalStorage()==null){
    var obj = obtenerArrayDesdeLocalStorage();
    console.log("AA" + obtenerArrayDesdeLocalStorage())
    for (var elemento of obj) {
        console.log("Carnet:", elemento.carnet);
        // console.log("Nombre:", elemento.nombre);
        console.log("Contraseña:", elemento.contraseña);
        passencoded=encrypt(elemento.contraseña)
       
        tablaHash.insertar(elemento.carnet, elemento.nombre, passencoded);
      }
    console.log(tablaHash.tabla);
    tablaHash.genera_tabla();
    guardarTablaHashEnLocalStorage(tablaHash);
}
else{
    tablaHash=cargarTablaHashDesdeLocalStorage()
    tablaHash.genera_tabla();
    crearTabla(recuperarArregloDeLocalStorage2());
    guardarTablaHashEnLocalStorage(tablaHash);
}
  }
function busqueda(){
    let carnet = document.getElementById("valor").value;
    tablaHash.busquedaUsuario(carnet)
}
function recuperarArregloDeLocalStorage2() {
    let arregloRecuperado = localStorage.getItem("miArreglo");
  
    if (arregloRecuperado !== null) {
      miArreglo = JSON.parse(arregloRecuperado);
      return miArreglo
    } else {
      console.log("No se encontró el arreglo en el Local Storage");
      return null
    }
  }
  function crearTabla(arreglo) {
    const tabla = document.getElementById('tablaDinamica');
    const tbody = tabla.getElementsByTagName('tbody')[0];

    arreglo.forEach(obj => {
      const fila = document.createElement('tr');
      
      Object.values(obj).forEach(valor => {
        const celda = document.createElement('td');
        celda.textContent = valor;
        fila.appendChild(celda);
      });

      tbody.appendChild(fila);
    });
  }
