import React , { useRef, useEffect, useState } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser";
const Contact = ({setNavbar}) => {

    const [Nom, setNom] = useState("");
    const [Mail, setMail] = useState("");
    const [Num, setNum] = useState("");
    const [Sujet, setSujet] = useState("");
    const [Msg, setMsg] = useState("");
    const [Hide, setHide] = useState(false);
    const [Confirmer, setConfirmer] = useState(
        "Votre Msg a été envoyer avec succées"
    );

    const Hidefct = () => {
        setTimeout(() => {
          setHide(false);
        }, 5000);
      };
    
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
        if (!Nom || !Num || !Sujet || !Msg || !Mail) {
          setConfirmer("Tout les champs doivent etre remplies ");
          setHide(true);
          Hidefct();
        } else {
          setConfirmer("Your message has been sent successfully");
          setHide(true);
          Hidefct();
          setNom("");
          setMail("");
          setMsg("");
          setNum("");
          setSujet("");
          emailjs
            .sendForm(
              "service_ztqu21g",
              "template_wexof6s",
              form.current,
              "QUSDvOa32PsRIJbtQ"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        }
      };

  return (
    <section className='contact' id='contact'  onMouseEnter={()=>{
        console.log("change");
        setNavbar("Contact")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <h2 className='Heading'>Contact <span className='Me'>Me!</span> </h2>

        <form ref={form} onSubmit={sendEmail}>
            <div className='input-box'>
                <div className='input-field'>
                    <input type='text'
                     name="Nom"
                     placeholder='Full Name'  
                    value={Nom}
                    onChange={(e) => setNom(e.target.value)}
                    required></input>
                    <span className='focus' ></span>
                </div>
                <div className='input-field'>
                    <input type='text' placeholder='Email Address' 
                    value={Mail}
                    name="Email"
                    onChange={(e) => setMail(e.target.value)}
                    required></input>
                    <span className='focus' ></span>
                </div>
            </div>
            <div className='input-box'>
                <div className='input-field'>
                    <input type='number' placeholder='Mobile Number' 
                    value={Num}
                    name="Telephone"
                    onChange={(e) => setNum(e.target.value)}
                    required></input>
                    <span className='focus' ></span>
                </div>
                <div className='input-field'>
                    <input type='text' placeholder='Email Subject' 
                    value={Sujet}
                    name="Sujet"
                    onChange={(e) => setSujet(e.target.value)}
                    required></input>
                    <span className='focus' ></span>
                </div>
            </div>
            <div className='textarea-field'>
                <textarea name="Message" id='' cols="30" rows="10" placeholder='Your Message'

                onChange={(e) => setMsg(e.target.value)}
                value={Msg}
                
                ></textarea>
                <span className='focus' ></span>
            </div>
            <div className='btn-box btns'>
                <button type='submit' className='btn'>Submit</button>
            </div>
            {Hide && <div className="Msg-Form">{Confirmer}</div>}
        </form>
    </section>
  )
}

export default Contact