package db

import (
	"database/sql"
	"fmt"
	"os"
)

type Model struct {
	Model interface{}
}

type database struct {
	DB *sql.DB
}

func (d *database) initializeDB() error {
	db, err := sql.Open("sqlite3", "/gabungin.db")
	if err != nil {
		panic(err)
	}
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER not null PRIMARY KEY AUTOINCREMENT,
			name varchar(255) not null,
			password_hash varchar(255) not null,
			email varchar(255) not null,
			created_at datetime not null,
			updated_at datetime not null
		);
	`)
	if err != nil {
		panic(err)
	}
	fmt.Println("Database migration success")
	return nil
}
func (d *database) connectionDB() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "./salurin.db")
	if err != nil {
		fmt.Println(err.Error())
		return db, err
	}

	fmt.Println("Connection DB succesfully")
	return db, nil
}
func exists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}
func Run() (*sql.DB, error) {

	var db database

	isExist, err := exists("./salurin.db")
	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}
	if !isExist {
		err := db.initializeDB()
		if err != nil {
			fmt.Println(err.Error())
		}
	}
	database, err := db.connectionDB()
	if err != nil {
		return database, err
	}
	return database, nil

}
