import './App.css';
import ButtonDark from './components/ButtonDark';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* HOME SECTION */}
      <div className="home gap-10 min-h-screen pt-32 pb-8 flex flex-col mb-20">
        <div className="home-text px-6 md:px-8 lg:px-32 flex flex-col lg:flex-row justify-between gap-3 lg:gap-10">
          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl capitalize font-medium whitespace-nowrap'>start your business, <br/>excel with ours.</h1>
          <div className="subheading lg:w-1/2">
            <p className='mb-3 text-accent'>Scale your business with our digital offerings. From dynamic websites to bespoke software solutions tailored to your needs, we fuel your growth strategy in the digital age.</p>
            <ButtonDark text='get started'/>
          </div>
        </div>
        <div className="home-carousal bg-dark grow text-light flex justify-center items-center">CAROUSAL GOES HERE</div>
      </div>
      {/* ABOUT SECTION */}
      <div className="about px-6 md:px-8 xl:px-48 mb-20">
        <p className='text-center uppercase text-accent'>about us</p>
        <h2 className='text-center capitalize font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-3'>better products for faster business</h2>
        <p className='text-center mb-10'>At Proteron Digital, we value attention to detail over anything else. Our best in class engineers have a knack for acheiving perfection in everything they do and will make sure your business gets a product that is unparalelled by others.</p>
        {/* ABOUT CARDS */}
        <div className="about-cards flex flex-col md:flex-row justify-between gap-3">
          <div className="about-card-large bg-dark text-light md:w-1/2">
            <div className="about-card-large-image h-56 md:h-64" id='about-large-card'>IMAGE</div>
            <div className="about-card-large-text py-8 px-5">
              <h3 className='mb-3 text-xl'>Integrity</h3>
              <p>Guided by a foundation of unwavering integrity and boundless innovation, Proteron Digital stands as a beacon of excellence in the realm of software development. Our journey is rooted in a deep commitment to delivering solutions that transcend expectations.</p>
            </div>
          </div>
          <div className="about-small-cards flex flex-col justify-between gap-3 md:w-1/2">
            <div className="about-small-card flex flex-col md:flex-row bg-dark text-light h-1/2">
              <div className="about-small-card-text py-8 px-5 md:w-1/2 order-2 md:order-1">
                <h3 className='mb-3 text-xl'>Precision</h3>
                <p>With a steadfast focus on quality craftsmanship and a flair for creativity, we embark on each project with sincerity and meticulous attention to detail.</p>
              </div>
              <div className="about-small-card-image md:w-1/2 order-1 md:order-2 h-56 md:h-auto" id='about-small-card-1'>IMAGE</div>
            </div>
            <div className="about-small-card flex flex-col md:flex-row bg-dark text-light h-1/2">
              <div className="about-small-card-text py-8 px-5 md:w-1/2 order-2 md:order-1">
                <h3 className='mb-3 text-xl'>Client-oriented</h3>
                <p>At Proteron Digital, we believe in fostering enduring relationships with our clients, characterized by trust, collaboration, and shared success.</p>
              </div>
              <div className="about-small-card-image md:w-1/2 order-1 md:order-2 h-56 md:h-auto" id='about-small-card-2'>IMAGE</div>
            </div>
          </div>
        </div>


      </div>



    </div>
  );
}

export default App;
