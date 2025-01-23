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
// Fragmento
// interface CardLiz{
//     title: string
//     text: string
// }
// export function Liz(props: CardLiz) {
//   const { ojos, pelo, cuerpo, actitud } = props;
//   return (
//     <>
//       <h5 className="card-ojos">{ojos}</h5>
//       <p className="card-pelo">{pelo}</p>
//       <h1 className="card-cuerpo">{cuerpo}</h1>
//       <span className="card-actitud">{actitud}</span>
//     </>
//   );
// }
interface LizaProps {
  ojos: string;
  pelo: string;
  cuerpo?: string;
  actitud?: string; // actitud? -> aca el signo '?', significa que puede ser opcional colocar ese dato en App.tsx, no obliga a colocar esa variable
  edad: number;
}

export function Liza(props: LizaProps) {
  const { ojos, pelo, cuerpo, actitud } = props;
  let { edad } = props;

  return (
    <>
      <h1 className="liza-ojos">{ojos}</h1>
      <p className="liza-pelo">{pelo}</p>
      <h2 className="liza-cuerpo">{cuerpo}</h2>
      <span className="liza-actitud">{actitud}</span>
      <h3 className="liza-edad">Edad: {edad}</h3>
    </>
  );
}
export default Card;
