import './App.css';
import ButtonDark from './components/ButtonDark';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* HOME SECTION */}
      <div className="home gap-10 min-h-screen pt-32 pb-8 flex flex-col mb-20">
        <div className="home-text px-6 md:px-10 lg:px-32 flex flex-col lg:flex-row justify-between gap-3 lg:gap-10">
          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl capitalize font-medium whitespace-nowrap'>start your business, <br/>excel with ours.</h1>
          <div className="subheading lg:w-1/2">
            <p className='mb-3'>Scale your business with our digital offerings. From dynamic websites to bespoke software solutions tailored to your needs, we fuel your growth strategy in the digital age.</p>
            <ButtonDark text='get started'/>
          </div>
        </div>
        <div className="home-carousal bg-dark grow text-light">CAROUSAL GOES HERE</div>
      </div>
      {/* ABOUT SECTION */}
      <div className="about mb-20">
        <p className='text-center uppercase text-accent'>about us</p>
        <h2 className='text-center capitalize font-medium text-4xl mb-5'>better products for faster business</h2>
        <div className="about-cards w-scree flex justify-items-center items-center">
          <div className="about-large-card">
            <div className="about-large-card-image"></div>
            <div className="about-large-card-text">
              <h3 className='capitalize font-medium'>integrity</h3>
              <p>Guided by a foundation of unwavering integrity and boundless innovation, Proteron Digital stands as a beacon of excellence in the realm of software development. Our journey is rooted in a deep commitment to delivering solutions that transcend expectations.</p>
            </div>
          </div>
          <div className="about-small-cards">
            <div className="about-small-card">
              <div className="about-small-card-text">
                <h3 className='capitalize font-medium'>precision</h3>
                <p>With a steadfast focus on quality craftsmanship and a flair for creativity, we embark on each project with sincerity and meticulous attention to detail</p>
              </div>
              <div className="about-small-card-image"></div>
            </div>
            <div className="about-small-card">
              <div className="about-small-card-text">
                <h3 className='capitalize font-medium'>client-oriented</h3>
                <p>At Proteron Digital, we believe in fostering enduring relationships with our clients, characterized by trust, collaboration, and shared success</p>
              </div>
              <div className="about-small-card-image"></div>
            </div>
          </div>
        </div>
      </div>






    </div>
  );
}

export default App;
