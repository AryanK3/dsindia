import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const Ballscrewendsupport = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Ball Screw End Support</h1>
        <p className="font-bold">Download PDF:</p>
        <div className="flex justify-center mb-1 grid grid-cols-2 gap-4 mt-6">
        <Link legacyBehavior href="/prod/BF.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/bk.jpg' 
          alt='bk'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">BK</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/BF.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/bf.jpg' 
          alt='bf'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">BF</h1>
        </div>
        </a>
        </Link>
        </div><br/><br/>   
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Ballscrewendsupport;
