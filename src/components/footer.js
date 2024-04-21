import Link from 'next/link';
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#015D9D' }} className="text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <FaPhone/><p>+91-9845301157</p><p>+91-9731981776</p>
          <IoMdMail/><p>sales@dsindia.in</p><p>sakisystems@gmail.com</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <p>#33 Sai Saki Mansion, 4th Cross</p>
          <p>Lake V Garden Layout, Kereguddadahalli</p>
          <p>Bangalore- 560090</p>
          <br/><br/>
          <Link href=''>
            <div className="text-center md:text-left">
              <h1 className="text-xl underline text-sky-500 hover:text-blue-500  font-bold mb-2">Scroll top</h1>
            </div>
          </Link> 
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.7134969244838!2d77.51307890021127!3d13.081994159668843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae234ff9a5abfd%3A0xbd304492a5452e3d!2sDYNAMIC%20SYSTEMS!5e0!3m2!1sen!2sin!4v1712241870826!5m2!1sen!2sin" 
              style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
