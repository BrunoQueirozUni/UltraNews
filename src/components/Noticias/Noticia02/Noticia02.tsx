// Imagens
import noticia02 from "../../../../public/imgs/noticia02.jpg";

export function Noticia02() {
  return (
    <>
      <div>
        <figure className="w-[320px] hover:cursor-pointer group text-black">
          <img src={noticia02} alt="" className="w-[320px]" />
          <figcaption className="text-xl font-bold group-hover:underline pt-2 pb-4">
            Quem é Demetrian Titus? O salvador do sistema solar Recidious.
          </figcaption>
          <p>Tenente Demetrian Titus, um dos mais valentes Ultramarinos. Quem ele é?</p>
        </figure>
      </div>
    </>
  );
}