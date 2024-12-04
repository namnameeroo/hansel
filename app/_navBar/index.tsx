import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const links = {
    MAIN: "/home",
    WORK: "/work",
    STAFF: "/staff",
    PERSONAL_WORK: "/personal",
    CV_CONTACT: "/contact",
  };

  return (
    <nav className="align-center flex justify-end whitespace-nowrap border border-black bg-[#00F01C] text-[1em] max-lg:justify-around max-sm:text-[0.6em] sm:gap-5 sm:px-4 sm:text-[0.85em]">
      <button onClick={() => router.push(links.MAIN)}>MAIN</button>
      <button onClick={() => router.push(links.WORK)}>WORK</button>
      <button onClick={() => router.push(links.STAFF)}>STAFF</button>
      <button onClick={() => router.push(links.PERSONAL_WORK)}>
        PERSONAL WORK
      </button>
      <button onClick={() => router.push(links.CV_CONTACT)}>CV·CONTACT</button>
    </nav>
  );
}
