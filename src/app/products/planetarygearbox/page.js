import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const Planetarygearbox = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Planetary Gear Box</h1>
        <div className="mb-6">
        <p>The APEX servo gearbox has been designed for direct attachment to popular servomotors. The power is transmitted from the motor to sun gear. The sun gear drives three planet gears, which are contained within an internal toothed ring gear. The planet gears are mounted on the planet carrier with double wall supports. The planet carrier is part output shaft. So when the sun gear rotates, it drives the three planet gears inside the ring gear. As planet gears rotate with carries and automatically the output shaft rotates.</p>
        <p>Due to the load sharing into multiple tooth contacts, the gearbox provides the highest torque and stiffness for a given envelope. The other significant advantages are simple and efficient lubrication and a balanced system at high speeds. The balanced kinematics and the associated load sharing makes the gearbox truly  ideal for servo applications.</p>
        </div><br/>
        <h6 className="font-bold">Download PDF:</h6>
        <div className="flex justify-center mb-1 grid grid-cols-2 gap-4 mt-6">
        <Link legacyBehavior href="">
        <a className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/AB.png' 
          alt='AB Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">AB Series</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/AE.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/AE.png' 
          alt='AE Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">AE Series</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/AER.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/AER.png' 
          alt='AER Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">AER Series</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/ABR.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/ABR.png' 
          alt='ABR Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">ABR Series</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="">
        <a className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/PSeries.png' 
          alt='P Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">P Series</h1>
        </div>
        </a>
        </Link>
        </div><br/><br/>              
      </div>
      <Footer />
    </div>
  );
};

export default Planetarygearbox;
