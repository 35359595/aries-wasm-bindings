package main

import (
	"fmt"
	"log"
	"os/exec"
)

func hi(name string) string {
	return "Hello, " + name
}

func main() {
	fmt.Println(hi("Johney"))
	cmd := exec.Command("/usr/local/opt/nvm/versions/node/v15.4.0/bin/node", "--version")
	err := cmd.Run()

	if err != nil {
		log.Fatal(err)
	}
}
