
import Hero from "@/components/layout/Hero";
import Homemenu from "@/components/layout/Homemenu";
import Sectionheader from "@/components/layout/Sectionheader";


export default function Home() {
  return (
    <>
    
    <Hero />
    <Homemenu />

    <section className="text-center my-16">
     <Sectionheader subheader={'our story'} mainheader={'About Us'} />
     <div className="flex gap-4 flex-col mt-4  w-full max-w-2xl m-auto">
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     </div>
    </section>

    {/* contact */}
    <section>
      <Sectionheader subheader={'dont hesitate'} mainheader={'Contact Us'} />
      <div className="text-center">
        <h2 className="text-4xl text-black mt-4 font-semibold italic">+03171827821</h2>
      </div>
    </section>

    <footer className="border-t-2 p-8 text-center mt-16  text-gray-400">
      @  2024 All right sreserved
    </footer>
    </>
  );
}
