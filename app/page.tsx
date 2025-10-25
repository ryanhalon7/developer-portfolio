/* import Image from "next/image"; */
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import { FloatingNav } from "@/components/ui/FloatingNav";
/* import { FaHome } from "react-icons/fa"; */
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems} className={undefined}        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
