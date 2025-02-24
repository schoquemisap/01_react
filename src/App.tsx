import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["goku", "tangiro", "Eren"]; //creamos lista de array  
  return (
    <Card>
      <CardBody title="hola todos" text="ESTE es el texto" />
      <List dato={list} /> 
      
    </Card>
  ); // desde el componente List recorremos list
}

export default App;
