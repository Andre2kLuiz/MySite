import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Andre'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
      <h1>Meu Primeiro app</h1>
      <h2>ja é {newName}</h2>
      <p>boraaa {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"></img>
    </div>
  );
}

export default App;
