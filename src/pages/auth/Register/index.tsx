import React, { useContext } from "react";
import { useForm, useHttp } from "src/hooks";
import * as yup from "yup";
import { AuthContext } from "src/context/AuthContext";
//Components
import { TextField } from "src/components/forms/TextField";
import { useNavigate } from "react-router-dom";
//Styles
import { MainWrapper } from "src/pages/auth/styles";
import * as S from "./styles";
import * as Styles from "src/styles";
//Types
import { ENDPOINT, ROUTES } from "src/constants";
import { IUser } from "src/types/user";

interface IForm {
  // [key: string]: string;
  name: string;
  email: string;
  password: string;
  retypedPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().min(3).required("Name field is required"),
  email: yup
    .string()
    .email("This field should be an e-mail")
    .required("E-mail field is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^[A-Z]/, "First character must be an uppercase letter"),
  retypedPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Retyped password field is required")
    .nullable(),
});

export const Register: React.FC = React.memo(() => {
  //hooks
  const { errors, register, onSubmit } = useForm<IForm>(schema);
  const { request } = useHttp();
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  //handlers
  const handleSubmit = async (form: Partial<IForm>) => {
    const res = await request<IUser, Partial<IForm>>({
      method: "post",
      path: ENDPOINT.AUTH.REGISTER,
      payload: form,
    });

    if (res) {
      setToken(res.token);
      navigate(ROUTES.HOME);
    }
  };

  return (
    <>
      <Styles.Title
        as="h1"
        color="white"
        fontSize="3.8rem"
        fontWeight="bold"
        textAlign="center"
        paddingBottom="1rem"
      >
        Taskboard
      </Styles.Title>
      <MainWrapper>
        <S.FormContainer onSubmit={onSubmit(handleSubmit)}>
          <TextField
            fullWidth
            type="text"
            label="Name"
            defaultValue=""
            {...register("name")}
            error={!!errors?.name}
            helperText={errors.name}
            placeholder="John Doe"
          />
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
          <TextField
            fullWidth
            type="password"
            defaultValue=""
            label="Retype password"
            {...register("retypedPassword")}
            error={!!errors?.retypedPassword}
            helperText={errors.retypedPassword}
          />
          <S.RegisterNavBtn to={ROUTES.AUTH.LOGIN}>
            Already have an account?
          </S.RegisterNavBtn>
          <button type="submit">Register</button>
        </S.FormContainer>
      </MainWrapper>
    </>
  );
});
