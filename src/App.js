import React , {useEffect , useState, CSSProperties} from 'react'
import './App.css';
import Loading from './Loading/Loading';
import Navbar from './Navbar/Navbar';
import SectionH from './HomeSection/SectionH';
import About from './About/About';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
function App() {

  let sections=document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('header nav a');

  window.onscroll=()=>{
    sections.forEach(sec=>{
      let top= window.scrollY;
      let offset= sec.offsetTop-100;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');

      if(top >= offset && top< offset+ height){
        navlinks.forEach(links =>{
            links.classList.remove('Home');
            document.querySelector('header nav a[href*='+id+']').classList.add('Home')
        })
      }
    })

    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100)
  }

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
        <Skills />
        <Contact />
        <Footer />
         </div>
      } 
      
      
    </div>
  );
}

export default App;
/* {
        loading? <Loading /> : <div> home </div>
      } */