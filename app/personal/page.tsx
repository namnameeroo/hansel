"use client";
// import Image from "next/image";
import NavBar from "../_navBar";
import { dotGothic, rubikBeastly } from "../font";
import Magazine from "./Magazine";

export default function Personal() {
  return (  
    <main className="w-100vw flex min-h-screen flex-col overflow-x-auto bg-black max-lg:p-10 max-sm:p-5 lg:p-[87px]">
      <header className="mb-[7.25em] flex h-[8.75em] flex-col justify-start lg:flex-row lg:items-end">
        <h1 className="min-w-[5.75em] flex-1 text-green-70 max-lg:text-left max-sm:text-[3.5em] sm:text-[8.75em] lg:relative lg:top-[2.45rem] lg:mr-4">
          SOHEE 100
        </h1>

        <div className="flex flex-col gap-2">
          <div
            className={`text-[1.2em] font-[600] text-green-70 sm:text-[2em] ${rubikBeastly.className}`}
          >
            SOHUI, KIM, SOSIE
          </div>
          <NavBar />
        </div>
      </header>

      <section className={`flex flex-col gap-2 max-lg:mt-[5em]`}>
        <div
          className={`mb-[2em] pl-[39px] text-[1.2em] font-[600] text-white sm:text-[2em] ${dotGothic.className}`}
        >
          from the world,
        </div>
      </section>

      {/* <Image
          src={images[0]}
          alt="personal"
          width={418}
          height={620}
          // className=""
        /> */}
      <Magazine />
    </main>
  );
}
