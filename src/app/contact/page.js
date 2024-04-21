import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { FaTools, FaDownload, FaIndustry, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className='bg-sky-50'>
      <Navbar />
      <div className="text-center text-gray-900"><br/>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>#33 & 34, SAI SAKI Mansion, 4th Cross,<br/>
        Lake V Garden Layout, Kereguddadahalli, Bangalore-560 090</p>
        <p>Mobile :	+91 99454 44883<br/>
        Mobile :	09845301157</p>
        <p>
        E-mail :	sales@dsindia.in, 
        kiran@dsindia.in,
        kirancr683@gmail.com
        </p><p>
        Website :	 www.dsindia.in
        </p>
      </div>
      <br />
      <div className="fixed bottom-0 right-0 p-4 flex flex-col gap-4">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
          <FaWhatsapp className="inline-block mr-2" /> WhatsApp
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
          <FaFacebook className="inline-block mr-2" /> Facebook
        </a>
        <a href="mailto:info@example.com" className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition-colors duration-300">
          <FaEnvelope className="inline-block mr-2" /> Email
        </a>
      </div>
      <Footer />
    </div>
  );
}
