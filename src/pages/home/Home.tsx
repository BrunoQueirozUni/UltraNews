import { MiniNoticias } from "../../components/MiniNoticias/MiniNoticias";
import { Noticia01 } from "../../components/Noticias/Noticia01/Noticia01";
import { Noticia02 } from "../../components/Noticias/Noticia02/Noticia02";

export function Home() {
  return (
    <>
      <main>
        <section className="w-full h-full flex justify-center pt-20">
          <div className="text-black w-[310px] pt-10 mr-10">
            <MiniNoticias />
          </div>
          <div className="pt-10 flex gap-5">
            <Noticia01 />
            <Noticia02 />
          </div>
        </section>
      </main>
    </>
  );
}
