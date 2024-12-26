import { ChevronRight, CornerRightDown } from "lucide-react";
import { useState } from "react";

export default function Main({ projetos, ferramentas }) {
    const [email, setEmail] = useState("")
    const mailTo = `mailto:codeGuess246@gmail.com?subject=Pedido!&body=${email}`
    return (
        <section className="h-auto w-[50%] max-[700px]:w-full max-[700px]:ml-0 ml-[50%] p-10 max-[700px]:p-2 flex flex-col gap-5">
            <div className="bg-[#60E1E0] flex gap-2 items-center rounded-md mt-10 p-10">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-4xl text-[#D496A7]">Sobre-Mim</h1>
                    <p className="text-xl text-justify">Sou um desenvolvedor Full-Stack com sólida experiência em HTML, CSS, SCSS JavaScript e React, na parte Front-End, especializado na criação de interfaces intuitivas e funcionais. E com Node.js e express, na area de Back-End, fazendo o desenvolvimento de APIs extremamente eficientes.</p>
                </div>
                <img src="" alt="" />
            </div>
            <div className="text-center mt-20">
                <div className="flex justify-center">
                    <h1 className="font-bold text-4xl text-[#361D2E]">Projetos</h1><CornerRightDown className="mt-5" />
                </div>
                {projetos.map((projeto) => (
                    <div className="bg-[#60E1E0] flex max-[700px]:flex-col gap-5 rounded-md mt-10 p-10 max-[700px]:p-2">
                        <img className="w-auto h-[150px] max-[700px]:h-auto  rounded-md shadow-md" src={projeto.image} alt="" />
                        <div className="flex flex-col gap-3 w-full">
                            <h1 className="font-bold text-3xl text-[#D496A7]">{projeto.nome}</h1>
                            <div className="flex gap-2">
                                <div className="flex gap-2 bg-white w-full justify-center p-3 rounded-md shadow-md">
                                    <img className="size-10" src={projeto.ferramenta1} alt="" />
                                    <img className="size-10" src={projeto.ferramenta2} alt="" />
                                    <img className="size-10" src={projeto.ferramenta3} alt="" />
                                </div>
                                <a href={projeto.link} target="_blank" className="w-[20%] flex justify-center items-center text-white rounded-md bg-[#D496A7]"><ChevronRight /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <section className="bg-[#60E1E0] flex flex-col gap-10 items-center rounded-md p-5 mt-20">
                <h1 className="font-bold text-4xl text-[#a87583]">Habilidades</h1>
                <div className="flex flex-col grid-cols-4 max-[700px]:grid-cols-2 grid gap-5">
                    {ferramentas.map((ferramenta) => (
                        <div className="bg-white flex flex-col items-center p-5 rounded-md">
                            <img className="size-[80px]" src={ferramenta.image} alt={ferramenta.alt} />
                            <h2 className="font-bold text-[#a87583]">{ferramenta.name}</h2>
                        </div>
                    ))}
                </div>
            </section>
            <section className="p-5 mt-10 flex flex-col gap-7 items-center text-center">
                <h1 className="font-bold text-3xl text-white"> SEU SITE COMPLETO, DISPONÍVEL EM UMA SEMANA</h1>
                <div className="flex w-full gap-5">
                    <input className="w-full h-10 rounded-md px-2 outline-[#a87583]" type="text" placeholder="Faça seu pedido" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <a className="bg-[#a87583] w-[150px] rounded-md flex justify-center items-center font-bold text-white" href={mailTo} target="_blank">Enviar</a>
                </div>
            </section>
        </section>
    )
}