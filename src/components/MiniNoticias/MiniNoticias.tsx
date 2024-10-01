import noticias from "../../../MiniNoticias.json";

// Função para formatar a data
function formatDate(dateString: string) {
   const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
   return new Date(dateString).toLocaleDateString('pt-BR', options);
 }

export function MiniNoticias() {
  return (
    <>
      <div className="text-black w-[310px]">
        {noticias.mininoticias.map((noticia) => (
          <div className="group cursor-pointer">
            <h1 className="font-bold text-lg py-2 group-hover:underline">{noticia.title}</h1>
            <p className="text-sm">{noticia.description}</p>
            <div className="text-xs pt-7">
               <span>{formatDate(noticia.createdAt)}</span>
               <span> │ </span>
               <span>{noticia.tags}</span>
            </div>
            <div className="w-full h-[1px] my-3 bg-gray-300"></div>
          </div>
        ))}
      </div>
    </>
  );
}
