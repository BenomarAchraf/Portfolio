import React , {useEffect , useState, CSSProperties} from 'react'
import Battememt from "./battement .svg" 
import HashLoader from "react-spinners/HashLoader"; 
import "./loading.css"
const Loading = () => {
    
    
    const [Quote, setQuote]=useState(true);
    const [Quote1, setQuote1]=useState(true);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#415CD6");
    let [change,setChange]=useState(false)

    useEffect(()=>{
        setQuote(true)
        setTimeout(()=>{
            setQuote(false);
        },5000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setColor("#fefefe");
            setQuote(!Quote)
        },2500)
    },[])
    useEffect(()=>{
        setQuote1(!Quote1)
    },[Quote])
/*
    useEffect(()=> {
    let raw=["#000000","#415CD6","#121B42","#223691","#280c75","#3d1d94","#1d5a94","#05214b","#1c4686"]
    let i=0;
    if(change){
        setTimeout(()=>{
            

            setColor(raw[i++])
            if(i===9) i=0;
        },1000)
        
    }
    },[change])*/

  return (
    <div className='Loading'>
        {
        <div className='Quote-position'>     
            <div className='Quote'>
                “𝕴 𝖉𝖗𝖊𝖆𝖒 𝖒𝖞 𝖕𝖆𝖎𝖓𝖙𝖎𝖓𝖌 𝖆𝖓𝖉 𝕴 𝖕𝖆𝖎𝖓𝖙 𝖒𝖞 𝖉𝖗𝖊𝖆𝖒.”
            </div>
            <div className="HashLoader" >
                <HashLoader color={color}
                    
                    loading={loading}
                    size={120}
                    aria-label="Loading Spinner"
                    data-testid="loader"/>
            </div>
            {Quote1&&
                <div className='Quote1'>
                𝒱𝒾𝓃𝒸𝑒𝓃𝓉 𝒲𝒾𝓁𝓁𝑒𝓂 𝓋𝒶𝓃 𝒢𝑜𝑔𝒽
            </div>}
        </div>}
        
    </div>
    
  )
}

export default Loading
/*<img src={Battememt} className="image1"></img> */