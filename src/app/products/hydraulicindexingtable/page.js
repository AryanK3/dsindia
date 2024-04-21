import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const HydrInd = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Hydraulic Indexing Table</h1>
        <div className="mb-6">
        <p className="font-bold">Horizontal	</p>
          <ul className="list-disc pl-6">
            <li>Adopted high precision 3pcs Hirth Coupling. It can ensure high positioning accuracy and unnecessary lift faceplate.</li>
            <li>Rack driving can make high mechanical efficiency of power transmission.</li>
            <li>Hydraulic driving can cut down the cost.</li>
            <li>Hydraulic clamping system can assure the heavy end steady cutting without any deviation from the centre and can ensure accurate postitioning.</li>
            <li>It can be attached with PLC controller or HIC-2006 Hydraulic Index Table Controller as an additional Axis.</li>
            <li>Built in Clamp/Unclamp confirmation unit.It can be matched with Rotary Special Machine.</li>
            <li>It can be matched with boring and milling machine.</li>
          </ul>
        </div>
        <div className="flex justify-center mb-1">
            <div className="text-center">
              <img src="/prod/hydrind.jpg" alt="CH3-340/470 (Horizontal)" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">CH3-340/470 (Horizontal)</p>
            </div>
        </div>
      </div>

      <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center"height="30" colSpan="2" className="border bg-blue-300">Model (Unit: mm)</td>
                <td align="center"width="10%" className="border bg-blue-200">CH3-340</td>
                <td align="center"width="10%" className="border bg-blue-200">CH3-470</td>
                <td align="center"width="10%" className="border bg-blue-200">CH3-470S</td>
                <td align="center"width="10%" className="border bg-blue-200">CH3-600</td>
                <td align="center"width="10%" className="border bg-blue-200">CH3-600S</td>
                <td align="center"width="10%" className="border bg-blue-200">CH3-800</td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Method</td>
                <td align="center"colspan="6" className="border bg-yellow-200"><strong>Hydraulic 35kg/cm2</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Dimension</td>
                <td align="center"className="border bg-pink-400"><strong>Ø340</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø470</strong></td>
                <td align="center"className="border bg-pink-400"><strong>470</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø600</strong></td>
                <td align="center"className="border bg-pink-400"><strong>600</strong></td>
                <td align="center"className="border bg-pink-400"><strong>800</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Spindle Through Hole Diameter</td>
                <td align="center"className="border bg-yellow-200"><strong>Ø30</strong></td>
                <td align="center" colspan="2" className="border bg-yellow-200"><strong>Ø40</strong></td>
                <td align="center" colspan="2" className="border bg-yellow-200"><strong>Ø50</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>Ø45</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Center Hole Diameter</td>
                <td align="center"className="border bg-pink-400"><strong>Ø65</strong></td>
                <td align="center" colspan="2" className="border bg-pink-400"><strong>Ø90</strong></td>
                <td align="center" colspan="2" className="border bg-pink-400"><strong>Ø110</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø100</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Center High</td>
                <td align="center" className="border bg-yellow-200"><strong>-</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>-</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>18H7</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>-</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>20H7</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>-</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Division</td>
                <td align="center"colspan="6" className="border bg-pink-400"><strong>Standard division: Every model have 4,6,8,12,24 standard, you can option any one of it.</strong>
                <br/><strong>Special division: 2,3,5,9,10 ...etc divisions.</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Indexing Accuracy (Arc. Sec.)</td>
                <td align="center" colspan="6" className="border bg-yellow-200"><strong>+/- 5</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Repeatability (Arc.Sec.)</td>
                <td align="center"colspan="6" className="border bg-pink-400"><strong>+/- 1</strong></td>
              </tr>
              <tr>
                <td align="center" colspan="2"className="border bg-yellow-200">Max. Workpiece of Capacity (kg)</td>
                <td align="center"className="border bg-yellow-200"><strong>500</strong></td>
                <td align="center" colspan="2" className="border bg-yellow-200"><strong>700</strong></td>
                <td align="center" colspan="3" className="border bg-yellow-200"><strong>1250</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Net weight (kg)</td>
                <td align="center"className="border bg-pink-400"><strong>130</strong></td>
                <td align="center"className="border bg-pink-400"><strong>275</strong></td>
                <td align="center"className="border bg-pink-400"><strong>330</strong></td>
                <td align="center"className="border bg-pink-400"><strong>450</strong></td>
                <td align="center"className="border bg-pink-400"><strong>560</strong></td>
                <td align="center"className="border bg-pink-400"><strong>1000</strong></td>
              </tr>
              <tr>
                <td align="center" height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-JIF File</span></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-340.gif" target="_blank">CH3-340</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-470.gif" target="_blank">CH3-470</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-470p3.gif" target="_blank">CH3-470S</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-600.gif" target="_blank">CH3-600</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-600s.gif" target="_blank">CH3-600S</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-800p1.gif" target="_blank">CH3-800</a></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-PDF File </span></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-340.pdf" target="_blank">CH3-340</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-470.pdf" target="_blank">CH3-470</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-470p3.pdf" target="_blank">CH3-470S</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-600.pdf" target="_blank">CH3-600</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-600s.pdf" target="_blank">CH3-600S</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ch3-800p1.pdf" target="_blank">CH3-800</a></td>              </tr>
            </tbody></table></div><br/><br/>

     <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
        <p className="font-bold">Vertical</p>
          <ul className="list-disc pl-6">
            <li>Adopted high precision 3pcs Hirth Coupling. It can ensure high positioning accuracy and unnecessary lift faceplate.</li>
            <li>Rack driving can make high mechanical efficiency of power transmission.</li>
            <li>Hydraulic driving can cut down the cost.</li>
            <li>Heavy hydraulic clamping system can assure the heavy end steady cutting without any deviation from the centre and can ensure accurate postitioning.</li>
            <li>It can be attached with PLC controller or HIC-2006 Hydraulic Index Table Controller as an additional Axis.</li>
          </ul>
        </div>
        <div className="flex justify-center mb-1">
            <div className="text-center">
              <img src="/prod/cv3-255.jpg" alt="CV3-255 (Horizontal/Veritcal)" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">CV3-255 (Horizontal/Veritcal)</p>
            </div>
            <div className="text-center">
              <img src="/prod/cv3-320.jpg" alt="CV3-320(Vertical)" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">CV3-320(Vertical)</p>
            </div>
        </div>
      </div>

        <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center"height="30" colSpan="2" className="border bg-blue-300">Model (Unit:mm)</td>
                <td align="center"width="20%" className="border bg-blue-200">CV3-255</td>
                <td align="center"width="20%" className="border bg-blue-200">CV3-320</td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Method</td>
                <td align="center"colspan="2" className="border bg-yellow-200"><strong>Hydraulic 35kg/cm2</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Diameter</td>
                <td align="center"className="border bg-pink-400"><strong>Ø255</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø320</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Spindle Through Hole Diameter</td>
                <td align="center"className="border bg-yellow-200"><strong>Ø27</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>Ø31</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Center Hole Diameter</td>
                <td align="center"className="border bg-pink-400"><strong>Ø30</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø65</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Center High</td>
                <td align="center" className="border bg-yellow-200"><strong>160</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>255</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate T Solt Width</td>
                <td align="center" className="border bg-pink-400"><strong>12H7</strong></td>
                <td align="center" className="border bg-pink-400"><strong>14H7</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Position Key</td>
                <td align="center" colspan="2" className="border bg-yellow-200"><strong>18h7</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Division</td>
                <td align="center"colspan="2" className="border bg-pink-400"><strong>Standard division: Every model have 4,6,8,12,24 standard, you can option any one of it.</strong>
                <br/><strong>Special division: 2,3,5,9,10 ...etc divisions.</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Indexing Accuracy (Arc. Sec.)</td>
                <td align="center" colspan="2" className="border bg-yellow-200"><strong>+/- 5</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Repeatability (Arc.Sec.)</td>
                <td align="center"colspan="2" className="border bg-pink-400"><strong>+/- 1</strong></td>
              </tr>
              <tr>
                <td align="center"rowspan="2" className="border bg-yellow-200">Max. Workpiece of<br/>
                  Capacity (kg)</td>
                <td align="center"className="border bg-yellow-200">Vertical<br/>
                  (with tailstock)</td>
                <td align="center"className="border bg-yellow-200"><strong>125<br/>
                  (250)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>175<br/>
                  (300)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" className="border bg-yellow-200">Horizontal</td>
                <td align="center"className="border bg-yellow-200"><strong>250</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>-</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Net weight (kg)</td>
                <td align="center"className="border bg-pink-400"><strong>80</strong></td>
                <td align="center"className="border bg-pink-400"><strong>140</strong></td>
              </tr>
              <tr>
                <td align="center" height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-JIF File</span></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/cv3-255.gif" target="_blank">CV3-255</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/cv3-320.gif" target="_blank">CV3-320</a></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-PDF File </span></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/cv3-255.pdf" target="_blank">CV3-255</a></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/cv3-320.pdf" target="_blank">CV3-320</a></td>
              </tr>
            </tbody></table></div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default HydrInd;
