import React from 'react'
import {Link} from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import splash from "../assests/splash-image.jpg"
import logo from "../assests/logo.png"
import NavBar from '../NavBar';

const WelcomeCom = () => {
    const spring = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        delay: 1500,
        config: { mass: 1, tension: 280, friction: 20 }
    });
  return (
    <div>
        <div class="relative h-screen">
            <img src={splash} alt="splash" className="h-full w-full object-cover" />
            <img src={logo} alt="logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="sm: pl-[17%]">
            <Link to="/aktiviteter">
                <animated.button style={spring} className="absolute  bottom-12  w-[249px] h-[54px]
                    text-white bg-[#5E2E53] shadow-md rounded-[10px] hover:bg-[#6C2E63]"
                        >Kom i gang
                </animated.button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCom