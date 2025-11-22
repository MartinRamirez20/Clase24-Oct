import Saludo from "./Saludo";
import Hijo from "./Hijos"

function App() {
  return (
    <>
      <Saludo nombre="Juan"/>;
      <Saludo nombre="Pedro"/>;
      <Saludo nombre="Mateo"/>;

      <Hijo>
        <p>Texto en hijo</p>
      </Hijo>
    </>
  );
}

export default App