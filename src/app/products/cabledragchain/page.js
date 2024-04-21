import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const Endsupport = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cable Drag Chain</h1>
        <div className="flex justify-center mb-1 grid grid-cols-3 mt-6">
        <div>
        <h5 className='font-bold'>Mono Cable Drag Chain</h5><br/>
        <Link legacyBehavior href="/prod/cdc1.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/cdc1.png' 
          alt='Cable Drag Chain'
          className="w-full md:w-64 h-47 object-cover ml-3 rounded-lg mb-4 md:mb-0 md:mr-3"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">Download PDF</h1>
        </div>
        </a>
        </Link><br/>
        <div className="mb-6">
        <ul className="list-disc pl-6">
        <li>Chain links made of plastic</li>
        <li>Inside space is gentle on the cables- no interfering edges</li>
        <li>Types with single-part chain links</li>
        <li>Types with openable brackets</li>
        <li>Connectors with integrated strain relief</li>
        </ul>
        </div>
        </div><br/>
        <div>
        <h5 className='font-bold'>Uniflex Cable Drag Chain</h5><br/>
        <Link legacyBehavior href="/prod/cdc2.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/cdc2.png' 
          alt='Cable Drag Chain'
          className="w-full md:w-64 h-47 object-cover ml-3 rounded-lg mb-4 md:mb-0 md:mr-3"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">Download PDF</h1>
        </div>
        </a>
        </Link><br/>
        <div className="mb-6">
        <ul className="list-disc pl-6">
        <li>Universal connectors (UMB)</li>
        <li>Designs with inward or outward opening brackets</li>
        <li>Robust, double stroke system for long unsupported lengths</li>
        <li>Single-part connector with integratable strain relief comb</li>
        <li>Designs covered on one side or on both sides with plastic cover system</li>
        </ul>
        </div>
        </div><br/><br/>               
      </div></div>
      <Footer />
    </div>
  );
};

export default Endsupport;
