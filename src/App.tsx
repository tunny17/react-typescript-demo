import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Status from './components/Status';

function App() {

  return (
    <div className="App">
      <Button 
        handleClick={(event, id) => {
          console.log('button click', event, id)
        }}  
      />
      <Input value="" handleChange={(event) => console.log(event)} />

      <Status status='error' />
    </div>
  )
}

export default App;
