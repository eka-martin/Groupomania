import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form"

import styles from "./Login.module.scss";

const { register, handleSubmit, setError, formState: { errors, isValid }
} = useForm({
  defaultValues: {
    email: '',
    password: '',
  },
  mode: 'onChange',
});

const onSubmit = (values) => {
  console.log(values)
}

export const Login = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Connexion
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email.message)}
          helperText={errors.email.message}
          {...register('email', {required: 'Entrez email'})}
          fullWidth
        />
        <TextField className={styles.field} label="Mot de passe" 
        helperText={errors.password.message}
        {...register('password', {required: 'Entrez password'})}
        fullWidth />
        <Button size="large" variant="contained" fullWidth>
          Log in
        </Button>
      </form>
    </Paper>
  );
};
