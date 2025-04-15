import Magnetic from './Magnetic'

export default function SocialsInfo() {
  const socials = [
    {
      name: "Github",
      url: "https://github.com/Bharat-kasera"
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/bharat-kasera-481a27263/"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/bharat_i"
    },
    {
      name: "X",
      url: "https://x.com/Bharak_dev"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#5542FF] text-white w-full px-5">
      <div className="w-full max-w-7xl p-5 mt-2.5 md:mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-between gap-2.5 text-sm md:text-base">
          <Magnetic>
          <video 
              src="/videos/console.webm" 
              loop 
              muted 
              autoPlay 
              className=""
            />
          </Magnetic>


          {/* Right section with share icon and socials */}
          <div className="flex flex-col md:flex-row items-center gap-2.5">
            {/* Share icon */}
            <div className="flex flex-col items-center gap-[15px]">
              <Magnetic>
              <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src="/share-icon.gif"
                    alt="share-icon"
                    className="object-cover"
                  />
                </div>
              </div>
              </Magnetic>

            </div>
            {/* socials */}
            {socials.map(({ name, url }) => (
              <Magnetic key={name}>
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-xl m-0 p-[2.5px] cursor-pointer text-white font-general uppercase no-underline
                            after:content-[''] after:block after:absolute
                            after:bottom-0 after:left-1/2 after:-translate-x-1/2
                            after:h-px after:w-0 after:bg-white
                            after:transition-all hover:after:w-full"
                >
                  {name}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

  
