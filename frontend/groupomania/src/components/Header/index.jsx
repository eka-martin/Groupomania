import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { ReactComponent as Logo } from '../../images/logos/icon-left-font-monochrome-white.svg';

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          
          <Link  to="/">
          <Logo className="logo_img" fill="white" style={{ width: 320, height: 60 }}></Logo>
          </Link>
          
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Créer un post</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Enregistrer</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

