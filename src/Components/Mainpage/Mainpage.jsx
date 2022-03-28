import React from "react";
import { Link } from "react-router-dom";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo"
import Typed from "typed.js";
import "./Mainpage.scss"


const Mainpage = () => {
  const el = React.useRef(null);
 	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Elect. Engineer &#9889;',
        'Web Developer &#128187;',
        'Photographer &#128248;',
        'Sailor ⚓',
        'Gamer &#128126;',
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
          };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
  <div className="contianer main-container">
     <div className="text-zone">
          <h1>Hi, <span className="emoji">👋</span><br/> I'm 
          <span className='Win'> Win</span><span> Htet, </span><span className="emoji">😎</span></h1>
          <br/><h3><span className="typeString" ref={el} /></h3>
          <h2>I love Electrons and JavaScript <span className="emoji-heart">💖</span> </h2>
          <Link to="/contact" className="flat-btn">Contact me</Link>
      </div>
      <AnimatedLogo/>
  </div>);
};

export default Mainpage;
