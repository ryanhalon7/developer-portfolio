import Image from "next/image";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems} className={undefined}        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}
