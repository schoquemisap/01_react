import { ReactNode } from "react";

interface Props {
  children: ReactNode; // children: es una propiedad especial y única p/ pasar propiedades en componenetes con todo tipo de variables
} // ReactNode: pasa todo tipo de datos y variables
function Card(props: Props) {
  const { children } = props; // Uso de children
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string; 
  text: string;
}
// children: es una propiedad especial y única
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <div>
      <div className="card-body">{title}</div>
      <div className="card-body">{text}</div>
    </div>
  );
}
export default Card;