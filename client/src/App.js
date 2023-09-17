import './App.css';
import ButtonDark from './components/ButtonDark';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home gap-10 min-h-screen pt-32">
        <div className="home-text px-6 md:px-32 flex flex-col lg:flex-row gap-10  mb-10">
          <h1 className='text-4xl md:text-5xl capitalize font-medium whitespace-nowrap'>start your business, <br/>excel with ours.</h1>
          <div className="subheading">
            <p className='mb-5 text-justify'>Scale your business with our digital offerings. From dynamic websites to bespoke software solutions tailored to your needs, we fuel your growth strategy in the digital age.</p>
            <ButtonDark text='get started'/>
          </div>
        </div>
        <div className="home-carousal bg-accent">1</div>
      </div>
    </div>
  );
}

export default App;
