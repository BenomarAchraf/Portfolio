import React , {useEffect , useState, CSSProperties} from 'react'
import './App.css';
import Loading from './Loading/Loading';
import Navbar from './Navbar/Navbar';
import SectionH from './HomeSection/SectionH';
import About from './About/About';
import Education from './Education/Education';
function App() {
  const [loading ,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[])

  return (
    <div >
      {
        loading? <Loading /> : <div className="App"> 
        <Navbar />
        <SectionH />
        <About />
        <Education />
         </div>
      } 
      
      
    </div>
  );
}

export default App;
/* {
        loading? <Loading /> : <div> home </div>
      } */