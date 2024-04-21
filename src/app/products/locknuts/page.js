import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const Locknuts = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Lock Nuts</h1>
        <div className="flex justify-center mb-1 gap-3">
        <Link legacyBehavior href="/products/locknuts/ysk">
        <a className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">
        <img
          src='/prod/ysk.jpg' 
          alt='YSK Clasp Locking'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2">YSK Clasp Locking</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/products/locknuts/ysr">
        <a className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">
        <img
          src='/prod/ysr.jpg' 
          alt='YSR Radial Locking'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2">YSR Radial Locking</h1>
        </div>
        </a>
        </Link>
        </div>
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Locknuts;
