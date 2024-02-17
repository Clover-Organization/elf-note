package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/thepokenik/elf-note/internal/db"
	"github.com/thepokenik/elf-note/internal/users"
)

func main() {

	connectionString := "user=postgres password=Hotwheels16? host=localhost port=5432 dbname=elf"
	conn, err := db.NewConnection(connectionString)
	if err != nil {
		panic(err)
	}

	defer conn.Close()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	users.SetRoutes(app)
	users.Configure()

	log.Fatal(app.Listen(":4000"))
}