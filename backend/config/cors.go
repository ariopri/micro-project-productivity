package config

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func newCors() gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET", "PATCH", "POST", "DELETE", "PUT"},
		AllowHeaders: []string{"Authorization", "Content-Type"},
	})
}
