"use client";
import NavBar from "../_navBar";
import { rubikBeastly } from "../font";

export default function Page() {
  return (
    <main className="w-100vw flex min-h-screen flex-col bg-black p-[87px]">
      <header className="mb-[116px] flex flex-col items-end justify-start lg:flex-row">
        <h1 className="min-w-[5.75em] flex-1 text-[8.75em] text-green-70 lg:relative lg:top-[2.45rem] lg:mr-4">
          SOHEE 100
        </h1>

        <div className="flex flex-col gap-2">
          <div
            className={`text-[2em] font-[600] text-green-70 ${rubikBeastly.className}`}
          >
            SOHUI, KIM, SOSIE
          </div>
          {/* 버튼 영역 */}
          <NavBar />
        </div>
      </header>

      <section className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-center">
          <iframe
            width="1030"
            height="578"
            src="https://www.youtube.com/embed/A4lULzWoxoI?si=9MaoTadT4f99_SNA&rel=0"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
