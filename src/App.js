import './App.css';
import Header from './Header';
import Hero from './Hero';
import ban from './banner.jpg'
import banner from './yd.jpg'
import Services from './Services';
import Footer from './Footer';
import Bottom from './Bottom';



function App() {
  return (
    <div>
         <div className="w-full md:-mt-16" style={{  backgroundImage: "url(" + ban + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'500px',
            width:'100%'
          }}></div>

          <Header/>
          <Hero/>

          <div className="md:w-4/5 md:mx-auto md:p-4" style={{  backgroundImage: "url(" + banner + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'300px'
          }}>

          </div>

          <div className="text-center md:w-3/5 md:mx-auto md:p-8">
          <h2 className="font-bold text-3xl text-gray-400 p-4" style={{fontFamily:'Poppins'}}>Unique Handmade Jewelry</h2>
            <p className="p-4">
              DW Jewelry recognizes that the present clients are progressively refined and that preferences are increasingly individualized. 
              So as to give these clients the most abnormal amount of administration, we offer a cutting edge shop fit for making only the
               correct piece for your gemstones or our own.
            </p>
          </div>

          <Services/>
          {/* <Bottom/> */}

          <Footer/>

    </div>
  );
}

export default App;
