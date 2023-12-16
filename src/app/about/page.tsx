import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "../../../public/myimage.jpg";

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-gray-700 to-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100">
          About Me
        </h2>
        <div className="grid grid-cols-12 space-x-4">
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <img
              src={Profile.src}
              alt="Profile"
              className="w-full md:w-4/5 h-auto rounded-lg"
            />
          </div>
          <div className="col-span-12 md:col-span-7 text-left">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-gray-400">
              Assalam U Alaikum! <br/>I'm{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100">
                Sameed Saeed Khan
              </span>,<br/> a passionate{' '}
                Web Developer{' '}
              with a strong background in creating dynamic and user-friendly websites.
            </h1>
          </div>
        </div>

        <div className="flex item-center justify-center mt-8">
          <Tabs defaultValue="account" className="w-full md:w-[400px]">
            <TabsList className="w-full md:w-[400px] text-xs lg:text-4xl md:text-2xl sm:text-lg">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="certification">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="text-lg font-bold mb-2 text-[#86c9eb]">2020 - Present</p>
                  <p className="text-gray-400">Currently pursuing a <span className="text-[#86c9eb] font-bold">Bachelor's degree in Computer Science</span> from Dawood University of Engineering and Technology.</p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2 text-[#86c9eb]">2018 - 2020</p>
                  <p className="text-gray-400">Completed <span className="text-[#86c9eb] font-bold">A-Levels at Hira Foundation School</span>, contributing to a solid foundation in education and personal development.</p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2 text-[#86c9eb]">2016 - 2018</p>
                  <p className="text-gray-400">Attained <span className="text-[#86c9eb] font-bold">O-Levels at Hira Foundation School</span>, where the journey of academic excellence and skill development began.</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="experience">

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="text-lg font-bold mb-2 text-[#86c9eb]">September 2023</p>
                  <p className="text-gray-400">
                    In September 2023, I embarked on a fulfilling journey as an <span className="text-[#86c9eb] font-bold">Intern Web Developer at CodSoft</span>. This experience allowed me to delve into real-world web development projects, enhancing my skills and contributing to innovative solutions.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2 text-[#86c9eb]">August 2023</p>
                  <p className="text-gray-400">
                    Throughout August 2023, I had the privilege of being an <span className="text-[#86c9eb] font-bold">Intern Web Developer at LetsGrowMore</span>. This valuable opportunity enabled me to further hone my web development expertise, collaborating on exciting projects.
                  </p>
                </div>
              </div>

            </TabsContent>

            <TabsContent value="certification">
              <div className="text-center ms-2 pt-4 pb-4">
                
                <h2 className="text-xl font-bold mt-2 text-[#86c9eb]">
                  Front-End Web Developer
                </h2>
                <h3 className="text-gray-400 text-lg">
                  Aptech Learning Institute
                </h3>

                <h2 className="text-xl font-bold mt-2 text-[#86c9eb]">
                  React Basics 
                </h2>
                <h3 className="text-gray-400 text-lg">
                  HAZZA Institute
                </h3>

                <h2 className="text-xl font-bold mt-2 text-[#86c9eb]">
                  AI, Web 3.0 and Metaverse 
                </h2>
                <h3 className="text-gray-400 text-lg">
                  In Progress - PIAIC
                </h3>

              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
