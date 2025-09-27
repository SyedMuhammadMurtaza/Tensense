import Hero from "@/app/components/home/Hero";
import NavBar from "@/app/components/navBar/NavBar";

export default function HomePage() { return ( 
  
<> 
  
<div className="p-[2px] h-[120vw] md:h-[80vw] lg:h-[50vw]  ">
<NavBar/>

<Hero/>
<h1 className="h-96"></h1>
</div>
  </> 
  ); }