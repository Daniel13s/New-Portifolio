import { ChevronRight, Github, GithubIcon, Instagram, InstagramIcon, LinkedinIcon } from 'lucide-react'
import Main from './components/Main.jsx'
import { v4 } from 'uuid'
import { useState } from 'react'
import Logo1 from "./assets/site1.png"
import Logo2 from "./assets/site2.png"
import Logo3 from "./assets/site3.png"

function App() {
  const [projetos, setProjetos] = useState([
    {
      id: v4,
      nome: "Guess-Code",
      image: Logo1,
      link: "https://guesscode.up.railway.app",
      ferramenta1: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
      ferramenta2: "https://cdn.iconscout.com/icon/free/png-256/free-sass-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-6-pack-logos-icons-2945135.png",
      ferramenta3: "https://logospng.org/download/javascript/logo-javascript-256.png"
    },
    {
      id: v4,
      nome: "Blog-Dev",
      image: Logo2,
      link: "https://blog-dev-ten.vercel.app",
      ferramenta1: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
      ferramenta2: "https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png",
      ferramenta3: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256"
    },
    {
      id: v4,
      nome: "Estação-Jovem",
      image: Logo3,
      link: "https://estacao-jovem-2024.vercel.app",
      ferramenta1: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
      ferramenta2: "https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png",
      ferramenta3: "https://logospng.org/download/javascript/logo-javascript-256.png"
    }
  ])

  const [ferramentas, setFerramentas] = useState([
    {
      name: "HTML",
      alt: "logoHTML",
      image: "https://cdn-icons-png.flaticon.com/256/174/174854.png"
    },
    {
      name: "JavaScript",
      alt: "logoJavaScript",
      image: "https://logospng.org/download/javascript/logo-javascript-256.png"
    },
    {
      name: "CSS",
      alt: "logoCSS",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png"
    },
    {
      name: "Sass",
      alt: "logoSass",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-sass-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-6-pack-logos-icons-2945135.png"
    },
    {
      name: "React",
      alt: "logoReact",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256"
    },
    {
      name: "Node",
      alt: "lgoNode",
      image: "https://logospng.org/download/node-js/logo-node-js-256.png"
    },
    {
      name: "Figma",
      alt: "logoFigma",
      image: "https://cdn-icons-png.flaticon.com/256/5968/5968705.png"
    },
    {
      name: "Git",
      alt: "logoGit",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175219.png?f=webp&w=256"
    }
  ])

  function SobreNos() {
    window.scrollTo(0, 0)
    if (outerWidth < 700) {
      window.scrollTo(0,700)
    }
  }
  function Projetos() {
    window.scrollTo(0, 450)
    if (outerWidth < 700) {
      window.scrollTo(0,1200)
    }
  }
  function Habilidades() {
    window.scrollTo(0, 1250)
    if (outerWidth < 700) {
      window.scrollTo(0,2650)
    }
  }
  function Contato() {
    window.scrollTo(0, 2000)
    if (outerWidth < 700) {
      window.scrollTo(0,4000)
    }
  }
  return (
    <body className='w-screen h-auto bg-[#D496A7]'>
      <section className='h-screen flex flex-col p-5 justify-center gap-10 fixed w-[50%] max-[700px]:w-full max-[700px]:relative bg-[#a87583] shadow-lg'>
        <div className='ml-5'>
          <h1 className='font-bold text-[#361D2E] text-5xl'>Daniel Silva Cardoso</h1>
          <h2 className='text-3xl text-[#D496A7]'>Full-Stack</h2>
        </div>
        <div className='flex flex-col items-start gap-2 ml-8 font-bold text-[#D496A7] text-2xl'>
          <button onClick={SobreNos} className='flex'><ChevronRight />Sobre Mim</button>
          <button onClick={Projetos} className='flex'><ChevronRight />Projetos</button>
          <button onClick={Habilidades} className='flex'><ChevronRight />Habilidades</button>
          <button onClick={Contato} className='flex'><ChevronRight />Contato</button>
        </div>
        <div className='flex gap-5 text-[#361D2E] bg-[#D496A7] p-4 rounded-full justify-center'>
          <a href="https://github.com/Daniel13s">
            <GithubIcon className='size-10' />
          </a>
          <a href="https://www.instagram.com/dandev258/"><InstagramIcon className='size-10' /></a>
          <a href=""><LinkedinIcon className='size-10' /></a>
        </div>
      </section>
      <Main projetos={projetos} ferramentas={ferramentas} />
    </body>
  )
}

export default App
