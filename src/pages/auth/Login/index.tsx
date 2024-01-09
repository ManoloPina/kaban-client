import React, { useContext } from "react";
import * as yup from "yup";
import { useForm, useHttp } from "src/hooks";
import { AuthContext } from "src/context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
//Styles
import * as S from "./styles";
import { MainWrapper, Title } from "src/pages/auth/styles";
//Components
import { TextField } from "src/components/forms";
//Types
import { ROUTES } from "src/constants";
import { IUser } from "src/types/User";

interface IForm {
  email: string;
  password: string;
}

const schema: yup.ObjectSchema<IForm> = yup.object().shape({
  email: yup
    .string()
    .email("This field should be an e-mail")
    .required("E-mail field is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^[A-Z]/, "First character must be an uppercase letter"),
});

export const Login: React.FC = React.memo(() => {
  const { setToken } = useContext(AuthContext);
  const { request } = useHttp();
  const navigate = useNavigate();
  const { register, onSubmit, errors } = useForm<IForm>(schema);

  //handlers
  const handleSubmit = async (form: Partial<IForm>) => {
    console.log("🚀 ~ form:", form);
    const res = await request<IUser, Partial<IForm>>({
      payload: form,
      method: "post",
      path: "/auth/login",
    });

    if (res) {
      setToken(res.token);
      navigate(ROUTES.HOME);
    }
  };

  return (
    <>
      <Title>Taksboard</Title>
      <MainWrapper>
        <S.FormContainer onSubmit={onSubmit(handleSubmit)}>
          <TextField
            fullWidth
            type="text"
            label="E-mail"
            defaultValue=""
            {...register("email")}
            error={!!errors?.email}
            helperText={errors.email}
            placeholder="example@domain.com"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            defaultValue=""
            {...register("password")}
            error={!!errors?.password}
            helperText={errors.password}
          />

          <NavLink to={ROUTES.AUTH.REGISTER}>Register</NavLink>

          <button type="submit">Login</button>
        </S.FormContainer>
      </MainWrapper>
    </>
  );
});
