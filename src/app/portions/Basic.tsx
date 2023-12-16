import About from "../../../public/about.png";

export default function Basic() {
   return (
    <main className="flex flex-col md:flex-row items-center justify-between px-20 py-4 text-center">

      <div className="md:w-1/2 text-5xl text-center text-[#86c9eb] font-semibold md:text-left">
        <p className="text-shadow-md">
          Crafting Tomorrow's<br/> Digital Landscape with<br/>  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 font-extrabold tracking-wider">
            Web Development
          </span>
        </p>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src={About.src} className="w-full md:w-auto h-auto animate-pulse" alt="About" />
      </div>

    </main>
  );
}
