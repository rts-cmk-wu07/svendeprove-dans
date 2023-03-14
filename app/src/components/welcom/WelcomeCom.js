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
        <div class="relative">
            <img src={splash} alt="splash" className="bg-cover bg-center md:bg-fixed lg:bg-auto xl:bg-contain 2xl:bg-contain h-screen w-screen" />
            <img src={logo} alt="logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <Link to="/aktiviteter">
                <animated.button style={spring} className="absolute bottom-0   mb-8 w-[249px] h-[54px]
                    text-white bg-[#5E2E53] shadow-md rounded-10 hover:bg-[#6C2E63]"
                        >Kom i gang
                </animated.button>
            </Link>
        </div>
        <NavBar/>
    </div>
  )
}

export default WelcomeCom