import PrimeiraSecao from "components/PrimeiraSecao";
import QuartaSecao from "components/QuartaSecao";
import Rodape from "components/Rodape";
import SegundaSecao from "components/SegundaSecao";
import TerceiraSecao from "components/TerceiraSecao";
import Cabecalho from "./components/Cabecalho";

function App() {
  return (
    <>
      <Cabecalho />
      <PrimeiraSecao />
      <SegundaSecao />
      <TerceiraSecao/>
      <QuartaSecao/>
      <Rodape/>
    </>

  );
}

export default App;
