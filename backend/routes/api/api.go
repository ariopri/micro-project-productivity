package api

import (
	"database/sql"

	"github.com/ariopri/micro-project-productivity/tree/main/backend/config"
	"github.com/ariopri/micro-project-productivity/tree/main/backend/handler"
	"github.com/ariopri/micro-project-productivity/tree/main/backend/repository"
	"github.com/ariopri/micro-project-productivity/tree/main/backend/services"
	"github.com/gin-gonic/gin"
)

func APIRoute(api *gin.RouterGroup, db *sql.DB) {
	//repository
	userRepository := repository.NewUserRepository(db)

	//service
	userService := services.NewUserService(userRepository)
	authService := config.NewAuthService()

	//handler
	userHandler := handler.NewUserHandler(userService, authService)

	//users
	api.POST("/login", userHandler.Login)
	api.POST("/register", userHandler.RegisterUser)
	api.POST("/email-check", userHandler.CheckEmailAvailable)

}
