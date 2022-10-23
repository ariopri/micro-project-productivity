package service

import (
	"errors"
	"fmt"

	"github.com/ariopri/micro-project-productivity/tree/main/backend/entity"
	"github.com/ariopri/micro-project-productivity/tree/main/backend/repository"
	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	Login(form entity.LoginRequest) (entity.User, error)
	RegisterUser(form entity.RegisterRequest) (entity.User, error)
	GetUserByID(id int) (entity.User, error)
	CheckEmailAvailability(form entity.CheckEmailAvaliableRequest) (bool, error)
	ResetPassword(form entity.ResetPasswordRequest) (entity.User, error)
}

type userService struct {
	repository repository.UserRepository
}

func NewUserService(repository repository.UserRepository) *userService {
	return &userService{repository}
}

func (s *userService) Login(form entity.LoginRequest) (entity.User, error) {
	model, err := s.repository.FindByEmail(form.Email)
	if err != nil {
		return model, err
	}
	if model.ID == 0 {
		return model, errors.New("user not found")
	}
	err = bcrypt.CompareHashAndPassword([]byte(model.PasswordHash), []byte(form.Password))
	if err != nil {
		return model, fmt.Errorf("invalid password")
	}
	return model, nil
}

func (s *userService) RegisterUser(register entity.RegisterRequest) (entity.User, error) {
	var user entity.User
	user.Name = register.Name
	user.Email = register.Email
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(register.Password), bcrypt.MinCost)
	if err != nil {
		return user, err
	}
	user.PasswordHash = string(passwordHash)
	newUser, err := s.repository.Save(user)
	if err != nil {
		return newUser, err
	}
	return newUser, nil

}

func (s *userService) GetUserByID(id int) (entity.User, error) {
	//Find
	model, err := s.repository.FindByID(id)
	if err != nil {
		return model, err
	}
	//Is Found?
	if model.ID == 0 {
		return model, fmt.Errorf("user not found")
	}
	return model, nil
}

func (s *userService) CheckEmailAvailability(form entity.CheckEmailAvaliableRequest) (bool, error) {
	email := form.Email
	user, err := s.repository.FindByEmail(email)
	if err != nil {
		return false, err
	}
	if user.ID == 0 {
		return true, nil
	}
	return false, err
}

func (s *userService) ResetUserPasssword(form entity.ResetPasswordRequest) (entity.User, error) {
	user, err := s.repository.FindByEmail(form.Email)
	if err != nil {
		return user, err
	}
	if form.Name != user.Name {
		return user, errors.New("incorect username or email")
	}

	passwordHash, err := bcrypt.GenerateFromPassword([]byte(form.NewPassword), bcrypt.MinCost)
	if err != nil {
		return user, err
	}
	user.PasswordHash = string(passwordHash)
	newUser, err := s.repository.Update(user)
	if err != nil {
		return newUser, err
	}

	return newUser, nil
}
