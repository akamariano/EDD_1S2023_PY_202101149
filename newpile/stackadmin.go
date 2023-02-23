package newpile

import (
	"fmt"
	"os"
	"os/exec"
)

type Stack struct {
    top  *stackNode
    size int
}

type stackNode struct {
    value string
    prev  *stackNode
}

func (s *Stack) Push(value string) {
    newNode := &stackNode{value: value}
    if s.top == nil {
        s.top = newNode
    } else {
        newNode.prev = s.top
        s.top = newNode
    }
    s.size++
}

func (s *Stack) pop() string {
    if s.top == nil {
        return ""
    }
    value := s.top.value
    s.top = s.top.prev
    s.size--
    return value
}

func (s *Stack) isEmpty() bool {
    return s.top == nil
}
func (s *Stack) Print() {
    fmt.Println("Pila:")
    if s.top == nil {
        fmt.Println("vacia")
    } else {
        current := s.top
        for current != nil {
            fmt.Println(current.value)
            current = current.prev
        }
    }
}
func (s *Stack) GenerateGraphviz() {
	// Crear el archivo .dot
	file, err := os.Create("stack.dot")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Escribir la estructura del archivo .dot
	_, err = fmt.Fprintf(file, "digraph G {\n\trankdir=TB;\n")
	if err != nil {
		panic(err)
	}

	// Escribir cada nodo y sus conexiones
	if s.top != nil {
		current := s.top
		_, err = fmt.Fprintf(file, "\t\"%p\" [label=\"%s\", shape=box]\n", current, current.value)
		if err != nil {
			panic(err)
		}

		for current.prev != nil {
			current = current.prev
			_, err = fmt.Fprintf(file, "\t\"%p\" [label=\"%s\", shape=box]\n", current, current.value)
			if err != nil {
				panic(err)
			}
			_, err = fmt.Fprintf(file, "\t\"%p\" -> \"%p\"\n", current.prev, current)
			if err != nil {
				panic(err)
			}
		}
	}

	// Cerrar el archivo .dot
	_, err = fmt.Fprintf(file, "}")
	if err != nil {
		panic(err)
	}

	// Generar la imagen .png usando el comando "dot" de Graphviz
	cmd := exec.Command("dot", "-Tpng", "stack.dot", "-o", "stack.png")
	err = cmd.Run()
	if err != nil {
		panic(err)
	}
	fmt.Println("Imagen generada exitosamente")
}
