import Navbar from '../../components/navbar';
import Products from '../../components/products';
import Footer from '../../components/footer';
import { FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";

const products = [
  {
    id: 'ncrotarytable',
    name: 'NC Rotary Table',
    image: 'prod/ncrot.jpg', 
  },
  {
    id: 'nctiltingtable',
    name: 'NC Tilting Rotary Table',
    image: 'prod/nctil.jpg', 
  },
  {
    id: 'hydraulicindexingtable',
    name: 'Hydraulic Indexing Table',
    image: 'prod/hydrind.jpg', 
  },
  {
    id: 'ballscrews',
    name: 'Ground and Rolled Ball Screw',
    image: 'prod/rbs.jpg', 
  },
  {
    id: 'ballscrewendsupport',
    name: 'Ball Screw End Support',
    image: 'prod/bses.jpg', 
  },
  {
    id: 'couplings',
    name: 'Couplings',
    image: 'prod/couplings.jpg', 
  },        
  {
    id: 'linearmotionguides',
    name: 'Linear Motion Guides',
    image: 'prod/lmg.jpg', 
  }, 
  {
    id: 'linearmotionbearings',
    name: 'Linear Motion Bearings',
    image: 'prod/linearmotionbearings.jpg', 
  },
  {
    id: 'planetarygearbox',
    name: 'Planetary Gear Box',
    image: 'prod/planetarygearbox.jpg', 
  },
  {
    id: 'hardchromeplatedshaft',
    name: 'Hardchrome Plated Shafts & End Support',
    image: 'prod/hardchromeplatedshafts.jpg', 
  },
  {
    id: 'endsupport',
    name: 'Housing & Shaft Support Rail Assembly',
    image: 'prod/endsupport.jpg', 
  },
  {
    id: 'cabledragchain',
    name: 'Cable Drag Chain	',
    image: 'prod/cdc.jpg', 
  },
  {
    id: 'locknuts',
    name: 'Lock Nuts',
    image: 'prod/locknuts.jpg', 
  },
  {
    id: 'aluminiumprofile',
    name: 'Aluminium Profile',
    image: 'prod/aluminiumprofile.jpg', 
  },
  {
    id: 'camfollower',
    name: 'Cam Follower',
    image: 'prod/camfollower.jpg', 
  },
  {
    id: '',
    name: 'Ball Transfer Units',
    image: 'prod/balltransfer.jpg', 
  },
  {
    id: '',
    name: 'Cross Roller Guides',
    image: 'prod/crossrollerguides.jpg', 
  },
  {
    id: '',
    name: 'Self Feed Drilling Spindle Unit',
    image: 'prod/seedfeed.jpg', 
  },
];

export default function Allproducts() {
  return (
    <div className='bg-sky-50'>
      <Navbar />
      <div className="bg-blue-500 text-white py-8 px-4 mt-1">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="text-lg mt-2">Explore our complete range of products.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      <br />
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
