package main

import (
	"github.com/ariopri/micro-project-productivity/tree/main/backend/config"
	"github.com/ariopri/micro-project-productivity/tree/main/backend/db"
	handler "github.com/ariopri/micro-project-productivity/tree/main/backend/routes/api"
	"github.com/gin-gonic/gin"
)

func main() {
	db, err := db.Run()
	if err != nil {
		panic(err)
	}
	router := gin.Default()
	router.Use(config.NewCORS())

	api := router.Group("/api")
	handler.APIRoute(api, db)
	router.Run()
}
