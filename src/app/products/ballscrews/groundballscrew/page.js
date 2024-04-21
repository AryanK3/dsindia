import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import Link from 'next/link';
const Groundballscrew = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Ground Ball Screw</h1>
        <p className="font-bold">Download PDF:</p>
        <div className="flex justify-center mb-1 grid grid-cols-2 gap-4 mt-6">
        <Link  legacyBehavior href="/prod/fdw.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/FDW.png' 
          alt='FDW'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">FDW</h1>
        </div>
        </a>
        </Link>
        <Link  legacyBehavior href="/prod/fdi.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/FDI.png' 
          alt='FDI'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">FDI</h1>
        </div>
        </a>
        </Link>
        <Link  legacyBehavior href="/prod/fsw.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/FSW.png' 
          alt='FSW'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">FSW</h1>
        </div>
        </a>
        </Link>
        <Link  legacyBehavior href="/prod/fsi.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/FSI.png' 
          alt='FSI'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">FSI</h1>
        </div>
        </a>
        </Link>
        </div><br/><br/>
        <div className="mb-6">
        <p className="font-bold">Accuracy Grade of HIWIN Ballscrews</p>
        <p>Precision ground ballscrews are used in applications requiring high positioning accuracy and repeatability, smooth movement and long service life. Ordinary rolled ballscrews are used for application grade less accurate but still requiring high efficiency and long service life. Precision grade rolled ballscrews have an accuracy between that of the ordinary grade rolled ballscrews and the higher grade precision ground ballscrews. They can be used to replace certain precision ground ballscrews with the same grade in many applications</p>
        </div><br/>
        <div className="mb-6">
        <p className="font-bold">Accuracy Grade</p>
        <p>There are numerous applications for ballscrews from high precision grade ballscrews, used in precision measurement and aerospace equipment, to transport grade ballscrews used in packaging equipment. The quality and accuracy classifications are described as follows: lead deviation, surface roughness, geometrical tolerance, backlash,drag torque variation, heat generation and noise level.</p>
        <p>HIWIN precision ground ballscrews are classified to 7 classes. In general, HIWIN precision grade ballscrews are defined by the so called “V300p” value see Fig 4.12 and rolled grade ballscrews are defined differently as shown in Chapter 7. Fig. 4.12 is the lead measuring chart according to the accuracy grade of the ballscrews. The same chart by the DIN system is illustrated in Fig. 4.13. From this diagram, the accuracy grade can be determined by selecting the suitable tolerance in Table 4.2. Fig. 4.14 shows HIWIN’s measurement result according to the DIN standard. Table 4.2 shows the accuracy grade of precision grade ballscrews in HIWIN’s specification.The relative international standard is shown in Table 4.3.</p>
        <p>The positioning accuracy of machine tools is selected by ep value with the V300p variation. The recommended accuracy grade for machine applications is shown in Table 4.5. This is the reference chart for selecting the suitable ballscrews in different application fields.</p>
        </div><br/>
        <div className="mb-6">
        <p className="font-bold">Axial play (Backlash)</p>
        <p>If zero axial play ballscrews (no backlash) are needed, preload should be added and the preload drag torque is specified for testing purpose. The standard axial play of HIWIN ballscrews is shown in Table 4.4.For CNC machine tools, lost motion can occur in zero-backlash ballscrews through incorrect stiffness. Please consult our engineers when determining stiffness and backlash requirements.</p>
        </div><br/>
        <div className="mb-6">
        <p className="font-bold">Geometrical tolerance</p>
        <p>It is crucial to select the ballscrew of the correct grade to meet machinery requirements. Table 4.6 and Fig 4.15 are helpful for you to determine the tolerance factors, which are based on certain required accuracy grades.</p>
        </div><br/>
        <img
          src='/prod/gbshiwin.jpg' 
          alt='Ground Ballscrew'
          className="w-100"
        />        
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Groundballscrew;
