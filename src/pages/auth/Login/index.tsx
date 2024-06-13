import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { useForm, useHttp, useAlert } from "src/hooks";
import { AuthContext } from "src/context/AuthContext";
import { useNavigate } from "react-router-dom";
//Styles
import * as S from "./styles";
import * as Styles from "src/styles";
import { MainWrapper, FormWrapper } from "src/pages/auth/styles";
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
  const { showAlert } = useAlert();
  const { request } = useHttp();
  const navigate = useNavigate();
  const { setToken, token } = useContext(AuthContext);
  const { register, onSubmit, errors } = useForm<IForm>(schema);

  //handlers
  const handleSubmit = async (form: Partial<IForm>) => {
    const res = await request<IUser, Partial<IForm>>({
      payload: form,
      method: "post",
      path: "/auth/login",
      showSuccessMsg: true,
    });

    if (res) {
      setToken(res.token);
      navigate(ROUTES.HOME);
    }
  };

  useEffect(() => {
    if (token) navigate(ROUTES.HOME);
  }, []);

  return (
    <MainWrapper>
      <Styles.Title
        as="h1"
        color="white"
        fontSize="3.8rem"
        fontWeight="bold"
        textAlign="center"
        paddingBottom="1rem"
      >
        Taksboard
      </Styles.Title>
      <FormWrapper>
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

          <S.LoginNavBtn to={ROUTES.AUTH.REGISTER}>Register</S.LoginNavBtn>

          <Styles.Button type="submit">Login</Styles.Button>

        </S.FormContainer>
      </FormWrapper>
    </MainWrapper>
  );
});
