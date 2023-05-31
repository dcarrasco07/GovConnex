import './App.css';
import { Button } from './components/Button/Button';
import { InputField } from './components/InputField/InputField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome! This is to check whether importing the button and input field components will work. To explore them further, try running <code>npm run storybook</code>
        </p>
        <Button text="Try me!"></Button>
        <br></br>
        <InputField type="email"></InputField>
      </header>
    </div>
  );
}

export default App;
