import './App.css';
import List from './components/List';

function App() {
  const users = [
    {
      id: 0,
      name: 'Siri'
    },
    {
      id: 1,
      name: 'Alexa'
    },
    {
      id: 2,
      name: 'Google Assistente'
    },
    {
      id: 3,
      name: 'Douglas Henrique - Aula TOP de mais'
    },
    {
      id: 4,
      name: 'Lais Martins'
    }
  ];


  return (
    <div>
      <List items={users} />
    </div>
  );
}

export default App;