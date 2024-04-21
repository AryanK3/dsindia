import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import Link from 'next/link';
const Ysk = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">YSK Clasp Locking</h1>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/ysk.jpg" alt="YSK" className="w-72 h-46 object-cover rounded-lg" />
            </div>  
        </div><br/>
        <p>The locking method utilizes the elasticity of steel itself. It is compelled to lock with axial locking. This product is designed for bad work surroundings and easy let-off nut. Its ability of locking is 3 times as stronger as traditional locking, this is its advantage.For the locking method of YSK, because of the miss of assembly, it can not assure the vertical deflection between ground end and threads.
        </p>
        <div className="mb-6">
        <ul className="list-disc pl-6">
        <li>Material Composition:   SCM440</li>
        <li>Thread Precision:   ISO 4H</li>
        <li>Ground end squarencess: 0.005mm</li>
        <li>Hardness:   HRC 28°~32°</li>
        </ul>
        </div>
        <img
          src='/prod/yskdim.jpg' 
          alt='YSK Dimensions'
          className="w-100"
        />           
      </div><br/>
      <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center" className="border bg-blue-300">Thread</td>
                <td align="center"className="border bg-blue-300">D</td>
                <td align="center" className="border bg-blue-300">h</td>
                <td align="center" className="border bg-blue-300">g</td>
                <td align="center" className="border bg-blue-300">n-m*L</td>
                <td align="center" className="border bg-blue-300">n</td>
                <td align="center" className="border bg-blue-300">b</td>
                <td align="center" className="border bg-blue-300">c</td>
                <td align="center" className="border bg-blue-300">Max Nm</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M16*1.5</td>
                <td align="center" width="10%" className="border bg-yellow-200">34</td>
                <td align="center" width="9%" rowspan="7" className="border bg-pink-400">18</td>
                <td align="center" width="10%" className="border bg-yellow-200">29</td>
                <td align="center" width="14%" rowspan="7" className="border bg-pink-400">4-M4x12</td>
                <td align="center" width="9%" rowspan="16" className="border bg-yellow-200">4</td>
                <td align="center" width="9%" rowspan="7" className="border bg-pink-400">4</td>
                <td align="center" width="10%" className="border bg-yellow-200">24</td>
                <td align="center" rowspan="22" width="6%" className="border bg-pink-400">3.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M17x1</td>
                <td align="center" className="border bg-yellow-200">37</td>
                <td align="center" className="border bg-yellow-200">32</td>
                <td align="center" className="border bg-yellow-200">26</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M18*1.5</td>
                <td align="center" className="border bg-yellow-200">38</td>
                <td align="center" className="border bg-yellow-200">33</td>
                <td align="center" className="border bg-yellow-200">28</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M20*1</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">40</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">35</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">30</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M20*1.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M22*1.5</td>
                <td align="center" className="border bg-yellow-200">42</td>
                <td align="center" className="border bg-yellow-200">37</td>
                <td align="center" className="border bg-yellow-200">32</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M24*1.5</td>
                <td align="center" className="border bg-yellow-200">44</td>
                <td align="center" className="border bg-yellow-200">39</td>
                <td align="center" className="border bg-yellow-200">34</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M25*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">45</td>
                <td align="center" rowspan="4" className="border bg-pink-400">20</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">40</td>
                <td align="center" rowspan="4" className="border bg-pink-400">4-M4x14</td>
                <td align="center" rowspan="9" className="border bg-pink-400">5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">35</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M26*1.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M28*1.5</td>
                <td align="center" className="border bg-yellow-200">46</td>
                <td align="center" className="border bg-yellow-200">43</td>
                <td align="center" className="border bg-yellow-200">37</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M30*1.5</td>
                <td align="center" className="border bg-yellow-200">48</td>
                <td align="center" className="border bg-yellow-200">45</td>
                <td align="center" className="border bg-yellow-200">39</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M32*1.5</td>
                <td align="center" className="border bg-yellow-200">50</td>
                <td align="center" rowspan="6" className="border bg-pink-400">22</td>
                <td align="center" className="border bg-yellow-200">47</td>
                <td align="center" rowspan="5" className="border bg-pink-400">4-M4x16</td>
                <td align="center" className="border bg-yellow-200">41</td>
              </tr>  
              <tr>
                <td align="center" className="border bg-pink-400">YSK M35*1.5</td>
                <td align="center" className="border bg-yellow-200">53</td>
                <td align="center" className="border bg-yellow-200">50</td>
                <td align="center" className="border bg-yellow-200">44</td>
              </tr>  
              <tr>
                <td align="center" className="border bg-pink-400">YSK M38*1.5</td>
                <td align="center" className="border bg-yellow-200">56</td>
                <td align="center" className="border bg-yellow-200">53</td>
                <td align="center" className="border bg-yellow-200">47</td>
              </tr>              
              <tr>
                <td align="center" className="border bg-pink-400">YSK M40*1.5</td>
                <td align="center" className="border bg-yellow-200">58</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">55</td>
                <td align="center" className="border bg-yellow-200">49</td>
              </tr>         
              <tr>
                <td align="center" className="border bg-pink-400">YSK M42*1.5</td>
                <td align="center" className="border bg-yellow-200">60</td>
                <td align="center" className="border bg-yellow-200">51</td>
              </tr>         
              <tr>
                <td align="center" className="border bg-pink-400">YSK M45*1.5</td>
                <td align="center" className="border bg-yellow-200">68</td>
                <td align="center" className="border bg-yellow-200">63</td>
                <td align="center" rowspan="6" className="border bg-pink-400">6-M4x18</td>
                <td align="center" rowspan="29" className="border bg-yellow-200">6</td>
                <td align="center" rowspan="12" className="border bg-pink-400">6</td>
                <td align="center" className="border bg-yellow-200">57</td>
              </tr>         
              <tr>
                <td align="center" className="border bg-pink-400">YSK M48*1.5</td>
                <td align="center" className="border bg-yellow-200">69</td>
                <td align="center" rowspan="5" className="border bg-pink-400">25</td>
                <td align="center" className="border bg-yellow-200">65</td>
                <td align="center" className="border bg-yellow-200">58</td>
              </tr>         
              <tr>
                <td align="center" className="border bg-pink-400">YSK M50*1.5</td>
                <td align="center" className="border bg-yellow-200">70</td>
                <td align="center" className="border bg-yellow-200">66</td>
                <td align="center" className="border bg-yellow-200">60</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M52*1.5</td>
                <td align="center" className="border bg-yellow-200">72</td>
                <td align="center" className="border bg-yellow-200">68</td>
                <td align="center" className="border bg-yellow-200">62</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M55*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">75</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">71</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">65</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M55*2</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M58*1.5</td>
                <td align="center" className="border bg-yellow-200">82</td>
                <td align="center" rowspan="3" className="border bg-pink-400">26</td>
                <td align="center" className="border bg-yellow-200">77</td>
                <td align="center" rowspan="12" className="border bg-pink-400">6-M5x20</td>
                <td align="center" className="border bg-yellow-200">70</td>
                <td align="center" rowspan="12" className="border bg-pink-400">4.5</td>
              </tr>         
              <tr>
                <td align="center" className="border bg-pink-400">YSK M60*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">84</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">79</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">72</td>
              </tr>   
              <tr>
                <td align="center" className="border bg-pink-400">YSK M60*2</td>
              </tr>    
              <tr>
                <td align="center" className="border bg-pink-400">YSK M62*1.5</td>
                <td align="center" className="border bg-yellow-200">86</td>
                <td align="center" rowspan="9" className="border bg-pink-400">28</td>
                <td align="center" className="border bg-yellow-200">82</td>
                <td align="center" className="border bg-yellow-200">75</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M65*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">88</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">84</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">77</td>               
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M65*2</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M68*1.5</td>
                <td align="center" className="border bg-yellow-200">93</td>
                <td align="center" className="border bg-yellow-200">87</td>
                <td align="center" rowspan="6" className="border bg-pink-400">7</td>
                <td align="center" className="border bg-yellow-200">80</td>
              </tr>         
              <tr>
                <td align="center" className="border bg-pink-400">YSK M70*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">95</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">89</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">82</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M70*2</td>
              </tr>    
              <tr>
                <td align="center" className="border bg-pink-400">YSK M72*1.5</td>
                <td align="center" className="border bg-yellow-200">97</td>
                <td align="center" className="border bg-yellow-200">91</td>
                <td align="center" className="border bg-yellow-200">84</td>
              </tr>   
              <tr>
                <td align="center" className="border bg-pink-400">YSK M75*1.5</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">100</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">94</td>
                <td align="center" rowspan="2" className="border bg-yellow-200">87</td>
              </tr>       
              <tr>
                <td align="center" className="border bg-pink-400">YSK M75*2</td>
              </tr>     
              <tr>
                <td align="center" className="border bg-pink-400">YSK M80*2</td>
                <td align="center" className="border bg-yellow-200">110</td>
                <td align="center" rowspan="7" className="border bg-pink-400">32</td>
                <td align="center" className="border bg-yellow-200">103</td>
                <td align="center" rowspan="8" className="border bg-pink-400">6-M6x22</td>
                <td align="center" rowspan="11" className="border bg-pink-400">8</td>
                <td align="center" className="border bg-yellow-200">95</td>
                <td align="center" rowspan="13" className="border bg-pink-400">8</td>
              </tr>  
              <tr>
                <td align="center" className="border bg-pink-400">YSK M85*2</td>
                <td align="center" className="border bg-yellow-200">115</td>
                <td align="center" className="border bg-yellow-200">108</td>
                <td align="center" className="border bg-yellow-200">100</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M90*2</td>
                <td align="center" className="border bg-yellow-200">120</td>
                <td align="center" className="border bg-yellow-200">113</td>
                <td align="center" className="border bg-yellow-200">105</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M95*2</td>
                <td align="center" className="border bg-yellow-200">125</td>
                <td align="center" className="border bg-yellow-200">118</td>
                <td align="center" className="border bg-yellow-200">110</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M100*2</td>
                <td align="center" className="border bg-yellow-200">130</td>
                <td align="center" className="border bg-yellow-200">123</td>
                <td align="center" className="border bg-yellow-200">115</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M105*2</td>
                <td align="center" className="border bg-yellow-200">135</td>
                <td align="center" className="border bg-yellow-200">128</td>
                <td align="center" className="border bg-yellow-200">120</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M110*2</td>
                <td align="center" className="border bg-yellow-200">140</td>
                <td align="center" className="border bg-yellow-200">133</td>
                <td align="center" className="border bg-yellow-200">125</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M115*2</td>
                <td align="center" className="border bg-yellow-200">145</td>
                <td align="center" className="border bg-pink-400">34</td>
                <td align="center" className="border bg-yellow-200">137</td>
                <td align="center" className="border bg-yellow-200">130</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M120*2</td>
                <td align="center" className="border bg-yellow-200">155</td>
                <td align="center" rowspan="3" className="border bg-pink-400">36</td>
                <td align="center" className="border bg-yellow-200">146</td>
                <td align="center" rowspan="3" className="border bg-pink-400">6-M6x25</td>
                <td align="center" className="border bg-yellow-200">136</td>
              </tr>              
              <tr>
                <td align="center" className="border bg-pink-400">YSK M125*2</td>
                <td align="center" className="border bg-yellow-200">160</td>
                <td align="center" className="border bg-yellow-200">150</td>
                <td align="center" className="border bg-yellow-200">140</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M130*2</td>
                <td align="center" className="border bg-yellow-200">165</td>
                <td align="center" className="border bg-yellow-200">155</td>
                <td align="center" className="border bg-yellow-200">148</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">YSK M140*2</td>
                <td align="center" className="border bg-yellow-200">180</td>
                <td align="center" rowspan="2" className="border bg-pink-400">38</td>
                <td align="center" className="border bg-yellow-200">168</td>
                <td align="center" rowspan="2" className="border bg-pink-400">8-M6x25</td>
                <td align="center" rowspan="7" className="border bg-yellow-200">8</td>
                <td align="center" rowspan="7" className="border bg-pink-400">10</td>
                <td align="center" className="border bg-yellow-200">160</td>
              </tr>  
              <tr>
                <td align="center" className="border bg-pink-400">YSK M150*2</td>
                <td align="center" className="border bg-yellow-200">190</td>
                <td align="center" className="border bg-yellow-200">178</td>
                <td align="center" className="border bg-yellow-200">170</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M160*3</td>
                <td align="center" className="border bg-yellow-200">205</td>
                <td align="center" rowspan="5" className="border bg-pink-400">40</td>
                <td align="center" className="border bg-yellow-200">190</td>
                <td align="center" rowspan="5" className="border bg-pink-400">8-M8x30</td>
                <td align="center" className="border bg-yellow-200">178</td>
                <td align="center" rowspan="5" className="border bg-pink-400">18</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M170*3</td>
                <td align="center" className="border bg-yellow-200">215</td>
                <td align="center" className="border bg-yellow-200">200</td>
                <td align="center" className="border bg-yellow-200">193</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M180*3</td>
                <td align="center" className="border bg-yellow-200">230</td>
                <td align="center" className="border bg-yellow-200">213</td>
                <td align="center" className="border bg-yellow-200">205</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M190*3</td>
                <td align="center" className="border bg-yellow-200">240</td>
                <td align="center" className="border bg-yellow-200">223</td>
                <td align="center" className="border bg-yellow-200">215</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">YSK M200*3</td>
                <td align="center" className="border bg-yellow-200">245</td>
                <td align="center" className="border bg-yellow-200">230</td>
                <td align="center" className="border bg-yellow-200">223</td>
              </tr>
            </tbody></table></div><br/>
      <Footer />
    </div>
  );
};

export default Ysk;
