import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const Ballscrews = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Ball Screw</h1>
        <div className="flex justify-center mb-1">
        <Link legacyBehavior href="/products/ballscrews/groundballscrew">
        <a className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">
        <img
          src='/prod/gbs.jpg' 
          alt='Ground Ballscrew'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2">Ground Ballscrew</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/products/ballscrews/rolledballscrew">
        <a className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">
        <img
          src='/prod/rbs.jpg' 
          alt='Rolled Ballscrew'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2">Rolled Ballscrew</h1>
        </div>
        </a>
        </Link>
        </div><br/>
        <div className="mb-6">
        <p>Ballscrews, also called a ball bearing screws, recirculating ballscrews, etc., consist of a screw spindle and a nut integrated with ball and the balls return mechanism, return tubes or return caps.Ballscrews are the most common type of screws used in industrial machinery and precision machines. The primary function of a ballscrew is to convert rotary motion to linear motion or torque to thrust, and vice versa, with the features of high accuracy, reversibility and efficiency.</p>
        <p>Precise procedures to create exact groove profiles, either by grinding or precision rolling. Accurate heat treatment is also used to ensure the hardness of our ballscrew.These result in maximum load capacity and service life.</p>
        <p>Precision ballscrews provide the most smooth and accurate movement, together with low drive torque, high stiffness and quiet motion with predictable lengthened service life.Rolled ballscrew also provide smooth movement and long life for general applications with less precision in lower price.</p>
        <p>It is our pleasure to provide you with the technical information and selection procedure to choose the right ballscrews for your applications through this catalogue.</p>
        </div>
      </div>

      <br/><br/>
      <Footer />
    </div>
  );
};

export default Ballscrews;
