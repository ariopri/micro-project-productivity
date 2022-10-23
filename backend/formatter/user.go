package formatter

import "github.com/ariopri/micro-project-productivity/tree/main/backend/entity"

func LoginFormatter(user entity.User, token string) entity.LoginResponse {
	return entity.LoginResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
		Token: token,
	}
}
func UserFormater(user entity.User, token string) entity.RegisterResponse {
	formater := entity.RegisterResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
		Token: token,
	}
	return formater
}

func FormatterUserFetch(user entity.User, token string) entity.FetchUserResponse {
	return entity.FetchUserResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
	}
}
