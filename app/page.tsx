import Image from "next/image";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            { name: 'Home', link: '/', icon: <FaHome /> }
          ]} className={undefined}        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
