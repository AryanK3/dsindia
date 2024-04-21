import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import Link from 'next/link';
const Rolledballscrew = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Rolled Ball Screw</h1>
        <p className="font-bold">Download PDF:</p>
        <div className="flex justify-center mb-1 grid grid-cols-3 gap-4 mt-6">
        <Link legacyBehavior href="/prod/fsir.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/FSIr.png' 
          alt='FSIr'
          className="w-full md:w-64 h-47 object-cover ml-3 rounded-lg mb-4 md:mb-0 md:mr-5"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">FSI</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/fshr.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/FSHr.png' 
          alt='FSHr'
          className="w-full md:w-64 h-47 object-cover ml-3 rounded-lg mb-4 md:mb-0 md:mr-5"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">FSH</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/ssvr.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/SSVr.png' 
          alt='SSVr'
          className="w-full md:w-64 h-47 object-cover ml-3 rounded-lg mb-4 md:mb-0 md:mr-5"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">SSV</h1>
        </div>
        </a>
        </Link>
        </div><br/><br/>
        <div className="mb-6">
        <p>HIWIN Rolled Ballscrews are made by the rolling process of the screw spindle instead of the grinding process. Rolled ballscrews not only have the benefit of low friction and smooth running for the linear feed system compared with traditional screws, but also can be supplied by quick stock delivery and lower production price.</p>
        <p>HIWIN uses the most advanced technology in the ballscrew rolling process. By maintaining the homogeneous manufacturing procedure of selecting materials, rolling, heat treating, machining and assembling.</p>
        <p>In general, rolled ballscrews use the same preload method as the precision ground ballscrews, except that there are some differences in the lead error definition and the geometric tolerance. The grade of the rolled ballscrews can be ordered according to the same nut dimension of the precision ground ballscrew. If the ends of the spindle are unmachined, the geometric tolerance does not apply. The production scale of each type of the ballscrews and the accuracy classification are described in the following sections (the unit of length used is in mm).</p>
        <p>Table 7.1 gives the lead accuracy of the precision rolled ballscrews. The lead accuracy is measured by the accumulated lead error of any portion of 300 mm in length. The maximum axial plays of the precision rolled ballscrews are shown in Table 7.2. These ballscrews can be preloaded as the precision ground ones. The categories of the precision rolled ballscrews are listed in Table 7.3.</p>
        <p>Fig. 7.1 show the geometric tolerance of the general rolled ballscrews. has a variety of the precision rolled ballscrews for our customers urgent requirement.</p>
        </div><br/>
        <img
          src='/prod/rbshiwin.jpg' 
          alt='Ground Ballscrew'
          className="w-100"
        />        
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Rolledballscrew;
