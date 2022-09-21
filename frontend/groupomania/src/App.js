//https://www.section.io/engineering-education/how-to-implement-material-ui-in-react/
import './App.css';
import {Button, TextField} from '@mui/material';

import Counter from './components/Counter';

let n = 0;

function App() {
  
  
  
  const items = [
    'Tache1',
    'Tache2',
    'Tache3',
  ]
  const lis = items.map((item, k) => <li key={k}>{item}</li>)

  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
       <ul>
        {lis}
       </ul>
        <span>{n}</span>
        <Button variant="contained">Contained</Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
      </header>
    </div>
   
  
  );

}



export default App;

window.setInterval(() => {
  n++
  App()
}, 100)