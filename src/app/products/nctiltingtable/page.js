import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const Nctil = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">NC Tilting Rotary Table</h1>
        <div className="mb-6">
          <ul className="list-disc pl-6">
            <li>Pneumatic Clamping system, with built-in patented disk-clamping design (Taiwan PAT.: 217736) to ensure cutting endurance.</li>
            <li>The feature of wear resistant alloy Dual-Lead Worm Gear is high mechanical efficiency of power transmission, high indexing accuracy and easy adjusted on the backlash.</li>
            <li>Able to be connected with CNC machine to perform synchronous 5th axis multi-angle machining.</li>
            <li>Able to be connected with CNC machine to perform tilting angle machine (4+1 axis) through Single Axis Controller.</li>
            <li>Minimum Indexing Degree: 0.001°</li>
            <li>Tilting range: +/- 110°</li>
          </ul>
        </div>
        <div className="flex justify-center mb-1">
            <div className="text-center">
              <img src="/prod/ttd-125.jpg" alt="TTD-125" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">TTD-125</p>
            </div>
            <div className="text-center ml-6">
              <img src="/prod/ttd-255.jpg" alt="TTD-255H" className="w-72 h-46 object-cover rounded-lg" />
              <p className="mt-2">TTD-255H</p>
            </div>
        </div>
      </div>

        <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center"height="30" colSpan="2" className="border bg-blue-300">Model</td>
                <td align="center"width="20%" className="border bg-blue-200">TD-125</td>
                <td align="center"width="20%" className="border bg-blue-200">TD-255H</td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Tilt Range</td>
                <td align="center"className="border bg-pink-400"><strong>+110°~ -110°</strong></td>
                <td align="center"className="border bg-pink-400"><strong>+110°~ -110°</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Spindle Outer Dia.</td>
                <td align="center"className="border bg-yellow-200"><strong>Ø60</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>-</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Table Dia.</td>
                <td align="center"className="border bg-pink-400"><strong>-</strong></td>
                <td align="center"className="border bg-pink-400"><strong>Ø255</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Table Height at 0X Position</td>
                <td align="center" className="border bg-yellow-200"><strong>233</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>334.5</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Center height at 90X position</td>
                <td align="center" className="border bg-pink-400"><strong>160</strong></td>
                <td align="center" className="border bg-pink-400"><strong>220</strong></td>
              </tr>
              <tr>
                <td align="center"width="19%" rowspan="2" className="border bg-yellow-200">Center Bore</td>
                <td align="center"width="19%" height="25" className="border bg-yellow-200">Nose dia.</td>
                <td align="center"className="border bg-yellow-200"><strong>Ø25</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>Ø30</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" className="border bg-yellow-200">Thru dia.</td>
                <td align="center"className="border bg-yellow-200"><strong>Ø22</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>Ø30</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Table T-solt Width</td>
                <td align="center" className="border bg-pink-400"><strong>-</strong></td>
                <td align="center" className="border bg-pink-400"><strong>12H7</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Guide Block Width</td>
                <td align="center" className="border bg-yellow-200"><strong>14H7</strong></td>
                <td align="center" className="border bg-yellow-200"><strong>18H7</strong></td>
              </tr>               
              <tr>
                <td align="center"width="19%" rowspan="2" className="border bg-pink-400">Servo Motor</td>
                <td align="center"width="19%" height="25" className="border bg-pink-400">FANUC</td>
                <td align="center"className="border bg-pink-400"><strong>a2i (rotary) <br/> a4i (tilting)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>a8i (rotary) <br/> a8i (tilting)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" className="border bg-pink-400">MELDAS</td>
                <td align="center"className="border bg-pink-400"><strong>HA33 (rotary)<br/> HA40 (tilting)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>HA80 (rotary) <br/>HA80 (tilting)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Inertia converted into Motor Shaft <br/> (X10-3kg.m2 / X10-3kgf.cm.sec2)</td>
                <td align="center"className="border bg-yellow-200"><strong>0.31<br/>
                  (3.1)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>0.52<br/>
                  (5.3)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Speed Reduction Ratio</td>
                <td align="center"className="border bg-pink-400"><strong>1:90 (rotary) <br/> 1:90 (tilting)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>1:120 (rotary) <br/> 1:180 (tilting)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Max. Table Rotation Speed (3000 r.p.m.)</td>
                <td align="center"className="border bg-yellow-200"><strong>33.3 (rotary) <br/> 33.3 (tilting)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>25 (rotary) <br/> 16.7 (tilting)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Clamp System Supplied Pressure <br/> N-m [kgf-m]</td>
                <td align="center"className="border bg-pink-400"><strong>45 (rotary) <br/> 60 (tilting)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>15 (rotary) <br/> 45 (tilting)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Indexing Accuracy (cumulative) arc sec.</td>
                <td align="center"className="border bg-yellow-200"><strong>78 (8) rotary <br/> 157 (16) tilting</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>588 (60) rotary <br/> 686 (70) tilting</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Repeatability (arc sec.)</td>
                <td align="center"className="border bg-pink-400"><strong>4 (rotary) <br/> 4 (tilting)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>4 (rotary) <br/> 4 (tilting)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-yellow-200">Net Weight (kg)</td>
                <td align="center"className="border bg-yellow-200"><strong>95</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>330</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Allowable wheel torque (Rotary axis) N-m [kgf-m]</td>
                <td align="center"className="border bg-pink-400"><strong>120(12)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>490(50)</strong></td>
              </tr>
              <tr>
                <td align="center"width="19%" rowspan="2" className="border bg-yellow-200">Allowable work weight</td>
                <td align="center"width="19%" height="25" className="border bg-yellow-200">0° tilt angle (kg)</td>
                <td align="center"className="border bg-yellow-200"><strong>35</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>120</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" className="border bg-yellow-200">0°~90° tilt angle (kg)</td>
                <td align="center"className="border bg-yellow-200"><strong>20</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>70</strong></td>
              </tr>
              <tr>
                <td align="center"width="19%" rowspan="1" className="border bg-pink-400">Allowable work Moment</td>
                <td align="center"width="19%" height="25" className="border bg-pink-400">WxL (N-m [kgf-m])</td>
                <td align="center"className="border bg-pink-400"><strong>156(16)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>470(48)</strong></td>
              </tr>
              <tr>
                <td align="center"width="19%" rowspan="3" className="border bg-yellow-200">Allowable Load when Table Clamped</td>
                <td align="center"height="25" className="border bg-yellow-200">F (N [kgf])</td>
                <td align="center"className="border bg-yellow-200"><strong>343(35)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>1170(120)</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" className="border bg-yellow-200">FxL (N-m [kgf-m])</td>
                <td align="center"className="border bg-yellow-200"><strong>78.4(8)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>470(48)</strong></td>
              </tr>
              <tr>
              <td align="center"height="25" className="border bg-yellow-200">FxL (N-m [kgf-m])</td>
                <td align="center"className="border bg-yellow-200"><strong>156(16)</strong></td>
                <td align="center"className="border bg-yellow-200"><strong>470(48)</strong></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border bg-pink-400">Allowable work inertia (J=WD2/8) kg-m2 [kg.cm.sec2]</td>
                <td align="center"className="border bg-pink-400"><strong>0.18(1.7)</strong></td>
                <td align="center"className="border bg-pink-400"><strong>0.7(6.9)</strong></td>
              </tr>              
              <tr>
                <td align="center" height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-JIF File</span></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/ttd-125p.jpg" target="_blank">TTD-125</a></td>
                <td align="center"className="border bg-blue-300"><a href="/prod/td-255c.gif" target="_blank">TTD-255H</a></td>
              </tr>
              <tr>
                <td align="center"height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-PDF File </span></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/ttd-125p.pdf" target="_blank">TTD-125</a></td>
                <td align="center" className="border bg-blue-300"><a href="/prod/td-255c.pdf" target="_blank">TTD-255H</a></td>
              </tr>
            </tbody></table></div><br/><br/>


        <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="font-bold">Manual Tilting Rotary Table</p>
          <ul className="list-disc pl-6">
            <li>Highest clamping force is stronger that can be suitable heavy cutting.</li>
            <li>The angle rotate by hand, rotary table controls by NC controller.</li>
            <li>Servo motor driving can quickly accuracy positioning low noises and suitable any degree machining.</li>
            <li>Can do any angle maching.</li>
          </ul>
        </div>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/mantil.jpg" alt="Manual Tilting Rotary Table" className="w-72 h-46 object-cover rounded-lg" />
            </div>
        </div></div>

        <div className="flex justify-center">
        <table className="w-75 border">
            <tbody>
            <tr className="border font-bold">
            <td align="center"height="30" colSpan="2" className="border bg-blue-300">Model (Unit: mm)</td>
              <td align="center"width="35%" className="border bg-blue-200">TDM-170</td>
            </tr>
            <tr>
            <td align="center"height="25" colSpan="2" className="border bg-pink-400">Clamp Method</td>
            <td align="center"colSpan="1" className="border bg-pink-400">Pneumatic 5kg/cm2</td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Faceplate Dimension</td>
            <td align="center"colspan="1" className="border bg-yellow-200"><strong>p170</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Spindle Through Hole Diameter</td>
            <td align="center"className="border bg-yellow-200"><strong>p45</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate Center Hole Diameter</td>
            <td align="center"className="border bg-pink-400"><strong>p50H7</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Center High</td>
            <td align="center" className="border bg-yellow-200"><strong>170</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Faceplate T Solt Width</td>
            <td align="center"colspan="1" className="border bg-pink-400"><strong>12H7</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Position Key</td>
              <td align="center"colspan="1" className="border bg-yellow-200"><strong>18h7</strong></td>
            </tr>
            <tr>
            <td align="center"width="19%" rowspan="2" className="border bg-pink-400">Servo Motor</td>
              <td align="center"width="19%" height="25" className="border bg-pink-400">FANUC</td>
              <td align="center" colspan="1" className="border bg-pink-400"><strong>\3/\4i/\8i (Rotate Axis)</strong><br/><strong>Manual (Tilting Axis)</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" className="border bg-pink-400">MELDAS</td>
              <td align="center" colspan="1" className="border bg-pink-400"><strong>HA40/HF053T (Rotate Axis)</strong><br/><strong>Manual (Tilting Axis)</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Min. Speed Reduction Ratio</td>
              <td align="center"colspan="4" className="border bg-pink-400"><strong>0.001°(Rotate Axis)</strong><br/><strong>5&apos; (Tilting Axis)</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Total Speed Reduction Ratio</td>
              <td align="center"colspan="2" className="border bg-yellow-200"><strong>1/90</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Indexing Accuracy (Cumulative)(Arc. Sec.)</td>
              <td align="center" colspan="2" className="border bg-yellow-200"><strong>30&quot;</strong></td>                
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Repeatability (Arc.Sec.)</td>
              <td align="center"colspan="4" className="border bg-pink-400"><strong>4&quot;</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-yellow-200">Clamp Force (kgf/m)</td>
              <td align="center"className="border bg-yellow-200"><strong>16</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Max. Torque Capacity of Worm Gear (kfg/m)</td>
              <td align="center"className="border bg-pink-400"><strong>27</strong></td>
            </tr>
            <tr>
            <td align="center"rowspan="2" className="border bg-yellow-200">Max. Workpiece of<br/>
                Capacity (kg)</td>
                <td align="center"className="border bg-yellow-200">Vertical<br/>
                (with tailstock)</td>
                <td align="center"className="border bg-yellow-200"><strong>75<br/>
                (150)</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" className="border bg-yellow-200">Horizontal</td>
            <td align="center"className="border bg-yellow-200"><strong>150</strong></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border bg-pink-400">Net weight (without motor) (kg)</td>
              <td align="center"className="border bg-pink-400"><strong>90</strong></td>
            </tr>
            <tr>
            <td align="center" height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-JIF File</span></td>
              <td align="center"className="border bg-blue-300"><a href="/prod/tdm-170.gif" target="_blank">TDM-170</a></td>
            </tr>
            <tr>
            <td align="center"height="25" colspan="2" className="border font-bold bg-blue-300"><span>Dimension(download)-PDF File </span></td>
              <td align="center" className="border bg-blue-300"><a href="/prod/tdm-170.pdf" target="_blank">TDM-170</a></td>
            </tr>
          </tbody></table></div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Nctil;
