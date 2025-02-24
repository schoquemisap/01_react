// =====  USO DE ONCLICK   =====
// nos importamos una fucnion con CTRL+ALT+R, -> create a react functional a component with ES7 module system and typescript

import { useState } from "react";

type Props = {
  dato: string[]; // creamos un tipo de dato
};

function List({ dato }: Props) {
  const [index, setIndex] = useState(1); //useState(-1): para que ni seleccione ninguno_
  const handleClick = (i: number) => {
    // 'e' es un event o evento mouseEvent
    setIndex(i);
  };
  return (
    <ul className="list-group">
      {dato.map((elemento, i) => (
        <li
          onClick={() => handleClick(i)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li> // key signamos llave unica a c/elmto,
      ))}
    </ul>
  );
}

export default List;
