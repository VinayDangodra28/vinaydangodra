import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Logo from '../../components/Logo';

export const Banner = () => {
    const logo = useRef(null);
    const logobox = useRef(null);
    const heading = useRef(null);
    const subheading = useRef(null);
    const blobs = useRef([]);
    const chars = useRef([]);
    const multiverseText = useRef(null);

    useEffect(() => {
        // Initial state
        gsap.set([logobox.current, ...blobs.current], {
            opacity: 0,
            y: 50
        });

        // Set initial state for characters and multiverse text
        gsap.set([chars.current, multiverseText.current], {
            y: 50,
            opacity: 0
        });

        // Entry animation
        const tl = gsap.timeline();

        tl.to(blobs.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })
        .to(logobox.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.5")
        .to(chars.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "expo.out",
        }, "-=0.5")
        .to(multiverseText.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3");
    }, []);

    function moveLogo(x, y) {
        gsap.to(logobox.current, {
            transform: `rotateX(${y}deg) rotateY(${x}deg)`,
            ease: "power2.out",
            duration: 2
        });
    }

    const MouseMoving = (e) => {
        let x = e.clientX;
        let y = e.clientY;

        let rect = logo.current.getBoundingClientRect();

        // Calculate xvalue and yvalue
        let xvalue = Math.round(-(rect.x - x + 300) / 10);
        let yvalue = Math.round((rect.y - y + 300) / 10);

        // Limit xvalue to ±30
        xvalue = Math.max(-30, Math.min(60, xvalue));

        moveLogo(xvalue, yvalue);
    };

    const splitText = (text) => {
        return text.split('').map((char, index) => (
            <span 
                key={index} 
                ref={el => chars.current.push(el)}
                style={{ display: 'inline-block' }}
            >
                {char}
            </span>
        ));
    };

    return (
        <div onMouseMove={MouseMoving} className='banner_wrapper'>
            <div className='banner' ref={logo}>
                <div className="blob blob-1" ref={el => blobs.current[0] = el}></div>
                <div className="blob blob-2" ref={el => blobs.current[1] = el}></div>
                <div className="blob blob-3" ref={el => blobs.current[2] = el}></div>
                <div className="blob blob-4" ref={el => blobs.current[3] = el}></div>
                <div className="logo_wrapper">
                    <div className='logo' ref={logobox}>
                        <Logo />
                    </div>
                </div>

                <div className='banner_heading'>
                    <h1 ref={heading}>
                        <span className="first_name">{splitText("Vinay")}</span>{" "}<br />
                        <span className="last_name">{splitText("Dangodra")}</span>
                    </h1>
                    <span ref={subheading}>
                        <span ref={multiverseText}>-Frontend, Backend and Beyond.</span>
                    </span>
                </div>
            </div>
        </div>
    );
};