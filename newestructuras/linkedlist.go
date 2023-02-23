package newestructuras

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"strings"
	"time"
)

type node struct {
	value  string
	value2 string
	value3 int
	value4 string
	stack  *stack
	next   *node
	prev   *node
}

type List struct {
	head *node
	tail *node
}

type stack struct {
	top  *stackNode
	size int
}

type stackNode struct {
	value string
	prev  *stackNode
}

func (s *stack) push(value string) {
	newNode := &stackNode{value: value}
	if s.top == nil {
		s.top = newNode
	} else {
		newNode.prev = s.top
		s.top = newNode
	}
	s.size++
}

func (s *stack) pop() string {
	if s.top == nil {
		return ""
	}
	value := s.top.value
	s.top = s.top.prev
	s.size--
	return value
}

func (s *stack) isEmpty() bool {
	return s.top == nil
}

func (l *List) Insert(value string, value2 string, value3 int, value4 string) {
	newNode := &node{value: value, value2: value2, value3: value3, value4: value4, stack: &stack{}}
	if l.head == nil {
		l.head = newNode
		l.tail = newNode
	} else if newNode.value3 < l.head.value3 {
		newNode.next = l.head
		l.head.prev = newNode
		l.head = newNode
	} else if newNode.value3 > l.tail.value3 {
		newNode.prev = l.tail
		l.tail.next = newNode
		l.tail = newNode
	} else {
		currentNode := l.head
		for currentNode != nil {
			if currentNode.value3 > newNode.value3 {
				newNode.next = currentNode
				newNode.prev = currentNode.prev
				currentNode.prev.next = newNode
				currentNode.prev = newNode
				break
			}
			currentNode = currentNode.next
		}
	}
}

func (l *List) FindByNumber(number int) *node {
	currentNode := l.head
	for currentNode != nil {
		if currentNode.value3 == number {
			return currentNode
		}
		currentNode = currentNode.next
	}
	return nil
}

func (n *node) PushToStack(value string) {
	n.stack.push(value)
}
func (l *List) GenerateGraph() {
	
	var nodes []string
	var edges []string
	currentNode := l.head
	for currentNode != nil {
		// Agregar nodo de la lista
		nodeLabel := fmt.Sprintf("%s %s\nCarnet: %d\nContraseña: %s", currentNode.value, currentNode.value2, currentNode.value3, currentNode.value4)
		nodes = append(nodes, fmt.Sprintf("node%d[label=\"%s\"]", currentNode.value3, nodeLabel))

		// Agregar nodo de la pila
		stackNode := currentNode.stack.top
		var stackNodes []string
		for stackNode != nil {
			stackNodes = append(stackNodes, stackNode.value)
			stackNode = stackNode.prev
		}
		stackLabel := strings.Join(stackNodes, "\\n")
		nodes = append(nodes, fmt.Sprintf("stack%d[label=\"%s\"]", currentNode.value3, stackLabel))

		// Agregar aristas de la lista
		if currentNode.next != nil {
			edges = append(edges, fmt.Sprintf("node%d -> node%d", currentNode.value3, currentNode.next.value3))
		}
		if currentNode.prev != nil {
			edges = append(edges, fmt.Sprintf("node%d -> node%d", currentNode.value3, currentNode.prev.value3))
		}

		// Agregar arista de la pila
		if !currentNode.stack.isEmpty() {
			edges = append(edges, fmt.Sprintf("node%d -> stack%d", currentNode.value3, currentNode.value3))
		}

		currentNode = currentNode.next
	}

	// Agregar label al inicio
	nodes = append([]string{fmt.Sprintf("null[label=\"NULL\"]")}, nodes...)
	edges = append(edges, fmt.Sprintf("null -> node%d", l.head.value3))

	// Agregar label al final
	nodes = append(nodes, fmt.Sprintf("null2[label=\"NULL\"]"))
	edges = append(edges, fmt.Sprintf("node%d -> null2", l.tail.value3))

	graph := fmt.Sprintf("digraph G {\n%s\n%s\n}", strings.Join(nodes, "\n"), strings.Join(edges, "\n"))
	file, _ := os.Create("list.dot")
	defer file.Close()
	fmt.Fprint(file, graph)

	command := exec.Command("dot", "-Tpng", "-o", "list.png", "list.dot")
	_, err := command.Output()
	if err != nil {
		fmt.Println("Error generating graph:", err)
		return
	}
	fmt.Println("Graph generated successfully.")
}
func (l *List) Login(user int, password string) {
	currentNode := l.head
	for currentNode != nil {
		if currentNode.value3 == user && currentNode.value4 == password {
			fmt.Println("Inicio de sesión exitoso para el usuario", user," Nombre: ",currentNode.value,currentNode.value2)
			fmt.Println("Inicios de sesión:")
			stackNode := currentNode.stack.top
			for stackNode != nil {
				fmt.Println(stackNode.value)
				stackNode = stackNode.prev
			}
			currentTime2 := time.Now()
			println(currentTime2.Format("2006-01-02 15:04:05"))
			fmt.Println("Cerrando sesión...")
			return
		}
		currentNode = currentNode.next
	}
	fmt.Println("Inicio de sesión fallido para el usuario", user)
}
func (l *List) ToJSONFile(filename string) error {
	var items []map[string]interface{}
	currentNode := l.head
	for currentNode != nil {
		concat := currentNode.value+currentNode.value2
		item := map[string]interface{}{
			"Carpeta_Raiz":"/",
			"carnet": currentNode.value3,
			"password": currentNode.value4,
			"nombre":  concat,
			
			
			
		}
		items = append(items, item)
		currentNode = currentNode.next
	}
	data, err := json.MarshalIndent(map[string]interface{}{"alumnos": items}, "", "\n")
	if err != nil {
		return err
	}
	err = ioutil.WriteFile(filename, data, 0644)
	if err != nil {
		return err
	}
	return nil
}