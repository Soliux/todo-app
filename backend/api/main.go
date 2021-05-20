package main

import (
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

type Todo struct {
	ID       int    `json:"id"`
	Text     string `json:"text"`
	Reminder bool   `json:"reminder"`
	Day      string `json:"day"`
}

var todos = []Todo{
	{ID: 1, Text: "Doctors Appointment", Day: "Feb 5th at 2:30pm", Reminder: false},
	{ID: 2, Text: "Meeting at School", Day: "Feb 6th at 1:30pm", Reminder: true},
	{ID: 3, Text: "Shop after school", Day: "Feb 6th at 1:30pm", Reminder: true},
}

func main() {
	app := fiber.New()
	app.Use(logger.New())
	app.Use(cors.New())

	api := app.Group("/api")
	v1 := api.Group("/v1")

	v1.Get("/tasks", func(c *fiber.Ctx) error {
		/*
			Returns all of the tasks in our todos array
		*/
		return c.JSON(todos)
	})
	v1.Post("/addtask", func(c *fiber.Ctx) error {
		/*
			Takes in a json array and then concatenates it to our todo array
		*/
		todo1 := new(Todo)
		err := c.BodyParser(&todo1)
		if err != nil {
			return c.Status(404).JSON(fiber.Map{
				"error": "Unable to add todo",
			})
		}
		todo1.ID = len(todos) + 1
		todos = append(todos, *todo1)
		return c.Status(200).JSON(fiber.Map{
			"success": "Todo was sucessfully added",
		})
	})

	v1.Delete("/task/:id", func(c *fiber.Ctx) error {
		/*
			This takes in a ID and then it checks it against the set of default tasks we have in our array and if it matches it will remove it.
		*/
		ID, _ := strconv.Atoi(c.Params("id"))
		tempTodos := todos[:0]
		for _, task := range todos {
			if task.ID != ID {
				tempTodos = append(tempTodos, task)
			}
		}
		todos = tempTodos
		return c.Status(200).JSON(fiber.Map{
			"success": "Succesfully deleted task with id of " + c.Params("id") + "",
		})
	})

	v1.Patch("/task/:id", func(c *fiber.Ctx) error {
		/*
			Takes in a ID which is then checked against the tasks and then it changes the reminder to the opposite of what it is.
		*/
		ID, _ := strconv.Atoi(c.Params("id"))
		tempTodos := todos[:0]
		for _, task := range todos {
			if task.ID == ID {
				task.Reminder = !task.Reminder
			}
			tempTodos = append(tempTodos, task)
		}
		todos = tempTodos
		return c.Status(200).JSON(fiber.Map{
			"success": "Sucessfully updated task reminder with the id of " + c.Params("id") + "",
		})
	})

	log.Fatal(app.Listen(":5000"))
}
