import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const Linearmotionguides = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Linear Motion Guide</h1>
        <div className="mb-6">
        <p>A Linear guide way allows a type of linear motion that utilizes rolling elements such as balls or roller. By using recirculation rolling elements between the rail and the block, a linear guide way can achieve high precision linear motion. Compared to a traditional slide, the coefficient of friction for a linear guide way is only 1/50th. Because of the restraint effect between the rails and the blocks, linear guide ways can take up loads in both the up/down and the left/right directions. With these features, linear guide ways can greatly enhance moving accuracy, especially, when accompanied with precision ball screws.</p>
        </div><br/>
        <h6 className="font-bold">Download PDF:</h6>
        <div className="flex justify-center mb-1 grid grid-cols-2 gap-4 mt-6">
        <Link legacyBehavior href="/prod/HG.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/HG.png' 
          alt='HG Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">HG Series</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/EG.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/EG.png' 
          alt='EG Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">EG Series</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/RG.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/RG.png' 
          alt='RG Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">RG Series</h1>
        </div>
        </a>
        </Link>
        <Link legacyBehavior href="/prod/MG.pdf" passHref>
        <a target="_blank" className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">        
        <img
          src='/prod/MG.png' 
          alt='MGN/MGW Series'
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2 mr-4">MGN/MGW Series</h1>
        </div>
        </a>
        </Link>
        </div><br/><br/><br/>
        <div className="mb-6">
        <h5 className="font-bold">Advantages and Features of Linear Guideways</h5><br/>
        <p className="font-bold">(1) High positional accuracy</p>
        <p>When a load is driven by a linear motion guideway, the frictional contact between the load and the bed is rolling contact. The coefficient of friction is only 1/50th of traditional contact, and the difference between the dynamic and the static coefficient of friction is small. Therefore, there would be no slippage while the load is moving.</p>
        <p className="font-bold">(2) Long life with high motion accuracy</p>
        <p>With a traditional slide, errors in accuracy are caused by the counter flow of the oil film. Insufficient lubrication causes wear between the contact surfaces, which become increasingly inaccurate. In contrast, rolling contact has little wear; therefore, machines can achieve a long life with highly accurate motion.</p>
        <p className="font-bold">(3) High speed motion is possible with a low driving force</p>
        <p>Because linear guideways have little friction resistance, only a small driving force is needed to move a load. This results in greater power savings, especially in the moving parts of a system. This is especially true for the reciprocating parts.</p>
        <p className="font-bold">(4) Equal loading capacity in all directions</p>
        <p>With this special design, these linear guideways can take loads in either the vertical or horizontal directions. Conventional linear slides can only take small loads in the direction parallel to the contact surface. They are also more likely to become inaccurate when they are subjected to these loads.</p>
        <p className="font-bold">(5) Easy installation</p>
        <p>Installing a linear guideway is fairly easy. Grinding or milling the machine surface, following a recommended installation procedure, and tightening the bolts to their specified torque can achieve highly accurate linear motion.</p>
        <p className="font-bold">(6) Easy lubrication</p>
        <p>With a traditional sliding system, insufficient lubrication causes wear on the contact surfaces. Also, it can be quite difficult to supply sufficient lubrication to the contact surfaces because finding an appropriate lubrication point is not very easy. With a linear motion guideway, grease can be easily supplied through the grease nipple on the linear guideway block. It is also possible to utilize a centratized oil lubrication system by piping the lubrication oil to the piping joint.</p>
        <p className="font-bold">(7)  Interchangeably</p>
        <p>Compared with traditional boxways or v-groove slides, linear guideways can be easily replaced should any damage occur. For high precision grades consider ordering a matched, non-interchangeable, assembly of a block and rail.</p>
        </div><br/>               
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Linearmotionguides;
