// nos importamos una fucnion con CTRL+ALT+R, -> create a react functional a component with ES7 module system and typescript

type Props = {
  dato: string[]; // creamos un tipo de dato
}; 

function List({dato}: Props) {
  return (
    <ul className="list-group">
      {dato.map((elemento) => ( // dato.map: recorremos cada elmto
        <li key={elemento} className="list-group-item">{elemento}</li> // key signamos llave unica a c/elmto, 
      ))}
    </ul>
  );
}

export default List;
