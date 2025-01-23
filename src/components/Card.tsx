// COMPONENTE Card
interface CardProps {
  body: string;
}
function Card(props: CardProps) {
  props.body;
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{body}</div>
    </div>
  );
}

interface LizProps {
  ojos: string;
  pelo: string;
  cuerpo?: string;
  actitud?: string; // actitud? -> aca el signo '?', significa que puede ser opcional colocar ese dato en App.tsx, no obliga a colocar esa variable
  edad: number;
}

export function Liz(props: LizProps) {
  const { ojos, pelo, cuerpo, actitud } = props;
  let { edad } = props;

  return (
    <>
      <h1 className="liz-ojos">{ojos}</h1>
      <p className="liz-pelo">{pelo}</p>
      <h2 className="liz-cuerpo">{cuerpo}</h2>
      <span className="liz-actitud">{actitud}</span>
      <h3 className="liz-edad">Edad: {edad}</h3>
    </>
  );
}
export default Card;
