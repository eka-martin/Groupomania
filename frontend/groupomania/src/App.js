//https://www.section.io/engineering-education/how-to-implement-material-ui-in-react/
import './App.css';
import {Button, TextField} from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hello world!!!</h1>
        <Button variant="contained">Contained</Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
      </header>
    </div>
  );
}

export default App;
