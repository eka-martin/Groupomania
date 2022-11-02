import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: '#FD2D01',
  secondary: '#FFD7D7',
  tertiaire: '#4E5166',
    
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    tertiaire: {
      main: Colors.tertiaire,
    },
  },
  
  shadows: ["none"],
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
});








// const theme = createTheme({
//     palette: {
//       primary: {
//         main: Colors.primary,
//       },
//       secondary: {
//         main: Colors.secondary,
//       },
//       tertiaire: {
//         main: Colors.tertiaire,
//       },
//     },
//   });

  // export default theme;