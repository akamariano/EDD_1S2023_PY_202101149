package main

import (
	"F1_EDD/estructuras"
	"F1_EDD/newestructuras"
	"F1_EDD/newpile"
	"encoding/csv"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/sqweek/dialog"
)

func main() {
	
	
	Clear()
	cola := estructuras.Queue{}
	lista := newestructuras.List{}
	stack := newpile.Stack{}
	inicio:
	
	var op int
	var userll string
	var pasll string
	fmt.Println("Dashboard  - EDD GoDrive")
	fmt.Println("Inicio de sesión")
	fmt.Println("Ingrese el usuario: ")
	fmt.Scanln(&userll)
	fmt.Println("Ingrese la contraseña: ")
	fmt.Scanln(&pasll)
	if userll=="admin" && pasll=="admin"{
		for {
			op = 0
			Clear()
			
			fmt.Println("----------------------------------")
			fmt.Println("Dashboard Administrador - EDD GoDrive")
			fmt.Println("1. Ver Estudiantes Pendientes")
			fmt.Println("2. Ver Estudiantes Del Sistema")
			fmt.Println("3. Registrar Nuevo Estudiante")
			fmt.Println("4.Carga Masiva de  Estudianteses")
			fmt.Println("5.Cerrar Sesión")
			fmt.Println("6.Reporte Estudiantes Aceptados")
			fmt.Println("7.Reporte Estudiantes En Espera")
			fmt.Println("8.Reporte Acciones Administrador")
			fmt.Println("----------------------------------")
			fmt.Println("Seleccione su opción")
			fmt.Scanln(&op)
			switch op {
			case 1:
				fmt.Println("Ha seleccionado la opcion 1")
				fmt.Println("1. Ver Estudiantes Pendientes")
				// aqui va el codigo para la opcion 1
				fmt.Println("*****", " Pendientes: ", cola.Size(), "*****")
				cola.Print()
				fmt.Println("Estudiante Actual: ")
				cola.Peek()
				var acepta string
				fmt.Println("¿Desea Aceptar? S/N")
				fmt.Scanln(&acepta)
				if acepta == "S" {
					
					// nomap:=cola.PeekValue()+""+cola.PeekValue2()
					// Añadirlo a Estudiantes Aceptados
					lista.Insert(cola.PeekValue(),cola.PeekValue2(),cola.PeekValue3(),cola.PeekValue4())
					currentTime2 := time.Now()
					stack.Push("Se aceptó estudiante el : "+currentTime2.Format("2006-01-02 15:04:05"))
					stack.Print()
					lista.GenerateGraph()
					stack.GenerateGraphviz()
					cola.Dequeue()
					
				}
				if acepta == "N" {
					currentTime3 := time.Now()
					fmt.Println("El estudiante ha sido eliminado")
					stack.Push("Se rehazó estudiante el : "+currentTime3.Format("2006-01-02 15:04:05"))
					stack.Print()
					stack.GenerateGraphviz()
					cola.Dequeue()
				}
				subMenu(op)

			case 2:
				fmt.Println("Ha seleccionado la opcion 2")
				fmt.Println("2. Ver Estudiantes Del Sistema")
				// aqui va el codigo para la opcion 1
				subMenu(op)
			case 3:
				fmt.Println("Ha seleccionado la opcion 3")
				fmt.Println("3. Registrar Nuevo Estudiante")
				fmt.Println("**************************")

				var name string
				var lastname string
				var carnet int
				var password string
				fmt.Println("Ingrese el nombre: ")
				fmt.Scanln(&name)
				fmt.Println("Ingrese el apellido: ")
				fmt.Scanln(&lastname)
				fmt.Println("Ingrese el carnmet: ")
				fmt.Scanln(&carnet)
				fmt.Println("Ingrese la contarseña: ")
				fmt.Scanln(&password)
				cola.Enqueue(name, lastname, carnet, password)
				fmt.Println("ESTADO: ")
				cola.Print()
				// aqui va el codigo para la opcion 1
				subMenu(op)
			case 4:
				fmt.Println("Ha seleccionado la opcion 4")
				fmt.Println("4.Carga Masiva de  Estudianteses")
				fmt.Println("Selecciona un archivo CSV...")
				filePath, err := dialog.File().Filter("CSV files", "csv").Title("Open CSV File").Load()
		if err != nil {
			fmt.Println("Error opening file:", err)
			return
		}

		// Abrir archivo CSV
		file, err := os.Open(filePath)
		if err != nil {
			fmt.Println("Error opening file:", err)
			return
		}
		defer file.Close()

		// Leer archivo CSV
		reader := csv.NewReader(file)
		reader.FieldsPerRecord = 3
		records, err := reader.ReadAll()
		if err != nil {
			fmt.Println("Error reading file:", err)
			return
		}

		// Imprimir registros
		firstRow := true 
		for _, record := range records {
			if !firstRow {
			int_carnet, err := strconv.Atoi(record[0])
			if err != nil {
				fmt.Println("Error:", err)
				return
			}
				s := record[1]
				words := strings.Split(s, " ")
				cola.Enqueue(words[0],words[1], int_carnet, record[2])
				cola.GenerateGraph()
			} else {
				firstRow = false
			}
			
			
		}
				// aqui va el codigo para la opcion 1
				subMenu(op)
			case 5:
				fmt.Println("Ha seleccionado la opcion 5")
				fmt.Println("5.Cerrar Sesión")
				goto inicio
				
				// aqui va el codigo para la opcion 1
				
			case 6:
				fmt.Println("Ha seleccionado la opcion 6")
				fmt.Println("6.Reporte Estudiantes Aceptados")
				lista.ToJSONFile("salida")

				// aqui va el codigo para la opcion 1
				subMenu(op)
			case 7:
				fmt.Println("Ha seleccionado la opcion 7")
				fmt.Println("7.Reporte Estudiantes En Espera")
				cola.GenerateGraph()
					// aqui va el codigo para la opcion 1
					subMenu(op)
			case 8:
				fmt.Println("Ha seleccionado la opcion 8")
				fmt.Println("8.Reporte Acciones admministrador")
				stack.GenerateGraphviz()
				// aqui va el codigo para la opcion 1
				subMenu(op)
			}

		}
}
if userll!="admin" && pasll!="admin"{
	int_user, err := strconv.Atoi(userll)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	lista.Login(int_user,pasll)
	nodeToUpdate := lista.FindByNumber(int_user)
					if nodeToUpdate != nil {
						currentTime := time.Now()
						nodeToUpdate.PushToStack("Inicio de sesión el: "+currentTime.Format("2006-01-02 15:04:05"))
						
					}
	lista.GenerateGraph()
	goto inicio
}

}
func subMenu(opcionPadre int) {
	var opcion int

	for {
		fmt.Printf("SubMenu de opcion %d:\n", opcionPadre)
		fmt.Println("1. Regresar al menu principal")

		fmt.Print("Ingrese una opcion: ")
		fmt.Scan(&opcion)

		switch opcion {
		case 1:
			fmt.Println("Regresando al menu principal")
			Clear()
			return
		default:
			fmt.Println("Opcion no valida")
		}
	}
}
func Clear() {
	
	command := "\033[2J"

	
	if _, err := os.Stdout.WriteString(command); err != nil {
		panic(err)
	}
}
