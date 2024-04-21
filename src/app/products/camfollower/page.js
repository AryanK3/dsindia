import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';
const CamFollower = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cam Follower</h1>
        <div className="flex justify-center mb-1">
          <div className="text-center">
              <img src="/prod/camfollower.jpg" alt="Cam Follower" className="w-72 h-46 object-cover rounded-lg" />
            </div>  
        </div><br/><br/>   
        <img
          src='/prod/camfollowerdim.jpg' 
          alt='Cam Follower Dimensions'
          className="w-100"
        />         
      </div>
      <div className="flex justify-center">
          <table className="w-75 border">
            <tbody>
              <tr className="border font-bold">
                <td align="center" rowspan="3" colspan="1" className="border bg-blue-300">Model No.</td>
                <td align="center" rowspan="1" colspan="5" className="border bg-blue-300">Main dimensions (in mm)</td>
                <td align="center" rowspan="1" colspan="4" className="border bg-blue-300">Basic load rating (in kN)</td>
              </tr>
              <tr>
                <td align="center" rowspan="2" className="border bg-blue-200">Outer diameter<br/>D</td>
                <td align="center" rowspan="2" className="border bg-blue-200">Threaded<br/>S</td>
                <td align="center" rowspan="2" className="border bg-blue-200">Outer ring width<br/>B</td>
                <td align="center" rowspan="2" className="border bg-blue-200">B1</td>
                <td align="center" rowspan="2" className="border bg-blue-200">Overall length<br/>L</td>
                <td align="center" colspan="2" className="border bg-blue-300">With cage</td>
                <td align="center" colspan="2" className="border bg-blue-300">Full-roller type</td>
              </tr>
              <tr>
                <td align="center" className="border bg-blue-200">Dynamic rating<br/>C</td>
                <td align="center" className="border bg-blue-200">Static rating<br/>C0</td>
                <td align="center" className="border bg-blue-200">Dynamic rating<br/>C</td>
                <td align="center" className="border bg-blue-200">Static rating<br/>C0</td>              
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 5</td>
                <td align="center" className="border bg-yellow-200">13</td>
                <td align="center" className="border bg-pink-400">M5*0.8</td>
                <td align="center" className="border bg-yellow-200">9</td>
                <td align="center" className="border bg-pink-400">10</td>
                <td align="center" className="border bg-yellow-200">23</td>
                <td align="center" className="border bg-pink-400">3.14</td>
                <td align="center" className="border bg-yellow-200">2.77</td>
                <td align="center" className="border bg-pink-400">---</td>
                <td align="center" className="border bg-yellow-200">---</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 6</td>
                <td align="center" className="border bg-yellow-200">16</td>
                <td align="center" className="border bg-pink-400">M6*1</td>
                <td align="center" className="border bg-yellow-200">11</td>
                <td align="center" className="border bg-pink-400">12</td>
                <td align="center" className="border bg-yellow-200">28</td>
                <td align="center" className="border bg-pink-400">3.59</td>
                <td align="center" className="border bg-yellow-200">3.58</td>
                <td align="center" className="border bg-pink-400">6.94</td>
                <td align="center" className="border bg-yellow-200">8.5</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 8</td>
                <td align="center" className="border bg-yellow-200">19</td>
                <td align="center" className="border bg-pink-400">M8*1.25</td>
                <td align="center" className="border bg-yellow-200">11</td>
                <td align="center" className="border bg-pink-400">12</td>
                <td align="center" className="border bg-yellow-200">32</td>
                <td align="center" className="border bg-pink-400">4.17</td>
                <td align="center" className="border bg-yellow-200">4.65</td>
                <td align="center" className="border bg-pink-400">8.13</td>
                <td align="center" className="border bg-yellow-200">11.2</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 10</td>
                <td align="center" className="border bg-yellow-200">22</td>
                <td align="center" className="border bg-pink-400">M10*1.25</td>
                <td align="center" className="border bg-yellow-200">12</td>
                <td align="center" className="border bg-pink-400">13</td>
                <td align="center" className="border bg-yellow-200">36</td>
                <td align="center" className="border bg-pink-400">5.33</td>
                <td align="center" className="border bg-yellow-200">6.78</td>
                <td align="center" className="border bg-pink-400">9.42</td>
                <td align="center" className="border bg-yellow-200">14.3</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 10-1</td>
                <td align="center" className="border bg-yellow-200">26</td>
                <td align="center" className="border bg-pink-400">M10*1.25</td>
                <td align="center" className="border bg-yellow-200">12</td>
                <td align="center" className="border bg-pink-400">13</td>
                <td align="center" className="border bg-yellow-200">36</td>
                <td align="center" className="border bg-pink-400">5.33</td>
                <td align="center" className="border bg-yellow-200">6.78</td>
                <td align="center" className="border bg-pink-400">9.42</td>
                <td align="center" className="border bg-yellow-200">14.3</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 12</td>
                <td align="center" className="border bg-yellow-200">30</td>
                <td align="center" className="border bg-pink-400">M12*1.5</td>
                <td align="center" className="border bg-yellow-200">14</td>
                <td align="center" className="border bg-pink-400">15</td>
                <td align="center" className="border bg-yellow-200">40</td>
                <td align="center" className="border bg-pink-400">7.87</td>
                <td align="center" className="border bg-yellow-200">9.79</td>
                <td align="center" className="border bg-pink-400">13.4</td>
                <td align="center" className="border bg-yellow-200">19.8</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 12-1</td>
                <td align="center" className="border bg-yellow-200">32</td>
                <td align="center" className="border bg-pink-400">M12*1.5</td>
                <td align="center" className="border bg-yellow-200">14</td>
                <td align="center" className="border bg-pink-400">15</td>
                <td align="center" className="border bg-yellow-200">40</td>
                <td align="center" className="border bg-pink-400">7.87</td>
                <td align="center" className="border bg-yellow-200">9.79</td>
                <td align="center" className="border bg-pink-400">13.4</td>
                <td align="center" className="border bg-yellow-200">19.8</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 16</td>
                <td align="center" className="border bg-yellow-200">35</td>
                <td align="center" className="border bg-pink-400">M16*1.5</td>
                <td align="center" className="border bg-yellow-200">18</td>
                <td align="center" className="border bg-pink-400">19.5</td>
                <td align="center" className="border bg-yellow-200">52</td>
                <td align="center" className="border bg-pink-400">12</td>
                <td align="center" className="border bg-yellow-200">18.3</td>
                <td align="center" className="border bg-pink-400">20.6</td>
                <td align="center" className="border bg-yellow-200">37.6</td>
              </tr> 
              <tr>
                <td align="center" className="border bg-pink-400">CF 18</td>
                <td align="center" className="border bg-yellow-200">40</td>
                <td align="center" className="border bg-pink-400">M18*1.5</td>
                <td align="center" className="border bg-yellow-200">20</td>
                <td align="center" className="border bg-pink-400">21.5</td>
                <td align="center" className="border bg-yellow-200">58</td>
                <td align="center" className="border bg-pink-400">14.7</td>
                <td align="center" className="border bg-yellow-200">25.2</td>
                <td align="center" className="border bg-pink-400">25.2</td>
                <td align="center" className="border bg-yellow-200">51.3</td>
              </tr>   
              <tr>
                <td align="center" className="border bg-pink-400">CF 20</td>
                <td align="center" className="border bg-yellow-200">52</td>
                <td align="center" className="border bg-pink-400">M20*1.5</td>
                <td align="center" className="border bg-yellow-200">24</td>
                <td align="center" className="border bg-pink-400">25.5</td>
                <td align="center" className="border bg-yellow-200">66</td>
                <td align="center" className="border bg-pink-400">20.7</td>
                <td align="center" className="border bg-yellow-200">34.8</td>
                <td align="center" className="border bg-pink-400">33.2</td>
                <td align="center" className="border bg-yellow-200">64.8</td>
              </tr>   
              <tr>
                <td align="center" className="border bg-pink-400">CF 20-1</td>
                <td align="center" className="border bg-yellow-200">47</td>
                <td align="center" className="border bg-pink-400">M20*1.5</td>
                <td align="center" className="border bg-yellow-200">24</td>
                <td align="center" className="border bg-pink-400">25.5</td>
                <td align="center" className="border bg-yellow-200">66</td>
                <td align="center" className="border bg-pink-400">20.7</td>
                <td align="center" className="border bg-yellow-200">34.8</td>
                <td align="center" className="border bg-pink-400">33.2</td>
                <td align="center" className="border bg-yellow-200">64.8</td>
              </tr>             
              <tr>
                <td align="center" className="border bg-pink-400">CF 24</td>
                <td align="center" className="border bg-yellow-200">62</td>
                <td align="center" className="border bg-pink-400">M24*1.5</td>
                <td align="center" className="border bg-yellow-200">29</td>
                <td align="center" className="border bg-pink-400">30.5</td>
                <td align="center" className="border bg-yellow-200">80</td>
                <td align="center" className="border bg-pink-400">30.6</td>
                <td align="center" className="border bg-yellow-200">53.2</td>
                <td align="center" className="border bg-pink-400">46.7</td>
                <td align="center" className="border bg-yellow-200">92.9</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 24-1</td>
                <td align="center" className="border bg-yellow-200">72</td>
                <td align="center" className="border bg-pink-400">M24*1.5</td>
                <td align="center" className="border bg-yellow-200">29</td>
                <td align="center" className="border bg-pink-400">30.5</td>
                <td align="center" className="border bg-yellow-200">80</td>
                <td align="center" className="border bg-pink-400">30.6</td>
                <td align="center" className="border bg-yellow-200">53.2</td>
                <td align="center" className="border bg-pink-400">46.7</td>
                <td align="center" className="border bg-yellow-200">92.9</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 30</td>
                <td align="center" className="border bg-yellow-200">80</td>
                <td align="center" className="border bg-pink-400">M30*1.5</td>
                <td align="center" className="border bg-yellow-200">35</td>
                <td align="center" className="border bg-pink-400">37</td>
                <td align="center" className="border bg-yellow-200">100</td>
                <td align="center" className="border bg-pink-400">45.4</td>
                <td align="center" className="border bg-yellow-200">87.6</td>
                <td align="center" className="border bg-pink-400">67.6</td>
                <td align="center" className="border bg-yellow-200">145</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 30-1</td>
                <td align="center" className="border bg-yellow-200">85</td>
                <td align="center" className="border bg-pink-400">M30*1.5</td>
                <td align="center" className="border bg-yellow-200">35</td>
                <td align="center" className="border bg-pink-400">37</td>
                <td align="center" className="border bg-yellow-200">100</td>
                <td align="center" className="border bg-pink-400">45.4</td>
                <td align="center" className="border bg-yellow-200">87.6</td>
                <td align="center" className="border bg-pink-400">67.6</td>
                <td align="center" className="border bg-yellow-200">145</td>
              </tr>
              <tr>
                <td align="center" className="border bg-pink-400">CF 30-2</td>
                <td align="center" className="border bg-yellow-200">90</td>
                <td align="center" className="border bg-pink-400">M30*1.5</td>
                <td align="center" className="border bg-yellow-200">35</td>
                <td align="center" className="border bg-pink-400">37</td>
                <td align="center" className="border bg-yellow-200">100</td>
                <td align="center" className="border bg-pink-400">45.4</td>
                <td align="center" className="border bg-yellow-200">87.6</td>
                <td align="center" className="border bg-pink-400">67.6</td>
                <td align="center" className="border bg-yellow-200">145</td>
              </tr>
            </tbody></table></div><br/>
      <Footer />
    </div>
  );
};

export default CamFollower;
