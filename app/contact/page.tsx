"use client";

import Image from "next/image";
import NavBar from "../_navBar";
import { libreBarcode39ExtendedText, roboto, workSansExtraBold } from "../font";

export default function Contact() {
  const workItems = [
    {
      year: 2024,
      contents: (
        <>
          <li>BAMBAM 2nd World Tour closing VCR | DIR, EDIT, DI</li>
          <li>BOMBARAM & HONEYBEE’ by Kaiavant Live | DIR, EDIT, DI</li>
          <li>‘FIFTY-FIFTY’ by BAE173 Ablum Trailer | DIR, EDIT, DI</li>
          <li>‘FIFTY-FIFTY’ by BAE173 M/V | DIR</li>
          <li>‘Bloom’ by Han Seungwoo M/V | 1st AD</li>
        </>
      ),
    },
    {
      year: 2023,
      contents: (
        <>
          <li>
            NIKE seoul style contents With HOSHI of Seventeen | DIR, Edit, DI
          </li>
          <li>NIKE seoul style contents With HoneyJ | DIR, Edit, DI</li>
          <li>NIKE seoul style contents With Lee Gyungah | DIR, Edit, DI</li>
          <li>‘Summer night’ by Kaiavant M/V | DIR, EDIT, DI</li>
          <li>‘SHXT’ by Ryu Sujeong feat.XLYO | DIR, EDIT</li>
          <li>‘百戰無敗’ by TIOT M/V | DIR, EDIT</li>
          <br />
          <li>SAMSUNG DISPLAY CES 2023 ‘Future, Mobilty, Play’ | 1st AD</li>
          <li>‘Shopper’ by IU M/V directed by DPR IAN | 1st production AD</li>
          <li>Discovery Expediton 2023 S/S commercial | 1st AD</li>
          <br />
          <li>Polysooem Fashion film 2023 S/S | Videographer, Edit, DI</li>
          <li>Polysooem Fashion film 2023 F/W | Videographer, Edit, DI</li>
        </>
      ),
    },
    {
      year: 2022,
      contents: (
        <>
          <li>‘Sunflower(P.E.L)’ by Choi youjung M/V | 1st AD</li>
          <li>‘U&Iverse’ by Astro M/V | 1st AD</li>
          <li>‘Rum Pum Pum’ by VIVIZ M/V | 1st AD</li>
          <li>‘Pink’ by Kwon Jinah M/V | 1st AD</li>
          <li>Discovery Expediton 2023 S/S commercial | 1st AD</li>
          <li>RYU ‘Archive of emotions’ Album trailer | 1st AD</li>
        </>
      ),
    },
  ];

  return (
    <main className="w-100vw flex min-h-screen flex-col bg-green-70 max-lg:p-[40px] lg:p-[87px]">
      <header className="mb-[116px] flex h-[8.75em] flex-col justify-start lg:flex-row lg:items-end">
        <h1 className="min-w-[5.75em] flex-1 text-[8.75em] max-lg:text-left lg:relative lg:top-[2.45rem] lg:mr-4">
          SOHEE 100
        </h1>
        <div className="flex flex-col gap-2">
          <div
            className={`text-[2em] font-[600] ${libreBarcode39ExtendedText.className}`}
          >
            SOHUI, KIM, SOSIE
          </div>
          {/* 버튼 영역 */}
          <NavBar />
        </div>
      </header>
      <section className="flex max-lg:flex-col">
        {/* left box */}
        <div className="w-full rounded-tr-[3rem] bg-[#FFFFFF99] max-lg:my-[80px] max-lg:p-[20px] lg:absolute lg:bottom-0 lg:left-0 lg:h-[calc(100vh-295px)] lg:h-[calc(100vh-410px)] lg:w-[40%] lg:pl-[87px] lg:pt-[67px]">
          <div
            className={`text-[2em] font-[600] ${workSansExtraBold.className} `}
          >
            based in London, UK now
          </div>
          <div
            className={`text-[2em] font-[800] ${workSansExtraBold.className} underline`}
          >
            thgml2926@gmail.com
          </div>

          <span className="flex items-center gap-1">
            <Image
              src="/assets/intagram.svg"
              alt="instagram-icon"
              width={29}
              height={29}
            />
            <span
              className={`text-[2em] font-[800] ${workSansExtraBold.className} `}
            >
              100311311_
            </span>
          </span>
        </div>

        {/* right 연혁 */}

        <div className="grid grid-cols-5 lg:ml-[45%]">
          <div
            className={`col-span-1 ${roboto.className} w-[100px] border-r-[1px] border-r-[#11111126] text-[2em]`}
          >
            {workItems[0].year}
          </div>
          <div className="text-md col-span-4 pb-11">
            {workItems[0].contents}
          </div>

          <div
            className={`col-span-1 ${roboto.className} w-[100px] border-r-[1px] border-r-[#11111126] text-[2em]`}
          >
            {workItems[1].year}
          </div>
          <div className="text-md col-span-4 pb-11">
            {workItems[1].contents}
          </div>
          <div
            className={`col-span-1 ${roboto.className} w-[100px] border-r-[1px] border-r-[#11111126] text-[2em]`}
          >
            {workItems[2].year}
          </div>
          <div className="text-md col-span-4 pb-11">
            {workItems[2].contents}
          </div>
        </div>
      </section>
    </main>
  );
}
