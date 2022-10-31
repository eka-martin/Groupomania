import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});






// const Colors = {
//     primary: '#FD2D01',
//     secondary: '#FFD7D7',
//     tertiaire: '#4E5166',
      
// };

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

//   export default theme;