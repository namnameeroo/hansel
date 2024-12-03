import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const links = {
    MAIN: "/home",
    WORK: "/work",
    STAFF: "/staff",
    PERSONAL_WORK: "/personal-work",
    CV_CONTACT: "/contact",
  };

  return (
    <nav className="flex gap-5 border border-black bg-[#00F01C] px-5 text-[1em]">
      <button onClick={() => router.push(links.MAIN)}>MAIN</button>
      <button onClick={() => router.push(links.WORK)}>WORK</button>
      <button onClick={() => router.push(links.STAFF)} disabled>STAFF</button>
      <button onClick={() => router.push(links.PERSONAL_WORK)} disabled>
        PERSONAL WORK
      </button>
      <button onClick={() => router.push(links.CV_CONTACT)}>CV·CONTACT</button>
    </nav>
  );
}