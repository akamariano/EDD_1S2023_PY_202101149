# EDD_1S2023_PY_202101149
# EDD GoDrive
##### MANUAL TÉCNICO
*
#
#
| Carnet            | Nombre      | Auxiliar | Sección|
|-------------------|-------------|------------|--------|
|202101149| Mariano Roberto Rac Noguera | Cristian Alberto Suy Mejía|C|
#
Este manual técnico es una guía para los desarrolladores y técnicos encargados del mantenimiento de la aplicación. Proporciona información detallada sobre la arquitectura, el diseño y las tecnologías utilizadas en el desarrollo de EDD GODrive.

## Requisitos del sistema

### Requisitos mínimos

- Sistema operativo: A su elección
- Procesador: Procesador 64 Bits
- RAM: 1 GB
- IDE: Idealmente visual studio o el de su elección para correr la aplicación o directamente ejecutar el .exe

## Arquitectura

EDD GoDrive está construida por medio del lenguaje Go cuya  utilizada  depende del sistema operativo y del hardware en el que se esté ejecutando. Go se ha diseñado para ser portable y se puede compilar en múltiples arquitecturas sin la necesidad de modificar el código fuente del programa:


## Tecnologías utilizadas

[nombre de la aplicación] utiliza las siguientes tecnologías:

* Go- para el desarrollo del programa
* Json - para el archivo de salida
* Graphviz - para la  elaboración de reportes
## Introducción

## Diseño
![Diseño](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/Go1.png)
![Diseño](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/Go2.png)
![Diseño](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/Go4.png)


## Estructuras Utilizadas y funcionamiento de la App

Para el desarrollo de la aplicación se usaron las siguientes estructuras y se explica como fueron implementadas:

1. Cola: La cola una cola es una estructura de datos que funciona en base a un principio de "primero en entrar, primero en salir" (FIFO, por sus siglas en inglés, "First-In-First-Out"). Esto significa que los elementos se agregan al final de la cola y se eliminan desde el principio de la mismo. la implementación fue para desarrollar una cola que almacena los estudiantes añadidos indiovidualmente o por carga masiva para que el administrador acepte o rechace en el sistema.
2. Lista Doble Enlazada y Pila: Una lista doblemente enlazada es una estructura de datos lineal que consiste en una serie de elementos llamados nodos, donde cada nodo contiene una referencia tanto al siguiente como al nodo anterior en la lista. Esto permite recorrer la lista en ambas direcciones (hacia adelante y hacia atrás).Por otro lado, una pila es una estructura de datos lineal que utiliza el principio de LIFO (Last In, First Out) para almacenar y recuperar elementos. Es decir, el último elemento agregado a la pila es el primero en ser eliminado de la misma. Al aceptar estudiantes en el sistema se realiza una inserción ordenada por su dato carnet en la lista doble enlazada y se crea una pila vacía que almacena los inicios de sesión al sistema como atributo de la doble enlazada.
3. Pila: Se usó una pila común para almacenar las acciones de aceptaci´+on o rechazo de alumnos del administrador.
Todas las estructuras pueden visualizarse en consola o por medio del reporte generado en graphviz en el que básicamente se recorren las estructuras y se muestran en una imagen.
Para leer la carga masiva se hizo por medio de un encoding/csv y para la salida se recurrió a recorreer la lista doble enlazada para finalmente escribir un archivo por medio de un encoding/json.