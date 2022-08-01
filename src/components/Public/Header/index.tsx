import * as React from 'react';
import logo from './logo.png';
import './Header.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Header() {


    return (
        <ParallaxProvider>
            <Parallax opacity={[4, -1]} speed={-20}>
                <div className="entrada" id='entrada'>
                    <video className="entrada__video" muted autoPlay loop>
                        <source src='/Videos/yogavideo.mp4' type="video/mp4" />
                    </video>
                    <img src={logo} className="entrada__logo" id="entrada__home" alt="logo MetaBhavana" />
                    <h1>Raquel Yoga</h1>
                </div>
            </Parallax>
        </ParallaxProvider>

    )
}

