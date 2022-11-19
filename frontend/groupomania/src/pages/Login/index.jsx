import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";


import styles from "./Login.module.scss";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    //mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
console.log(data)

if (!data.payload) {
  return alert("Vous n'etes pas autorisé11111")
}

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    } 
  };

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <Paper elevation={0} classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Connexion
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Entrez email' })}
          fullWidth
        />
        <TextField className={styles.field} label="Mot de passe"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Entrez password' })}
          fullWidth />
        <Button  type="submit" size="large" variant="contained" fullWidth>
          Log in
        </Button>
      </form>
    </Paper>
  );
};
