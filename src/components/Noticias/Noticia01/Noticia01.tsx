// Imagens
import noticia01 from "../../../../public/imgs/noticia01.jpg";

export function Noticia01() {
  return (
    <>
      <div>
        <figure className="w-[600px] hover:cursor-pointer group text-black">
          <img src={noticia01} alt="" className="w-[600px]" />
          <figcaption className="text-xl font-bold group-hover:underline pt-2 pb-4">
            As invasões Tirânidas: O que são? E o futuro da galáxia, diante da invasão em massa.
          </figcaption>
          <p>Não é nenhuma novidade que os tiranidos estão em constante batalha pela dominação da nossa galáxia, mas a questão é, quem são eles? De onde vieram? e por que querem a nossa galáxia?</p>
        </figure>
      </div>
    </>
  );
}
