import "./Main.css";
import Anuncios from '../ItensAnuncios/ItensAnuncios';

function Main() {
  return (
    <main className="backgroundMain">
      <div className="button-box">
        <button className="button-top">BLACK FRIDAY TÁ NA MÃO</button>
        <h2 className="subtitle">LIQUIDA FULL</h2>
        <button className="button-left">ENTREGA <i>FULL</i></button>
        <button className="button-right">ATÉ<i> 70% </i>OFF</button>
        <h3 className="entregaFullText">
          *Entrega em até 48 horas válidas para produtos FULL, de segunda-feira
          a sábado.<br></br>
          Consulte as condições em loremipsum.com.br/envios-full.
        </h3>
        <Anuncios />
      </div>
    </main>
  );
}

export default Main;
