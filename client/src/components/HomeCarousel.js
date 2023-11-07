import { Carousel } from "@material-tailwind/react";

import bg1 from "../assets/svg/bg1.svg"
import bg2 from "../assets/svg/bg2.svg"
import bg3 from "../assets/svg/bg3.svg"

export default function HomeCarousel() {
  return (
    <Carousel
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span key={i} className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      )}
    >
      <img src={bg1} alt="1" className="h-full w-full object-cover"/>
      <img src={bg2} alt="1" className="h-full w-full object-cover"/>
      <img src={bg3} alt="1" className="h-full w-full object-cover"/>
    </Carousel>
  );
}
