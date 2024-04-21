import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const Bearings = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Linear Motion Bearings</h1>
        <p>Linear Bushing LM type is the unlimited stroke linear motion system with the LM shaft. Because of the point contact between Balls and LM shaft, minimum friction can be acquired and that can give you the high precision motion.</p>
        <p>Linear Bushing aligns the balls toward the LM shaft by the single retainer and cylindrical shape of raceway. Outer sleeve is made of high-carbon chromium bearing steel, and inner and outer grinding processes are applied after heat treatment.</p>
        <p className="font-bold">Interchangeability</p>
        <p>The dimensions of Linear Bushing are standardized to have a full interchangeability. LM shaft is provided with the cylindrical grinding to have high precision fitting clearance.</p>
        <p className="font-bold">Rigid Outer Sleeve</p>
        <p>Hardened and precisely ground outer sleeve is made of bearing steel, and can be directly assembled with the needle bearing on outer surface.</p>
        <p className="font-bold">High precision Retainer</p>
        <p>The single body retainer guides 4~6 ball circuits, and it precisely guides the balls to moving direction with smooth motion.</p><br/>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/bearing_sm.gif" alt="SM Series" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">SM Series</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/bearing_smaj.gif" alt="SM AJ Series" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">SM AJ Series</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/bearing_smop.gif" alt="SM OP Series" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">SM OP Series</p>
            </div>
        </div><br/>
        <img
          src='/prod/bearing1.jpg' 
          alt='Bearings'
          className="w-100"
        />   
        <br/><br/><img
          src='/prod/bearingdim1.jpg' 
          alt='Shaft Dimensions'
          className="w-100"
        /><br/><br/><br/>            
        <h4 className="font-bold mb-4">Flange Linear Motion Bearings</h4>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/lmf.jpg" alt="LMF Series" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">LMF Series</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/lmk.jpg" alt="LMK Series" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">LMK Series</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/lmh.jpg" alt="LMH Series" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">LMH Series</p>
            </div>
        </div><br/>
        <img
          src='/prod/bearing2.jpg' 
          alt='Flange Bearings'
          className="w-100"
        />   
        <br/><br/><img
          src='/prod/bearingdim2.jpg' 
          alt='Bearing Dimensions'
          className="w-100"
        /><br/><br/><br/>            
        <h4 className="font-bold mb-4">KH Series</h4>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/kh.gif" alt="KH Series" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">KH Series</p>
            </div>
        </div><br/>
        <img
          src='/prod/bearing3.gif' 
          alt='KH Series Bearings'
          className="w-100"
        /><br/><br/>
      <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center" className="border bg-blue-300">Part-No.</td>
                <td align="center" className="border bg-blue-300">fd</td>
                <td align="center" className="border bg-blue-300">fD</td>
                <td align="center" className="border bg-blue-300">B</td>
                <td align="center" className="border bg-blue-300">Dyn.</td>
                <td align="center" className="border bg-blue-300">Start.</td>
              </tr>
              <tr className='bg-pink-400'>
                <td align="center" className="border">KH-0622</td>
                <td align="center" className="border">6</td>
                <td align="center" className="border">12</td>
                <td align="center" className="border">22</td>
                <td align="center" className="border">400</td>
                <td align="center" className="border">239</td>
                <td align="center" className="border">7</td>
              </tr>
              <tr>
                <td align="center" className="border bg-yellow-200">KH-0824</td>
                <td align="center" className="border bg-yellow-200">8</td>
                <td align="center" className="border bg-yellow-200">15</td>
                <td align="center" className="border bg-yellow-200">24</td>
                <td align="center" className="border bg-yellow-200">435</td>
                <td align="center" className="border bg-yellow-200">280</td>
                <td align="center" className="border bg-yellow-200">12</td>
              </tr>
              <tr className='bg-pink-400'>
                <td align="center" className="border">KH-1026</td>
                <td align="center" className="border">10</td>
                <td align="center" className="border">17</td>
                <td align="center" className="border">26</td>
                <td align="center" className="border">500</td>
                <td align="center" className="border">370</td>
                <td align="center" className="border">14.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-yellow-200">KH-1288</td>
                <td align="center" className="border bg-yellow-200">12</td>
                <td align="center" className="border bg-yellow-200">19</td>
                <td align="center" className="border bg-yellow-200">28</td>
                <td align="center" className="border bg-yellow-200">620</td>
                <td align="center" className="border bg-yellow-200">510</td>
                <td align="center" className="border bg-yellow-200">18.5</td>
              </tr>
              <tr className='bg-pink-400'>
                <td align="center" className="border">KH-1428</td>
                <td align="center" className="border">14</td>
                <td align="center" className="border">21</td>
                <td align="center" className="border">28</td>
                <td align="center" className="border">620</td>
                <td align="center" className="border">520</td>
                <td align="center" className="border">20.5</td>
              </tr>           
              <tr>
                <td align="center" className="border bg-yellow-200">KH-1630</td>
                <td align="center" className="border bg-yellow-200">16</td>
                <td align="center" className="border bg-yellow-200">24</td>
                <td align="center" className="border bg-yellow-200">30</td>
                <td align="center" className="border bg-yellow-200">800</td>
                <td align="center" className="border bg-yellow-200">620</td>
                <td align="center" className="border bg-yellow-200">27.5</td>
              </tr>    
              <tr className='bg-pink-400'>
                <td align="center" className="border">KH-2030</td>
                <td align="center" className="border">20</td>
                <td align="center" className="border">28</td>
                <td align="center" className="border">30</td>
                <td align="center" className="border">950</td>
                <td align="center" className="border">790</td>
                <td align="center" className="border">32.5</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-yellow-200">KH-2540</td>
                <td align="center" className="border bg-yellow-200">25</td>
                <td align="center" className="border bg-yellow-200">35</td>
                <td align="center" className="border bg-yellow-200">40</td>
                <td align="center" className="border bg-yellow-200">1990</td>
                <td align="center" className="border bg-yellow-200">1670</td>
                <td align="center" className="border bg-yellow-200">66</td>
              </tr> 
              <tr className='bg-pink-400'>
                <td align="center" className="border">KH-3050</td>
                <td align="center" className="border">30</td>
                <td align="center" className="border">40</td>
                <td align="center" className="border">50</td>
                <td align="center" className="border">2800</td>
                <td align="center" className="border">2700</td>
                <td align="center" className="border">95</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-yellow-200">KH-4060</td>
                <td align="center" className="border bg-yellow-200">40</td>
                <td align="center" className="border bg-yellow-200">52</td>
                <td align="center" className="border bg-yellow-200">60</td>
                <td align="center" className="border bg-yellow-200">4400</td>
                <td align="center" className="border bg-yellow-200">4450</td>
                <td align="center" className="border bg-yellow-200">182</td>
              </tr>             
              <tr className='bg-pink-400'>
                <td align="center" className="border">KH-5070</td>
                <td align="center" className="border">50</td>
                <td align="center" className="border">62</td>
                <td align="center" className="border">70</td>
                <td align="center" className="border">5500</td>
                <td align="center" className="border">6300</td>
                <td align="center" className="border">252</td>
              </tr>               
              </tbody></table></div><br/>   
      </div>
      <Footer />
    </div>
  );
};

export default Bearings;
