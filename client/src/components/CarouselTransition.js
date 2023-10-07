import { Carousel, IconButton  } from "@material-tailwind/react";
 
export function CarouselTransition() {
  return (
    <Carousel
    className="w-full md:w-1/2 overflow-visible"
    prevArrow={({ handlePrev }) => (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handlePrev}
        className="!absolute top-2/4 !right-24 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </IconButton>
    )}
    nextArrow={({ handleNext }) => (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleNext}
        className="!absolute top-2/4 !right-10 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IconButton>
    )}
  >
    <div className="slide flex justify-start items-end text-white p-10 h-full w-full md:w-[98%]" id="slide-1">
        <p>Our custom software solutions are engineered to streamline your business operations, and give you the competitive edge to drive your business forward.</p>
    </div>
    <div className="slide flex justify-start items-end text-white p-10 h-full w-full md:w-[98%]" id="slide-2">
        <p>Transforming ideas into exceptional user experiences, our UI/UX designs elevate your digital products to resonate with your audience</p>
    </div>
    <div className="slide flex justify-start items-end text-white p-10 h-full w-full md:w-[98%]" id="slide-3">
        <p>Transforming ideas into exceptional user experiences, our UI/UX designs elevate your digital products to resonate with your audience</p>
    </div>
  </Carousel>
  );
}