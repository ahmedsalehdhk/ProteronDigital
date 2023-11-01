import { Carousel } from "@material-tailwind/react";
 
import img1 from '../assets/home-carousal/home-carousal-image-1.png'
import img2 from '../assets/home-carousal/home-carousal-image-2.png'

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src='https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src='https://images.pexels.com/photos/325649/pexels-photo-325649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src='https://images.pexels.com/photos/10874566/pexels-photo-10874566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}