import './App.css';
import ButtonDark from './components/ButtonDark';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* HOME SECTION */}
      <div className="home min-h-screen pb-8 flex flex-col gap-10 pt-32" id='home'>
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
      <div className="about px-6 md:px-8 xl:px-48 py-32" id='about'>
        <p className='text-center uppercase text-accent'>about us</p>
        <h2 className='text-center capitalize font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-10'>better products for faster business</h2>
        <div className="about-cards flex flex-col md:flex-row justify-between gap-3">
          <div className="about-card-large bg-dark text-light md:w-1/2">
            <div className="about-card-large-image h-56 md:h-64" id='about-large-card'>IMAGE</div>
            <div className="about-card-large-text py-8 px-5">
              <h3 className='mb-3 text-xl'>Integrity</h3>
              <p className='text-lightAccent'>Guided by a foundation of unwavering integrity and boundless innovation, Proteron Digital stands as a beacon of excellence in the realm of software development. Our journey is rooted in a deep commitment to delivering solutions that transcend expectations.</p>
            </div>
          </div>
          <div className="about-small-cards flex flex-col justify-between gap-3 md:w-1/2">
            <div className="about-small-card flex flex-col md:flex-row bg-dark text-light h-1/2">
              <div className="about-small-card-text py-8 px-5 md:w-1/2 order-2 md:order-1">
                <h3 className='mb-3 text-xl'>Precision</h3>
                <p className='text-lightAccent'>With a steadfast focus on quality craftsmanship and a flair for creativity, we embark on each project with sincerity and meticulous attention to detail.</p>
              </div>
              <div className="about-small-card-image md:w-1/2 order-1 md:order-2 h-56 md:h-auto" id='about-small-card-1'>IMAGE</div>
            </div>
            <div className="about-small-card flex flex-col md:flex-row bg-dark text-light h-1/2">
              <div className="about-small-card-text py-8 px-5 md:w-1/2 order-2 md:order-1">
                <h3 className='mb-3 text-xl'>Client-oriented</h3>
                <p className='text-lightAccent'>At Proteron Digital, we believe in fostering enduring relationships with our clients, characterized by trust, collaboration, and shared success.</p>
              </div>
              <div className="about-small-card-image md:w-1/2 order-1 md:order-2 h-56 md:h-auto" id='about-small-card-2'>IMAGE</div>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <div className="services bg-dark text-light pt-32 pb-20" id='services'>
          <div className="services-text px-6 md:px-8 lg:px-32">
            <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize mb-3'>offered services</h2>
            <p className='text-accent mb-10'>Explore our services: captivating websites, tailor-made software, and more. Elevate your business with our digital expertise.</p>
          </div>
          <div className="services-carousal ml-6 md:ml-8 lg:ml-32 flex gap-3 overflow-x-hidden">
            <Card id='first' title='Custom Software Development' description='Creating bespoke software solutions tailored to specific business needs'/>
            <Card id='first' title='Web Application Development' description='Building dynamic and interactive web applications for various purposes'/>
            <Card id='first' title='Mobile App Development' description='Designing and developing applications for smartphones and tablets across platforms'/>
            <Card id='first' title='E-commerce Solutions' description='Developing online platforms for businesses to sell products or services'/>
            <Card id='first' title='UI/UX Design' description='Crafting user interfaces and experiences that are intuitive and visually appealing'/>
            <Card id='first' title='Database Management' description='Creating and managing databases to store and organize data efficiently'/>
            <Card id='first' title='Blockchain Solutions' description='Developing applications based on blockchain technology for various industries'/>
            <Card id='first' title='API Development' description='Creating APIs to enable interactions between software components'/>
            <Card id='first' title='Data Analytics and Business Intelligence' description='Providing tools to analyze and visualize data for informed decision-making'/>
          </div>
        </div>



    </div>
  );
}

export default App;
