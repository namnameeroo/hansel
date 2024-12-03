"use client";

import Image from "next/image";
import NavBar from "../_navBar";

export default function Home() {
  return (
    <main className="w-100vw flex min-h-screen flex-col overflow-x-auto bg-green-70 max-lg:p-10 max-sm:p-5 lg:p-[87px]">
      <header className="mb-[7.25em] flex h-[8.75em] flex-col justify-start lg:flex-row lg:items-end">
        <h1 className="min-w-[5.75em] flex-1 max-lg:text-left max-sm:text-[3.5em] sm:text-[8.75em] lg:relative lg:top-[2.45rem] lg:mr-4">
          SOHEE 100
        </h1>
        <div className="flex flex-col gap-2">
          <div className="text-[1.2em] font-[600] sm:text-[2em]">
            SOHUI, KIM, SOSIE
          </div>
          <NavBar />
        </div>
      </header>
      <section className="flex flex-col gap-2 max-lg:mt-[5em]">
        <div className="flex items-end gap-6">
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
