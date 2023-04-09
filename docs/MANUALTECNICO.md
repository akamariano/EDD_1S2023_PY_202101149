# Manual Técnico Edd Go Drive
#
| Carnet            | Nombre      | Auxiliar | Sección|
|-------------------|-------------|------------|--------|
|202101149| Mariano Roberto Rac Noguera | Cristian Mejía|C|
#
## Introducción

Este manual técnico es una guía para los desarrolladores y técnicos encargados del mantenimiento de la aplicación o bien interesados en el código y desarrollo de la app. Proporciona información detallada sobre la arquitectura, el diseño y las tecnologías utilizadas en el desarrollo de Edd Drive
## Requerimientos de Software
Para abrir una página web, lo primero que se necesita es un dispositivo con conexión a internet y un navegador web instalado, como Google Chrome, Mozilla Firefox o Microsoft Edge. El navegador es un software que permite al usuario acceder y visualizar el contenido de una página web.

Cuando se ingresa la dirección de una página web en el navegador, se realiza una solicitud al servidor de la página web. Esta solicitud se realiza mediante el protocolo HTTP (Hypertext Transfer Protocol), que es el protocolo estándar de la web para la transferencia de datos.

El servidor de la página web procesa la solicitud y envía de vuelta una respuesta al navegador. La respuesta incluye el contenido de la página web en forma de HTML, CSS y JavaScript, que son lenguajes de marcado y programación que permiten crear y dar estilo a la página web.

Para que la página web se visualice correctamente en el navegador, se requiere que el dispositivo tenga ciertos requisitos mínimos de hardware y software, como un procesador capaz de ejecutar el navegador y suficiente memoria RAM para almacenar los datos de la página web.


## Tecnologías utilizadas
El HTML se utiliza para definir la estructura del contenido de la página web, mientras que el CSS se utiliza para dar estilo y diseño a la página web. El JavaScript se utiliza para añadir interactividad y dinamismo a la página web, como animaciones y efectos visuales. Bootstrap es un framework de CSS y JavaScript que permite crear páginas web responsive de manera más rápida y sencilla.

Por otro lado, Graphviz es una herramienta para crear diagramas y gráficos que se puede utilizar en la página web mediante CDNs (Content Delivery Networks) que ofrecen acceso a los archivos necesarios a través de una red de servidores distribuidos geográficamente.

En cuanto a la arquitectura general de una página web, se puede utilizar una arquitectura basada en el patrón Modelo-Vista-Controlador (MVC), que separa la lógica de negocio, la presentación y la gestión de eventos en componentes distintos y modularizados. También se pueden utilizar otras arquitecturas como la arquitectura de microservicios, que divide la aplicación en pequeños servicios independientes y escalables.

## Introducción
# Estructura del Código
Etructuras de datos empleadas:
Árbol AVL: es un tipo de árbol binario de búsqueda en el que se garantiza que la altura de cada subárbol no difiere en más de 1. Esto se logra mediante la reorganización del árbol cuando se realizan inserciones o eliminaciones que rompen la condición de equilibrio. Esto asegura que las operaciones de búsqueda, inserción y eliminación se realicen en un tiempo logarítmico O(log n) en el peor de los casos.

Árbol n-ario: es un tipo de árbol donde cada nodo puede tener más de dos hijos. Los árboles n-arios se utilizan para modelar estructuras de datos jerárquicas donde cada nodo tiene una relación padre-hijo con uno o más nodos. Cada nodo en un árbol n-ario tiene un puntero a una lista de sus hijos. Las operaciones de búsqueda, inserción y eliminación en un árbol n-ario pueden tardar hasta O(n) en el peor de los casos.

Matriz dispersa: es una estructura de datos que se utiliza para almacenar matrices con un gran número de celdas vacías o nulas. En una matriz dispersa, solo se almacenan los valores no nulos, junto con su ubicación en la matriz. Esto ahorra espacio de almacenamiento y reduce el tiempo de acceso a los elementos de la matriz. Las operaciones de búsqueda, inserción y eliminación en una matriz dispersa pueden tardar hasta O(1) en el mejor de los casos.

Lista circular: es una estructura de datos lineal en la que los nodos se conectan formando un ciclo cerrado en lugar de terminar en un nodo nulo. Cada nodo tiene un puntero al siguiente nodo en la lista, y el último nodo apunta al primer nodo en la lista. Las operaciones de inserción y eliminación son eficientes en una lista circular, ya que solo se necesita cambiar los punteros del nodo anterior y siguiente. La búsqueda en una lista circular puede tardar hasta O(n) en el peor de los casos.
Para el desarrollo de la aplicación se manejaron el html de login(index), administrador y usuario, con sus respectuivos scripts cada uno teniendo un script adicional para el manejo de la Matriz dispersa: 
- Login: La interfaz gráfica es sencilla, contiene 2 entradas de texto que reciben el usuario y la contraseña, el script maneja las verificaciones de el usuario y contraseña indexados contemplando si es administraor sea redirigido a su html designado y también gracias a una función de inicio de sesión se mandan los parámetros los cuáles son buscados en el AVL y de ser exitoso se redirige a su página de usuario:
 function iniciarSesion(carnet, contraseña) {
	const arbol = cargarArbolDesdeLocalStorage();
	const nodoEncontrado = buscarNodo(arbol.raiz, carnet);
  
	if (nodoEncontrado !== null && nodoEncontrado.contraseña === contraseña) {
		
		setCarnetAndDisplay(carnet);
		console.log("Inicio de sesión exitoso");
		console.log(nodoEncontrado.circular);
		localStorage.setItem("currentuser", JSON.stringify({ valor: carnet, nario: nodoEncontrado.nario, circular: nodoEncontrado.circular}));
		guardarArbolNAEnLocalStorage(nodoEncontrado.nario);
		getcurrentuser();
		showAlert("Bienvenido "+carnet); 
		window.location.assign("user.html");
		
	  
	//   mostrarTextoEnH2(carnet);
	  
	  return true
	} else {
	  console.log("Carnet o contraseña incorrectos");
	  return false
	}
  },
- Administrador:  la interfaz gráfica consiste en los distintos botones que permiten al administrador hacer cambios en el sistema y poder verificar sus reportes, el script de este maneja lo que es la estructura principal de la APP, el AVL que a su vez almacena Carnet,Nombre,Contraseña, Árbol nario (Almacena matriz dispersa de archivos y permisos) y lista circular de bitácora. Posee la estructura convencional de un AVL, sus métodos para ser graficado y los distintos ordenes poder ser desplegados. Para la manipulación de este los datos se almacenan en local storage y son devueltos también para realizar cambios por medio de setItems de JSONs y para regresarlo, convertirlo a AVL nuevamente, se trato de manejar la misma metodología para el aárbol Nario, siendo una excepción la matriz dispersa y la lista circular que sus punteros no son lineales tiene que almacenarse de otra manera.
-function cargarArbolDesdeLocalStorage() {
	// Obtener la cadena de texto JSON del árbol almacenada en LocalStorage
	var arbolJson = localStorage.getItem("arbolAVL");
	// Si no hay ninguna cadena almacenada, retornar un árbol vacío
	if (!arbolJson) {
	  return new AVL();
	}
	// Convertir la cadena de texto JSON a un objeto JavaScript
	var arbolObj = JSON.parse(arbolJson);
	// Crear un nuevo árbol AVL con los datos cargados desde LocalStorage
	var arbol = new AVL();
	arbol.raiz = cargarNodoDesdeObj(arbolObj.raiz);
	return arbol;
  }
- Usuario: muestra una barra de navegación con el nombre "Bienvenido usuario" y un botón "Cerrar sesión". Debajo de la barra de navegación hay dos secciones principales: una sección izquierda y una sección derecha.
La sección izquierda contiene un formulario de entrada de texto que incluye dos campos para ingresar una "ruta" y un "nombre de carpeta" y tres botones con diferentes acciones. También hay un mensaje de bienvenida y un título en la parte superior.
La sección derecha contiene una imagen y un espacio para cargar archivos y mostrar resultados. Hay tres botones para realizar diferentes acciones, y un campo de entrada de texto para ingresar permisos.
En la parte inferior de la página, hay dos imágenes adicionales. La página utiliza una imagen de fondo como fondo y algunos estilos personalizados para ajustar la apariencia de los elementos HTML. La página también carga tres archivos JavaScript adicionales.
Este ejecuta las funciones objetivos principales, pues acá los usuarios pueden interactuar con el sistema creando sus carpetas por medio de un árbol Nario y creando archivos por medio de una matriz dispersa, estos de igual forma se almacenan en el local storage del navegador, pueden ser visualizados sus reportes y ta´mbién al efectuar cambios estos se reportan en una bitácora, todas las estructuras de cada usuario se encuentran inicialmente vacías. Algo que cabe destacar es que para poder almacenar la dispersa y la circular debieron realizarse otros procesos, por ejemplo, la lista circular almacenada en el AVL no es directamente una lista circular, sino un string de JSON de lista circular que acorde a las necesidades se convierte a Lista circular o de nuevo a json para almacenarse. 
function guardarListaCircularEnLocalStorage(listaCircular) {
	const arregloLineal = convertirListaCircularAArregloLineal(listaCircular);
	localStorage.setItem("listaCircular", JSON.stringify(arregloLineal));
  }
  function obtenerArregloLinealDeLocalStorage() {
	const datosGuardados = localStorage.getItem("listaCircular");
	return JSON.parse(datosGuardados) || [];
  }
  function convertirArregloLinealAListaCircular(arregloLineal) {
	const listaCircular = new ListaCircular();
	for (const fechaHora of arregloLineal) {
	  listaCircular.agregar(fechaHora);
	}
	return listaCircular;
  }
También por medio de ciertas funciones se ouede saber que usuario es el que esta en sesión para guardar sus cambios.
function getcurrentuserid(){
	const usuariocur = JSON.parse(localStorage.getItem("currentuser"));
console.log("Desde local usuario current:"+usuariocur.valor); // Imprime el valor del carnet
cargarArbolNADesdeLocalStorage();   
return usuariocur.valor
}
## Diseño de la Interfaz
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/loginedd.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/eddadmingraph.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/adminedd.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccioncarpetas.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccionarchivos.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccionreporte.png)

