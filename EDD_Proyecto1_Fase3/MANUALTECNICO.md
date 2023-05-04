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
Tabla hash: funciona como un diccionario donde cada entrada tiene una clave y un valor asociado. La tabla utiliza una función de hash para calcular una ubicación en la memoria donde se almacena el valor asociado a una clave determinada.
Encriptación: Encriptación Caesar:
La encriptación Caesar es un método muy simple de encriptación de texto que se basa en desplazar cada letra de un mensaje por un número fijo de posiciones en el alfabeto. Por ejemplo, si el número de desplazamiento es 3, la letra "A" se convierte en la letra "D", la letra "B" se convierte en la letra "E", y así sucesivamente. Este método es fácil de implementar, pero no es muy seguro ya que es vulnerable a ataques de fuerza bruta.

Encriptación AES:
La encriptación AES (Advanced Encryption Standard) es un algoritmo de cifrado simétrico que utiliza bloques de 128 bits de datos y una clave de cifrado de 128, 192 o 256 bits. AES es un método muy seguro y se utiliza en una amplia variedad de aplicaciones, desde la protección de datos de usuarios en dispositivos móviles hasta la encriptación de información sensible en bases de datos empresariales. AES utiliza una serie de operaciones criptográficas complejas, como la sustitución, permutación y mezcla de bits, para garantizar que los datos encriptados sean difíciles de descifrar sin la clave de cifrado adecuada.

Encriptación SHA-256:
La encriptación SHA-256 (Secure Hash Algorithm 256) es un algoritmo de hash criptográfico que convierte cualquier cantidad de datos en una serie fija de 256 bits. Este algoritmo se utiliza para garantizar la integridad de los datos, es decir, para asegurarse de que los datos no han sido alterados en tránsito o almacenamiento. SHA-256 es utilizado en aplicaciones como la autenticación de contraseñas, la verificación de la autenticidad de los archivos descargados, y la generación de claves de cifrado. SHA-256 es considerado un algoritmo muy seguro ya que es resistente a los ataques de colisión y se ha demostrado que es muy difícil de romper.
Grafo dirigido: Un grafo dirigido (también conocido como "digrafo") es un tipo de estructura de datos utilizada en teoría de grafos que consiste en un conjunto de nodos (vértices) y un conjunto de arcos (arcos dirigidos) que conectan los nodos. Cada arco en un grafo dirigido tiene una dirección y se representa mediante una flecha que indica la dirección del arco.
La estructura de un grafo dirigido se define por su conjunto de vértices y su conjunto de arcos. Los vértices son los nodos del grafo y se pueden representar por medio de círculos, mientras que los arcos son las conexiones que se establecen entre los nodos y se pueden representar mediante flechas dirigidas que van desde un nodo origen a un nodo destino. Cada arco tiene un origen y un destino que son los nodos que están conectados por el arco.
Para el desarrollo de la aplicación se manejaron el html de login(index), administrador y usuario, con sus respectuivos scripts cada uno teniendo un script adicional para el manejo de la Matriz dispersa: 
- Login: La interfaz gráfica es sencilla, contiene 2 entradas de texto que reciben el usuario y la contraseña, el script maneja las verificaciones de el usuario y contraseña indexados tomando en cuenta la desencriptacion de las contraseñas almacenadas en la tabla hash. además contemplando si es administraor sea redirigido a su html designado y también gracias a una función de inicio de sesión se mandan los parámetros los cuáles son buscados en el hash comparando los valores desencriptados  y de ser exitoso se redirige a su página de usuario:
 
- Administrador:  la interfaz gráfica consiste en los distintos botones que permiten al administrador hacer cambios en el sistema y poder verificar sus reportes, el script de este maneja lo que es la estructura principal de la APP, el AVL que a su vez almacena Carnet,Nombre,Contraseña, Árbol nario (Almacena matriz dispersa de archivos y permisos) y lista circular de bitácora. Posee la estructura convencional de un AVL, sus métodos para ser graficado y los distintos ordenes poder ser desplegados. Para la manipulación de este los datos se almacenan en local storage y son devueltos también para realizar cambios por medio de setItems de JSONs y para regresarlo, convertirlo a AVL nuevamente, se trato de manejar la misma metodología para el aárbol Nario, siendo una excepción la matriz dispersa y la lista circular que sus punteros no son lineales tiene que almacenarse de otra manera. Para el cifrado de la contraseña se optó por caesar y la cdn crypto.  
  function encrypt(password, shift = 3) {
	return caesarCipher(password, shift);
  }
  
  function decrypt(encrypted, shift = 3) {
	return caesarCipher(encrypted, -shift);
  }
  
  function isPasswordValid(carnet, password) {
	let hashTable = JSON.parse(localStorage.getItem("tablaHash"));
	let userObj = hashTable.find((user) => user && user.carnet === carnet);
  
	if (userObj) {
	  let decryptedPassword = decrypt(userObj.password);
	  return decryptedPassword === password;
	}
  
	return false;
  }

- Usuario: muestra una barra de navegación con el nombre "Bienvenido usuario" y un botón "Cerrar sesión", además de Pestaña Compartidos que accede a los archivos que han sido compartidos con el usuario en sesión, también se tiene un botón de Mensajes que redirecciona a una interfaz de mensajería entre usuarios. Debajo de la barra de navegación hay dos secciones principales: una sección izquierda y una sección derecha. 
La sección izquierda contiene un formulario de entrada de texto que incluye dos campos para ingresar una "ruta" y un "nombre de carpeta" y tres botones con diferentes acciones. También hay un mensaje de bienvenida y un título en la parte superior.
La sección derecha contiene una imagen y un espacio para cargar archivos y mostrar resultados. Hay tres botones para realizar diferentes acciones, y un campo de entrada de texto para ingresar permisos. Se accedieron a los datos del nario y a cada dispersa de cada nodo para poder compartir la data codificada a los usuarios a los cuales fueron compartidos los archivos.
En la parte inferior de la página, hay dos imágenes adicionales. La página utiliza una imagen de fondo como fondo y algunos estilos personalizados para ajustar la apariencia de los elementos HTML. La página también carga tres archivos JavaScript adicionales.
Este ejecuta las funciones objetivos principales, pues acá los usuarios pueden interactuar con el sistema creando sus carpetas por medio de un árbol Nario y creando archivos por medio de una matriz dispersa, estos de igual forma se almacenan en el local storage del navegador, pueden ser visualizados sus reportes y ta´mbién al efectuar cambios estos se reportan en una bitácora, Se permiten las relaciones entre carpetas por la estructura grafo dirigido creada en el recorrido del Nario almacenado con anterioridad. Todas las estructuras de cada usuario se encuentran inicialmente vacías. Algo que cabe destacar es que para poder almacenar la dispersa y la circular debieron realizarse otros procesos, por ejemplo, la lista circular almacenada en el AVL no es directamente una lista circular, sino un string de JSON de lista circular que acorde a las necesidades se convierte a Lista circular o de nuevo a json para almacenarse. 
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
¿Como se recorre el nario para convertir en grafo?
  if (!nodo) {
        return;
    }

    let padre = nodo.valor;

     if (nodo.matriz) {
         const archivos = nodo.matriz.convertedFiles;
        archivos.forEach(archivo => {
            //GUARDAR DATOS DE ARCHIVOS
         });
     }

    if (nodo.primero) {
        let aux = nodo.primero;
        while (aux) {
            const hijo = aux.valor;
            grafo.insertarValores(padre, hijo);
            recorrerArbolYConstruirGrafo(aux, grafo);
            aux = aux.siguiente;
        }
    }
También por medio de ciertas funciones se ouede saber que usuario es el que esta en sesión para guardar sus cambios.
function getcurrentuserid(){
	const usuariocur = JSON.parse(localStorage.getItem("currentuser"));
console.log("Desde local usuario current:"+usuariocur.valor); // Imprime el valor del carnet
cargarArbolNADesdeLocalStorage();   
return usuariocur.valor
}
Sistema de Mensajería
es la estructura básica de una página web que muestra una interfaz de usuario para una aplicación de mensajería. La página consta de dos secciones principales: una barra lateral que muestra la lista de chats del usuario y una ventana de chat que muestra los mensajes de un chat seleccionado.
Dentro de la etiqueta head, hay metadatos que incluyen el tipo de documento HTML, la definición de caracteres y la configuración de la ventana gráfica. También se incluye un título para la página y una referencia a un archivo de hoja de estilo CSS externo que define el diseño visual de la página.
En el body, se encuentra el contenido visible de la página, que se divide en dos secciones principales: la barra lateral y la ventana de chat. La barra lateral incluye un encabezado con el nombre del usuario y un botón para iniciar un nuevo chat, un campo de búsqueda y una lista de chats disponibles. La ventana de chat incluye un encabezado con el nombre del contacto seleccionado y una lista de mensajes que se actualiza dinámicamente según el chat seleccionado. También hay un campo de texto para que el usuario ingrese un nuevo mensaje y un botón de envío.
En la parte inferior del body, se incluyen dos referencias a archivos de script JavaScript que se utilizan para implementar la lógica de la aplicación de mensajería. El archivo mensaje.js y el archivo admin.js.
El archivo mensaje.js 
 define una clase Block que representa un bloque de la cadena de bloques de la aplicación de chat, así como una clase Blockchain que maneja la lógica de la cadena de bloques. También define funciones para cifrar y descifrar mensajes utilizando AES y calcular el hash SHA256 de un mensaje.

El código también incluye funciones para cargar y mostrar mensajes en la interfaz de usuario, así como para cargar y mostrar una lista de chats en la barra lateral.

Además, hay funciones para generar un gráfico de la cadena de bloques utilizando Graphviz, y para cargar y guardar la cadena de bloques en el almacenamiento local.

Por último, hay una función getcurrentusern() que devuelve el árbol N-
## Diseño de la Interfaz
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/loginedd.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/eddadmingraph.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/adminedd.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccioncarpetas.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccionarchivos.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccionreporte.png)
![Aprobados](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/aprobadosedd.png)
![Mensajería](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/reportemensaje.png)
Pestaña Compartidos
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/compartidosedd.png)
Muestra todos los archivos que han sido compartidos con el usuario
Mensajes
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/mensajeedd.png)
