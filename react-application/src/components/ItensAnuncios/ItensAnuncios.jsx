import "./ItensAnuncios.css";
import ImageTV from "./tv-anuncio.png";
import ImageIphone from "./iphone-anuncio.png";
import ImageBomb from "./bomb-item.png";

const Anuncios = () => {
  return (
    <div>
      <img src={ImageIphone} className="imagemIphone" alt="" />
      <img src={ImageTV} className="imagemTV" alt="" />
      <img src={ImageBomb} className="bombImage" alt="" />
    </div>
  );
};

export default Anuncios;
