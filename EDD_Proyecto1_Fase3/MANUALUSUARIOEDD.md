# Manual Usuario EDD GO DRIVE
#
| Carnet            | Nombre      | Auxiliar | Sección|
|-------------------|-------------|------------|--------|
|202101149| Mariano Roberto Rac Noguera | Cristian Mejía|C|
#
## Introducción

Bienvenido al manual de usuario de la aplicación EDD Go Drive. Esta aplicación ha sido desarrollada en HTML y JAVASCRIPT auxiliándose también de CSS y Bootstrap, también permitiendo la visualización de reportes con Graphviz.

## Requisitos del Sistema

Para utilizar esta aplicación web necesitarás:
1. Un dispositivo con acceso a internet: puede ser una computadora, teléfono móvil, tablet, u otro dispositivo que tenga capacidad de conectarse a internet.

2. Un navegador web: el software que se utiliza para acceder y visualizar las páginas web. Los navegadores más populares son Google Chrome, Mozilla Firefox, Safari, y Microsoft Edge.

3. Una conexión a internet: para poder acceder a la página web, se requiere una conexión a internet estable y de alta velocidad..
## Login
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/loginedd.png)
Permite al usuario identificarse con sus credenciales, teniendo 2 tipos de usuario, Administrador y usuario común

## Interfaz de administrador
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/eddadmingraph.png)
![Aprobados](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/aprobadosedd.png)
![Mensajería](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/reportemensaje.png)
La interfaz de administrador de la webapp se compone de los  siguientes elementos:
1. Botón Cargar Archivo: permite al administrador efectuar una carga masiva de estudiantes al sistema por medio de un archivo JSON.
2. Botón ärbol estudiantesr: despliega un reporte de la estructura AVL empleada para el almacenamiento de los estudiantes.
3. Botón Mostrar Alumnos: permite al usuario el despliegue en tablas de distintas formas de ordenamiento de los alumnos del sistema.
4. Botón Cerrar Sesión: Devuelve a la página de inicio de sesión.
5. Botón Aprobados: Redirige al administrador a una interfaz donde puede visualizar todos los archivos compartidos y los datos de los usuarios encriptados en una tabla hash
6. Además, al ingresar automáticamente puede visualizarse el reporte del Sistema de Mensajería
## Interfaz de Usuario
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/nuevainterfazedd.png)
La interfaz de usuario de la webapp se compone de los  siguientes elementos:
1. Botón Cerrar Sesión: permite al usuario salirse de la aplicación
2. Botón Pestaña Compartidos: redirige a la interfaz de Documentos compartidos
3. Botón Mensajes: redirige a la interfaz del sistema de mensajería
Pestaña Compartidos
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/compartidosedd.png)
Muestra todos los archivos que han sido compartidos con el usuario
Mensajes
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/mensajeedd.png)
1. Botón Nuevo Chat: permite al usuario buscar otro usuario al cual desea enviar mensajes
2. Enviar: Envía el mensaje
Sección Carpetas
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccioncarpetas.png)
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/main/grafocarpeta.png)
1. Botón Agregar Carpeta: permite al usuario por medio de las entradas de texto crear una carpeta en la ruta que el desee
2. Botón Eliminar Carpeta: permite al usuario por medio de las entradas de texto eliminar la carpeta de la ruta que desea
3. Botón Mostrar Carpetas: Despliega las carpetas en el sistema del usuario, además puede visualizarse su reporte de carpetas. Además muestra un reporte de las carpetas por medio de un grafo dirigido
Sección archivos
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccionarchivos.png)
1. Botón Agregar elegir archivo: permite al usuario cargar un archivo desde su navegador
2. Botón Eliminar cargar Archivo: carga el archivo en el sistema y a su vez se despliega el reporte
3. Botón Mostrar reporte matriz: despliega el reporte de los archivos almacenados en la carpeta del usuario y sus permisos
4. Botón Asignar Permisos: Permite por medio de la entrada de texto otorgar permisos r o w a otro usuario sobre un archivo
Sección reporte usuario
![Interfaz Gráfica](https://github.com/akamariano/EDD_1S2023_PY_202101149/blob/branchcommit2fase2/EDD_Proyecto1_Fase2/seccionreporte.png)
Se despliega constantemente al crear o eliminar carpetas y archivos
