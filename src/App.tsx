import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce' ,
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Lex',
      last: 'Luthor',
    }
  ]


  return (
    <div className="App">
      <Greet name='ram' messageCount={11} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  )
}

export default App;
