import Navbar from '../components/navbar';
import Carousell from '../components/carousell';
import Footer from '../components/footer';
import Link from 'next/link';
import { FaTools, FaDownload, FaIndustry, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaSheetPlastic, FaShirt, FaRobot, FaBriefcaseMedical } from "react-icons/fa6";
import { TfiPackage } from "react-icons/tfi";
import { BiSolidPrinter } from "react-icons/bi";
import { MdOutlineElectricBike, MdFlight } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { CiMicrochip } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { GiSewingMachine, GiMeltingMetal } from "react-icons/gi";

const slides = [
  {
    imageSrc: '/prod/lmg.jpg',
    imageAlt: 'Linear Motion Guides',
    caption: 'Linear Motion Guides',
    description: 'Take up loads, Enhance moving accuracy, and  Achieve high precision linear motion',
  },
  {
    imageSrc: '/prod/planetarygearbox.jpg',
    imageAlt: 'Planetary Gearbox',
    caption: 'Planetary Gearbox',
    description: 'Provide the highest torque and stiffness, Balanced kinematics, and Associated load sharing for servo applications',
  },
  {
    imageSrc: '/prod/rbs.jpg',
    imageAlt: 'Ballscrews',
    caption: 'Ballscrews',
    description: 'Convert rotary motion to linear motion or torque to thrust, and vice versa, with high accuracy, reversibility and efficiency.',
  },
];

const icons = [
  { icon: FaRobot, label: 'Robotics/Automation' },
  { icon: TfiPackage, label: 'Packaging' },
  { icon: MdOutlineElectricBike, label: 'Electronics' },
  { icon: FaBriefcaseMedical, label: 'Pharmaceutical' },
  { icon: FaCar, label: 'Automotive' }, 
  { icon: BiSolidPrinter, label: 'Printing' },
  { icon: FaSheetPlastic, label: 'Plastics' },
  { icon: GrUserWorker, label: 'Assembly/Welding' },
  { icon: GiSewingMachine, label: 'SPMs' },
  { icon: IoFastFood, label: 'Food/Beverage' },
  { icon: FaShirt, label: 'Textile/Materials' },
  { icon: MdFlight, label: 'Aerospace' },
]

export default function Home() {
  return (
    <div style={{backgroundColor: '#f6fbfc'}}>
      <Navbar />
      <Carousell slides={slides} />
      <br/><br/>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Link legacyBehavior href="/products">
          <a className="bg-gradient-to-b from-sky-50 to-sky-100 ml-3 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-sky-950 hover:text-sky-600 transition-colors">
            <FaTools className="mb-4" size={48} />
            <h2 className="text-xl font-bold mb-2">All Solutions</h2>
            <p className="text text-center">Browse our complete range of products.</p>
          </a>
        </Link>
        <a href="/border2.pdf" download className="bg-gradient-to-b from-sky-50 to-sky-100 shadow-md mr-3 rounded-lg p-6 flex flex-col items-center justify-center text-sky-950 hover:text-sky-600 transition-colors">
          <FaDownload className="mb-4" size={48} />
          <h2 className="text-xl font-bold mb-2 text-center">Download Catalogue</h2>
          <p className="text text-center">Download our catalogue in PDF format.</p>
        </a>
      </div>
      <br/>
      <div className="container mx-auto py-6 flex items-center mt-3">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-center">House of World Class Linear-Rotary Motion Products for Machine tools & Industrial Automation</h2>
              <p className="text-sky-950 text-center">
              We eliminate the need for extensive, expensive component, system design and time consuming searches through different manufacturers.
              </p>
          </div>
          <div className="w-1/2 pl-7">
            <div className="border-l border-sky-900 h-full">
              <p className="text-sky-950 mb-4 ml-8">
              In our broad line up of In-stock Products, Competitive Prices, and Skilled Technical Advisors, you will find the One-stop Solution for each and every Manufacturing Challenge.
              </p>
              <p className="text-sky-950 text-right ml-8">
              We import High Quality Precision Linear Motion products at Economical Prices from Various Parts of the World to be used in Various Industries.
              </p>
            </div>
          </div>
      </div>  
      <br/>
      <div className="bg-sky-100 py-4 grid grid-cols-3 md:grid-cols-4 gap-4">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <item.icon size={32} />
          <span className="text-lg font-bold mt-2">{item.label}</span>
        </div>
      ))}
      </div>
      <br/>
      <div className="container mx-auto py-8 flex items-center mt-3">
          <div className="w-1/2 pl-4">
            <div className="h-full">
              <p className="text-sky-950 mb-4 text-center">
              Our Success and Reputation is built on a commitment to attain total customer satisfaction through Quality, Flexibility, Ingenuity, Dependability and Value. With your first experience you will know you have come to the right place.
              </p>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <div className="border-l border-sky-900 h-full">
            <h2 className="text-3xl font-bold mb-2 text-center ml-8">Industry Excellence Since 20 Years</h2>
              <p className="text-sky-950 mb-4 text-center ml-8">
              Our Products are widely used by Popular Manufacturers in diverse fields across the globe
              </p>
            </div>
          </div>
      </div>  

      <div className="fixed bottom-0 right-0 p-4 flex flex-col gap-4">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
          <FaWhatsapp className="inline-block mr-2" /> WhatsApp
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
          <FaFacebook className="inline-block mr-2" /> Facebook
        </a>
        <a href="mailto:info@example.com" className="bg-sky-950 text-white px-4 py-2 rounded-md shadow-md hover:bg-sky-950 transition-colors duration-300">
          <FaEnvelope className="inline-block mr-2" /> Email
        </a>
      </div>
      <Footer />
    </div>
  );
}
