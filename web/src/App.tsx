/** @format */

import { useEffect, useState } from "react";

import "./App.css";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <footer className="w-full flex flex-col pt-10 gap-10 bg-white">
        <div className="lg:max-w-[1920px] w-full mx-auto px-3 block lg:hidden">
          <div className="lg:max-w-[1920px] w-full mx-auto">
            <div className="flex flex-col h-[102px] lg:max-w-sm px-4 py-2 border border-black border-solid lg:w-[381px]">
              <span className="uppercase font-bold size-text-lg text-black">newsletter</span>
              <div className="h-full">
                <form className="w-full h-full false">
                  <div className="flex flex-col w-full relative h-full">
                    <div className="flex flex-col flex-1 w-full lg:w-auto justify-end">
                      <input
                        id="newsletter-nome-P0-0"
                        placeholder="NOME"
                        className="placeholder-black border-b border-black border-solid outline-none placeholder:bg-transparent undefined"
                      />
                    </div>
                    <div className="flex flex-col flex-1 w-full lg:w-auto justify-end">
                      <input
                        id="newsletter-email-P0-0"
                        placeholder="E-MAIL"
                        className="placeholder-black border-b border-black border-solid outline-none placeholder:bg-transparent undefined"
                      />
                    </div>
                    <button
                      aria-label="Newsletter"
                      name="newsletter"
                      type="submit"
                      className="absolute right-0 bottom-0 bg-transparent hover:bg-transparent w-fit h-fit flex hover-border-none border-none p-0 inline-flex items-center justify-center cursor-pointer disabled:cursor-not-allowed focus:outline-none"
                    >
                      <svg width="22" height="17" stroke-width="16">
                        <use
                          href="/sprites.svg?__frsh_c=83c6ca9cc14f02b35615e93822184d3ac02f7e19#NewsletterArrow"
                          className="fill-inherit"
                        ></use>
                      </svg>
                    </button>
                  </div>
                </form>
                <div className="hidden h-full items-center">
                  <span className="text-lg text-black"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <details className="group/details lg:pointer-events-none">
          <summary>
            <span className="lg:hidden text-sm uppercase px-3 flex mb-3">
              <em className="text-sm mr-2 group-open/details:hidden block">+</em>
              <em className="text-sm mr-2 group-open/details:block hidden">-</em>Informações
            </span>
            <div className="lg:max-w-[1920px] w-full mx-auto px-3 grid gap-y-8 grid-cols-2 lg:px-14 overflow-hidden h-0 transition-height lg:grid-cols-default lg:gap-x-16 group-open/details:h-[640px] lg:h-full group-open/details:lg:h-full pointer-events-auto">
              <div className="itemWrapper-0 lg:w-fit">
                <span className="uppercase text-sm mb-3 flex text-black 2xl:text-lg font-bold first-letter">
                  INSTITUCIONAL
                </span>
                <ul>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/quem-somos"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      QUEM SOMOS
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/quem-usa"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      QUEM USA
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/nossas-lojas"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      NOSSAS LOJAS
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/fale-conosco"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      FALE CONOSCO
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/trabalhe-conosco"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      TRABALHE CONOSCO
                    </a>
                  </li>
                </ul>
              </div>
              <div className="itemWrapper-1 lg:w-fit">
                <span className="uppercase text-sm mb-3 flex text-black 2xl:text-lg font-bold first-letter">
                  FOLLOW US
                </span>
                <ul>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="https://www.instagram.com/hectoralbertazzi/"
                      target="_blank"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      INSTAGRAM
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="https://www.facebook.com/HectorAlbertazzi"
                      target="_blank"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      FACEBOOK
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="https://www.youtube.com/@hectoralbertazzi805"
                      target="_blank"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      YOUTUBE
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="https://br.pinterest.com/hectoralbertazzi/"
                      target="_blank"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      PINTEREST
                    </a>
                  </li>
                </ul>
              </div>
              <div className="itemWrapper-2 lg:w-fit">
                <span className="uppercase text-sm mb-3 flex text-black 2xl:text-lg font-bold first-letter">
                  DÚVIDAS
                </span>
                <ul>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/perguntas-frequentes"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      PERGUNTAS FREQUENTES
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/formas-de-pagamento"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      FORMAS DE PAGAMENTO
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/trocas-e-devolucoes"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      TROCAS E DEVOLUÇÕES
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/cuidados-com-produtos"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      CUIDADOS COM O PRODUTO
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/garantia"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      GARANTIA
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="/termos-e-politica-de-privacidade"
                      target="_self"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      POLÍTICAS DE PRIVACIDADE E SEGURANÇA
                    </a>
                  </li>
                </ul>
              </div>
              <div className="itemWrapper-3 lg:w-fit">
                <span className="uppercase text-sm mb-3 flex text-black 2xl:text-lg font-bold first-letter">
                  FORMAS DE PAGAMENTO
                </span>
                <ul>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <span className="whitespace-nowrap text-md lg:whitespace-normal">CARTÕES DE CRÉDITO</span>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <span className="whitespace-nowrap text-md lg:whitespace-normal">boleto</span>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <span className="whitespace-nowrap text-md lg:whitespace-normal">PIX</span>
                  </li>
                </ul>
              </div>
              <div className="itemWrapper-4 lg:w-fit">
                <span className="uppercase text-sm mb-3 flex text-black 2xl:text-lg font-bold first-letter">
                  ATENDIMENTO
                </span>
                <ul>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="https://whts.co/cap_hector"
                      target="_blank"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      shop by whatsapp
                    </a>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <span className="whitespace-nowrap text-md lg:whitespace-normal">
                      CONTATO@HECTORALBERTAZZI.COM.BR
                    </span>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <span className="whitespace-nowrap text-md lg:whitespace-normal">SEG. À QUI. DAS 8H ÀS 18H.</span>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <span className="whitespace-nowrap text-md lg:whitespace-normal">
                      SEXTA DAS 8H ÀS 17H (EXCETO FERIADOS).
                    </span>
                  </li>
                  <li className="uppercase text-xs m-0 mt-0 mb-1 text-black my-3 group w-fit group 2xl:text-lg">
                    <a
                      href="https://marketing.hectoralbertazzi.com.br/personal-shopper"
                      target="_blank"
                      className="cursor-pointer  whitespace-nowrap lg:whitespace-normal relative h-[23px] before:left-0 before:absolute before:bottom-0 before:w-0 before:bg-black before:h-[2px] before:flex group-hover:before:opacity-100 group-hover:before:w-full before:transition-width after:duration-300 after:opacity-0 after:absolute after:left-0 after:top-full after:w-full after:h-16 after:pointer-events-none hover:after:pointer-events-auto pb-[2px] px-0"
                    >
                      PERSONAL SHOPPER
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </summary>
        </details>
        <div className="w-full text-center border-t border-black border-solid py-10">
          <a href="/" target="_self" className="cursor-pointer text-sm text-black block hover:underline 2xl:text-lg">
            POLÍTICA DE TROCAS E DEVOLUÇÕES
          </a>
          <span className="block text-sm text-black mt-2 2xl:text-lg">© 2023 HECTOR ALBERTAZZI</span>
        </div>
      </footer>
    </>
  );
}

export default App;
