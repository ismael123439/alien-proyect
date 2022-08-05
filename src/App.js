import "./styles.css";
import aliens from "./aliens";

export default function App() {
  return (
    <div className="App">
      <img
        className="avatarpro"
        src="https://api.minimalavatars.com/avatar/random/png"
      />
      <div className="Text">
        <h1>Nombre:{aliens[name].nombre}</h1>
        <h2>Planeta:{aliens[planet].Planeta}</h2>
        <h2>frase:{aliens[text].frase}</h2>
        <h3></h3>
      </div>
    </div>
  );
}
let name = Math.floor(Math.random() * aliens.length);
let planet = Math.floor(Math.random() * aliens.length);
let text = Math.floor(Math.random() * aliens.length);
