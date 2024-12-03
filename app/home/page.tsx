"use client";

import Image from "next/image";
import NavBar from "../_navBar";

export default function Home() {
  return (
    <main className="w-100vw flex min-h-screen flex-col bg-green-70 p-[87px]">
      <header className="mb-[116px] flex h-[8.75em] flex-col items-end justify-start lg:flex-row">
        <h1 className="min-w-[5.75em] flex-1 text-[8.75em] lg:relative lg:top-[2.45rem] lg:mr-4">
          SOHEE 100
        </h1>
        <div className="flex flex-col gap-2">
          <div className="text-[2em] font-[600]">SOHUI, KIM, SOSIE</div>
          <NavBar />
        </div>
      </header>
      <section className="flex flex-col gap-2 max-lg:mt-[80px]">
        <div className="flex items-end gap-[23px]">
          <Image
            src="https://picsum.photos/418/620"
            width={418}
            height={620}
            alt="main-pick-black"
          />
          <Image
            src="https://picsum.photos/347/509"
            width={347}
            height={509}
            alt="main-pick-tree"
            className="rounded-[136px]"
          />
        </div>
      </section>
    </main>
  );
}
