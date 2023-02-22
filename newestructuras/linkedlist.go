package newestructuras


import (
	"fmt"
	"os"
	"os/exec"
	"strings"
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
	} else {
		newNode.prev = l.tail
		l.tail.next = newNode
		l.tail = newNode
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
		nodeLabel := fmt.Sprintf("%s %s\nCarnet: %d\nContraseña: %s\nPila:", currentNode.value, currentNode.value2, currentNode.value3, currentNode.value4)
		if currentNode.stack.isEmpty() {
			nodeLabel += " vacia"
		} else {
			stackNode := currentNode.stack.top
			for stackNode != nil {
				nodeLabel += fmt.Sprintf("\n%s", stackNode.value)
				stackNode = stackNode.prev
			}
		}
		nodes = append(nodes, fmt.Sprintf("node%d[label=\"%s\"]", currentNode.value3, nodeLabel))
		if currentNode.next != nil {
			edges = append(edges, fmt.Sprintf("node%d -> node%d", currentNode.value3, currentNode.next.value3))
		}
		if currentNode.prev != nil {
			edges = append(edges, fmt.Sprintf("node%d -> node%d", currentNode.value3, currentNode.prev.value3))
		}
		currentNode = currentNode.next
	}

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