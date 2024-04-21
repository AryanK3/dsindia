import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const Ncrot = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#F0F8FF'}}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">NC Rotary Table</h1>
        <div className="mb-6">
          <p className="font-bold">Pneumatic Clamping System</p>
          <ul className="list-disc pl-6">
            <li>TD-125, 170, 200, 255P are equipped with high-tech Cross Roller Bearing.</li>
            <li>Pneumatic Clamping adopted the disc of clamping system to enlarge clamping force and can ensure heavy-duty continuous cutting.</li>
            <li>The feature of wear-resistant alloy Double-Lead Worm Gear is high mechanical efficiency of power adjusted on the backlash.</li>
            <li>It can connect with CNC machine as a 4 Axes or match with Single Axis Controller as an additional Axis.</li>
          </ul>
        </div>
        <div className="flex justify-center mb-1">
            <div className="text-center">
              <img src="/prod/td-170.jpg" alt="TD-170/125/200" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">TD-170/125/200</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/td-255.jpg" alt="TD-255" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">TD-255</p>
            </div>
        </div>
      </div>

        <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center"height="30" colSpan="2" className="border bg-blue-300">Model (Unit: mm)</td>
                <td align="center"width="20%" className="border bg-blue-200">TD-125(V)</td>
                <td align="center"width="20%" className="border bg-blue-200">TD-170(V)</td>
                <td align="center"width="20%" className="border bg-blue-200">TD-200(V)</td>
                <td align="center"width="20%" className="border bg-blue-200">TD-255P(V)</td>
              </tr>
              <tr>
                <td align="center"height="25" colSpan="2" className="border bg-pink-400">Use Method</td>
                <td align="center"colSpan="4" className="border bg-pink-400">Horizontal &amp; Vertical (V-Vertical)</td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Method</td>
                <td align="center"colspan="4" className="border bg-yellow-200"><strong>Pneumatic 5kg/cm2</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Dimension</td>
                <td align="center"className="border bg-pink-400"><strong>Ø125</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø170</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø200</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø255</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Spindle Through Hole Diameter</td>
                <td align="center"className="border bg-yellow-200"><strong>Ø22</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>Ø45</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>Ø45</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>Ø80</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Center Hole Diameter</td>
                <td align="center"className="border bg-pink-400"><strong>Ø40H7</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø50H7</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø50H7</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø80H7</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Center High</td>
                <td align="center" className="border bg-yellow-200"><strong>110</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>135</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>160</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>160</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate T Solt Width</td>
                <td align="center"colspan="4" className="border bg-pink-400"><strong>12H7</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Position Key</td>
                <td align="center"colspan="2" className="border bg-yellow-200"><strong>14h7</strong></td>
                <td align="center"colspan="2" className="border bg-yellow-200"><strong>18h7</strong></td>
              </tr>
              <tr>
                <td align="center"width="19%" rowspan="2" className="border bg-pink-400">Servo Motor</td>
                <td align="center"width="19%" height="25" className="border bg-pink-400">FANUC</td>
                <td align="center"className="border bg-pink-400"><strong><span>a</span>2i</strong></td>
                <td align="center"className="border bg-pink-400"><strong><span>a</span>4i</strong></td>
                <td align="center"className="border bg-pink-400"><strong><span>a</span>4i</strong></td>
                <td align="center"className="border bg-pink-400"><strong><span>a</span>8i</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" className="border bg-pink-400">MELDAS</td>
                <td align="center"className="border bg-pink-400"><strong>HA23/33</strong></td>
                <td align="center"className="border bg-pink-400"><strong>HA40/HC52</strong></td>
                <td align="center"className="border bg-pink-400"><strong>HA40/HC102</strong></td>
                <td align="center"className="border bg-pink-400"><strong>HA80/HC152(102)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Total Speed Reduction Ratio</td>
                <td align="center"colspan="3" className="border bg-yellow-200"><strong>1/90</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>1/180</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Min. Speed Reduction Ratio</td>
                <td align="center"colspan="4" className="border bg-pink-400"><strong>0.001°</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Indexing Accuracy (Cumulative)(Arc. Sec.)</td>
                <td align="center"className="border bg-yellow-200"><strong>45</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>30</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>30</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>15</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Repeatability (Arc.Sec.)</td>
                <td align="center"colspan="4" className="border bg-pink-400"><strong>4</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Force (kgf/m)</td>
                <td align="center"className="border bg-yellow-200"><strong>8</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>16</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>16</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>45</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Max. Torque Capacity of Worm Gear (kfg/m)</td>
                <td align="center"className="border bg-pink-400"><strong>15</strong></td>
                <td align="center"className="border bg-pink-400"><strong>27</strong></td>
                <td align="center"className="border bg-pink-400"><strong>27</strong></td>
                <td align="center"className="border bg-pink-400"><strong>48</strong></td>
              </tr>
              <tr>
                <td align="center"rowspan="2" className="border bg-yellow-200">Max. Workpiece of<br/>
                  Capacity (kg)</td>
                <td align="center"className="border bg-yellow-200">Vertical<br/>
                  (with tailstock)</td>
                <td align="center"className="border bg-yellow-200"><strong>50<br/>
                  (100)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>75<br/>
                  (150)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>75<br/>
                  (150)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>100<br/>
                  (250)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" className="border bg-yellow-200">Horizontal</td>
                <td align="center"className="border bg-yellow-200"><strong>100</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>150</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>150</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>250</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Net weight (without motor) (kg)</td>
                <td align="center"className="border bg-pink-400"><strong>31</strong></td>
                <td align="center"className="border bg-pink-400"><strong>40</strong></td>
                <td align="center"className="border bg-pink-400"><strong>60</strong></td>
                <td align="center"className="border bg-pink-400"><strong>120</strong></td>
              </tr>
              <tr>
                <td align="center" height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-JIF File</span></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/td-125.gif" target="_blank">TD-125(V)</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/td-170.gif" target="_blank">TD-170(V)</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/td-200.gif" target="_blank">TD-200(V)</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/td-255.gif" target="_blank">TD-255P(V)</a></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-PDF File </span></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/td-125.pdf" target="_blank">TD-125(V)</a></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/td-170.pdf" target="_blank">TD-170(V)</a></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/td-200.pdf" target="_blank">TD-200(V)</a></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/td-255.pdf" target="_blank">TD-255P(V)</a></td>
              </tr>
            </tbody></table></div><br/><br/>

        <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="font-bold">Hydraulic Clamping System</p>
          <ul className="list-disc pl-6">
            <li>Hydraulic Clamping adapted wholly circular hydraulic clamping system. It can assure the heavy and steady cutting without any deviation from the center.</li>
            <li>The feature of wear resistant alloy Double-Lead Worm Gear is high mechanical efficiency of power transmission, high indexing accuracy and easy adjusted on the backlash.</li>
            <li>Servo motor driving can quickly accuracy positioning low noises and suitable any degree machining.</li>
            <li>Can be added with air-hydro booster or hydraulic unit.</li>
            <li>It can connected with CNC machine as a 4 Axes or match with Single Axis controller as a additional Axis.</li>
          </ul>
        </div>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/td-170.jpg" alt="TD-170/125/200" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">TD-170/125/200</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/td-255.jpg" alt="TD-255" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">TD-255</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/td-255.jpg" alt="TD-255" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">TD-255</p>
            </div>
        </div></div>

        <div className="flex justify-center">
          <table className="w-75 border">
              <tbody>
              <tr className="border font-bold">
              <td align="center"height="30" colSpan="2" className="border bg-blue-300">Model (Unit: mm)</td>
                <td align="center"width="35%" className="border bg-blue-200">TD-255H(V)</td>
                <td align="center"width="35%" className="border bg-blue-200">TD-320(V)</td>
              </tr>
              <tr>
              <td align="center"height="25" colSpan="2" className="border bg-pink-400">Use Method</td>
              <td align="center"colSpan="4" className="border bg-pink-400">Horizontal &amp; Vertical (V-Vertical)</td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Method</td>
              <td align="center"colspan="4" className="border bg-yellow-200"><strong>Hydraulic 35kg/cm2</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Dimension</td>
              <td align="center"className="border bg-pink-400"><strong>Ø255</strong></td>
              <td align="center"className="border bg-pink-400"><strong>Ø320</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-yellow-200">Spindle Through Hole Diameter</td>
              <td align="center"className="border bg-yellow-200"><strong>Ø80</strong></td>
              <td align="center"className="border bg-yellow-200"><strong>Ø40</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Center Hole Diameter</td>
              <td align="center"className="border bg-pink-400"><strong>Ø80H7</strong></td>
              <td align="center"className="border bg-pink-400"><strong>Ø40H7</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-yellow-200">Center High</td>
              <td align="center" className="border bg-yellow-200"><strong>160</strong></td>
              <td align="center" className="border bg-yellow-200"><strong>210</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate T Solt Width</td>
              <td align="center"colspan="1" className="border bg-pink-400"><strong>12H7</strong></td>
              <td align="center"colspan="1" className="border bg-pink-400"><strong>14H7</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-yellow-200">Position Key</td>
                <td align="center"colspan="2" className="border bg-yellow-200"><strong>18h7</strong></td>
              </tr>
              <tr>
              <td align="center"width="19%" rowspan="2" className="border bg-pink-400">Servo Motor</td>
                <td align="center"width="19%" height="25" className="border bg-pink-400">FANUC</td>
                <td align="center"className="border bg-pink-400"><strong><span>a</span>8i</strong></td>
                <td align="center"className="border bg-pink-400"><strong><span>a</span>12i</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" className="border bg-pink-400">MELDAS</td>
                <td align="center"className="border bg-pink-400"><strong>HA80/HF103T</strong></td>
                <td align="center"className="border bg-pink-400"><strong>HA100/HF203T</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-yellow-200">Total Speed Reduction Ratio</td>
                <td align="center"colspan="2" className="border bg-yellow-200"><strong>1/180</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-pink-400">Min. Speed Reduction Ratio</td>
                <td align="center"colspan="4" className="border bg-pink-400"><strong>0.001°</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-yellow-200">Indexing Accuracy (Cumulative)(Arc. Sec.)</td>
                <td align="center" colspan="2" className="border bg-yellow-200"><strong>15&quot;</strong></td>                
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-pink-400">Repeatability (Arc.Sec.)</td>
                <td align="center"colspan="4" className="border bg-pink-400"><strong>4&quot;</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Force (kgf/m)</td>
                <td align="center"className="border bg-yellow-200"><strong>50</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>85</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-pink-400">Max. Torque Capacity of Worm Gear (kfg/m)</td>
                <td align="center"className="border bg-pink-400"><strong>48</strong></td>
                <td align="center"className="border bg-pink-400"><strong>78</strong></td>
              </tr>
              <tr>
              <td align="center"rowspan="2" className="border bg-yellow-200">Max. Workpiece of<br/>
                  Capacity (kg)</td>
                  <td align="center"className="border bg-yellow-200">Vertical<br/>
                  (with tailstock)</td>
                  <td align="center"className="border bg-yellow-200"><strong>100<br/>
                  (250)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>150<br/>
                  (350)</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" className="border bg-yellow-200">Horizontal</td>
              <td align="center"className="border bg-yellow-200"><strong>250</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>350</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border bg-pink-400">Net weight (without motor) (kg)</td>
                <td align="center"className="border bg-pink-400"><strong>120</strong></td>
                <td align="center"className="border bg-pink-400"><strong>170</strong></td>
              </tr>
              <tr>
              <td align="center" height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-JIF File</span></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/td-125.gif" target="_blank">TD-125(V)</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/td-125.gif" target="_blank">TD-125(V)</a></td>
              </tr>
              <tr>
              <td align="center"height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-PDF File </span></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/td-125.pdf" target="_blank">TD-125(V)</a></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/td-170.pdf" target="_blank">TD-170(V)</a></td>
              </tr>
            </tbody></table></div>
      <br/><br/><br/>

      <div className="flex justify-center mb-1">
      <div className="text-center">
        <img src="/prod/td-170.jpg" alt="TD-170/125/200" className="w-72 h-46 object-cover rounded-lg" />
        <p className="mt-2">TD-170/125/200</p>
      </div>
      <div className="text-center ml-6">
        <img src="/prod/td-255.jpg" alt="TD-255" className="w-72 h-46 object-cover rounded-lg" />
        <p className="mt-2">TD-255</p>
      </div>
      </div>
        <div className="flex justify-center">
        <table className="w-75 border">
            <tbody>
            <tr className="border font-bold">
            <td align="center"height="30" colSpan="2" className="border bg-blue-300">Model (Unit: mm)</td>
              <td align="center"width="35%" className="border bg-blue-200">TD-400</td>
              <td align="center"width="35%" className="border bg-blue-200">TD-500</td>
            </tr>
            <tr>
            <td align="center"height="25" colSpan="2" className="border bg-pink-400">Use Method</td>
            <td align="center"colSpan="4" className="border bg-pink-400">Horizontal &amp; Vertical</td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Method</td>
            <td align="center"colspan="4" className="border bg-yellow-200"><strong>Hydraulic 35kg/cm2</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Dimension</td>
            <td align="center"className="border bg-pink-400"><strong>Ø400</strong></td>
            <td align="center"className="border bg-pink-400"><strong>Ø500</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Spindle Through Hole Diameter</td>
            <td align="center"className="border bg-yellow-200"><strong>Ø40</strong></td>
            <td align="center"className="border bg-yellow-200"><strong>Ø50</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Center Hole Diameter</td>
            <td align="center"className="border bg-pink-400"><strong>Ø40H7</strong></td>
            <td align="center"className="border bg-pink-400"><strong>Ø50H7</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Center High</td>
            <td align="center" className="border bg-yellow-200"><strong>255</strong></td>
            <td align="center" className="border bg-yellow-200"><strong>310</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate T Solt Width</td>
            <td align="center"colspan="1" className="border bg-pink-400"><strong>14H7</strong></td>
            <td align="center"colspan="1" className="border bg-pink-400"><strong>18H7</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Position Key</td>
              <td align="center"colspan="2" className="border bg-yellow-200"><strong>18h7</strong></td>
            </tr>
            <tr>
            <td align="center"width="19%" rowspan="2" className="border bg-pink-400">Servo Motor</td>
              <td align="center"width="19%" height="25" className="border bg-pink-400">FANUC</td>
              <td align="center" colspan="2" className="border bg-pink-400"><strong><span>a</span>12i</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" className="border bg-pink-400">MELDAS</td>
              <td align="center" colspan="2" className="border bg-pink-400"><strong>HA100/HF203T</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Total Speed Reduction Ratio</td>
              <td align="center"colspan="2" className="border bg-yellow-200"><strong>1/180</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Min. Speed Reduction Ratio</td>
              <td align="center"colspan="4" className="border bg-pink-400"><strong>0.001°</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Indexing Accuracy (Cumulative)(Arc. Sec.)</td>
              <td align="center" colspan="2" className="border bg-yellow-200"><strong>15&quot;</strong></td>                
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Repeatability (Arc.Sec.)</td>
              <td align="center"colspan="4" className="border bg-pink-400"><strong>4&quot;</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Force (kgf/m)</td>
              <td align="center"className="border bg-yellow-200"><strong>180</strong></td>
              <td align="center"className="border bg-yellow-200"><strong>250</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Max. Torque Capacity of Worm Gear (kfg/m)</td>
              <td align="center"className="border bg-pink-400"><strong>180</strong></td>
              <td align="center"className="border bg-pink-400"><strong>250</strong></td>
            </tr>
            <tr>
            <td align="center"rowspan="2" className="border bg-yellow-200">Max. Workpiece of<br/>
                Capacity (kg)</td>
                <td align="center"className="border bg-yellow-200">Vertical<br/>
                (with tailstock)</td>
                <td align="center"className="border bg-yellow-200"><strong>200<br/>
                (500)</strong></td>
              <td align="center"className="border bg-yellow-200"><strong>250<br/>
                (600)</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" className="border bg-yellow-200">Horizontal</td>
            <td align="center"className="border bg-yellow-200"><strong>500</strong></td>
              <td align="center"className="border bg-yellow-200"><strong>600</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Net weight (without motor) (kg)</td>
              <td align="center"className="border bg-pink-400"><strong>300</strong></td>
              <td align="center"className="border bg-pink-400"><strong>470</strong></td>
            </tr>
            <tr>
            <td align="center" height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-JIF File</span></td>
              <td align="center"className="border bg-blue-300"><a href="/prod/td-400.gif" target="_blank">TD-400</a></td>
              <td align="center"className="border bg-blue-300"><a href="/prod/td-500.gif" target="_blank">TD-500</a></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-PDF File </span></td>
              <td align="center" className="border bg-blue-300"><a href="/prod/td-400.pdf" target="_blank">TD-400</a></td>
              <td align="center" className="border bg-blue-300"><a href="/prod/td-500.pdf" target="_blank">TD-500</a></td>
            </tr>
          </tbody></table></div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Ncrot;
