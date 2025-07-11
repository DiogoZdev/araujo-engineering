import { Mail, Phone } from "lucide-react";

export function Home() {
  return (
    <>
      <div className="h-[100vh]">
        <div
          className="h-[70%] flex flex-col justify-center items-center bg-base-100"
          style={{
            backgroundImage: "url('/patterns/alum.png')",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="">
            <h1 className="text-[41px] md:text-[82px] font-bold uppercase leading-none text-green-600">
              Medeiros
            </h1>
            <h1 className="text-[52px] md:text-[104px] font-bold uppercase leading-none text-green-600">
              Araujo
            </h1>
            <h1 className="text-[32px] md:text-[65px] font-bold uppercase leading-none text-green-400">
              engenharia
            </h1>
          </div>
        </div>
        <footer className="h-[30%] grid md:grid-cols-2">
          <div className="grid place-content-center bg-green-600 gap-4 p-8">
            <a href="mailto:contato@medeirosaraujo.com.br">
              <div className="flex gap-4 text-sm md:text-xl font-semibold text-base-100">
                <Mail />
                contato@medeirosaraujo.com.br
              </div>
            </a>
            <a href="https://wa.me/554792713621">
              <div className="flex gap-4 text-sm md:text-xl font-semibold text-base-100">
                <Phone /> 47 99271-3621
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-green-500 grid place-content-center p-16">
              <span className="block font-semibold text-sm md:text-xl text-base-100">
                Projetos estruturais e complementares
              </span>
            </div>
            <div
              style={{
                background: "url('/buildingx4.jpg')",
                backgroundSize: "cover",
                backgroundPositionY: -50,
              }}
              className="bg-green-400"
            ></div>
          </div>
        </footer>
      </div>
    </>
  );
}
