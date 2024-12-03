import Image from "next/image";

export default function Page() {
  return (
    <main className="w-100vw min-h-screen bg-green-70">
      <div className="fixed left-[87px] top-[122px] flex items-end">
        <h1 className="max-w-[803px] text-[140px]">SOHEE 100</h1>
        {/* <NavigationMenuBar /> */}
        <div>
          <Image src="/assets/logo.svg" width={100} height={100} alt="logo" />
        </div>
        <div className="flex gap-5">
          <button>MAIN</button>
          <button>WORK</button>
          <button>STAFF</button>
          <button>PERSONAL WORK</button>
          <button>CV·CONTACT</button>
        </div>
      </div>
    </main>
  );
}
