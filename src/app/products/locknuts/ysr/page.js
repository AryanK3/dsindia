import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import Link from 'next/link';
const Ysr = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">YSR Radial Locking</h1>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/ysr.jpg" alt="YSR" className="w-72 h-46 object-cover rounded-lg" />
            </div>  
        </div><br/>
        <p>
        The locking method is radical three points,the thickness is much thinner than other products. It is suitable,especially when there is the restriction of space of screw thickness and you can not find any other substitutes.
        </p>
        <div>
        <ul className="list-disc pl-6">
        <li>Material Composition:   SCM440(42CrMo4)</li>
        <li>Thread Precision:   ISO 4H</li>
        <li>Edge Bevel: 0.002mm</li>
        <li>Hardness:   HRC 28°~32°</li>
        <li>Parallelism:    0.002mm</li>
        <li>Concenticity:   0.005mm</li>
        </ul>
        </div>           
      </div>
      <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center" className="border bg-blue-300">Thread</td>
                <td align="center"className="border bg-blue-300">D</td>
                <td align="center" className="border bg-blue-300">h</td>
                <td align="center" className="border bg-blue-300">g</td>
                <td align="center" className="border bg-blue-300">t</td>
                <td align="center" className="border bg-blue-300">d</td>
                <td align="center" className="border bg-blue-300">n-m</td>
                <td align="center" className="border bg-blue-300">Max Nm</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M6*0.5</td>
                <td align="center" width="10%" rowspan="2" className="border bg-yellow-200">16</td>
                <td align="center" width="9%" rowspan="8" className="border bg-pink-400">8</td>
                <td align="center" width="10%" rowspan="8" className="border bg-yellow-200">3</td>
                <td align="center" width="9%" rowspan="20" className="border bg-pink-400">2</td>
                <td align="center" width="9%" rowspan="2" className="border bg-yellow-200">11</td>
                <td align="center" width="10%" rowspan="8" className="border bg-pink-400">2-M4</td>
                <td align="center" rowspan="8" width="6%" className="border bg-yellow-200">3.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M8x0.75</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M10*0.75</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">18</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">13</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M10x1</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M12*1</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">20</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">16</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M12x1.25</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M14*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">25</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">21</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M15x1</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M16*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">28</td>
                <td align="center" rowspan="6" className="border bg-pink-400">10</td>
                <td align="center" rowspan="6" className="border bg-yellow-200">4</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">23</td>
                <td align="center" rowspan="3" className="border bg-pink-400">2-M5</td>
                <td align="center" rowspan="6" className="border bg-yellow-200">4.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M17x1</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M18*1.5</td>
                <td align="center" className="border bg-yellow-200">30</td>
                <td align="center" className="border bg-yellow-200">25</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M20*1</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">32</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">27</td>
                <td align="center" rowspan="3" className="border bg-pink-400">3-M5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M20*1.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M22*1.5</td>
                <td align="center" className="border bg-yellow-200">35</td>
                <td align="center" className="border bg-yellow-200">30</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M24*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">38</td>
                <td align="center" rowspan="6" className="border bg-pink-400">12</td>
                <td align="center" rowspan="6" className="border bg-yellow-200">5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">33</td>
                <td align="center" rowspan="12" className="border bg-pink-400">3-M6</td>
                <td align="center" rowspan="13" className="border bg-yellow-200">8</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M25*1.5</td>

              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M27*1.5</td>
                <td align="center" className="border bg-yellow-200">42</td>
                <td align="center" className="border bg-yellow-200">37</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M30*1.5</td>
                <td align="center" className="border bg-yellow-200">45</td>
                <td align="center" className="border bg-yellow-200">40</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M33*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">52</td>
                <td align="center" className="border bg-yellow-200">45</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M35*1.5</td>
                <td align="center" className="border bg-yellow-200">47</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M36*1.5</td>
                <td align="center" className="border bg-yellow-200">55</td>
                <td align="center" rowspan="7" className="border bg-pink-400">14</td>
                <td align="center" rowspan="7" className="border bg-yellow-200">6</td>
                <td align="center" rowspan="7" className="border bg-pink-400">2.5</td>
                <td align="center" className="border bg-yellow-200">49</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M39*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">58</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">52</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M40*1.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M42*1.5</td>
                <td align="center" className="border bg-yellow-200">62</td>
                <td align="center" className="border bg-yellow-200">56</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M45*1.5</td>
                <td align="center" className="border bg-yellow-200">65</td>
                <td align="center" className="border bg-yellow-200">59</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M48*1.5</td>
                <td align="center" className="border bg-yellow-200">68</td>
                <td align="center" className="border bg-yellow-200">62</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M50*1.5</td>
                <td align="center" className="border bg-yellow-200">70</td>
                <td align="center" className="border bg-yellow-200">64</td>
                <td align="center" rowspan="23" className="border bg-pink-400">3-M8</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M52*1.5</td>
                <td align="center" className="border bg-yellow-200">73</td>
                <td align="center" className="border bg-pink-400">-</td>
                <td align="center" className="border bg-yellow-200">-</td>
                <td align="center" className="border bg-pink-400">-</td>
                <td align="center" className="border bg-yellow-200">66</td>
                <td align="center" rowspan="22" className="border bg-yellow-200">18</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M55*2</td>
                <td align="center" className="border bg-yellow-200">75</td>
                <td align="center" rowspan="5" className="border bg-pink-400">16</td>
                <td align="center" rowspan="5" className="border bg-yellow-200">7</td>
                <td align="center" rowspan="5" className="border bg-pink-400">3</td>
                <td align="center" className="border bg-yellow-200">68</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M56*2</td>
                <td align="center" className="border bg-yellow-200">77</td>
                <td align="center" className="border bg-yellow-200">70</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M60*2</td>
                <td align="center" className="border bg-yellow-200">80</td>
                <td align="center" className="border bg-yellow-200">73</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M64*2</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">85</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">78</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M65*2</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M68*2</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">92</td>
                <td align="center" rowspan="7" className="border bg-pink-400">18</td>
                <td align="center" rowspan="7" className="border bg-yellow-200">8</td>
                <td align="center" rowspan="7" className="border bg-pink-400">3.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">84</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M70*2</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M72*2</td>
                <td align="center" className="border bg-yellow-200">95</td>
                <td align="center" className="border bg-yellow-200">86</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M75*2</td>
                <td align="center" className="border bg-yellow-200">98</td>
                <td align="center" className="border bg-yellow-200">90</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M76*2</td>
                <td align="center" className="border bg-yellow-200">100</td>
                <td align="center" className="border bg-yellow-200">92</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M80*2</td>
                <td align="center" className="border bg-yellow-200">105</td>
                <td align="center" className="border bg-yellow-200">96</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M85*2</td>
                <td align="center" className="border bg-yellow-200">110</td>
                <td align="center" className="border bg-yellow-200">102</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M90*2</td>
                <td align="center" className="border bg-yellow-200">120</td>
                <td align="center" rowspan="3" className="border bg-pink-400">20</td>
                <td align="center" rowspan="3" className="border bg-yellow-200">10</td>
                <td align="center" rowspan="3" className="border bg-pink-400">4</td>
                <td align="center" className="border bg-yellow-200">108</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M95*2</td>
                <td align="center" className="border bg-yellow-200">125</td>
                <td align="center" className="border bg-yellow-200">113</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M100*2</td>
                <td align="center" className="border bg-yellow-200">130</td>
                <td align="center" className="border bg-yellow-200">118</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M105*2</td>
                <td align="center" className="border bg-yellow-200">140</td>
                <td align="center" rowspan="3" className="border bg-pink-400">22</td>
                <td align="center" rowspan="6" className="border bg-yellow-200">12</td>
                <td align="center" rowspan="6" className="border bg-pink-400">5</td>
                <td align="center" className="border bg-yellow-200">125</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M110*2</td>
                <td align="center" className="border bg-yellow-200">145</td>
                <td align="center" className="border bg-yellow-200">132</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M115*2</td>
                <td align="center" className="border bg-yellow-200">150</td>
                <td align="center" className="border bg-yellow-200">137</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M120*2</td>
                <td align="center" className="border bg-yellow-200">155</td>
                <td align="center" rowspan="3" className="border bg-pink-400">24</td>
                <td align="center" className="border bg-yellow-200">142</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M125*2</td>
                <td align="center" className="border bg-yellow-200">160</td>
                <td align="center" className="border bg-yellow-200">147</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M130*2</td>
                <td align="center" className="border bg-yellow-200">165</td>
                <td align="center" className="border bg-yellow-200">152</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M135*2</td>
                <td align="center" className="border bg-yellow-200">175</td>
                <td align="center" rowspan="4" className="border bg-pink-400">26</td>
                <td align="center" rowspan="4" className="border bg-yellow-200">14</td>
                <td align="center" rowspan="4" className="border bg-pink-400">6</td>
                <td align="center" className="border bg-yellow-200">160</td>
                <td align="center" rowspan="8" className="border bg-pink-400">3-M10</td>
                <td align="center" rowspan="8" className="border bg-yellow-200">35</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M140*2</td>
                <td align="center" className="border bg-yellow-200">180</td>
                <td align="center" className="border bg-yellow-200">165</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M145*2</td>
                <td align="center" className="border bg-yellow-200">190</td>
                <td align="center" className="border bg-yellow-200">175</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M150*2</td>
                <td align="center" className="border bg-yellow-200">195</td>
                <td align="center" className="border bg-yellow-200">180</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M155*3</td>
                <td align="center" className="border bg-yellow-200">200</td>
                <td align="center" rowspan="4" className="border bg-pink-400">28</td>
                <td align="center" rowspan="4" className="border bg-yellow-200">16</td>
                <td align="center" rowspan="4" className="border bg-pink-400">7</td>
                <td align="center" className="border bg-yellow-200">180</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M160*3</td>
                <td align="center" className="border bg-yellow-200">210</td>
                <td align="center" className="border bg-yellow-200">190</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M165*3</td>
                <td align="center" className="border bg-yellow-200">210</td>
                <td align="center" className="border bg-yellow-200">190</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M170*3</td>
                <td align="center" className="border bg-yellow-200">220</td>
                <td align="center" className="border bg-yellow-200">200</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M180*3</td>
                <td align="center" className="border bg-yellow-200">230</td>
                <td align="center" rowspan="2" className="border bg-pink-400">30</td>
                <td align="center" rowspan="3" className="border bg-yellow-200">18</td>
                <td align="center" rowspan="3" className="border bg-pink-400">8</td>
                <td align="center" className="border bg-yellow-200">205</td>
                <td align="center" rowspan="3" className="border bg-pink-400">3-M12</td>
                <td align="center" rowspan="3" className="border bg-yellow-200">60</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M190*3</td>
                <td align="center" className="border bg-yellow-200">240</td>
                <td align="center" className="border bg-yellow-200">215</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSR M200*3</td>
                <td align="center" className="border bg-yellow-200">250</td>
                <td align="center" className="border bg-pink-400">32</td>
                <td align="center" className="border bg-yellow-200">225</td>
              </tr>              
            </tbody></table></div><br/>
      <Footer />
    </div>
  );
};

export default Ysr;
