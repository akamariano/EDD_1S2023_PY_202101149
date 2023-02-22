package estructuras

import (
	"fmt"
	"os"
	"os/exec"
)
type Queue struct {
	front *node
	back  *node
	size  int
}

type node struct {
	value  string
	value2 string
	value3 int
	value4 string
	next   *node
}

func (q *Queue) Enqueue(value string, value2 string, value3 int, value4 string) {
	newNode := &node{value: value, value2: value2, value3: value3, value4: value4}
	if q.size == 0 {
		q.front = newNode
		q.back = newNode
	} else {
		q.back.next = newNode
		q.back = newNode
	}
	q.size++
}

func (q *Queue) Dequeue() (string, string, int, string) {
	if q.size == 0 {
		return "", "", 0, ""
	}
	value := q.front.value
	value2 := q.front.value2
	value3 := q.front.value3
	value4 := q.front.value4
	q.front = q.front.next
	q.size--
	return value, value2, value3, value4
}

func (q *Queue) IsEmpty() bool {
	return q.size == 0
}

func (q *Queue) Size() int {
	return q.size
}
func (q *Queue) Peek() {
	if q.IsEmpty() {
		println("La cola está vacía")
	} else {
		fmt.Println(" Nombre: ", " Apellido: ", " Carnet: ", " Contraseña: ")
		fmt.Println( q.front.value, q.front.value2, q.front.value3, q.front.value4)
	}
}
func (q *Queue) Print() {
	if q.IsEmpty() {
		println("La cola está vacía")
	} else {
		currentNode := q.front
		for currentNode != nil {
			println(" Nombre: ",currentNode.value, " Apellido: ",currentNode.value2, " Carnet: ",currentNode.value3, " Contraseña: ",currentNode.value4)
			currentNode = currentNode.next
		}
	}
}
func (q *Queue) GenerateGraph() {
	if q.IsEmpty() {
		fmt.Println("La cola está vacía")
		return
	}

	// Crear archivo DOT
	f, err := os.Create("queue.dot")
	if err != nil {
		fmt.Println("Error al crear archivo DOT:", err)
		return
	}
	defer f.Close()

	// Escribir encabezado y primer nodo
	_, err = f.WriteString("digraph Queue {\n")
	if err != nil {
		fmt.Println("Error al escribir archivo DOT:", err)
		return
	}
	_, err = f.WriteString(fmt.Sprintf("\tn%d [label=\"%s\\n%s\\n%d\\n%s\"];\n",
		0, q.front.value, q.front.value2, q.front.value3, q.front.value4))
	if err != nil {
		fmt.Println("Error al escribir archivo DOT:", err)
		return
	}

	// Escribir nodos restantes
	currentNode := q.front.next
	i := 1
	for currentNode != nil {
		_, err = f.WriteString(fmt.Sprintf("\tn%d [label=\"%s\\n%s\\n%d\\n%s\"];\n",
			i, currentNode.value, currentNode.value2, currentNode.value3, currentNode.value4))
		if err != nil {
			fmt.Println("Error al escribir archivo DOT:", err)
			return
		}
		currentNode = currentNode.next
		i++
	}

	// Escribir flechas entre nodos
	for i := 0; i < q.size-1; i++ {
		_, err = f.WriteString(fmt.Sprintf("\tn%d -> n%d;\n", i, i+1))
		if err != nil {
			fmt.Println("Error al escribir archivo DOT:", err)
			return
		}
	}

	// Escribir cierre de archivo
	_, err = f.WriteString("}\n")
	if err != nil {
		fmt.Println("Error al escribir archivo DOT:", err)
		return
	}

	// Ejecutar comando para generar imagen
	cmd := exec.Command("dot", "-Tpng", "-o", "queue.png", "queue.dot")
	err = cmd.Run()
	if err != nil {
		fmt.Println("Error al ejecutar comando Graphviz:", err)
		return
	}

	fmt.Println("Imagen generada correctamente en archivo 'queue.png'")
}
func (q *Queue) PeekValue() string {
	if q.IsEmpty() {
		return ""
	} else {
		return q.front.value
	}
}

func (q *Queue) PeekValue2() string {
	if q.IsEmpty() {
		return ""
	} else {
		return q.front.value2
	}
}

func (q *Queue) PeekValue3() int {
	if q.IsEmpty() {
		println("La cola está vacía")
		return 0
	} else {
		return q.front.value3
	}
}

func (q *Queue) PeekValue4() string {
	if q.IsEmpty() {
		return ""
	} else {
		return q.front.value4
	}
}